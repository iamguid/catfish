import path from "node:path";
import crypto from "node:crypto";
import { BaseDescriptor, FileDescriptor } from "@catfish/parser";
import { Import, ProjectContext } from "./ProjectContext";

export interface ResolvedThing {
    importId: string
    fullname: string
    name: string
    desc: BaseDescriptor
    file: string
}

export interface ResolvedThingImport extends ResolvedThing {
    fullimport: string
    importpath: string
    importname: string
}

export interface IResolverV2 {
    define(namespace: string, thingDesc: BaseDescriptor, thingName: string | ((desc: BaseDescriptor) => string), fileName: string | ((desc: FileDescriptor, ctx: ProjectContext) => string)): ResolvedThing
    resolveByNode(node: ResolverNode, thingDesc: BaseDescriptor, file: FileDescriptor, protoType?: string): Promise<ResolvedThingImport>
    resolveByNamespace(namespace: string | string[], thingDesc: BaseDescriptor, file: FileDescriptor, protoType?: string): Promise<ResolvedThingImport>
    getImports(resolvedThings: ResolvedThingImport[], file: FileDescriptor, fileName: string | ((desc: FileDescriptor, ctx: ProjectContext) => string)): Import[]
    getRelativeTypeName(thing: ResolvedThingImport, file: FileDescriptor, fileName: string | ((desc: FileDescriptor, ctx: ProjectContext) => string)): string
}

export const ResolverSymbol = Symbol('resolver');

export type ResolverNode = {
    [node: string]: ResolverNode,
    [ResolverSymbol]: Map<string, ResolvedThing[]>,
}

const getImportId = (desc: BaseDescriptor) => {
    return 'i' + crypto
        .createHash("md5")
        .update(desc.fullname, "binary")
        .digest("hex")
}

export class ResolverV2 implements IResolverV2 {
    private readonly registry: ResolverNode = { [ResolverSymbol]: new Map() }

    private thingResolveTimeoutsMap: Map<string, NodeJS.Timeout[]> = new Map(); // key - thing fullname

    constructor(private readonly projectContext: ProjectContext) {}

    define(namespace: string, thingDesc: BaseDescriptor, thingName: string | ((desc: BaseDescriptor) => string), fileName: string | ((desc: FileDescriptor, ctx: ProjectContext) => string)): ResolvedThing {
        const thingProtofullname = thingDesc.fullname;
        const thingName_ = typeof thingName === 'function' ? thingName(thingDesc) : thingName;
        const fileName_ = typeof fileName === 'function' ? fileName(thingDesc.fileDescriptor, this.projectContext) : fileName;
        const thingFullname = `${thingDesc.namespace === '' ? '' : thingDesc.namespace + '.'}${thingName_}`;

        const node = this.findNode(namespace);

        if (!node[ResolverSymbol].has(thingProtofullname)) {
            node[ResolverSymbol].set(thingProtofullname, [])
        }

        const things = node[ResolverSymbol].get(thingProtofullname)!;
        const thing: ResolvedThing = {
            importId: getImportId(thingDesc),
            fullname: thingFullname,
            name: thingName_,
            desc: thingDesc,
            file: fileName_,
        };

        things.push(thing)

        if (!this.thingResolveTimeoutsMap.has(thing.importId)) {
            this.thingResolveTimeoutsMap.set(thing.importId, [])
        } 
        
        // Recall resolving tasks
        const timeouts = this.thingResolveTimeoutsMap.get(thing.importId)!
        for (const timeout of timeouts) {
            timeout.refresh(); 
        }

        return thing;
    }

    async resolveByNode(node: ResolverNode, thingDesc: BaseDescriptor, file: FileDescriptor, protoType?: string): Promise<ResolvedThingImport> {
        const resultType = protoType ?? thingDesc.fullname;
        const thingImportId = getImportId(thingDesc);

        return new Promise<ResolvedThingImport>((resolve, reject) => {
            let isResolved = false;

            const errorTimeoutTimer = setTimeout(() => {
                if (!isResolved) {
                    reject(new Error(`Cannot resolve type ${resultType}`))
                }
            }, 5000)

            const checkThingTask = setTimeout(() => {
                const things = node[ResolverSymbol].get(resultType)

                if (things && things.length > 0) {
                    const filteredThings = things.filter(t => t.desc === thingDesc)

                    if (filteredThings.length > 1) {
                        reject(new Error(`Found many types (${things.map(t => t.fullname).join(', ')})`))
                    }

                    if (filteredThings.length === 1) {
                        isResolved = true;
                        errorTimeoutTimer.unref()

                        const foundResolvedThingImport = this.getResolvedThingImport(filteredThings[0], file)

                        // Remove task
                        const tasks = this.thingResolveTimeoutsMap.get(thingImportId)!
                        this.thingResolveTimeoutsMap.set(thingImportId, tasks.filter(t => t === checkThingTask))

                        resolve(foundResolvedThingImport);
                    }
                }
            })

            // Add task
            if (!this.thingResolveTimeoutsMap.has(thingImportId)) {
                this.thingResolveTimeoutsMap.set(thingImportId, [])
            }

            const tasks = this.thingResolveTimeoutsMap.get(thingImportId)!
            tasks.push(checkThingTask)
        })
    }

