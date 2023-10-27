import { FileDescriptor, BaseDescriptor, ServiceDescriptor, MethodDescriptor, Options, MessageDescriptor, MessageFieldDescriptor } from "@catfish/parser";
import { ProjectContext } from "../../ProjectContext";
import { ProjectOptions } from "../../Project";
import { PluginOptions, fileNameBuilder } from "./plugin";
import { findOption, snakeToCamel } from "../../utils";
import { ResolvedThing, ResolvedThingImport } from "../../Resolver";

export interface FileContext {
    desc: FileDescriptor
    options: Options[]
    services: ServiceContext[]
    filePath: string
    package: string
}

export interface ServiceContext {
    options: Options[],
    serviceRawFullname: string
    methods: ServiceMethodContext[]
    grpcClientImportPath: string
    grpcClientName: string
    grpcClientFullName: string
}

export interface RequestTypeInfoContext extends TypeInfoContext {
}


export interface ResponseTypeInfoContext extends TypeInfoContext {
    dataFieldJsonIfaceThing: ResolvedThingImport
    dataFieldTypeInfo: TypeInfoContext
}

export interface ServiceMethodContext {
    options: Options[],
    name: string
    requestTypeInfo: RequestTypeInfoContext
    responseTypeInfo: ResponseTypeInfoContext
}

export interface UseQueryMethodContext extends ServiceMethodContext {
    type: "UseQuery"
    useQueryMethodName: string
}

export interface UseMutationMethodContext extends ServiceMethodContext {
    type: "UseMutation"
    useMutationMethodName: string
}

export interface TypeInfoContext {
    desc: BaseDescriptor | null
    thing: ResolvedThingImport | null
    protoType: string
}

export const buildFileContext = (ctx: ProjectContext, file: FileDescriptor, projectOptions: ProjectOptions, pluginOptions?: PluginOptions): FileContext => {
    return {
        desc: file,
        options: file.options,
        services: file.services.map(s => buildServiceContext(ctx, file, s)),
        filePath: ctx.getProtoFilePath(file),
        package: file.package,
    }
}

export const buildServiceContext = (ctx: ProjectContext, file: FileDescriptor, desc: ServiceDescriptor): ServiceContext => {
    const grpcClient = ctx.resolver.resolveOne('grpc.client', desc, file);

    const methods: ServiceMethodContext[] = [];
    for (const method of desc.methods) {
        const queryMethodOption = findOption(method.options, 'catfish.tanstack.query_method');
        const mutationMethodOption = findOption(method.options, 'catfish.tanstack.mutation_method');

        if (queryMethodOption) {
            methods.push(buildUseQueryMethodContext(ctx, file, desc, method))
        }

        if (mutationMethodOption) {
            methods.push(buildUseMutationMethodContext(ctx, file, desc, method))
        }
    }
    
    return {
        options: desc.options,
        serviceRawFullname: desc.fullname,
        grpcClientImportPath: grpcClient.importPath,
        grpcClientName: grpcClient.name,
        grpcClientFullName: `${grpcClient.importName}.${grpcClient.name}`,
        methods,
    }
}

export const buildUseMutationMethodContext = (ctx: ProjectContext, file: FileDescriptor, serviceDesc: ServiceDescriptor, methodDesc: MethodDescriptor): UseMutationMethodContext => {
    const baseMethodContext = buildServiceMethodContext(ctx, file, serviceDesc, methodDesc);
    
    return {
        ...baseMethodContext,
        type: "UseMutation",
        useMutationMethodName: `get${methodDesc.name}MutationOpts`,
    }
}

export const buildUseQueryMethodContext = (ctx: ProjectContext, file: FileDescriptor, serviceDesc: ServiceDescriptor, methodDesc: MethodDescriptor): UseQueryMethodContext => {
    const baseMethodContext = buildServiceMethodContext(ctx, file, serviceDesc, methodDesc);
    
    return {
        ...baseMethodContext,
        type: "UseQuery",
        useQueryMethodName: `get${methodDesc.name}QueryOpts`,
    }
}

export const buildServiceMethodContext = (ctx: ProjectContext, file: FileDescriptor, serviceDesc: ServiceDescriptor, methodDesc: MethodDescriptor): ServiceMethodContext => {
    const requestTypeInfo = buildTypeInfoContext(ctx, file, methodDesc.inputMessageType);
    const responseTypeInfo = buildTypeInfoContext(ctx, file, methodDesc.outputMessageType);

    if (!requestTypeInfo.desc || !(requestTypeInfo.desc instanceof MessageDescriptor)) {
        throw new Error(`TanStack method ${methodDesc.fullpath} should accept message`)
    }

    if (!responseTypeInfo.desc || !(responseTypeInfo.desc instanceof MessageDescriptor)) {
        throw new Error(`TanStack method ${methodDesc.fullpath} should return message`)
    }

    const dataFieldDesc = responseTypeInfo.desc.fields
        .filter(field => field instanceof MessageFieldDescriptor)
        .find((field) => {
            const f = field as MessageFieldDescriptor;
            return typeof findOption(f.options, 'catfish.tanstack.data_marker') !== 'undefined'
        }) as MessageFieldDescriptor;

    if (!dataFieldDesc) {
        throw new Error(`Cannot find 'catfish.tanstack.data_marker' option in message ${responseTypeInfo.desc.fullpath}`)
    }

    const dataFieldTypeInfo = buildTypeInfoContext(ctx, file, dataFieldDesc.type);

    if (!dataFieldTypeInfo.desc) {
        throw new Error(`TanStack data field ${dataFieldDesc.fullpath} should be message`)
    }

    const dataFieldJsonTypeName = ctx.resolver.resolveOne('model.jsonIface', dataFieldTypeInfo.desc, file);

    return {
        options: methodDesc.options,
        name: snakeToCamel(methodDesc.name),
        requestTypeInfo: { ...requestTypeInfo },
        responseTypeInfo: { ...responseTypeInfo, dataFieldTypeInfo, dataFieldJsonIfaceThing: dataFieldJsonTypeName },
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

export function isUseQueryMethod(obj: any): obj is UseQueryMethodContext {
    return obj?.type === "UseQuery"
}

export function isUseMutationMethod(obj: any): obj is UseMutationMethodContext {
    return obj?.type === "UseMutation"
}
