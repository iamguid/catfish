import fs from 'node:fs';
import path from 'node:path';

import { BaseDescriptor, FileDescriptor, parse } from "../parser"
import { buildinProtoTypesToTsType } from './buildinProtoTypes';
import { walkByFiles } from "./fswalker"
import { ProjectOptions } from './Project';
import { wellKnownTypesFilesMap } from './wellKnownTypes';

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

export class Context {
    private readonly protoFiles = new Map<string, FileDescriptor>; // key - relative path to proto file
    private readonly filesPaths = new Map<FileDescriptor, string>; // value - relative path to proto file
    private readonly dependencies = new Map<FileDescriptor, FileDescriptor[]>;
    
    constructor(private readonly config: ProjectOptions) {
    }

    // TODO: Make async
    load() {
        return walkByFiles({
            basePath: this.config.protoDirPath,
            filePath: "",
            each: ({ filePath }) => {
                if (path.extname(filePath) === '.proto') {
                    try {
                        const parsed = parse(fs.readFileSync(path.join(this.config.protoDirPath, filePath), 'utf8'));
                        this.protoFiles.set(filePath, parsed);
                    } catch (e) {
                        console.log(`Cannot parse file ${filePath}, ${(e as Error).message}`)
                    }
                }
            },
        });
    }

    // TODO: Make async
    resolve() {
        console.log(this.protoFiles.keys());
        for (const [path, descriptor] of this.protoFiles.entries()) {
            this.filesPaths.set(descriptor, path);

            // Resolve imports from proto files
            for (const imprt of descriptor.imports) {
                // Skip Well Known Types imports, resolve it later
                if (imprt.path in wellKnownTypesFilesMap) {
                    continue;
                }

                if (!this.protoFiles.has(imprt.path)) {
                    throw new Error(`Cannot resolve import ${imprt.path} in file ${path}`)
                }
                
                const dependency = this.protoFiles.get(imprt.path)!;
                
                if (!this.dependencies.has(descriptor)) {
                    this.dependencies.set(descriptor, []);
                }

                const dependencies = this.dependencies.get(descriptor)!;

                dependencies.push(dependency);
            }
        }
    }

    getFiles() {
        return Array.from(this.protoFiles.values());
    }

    getFilePathByDescriptor(descriptor: FileDescriptor) {
        if (!this.filesPaths.has(descriptor)) {
            throw new Error(`Cannot resolve file path by descriptor of package ${descriptor.package}`)
        }

        return this.filesPaths.get(descriptor)!;
    }

    getDependencies(descriptor: FileDescriptor) {
        if (!this.dependencies.has(descriptor)) {
            throw new Error(`There is no dependencies of package ${descriptor.package}`)
        }

        return this.dependencies.get(descriptor)!;
    }

    getProtoTypeDescriptor(descriptor: FileDescriptor, fullname: string) {
        const resolvedType = this.resolveType(descriptor, fullname);

        if (!resolvedType) {
            throw new Error(`There is no type descriptor with fullname ${fullname} in package ${descriptor.package}`)
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
            for (const dependency of this.getDependencies(fileDescriptor)) {
                const resolvedType = dependency.registry.get(fullname);

                if (resolvedType) {
                    return { dstFileDescriptor: dependency, typeDescriptor: resolvedType }
                }
            }
        }

        return null;
    }

    // TODO: make cache
    private extractTypeInfo(fileDescriptor: FileDescriptor, protoType: string): TypeInfo {
        const buildinTsType = buildinProtoTypesToTsType[protoType]
        
        if (buildinTsType ?? false) {
            return {
                isBuiltin: true,
                protoType,
                tsType: buildinTsType,
            }
        } else {
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