    async resolveByNamespace(namespace: string | string[], thingDesc: BaseDescriptor, file: FileDescriptor, protoType?: string): Promise<ResolvedThingImport> {
        if (Array.isArray(namespace)) {
            for (const ns of namespace) {
                const node = this.findNode(ns);
                return this.resolveByNode(node, thingDesc, file, protoType);
            }
        }

        const node = this.findNode(namespace as string);
        return this.resolveByNode(node, thingDesc, file, protoType);
    }

    getRelativeTypeName(thing: ResolvedThingImport, file: FileDescriptor, fileName: string | ((desc: FileDescriptor, ctx: ProjectContext) => string)): string {
        const fileName_ = typeof fileName === 'function' ? fileName(file, this.projectContext) : fileName

        if (thing.file === fileName_) {
            return thing.fullname
        } else {
            return thing.fullimport
        }
    }

    findNode(namespace: string): ResolverNode {
        const stack = namespace.split('.');

        let currentNode = this.registry;
        while (stack.length > 0) {
            const nodeName = stack.shift()!;

            if (typeof currentNode[nodeName] === 'undefined') {
                currentNode[nodeName] = { [ResolverSymbol]: new Map() }
            }

            currentNode = currentNode[nodeName]
        }

        return currentNode
    }

    getCaptureContext(): IResolverV2 & { stopCapture(): ResolvedThingImport[] } {
        const captured: ResolvedThingImport[] = []

        const define = (namespace: string, thingDesc: BaseDescriptor, thingName: string | ((desc: BaseDescriptor) => string), fileName: string | ((desc: FileDescriptor, ctx: ProjectContext) => string)): ResolvedThing => {
            return this.define(namespace, thingDesc, thingName, fileName)
        }

        const resolveByNode = async (node: ResolverNode, thingDesc: BaseDescriptor, file: FileDescriptor, protoType?: string): Promise<ResolvedThingImport> => {
            const result = await this.resolveByNode(node, thingDesc, file, protoType)
            captured.push(result)
            return result;
        }

        const resolveByNamespace = async (namespace: string | string[], thingDesc: BaseDescriptor, file: FileDescriptor, protoType?: string): Promise<ResolvedThingImport> => {
            const result = await this.resolveByNamespace(namespace, thingDesc, file, protoType)
            captured.push(result)
            return result;
        }

        const getImports = (resolvedThings: ResolvedThingImport[], file: FileDescriptor, fileName: string | ((desc: FileDescriptor, ctx: ProjectContext) => string)): Import[] => {
            return this.getImports(resolvedThings, file, fileName)
        }

        const getRelativeTypeName = (thing: ResolvedThingImport, file: FileDescriptor, fileName: string | ((desc: FileDescriptor, ctx: ProjectContext) => string)): string => {
            return this.getRelativeTypeName(thing, file, fileName)
        }

        const stopCapture = (): ResolvedThingImport[] => {
            return captured;
        }

        return {
            define,
            resolveByNode,
            resolveByNamespace,
            getImports,
            getRelativeTypeName,
            stopCapture
        }
    }

    private getResolvedThingImport(thing: ResolvedThing, file: FileDescriptor): ResolvedThingImport {
        const targetPath = path.dirname(this.projectContext.getProtoFilePath(thing.desc.fileDescriptor))
        const sourcePath = path.dirname(this.projectContext.getProtoFilePath(file))
        const pathPreffix = getPathPreffix(sourcePath, targetPath)

        return {
            ...thing,
            fullimport: `${thing.importId}.${thing.fullname}`,
            importname: thing.importId,
            importpath: pathPreffix + '/' + path.basename(thing.file),
        }
    }

    getImports(resolvedThings: ResolvedThingImport[], file: FileDescriptor, fileName: string | ((desc: FileDescriptor, ctx: ProjectContext) => string)): Import[] {
        const fileName_ = typeof fileName === 'function' ? fileName(file, this.projectContext) : fileName
        const imports: Map<string, Import> = new Map();
        
        for (const thing of resolvedThings) {
            if (!imports.has(thing.file) && thing.file !== fileName_) {
                imports.set(thing.file, {
                    name: thing.importname,
                    path: thing.importpath,
                })
            }
        }
      
        return Array.from(imports.values());
    }
}

export const getPathPreffix = (source: string, target: string) => {
    source = source === '' || source === '.' ? '/' : source;
    target = target === '' || target === '.' ? '/' : target;

    const sourceArr = path.normalize(source).split(path.sep).filter(p => p !== '');
    const targetArr = path.normalize(target).split(path.sep).filter(p => p !== '');

    let i = 0;

    let result = './';
    while (true) {
        const s = sourceArr[i];
        const t = targetArr[i];

        if (i >= sourceArr.length) {
            result += targetArr.slice(i).join('/');
            break;
        }

        if (i >= targetArr.length) {
            result += '../'.repeat(sourceArr.length - i);
            break;
        }

        if (s !== t) {
            result += '../'.repeat(sourceArr.length - i);
            result += targetArr.slice(i).join('/');
            break;
        }

        if (s === t) {
            i++;
        }
    }

    return './' + path.normalize(result).split(path.sep).filter(p => p !== '').join('/');
}
