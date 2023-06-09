import fs from 'node:fs';
import path from 'node:path';

import { BaseDescriptor, FileDescriptor, parse } from "../parser"
import { buildinProtoTypesToTsType } from './buildinProtoTypes';
import { walkByFiles } from "./fswalker"
import { ProjectOptions } from './Project';
import { filePathToPseudoNamespace } from './utils';
import { wellKnownTypesToRuntimeMap, wellKnownTypesToProtoFilesMap } from './wellKnownTypes';

export interface Import {
    name: string
    path: string
}

export interface TypeResolution {
    dstFileDescriptor: FileDescriptor
    typeDescriptor: BaseDescriptor
}

export interface TypeInfo {
    isBuiltin: boolean
    protoType: string
    tsType: string
    resolution?: TypeResolution
}

export interface Dependency {
    type: 'weak' | 'public'
    descriptor: FileDescriptor
}

export class Context {
    private readonly protoFiles = new Map<string, FileDescriptor>; // key - relative path to proto file
    private readonly filesPaths = new Map<FileDescriptor, string>; // value - relative path to proto file
    private readonly dependencies = new Map<FileDescriptor, Dependency[]>;
    
    constructor(private readonly config: ProjectOptions) {
    }

    // TODO: Make async
    load() {
        // Load protobuf well known types
        for (const [googlePath, realPath] of Object.entries(wellKnownTypesToProtoFilesMap)) {
            const parsed = parse(fs.readFileSync(realPath, 'utf8'));
            this.protoFiles.set(googlePath, parsed);
        }

        // Load project files
        walkByFiles({
            basePath: this.config.protoDirPath,
            filePath: "",
            each: ({ filePath }) => {
                if (path.extname(filePath) === '.proto') {
                    try {
                        const parsed = parse(fs.readFileSync(path.join(this.config.protoDirPath, filePath), 'utf8'));
                        this.protoFiles.set(filePath, parsed);
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
                const filePath = this.getFilePathByDescriptor(f)
                return !(filePath in wellKnownTypesToProtoFilesMap)
            })
        }
    }

    getFilePathByDescriptor(descriptor: FileDescriptor) {
        if (!this.filesPaths.has(descriptor)) {
            throw new Error(`Cannot resolve file path by descriptor for file ${this.getFilePathByDescriptor(descriptor)}`)
        }

        return this.filesPaths.get(descriptor)!;
    }

    getDependencies(descriptor: FileDescriptor, includePublic = false) {
        if (!this.dependencies.has(descriptor)) {
            throw new Error(`There is no dependencies of file ${this.getFilePathByDescriptor(descriptor)}`)
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
            throw new Error(`There is no type descriptor ${fullname} for file ${this.getFilePathByDescriptor(descriptor)}`)
        }

        return resolvedType;
    }

    getTypeInfo(descriptor: FileDescriptor, protoType: string) {
        return this.extractTypeInfo(descriptor, protoType);
    }
    
    // TODO: Make cache
    private resolveType(fileDescriptor: FileDescriptor, fullname: string): TypeResolution | null {
        if (fileDescriptor.registry.descriptors.has(fullname)) {
            const typeDescriptor = fileDescriptor.registry.get(fullname);
            return { dstFileDescriptor: fileDescriptor, typeDescriptor }
        } else {
            for (const dependency of this.getDependencies(fileDescriptor, true)) {
                let resolvedType = dependency.registry.tryGet(fullname);

                if (resolvedType) {
                    return { dstFileDescriptor: dependency, typeDescriptor: resolvedType }
                }
            }
        }

        return null;
    }

    // TODO: make cache
    private extractTypeInfo(fileDescriptor: FileDescriptor, protoType: string): TypeInfo {
        const buildinTsType = buildinProtoTypesToTsType[protoType];

        if (buildinTsType ?? false) {
            return {
                isBuiltin: true,
                protoType,
                tsType: buildinTsType,
            }
        }
        else {
            const typeResolution = this.getProtoTypeDescriptor(fileDescriptor, protoType);

            return {
                isBuiltin: false,
                protoType,
                tsType: protoType,
                resolution: typeResolution
            }
        }
    }
}