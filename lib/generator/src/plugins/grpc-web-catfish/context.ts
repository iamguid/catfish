import { MessageFieldDescriptor, FileDescriptor, MessageDescriptor, BaseDescriptor, Options, ServiceDescriptor, MethodDescriptor } from "@catfish/parser";
import { ProjectContext } from "../../ProjectContext";
import { findOption, getDescriptorFullImportName, getImportPath, getModuleImportName, snakeToCamel, upperCaseFirst } from "../../utils";
import { ProjectOptions } from "../../Project";
import { PluginOptions, fileNameBuilder } from "./plugin";
import { ResolvedThing, ResolvedThingImport } from "../../Resolver";

export interface FileContext {
    options: Options[]
    services: ServiceContext[]
    filePath: string
    package: string
}

export interface ServiceContext {
    options: Options[]
    rxjsClientThing: ResolvedThingImport
    grpcClientThing: ResolvedThingImport
    methods: ServiceMethodContext[]
}

export interface ServiceMethodContext {
    options: Options[]
    name: string
    createRxjsPaginatorName: string
    createAsyncPaginatorName: string
    clientStreaming: boolean
    serverStreaming: boolean
    request: RequestMessageContext
    response: ResponseMessageContext
    requestTypeInfo: TypeInfoContext
    responseTypeInfo: TypeInfoContext
}

export interface EnumContext {
    fields: EnumFieldContext[]
    name: string
}

export interface EnumFieldContext {
    options: Options[]
    name: string
    value: number
}

export interface MessageContext {
    options: Options[]
    name: string
}

export interface MessageFieldContext {
    options: Options[],
    typeInfo: TypeInfoContext,
    rawName: string
    name: string
}

export interface RequestMessageContext extends MessageContext {
    pageSizeField: MessageFieldContext
    pageTokenField: MessageFieldContext
    requestJsonIfaceThing: ResolvedThingImport
    requestTypeInfo: TypeInfoContext
    requestParametersTypeName: string
}

export interface ResponseMessageContext extends MessageContext {
    dataField: MessageFieldContext
    nextPageTokenField: MessageFieldContext
}

export interface TypeInfoContext {
    desc: BaseDescriptor | null
    thing: ResolvedThingImport | null
    protoType: string
}

export const buildFileContext = (ctx: ProjectContext, file: FileDescriptor, projectOptions: ProjectOptions, pluginOptions?: PluginOptions): FileContext => {
    return {
        options: file.options,
        services: file.services.map(srv => buildServiceContext(ctx, file, srv)),
        filePath: ctx.getProtoFilePath(file),
        package: file.package,
    }
}

export const buildServiceContext = (ctx: ProjectContext, file: FileDescriptor, desc: ServiceDescriptor): ServiceContext => {
    const rxjsClientThing = ctx.resolver.resolveOne('grpcrxjs.client', desc, file);
    const grpcClientThing = ctx.resolver.resolveOne('grpc.client', desc, file);

    return {
        options: desc.options,
        rxjsClientThing,
        grpcClientThing,
        methods: desc.methods.map(m => buildServiceMethodContext(ctx, file, desc, m)),
    }
}

export const buildServiceMethodContext = (ctx: ProjectContext, file: FileDescriptor, serviceDesc: ServiceDescriptor, methodDesc: MethodDescriptor): ServiceMethodContext => {
    const requestTypeInfo = buildTypeInfoContext(ctx, file, methodDesc.inputMessageType);
    const responseTypeInfo = buildTypeInfoContext(ctx, file, methodDesc.outputMessageType);
    
    return {
        options: methodDesc.options,
        name: snakeToCamel(methodDesc.name),
        createRxjsPaginatorName: `create${snakeToCamel(methodDesc.name)}RxjsPaginator`,
        createAsyncPaginatorName: `create${snakeToCamel(methodDesc.name)}AsyncPaginator`,
        clientStreaming: methodDesc.isClientStreaming,
        serverStreaming: methodDesc.isServerStreaming,
        request: buildRequestMessageContext(ctx, file, requestTypeInfo),
        response: buildResponseMessageContext(ctx, file, responseTypeInfo),
        requestTypeInfo,
        responseTypeInfo,
    }
}

