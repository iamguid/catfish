import { EnumDescriptor, MessageFieldDescriptor, EnumFieldDescriptor, MapFieldDescriptor, FileDescriptor, MessageDescriptor, OneofDescriptor, BaseDescriptor } from "@catfish/parser";
import { Context, Import } from "../../Context";
import { getFullImportPath, getJsonTypeByTypeInfo, getTsTypeByTypeInfo, getTypeMarkerByTypeInfo, getWireTypeByTypeInfo, getPjsFnNameByTypeInfo, getScalarDefaultValue, getImports, getTag } from "./utils";
import { snakeToCamel, upperCaseFirst } from "../../utils";

export type TypeMarker = "BigInt" | "Primitive" | "Bytes" | "Message" | "Enum";

export class CtxFile {
    public readonly imports: Import[];
    public readonly enums: CtxEnum[];
    public readonly messages: CtxMessage[];

    constructor(
        private readonly ctx: Context,
        private readonly file: FileDescriptor,
    ) {
        this.imports = getImports(ctx, file);
        this.enums = file.enums.map(enm => new CtxEnum(ctx, file, enm));
        this.messages = file.messages.map(msg => buildMessageCtx(ctx, file, msg));
    }

    get filePath() {
        return this.ctx.getFilePathByDescriptor(this.file)
    }

    get package() {
        return this.file.package
    }
}

export class CtxEnum {
    public readonly fields: CtxEnumField[];

    constructor(
        private readonly ctx: Context,
        private readonly file: FileDescriptor,
        private readonly desc: EnumDescriptor,
    ) {
        this.fields = desc.fields.map(f => new CtxEnumField(ctx, file, f))
    }

    get name() {
        return this.desc.name
    }
}

export class CtxEnumField {
    constructor(
        private readonly ctx: Context,
        private readonly file: FileDescriptor,
        private readonly desc: EnumFieldDescriptor,
    ) {}

    get name() {
        return this.desc.fieldName
    }

    get value() {
        return this.desc.fieldValue
    }
}

export class CtxMessageField {
    public readonly typeInfo: CtxTypeInfo;

    constructor(
        private readonly ctx: Context,
        private readonly file: FileDescriptor,
        private readonly desc: MessageFieldDescriptor,
    ) {
        this.typeInfo = new CtxTypeInfo(ctx, file, desc.type);
    }

    get rawName() {
        return this.desc.name
    }

    get name() {
        return snakeToCamel(this.desc.name)
    }

    get number() {
        return this.desc.fieldNumber
    }

    get tag() {
        return getTag(this.desc.fieldNumber, getWireTypeByTypeInfo(this.typeInfo));
    }

    get repeated() {
        return this.desc.repeated
    }

    get optional() {
        return this.desc.optional
    }
}

export class CtxMapField {
    public readonly keyTypeInfo: CtxTypeInfo;
    public readonly valueTypeInfo: CtxTypeInfo;

    constructor(
        private readonly ctx: Context,
        private readonly file: FileDescriptor,
        private readonly desc: MapFieldDescriptor,
    ) {
        this.keyTypeInfo = new CtxTypeInfo(this.ctx, this.file, this.desc.keyType);
        this.valueTypeInfo = new CtxTypeInfo(this.ctx, this.file, this.desc.valueType);
    }

    get encodeMethodName() {
        return `encode${upperCaseFirst(snakeToCamel(this.desc.name))}`
    }

    get decodeMethodName() {
        return `decode${upperCaseFirst(snakeToCamel(this.desc.name))}`
    }

    get rawName() {
        return this.desc.name
    }

    get name() {
        return snakeToCamel(this.desc.name)
    }

    get number() {
        return this.desc.fieldNumber
    }

    get tag() {
        return getTag(this.number, 2);
    }

    get keyTag() {
        return getTag(1, getWireTypeByTypeInfo(this.keyTypeInfo));
    }
    
    get valueTag() {
        return getTag(2, getWireTypeByTypeInfo(this.valueTypeInfo));
    }
}

export class CtxOneof {
    constructor(
        private readonly ctx: Context,
        private readonly file: FileDescriptor,
        private readonly desc: OneofDescriptor,
    ) {}

    get name() {
        return this.desc.name
    }
}

export class CtxOneofField {
    public readonly typeInfo: CtxTypeInfo;

    constructor(
        private readonly ctx: Context,
        private readonly file: FileDescriptor,
        private readonly desc: MessageFieldDescriptor,
    ) {
        this.typeInfo = new CtxTypeInfo(ctx, file, desc.type);
    }
}

export class CtxMessage {
    constructor(
        private readonly ctx: Context,
        private readonly file: FileDescriptor,
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

export class CtxTypeInfo {
    constructor(
        private readonly ctx: Context,
        private readonly file: FileDescriptor,
        public readonly protoType: string,
    ) {}

    private get typeInfo() {
        return this.ctx.getTypeInfo(this.file, this.protoType);
    }

    get defaultValue() {
        if (this.typeInfo.descriptor instanceof MessageFieldDescriptor && this.typeInfo.descriptor.repeated) {
            return "[]";
        }

        if (this.typeMarker === "Message") {
            return `new ${this.tsType}()`;
        }

        if (this.typeMarker === "Enum") {
            const enm = this.typeInfo.descriptor as EnumDescriptor;
            return `${this.fullType}.${enm.fields[0].fieldName}`;
        }

        const primitive = getScalarDefaultValue(this.typeInfo)

        if (primitive) {
            return primitive;
        }

        throw new Error(`Cannot get default value for ${this.typeMarker} ${this.protoType}`)
    }

    get desc() {
        return this.typeInfo.descriptor;
    }

    get pjsFn() {
        return getPjsFnNameByTypeInfo(this.typeInfo);
    }

    get tsType() {
        return getTsTypeByTypeInfo(this.typeInfo) ?? this.fullType
    }

    get jsonType() {
        return getJsonTypeByTypeInfo(this.typeInfo) ?? `${this.fullType}JSON`;
    }

    get fullType() {
        return this.typeInfo.descriptor ? getFullImportPath(this.ctx, this.file, this.typeInfo.descriptor) : null;
    }

    get typeMarker() {
        return getTypeMarkerByTypeInfo(this.typeInfo)
    }
}

const buildMessageCtx = (ctx: Context, file: FileDescriptor, desc: MessageDescriptor): CtxMessage => {
    const fileds = desc.fields.map(field => buildFieldCtx(ctx, file, field))
    const nestedEnums = desc.enums.map(enm => new CtxEnum(ctx, file, enm));
    const nestedMessages = desc.messages.map(msg => buildMessageCtx(ctx, file, msg));

    return new CtxMessage(
        ctx,
        file,
        desc,
        fileds,
        nestedEnums,
        nestedMessages,
    )
}

const buildFieldCtx = (ctx: Context, file: FileDescriptor, desc: BaseDescriptor) => {
    if (desc instanceof MessageFieldDescriptor) {
        return new CtxMessageField(ctx, file, desc)
    }

    if (desc instanceof OneofDescriptor) {
        return new CtxOneof(ctx, file, desc)
    }

    if (desc instanceof MapFieldDescriptor) {
        return new CtxMapField(ctx, file, desc)
    }

    throw new Error("Invalid descriptor")
}