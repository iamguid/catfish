import { EnumDescriptor, MessageFieldDescriptor, EnumFieldDescriptor, MapFieldDescriptor, FileDescriptor, MessageDescriptor, OneofDescriptor, BaseDescriptor, Options, ServiceDescriptor, MethodDescriptor } from "@catfish/parser";
import { ProjectContext, Import, TypeInfo } from "../../ProjectContext";
import { getFullImportPath, getImports, snakeToCamel, upperCaseFirst } from "../../utils";
import { ProjectOptions } from "../../Project";
import { PluginOptions } from "./plugin";

export type TypeMarker = "FixedSmall" | "FixedBig" | "Bytes" | "String" | "Message" | "Enum";

export interface PluginContext {
    files: FileContext[]
}

export interface FileContext {
    options: Options[]
    imports: Import[]
    services: ServiceContext[]
    enums: EnumContext[]
    messages: MessageContext[]
    filePath: string
    package: string
}

export interface ServiceContext {
    options: Options[]
    clientClassName: string
    methods: ServiceMethodContext[]
}

export interface ServiceMethodContext {
    options: Options[]
    name: string
    clientStreaming: boolean
    serverStreaming: boolean
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
    fields: (MapFieldContext | MessageFieldContext | OneofContext)[]
    enums: EnumContext[]
    messages: MessageContext[]
}

export interface MessageFieldContext {
    options: Options[]
    type: "MessageField"
    typeInfo: TypeInfoContext
    name: string
    repeated: boolean
    optional: boolean
}

export interface MapFieldContext {
    options: Options[]
    type: "MapField"
    keyTypeInfo: TypeInfoContext
    valueTypeInfo: TypeInfoContext
    name: string
}

export interface OneofContext {
    type: "Oneof"
    fields: MessageFieldContext[]
    name: string
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


export const buildServiceContext = (ctx: ProjectContext, file: FileDescriptor, desc: ServiceDescriptor): ServiceContext => {
    return {
        options: file.options,
        clientClassName: `${upperCaseFirst(snakeToCamel(desc.name))}Client`,
        methods: desc.methods.map(m => buildServiceMethodContext(ctx, file, desc, m)),
    }
}

export const buildServiceMethodContext = (ctx: ProjectContext, file: FileDescriptor, serviceDesc: ServiceDescriptor, methodDesc: MethodDescriptor): ServiceMethodContext => {
    return {
        options: file.options,
        name: snakeToCamel(methodDesc.name),
        clientStreaming: methodDesc.isClientStreaming,
        serverStreaming: methodDesc.isServerStreaming,
        requestTypeInfo: buildTypeInfoContext(ctx, file, methodDesc.inputMessageType),
        responseTypeInfo: buildTypeInfoContext(ctx, file, methodDesc.outputMessageType),
    }
}

export const buildFileContext = (ctx: ProjectContext, file: FileDescriptor): FileContext => {
    return {
        options: file.options,
        imports: getImports(ctx, file, 'models', false),
        services: file.services.map(srv => buildServiceContext(ctx, file, srv)),
        enums: file.enums.map(enm => buildEnumContext(ctx, file, enm)),
        messages: file.messages.map(msg => buildMessageContext(ctx, file, msg)),
        filePath: ctx.getProtoFilePath(file),
        package: file.package,
    }
}

export const buildEnumContext = (ctx: ProjectContext, file: FileDescriptor, desc: EnumDescriptor): EnumContext => {
    return {
        fields: desc.fields.map(f => buildEnumFieldContext(ctx, file, f)),
        name: desc.name
    }
}

export const buildEnumFieldContext = (ctx: ProjectContext, file: FileDescriptor, desc: EnumFieldDescriptor): EnumFieldContext => {
    return {
        options: desc.options,
        name: desc.fieldName,
        value: desc.fieldValue,
    }
}

export const buildMessageContext = (ctx: ProjectContext, file: FileDescriptor, desc: MessageDescriptor): MessageContext => {
    return {
        options: desc.options,
        name: desc.name,
        fields: desc.fields.map(f => buildFieldContext(ctx, file, f)),
        enums: desc.enums.map(e => buildEnumContext(ctx, file, e)),
        messages: desc.messages.map(m => buildMessageContext(ctx, file, m)),
    }
}


export const buildMessageFieldContext = (ctx: ProjectContext, file: FileDescriptor, desc: MessageFieldDescriptor): MessageFieldContext => {
    const typeInfo = buildTypeInfoContext(ctx, file, desc.type);

    return {
        type: "MessageField",
        options: desc.options,
        typeInfo: buildTypeInfoContext(ctx, file, desc.type),
        name: snakeToCamel(desc.name),
        repeated: desc.repeated,
        optional: desc.optional,
    }
}

export const buildOneofContext = (ctx: ProjectContext, file: FileDescriptor, desc: OneofDescriptor): OneofContext => {
    return {
        type: "Oneof",
        fields: desc.fields.map(f => buildMessageFieldContext(ctx, file, f)),
        name: snakeToCamel(desc.name),
    }
}

export const buildMapFieldContext = (ctx: ProjectContext, file: FileDescriptor, desc: MapFieldDescriptor): MapFieldContext => {
    const keyTypeInfo = buildTypeInfoContext(ctx, file, desc.keyType);
    const valueTypeInfo = buildTypeInfoContext(ctx, file, desc.valueType);

    return {
        type: "MapField",
        options: desc.options,
        keyTypeInfo,
        valueTypeInfo,
        name: snakeToCamel(desc.name),
    }
}

export const buildFieldContext = (ctx: ProjectContext, file: FileDescriptor, desc: BaseDescriptor) => {
    if (desc instanceof MessageFieldDescriptor) {
        return buildMessageFieldContext(ctx, file, desc)
    }

    if (desc instanceof OneofDescriptor) {
        return buildOneofContext(ctx, file, desc)
    }

    if (desc instanceof MapFieldDescriptor) {
        return buildMapFieldContext(ctx, file, desc)
    }

    throw new Error("Invalid descriptor")
}

export const buildTypeInfoContext = (ctx: ProjectContext, file: FileDescriptor, protoType: string): TypeInfoContext => {
    const typeInfo = ctx.getTypeInfo(file, protoType);
    const fullType = typeInfo.descriptor ? getFullImportPath(ctx, file, typeInfo.descriptor, 'models', true) : null;

    return {
        protoType,
        desc: typeInfo.descriptor ?? null,
        fullType,
    }
}

export function isMessageField(obj: any): obj is MessageFieldContext {
    return obj?.type === "MessageField"
}

export function isOneof(obj: any): obj is OneofContext {
    return obj?.type === "Oneof"
}

export function isMapField(obj: any): obj is MapFieldContext {
    return obj?.type === "MapField"
}