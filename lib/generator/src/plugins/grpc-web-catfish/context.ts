import { MessageFieldDescriptor, FileDescriptor, MessageDescriptor, BaseDescriptor, Options, ServiceDescriptor, MethodDescriptor } from "@catfish/parser";
import { ProjectContext, Import } from "../../ProjectContext";
import { findOption, getDescriptorFullImportName, getImportPath, getImports, getModuleImportName, snakeToCamel, upperCaseFirst } from "../../utils";
import { ProjectOptions } from "../../Project";
import { PluginOptions } from "./plugin";

export interface PluginContext {
    files: FileContext[]
}

export interface FileContext {
    options: Options[]
    imports: Import[]
    services: ServiceContext[]
    filePath: string
    package: string
}

export interface ServiceContext {
    options: Options[]
    rxjsClientImportPath: string
    rxjsClientName: string
    rxjsClientFullName: string
    grpcClientImportPath: string
    grpcClientName: string
    grpcClientFullName: string
    methods: ServiceMethodContext[]
}

export interface ServiceMethodContext {
    options: Options[]
    name: string
    createPaginatorName: string
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
}

export interface ResponseMessageContext extends MessageContext {
    dataField: MessageFieldContext
    nextPageTokenField: MessageFieldContext
}

export interface TypeInfoContext {
    protoType: string
    desc: BaseDescriptor | null
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
        imports: [...getImports(ctx, file, 'grpc', true), ...getImports(ctx, file, 'grpc_rxjs', true)],
        services: file.services.map(srv => buildServiceContext(ctx, file, srv)),
        filePath: ctx.getProtoFilePath(file),
        package: file.package,
    }
}

export const buildServiceContext = (ctx: ProjectContext, file: FileDescriptor, desc: ServiceDescriptor): ServiceContext => {
    return {
        options: desc.options,
        rxjsClientImportPath: `${getImportPath(ctx, file, 'grpc_rxjs')}`,
        rxjsClientName: `${upperCaseFirst(snakeToCamel(desc.name))}RxjsClient`,
        rxjsClientFullName: `${getModuleImportName(ctx, file, 'grpc_rxjs')}.${upperCaseFirst(snakeToCamel(desc.name))}RxjsClient`,
        grpcClientImportPath: `${getImportPath(ctx, file, 'grpc')}`,
        grpcClientName: `${upperCaseFirst(snakeToCamel(desc.name))}Client`,
        grpcClientFullName: `${getModuleImportName(ctx, file, 'grpc_rxjs')}.${upperCaseFirst(snakeToCamel(desc.name))}Client`,
        methods: desc.methods.map(m => buildServiceMethodContext(ctx, file, desc, m)),
    }
}

export const buildServiceMethodContext = (ctx: ProjectContext, file: FileDescriptor, serviceDesc: ServiceDescriptor, methodDesc: MethodDescriptor): ServiceMethodContext => {
    const requestTypeInfo = buildTypeInfoContext(ctx, file, methodDesc.inputMessageType);
    const responseTypeInfo = buildTypeInfoContext(ctx, file, methodDesc.outputMessageType);
    
    return {
        options: methodDesc.options,
        name: snakeToCamel(methodDesc.name),
        createPaginatorName: `create${snakeToCamel(methodDesc.name)}Paginator`,
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
    const fullType = typeInfo.descriptor ? getDescriptorFullImportName(ctx, file, typeInfo.descriptor, 'models', true) : null;

    return {
        protoType,
        desc: typeInfo.descriptor ?? null,
        fullType,
    }
}