export const buildRequestMessageContext = (ctx: ProjectContext, file: FileDescriptor, requestTypeInfo: TypeInfoContext): RequestMessageContext => {
    const desc = requestTypeInfo.desc as MessageDescriptor;

    if (!(desc instanceof MessageDescriptor)) {
        throw new Error(`Pagination RPC Request should be message`)
    }

    const pageSizeFieldDesc = desc.fields
        .filter(field => field instanceof MessageFieldDescriptor)
        .find((field) => {
            const f = field as MessageFieldDescriptor;
            const hasOption = typeof findOption(f.options, 'catfish.fld_page_size') !== 'undefined'
            const hasName = f.name === 'page_size'
            return hasOption || hasName
        }) as MessageFieldDescriptor;

    if (!pageSizeFieldDesc) {
        throw new Error(`Cannot find 'page_size' field or 'catfish.fld_page_size' option in message ${desc.fullpath}`)
    }

    if (!(pageSizeFieldDesc instanceof MessageFieldDescriptor)) {
        throw new Error(`Pagination RPC request page token field should be message field`)
    }
    
    const pageTokenFieldDesc = desc.fields
        .filter(field => field instanceof MessageFieldDescriptor)
        .find((field) => {
            const f = field as MessageFieldDescriptor;
            const hasOption = typeof findOption(f.options, 'catfish.fld_page_token') !== 'undefined'
            const hasName = f.name === 'page_token'
            return hasOption || hasName
        }) as MessageFieldDescriptor;

    if (!pageTokenFieldDesc) {
        throw new Error(`Cannot find 'page_token' field or 'catfish.fld_page_token' option in message ${desc.fullpath}`)
    }

    if (!(pageTokenFieldDesc instanceof MessageFieldDescriptor)) {
        throw new Error(`Pagination RPC request page token field should be message field`)
    }

    return {
        options: desc.options,
        name: desc.name,
        requestTypeInfo: buildTypeInfoContext(ctx, file, desc.fullname),
        requestJsonIfaceThing: ctx.resolver.resolveOne('model.jsonIface', desc, file),
        requestParametersTypeName: `${desc.name}Parameters`,
        pageSizeField: buildMessageFieldContext(ctx, file, pageSizeFieldDesc),
        pageTokenField: buildMessageFieldContext(ctx, file, pageTokenFieldDesc),
    }
}

export const buildResponseMessageContext = (ctx: ProjectContext, file: FileDescriptor, responseTypeInfo: TypeInfoContext): ResponseMessageContext => {
    const desc = responseTypeInfo.desc as MessageDescriptor;

    if (!(desc instanceof MessageDescriptor)) {
        throw new Error(`Pagination RPC response should be message`)
    }

    const dataFieldDesc = desc.fields
        .filter(field => field instanceof MessageFieldDescriptor)
        .find((field) => {
            const f = field as MessageFieldDescriptor;
            const hasOption = typeof findOption(f.options, 'catfish.fld_page_data') !== 'undefined'
            const hasName = f.name === 'page_data'
            return hasOption || hasName
        }) as MessageFieldDescriptor;

    if (!dataFieldDesc) {
        throw new Error(`Cannot find 'page_data' field or 'catfish.fld_page_data' option in message ${desc.fullpath}`)
    }

    if (!(dataFieldDesc instanceof MessageFieldDescriptor)) {
        throw new Error(`Pagination RPC response page data field should be message field`)
    }
    
    const nextPageTokenFieldDesc = desc.fields
        .filter(field => field instanceof MessageFieldDescriptor)
        .find((field) => {
            const f = field as MessageFieldDescriptor;
            const hasOption = typeof findOption(f.options, 'catfish.fld_next_page_token') !== 'undefined'
            const hasName = f.name === 'next_page_token'
            return hasOption || hasName
        }) as MessageFieldDescriptor;

    if (!nextPageTokenFieldDesc) {
        throw new Error(`Cannot find 'next_page_token' field or 'catfish.fld_next_page_token' option in message ${desc.fullpath}`)
    }

    if (!(nextPageTokenFieldDesc instanceof MessageFieldDescriptor)) {
        throw new Error(`Pagination RPC response next page token field should be message field`)
    }

    return {
        options: desc.options,
        name: desc.name,
        dataField: buildMessageFieldContext(ctx, file, dataFieldDesc),
        nextPageTokenField: buildMessageFieldContext(ctx, file, nextPageTokenFieldDesc),
    }
}

export const buildMessageFieldContext = (ctx: ProjectContext, file: FileDescriptor, desc: MessageFieldDescriptor): MessageFieldContext => {
    return {
        options: desc.options,
        typeInfo: buildTypeInfoContext(ctx, file, desc.type),
        rawName: desc.name,
        name: snakeToCamel(desc.name),
    }
}

export const buildTypeInfoContext = (ctx: ProjectContext, file: FileDescriptor, protoType: string): TypeInfoContext => {
    const typeInfo = ctx.getTypeInfo(file, protoType);
    const fullType = typeInfo.descriptor ? ctx.resolver.resolveOne(['model.class', 'model.enum'], typeInfo.descriptor, file, protoType) : null;

    return {
        protoType,
        desc: typeInfo.descriptor ?? null,
        thing: fullType,
    }
}
