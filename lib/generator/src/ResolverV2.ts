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
    fullImport: string
    importPath: string
    importName: string
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

export class Resolver {
    private readonly registry: ResolverNode = { [ResolverSymbol]: new Map() }

    private captured: ResolvedThingImport[] = []
    private isCaptured = false;

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
            }, 100)

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

                        if (this.isCaptured) {
                            this.captured.push(foundResolvedThingImport)
                        }

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

    async resolveRelativeTypeName(namespace: string | string[], thingDesc: BaseDescriptor, file: FileDescriptor, fileName: string | ((desc: FileDescriptor, ctx: ProjectContext) => string), protoType?: string, ignorePreffixInCurrentFile = true): Promise<string> {
        const fileName_ = typeof fileName === 'function' ? fileName(file, this.projectContext) : fileName
        const resolvedType = await this.resolveByNamespace(namespace, thingDesc, file, protoType);

        if (ignorePreffixInCurrentFile && resolvedType.file === fileName_) {
            return resolvedType.fullname
        } else {
            return `${resolvedType.importName}.${resolvedType.fullname}`
        }
    }

    async tryResolveRelativeTypeName(namespace: string | string[], thingDesc: BaseDescriptor, file: FileDescriptor, fileName: string | ((desc: FileDescriptor, ctx: ProjectContext) => string), protoType?: string, ignorePreffixInCurrentFile = true): Promise<string | null> {
        try {
            return await this.resolveRelativeTypeName(namespace, thingDesc, file, fileName, protoType ,ignorePreffixInCurrentFile)
        } catch {
            return Promise.resolve(null);
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

    capture(): () => ResolvedThingImport[] {
        this.isCaptured = true;

        return () => {
            this.isCaptured = false;
            const result = this.captured;
            this.captured = [];
            return result;
        }
    }

    getResolvedThingImport(thing: ResolvedThing, file: FileDescriptor): ResolvedThingImport {
        const targetPath = path.dirname(this.projectContext.getProtoFilePath(thing.desc.fileDescriptor))
        const sourcePath = path.dirname(this.projectContext.getProtoFilePath(file))
        const pathPreffix = getPathPreffix(sourcePath, targetPath)

        return {
            ...thing,
            fullImport: `${thing.importId}.${thing.fullname}`,
            importName: thing.importId,
            importPath: pathPreffix + '/' + path.basename(thing.file),
        }
    }

    getImports(resolvedThings: ResolvedThingImport[], file: FileDescriptor, fileName: string | ((desc: FileDescriptor, ctx: ProjectContext) => string)): Import[] {
        const fileName_ = typeof fileName === 'function' ? fileName(file, this.projectContext) : fileName
        const imports: Map<string, Import> = new Map();
        
        for (const thing of resolvedThings) {
            if (!imports.has(thing.file) && thing.file !== fileName_) {
                imports.set(thing.file, {
                    name: thing.importName,
                    path: thing.importPath,
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
