// Generated from ./Protobuf2.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { ProtoContext } from "./Protobuf2Parser";
import { SyntaxContext } from "./Protobuf2Parser";
import { ImportStatementContext } from "./Protobuf2Parser";
import { PackageStatementContext } from "./Protobuf2Parser";
import { OptionStatementContext } from "./Protobuf2Parser";
import { OptionNameContext } from "./Protobuf2Parser";
import { FieldLabelContext } from "./Protobuf2Parser";
import { FieldContext } from "./Protobuf2Parser";
import { FieldOptionsContext } from "./Protobuf2Parser";
import { FieldOptionContext } from "./Protobuf2Parser";
import { FieldNumberContext } from "./Protobuf2Parser";
import { GroupContext } from "./Protobuf2Parser";
import { OneofContext } from "./Protobuf2Parser";
import { OneofFieldContext } from "./Protobuf2Parser";
import { MapFieldContext } from "./Protobuf2Parser";
import { KeyTypeContext } from "./Protobuf2Parser";
import { Type_Context } from "./Protobuf2Parser";
import { ExtensionsContext } from "./Protobuf2Parser";
import { ReservedContext } from "./Protobuf2Parser";
import { RangesContext } from "./Protobuf2Parser";
import { Range_Context } from "./Protobuf2Parser";
import { ReservedFieldNamesContext } from "./Protobuf2Parser";
import { TopLevelDefContext } from "./Protobuf2Parser";
import { EnumDefContext } from "./Protobuf2Parser";
import { EnumBodyContext } from "./Protobuf2Parser";
import { EnumElementContext } from "./Protobuf2Parser";
import { EnumFieldContext } from "./Protobuf2Parser";
import { EnumValueOptionsContext } from "./Protobuf2Parser";
import { EnumValueOptionContext } from "./Protobuf2Parser";
import { MessageDefContext } from "./Protobuf2Parser";
import { MessageBodyContext } from "./Protobuf2Parser";
import { MessageElementContext } from "./Protobuf2Parser";
import { ExtendDefContext } from "./Protobuf2Parser";
import { ExtendElementContext } from "./Protobuf2Parser";
import { ServiceDefContext } from "./Protobuf2Parser";
import { ServiceElementContext } from "./Protobuf2Parser";
import { RpcContext } from "./Protobuf2Parser";
import { StreamContext } from "./Protobuf2Parser";
import { ConstantContext } from "./Protobuf2Parser";
import { BlockLitContext } from "./Protobuf2Parser";
import { EmptyStatement_Context } from "./Protobuf2Parser";
import { IdentContext } from "./Protobuf2Parser";
import { FullIdentContext } from "./Protobuf2Parser";
import { MessageNameContext } from "./Protobuf2Parser";
import { EnumNameContext } from "./Protobuf2Parser";
import { FieldNameContext } from "./Protobuf2Parser";
import { GroupNameContext } from "./Protobuf2Parser";
import { OneofNameContext } from "./Protobuf2Parser";
import { MapNameContext } from "./Protobuf2Parser";
import { ServiceNameContext } from "./Protobuf2Parser";
import { RpcNameContext } from "./Protobuf2Parser";
import { StreamNameContext } from "./Protobuf2Parser";
import { MessageTypeContext } from "./Protobuf2Parser";
import { EnumTypeContext } from "./Protobuf2Parser";
import { IntLitContext } from "./Protobuf2Parser";
import { StrLitContext } from "./Protobuf2Parser";
import { BoolLitContext } from "./Protobuf2Parser";
import { FloatLitContext } from "./Protobuf2Parser";
import { KeywordsContext } from "./Protobuf2Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `Protobuf2Parser`.
 */
