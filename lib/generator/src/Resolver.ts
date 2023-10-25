import path from "node:path";
import crypto from "node:crypto";
import { BaseDescriptor, FileDescriptor } from "@catfish/parser";
import { filePathToPseudoNamespace } from "./utils";
import { Import, ProjectContext } from "./ProjectContext";

export interface ResolvedThing {
    id: string
    name: string
    desc: BaseDescriptor
    file: string
}

export interface ResolvedThingImport extends ResolvedThing {
    importPath: string
    importName: string
}

export const ResolverSymbol = Symbol('resolver');

export type ResolverNode = {
    [node: string]: ResolverNode,
    [ResolverSymbol]: Map<string, ResolvedThing[]>,
}

export class Resolver {
    private readonly registry: ResolverNode = { [ResolverSymbol]: new Map() }

    private capturedResolves: ResolvedThing[] = []
    private isCaptured = false;

    constructor(private readonly projectContext: ProjectContext) {}

    register(namespace: string, thingDesc: BaseDescriptor, thingName: string | ((desc: BaseDescriptor) => string), fileName: string | ((desc: FileDescriptor, ctx: ProjectContext) => string)): ResolvedThing {
        const thingProtofullname = thingDesc.fullname;
        const thingName_ = typeof thingName === 'function' ? thingName(thingDesc) : thingName;
        const fileName_ = typeof fileName === 'function' ? fileName(thingDesc.fileDescriptor, this.projectContext) : fileName;

        const node = this.findNode(namespace);

        if (!node[ResolverSymbol].has(thingProtofullname)) {
            node[ResolverSymbol].set(thingProtofullname, [])
        }

        const things = node[ResolverSymbol].get(thingProtofullname)!;
        const thing: ResolvedThing = {
            id: 'i_' + crypto.createHash("md5").update(thingName_ + fileName_ + thingDesc.fullpath, "binary").digest("hex"),
            name: thingName_,
            desc: thingDesc,
            file: fileName_,
        };
        things.push(thing)

        if (this.isCaptured) {
            this.capturedResolves.push(thing)
        }

        return thing;
    }

    resolveByNode(node: ResolverNode, thingDesc: BaseDescriptor, file: FileDescriptor, protoType?: string): ResolvedThingImport[] {
        const result: ResolvedThingImport[] = [];

        const stack: ResolverNode[] = [];
        stack.push(node)

        while (stack.length > 0) {
            const currentNode = stack.pop()!
            const resolvers = currentNode[ResolverSymbol].get(protoType ?? thingDesc.fullname)

            if (resolvers && resolvers.length) {
                for (const thing of resolvers) {
                    const resolvedThingImport = this.getResolvedThingImport(thing, file);
                    result.push(resolvedThingImport)
                }
            }

            stack.push(...Object.getOwnPropertyNames(currentNode).map(prop => currentNode[prop]))
        }

        return result;
    }

    resolveByNamespace(namespace: string | string[], thingDesc: BaseDescriptor, file: FileDescriptor, protoType?: string): ResolvedThingImport[] {
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

    resolveOne(namespace: string | string[], thingDesc: BaseDescriptor, file: FileDescriptor, protoType?: string): ResolvedThingImport {
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

    resolveFullTypeName(namespace: string | string[], thingDesc: BaseDescriptor, file: FileDescriptor, protoType?: string, ignorePreffixInCurrentFile = true): string {
        const resolvedType = this.resolveOne(namespace, thingDesc, file, protoType);

        if (ignorePreffixInCurrentFile && resolvedType.desc.fileDescriptor === file) {
            return resolvedType.name
        } else {
            return `${resolvedType.importName}.${resolvedType.name}`
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

    capture(): () => ResolvedThing[] {
        this.isCaptured = true;

        return () => {
            this.isCaptured = false;
            const result = this.capturedResolves;
            this.capturedResolves = [];
            return result;
        }
    }

    getResolvedThingImport(thing: ResolvedThing, file: FileDescriptor): ResolvedThingImport {
        const targetPath = path.dirname(this.projectContext.getProtoFilePath(thing.desc.fileDescriptor))
        const sourcePath = path.dirname(this.projectContext.getProtoFilePath(file))
        const pathPreffix = getPathPreffix(sourcePath, targetPath)

        return {
            ...thing,
            importName: thing.id,
            importPath: pathPreffix + '/' + path.basename(thing.file),
        }
    }

    getImports(resolvedThings: ResolvedThing[], file: FileDescriptor): Import[] {
        const imports: Map<string, Import> = new Map();
        
        for (const thing of resolvedThings) {
            // TODO: Fix thing.desc.fileDescriptor !== file
            if (!imports.has(thing.file) && thing.desc.fileDescriptor !== file) {
                const resolvedThing = this.getResolvedThingImport(thing, file);

                imports.set(thing.file, {
                    name: resolvedThing.importName,
                    path: resolvedThing.importPath,
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
    let j = 0;

    let result = './';
    while (true) {
        const s = sourceArr[i];
        const t = targetArr[j];

        if (i >= sourceArr.length) {
            result += targetArr.slice(j).join('/');
            break;
        }

        if (j >= targetArr.length) {
            result += '../'.repeat(sourceArr.length - i);
            break;
        }

        if (s !== t) {
            result += '../'.repeat(sourceArr.length - i);
            result += targetArr.slice(j).join('/');
            break;
        }

        if (s === t) {
            i++;
            j++;
        }
    }

    return './' + path.normalize(result).split(path.sep).filter(p => p !== '').join('/');
}
