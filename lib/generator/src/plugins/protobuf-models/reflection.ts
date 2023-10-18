import { EnumDescriptor, MessageFieldDescriptor, FileDescriptor, MessageDescriptor, OneofDescriptor } from "@catfish/parser";
import { Context, Import, TypeInfo } from "../../Context";
import { EnumFieldDescriptor } from "@catfish/parser/src/reflection/EnumFieldDescriptor";
import { MapFieldDescriptor } from "@catfish/parser/src/reflection/MapFieldDescriptor";
import { OneofFieldContext } from "@catfish/parser/src/generated/Protobuf2Parser";

export type TypeMarker = "BigInt" | "Primitive" | "Bytes" | "Message" | "Enum";

export class CtxEnum {
    constructor(
        private ctx: Context,
        private desc: EnumDescriptor,
        private fields: CtxEnumField[],
    ) {}
}

export class CtxEnumField {
    constructor(
        private ctx: Context,
        private desc: EnumFieldDescriptor,
    ) {}
}

export class CtxMessageField {
    constructor(
        private readonly ctx: Context,
        private readonly desc: MessageFieldDescriptor,
    ) {}
}

export class CtxMapField {
    constructor(
        private readonly ctx: Context,
        private readonly desc: MapFieldDescriptor,
    ) {}
}

export class CtxOneof {
    constructor(
        private readonly ctx: Context,
        private readonly desc: OneofDescriptor,
    ) {}
}

export class CtxOneofField {
    constructor(
        private readonly ctx: Context,
        private readonly desc: MessageFieldDescriptor,
    ) {}
}

export class CtxMessage {
    constructor(
        private readonly ctx: Context,
        private readonly desc: MessageDescriptor,
        public readonly fields: (CtxMapField | CtxMessageField | CtxOneof)[],
        public readonly enums: CtxEnum[],
        public readonly messages: CtxMessage[],
    ) {}

    get className() {
        return this.desc.name;
    }

    get jsonIfaceName() {
        return `${this.desc.name}JSON`
    }
}

export class CtxFile {
    constructor(
        private ctx: Context,
        private desc: FileDescriptor,
        public readonly imports: Import[],
        public readonly enums: CtxEnum[],
        public readonly messages: CtxMessage[],
    ) {}
}

export class CtxTypeInfo {
    constructor(private typeInfo: TypeInfo) {}
}
