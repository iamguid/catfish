import fs from 'node:fs';
import path from 'node:path';

import { BaseDescriptor, FileDescriptor, parse } from "@catfish/parser"
import { walkByFiles } from "./fswalker"
import { ProjectOptions } from './Project';
import { googleWellKnownTypesToProtoFilesMap } from './wellKnownTypes';
import { Resolver } from './Resolver';
import { ResolverV2 } from './ResolverV2';
import { TypeMarker, getTypeMarker } from './utils';

export interface Import {
    name: string
    path: string
}

export interface TypeInfo {
    protoType: string
    typeMarker: TypeMarker
    descriptor?: BaseDescriptor
}

export interface Dependency {
    type: 'weak' | 'public'
    descriptor: FileDescriptor
}

export class ProjectContext {
    private readonly protoFiles = new Map<string, FileDescriptor>; // key - relative path to proto file
    private readonly filesPaths = new Map<FileDescriptor, string>; // value - relative path to proto file
    private readonly dependencies = new Map<FileDescriptor, Dependency[]>;

    public readonly resolver: Resolver;
    public readonly resolverV2: ResolverV2;
    
    constructor(private readonly config: ProjectOptions) {
        this.resolver = new Resolver(this);
        this.resolverV2 = new ResolverV2(this);
    }

    // TODO: Make async
    load() {
        // Load protobuf well known types
        for (const [googlePath, realPath] of Object.entries(googleWellKnownTypesToProtoFilesMap)) {
            const parsed = parse(fs.readFileSync(realPath, 'utf8'));
            this.protoFiles.set(googlePath, parsed);
        }

        // // Load catfish well known types
        // for (const [catfishPath, realPath] of Object.entries(catfishWellKnownTypesToProtoFilesMap)) {
        //     const parsed = parse(fs.readFileSync(realPath, 'utf8'));
        //     this.protoFiles.set(catfishPath, parsed);
        // }

        // Load project files
        walkByFiles({
            basePath: this.config.protoDirPath,
            filePath: "",
            each: ({ filePath }) => {
                if (path.extname(filePath) === '.proto') {
                    try {
                        const parsed = parse(fs.readFileSync(path.join(this.config.protoDirPath, filePath), 'utf8'));
                        this.protoFiles.set(path.normalize(filePath).split(path.sep).join('/'), parsed);
                    } catch (e) {
                        console.error(`Cannot parse file ${filePath}, ${(e as Error).message}`)
                    }
                }
            },
        });
    }

    // TODO: Make async
    resolve() {
        const resolveRecursive = (path: string, descriptor: FileDescriptor): Dependency[] => {
            const result: Dependency[] = [];

            for (const imprt of descriptor.imports) {
                if (!this.protoFiles.has(imprt.path)) {
                    throw new Error(`Cannot resolve import ${imprt.path} in file ${path}`)
                }
                
                const dependency = this.protoFiles.get(imprt.path)!;

                if (imprt.type === 'public') {
                    result.push({ type: 'public', descriptor: dependency });
                    result.push(...resolveRecursive(imprt.path, dependency));
                } else {
                    result.push({ type: 'weak', descriptor: dependency });
                }
            }

            return result;
        }

        for (const [path, descriptor] of this.protoFiles.entries()) {
            this.filesPaths.set(descriptor, path);

            if (!this.dependencies.has(descriptor)) {
                this.dependencies.set(descriptor, resolveRecursive(path, descriptor));
            }
        }
    }

    getFiles(includeWKT = false) {
        const files = Array.from(this.protoFiles.values());

        if (includeWKT) {
            return files;
        } else {
            return files.filter(f => {
                const filePath = this.getProtoFilePath(f)
                return !(filePath in googleWellKnownTypesToProtoFilesMap)
            })
        }
    }

    getProtoFilePath(descriptor: FileDescriptor) {
        if (!this.filesPaths.has(descriptor)) {
            throw new Error(`Cannot resolve file path by descriptor for file ${this.getProtoFilePath(descriptor)}`)
        }

        return this.filesPaths.get(descriptor)!;
    }

    getDependencies(descriptor: FileDescriptor, includePublic = false) {
        if (!this.dependencies.has(descriptor)) {
            throw new Error(`There is no dependencies of file ${this.getProtoFilePath(descriptor)}`)
        }

        const dependencies = this.dependencies.get(descriptor)!;

        if (includePublic) {
            return dependencies.map(d => d.descriptor);
        } else {
            return dependencies.filter(d => d.type !== 'public').map(d => d.descriptor)
        }
    }

    getProtoTypeDescriptor(descriptor: FileDescriptor, fullname: string) {
        const resolvedType = this.resolveType(descriptor, fullname);

        if (!resolvedType) {
            throw new Error(`There is no type descriptor ${fullname} for file ${this.getProtoFilePath(descriptor)}`)
        }

        return resolvedType;
    }

    getTypeInfo(descriptor: FileDescriptor, protoType: string) {
        return this.extractTypeInfo(descriptor, protoType);
    }
    
    // TODO: Make cache
    private resolveType(fileDescriptor: FileDescriptor, fullname: string): BaseDescriptor | null {
        if (fileDescriptor.registry.descriptors.has(fullname)) {
            return fileDescriptor.registry.get(fullname);
        } else {
            for (const dependency of this.getDependencies(fileDescriptor, true)) {
                let resolvedType = dependency.registry.tryGet(fullname);

                if (resolvedType) {
                    return resolvedType
                }
            }
        }

        return null;
    }

    // TODO: make cache
    private extractTypeInfo(fileDescriptor: FileDescriptor, protoType: string): TypeInfo {
        const resolvedType = this.resolveType(fileDescriptor, protoType);

        return {
            protoType,
            typeMarker: getTypeMarker(protoType, resolvedType ?? undefined),
            descriptor: resolvedType ?? undefined,
        }
    }
}