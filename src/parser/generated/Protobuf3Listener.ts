// Generated from ./Protobuf3.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { ProtoContext } from "./Protobuf3Parser";
import { SyntaxContext } from "./Protobuf3Parser";
import { ImportStatementContext } from "./Protobuf3Parser";
import { PackageStatementContext } from "./Protobuf3Parser";
import { OptionStatementContext } from "./Protobuf3Parser";
import { OptionNameContext } from "./Protobuf3Parser";
import { FieldLabelContext } from "./Protobuf3Parser";
import { FieldContext } from "./Protobuf3Parser";
import { FieldOptionsContext } from "./Protobuf3Parser";
import { FieldOptionContext } from "./Protobuf3Parser";
import { FieldNumberContext } from "./Protobuf3Parser";
import { OneofContext } from "./Protobuf3Parser";
import { OneofFieldContext } from "./Protobuf3Parser";
import { MapFieldContext } from "./Protobuf3Parser";
import { KeyTypeContext } from "./Protobuf3Parser";
import { Type_Context } from "./Protobuf3Parser";
import { ReservedContext } from "./Protobuf3Parser";
import { RangesContext } from "./Protobuf3Parser";
import { Range_Context } from "./Protobuf3Parser";
import { ReservedFieldNamesContext } from "./Protobuf3Parser";
import { TopLevelDefContext } from "./Protobuf3Parser";
import { EnumDefContext } from "./Protobuf3Parser";
import { EnumBodyContext } from "./Protobuf3Parser";
import { EnumElementContext } from "./Protobuf3Parser";
import { EnumFieldContext } from "./Protobuf3Parser";
import { EnumValueOptionsContext } from "./Protobuf3Parser";
import { EnumValueOptionContext } from "./Protobuf3Parser";
import { MessageDefContext } from "./Protobuf3Parser";
import { MessageBodyContext } from "./Protobuf3Parser";
import { MessageElementContext } from "./Protobuf3Parser";
import { ExtendDefContext } from "./Protobuf3Parser";
import { ServiceDefContext } from "./Protobuf3Parser";
import { ServiceElementContext } from "./Protobuf3Parser";
import { RpcContext } from "./Protobuf3Parser";
import { ConstantContext } from "./Protobuf3Parser";
import { BlockLitContext } from "./Protobuf3Parser";
import { EmptyStatement_Context } from "./Protobuf3Parser";
import { IdentContext } from "./Protobuf3Parser";
import { FullIdentContext } from "./Protobuf3Parser";
import { MessageNameContext } from "./Protobuf3Parser";
import { EnumNameContext } from "./Protobuf3Parser";
import { FieldNameContext } from "./Protobuf3Parser";
import { OneofNameContext } from "./Protobuf3Parser";
import { MapNameContext } from "./Protobuf3Parser";
import { ServiceNameContext } from "./Protobuf3Parser";
import { RpcNameContext } from "./Protobuf3Parser";
import { MessageTypeContext } from "./Protobuf3Parser";
import { EnumTypeContext } from "./Protobuf3Parser";
import { IntLitContext } from "./Protobuf3Parser";
import { StrLitContext } from "./Protobuf3Parser";
import { BoolLitContext } from "./Protobuf3Parser";
import { FloatLitContext } from "./Protobuf3Parser";
import { KeywordsContext } from "./Protobuf3Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `Protobuf3Parser`.
 */