export default class Protobuf2Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.proto`.
	 * @param ctx the parse tree
	 */
	enterProto?: (ctx: ProtoContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.proto`.
	 * @param ctx the parse tree
	 */
	exitProto?: (ctx: ProtoContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.syntax`.
	 * @param ctx the parse tree
	 */
	enterSyntax?: (ctx: SyntaxContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.syntax`.
	 * @param ctx the parse tree
	 */
	exitSyntax?: (ctx: SyntaxContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.packageStatement`.
	 * @param ctx the parse tree
	 */
	enterPackageStatement?: (ctx: PackageStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.packageStatement`.
	 * @param ctx the parse tree
	 */
	exitPackageStatement?: (ctx: PackageStatementContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.optionStatement`.
	 * @param ctx the parse tree
	 */
	enterOptionStatement?: (ctx: OptionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.optionStatement`.
	 * @param ctx the parse tree
	 */
	exitOptionStatement?: (ctx: OptionStatementContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.optionName`.
	 * @param ctx the parse tree
	 */
	enterOptionName?: (ctx: OptionNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.optionName`.
	 * @param ctx the parse tree
	 */
	exitOptionName?: (ctx: OptionNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.fieldLabel`.
	 * @param ctx the parse tree
	 */
	enterFieldLabel?: (ctx: FieldLabelContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.fieldLabel`.
	 * @param ctx the parse tree
	 */
	exitFieldLabel?: (ctx: FieldLabelContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.fieldOptions`.
	 * @param ctx the parse tree
	 */
	enterFieldOptions?: (ctx: FieldOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.fieldOptions`.
	 * @param ctx the parse tree
	 */
	exitFieldOptions?: (ctx: FieldOptionsContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.fieldOption`.
	 * @param ctx the parse tree
	 */
	enterFieldOption?: (ctx: FieldOptionContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.fieldOption`.
	 * @param ctx the parse tree
	 */
	exitFieldOption?: (ctx: FieldOptionContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.fieldNumber`.
	 * @param ctx the parse tree
	 */
	enterFieldNumber?: (ctx: FieldNumberContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.fieldNumber`.
	 * @param ctx the parse tree
	 */
	exitFieldNumber?: (ctx: FieldNumberContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.oneof`.
	 * @param ctx the parse tree
	 */
	enterOneof?: (ctx: OneofContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.oneof`.
	 * @param ctx the parse tree
	 */
	exitOneof?: (ctx: OneofContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.oneofField`.
	 * @param ctx the parse tree
	 */
	enterOneofField?: (ctx: OneofFieldContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.oneofField`.
	 * @param ctx the parse tree
	 */
	exitOneofField?: (ctx: OneofFieldContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.mapField`.
	 * @param ctx the parse tree
	 */
	enterMapField?: (ctx: MapFieldContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.mapField`.
	 * @param ctx the parse tree
	 */
	exitMapField?: (ctx: MapFieldContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.keyType`.
	 * @param ctx the parse tree
	 */
	enterKeyType?: (ctx: KeyTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.keyType`.
	 * @param ctx the parse tree
	 */
	exitKeyType?: (ctx: KeyTypeContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.type_`.
	 * @param ctx the parse tree
	 */
	enterType_?: (ctx: Type_Context) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.type_`.
	 * @param ctx the parse tree
	 */
	exitType_?: (ctx: Type_Context) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.extensions`.
	 * @param ctx the parse tree
	 */
	enterExtensions?: (ctx: ExtensionsContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.extensions`.
	 * @param ctx the parse tree
	 */
	exitExtensions?: (ctx: ExtensionsContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.reserved`.
	 * @param ctx the parse tree
	 */
	enterReserved?: (ctx: ReservedContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.reserved`.
	 * @param ctx the parse tree
	 */
	exitReserved?: (ctx: ReservedContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.ranges`.
	 * @param ctx the parse tree
	 */
	enterRanges?: (ctx: RangesContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.ranges`.
	 * @param ctx the parse tree
	 */
	exitRanges?: (ctx: RangesContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.range_`.
	 * @param ctx the parse tree
	 */
	enterRange_?: (ctx: Range_Context) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.range_`.
	 * @param ctx the parse tree
	 */
	exitRange_?: (ctx: Range_Context) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.reservedFieldNames`.
	 * @param ctx the parse tree
	 */
	enterReservedFieldNames?: (ctx: ReservedFieldNamesContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.reservedFieldNames`.
	 * @param ctx the parse tree
	 */
	exitReservedFieldNames?: (ctx: ReservedFieldNamesContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.topLevelDef`.
	 * @param ctx the parse tree
	 */
	enterTopLevelDef?: (ctx: TopLevelDefContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.topLevelDef`.
	 * @param ctx the parse tree
	 */
	exitTopLevelDef?: (ctx: TopLevelDefContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.enumDef`.
	 * @param ctx the parse tree
	 */
	enterEnumDef?: (ctx: EnumDefContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.enumDef`.
	 * @param ctx the parse tree
	 */
	exitEnumDef?: (ctx: EnumDefContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.enumBody`.
	 * @param ctx the parse tree
	 */
	enterEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.enumBody`.
	 * @param ctx the parse tree
	 */
	exitEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.enumElement`.
	 * @param ctx the parse tree
	 */
	enterEnumElement?: (ctx: EnumElementContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.enumElement`.
	 * @param ctx the parse tree
	 */
	exitEnumElement?: (ctx: EnumElementContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.enumField`.
	 * @param ctx the parse tree
	 */
	enterEnumField?: (ctx: EnumFieldContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.enumField`.
	 * @param ctx the parse tree
	 */
	exitEnumField?: (ctx: EnumFieldContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.enumValueOptions`.
	 * @param ctx the parse tree
	 */
	enterEnumValueOptions?: (ctx: EnumValueOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.enumValueOptions`.
	 * @param ctx the parse tree
	 */
	exitEnumValueOptions?: (ctx: EnumValueOptionsContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.enumValueOption`.
	 * @param ctx the parse tree
	 */
	enterEnumValueOption?: (ctx: EnumValueOptionContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.enumValueOption`.
	 * @param ctx the parse tree
	 */
	exitEnumValueOption?: (ctx: EnumValueOptionContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.messageDef`.
	 * @param ctx the parse tree
	 */
	enterMessageDef?: (ctx: MessageDefContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.messageDef`.
	 * @param ctx the parse tree
	 */
	exitMessageDef?: (ctx: MessageDefContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.messageBody`.
	 * @param ctx the parse tree
	 */
	enterMessageBody?: (ctx: MessageBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.messageBody`.
	 * @param ctx the parse tree
	 */
	exitMessageBody?: (ctx: MessageBodyContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.messageElement`.
	 * @param ctx the parse tree
	 */
	enterMessageElement?: (ctx: MessageElementContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.messageElement`.
	 * @param ctx the parse tree
	 */
	exitMessageElement?: (ctx: MessageElementContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.extendDef`.
	 * @param ctx the parse tree
	 */
	enterExtendDef?: (ctx: ExtendDefContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.extendDef`.
	 * @param ctx the parse tree
	 */
	exitExtendDef?: (ctx: ExtendDefContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.extendElement`.
	 * @param ctx the parse tree
	 */
	enterExtendElement?: (ctx: ExtendElementContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.extendElement`.
	 * @param ctx the parse tree
	 */
	exitExtendElement?: (ctx: ExtendElementContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.serviceDef`.
	 * @param ctx the parse tree
	 */
	enterServiceDef?: (ctx: ServiceDefContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.serviceDef`.
	 * @param ctx the parse tree
	 */
	exitServiceDef?: (ctx: ServiceDefContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.serviceElement`.
	 * @param ctx the parse tree
	 */
	enterServiceElement?: (ctx: ServiceElementContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.serviceElement`.
	 * @param ctx the parse tree
	 */
	exitServiceElement?: (ctx: ServiceElementContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.rpc`.
	 * @param ctx the parse tree
	 */
	enterRpc?: (ctx: RpcContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.rpc`.
	 * @param ctx the parse tree
	 */
	exitRpc?: (ctx: RpcContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.stream`.
	 * @param ctx the parse tree
	 */
	enterStream?: (ctx: StreamContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.stream`.
	 * @param ctx the parse tree
	 */
	exitStream?: (ctx: StreamContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.blockLit`.
	 * @param ctx the parse tree
	 */
	enterBlockLit?: (ctx: BlockLitContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.blockLit`.
	 * @param ctx the parse tree
	 */
	exitBlockLit?: (ctx: BlockLitContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.emptyStatement_`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement_?: (ctx: EmptyStatement_Context) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.emptyStatement_`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement_?: (ctx: EmptyStatement_Context) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.ident`.
	 * @param ctx the parse tree
	 */
	enterIdent?: (ctx: IdentContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.ident`.
	 * @param ctx the parse tree
	 */
	exitIdent?: (ctx: IdentContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.fullIdent`.
	 * @param ctx the parse tree
	 */
	enterFullIdent?: (ctx: FullIdentContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.fullIdent`.
	 * @param ctx the parse tree
	 */
	exitFullIdent?: (ctx: FullIdentContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.messageName`.
	 * @param ctx the parse tree
	 */
	enterMessageName?: (ctx: MessageNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.messageName`.
	 * @param ctx the parse tree
	 */
	exitMessageName?: (ctx: MessageNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.enumName`.
	 * @param ctx the parse tree
	 */
	enterEnumName?: (ctx: EnumNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.enumName`.
	 * @param ctx the parse tree
	 */
	exitEnumName?: (ctx: EnumNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.fieldName`.
	 * @param ctx the parse tree
	 */
	enterFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.fieldName`.
	 * @param ctx the parse tree
	 */
	exitFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.groupName`.
	 * @param ctx the parse tree
	 */
	enterGroupName?: (ctx: GroupNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.groupName`.
	 * @param ctx the parse tree
	 */
	exitGroupName?: (ctx: GroupNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.oneofName`.
	 * @param ctx the parse tree
	 */
	enterOneofName?: (ctx: OneofNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.oneofName`.
	 * @param ctx the parse tree
	 */
	exitOneofName?: (ctx: OneofNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.mapName`.
	 * @param ctx the parse tree
	 */
	enterMapName?: (ctx: MapNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.mapName`.
	 * @param ctx the parse tree
	 */
	exitMapName?: (ctx: MapNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.serviceName`.
	 * @param ctx the parse tree
	 */
	enterServiceName?: (ctx: ServiceNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.serviceName`.
	 * @param ctx the parse tree
	 */
	exitServiceName?: (ctx: ServiceNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.rpcName`.
	 * @param ctx the parse tree
	 */
	enterRpcName?: (ctx: RpcNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.rpcName`.
	 * @param ctx the parse tree
	 */
	exitRpcName?: (ctx: RpcNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.streamName`.
	 * @param ctx the parse tree
	 */
	enterStreamName?: (ctx: StreamNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.streamName`.
	 * @param ctx the parse tree
	 */
	exitStreamName?: (ctx: StreamNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.messageType`.
	 * @param ctx the parse tree
	 */
	enterMessageType?: (ctx: MessageTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.messageType`.
	 * @param ctx the parse tree
	 */
	exitMessageType?: (ctx: MessageTypeContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.enumType`.
	 * @param ctx the parse tree
	 */
	enterEnumType?: (ctx: EnumTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.enumType`.
	 * @param ctx the parse tree
	 */
	exitEnumType?: (ctx: EnumTypeContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.intLit`.
	 * @param ctx the parse tree
	 */
	enterIntLit?: (ctx: IntLitContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.intLit`.
	 * @param ctx the parse tree
	 */
	exitIntLit?: (ctx: IntLitContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.strLit`.
	 * @param ctx the parse tree
	 */
	enterStrLit?: (ctx: StrLitContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.strLit`.
	 * @param ctx the parse tree
	 */
	exitStrLit?: (ctx: StrLitContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.boolLit`.
	 * @param ctx the parse tree
	 */
	enterBoolLit?: (ctx: BoolLitContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.boolLit`.
	 * @param ctx the parse tree
	 */
	exitBoolLit?: (ctx: BoolLitContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.floatLit`.
	 * @param ctx the parse tree
	 */
	enterFloatLit?: (ctx: FloatLitContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.floatLit`.
	 * @param ctx the parse tree
	 */
	exitFloatLit?: (ctx: FloatLitContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf2Parser.keywords`.
	 * @param ctx the parse tree
	 */
	enterKeywords?: (ctx: KeywordsContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf2Parser.keywords`.
	 * @param ctx the parse tree
	 */
	exitKeywords?: (ctx: KeywordsContext) => void;
}

