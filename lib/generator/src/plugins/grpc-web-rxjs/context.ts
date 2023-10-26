import { FileDescriptor, BaseDescriptor, ServiceDescriptor, MethodDescriptor, Options } from "@catfish/parser";
import { Import, ProjectContext } from "../../ProjectContext";
import { ProjectOptions } from "../../Project";
import { PluginOptions } from "./plugin";
import { getDescriptorFullImportName, getImports, getModuleImportName, snakeToCamel, upperCaseFirst } from "../../utils";
import { fileNameBuilder } from "./resolver";
import { ResolvedThing, ResolvedThingImport } from "../../Resolver";

export interface FileContext {
    options: Options[],
    services: ServiceContext[]
    filePath: string
    package: string
}

export interface ServiceContext {
    options: Options[],
    serviceRawFullname: string
    rxjsClientThing: ResolvedThing
    grpcClientThing: ResolvedThing
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
    thing: ResolvedThingImport | null
    protoType: string
}

export const buildFileContext = (ctx: ProjectContext, file: FileDescriptor, projectOptions: ProjectOptions, pluginOptions?: PluginOptions): FileContext => {
    return {
        options: file.options,
        services: file.services.map(s => buildServiceContext(ctx, file, s)),
        filePath: ctx.getProtoFilePath(file),
        package: file.package,
    }
}

export const buildServiceContext = (ctx: ProjectContext, file: FileDescriptor, desc: ServiceDescriptor): ServiceContext => {
    return {
        options: desc.options,
        serviceRawFullname: desc.fullname,
        rxjsClientThing: ctx.resolver.resolveOne('grpcrxjs.client', desc, file),
        grpcClientThing: ctx.resolver.resolveOne('grpc.client', desc, file),
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
    const thing = typeInfo.descriptor ? ctx.resolver.resolveOne(['model.class', 'model.enum'], typeInfo.descriptor, file, protoType) : null;

    return {
        desc: typeInfo.descriptor ?? null,
        protoType,
        thing,
    }
}
