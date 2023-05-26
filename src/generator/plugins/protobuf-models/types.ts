import { FileDescriptor } from "../../../parser";
import { Context, Import, TypeInfo } from "../../Context";

export type MapTypeCtx = {
    keyTypeInfo: TypeInfo
    valueTypeInfo: TypeInfo
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
    fieldName: string
    fieldTypeInfo: TypeInfo | null
    fieldNumber: number
    isMessageType: boolean
    isRepeated: boolean
    isMap: boolean
    isOneof: boolean
    oneofName?: string
    mapType?: MapTypeCtx
}

export type MessageCtx = {
    ifaceName: string
    modelName: string
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