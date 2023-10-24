import { FileDescriptor, BaseDescriptor, ServiceDescriptor, MethodDescriptor, Options } from "@catfish/parser";
import { Import, ProjectContext } from "../../ProjectContext";
import { ProjectOptions } from "../../Project";
import { PluginOptions } from "./plugin";
import { getDescriptorFullImportName, getImports, getModuleImportName, snakeToCamel, upperCaseFirst } from "../../utils";

export interface PluginContext {
    files: FileContext[]
}

export interface FileContext {
    options: Options[],
    imports: Import[]
    services: ServiceContext[]
    filePath: string
    package: string
}

export interface ServiceContext {
    options: Options[],
    serviceRawFullname: string
    rxjsClientClassName: string
    grpcClientFullImportName: string
    methods: ServiceMethodContext[]
}

export interface ServiceMethodContext {
    options: Options[],
    name: string
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
        options: file.options,
        imports: [...getImports(ctx, file, 'models', true), ...getImports(ctx, file, 'grpc', true)],
        services: file.services.map(s => buildServiceContext(ctx, file, s)),
        filePath: ctx.getProtoFilePath(file),
        package: file.package,
    }
}

export const buildServiceContext = (ctx: ProjectContext, file: FileDescriptor, desc: ServiceDescriptor): ServiceContext => {
    return {
        options: desc.options,
        serviceRawFullname: desc.fullname,
        rxjsClientClassName: `${upperCaseFirst(snakeToCamel(desc.name))}RxjsClient`,
        grpcClientFullImportName: `${getModuleImportName(ctx, file, 'grpc')}.${upperCaseFirst(snakeToCamel(desc.name))}Client`,
        methods: desc.methods.map(m => buildServiceMethodContext(ctx, file, desc, m)),
    }
}

export const buildServiceMethodContext = (ctx: ProjectContext, file: FileDescriptor, serviceDesc: ServiceDescriptor, methodDesc: MethodDescriptor): ServiceMethodContext => {
    return {
        options: methodDesc.options,
        name: snakeToCamel(methodDesc.name),
        clientStreaming: methodDesc.isClientStreaming,
        serverStreaming: methodDesc.isServerStreaming,
        requestTypeInfo: buildTypeInfoContext(ctx, file, methodDesc.inputMessageType),
        responseTypeInfo: buildTypeInfoContext(ctx, file, methodDesc.outputMessageType),
    }
}

export const buildTypeInfoContext = (ctx: ProjectContext, file: FileDescriptor, protoType: string): TypeInfoContext => {
    const typeInfo = ctx.getTypeInfo(file, protoType);
    const fullType = typeInfo.descriptor ? getDescriptorFullImportName(ctx, file, typeInfo.descriptor, 'models', false) : null;

    return {
        desc: typeInfo.descriptor ?? null,
        protoType,
        fullType,
    }
}
