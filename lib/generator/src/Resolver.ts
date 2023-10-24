import path from "node:path";
import { BaseDescriptor, FileDescriptor } from "@catfish/parser";
import { filePathToPseudoNamespace } from "./utils";
import { ProjectContext } from "./ProjectContext";

interface ResolvedThing {
    name: string
    desc: BaseDescriptor
}

interface ResolvedThingImport extends ResolvedThing {
    importPath: string
    importName: string
}

export class Resolver {
    private readonly registry: Record<string, any> = {}

    register(namespace: string, fullname: string, desc: BaseDescriptor): string {
        const resolver = this.findResolver(namespace, fullname);

        if (!(resolver instanceof ThingResolver)) {
            throw new Error(`Connot find thing resolver by path ${path}`)
        }

        return resolver.register(fullname, desc);
    }

    resolve(path: string, file: FileDescriptor): ResolvedThingImport[] {
        const [fullname, resolver] = this.findResolver(path);

        if (!(resolver instanceof ThingResolver)) {
            throw new Error(`Connot find thing resolver by path ${path}`)
        }

        return resolver.resolve(fullname, file)
    }

    createNamespace(namespace: string): Record<string, any> {
        const stack = namespace.split('@');

        let currentNode = this.registry;
        while (stack.length > 0) {
            const nodeName = stack.shift()!;

            if (typeof currentNode[nodeName] === 'undefined') {
                currentNode[nodeName] = { resolver: null }
            }

            currentNode = currentNode[nodeName]
        }

        return currentNode
    }

    findResolver(path: string):  {
        const splitted = path.split('@');

        if (splitted[0] !== this.id) {
            throw new Error(`Cannot find resolver by path ${path}`)
        }

        if (splitted.length < 2) {
            throw new Error(`Incorrect resolver path ${path}`)
        }

        const found = this.resolvers.find(r => r.id === splitted[1])

        if (!found) {
            throw new Error(`Cannot find resolver by path ${path}`)
        }

        if (found instanceof ResolversGroup) {
            return found.findResolver(splitted.slice(1).join('@'))
        }

        return [splitted[1], found];
    }
}

export class ThingResolver {
    private readonly registry: Map<string, ResolvedThing> = new Map() // key - thing_fullname

    constructor(
        private readonly projectCtx: ProjectContext,
        private readonly thingNameBuilder: (thing: BaseDescriptor) => string,
        private readonly fileNameBuilder: (file: FileDescriptor) => string,
    ) { }

    resolve(fullpath: string, file: FileDescriptor): ResolvedThingImport[] {
        if (!this.registry.has(fullpath)) {
            throw new Error(`Cannot resolve thing ${fullpath}`)
        }

        const thing = this.registry.get(fullpath)!

        const sourcePath = path.dirname(path.normalize(this.projectCtx.getProtoFilePath(thing.desc.fileDescriptor)))
        const targetPath = path.dirname(path.normalize(this.projectCtx.getProtoFilePath(file)))
        const pathPreffix = getPathPreffix(sourcePath, targetPath)

        return [{
            ...thing,
            importName: filePathToPseudoNamespace(thing.desc.fullpath),
            importPath: pathPreffix + this.fileNameBuilder(thing.desc.fileDescriptor),
        }]
    }

    register(fullname: string, desc: BaseDescriptor): string {
        const name = this.thingNameBuilder(desc);
        this.registry.set(fullname, { desc, name });
        return name;
    }
}

export class ResolversGroup implements IResolver {
    private readonly resolvers: IResolver[] = [];

    constructor(public readonly id: string, initialResolvers?: IResolver[]) {
        for (const resolver of initialResolvers ?? []) {
            this.resolvers.push(resolver);
        }
    }

}

export const getPathPreffix = (source: string, target: string) => {
    const sourceArr = source.split('/');
    const targetArr = target.split('/');

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

        if (s === t) {
            i++;
            j++;
        } else {
            result += '../'.repeat(sourceArr.length - i);
            result += targetArr.slice(j).join('/');
            break;
        }
    }

    return result;
}
