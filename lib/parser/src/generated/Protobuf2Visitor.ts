// Generated from ./Protobuf2.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Protobuf2Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class Protobuf2Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.proto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProto?: (ctx: ProtoContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.syntax`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyntax?: (ctx: SyntaxContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.packageStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageStatement?: (ctx: PackageStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.optionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionStatement?: (ctx: OptionStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.optionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionName?: (ctx: OptionNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.fieldLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldLabel?: (ctx: FieldLabelContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.fieldOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldOptions?: (ctx: FieldOptionsContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.fieldOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldOption?: (ctx: FieldOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.fieldNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldNumber?: (ctx: FieldNumberContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.oneof`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOneof?: (ctx: OneofContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.oneofField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOneofField?: (ctx: OneofFieldContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.mapField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapField?: (ctx: MapFieldContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.keyType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyType?: (ctx: KeyTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.type_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_?: (ctx: Type_Context) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.extensions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensions?: (ctx: ExtensionsContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.reserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReserved?: (ctx: ReservedContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.ranges`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRanges?: (ctx: RangesContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.range_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRange_?: (ctx: Range_Context) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.reservedFieldNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedFieldNames?: (ctx: ReservedFieldNamesContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.topLevelDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopLevelDef?: (ctx: TopLevelDefContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.enumDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDef?: (ctx: EnumDefContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.enumBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBody?: (ctx: EnumBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.enumElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumElement?: (ctx: EnumElementContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.enumField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumField?: (ctx: EnumFieldContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.enumValueOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumValueOptions?: (ctx: EnumValueOptionsContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.enumValueOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumValueOption?: (ctx: EnumValueOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.messageDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageDef?: (ctx: MessageDefContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.messageBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageBody?: (ctx: MessageBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.messageElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageElement?: (ctx: MessageElementContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.extendDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendDef?: (ctx: ExtendDefContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.extendElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendElement?: (ctx: ExtendElementContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.serviceDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServiceDef?: (ctx: ServiceDefContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.serviceElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServiceElement?: (ctx: ServiceElementContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.rpc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpc?: (ctx: RpcContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.stream`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStream?: (ctx: StreamContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.blockLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockLit?: (ctx: BlockLitContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.emptyStatement_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement_?: (ctx: EmptyStatement_Context) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdent?: (ctx: IdentContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.fullIdent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullIdent?: (ctx: FullIdentContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.messageName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageName?: (ctx: MessageNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.enumName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumName?: (ctx: EnumNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.fieldName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldName?: (ctx: FieldNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.groupName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupName?: (ctx: GroupNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.oneofName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOneofName?: (ctx: OneofNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.mapName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapName?: (ctx: MapNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.serviceName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServiceName?: (ctx: ServiceNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.rpcName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpcName?: (ctx: RpcNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.streamName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStreamName?: (ctx: StreamNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.messageType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageType?: (ctx: MessageTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.enumType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumType?: (ctx: EnumTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.intLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntLit?: (ctx: IntLitContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.strLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrLit?: (ctx: StrLitContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.boolLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolLit?: (ctx: BoolLitContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.floatLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatLit?: (ctx: FloatLitContext) => Result;
	/**
	 * Visit a parse tree produced by `Protobuf2Parser.keywords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywords?: (ctx: KeywordsContext) => Result;
}

