import { EnumDescriptor, MessageFieldDescriptor, EnumFieldDescriptor, MapFieldDescriptor, FileDescriptor, MessageDescriptor, OneofDescriptor, BaseDescriptor, Options } from "@catfish/parser";
import { getJsonTypeByTypeInfo, getTsTypeByTypeInfo, getTypeMarkerByTypeInfo, getWireTypeByTypeInfo, getPjsFnNameByTypeInfo, getScalarDefaultValue, getTag } from "./utils";
import { ProjectOptions } from "../../Project";
import { ProjectContext, TypeInfo } from "../../ProjectContext";
import { snakeToCamel, upperCaseFirst } from "../../utils";
import { PluginOptions } from "./plugin";

export type TypeMarker = "FixedSmall" | "FixedBig" | "Bytes" | "String" | "Message" | "Enum";

export interface PluginContext {
    files: FileContext[]
}

export interface FileContext {
    options: Options[],
    desc: FileDescriptor,
    enums: EnumContext[]
    messages: MessageContext[]
    filePath: string
    package: string
}

export interface EnumContext {
    fields: EnumFieldContext[]
    name: string
}

export interface EnumFieldContext {
    options: Options[],
    name: string
    value: number
}

export interface MessageContext {
    options: Options[],
    fields: (MapFieldContext | MessageFieldContext | OneofContext)[]
    enums: EnumContext[]
    messages: MessageContext[]
    className: string
    jsonIfaceName: string
}

export interface MessageFieldContext {
    options: Options[],
    type: "MessageField"
    typeInfo: TypeInfoContext
    rawName: string
    name: string
    number: number
    tag: number
    repeated: boolean
    optional: boolean
}

export interface MapFieldContext {
    options: Options[],
    type: "MapField"
    keyTypeInfo: TypeInfoContext
    valueTypeInfo: TypeInfoContext
    encodeMethodName: string
    decodeMethodName: string
    rawName: string
    name: string
    number: number
    tag: number
    keyTag: number
    valueTag: number
}

export interface OneofContext {
    type: "Oneof"
    fields: MessageFieldContext[]
    name: string
    tsTypeName: string
    jsonTypeName: string
}

export interface TypeInfoContext {
    protoType: string
    defaultValue: string
    desc: BaseDescriptor | null
    pjsFn: string
    enumType: string | null
    tsType: string
    jsonType: string
    typeMarker: TypeMarker
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
        desc: file,
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
        className: ctx.resolver.resolveFullTypeName('model.class', desc, file),
        jsonIfaceName: ctx.resolver.resolveFullTypeName('model.jsonIface', desc, file),
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
        rawName: desc.name,
        name: snakeToCamel(desc.name),
        number: desc.fieldNumber,
        tag: getTag(desc.fieldNumber, desc.repeated ? 2 : getWireTypeByTypeInfo(typeInfo)),
        repeated: desc.repeated,
        optional: desc.optional,
    }
}

export const buildOneofContext = (ctx: ProjectContext, file: FileDescriptor, desc: OneofDescriptor): OneofContext => {
    return {
        type: "Oneof",
        fields: desc.fields.map(f => buildMessageFieldContext(ctx, file, f)),
        name: snakeToCamel(desc.name),
        tsTypeName: ctx.resolver.resolveByNamespace('model.oneof.type', desc, file)[0].name,
        jsonTypeName: ctx.resolver.resolveByNamespace('model.oneof.jsonType', desc, file)[0].name,
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
        encodeMethodName: `encode${upperCaseFirst(snakeToCamel(desc.name))}`,
        decodeMethodName: `decode${upperCaseFirst(snakeToCamel(desc.name))}`,
        rawName: desc.name,
        name: snakeToCamel(desc.name),
        number: desc.fieldNumber,
        tag: getTag(desc.fieldNumber, 2),
        keyTag: getTag(1, getWireTypeByTypeInfo(keyTypeInfo)),
        valueTag: getTag(2, getWireTypeByTypeInfo(valueTypeInfo)),
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
    const enumType: string | null = typeInfo.descriptor ? ctx.resolver.resolveByNamespace('model.enum', typeInfo.descriptor, file, protoType)[0]?.name ?? null : null;
    const tsFullType: string | null = typeInfo.descriptor ? ctx.resolver.resolveByNamespace('model.class', typeInfo.descriptor, file, protoType)[0]?.name ?? null : null;
    const jsonFullType: string | null = typeInfo.descriptor ? ctx.resolver.resolveByNamespace('model.jsonIface', typeInfo.descriptor, file, protoType)[0]?.name ?? null : null;
    const tsType = getTsTypeByTypeInfo(typeInfo) ?? tsFullType ?? '';
    const jsonType = getJsonTypeByTypeInfo(typeInfo) ?? jsonFullType ?? '';
    const typeMarker = getTypeMarkerByTypeInfo(typeInfo);

    return {
        protoType,
        desc: typeInfo.descriptor ?? null,
        defaultValue: getDefaultValue(typeInfo, tsType, typeMarker, protoType),
        pjsFn: getPjsFnNameByTypeInfo(typeInfo),
        tsType,
        jsonType,
        enumType,
        typeMarker,
    }
}

export const getDefaultValue = (typeInfo: TypeInfo, tsType: string, typeMarker: TypeMarker, fullType: string | null) => {
    if (typeInfo.descriptor instanceof MessageFieldDescriptor && typeInfo.descriptor.repeated) {
        return "[]";
    }

    if (typeMarker === "Message") {
        return `new ${tsType}()`;
    }

    if (typeMarker === "Enum") {
        const enm = typeInfo.descriptor as EnumDescriptor;
        return `${fullType}.${enm.fields[0].fieldName}`;
    }

    const primitive = getScalarDefaultValue(typeInfo)

    if (primitive) {
        return primitive;
    }

    throw new Error(`Cannot get default value for ${typeMarker} ${typeInfo.protoType}`)
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