export default class Protobuf3Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.proto`.
	 * @param ctx the parse tree
	 */
	enterProto?: (ctx: ProtoContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.proto`.
	 * @param ctx the parse tree
	 */
	exitProto?: (ctx: ProtoContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.syntax`.
	 * @param ctx the parse tree
	 */
	enterSyntax?: (ctx: SyntaxContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.syntax`.
	 * @param ctx the parse tree
	 */
	exitSyntax?: (ctx: SyntaxContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.packageStatement`.
	 * @param ctx the parse tree
	 */
	enterPackageStatement?: (ctx: PackageStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.packageStatement`.
	 * @param ctx the parse tree
	 */
	exitPackageStatement?: (ctx: PackageStatementContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.optionStatement`.
	 * @param ctx the parse tree
	 */
	enterOptionStatement?: (ctx: OptionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.optionStatement`.
	 * @param ctx the parse tree
	 */
	exitOptionStatement?: (ctx: OptionStatementContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.optionName`.
	 * @param ctx the parse tree
	 */
	enterOptionName?: (ctx: OptionNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.optionName`.
	 * @param ctx the parse tree
	 */
	exitOptionName?: (ctx: OptionNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.fieldLabel`.
	 * @param ctx the parse tree
	 */
	enterFieldLabel?: (ctx: FieldLabelContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.fieldLabel`.
	 * @param ctx the parse tree
	 */
	exitFieldLabel?: (ctx: FieldLabelContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.fieldOptions`.
	 * @param ctx the parse tree
	 */
	enterFieldOptions?: (ctx: FieldOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.fieldOptions`.
	 * @param ctx the parse tree
	 */
	exitFieldOptions?: (ctx: FieldOptionsContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.fieldOption`.
	 * @param ctx the parse tree
	 */
	enterFieldOption?: (ctx: FieldOptionContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.fieldOption`.
	 * @param ctx the parse tree
	 */
	exitFieldOption?: (ctx: FieldOptionContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.fieldNumber`.
	 * @param ctx the parse tree
	 */
	enterFieldNumber?: (ctx: FieldNumberContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.fieldNumber`.
	 * @param ctx the parse tree
	 */
	exitFieldNumber?: (ctx: FieldNumberContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.oneof`.
	 * @param ctx the parse tree
	 */
	enterOneof?: (ctx: OneofContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.oneof`.
	 * @param ctx the parse tree
	 */
	exitOneof?: (ctx: OneofContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.oneofField`.
	 * @param ctx the parse tree
	 */
	enterOneofField?: (ctx: OneofFieldContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.oneofField`.
	 * @param ctx the parse tree
	 */
	exitOneofField?: (ctx: OneofFieldContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.mapField`.
	 * @param ctx the parse tree
	 */
	enterMapField?: (ctx: MapFieldContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.mapField`.
	 * @param ctx the parse tree
	 */
	exitMapField?: (ctx: MapFieldContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.keyType`.
	 * @param ctx the parse tree
	 */
	enterKeyType?: (ctx: KeyTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.keyType`.
	 * @param ctx the parse tree
	 */
	exitKeyType?: (ctx: KeyTypeContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.type_`.
	 * @param ctx the parse tree
	 */
	enterType_?: (ctx: Type_Context) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.type_`.
	 * @param ctx the parse tree
	 */
	exitType_?: (ctx: Type_Context) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.reserved`.
	 * @param ctx the parse tree
	 */
	enterReserved?: (ctx: ReservedContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.reserved`.
	 * @param ctx the parse tree
	 */
	exitReserved?: (ctx: ReservedContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.ranges`.
	 * @param ctx the parse tree
	 */
	enterRanges?: (ctx: RangesContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.ranges`.
	 * @param ctx the parse tree
	 */
	exitRanges?: (ctx: RangesContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.range_`.
	 * @param ctx the parse tree
	 */
	enterRange_?: (ctx: Range_Context) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.range_`.
	 * @param ctx the parse tree
	 */
	exitRange_?: (ctx: Range_Context) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.reservedFieldNames`.
	 * @param ctx the parse tree
	 */
	enterReservedFieldNames?: (ctx: ReservedFieldNamesContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.reservedFieldNames`.
	 * @param ctx the parse tree
	 */
	exitReservedFieldNames?: (ctx: ReservedFieldNamesContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.topLevelDef`.
	 * @param ctx the parse tree
	 */
	enterTopLevelDef?: (ctx: TopLevelDefContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.topLevelDef`.
	 * @param ctx the parse tree
	 */
	exitTopLevelDef?: (ctx: TopLevelDefContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.enumDef`.
	 * @param ctx the parse tree
	 */
	enterEnumDef?: (ctx: EnumDefContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.enumDef`.
	 * @param ctx the parse tree
	 */
	exitEnumDef?: (ctx: EnumDefContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.enumBody`.
	 * @param ctx the parse tree
	 */
	enterEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.enumBody`.
	 * @param ctx the parse tree
	 */
	exitEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.enumElement`.
	 * @param ctx the parse tree
	 */
	enterEnumElement?: (ctx: EnumElementContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.enumElement`.
	 * @param ctx the parse tree
	 */
	exitEnumElement?: (ctx: EnumElementContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.enumField`.
	 * @param ctx the parse tree
	 */
	enterEnumField?: (ctx: EnumFieldContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.enumField`.
	 * @param ctx the parse tree
	 */
	exitEnumField?: (ctx: EnumFieldContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.enumValueOptions`.
	 * @param ctx the parse tree
	 */
	enterEnumValueOptions?: (ctx: EnumValueOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.enumValueOptions`.
	 * @param ctx the parse tree
	 */
	exitEnumValueOptions?: (ctx: EnumValueOptionsContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.enumValueOption`.
	 * @param ctx the parse tree
	 */
	enterEnumValueOption?: (ctx: EnumValueOptionContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.enumValueOption`.
	 * @param ctx the parse tree
	 */
	exitEnumValueOption?: (ctx: EnumValueOptionContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.messageDef`.
	 * @param ctx the parse tree
	 */
	enterMessageDef?: (ctx: MessageDefContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.messageDef`.
	 * @param ctx the parse tree
	 */
	exitMessageDef?: (ctx: MessageDefContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.messageBody`.
	 * @param ctx the parse tree
	 */
	enterMessageBody?: (ctx: MessageBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.messageBody`.
	 * @param ctx the parse tree
	 */
	exitMessageBody?: (ctx: MessageBodyContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.messageElement`.
	 * @param ctx the parse tree
	 */
	enterMessageElement?: (ctx: MessageElementContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.messageElement`.
	 * @param ctx the parse tree
	 */
	exitMessageElement?: (ctx: MessageElementContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.extendDef`.
	 * @param ctx the parse tree
	 */
	enterExtendDef?: (ctx: ExtendDefContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.extendDef`.
	 * @param ctx the parse tree
	 */
	exitExtendDef?: (ctx: ExtendDefContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.serviceDef`.
	 * @param ctx the parse tree
	 */
	enterServiceDef?: (ctx: ServiceDefContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.serviceDef`.
	 * @param ctx the parse tree
	 */
	exitServiceDef?: (ctx: ServiceDefContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.serviceElement`.
	 * @param ctx the parse tree
	 */
	enterServiceElement?: (ctx: ServiceElementContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.serviceElement`.
	 * @param ctx the parse tree
	 */
	exitServiceElement?: (ctx: ServiceElementContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.rpc`.
	 * @param ctx the parse tree
	 */
	enterRpc?: (ctx: RpcContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.rpc`.
	 * @param ctx the parse tree
	 */
	exitRpc?: (ctx: RpcContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.blockLit`.
	 * @param ctx the parse tree
	 */
	enterBlockLit?: (ctx: BlockLitContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.blockLit`.
	 * @param ctx the parse tree
	 */
	exitBlockLit?: (ctx: BlockLitContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.emptyStatement_`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement_?: (ctx: EmptyStatement_Context) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.emptyStatement_`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement_?: (ctx: EmptyStatement_Context) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.ident`.
	 * @param ctx the parse tree
	 */
	enterIdent?: (ctx: IdentContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.ident`.
	 * @param ctx the parse tree
	 */
	exitIdent?: (ctx: IdentContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.fullIdent`.
	 * @param ctx the parse tree
	 */
	enterFullIdent?: (ctx: FullIdentContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.fullIdent`.
	 * @param ctx the parse tree
	 */
	exitFullIdent?: (ctx: FullIdentContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.messageName`.
	 * @param ctx the parse tree
	 */
	enterMessageName?: (ctx: MessageNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.messageName`.
	 * @param ctx the parse tree
	 */
	exitMessageName?: (ctx: MessageNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.enumName`.
	 * @param ctx the parse tree
	 */
	enterEnumName?: (ctx: EnumNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.enumName`.
	 * @param ctx the parse tree
	 */
	exitEnumName?: (ctx: EnumNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.fieldName`.
	 * @param ctx the parse tree
	 */
	enterFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.fieldName`.
	 * @param ctx the parse tree
	 */
	exitFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.oneofName`.
	 * @param ctx the parse tree
	 */
	enterOneofName?: (ctx: OneofNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.oneofName`.
	 * @param ctx the parse tree
	 */
	exitOneofName?: (ctx: OneofNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.mapName`.
	 * @param ctx the parse tree
	 */
	enterMapName?: (ctx: MapNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.mapName`.
	 * @param ctx the parse tree
	 */
	exitMapName?: (ctx: MapNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.serviceName`.
	 * @param ctx the parse tree
	 */
	enterServiceName?: (ctx: ServiceNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.serviceName`.
	 * @param ctx the parse tree
	 */
	exitServiceName?: (ctx: ServiceNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.rpcName`.
	 * @param ctx the parse tree
	 */
	enterRpcName?: (ctx: RpcNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.rpcName`.
	 * @param ctx the parse tree
	 */
	exitRpcName?: (ctx: RpcNameContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.messageType`.
	 * @param ctx the parse tree
	 */
	enterMessageType?: (ctx: MessageTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.messageType`.
	 * @param ctx the parse tree
	 */
	exitMessageType?: (ctx: MessageTypeContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.enumType`.
	 * @param ctx the parse tree
	 */
	enterEnumType?: (ctx: EnumTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.enumType`.
	 * @param ctx the parse tree
	 */
	exitEnumType?: (ctx: EnumTypeContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.intLit`.
	 * @param ctx the parse tree
	 */
	enterIntLit?: (ctx: IntLitContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.intLit`.
	 * @param ctx the parse tree
	 */
	exitIntLit?: (ctx: IntLitContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.strLit`.
	 * @param ctx the parse tree
	 */
	enterStrLit?: (ctx: StrLitContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.strLit`.
	 * @param ctx the parse tree
	 */
	exitStrLit?: (ctx: StrLitContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.boolLit`.
	 * @param ctx the parse tree
	 */
	enterBoolLit?: (ctx: BoolLitContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.boolLit`.
	 * @param ctx the parse tree
	 */
	exitBoolLit?: (ctx: BoolLitContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.floatLit`.
	 * @param ctx the parse tree
	 */
	enterFloatLit?: (ctx: FloatLitContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.floatLit`.
	 * @param ctx the parse tree
	 */
	exitFloatLit?: (ctx: FloatLitContext) => void;
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.keywords`.
	 * @param ctx the parse tree
	 */
	enterKeywords?: (ctx: KeywordsContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.keywords`.
	 * @param ctx the parse tree
	 */
	exitKeywords?: (ctx: KeywordsContext) => void;
}

