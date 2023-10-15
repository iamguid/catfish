import { FileDescriptor } from "../../../parser";
import { Context, Import, TypeInfo } from "../../Context";

export type MapTypeCtx = {
    keyTypeInfo: TypeInfoCtx
    valueTypeInfo: TypeInfoCtx
    valueTypeIsMessage: boolean
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
    fieldTag: number
    isMessageType: boolean
    isRepeated: boolean
    isOptional: boolean
    isMap: boolean
    isOneof: boolean
    oneofName?: string
    mapType?: MapTypeCtx
}

export type MessageCtx = {
    modelIfaceName: string
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
    tsType: string | null,
    jsonType: string | null,
    modelFullImportName?: string
}