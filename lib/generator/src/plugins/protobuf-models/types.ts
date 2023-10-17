import { FileDescriptor } from "@catfish/parser";
import { Context, Import, TypeInfo } from "../../Context";

export type TypeMarker = "BigInt" | "Primitive" | "Bytes" | "Message" | "Enum";

export type MapTypeCtx = {
    keyTypeInfo: TypeInfoCtx
    valueTypeInfo: TypeInfoCtx
}

export type EnumFieldCtx = {
    fieldName: string
    fieldValue: number
}

export type EnumCtx = {
    name: string
    fields: EnumFieldCtx[]
}

export type MessageFieldCtx = {
    rawName: string,
    fieldName: string
    fieldTypeInfo: TypeInfoCtx | null
    fieldNumber: number
    fieldTag: number | null
    isRepeated: boolean
    isOptional: boolean
    isMap: boolean
    isOneof: boolean
    oneofName?: string
    mapType?: MapTypeCtx
}

export type MessageCtx = {
    jsonIfaceName: string
    modelClassName: string
    messageIndex: number
    pivot: number
    fields: MessageFieldCtx[]
    mesages: MessageCtx[]
    enums: EnumCtx[]
}

export type FileCtx = {
    context: Context
    descriptor: FileDescriptor
    imports: Import[]
    messges: MessageCtx[]
    enums: EnumCtx[]
}

export type TypeInfoCtx = TypeInfo & {
    tsType: string,
    jsonType: string,
    fullType: string | null,
    typeMarker: TypeMarker,
}