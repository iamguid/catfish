import path from "node:path";
import crypto from "node:crypto";
import { BaseDescriptor, FileDescriptor } from "@catfish/parser";
import { Import, ProjectContext } from "./ProjectContext";

export interface ResolvedThing {
    importId: string
    uniqueId: string
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

const getImportThingId = (desc: BaseDescriptor) => {
    return 'i' + crypto
        .createHash("md5")
        .update(desc.fileDescriptor.package + desc.fullname, "binary")
        .digest("hex")
}

const getThingId = (desc: BaseDescriptor, thingName: string) => {
    return 'i' + crypto
        .createHash("md5")
        .update(desc.fileDescriptor.package + desc.fullname + thingName, "binary")
        .digest("hex")
}

export class Resolver {
    private readonly registry: ResolverNode = { [ResolverSymbol]: new Map() }

    private captured: ResolvedThingImport[] = []
    private isCaptured = false;

    private waitingToResolveMap: Map<string, () => void> = new Map();

    constructor(private readonly projectContext: ProjectContext) {}

    define(namespace: string, thingDesc: BaseDescriptor, thingName: string | ((desc: BaseDescriptor) => string), fileName: string | ((desc: FileDescriptor, ctx: ProjectContext) => string)): ResolvedThing {
        const thingProtofullname = thingDesc.fullname;
        thingName = typeof thingName === 'function' ? thingName(thingDesc) : thingName;
        fileName = typeof fileName === 'function' ? fileName(thingDesc.fileDescriptor, this.projectContext) : fileName;
        const thingFullname = `${thingDesc.namespace === '' ? '' : thingDesc.namespace + '.'}${thingName}`;

        const node = this.findNode(namespace);

        if (!node[ResolverSymbol].has(thingProtofullname)) {
            node[ResolverSymbol].set(thingProtofullname, [])
        }

        const things = node[ResolverSymbol].get(thingProtofullname)!;
        const thing: ResolvedThing = {
            importId: getImportThingId(thingDesc),
            uniqueId: getThingId(thingDesc, thingName),
            fullname: thingFullname,
            name: thingName,
            desc: thingDesc,
            file: fileName,
        };

        things.push(thing)

        // Resolve waiting promise
        if (this.waitingToResolveMap.has(thing.uniqueId)) {
            this.waitingToResolveMap.get(thing.uniqueId)!()
        }

        return thing;
    }

    async resolveByNode(node: ResolverNode, thingDesc: BaseDescriptor, file: FileDescriptor, protoType?: string): Promise<ResolvedThingImport> {
        return new Promise((resolve) => {
            const things = node[ResolverSymbol].get(protoType ?? thingDesc.fullname)

            if (things && things.length > 0) {
                const firstThing = things[0];
                return this.getResolvedThingImport(things[0], file);
            } else {
                throw new Error(`Cannot resolve type ${thingDesc.fullpath}`)
            }
        })
    }

    async resolveByNamespace(namespace: string | string[], thingDesc: BaseDescriptor, file: FileDescriptor, protoType?: string): Promise<ResolvedThingImport[]> {
        const resolved: ResolvedThingImport[] = [];

        if (Array.isArray(namespace)) {
            for (const ns of namespace) {
                const node = this.findNode(ns);
                const part = this.resolveByNode(node, thingDesc, file, protoType);
                resolved.push(...part)
            }
        } else {
            const node = this.findNode(namespace);
            const part = this.resolveByNode(node, thingDesc, file, protoType);
            resolved.push(...part)
        }

        return resolved;
    }

    async resolveOne(namespace: string | string[], thingDesc: BaseDescriptor, file: FileDescriptor, protoType?: string): Promise<ResolvedThingImport> {
        const resolvedTypes = this.resolveByNamespace(namespace, thingDesc, file, protoType)
        const filteredTypes = resolvedTypes.filter(t => t.desc === thingDesc)

        if (filteredTypes.length === 0) {
            throw new Error(`Cannot resolve type ${protoType}`)
        }

        if (filteredTypes.length !== 1) {
            throw new Error(`Found many types (${filteredTypes.map(t => t.name).join(', ')})`)
        }

        return filteredTypes[0]
    }

    async tryResolveOne(namespace: string | string[], thingDesc: BaseDescriptor, file: FileDescriptor, protoType?: string): Promise<ResolvedThingImport | null> {
        try {
            return this.resolveOne(namespace, thingDesc, file, protoType)
        } catch {
            return null
        }
    }

    async resolveRelativeTypeName(namespace: string | string[], thingDesc: BaseDescriptor, file: FileDescriptor, fileName: string | ((desc: FileDescriptor, ctx: ProjectContext) => string), protoType?: string, ignorePreffixInCurrentFile = true): Promise<string> {
        const fileName_ = typeof fileName === 'function' ? fileName(file, this.projectContext) : fileName
        const resolvedType = this.resolveOne(namespace, thingDesc, file, protoType);

        if (ignorePreffixInCurrentFile && resolvedType.file === fileName_) {
            return resolvedType.fullname
        } else {
            return `${resolvedType.importName}.${resolvedType.fullname}`
        }
    }

    async tryResolveRelativeTypeName(namespace: string | string[], thingDesc: BaseDescriptor, file: FileDescriptor, fileName: string | ((desc: FileDescriptor, ctx: ProjectContext) => string), protoType?: string, ignorePreffixInCurrentFile = true): Promise<string> {
        try {
            return this.resolveRelativeTypeName(namespace, thingDesc, file, fileName, protoType ,ignorePreffixInCurrentFile)
        } catch {
            return null;
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
