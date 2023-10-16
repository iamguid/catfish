// Generated from ./Protobuf3.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Protobuf3Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class Protobuf3Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.proto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProto?: (ctx: ProtoContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.syntax`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyntax?: (ctx: SyntaxContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.packageStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageStatement?: (ctx: PackageStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.optionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionStatement?: (ctx: OptionStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.optionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionName?: (ctx: OptionNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.fieldLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldLabel?: (ctx: FieldLabelContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.fieldOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldOptions?: (ctx: FieldOptionsContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.fieldOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldOption?: (ctx: FieldOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.fieldNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldNumber?: (ctx: FieldNumberContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.oneof`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOneof?: (ctx: OneofContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.oneofField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOneofField?: (ctx: OneofFieldContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.mapField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapField?: (ctx: MapFieldContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.keyType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyType?: (ctx: KeyTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.type_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_?: (ctx: Type_Context) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.reserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReserved?: (ctx: ReservedContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.ranges`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRanges?: (ctx: RangesContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.range_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRange_?: (ctx: Range_Context) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.reservedFieldNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedFieldNames?: (ctx: ReservedFieldNamesContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.topLevelDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopLevelDef?: (ctx: TopLevelDefContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.enumDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDef?: (ctx: EnumDefContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.enumBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBody?: (ctx: EnumBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.enumElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumElement?: (ctx: EnumElementContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.enumField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumField?: (ctx: EnumFieldContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.enumValueOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumValueOptions?: (ctx: EnumValueOptionsContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.enumValueOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumValueOption?: (ctx: EnumValueOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.messageDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageDef?: (ctx: MessageDefContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.messageBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageBody?: (ctx: MessageBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.messageElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageElement?: (ctx: MessageElementContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.extendDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendDef?: (ctx: ExtendDefContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.serviceDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServiceDef?: (ctx: ServiceDefContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.serviceElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServiceElement?: (ctx: ServiceElementContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.rpc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpc?: (ctx: RpcContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.blockLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockLit?: (ctx: BlockLitContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.emptyStatement_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement_?: (ctx: EmptyStatement_Context) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdent?: (ctx: IdentContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.fullIdent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullIdent?: (ctx: FullIdentContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.messageName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageName?: (ctx: MessageNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.enumName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumName?: (ctx: EnumNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.fieldName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldName?: (ctx: FieldNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.oneofName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOneofName?: (ctx: OneofNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.mapName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapName?: (ctx: MapNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.serviceName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServiceName?: (ctx: ServiceNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.rpcName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpcName?: (ctx: RpcNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.messageType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageType?: (ctx: MessageTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.enumType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumType?: (ctx: EnumTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.intLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntLit?: (ctx: IntLitContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.strLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrLit?: (ctx: StrLitContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.boolLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolLit?: (ctx: BoolLitContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.floatLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatLit?: (ctx: FloatLitContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf3Parser.keywords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywords?: (ctx: KeywordsContext) => Result;
}

