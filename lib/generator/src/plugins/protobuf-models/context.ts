import { EnumDescriptor, MessageFieldDescriptor, EnumFieldDescriptor, MapFieldDescriptor, FileDescriptor, MessageDescriptor, OneofDescriptor, BaseDescriptor } from "@catfish/parser";
import { ProjectContext, Import, TypeInfo } from "../../ProjectContext";
import { getFullImportPath, getJsonTypeByTypeInfo, getTsTypeByTypeInfo, getTypeMarkerByTypeInfo, getWireTypeByTypeInfo, getPjsFnNameByTypeInfo, getScalarDefaultValue, getImports, getTag } from "./utils";
import { filePathToPseudoNamespace, snakeToCamel, upperCaseFirst } from "../../utils";
import { ProjectOptions } from "../../Project";
import { PluginOptions } from "./plugin";

export type TypeMarker = "FixedSmall" | "FixedBig" | "Bytes" | "String" | "Message" | "Enum";

export interface PluginContext {
    files: FileContext[]
}

export interface FileContext {
    imports: Import[]
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
    name: string
    value: number
}

export interface MessageContext {
    fields: (MapFieldContext | MessageFieldContext | OneofContext)[]
    enums: EnumContext[]
    messages: MessageContext[]
    className: string
    jsonIfaceName: string
}

export interface MessageFieldContext {
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
    tsType: string
    jsonType: string
    fullType: string | null
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
        imports: getImports(ctx, file),
        enums: file.enums.map(enm => buildEnumContext(ctx, file, enm)),
        messages: file.messages.map(msg => buildMessageContext(ctx, file, msg)),
        filePath: ctx.getFilePathByDescriptor(file),
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
        name: desc.fieldName,
        value: desc.fieldValue,
    }
}

export const buildMessageContext = (ctx: ProjectContext, file: FileDescriptor, desc: MessageDescriptor): MessageContext => {
    return {
        className: desc.name,
        jsonIfaceName: `${desc.name}JSON`,
        fields: desc.fields.map(f => buildFieldContext(ctx, file, f)),
        enums: desc.enums.map(e => buildEnumContext(ctx, file, e)),
        messages: desc.messages.map(m => buildMessageContext(ctx, file, m)),
    }
}


export const buildMessageFieldContext = (ctx: ProjectContext, file: FileDescriptor, desc: MessageFieldDescriptor): MessageFieldContext => {
    const typeInfo = buildTypeInfoContext(ctx, file, desc.type);

    return {
        type: "MessageField",
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
        tsTypeName: `${snakeToCamel(filePathToPseudoNamespace(desc.fullname))}Type`,
        jsonTypeName: `${snakeToCamel(filePathToPseudoNamespace(desc.fullname))}JSONType`,
    }
}

export const buildMapFieldContext = (ctx: ProjectContext, file: FileDescriptor, desc: MapFieldDescriptor): MapFieldContext => {
    const keyTypeInfo = buildTypeInfoContext(ctx, file, desc.keyType);
    const valueTypeInfo = buildTypeInfoContext(ctx, file, desc.valueType);

    return {
        type: "MapField",
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
    const fullType = typeInfo.descriptor ? getFullImportPath(ctx, file, typeInfo.descriptor) : null;
    const tsType = getTsTypeByTypeInfo(typeInfo) ?? fullType ?? '';
    const typeMarker = getTypeMarkerByTypeInfo(typeInfo);

    return {
        protoType,
        desc: typeInfo.descriptor ?? null,
        defaultValue: getDefaultValue(typeInfo, tsType, typeMarker, fullType),
        pjsFn: getPjsFnNameByTypeInfo(typeInfo),
        tsType,
        jsonType: getJsonTypeByTypeInfo(typeInfo) ?? `${fullType}JSON`,
        fullType,
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