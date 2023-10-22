import { EnumDescriptor, MessageFieldDescriptor, EnumFieldDescriptor, MapFieldDescriptor, FileDescriptor, MessageDescriptor, OneofDescriptor, BaseDescriptor, ServiceDescriptor, MethodDescriptor } from "@catfish/parser";
import { Import, ProjectContext, TypeInfo } from "../../ProjectContext";
import { ProjectOptions } from "../../Project";
import { PluginOptions } from "./plugin";
import { getFullImportPath, getImports, snakeToCamel, upperCaseFirst } from "../../utils";

export interface PluginContext {
    files: FileContext[]
}

export interface FileContext {
    imports: Import[]
    services: ServiceContext[]
    filePath: string
    package: string
}

export interface ServiceContext {
    serviceRawFullname: string
    serviceDefinitionName: string
    clientClassName: string
    methods: ServiceMethodContext[]
}

export interface ServiceMethodContext {
    name: string
    path: string
    clientStreaming: boolean
    serverStreaming: boolean
    requestTypeInfo: TypeInfoContext
    responseTypeInfo: TypeInfoContext
}

export interface TypeInfoContext {
    desc: BaseDescriptor | null
    protoType: string
    fullType: string | null
}

export const buildPluginContext = (ctx: ProjectContext, projectOptions: ProjectOptions, pluginOptions?: PluginOptions): PluginContext => {
    const files = ctx.getFiles();

    return {
        files: files.map(f => buildFileContext(ctx, f))
    }
}

export const buildFileContext = (ctx: ProjectContext, file: FileDescriptor): FileContext => {
    return {
        imports: getImports(ctx, file, 'models', true),
        services: file.services.map(s => buildServiceContext(ctx, file, s)),
        filePath: ctx.getProtoFilePath(file),
        package: file.package,
    }
}

export const buildServiceContext = (ctx: ProjectContext, file: FileDescriptor, desc: ServiceDescriptor): ServiceContext => {
    return {
        serviceRawFullname: desc.fullname,
        serviceDefinitionName: `${upperCaseFirst(snakeToCamel(desc.name))}Definition`,
        clientClassName: `${upperCaseFirst(snakeToCamel(desc.name))}Client`,
        methods: desc.methods.map(m => buildServiceMethodContext(ctx, file, desc, m)),
    }
}

export const buildServiceMethodContext = (ctx: ProjectContext, file: FileDescriptor, serviceDesc: ServiceDescriptor, methodDesc: MethodDescriptor): ServiceMethodContext => {
    return {
        name: snakeToCamel(methodDesc.name),
        path: `/${serviceDesc.fullpath}/${methodDesc.name}`,
        clientStreaming: methodDesc.isClientStreaming,
        serverStreaming: methodDesc.isServerStreaming,
        requestTypeInfo: buildTypeInfoContext(ctx, file, methodDesc.inputMessageType),
        responseTypeInfo: buildTypeInfoContext(ctx, file, methodDesc.outputMessageType),
    }
}

export const buildTypeInfoContext = (ctx: ProjectContext, file: FileDescriptor, protoType: string): TypeInfoContext => {
    const typeInfo = ctx.getTypeInfo(file, protoType);
    const fullType = typeInfo.descriptor ? getFullImportPath(ctx, file, typeInfo.descriptor, 'models', false) : null;

    return {
        desc: typeInfo.descriptor ?? null,
        protoType,
        fullType,
    }
}
