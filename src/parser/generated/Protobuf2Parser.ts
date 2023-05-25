// Generated from ./Protobuf2.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import Protobuf2Listener from "./Protobuf2Listener.js";
import Protobuf2Visitor from "./Protobuf2Visitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class Protobuf2Parser extends Parser {
	public static readonly SYNTAX = 1;
	public static readonly IMPORT = 2;
	public static readonly WEAK = 3;
	public static readonly PUBLIC = 4;
	public static readonly PACKAGE = 5;
	public static readonly OPTION = 6;
	public static readonly REPEATED = 7;
	public static readonly OPTIONAL = 8;
	public static readonly REQUIRED = 9;
	public static readonly GROUP = 10;
	public static readonly ONEOF = 11;
	public static readonly MAP = 12;
	public static readonly INT32 = 13;
	public static readonly INT64 = 14;
	public static readonly UINT32 = 15;
	public static readonly UINT64 = 16;
	public static readonly SINT32 = 17;
	public static readonly SINT64 = 18;
	public static readonly FIXED32 = 19;
	public static readonly FIXED64 = 20;
	public static readonly SFIXED32 = 21;
	public static readonly SFIXED64 = 22;
	public static readonly BOOL = 23;
	public static readonly STRING = 24;
	public static readonly DOUBLE = 25;
	public static readonly FLOAT = 26;
	public static readonly BYTES = 27;
	public static readonly RESERVED = 28;
	public static readonly EXTENSIONS = 29;
	public static readonly TO = 30;
	public static readonly MAX = 31;
	public static readonly ENUM = 32;
	public static readonly EXTEND = 33;
	public static readonly MESSAGE = 34;
	public static readonly SERVICE = 35;
	public static readonly RPC = 36;
	public static readonly STREAM = 37;
	public static readonly RETURNS = 38;
	public static readonly PROTO2_LIT_SINGLE = 39;
	public static readonly PROTO2_LIT_DOBULE = 40;
	public static readonly SEMI = 41;
	public static readonly EQ = 42;
	public static readonly LP = 43;
	public static readonly RP = 44;
	public static readonly LB = 45;
	public static readonly RB = 46;
	public static readonly LC = 47;
	public static readonly RC = 48;
	public static readonly LT = 49;
	public static readonly GT = 50;
	public static readonly DOT = 51;
	public static readonly COMMA = 52;
	public static readonly COLON = 53;
	public static readonly PLUS = 54;
	public static readonly MINUS = 55;
	public static readonly STR_LIT = 56;
	public static readonly BOOL_LIT = 57;
	public static readonly FLOAT_LIT = 58;
	public static readonly INT_LIT = 59;
	public static readonly IDENTIFIER = 60;
	public static readonly WS = 61;
	public static readonly LINE_COMMENT = 62;
	public static readonly COMMENT = 63;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_proto = 0;
	public static readonly RULE_syntax = 1;
	public static readonly RULE_importStatement = 2;
	public static readonly RULE_packageStatement = 3;
	public static readonly RULE_optionStatement = 4;
	public static readonly RULE_optionName = 5;
	public static readonly RULE_fieldLabel = 6;
	public static readonly RULE_field = 7;
	public static readonly RULE_fieldOptions = 8;
	public static readonly RULE_fieldOption = 9;
	public static readonly RULE_fieldNumber = 10;
	public static readonly RULE_group = 11;
	public static readonly RULE_oneof = 12;
	public static readonly RULE_oneofField = 13;
	public static readonly RULE_mapField = 14;
	public static readonly RULE_keyType = 15;
	public static readonly RULE_type_ = 16;
	public static readonly RULE_extensions = 17;
	public static readonly RULE_reserved = 18;
	public static readonly RULE_ranges = 19;
	public static readonly RULE_range_ = 20;
	public static readonly RULE_reservedFieldNames = 21;
	public static readonly RULE_topLevelDef = 22;
	public static readonly RULE_enumDef = 23;
	public static readonly RULE_enumBody = 24;
	public static readonly RULE_enumElement = 25;
	public static readonly RULE_enumField = 26;
	public static readonly RULE_enumValueOptions = 27;
	public static readonly RULE_enumValueOption = 28;
	public static readonly RULE_messageDef = 29;
	public static readonly RULE_messageBody = 30;
	public static readonly RULE_messageElement = 31;
	public static readonly RULE_extendDef = 32;
	public static readonly RULE_extendElement = 33;
	public static readonly RULE_serviceDef = 34;
	public static readonly RULE_serviceElement = 35;
	public static readonly RULE_rpc = 36;
	public static readonly RULE_stream = 37;
	public static readonly RULE_constant = 38;
	public static readonly RULE_blockLit = 39;
	public static readonly RULE_emptyStatement_ = 40;
	public static readonly RULE_ident = 41;
	public static readonly RULE_fullIdent = 42;
	public static readonly RULE_messageName = 43;
	public static readonly RULE_enumName = 44;
	public static readonly RULE_fieldName = 45;
	public static readonly RULE_groupName = 46;
	public static readonly RULE_oneofName = 47;
	public static readonly RULE_mapName = 48;
	public static readonly RULE_serviceName = 49;
	public static readonly RULE_rpcName = 50;
	public static readonly RULE_streamName = 51;
	public static readonly RULE_messageType = 52;
	public static readonly RULE_enumType = 53;
	public static readonly RULE_intLit = 54;
	public static readonly RULE_strLit = 55;
	public static readonly RULE_boolLit = 56;
	public static readonly RULE_floatLit = 57;
	public static readonly RULE_keywords = 58;
	public static readonly literalNames: (string | null)[] = [ null, "'syntax'", 
                                                            "'import'", 
                                                            "'weak'", "'public'", 
                                                            "'package'", 
                                                            "'option'", 
                                                            "'repeated'", 
                                                            "'optional'", 
                                                            "'required'", 
                                                            "'group'", "'oneof'", 
                                                            "'map'", "'int32'", 
                                                            "'int64'", "'uint32'", 
                                                            "'uint64'", 
                                                            "'sint32'", 
                                                            "'sint64'", 
                                                            "'fixed32'", 
                                                            "'fixed64'", 
                                                            "'sfixed32'", 
                                                            "'sfixed64'", 
                                                            "'bool'", "'string'", 
                                                            "'double'", 
                                                            "'float'", "'bytes'", 
                                                            "'reserved'", 
                                                            "'extensions'", 
                                                            "'to'", "'max'", 
                                                            "'enum'", "'extend'", 
                                                            "'message'", 
                                                            "'service'", 
                                                            "'rpc'", "'stream'", 
                                                            "'returns'", 
                                                            "'\"proto2\"'", 
                                                            "''proto2''", 
                                                            "';'", "'='", 
                                                            "'('", "')'", 
                                                            "'['", "']'", 
                                                            "'{'", "'}'", 
                                                            "'<'", "'>'", 
                                                            "'.'", "','", 
                                                            "':'", "'+'", 
                                                            "'-'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "SYNTAX", 
                                                             "IMPORT", "WEAK", 
                                                             "PUBLIC", "PACKAGE", 
                                                             "OPTION", "REPEATED", 
                                                             "OPTIONAL", 
                                                             "REQUIRED", 
                                                             "GROUP", "ONEOF", 
                                                             "MAP", "INT32", 
                                                             "INT64", "UINT32", 
                                                             "UINT64", "SINT32", 
                                                             "SINT64", "FIXED32", 
                                                             "FIXED64", 
                                                             "SFIXED32", 
                                                             "SFIXED64", 
                                                             "BOOL", "STRING", 
                                                             "DOUBLE", "FLOAT", 
                                                             "BYTES", "RESERVED", 
                                                             "EXTENSIONS", 
                                                             "TO", "MAX", 
                                                             "ENUM", "EXTEND", 
                                                             "MESSAGE", 
                                                             "SERVICE", 
                                                             "RPC", "STREAM", 
                                                             "RETURNS", 
                                                             "PROTO2_LIT_SINGLE", 
                                                             "PROTO2_LIT_DOBULE", 
                                                             "SEMI", "EQ", 
                                                             "LP", "RP", 
                                                             "LB", "RB", 
                                                             "LC", "RC", 
                                                             "LT", "GT", 
                                                             "DOT", "COMMA", 
                                                             "COLON", "PLUS", 
                                                             "MINUS", "STR_LIT", 
                                                             "BOOL_LIT", 
                                                             "FLOAT_LIT", 
                                                             "INT_LIT", 
                                                             "IDENTIFIER", 
                                                             "WS", "LINE_COMMENT", 
                                                             "COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"proto", "syntax", "importStatement", "packageStatement", "optionStatement", 
		"optionName", "fieldLabel", "field", "fieldOptions", "fieldOption", "fieldNumber", 
		"group", "oneof", "oneofField", "mapField", "keyType", "type_", "extensions", 
		"reserved", "ranges", "range_", "reservedFieldNames", "topLevelDef", "enumDef", 
		"enumBody", "enumElement", "enumField", "enumValueOptions", "enumValueOption", 
		"messageDef", "messageBody", "messageElement", "extendDef", "extendElement", 
		"serviceDef", "serviceElement", "rpc", "stream", "constant", "blockLit", 
		"emptyStatement_", "ident", "fullIdent", "messageName", "enumName", "fieldName", 
		"groupName", "oneofName", "mapName", "serviceName", "rpcName", "streamName", 
		"messageType", "enumType", "intLit", "strLit", "boolLit", "floatLit", 
		"keywords",
	];
	public get grammarFileName(): string { return "Protobuf2.g4"; }
	public get literalNames(): (string | null)[] { return Protobuf2Parser.literalNames; }
	public get symbolicNames(): (string | null)[] { return Protobuf2Parser.symbolicNames; }
	public get ruleNames(): string[] { return Protobuf2Parser.ruleNames; }
	public get serializedATN(): number[] { return Protobuf2Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, Protobuf2Parser._ATN, Protobuf2Parser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public proto(): ProtoContext {
		let localctx: ProtoContext = new ProtoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, Protobuf2Parser.RULE_proto);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 118;
			this.syntax();
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 100) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 527) !== 0)) {
				{
				this.state = 124;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 2:
					{
					this.state = 119;
					this.importStatement();
					}
					break;
				case 5:
					{
					this.state = 120;
					this.packageStatement();
					}
					break;
				case 6:
					{
					this.state = 121;
					this.optionStatement();
					}
					break;
				case 32:
				case 33:
				case 34:
				case 35:
					{
					this.state = 122;
					this.topLevelDef();
					}
					break;
				case 41:
					{
					this.state = 123;
					this.emptyStatement_();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 129;
			this.match(Protobuf2Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public syntax(): SyntaxContext {
		let localctx: SyntaxContext = new SyntaxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, Protobuf2Parser.RULE_syntax);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 131;
			this.match(Protobuf2Parser.SYNTAX);
			this.state = 132;
			this.match(Protobuf2Parser.EQ);
			this.state = 133;
			_la = this._input.LA(1);
			if(!(_la===39 || _la===40)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 134;
			this.match(Protobuf2Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let localctx: ImportStatementContext = new ImportStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, Protobuf2Parser.RULE_importStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 136;
			this.match(Protobuf2Parser.IMPORT);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3 || _la===4) {
				{
				this.state = 137;
				_la = this._input.LA(1);
				if(!(_la===3 || _la===4)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 140;
			this.strLit();
			this.state = 141;
			this.match(Protobuf2Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public packageStatement(): PackageStatementContext {
		let localctx: PackageStatementContext = new PackageStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, Protobuf2Parser.RULE_packageStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 143;
			this.match(Protobuf2Parser.PACKAGE);
			this.state = 144;
			this.fullIdent();
			this.state = 145;
			this.match(Protobuf2Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public optionStatement(): OptionStatementContext {
		let localctx: OptionStatementContext = new OptionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, Protobuf2Parser.RULE_optionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 147;
			this.match(Protobuf2Parser.OPTION);
			this.state = 148;
			this.optionName();
			this.state = 149;
			this.match(Protobuf2Parser.EQ);
			this.state = 150;
			this.constant();
			this.state = 151;
			this.match(Protobuf2Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public optionName(): OptionNameContext {
		let localctx: OptionNameContext = new OptionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, Protobuf2Parser.RULE_optionName);
		let _la: number;
		try {
			this.state = 165;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 153;
				this.fullIdent();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 159;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
				case 20:
				case 21:
				case 22:
				case 23:
				case 24:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
				case 30:
				case 31:
				case 32:
				case 33:
				case 34:
				case 35:
				case 36:
				case 37:
				case 38:
				case 57:
				case 60:
					{
					this.state = 154;
					this.ident();
					}
					break;
				case 43:
					{
					this.state = 155;
					this.match(Protobuf2Parser.LP);
					this.state = 156;
					this.fullIdent();
					this.state = 157;
					this.match(Protobuf2Parser.RP);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===51) {
					{
					this.state = 161;
					this.match(Protobuf2Parser.DOT);
					this.state = 162;
					this.fullIdent();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldLabel(): FieldLabelContext {
		let localctx: FieldLabelContext = new FieldLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, Protobuf2Parser.RULE_fieldLabel);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 167;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 896) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let localctx: FieldContext = new FieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, Protobuf2Parser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 169;
			this.fieldLabel();
			this.state = 170;
			this.type_();
			this.state = 171;
			this.fieldName();
			this.state = 172;
			this.match(Protobuf2Parser.EQ);
			this.state = 173;
			this.fieldNumber();
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 174;
				this.match(Protobuf2Parser.LB);
				this.state = 175;
				this.fieldOptions();
				this.state = 176;
				this.match(Protobuf2Parser.RB);
				}
			}

			this.state = 180;
			this.match(Protobuf2Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldOptions(): FieldOptionsContext {
		let localctx: FieldOptionsContext = new FieldOptionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, Protobuf2Parser.RULE_fieldOptions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 182;
			this.fieldOption();
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===52) {
				{
				{
				this.state = 183;
				this.match(Protobuf2Parser.COMMA);
				this.state = 184;
				this.fieldOption();
				}
				}
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldOption(): FieldOptionContext {
		let localctx: FieldOptionContext = new FieldOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, Protobuf2Parser.RULE_fieldOption);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 190;
			this.optionName();
			this.state = 191;
			this.match(Protobuf2Parser.EQ);
			this.state = 192;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldNumber(): FieldNumberContext {
		let localctx: FieldNumberContext = new FieldNumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, Protobuf2Parser.RULE_fieldNumber);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 194;
			this.intLit();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public group(): GroupContext {
		let localctx: GroupContext = new GroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, Protobuf2Parser.RULE_group);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 196;
			this.fieldLabel();
			this.state = 197;
			this.match(Protobuf2Parser.GROUP);
			this.state = 198;
			this.groupName();
			this.state = 199;
			this.match(Protobuf2Parser.EQ);
			this.state = 200;
			this.fieldNumber();
			this.state = 201;
			this.messageBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oneof(): OneofContext {
		let localctx: OneofContext = new OneofContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, Protobuf2Parser.RULE_oneof);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 203;
			this.match(Protobuf2Parser.ONEOF);
			this.state = 204;
			this.oneofName();
			this.state = 205;
			this.match(Protobuf2Parser.LC);
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 302514815) !== 0)) {
				{
				this.state = 209;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 206;
					this.optionStatement();
					}
					break;
				case 2:
					{
					this.state = 207;
					this.oneofField();
					}
					break;
				case 3:
					{
					this.state = 208;
					this.emptyStatement_();
					}
					break;
				}
				}
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 214;
			this.match(Protobuf2Parser.RC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oneofField(): OneofFieldContext {
		let localctx: OneofFieldContext = new OneofFieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, Protobuf2Parser.RULE_oneofField);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 216;
			this.type_();
			this.state = 217;
			this.fieldName();
			this.state = 218;
			this.match(Protobuf2Parser.EQ);
			this.state = 219;
			this.fieldNumber();
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 220;
				this.match(Protobuf2Parser.LB);
				this.state = 221;
				this.fieldOptions();
				this.state = 222;
				this.match(Protobuf2Parser.RB);
				}
			}

			this.state = 226;
			this.match(Protobuf2Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapField(): MapFieldContext {
		let localctx: MapFieldContext = new MapFieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, Protobuf2Parser.RULE_mapField);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 228;
			this.match(Protobuf2Parser.MAP);
			this.state = 229;
			this.match(Protobuf2Parser.LT);
			this.state = 230;
			this.keyType();
			this.state = 231;
			this.match(Protobuf2Parser.COMMA);
			this.state = 232;
			this.type_();
			this.state = 233;
			this.match(Protobuf2Parser.GT);
			this.state = 234;
			this.mapName();
			this.state = 235;
			this.match(Protobuf2Parser.EQ);
			this.state = 236;
			this.fieldNumber();
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 237;
				this.match(Protobuf2Parser.LB);
				this.state = 238;
				this.fieldOptions();
				this.state = 239;
				this.match(Protobuf2Parser.RB);
				}
			}

			this.state = 243;
			this.match(Protobuf2Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyType(): KeyTypeContext {
		let localctx: KeyTypeContext = new KeyTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, Protobuf2Parser.RULE_keyType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 245;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 33546240) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_(): Type_Context {
		let localctx: Type_Context = new Type_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 32, Protobuf2Parser.RULE_type_);
		try {
			this.state = 264;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 247;
				this.match(Protobuf2Parser.DOUBLE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 248;
				this.match(Protobuf2Parser.FLOAT);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 249;
				this.match(Protobuf2Parser.INT32);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 250;
				this.match(Protobuf2Parser.INT64);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 251;
				this.match(Protobuf2Parser.UINT32);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 252;
				this.match(Protobuf2Parser.UINT64);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 253;
				this.match(Protobuf2Parser.SINT32);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 254;
				this.match(Protobuf2Parser.SINT64);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 255;
				this.match(Protobuf2Parser.FIXED32);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 256;
				this.match(Protobuf2Parser.FIXED64);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 257;
				this.match(Protobuf2Parser.SFIXED32);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 258;
				this.match(Protobuf2Parser.SFIXED64);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 259;
				this.match(Protobuf2Parser.BOOL);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 260;
				this.match(Protobuf2Parser.STRING);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 261;
				this.match(Protobuf2Parser.BYTES);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 262;
				this.messageType();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 263;
				this.enumType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extensions(): ExtensionsContext {
		let localctx: ExtensionsContext = new ExtensionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, Protobuf2Parser.RULE_extensions);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 266;
			this.match(Protobuf2Parser.EXTENSIONS);
			this.state = 267;
			this.ranges();
			this.state = 268;
			this.match(Protobuf2Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reserved(): ReservedContext {
		let localctx: ReservedContext = new ReservedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, Protobuf2Parser.RULE_reserved);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 270;
			this.match(Protobuf2Parser.RESERVED);
			this.state = 273;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
				{
				this.state = 271;
				this.ranges();
				}
				break;
			case 39:
			case 40:
			case 56:
				{
				this.state = 272;
				this.reservedFieldNames();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 275;
			this.match(Protobuf2Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ranges(): RangesContext {
		let localctx: RangesContext = new RangesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, Protobuf2Parser.RULE_ranges);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 277;
			this.range_();
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===52) {
				{
				{
				this.state = 278;
				this.match(Protobuf2Parser.COMMA);
				this.state = 279;
				this.range_();
				}
				}
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public range_(): Range_Context {
		let localctx: Range_Context = new Range_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 40, Protobuf2Parser.RULE_range_);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 285;
			this.intLit();
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===30) {
				{
				this.state = 286;
				this.match(Protobuf2Parser.TO);
				this.state = 289;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 59:
					{
					this.state = 287;
					this.intLit();
					}
					break;
				case 31:
					{
					this.state = 288;
					this.match(Protobuf2Parser.MAX);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reservedFieldNames(): ReservedFieldNamesContext {
		let localctx: ReservedFieldNamesContext = new ReservedFieldNamesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, Protobuf2Parser.RULE_reservedFieldNames);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 293;
			this.strLit();
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===52) {
				{
				{
				this.state = 294;
				this.match(Protobuf2Parser.COMMA);
				this.state = 295;
				this.strLit();
				}
				}
				this.state = 300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public topLevelDef(): TopLevelDefContext {
		let localctx: TopLevelDefContext = new TopLevelDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, Protobuf2Parser.RULE_topLevelDef);
		try {
			this.state = 305;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 34:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 301;
				this.messageDef();
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 302;
				this.enumDef();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 303;
				this.serviceDef();
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 304;
				this.extendDef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumDef(): EnumDefContext {
		let localctx: EnumDefContext = new EnumDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, Protobuf2Parser.RULE_enumDef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 307;
			this.match(Protobuf2Parser.ENUM);
			this.state = 308;
			this.enumName();
			this.state = 309;
			this.enumBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumBody(): EnumBodyContext {
		let localctx: EnumBodyContext = new EnumBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, Protobuf2Parser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 311;
			this.match(Protobuf2Parser.LC);
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 301990527) !== 0)) {
				{
				{
				this.state = 312;
				this.enumElement();
				}
				}
				this.state = 317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 318;
			this.match(Protobuf2Parser.RC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumElement(): EnumElementContext {
		let localctx: EnumElementContext = new EnumElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, Protobuf2Parser.RULE_enumElement);
		try {
			this.state = 323;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 320;
				this.optionStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 321;
				this.enumField();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 322;
				this.emptyStatement_();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumField(): EnumFieldContext {
		let localctx: EnumFieldContext = new EnumFieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, Protobuf2Parser.RULE_enumField);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 325;
			this.ident();
			this.state = 326;
			this.match(Protobuf2Parser.EQ);
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===55) {
				{
				this.state = 327;
				this.match(Protobuf2Parser.MINUS);
				}
			}

			this.state = 330;
			this.intLit();
			this.state = 332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 331;
				this.enumValueOptions();
				}
			}

			this.state = 334;
			this.match(Protobuf2Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumValueOptions(): EnumValueOptionsContext {
		let localctx: EnumValueOptionsContext = new EnumValueOptionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, Protobuf2Parser.RULE_enumValueOptions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 336;
			this.match(Protobuf2Parser.LB);
			this.state = 337;
			this.enumValueOption();
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===52) {
				{
				{
				this.state = 338;
				this.match(Protobuf2Parser.COMMA);
				this.state = 339;
				this.enumValueOption();
				}
				}
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 345;
			this.match(Protobuf2Parser.RB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumValueOption(): EnumValueOptionContext {
		let localctx: EnumValueOptionContext = new EnumValueOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, Protobuf2Parser.RULE_enumValueOption);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 347;
			this.optionName();
			this.state = 348;
			this.match(Protobuf2Parser.EQ);
			this.state = 349;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public messageDef(): MessageDefContext {
		let localctx: MessageDefContext = new MessageDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, Protobuf2Parser.RULE_messageDef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 351;
			this.match(Protobuf2Parser.MESSAGE);
			this.state = 352;
			this.messageName();
			this.state = 353;
			this.messageBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public messageBody(): MessageBodyContext {
		let localctx: MessageBodyContext = new MessageBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, Protobuf2Parser.RULE_messageBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 355;
			this.match(Protobuf2Parser.LC);
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 805313472) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 519) !== 0)) {
				{
				{
				this.state = 356;
				this.messageElement();
				}
				}
				this.state = 361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 362;
			this.match(Protobuf2Parser.RC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public messageElement(): MessageElementContext {
		let localctx: MessageElementContext = new MessageElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, Protobuf2Parser.RULE_messageElement);
		try {
			this.state = 375;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 364;
				this.field();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 365;
				this.enumDef();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 366;
				this.messageDef();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 367;
				this.extendDef();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 368;
				this.optionStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 369;
				this.oneof();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 370;
				this.mapField();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 371;
				this.extensions();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 372;
				this.group();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 373;
				this.reserved();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 374;
				this.emptyStatement_();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extendDef(): ExtendDefContext {
		let localctx: ExtendDefContext = new ExtendDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, Protobuf2Parser.RULE_extendDef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 377;
			this.match(Protobuf2Parser.EXTEND);
			this.state = 378;
			this.messageType();
			this.state = 379;
			this.match(Protobuf2Parser.LC);
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 896) !== 0) || _la===41) {
				{
				{
				this.state = 380;
				this.extendElement();
				}
				}
				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 386;
			this.match(Protobuf2Parser.RC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extendElement(): ExtendElementContext {
		let localctx: ExtendElementContext = new ExtendElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, Protobuf2Parser.RULE_extendElement);
		try {
			this.state = 391;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 388;
				this.field();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 389;
				this.group();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 390;
				this.emptyStatement_();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public serviceDef(): ServiceDefContext {
		let localctx: ServiceDefContext = new ServiceDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, Protobuf2Parser.RULE_serviceDef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 393;
			this.match(Protobuf2Parser.SERVICE);
			this.state = 394;
			this.serviceName();
			this.state = 395;
			this.match(Protobuf2Parser.LC);
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6 || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 35) !== 0)) {
				{
				{
				this.state = 396;
				this.serviceElement();
				}
				}
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 402;
			this.match(Protobuf2Parser.RC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public serviceElement(): ServiceElementContext {
		let localctx: ServiceElementContext = new ServiceElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, Protobuf2Parser.RULE_serviceElement);
		try {
			this.state = 408;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 404;
				this.optionStatement();
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 405;
				this.rpc();
				}
				break;
			case 37:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 406;
				this.stream();
				}
				break;
			case 41:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 407;
				this.emptyStatement_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rpc(): RpcContext {
		let localctx: RpcContext = new RpcContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, Protobuf2Parser.RULE_rpc);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 410;
			this.match(Protobuf2Parser.RPC);
			this.state = 411;
			this.rpcName();
			this.state = 412;
			this.match(Protobuf2Parser.LP);
			this.state = 414;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 413;
				this.match(Protobuf2Parser.STREAM);
				}
				break;
			}
			this.state = 416;
			this.messageType();
			this.state = 417;
			this.match(Protobuf2Parser.RP);
			this.state = 418;
			this.match(Protobuf2Parser.RETURNS);
			this.state = 419;
			this.match(Protobuf2Parser.LP);
			this.state = 421;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 420;
				this.match(Protobuf2Parser.STREAM);
				}
				break;
			}
			this.state = 423;
			this.messageType();
			this.state = 424;
			this.match(Protobuf2Parser.RP);
			this.state = 435;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 47:
				{
				this.state = 425;
				this.match(Protobuf2Parser.LC);
				this.state = 430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===6 || _la===41) {
					{
					this.state = 428;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 6:
						{
						this.state = 426;
						this.optionStatement();
						}
						break;
					case 41:
						{
						this.state = 427;
						this.emptyStatement_();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 432;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 433;
				this.match(Protobuf2Parser.RC);
				}
				break;
			case 41:
				{
				this.state = 434;
				this.match(Protobuf2Parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stream(): StreamContext {
		let localctx: StreamContext = new StreamContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, Protobuf2Parser.RULE_stream);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 437;
			this.match(Protobuf2Parser.STREAM);
			this.state = 438;
			this.streamName();
			this.state = 439;
			this.match(Protobuf2Parser.LP);
			this.state = 440;
			this.messageType();
			this.state = 441;
			this.match(Protobuf2Parser.COMMA);
			this.state = 442;
			this.messageType();
			this.state = 443;
			this.match(Protobuf2Parser.RP);
			this.state = 454;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 47:
				{
				this.state = 444;
				this.match(Protobuf2Parser.LC);
				this.state = 449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===6 || _la===41) {
					{
					this.state = 447;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 6:
						{
						this.state = 445;
						this.optionStatement();
						}
						break;
					case 41:
						{
						this.state = 446;
						this.emptyStatement_();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 451;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 452;
				this.match(Protobuf2Parser.RC);
				}
				break;
			case 41:
				{
				this.state = 453;
				this.match(Protobuf2Parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let localctx: ConstantContext = new ConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, Protobuf2Parser.RULE_constant);
		let _la: number;
		try {
			this.state = 468;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 456;
				this.fullIdent();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 458;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===54 || _la===55) {
					{
					this.state = 457;
					_la = this._input.LA(1);
					if(!(_la===54 || _la===55)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 460;
				this.intLit();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===54 || _la===55) {
					{
					this.state = 461;
					_la = this._input.LA(1);
					if(!(_la===54 || _la===55)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 464;
				this.floatLit();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 465;
				this.strLit();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 466;
				this.boolLit();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 467;
				this.blockLit();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockLit(): BlockLitContext {
		let localctx: BlockLitContext = new BlockLitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, Protobuf2Parser.RULE_blockLit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 470;
			this.match(Protobuf2Parser.LC);
			this.state = 477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 301990015) !== 0)) {
				{
				{
				this.state = 471;
				this.ident();
				this.state = 472;
				this.match(Protobuf2Parser.COLON);
				this.state = 473;
				this.constant();
				}
				}
				this.state = 479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 480;
			this.match(Protobuf2Parser.RC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public emptyStatement_(): EmptyStatement_Context {
		let localctx: EmptyStatement_Context = new EmptyStatement_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 80, Protobuf2Parser.RULE_emptyStatement_);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 482;
			this.match(Protobuf2Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ident(): IdentContext {
		let localctx: IdentContext = new IdentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, Protobuf2Parser.RULE_ident);
		try {
			this.state = 486;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 60:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 484;
				this.match(Protobuf2Parser.IDENTIFIER);
				}
				break;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 57:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 485;
				this.keywords();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fullIdent(): FullIdentContext {
		let localctx: FullIdentContext = new FullIdentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, Protobuf2Parser.RULE_fullIdent);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 488;
			this.ident();
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===51) {
				{
				{
				this.state = 489;
				this.match(Protobuf2Parser.DOT);
				this.state = 490;
				this.ident();
				}
				}
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public messageName(): MessageNameContext {
		let localctx: MessageNameContext = new MessageNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, Protobuf2Parser.RULE_messageName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 496;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumName(): EnumNameContext {
		let localctx: EnumNameContext = new EnumNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, Protobuf2Parser.RULE_enumName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 498;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldName(): FieldNameContext {
		let localctx: FieldNameContext = new FieldNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, Protobuf2Parser.RULE_fieldName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 500;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupName(): GroupNameContext {
		let localctx: GroupNameContext = new GroupNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, Protobuf2Parser.RULE_groupName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 502;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oneofName(): OneofNameContext {
		let localctx: OneofNameContext = new OneofNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, Protobuf2Parser.RULE_oneofName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 504;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapName(): MapNameContext {
		let localctx: MapNameContext = new MapNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, Protobuf2Parser.RULE_mapName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 506;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public serviceName(): ServiceNameContext {
		let localctx: ServiceNameContext = new ServiceNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, Protobuf2Parser.RULE_serviceName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 508;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rpcName(): RpcNameContext {
		let localctx: RpcNameContext = new RpcNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, Protobuf2Parser.RULE_rpcName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 510;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public streamName(): StreamNameContext {
		let localctx: StreamNameContext = new StreamNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, Protobuf2Parser.RULE_streamName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 512;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public messageType(): MessageTypeContext {
		let localctx: MessageTypeContext = new MessageTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, Protobuf2Parser.RULE_messageType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===51) {
				{
				this.state = 514;
				this.match(Protobuf2Parser.DOT);
				}
			}

			this.state = 522;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 517;
					this.ident();
					this.state = 518;
					this.match(Protobuf2Parser.DOT);
					}
					}
				}
				this.state = 524;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
			}
			this.state = 525;
			this.messageName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumType(): EnumTypeContext {
		let localctx: EnumTypeContext = new EnumTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, Protobuf2Parser.RULE_enumType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===51) {
				{
				this.state = 527;
				this.match(Protobuf2Parser.DOT);
				}
			}

			this.state = 535;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 530;
					this.ident();
					this.state = 531;
					this.match(Protobuf2Parser.DOT);
					}
					}
				}
				this.state = 537;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 47, this._ctx);
			}
			this.state = 538;
			this.enumName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public intLit(): IntLitContext {
		let localctx: IntLitContext = new IntLitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, Protobuf2Parser.RULE_intLit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 540;
			this.match(Protobuf2Parser.INT_LIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public strLit(): StrLitContext {
		let localctx: StrLitContext = new StrLitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, Protobuf2Parser.RULE_strLit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 542;
			_la = this._input.LA(1);
			if(!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 131075) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public boolLit(): BoolLitContext {
		let localctx: BoolLitContext = new BoolLitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, Protobuf2Parser.RULE_boolLit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 544;
			this.match(Protobuf2Parser.BOOL_LIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public floatLit(): FloatLitContext {
		let localctx: FloatLitContext = new FloatLitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, Protobuf2Parser.RULE_floatLit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 546;
			this.match(Protobuf2Parser.FLOAT_LIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keywords(): KeywordsContext {
		let localctx: KeywordsContext = new KeywordsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, Protobuf2Parser.RULE_keywords);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 548;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 33554559) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,63,551,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
	7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,
	53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,1,0,1,0,1,0,1,0,1,
	0,1,0,5,0,125,8,0,10,0,12,0,128,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,
	3,2,139,8,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,
	1,5,1,5,1,5,1,5,3,5,160,8,5,1,5,1,5,3,5,164,8,5,3,5,166,8,5,1,6,1,6,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,179,8,7,1,7,1,7,1,8,1,8,1,8,5,8,186,
	8,8,10,8,12,8,189,9,8,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,1,11,
	1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,5,12,210,8,12,10,12,12,12,213,9,
	12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,225,8,13,1,13,
	1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,
	14,242,8,14,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
	1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,265,8,16,1,17,1,17,1,
	17,1,17,1,18,1,18,1,18,3,18,274,8,18,1,18,1,18,1,19,1,19,1,19,5,19,281,
	8,19,10,19,12,19,284,9,19,1,20,1,20,1,20,1,20,3,20,290,8,20,3,20,292,8,
	20,1,21,1,21,1,21,5,21,297,8,21,10,21,12,21,300,9,21,1,22,1,22,1,22,1,22,
	3,22,306,8,22,1,23,1,23,1,23,1,23,1,24,1,24,5,24,314,8,24,10,24,12,24,317,
	9,24,1,24,1,24,1,25,1,25,1,25,3,25,324,8,25,1,26,1,26,1,26,3,26,329,8,26,
	1,26,1,26,3,26,333,8,26,1,26,1,26,1,27,1,27,1,27,1,27,5,27,341,8,27,10,
	27,12,27,344,9,27,1,27,1,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,30,
	1,30,5,30,358,8,30,10,30,12,30,361,9,30,1,30,1,30,1,31,1,31,1,31,1,31,1,
	31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,376,8,31,1,32,1,32,1,32,1,32,5,32,
	382,8,32,10,32,12,32,385,9,32,1,32,1,32,1,33,1,33,1,33,3,33,392,8,33,1,
	34,1,34,1,34,1,34,5,34,398,8,34,10,34,12,34,401,9,34,1,34,1,34,1,35,1,35,
	1,35,1,35,3,35,409,8,35,1,36,1,36,1,36,1,36,3,36,415,8,36,1,36,1,36,1,36,
	1,36,1,36,3,36,422,8,36,1,36,1,36,1,36,1,36,1,36,5,36,429,8,36,10,36,12,
	36,432,9,36,1,36,1,36,3,36,436,8,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,
	1,37,1,37,1,37,5,37,448,8,37,10,37,12,37,451,9,37,1,37,1,37,3,37,455,8,
	37,1,38,1,38,3,38,459,8,38,1,38,1,38,3,38,463,8,38,1,38,1,38,1,38,1,38,
	3,38,469,8,38,1,39,1,39,1,39,1,39,1,39,5,39,476,8,39,10,39,12,39,479,9,
	39,1,39,1,39,1,40,1,40,1,41,1,41,3,41,487,8,41,1,42,1,42,1,42,5,42,492,
	8,42,10,42,12,42,495,9,42,1,43,1,43,1,44,1,44,1,45,1,45,1,46,1,46,1,47,
	1,47,1,48,1,48,1,49,1,49,1,50,1,50,1,51,1,51,1,52,3,52,516,8,52,1,52,1,
	52,1,52,5,52,521,8,52,10,52,12,52,524,9,52,1,52,1,52,1,53,3,53,529,8,53,
	1,53,1,53,1,53,5,53,534,8,53,10,53,12,53,537,9,53,1,53,1,53,1,54,1,54,1,
	55,1,55,1,56,1,56,1,57,1,57,1,58,1,58,1,58,0,0,59,0,2,4,6,8,10,12,14,16,
	18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
	66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,
	110,112,114,116,0,7,1,0,39,40,1,0,3,4,1,0,7,9,1,0,13,24,1,0,54,55,2,0,39,
	40,56,56,2,0,1,38,57,57,577,0,118,1,0,0,0,2,131,1,0,0,0,4,136,1,0,0,0,6,
	143,1,0,0,0,8,147,1,0,0,0,10,165,1,0,0,0,12,167,1,0,0,0,14,169,1,0,0,0,
	16,182,1,0,0,0,18,190,1,0,0,0,20,194,1,0,0,0,22,196,1,0,0,0,24,203,1,0,
	0,0,26,216,1,0,0,0,28,228,1,0,0,0,30,245,1,0,0,0,32,264,1,0,0,0,34,266,
	1,0,0,0,36,270,1,0,0,0,38,277,1,0,0,0,40,285,1,0,0,0,42,293,1,0,0,0,44,
	305,1,0,0,0,46,307,1,0,0,0,48,311,1,0,0,0,50,323,1,0,0,0,52,325,1,0,0,0,
	54,336,1,0,0,0,56,347,1,0,0,0,58,351,1,0,0,0,60,355,1,0,0,0,62,375,1,0,
	0,0,64,377,1,0,0,0,66,391,1,0,0,0,68,393,1,0,0,0,70,408,1,0,0,0,72,410,
	1,0,0,0,74,437,1,0,0,0,76,468,1,0,0,0,78,470,1,0,0,0,80,482,1,0,0,0,82,
	486,1,0,0,0,84,488,1,0,0,0,86,496,1,0,0,0,88,498,1,0,0,0,90,500,1,0,0,0,
	92,502,1,0,0,0,94,504,1,0,0,0,96,506,1,0,0,0,98,508,1,0,0,0,100,510,1,0,
	0,0,102,512,1,0,0,0,104,515,1,0,0,0,106,528,1,0,0,0,108,540,1,0,0,0,110,
	542,1,0,0,0,112,544,1,0,0,0,114,546,1,0,0,0,116,548,1,0,0,0,118,126,3,2,
	1,0,119,125,3,4,2,0,120,125,3,6,3,0,121,125,3,8,4,0,122,125,3,44,22,0,123,
	125,3,80,40,0,124,119,1,0,0,0,124,120,1,0,0,0,124,121,1,0,0,0,124,122,1,
	0,0,0,124,123,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,
	129,1,0,0,0,128,126,1,0,0,0,129,130,5,0,0,1,130,1,1,0,0,0,131,132,5,1,0,
	0,132,133,5,42,0,0,133,134,7,0,0,0,134,135,5,41,0,0,135,3,1,0,0,0,136,138,
	5,2,0,0,137,139,7,1,0,0,138,137,1,0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,
	140,141,3,110,55,0,141,142,5,41,0,0,142,5,1,0,0,0,143,144,5,5,0,0,144,145,
	3,84,42,0,145,146,5,41,0,0,146,7,1,0,0,0,147,148,5,6,0,0,148,149,3,10,5,
	0,149,150,5,42,0,0,150,151,3,76,38,0,151,152,5,41,0,0,152,9,1,0,0,0,153,
	166,3,84,42,0,154,160,3,82,41,0,155,156,5,43,0,0,156,157,3,84,42,0,157,
	158,5,44,0,0,158,160,1,0,0,0,159,154,1,0,0,0,159,155,1,0,0,0,160,163,1,
	0,0,0,161,162,5,51,0,0,162,164,3,84,42,0,163,161,1,0,0,0,163,164,1,0,0,
	0,164,166,1,0,0,0,165,153,1,0,0,0,165,159,1,0,0,0,166,11,1,0,0,0,167,168,
	7,2,0,0,168,13,1,0,0,0,169,170,3,12,6,0,170,171,3,32,16,0,171,172,3,90,
	45,0,172,173,5,42,0,0,173,178,3,20,10,0,174,175,5,45,0,0,175,176,3,16,8,
	0,176,177,5,46,0,0,177,179,1,0,0,0,178,174,1,0,0,0,178,179,1,0,0,0,179,
	180,1,0,0,0,180,181,5,41,0,0,181,15,1,0,0,0,182,187,3,18,9,0,183,184,5,
	52,0,0,184,186,3,18,9,0,185,183,1,0,0,0,186,189,1,0,0,0,187,185,1,0,0,0,
	187,188,1,0,0,0,188,17,1,0,0,0,189,187,1,0,0,0,190,191,3,10,5,0,191,192,
	5,42,0,0,192,193,3,76,38,0,193,19,1,0,0,0,194,195,3,108,54,0,195,21,1,0,
	0,0,196,197,3,12,6,0,197,198,5,10,0,0,198,199,3,92,46,0,199,200,5,42,0,
	0,200,201,3,20,10,0,201,202,3,60,30,0,202,23,1,0,0,0,203,204,5,11,0,0,204,
	205,3,94,47,0,205,211,5,47,0,0,206,210,3,8,4,0,207,210,3,26,13,0,208,210,
	3,80,40,0,209,206,1,0,0,0,209,207,1,0,0,0,209,208,1,0,0,0,210,213,1,0,0,
	0,211,209,1,0,0,0,211,212,1,0,0,0,212,214,1,0,0,0,213,211,1,0,0,0,214,215,
	5,48,0,0,215,25,1,0,0,0,216,217,3,32,16,0,217,218,3,90,45,0,218,219,5,42,
	0,0,219,224,3,20,10,0,220,221,5,45,0,0,221,222,3,16,8,0,222,223,5,46,0,
	0,223,225,1,0,0,0,224,220,1,0,0,0,224,225,1,0,0,0,225,226,1,0,0,0,226,227,
	5,41,0,0,227,27,1,0,0,0,228,229,5,12,0,0,229,230,5,49,0,0,230,231,3,30,
	15,0,231,232,5,52,0,0,232,233,3,32,16,0,233,234,5,50,0,0,234,235,3,96,48,
	0,235,236,5,42,0,0,236,241,3,20,10,0,237,238,5,45,0,0,238,239,3,16,8,0,
	239,240,5,46,0,0,240,242,1,0,0,0,241,237,1,0,0,0,241,242,1,0,0,0,242,243,
	1,0,0,0,243,244,5,41,0,0,244,29,1,0,0,0,245,246,7,3,0,0,246,31,1,0,0,0,
	247,265,5,25,0,0,248,265,5,26,0,0,249,265,5,13,0,0,250,265,5,14,0,0,251,
	265,5,15,0,0,252,265,5,16,0,0,253,265,5,17,0,0,254,265,5,18,0,0,255,265,
	5,19,0,0,256,265,5,20,0,0,257,265,5,21,0,0,258,265,5,22,0,0,259,265,5,23,
	0,0,260,265,5,24,0,0,261,265,5,27,0,0,262,265,3,104,52,0,263,265,3,106,
	53,0,264,247,1,0,0,0,264,248,1,0,0,0,264,249,1,0,0,0,264,250,1,0,0,0,264,
	251,1,0,0,0,264,252,1,0,0,0,264,253,1,0,0,0,264,254,1,0,0,0,264,255,1,0,
	0,0,264,256,1,0,0,0,264,257,1,0,0,0,264,258,1,0,0,0,264,259,1,0,0,0,264,
	260,1,0,0,0,264,261,1,0,0,0,264,262,1,0,0,0,264,263,1,0,0,0,265,33,1,0,
	0,0,266,267,5,29,0,0,267,268,3,38,19,0,268,269,5,41,0,0,269,35,1,0,0,0,
	270,273,5,28,0,0,271,274,3,38,19,0,272,274,3,42,21,0,273,271,1,0,0,0,273,
	272,1,0,0,0,274,275,1,0,0,0,275,276,5,41,0,0,276,37,1,0,0,0,277,282,3,40,
	20,0,278,279,5,52,0,0,279,281,3,40,20,0,280,278,1,0,0,0,281,284,1,0,0,0,
	282,280,1,0,0,0,282,283,1,0,0,0,283,39,1,0,0,0,284,282,1,0,0,0,285,291,
	3,108,54,0,286,289,5,30,0,0,287,290,3,108,54,0,288,290,5,31,0,0,289,287,
	1,0,0,0,289,288,1,0,0,0,290,292,1,0,0,0,291,286,1,0,0,0,291,292,1,0,0,0,
	292,41,1,0,0,0,293,298,3,110,55,0,294,295,5,52,0,0,295,297,3,110,55,0,296,
	294,1,0,0,0,297,300,1,0,0,0,298,296,1,0,0,0,298,299,1,0,0,0,299,43,1,0,
	0,0,300,298,1,0,0,0,301,306,3,58,29,0,302,306,3,46,23,0,303,306,3,68,34,
	0,304,306,3,64,32,0,305,301,1,0,0,0,305,302,1,0,0,0,305,303,1,0,0,0,305,
	304,1,0,0,0,306,45,1,0,0,0,307,308,5,32,0,0,308,309,3,88,44,0,309,310,3,
	48,24,0,310,47,1,0,0,0,311,315,5,47,0,0,312,314,3,50,25,0,313,312,1,0,0,
	0,314,317,1,0,0,0,315,313,1,0,0,0,315,316,1,0,0,0,316,318,1,0,0,0,317,315,
	1,0,0,0,318,319,5,48,0,0,319,49,1,0,0,0,320,324,3,8,4,0,321,324,3,52,26,
	0,322,324,3,80,40,0,323,320,1,0,0,0,323,321,1,0,0,0,323,322,1,0,0,0,324,
	51,1,0,0,0,325,326,3,82,41,0,326,328,5,42,0,0,327,329,5,55,0,0,328,327,
	1,0,0,0,328,329,1,0,0,0,329,330,1,0,0,0,330,332,3,108,54,0,331,333,3,54,
	27,0,332,331,1,0,0,0,332,333,1,0,0,0,333,334,1,0,0,0,334,335,5,41,0,0,335,
	53,1,0,0,0,336,337,5,45,0,0,337,342,3,56,28,0,338,339,5,52,0,0,339,341,
	3,56,28,0,340,338,1,0,0,0,341,344,1,0,0,0,342,340,1,0,0,0,342,343,1,0,0,
	0,343,345,1,0,0,0,344,342,1,0,0,0,345,346,5,46,0,0,346,55,1,0,0,0,347,348,
	3,10,5,0,348,349,5,42,0,0,349,350,3,76,38,0,350,57,1,0,0,0,351,352,5,34,
	0,0,352,353,3,86,43,0,353,354,3,60,30,0,354,59,1,0,0,0,355,359,5,47,0,0,
	356,358,3,62,31,0,357,356,1,0,0,0,358,361,1,0,0,0,359,357,1,0,0,0,359,360,
	1,0,0,0,360,362,1,0,0,0,361,359,1,0,0,0,362,363,5,48,0,0,363,61,1,0,0,0,
	364,376,3,14,7,0,365,376,3,46,23,0,366,376,3,58,29,0,367,376,3,64,32,0,
	368,376,3,8,4,0,369,376,3,24,12,0,370,376,3,28,14,0,371,376,3,34,17,0,372,
	376,3,22,11,0,373,376,3,36,18,0,374,376,3,80,40,0,375,364,1,0,0,0,375,365,
	1,0,0,0,375,366,1,0,0,0,375,367,1,0,0,0,375,368,1,0,0,0,375,369,1,0,0,0,
	375,370,1,0,0,0,375,371,1,0,0,0,375,372,1,0,0,0,375,373,1,0,0,0,375,374,
	1,0,0,0,376,63,1,0,0,0,377,378,5,33,0,0,378,379,3,104,52,0,379,383,5,47,
	0,0,380,382,3,66,33,0,381,380,1,0,0,0,382,385,1,0,0,0,383,381,1,0,0,0,383,
	384,1,0,0,0,384,386,1,0,0,0,385,383,1,0,0,0,386,387,5,48,0,0,387,65,1,0,
	0,0,388,392,3,14,7,0,389,392,3,22,11,0,390,392,3,80,40,0,391,388,1,0,0,
	0,391,389,1,0,0,0,391,390,1,0,0,0,392,67,1,0,0,0,393,394,5,35,0,0,394,395,
	3,98,49,0,395,399,5,47,0,0,396,398,3,70,35,0,397,396,1,0,0,0,398,401,1,
	0,0,0,399,397,1,0,0,0,399,400,1,0,0,0,400,402,1,0,0,0,401,399,1,0,0,0,402,
	403,5,48,0,0,403,69,1,0,0,0,404,409,3,8,4,0,405,409,3,72,36,0,406,409,3,
	74,37,0,407,409,3,80,40,0,408,404,1,0,0,0,408,405,1,0,0,0,408,406,1,0,0,
	0,408,407,1,0,0,0,409,71,1,0,0,0,410,411,5,36,0,0,411,412,3,100,50,0,412,
	414,5,43,0,0,413,415,5,37,0,0,414,413,1,0,0,0,414,415,1,0,0,0,415,416,1,
	0,0,0,416,417,3,104,52,0,417,418,5,44,0,0,418,419,5,38,0,0,419,421,5,43,
	0,0,420,422,5,37,0,0,421,420,1,0,0,0,421,422,1,0,0,0,422,423,1,0,0,0,423,
	424,3,104,52,0,424,435,5,44,0,0,425,430,5,47,0,0,426,429,3,8,4,0,427,429,
	3,80,40,0,428,426,1,0,0,0,428,427,1,0,0,0,429,432,1,0,0,0,430,428,1,0,0,
	0,430,431,1,0,0,0,431,433,1,0,0,0,432,430,1,0,0,0,433,436,5,48,0,0,434,
	436,5,41,0,0,435,425,1,0,0,0,435,434,1,0,0,0,436,73,1,0,0,0,437,438,5,37,
	0,0,438,439,3,102,51,0,439,440,5,43,0,0,440,441,3,104,52,0,441,442,5,52,
	0,0,442,443,3,104,52,0,443,454,5,44,0,0,444,449,5,47,0,0,445,448,3,8,4,
	0,446,448,3,80,40,0,447,445,1,0,0,0,447,446,1,0,0,0,448,451,1,0,0,0,449,
	447,1,0,0,0,449,450,1,0,0,0,450,452,1,0,0,0,451,449,1,0,0,0,452,455,5,48,
	0,0,453,455,5,41,0,0,454,444,1,0,0,0,454,453,1,0,0,0,455,75,1,0,0,0,456,
	469,3,84,42,0,457,459,7,4,0,0,458,457,1,0,0,0,458,459,1,0,0,0,459,460,1,
	0,0,0,460,469,3,108,54,0,461,463,7,4,0,0,462,461,1,0,0,0,462,463,1,0,0,
	0,463,464,1,0,0,0,464,469,3,114,57,0,465,469,3,110,55,0,466,469,3,112,56,
	0,467,469,3,78,39,0,468,456,1,0,0,0,468,458,1,0,0,0,468,462,1,0,0,0,468,
	465,1,0,0,0,468,466,1,0,0,0,468,467,1,0,0,0,469,77,1,0,0,0,470,477,5,47,
	0,0,471,472,3,82,41,0,472,473,5,53,0,0,473,474,3,76,38,0,474,476,1,0,0,
	0,475,471,1,0,0,0,476,479,1,0,0,0,477,475,1,0,0,0,477,478,1,0,0,0,478,480,
	1,0,0,0,479,477,1,0,0,0,480,481,5,48,0,0,481,79,1,0,0,0,482,483,5,41,0,
	0,483,81,1,0,0,0,484,487,5,60,0,0,485,487,3,116,58,0,486,484,1,0,0,0,486,
	485,1,0,0,0,487,83,1,0,0,0,488,493,3,82,41,0,489,490,5,51,0,0,490,492,3,
	82,41,0,491,489,1,0,0,0,492,495,1,0,0,0,493,491,1,0,0,0,493,494,1,0,0,0,
	494,85,1,0,0,0,495,493,1,0,0,0,496,497,3,82,41,0,497,87,1,0,0,0,498,499,
	3,82,41,0,499,89,1,0,0,0,500,501,3,82,41,0,501,91,1,0,0,0,502,503,3,82,
	41,0,503,93,1,0,0,0,504,505,3,82,41,0,505,95,1,0,0,0,506,507,3,82,41,0,
	507,97,1,0,0,0,508,509,3,82,41,0,509,99,1,0,0,0,510,511,3,82,41,0,511,101,
	1,0,0,0,512,513,3,82,41,0,513,103,1,0,0,0,514,516,5,51,0,0,515,514,1,0,
	0,0,515,516,1,0,0,0,516,522,1,0,0,0,517,518,3,82,41,0,518,519,5,51,0,0,
	519,521,1,0,0,0,520,517,1,0,0,0,521,524,1,0,0,0,522,520,1,0,0,0,522,523,
	1,0,0,0,523,525,1,0,0,0,524,522,1,0,0,0,525,526,3,86,43,0,526,105,1,0,0,
	0,527,529,5,51,0,0,528,527,1,0,0,0,528,529,1,0,0,0,529,535,1,0,0,0,530,
	531,3,82,41,0,531,532,5,51,0,0,532,534,1,0,0,0,533,530,1,0,0,0,534,537,
	1,0,0,0,535,533,1,0,0,0,535,536,1,0,0,0,536,538,1,0,0,0,537,535,1,0,0,0,
	538,539,3,88,44,0,539,107,1,0,0,0,540,541,5,59,0,0,541,109,1,0,0,0,542,
	543,7,5,0,0,543,111,1,0,0,0,544,545,5,57,0,0,545,113,1,0,0,0,546,547,5,
	58,0,0,547,115,1,0,0,0,548,549,7,6,0,0,549,117,1,0,0,0,48,124,126,138,159,
	163,165,178,187,209,211,224,241,264,273,282,289,291,298,305,315,323,328,
	332,342,359,375,383,391,399,408,414,421,428,430,435,447,449,454,458,462,
	468,477,486,493,515,522,528,535];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Protobuf2Parser.__ATN) {
			Protobuf2Parser.__ATN = new ATNDeserializer().deserialize(Protobuf2Parser._serializedATN);
		}

		return Protobuf2Parser.__ATN;
	}


	static DecisionsToDFA = Protobuf2Parser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProtoContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public syntax(): SyntaxContext {
		return this.getTypedRuleContext(SyntaxContext, 0) as SyntaxContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(Protobuf2Parser.EOF, 0);
	}
	public importStatement_list(): ImportStatementContext[] {
		return this.getTypedRuleContexts(ImportStatementContext) as ImportStatementContext[];
	}
	public importStatement(i: number): ImportStatementContext {
		return this.getTypedRuleContext(ImportStatementContext, i) as ImportStatementContext;
	}
	public packageStatement_list(): PackageStatementContext[] {
		return this.getTypedRuleContexts(PackageStatementContext) as PackageStatementContext[];
	}
	public packageStatement(i: number): PackageStatementContext {
		return this.getTypedRuleContext(PackageStatementContext, i) as PackageStatementContext;
	}
	public optionStatement_list(): OptionStatementContext[] {
		return this.getTypedRuleContexts(OptionStatementContext) as OptionStatementContext[];
	}
	public optionStatement(i: number): OptionStatementContext {
		return this.getTypedRuleContext(OptionStatementContext, i) as OptionStatementContext;
	}
	public topLevelDef_list(): TopLevelDefContext[] {
		return this.getTypedRuleContexts(TopLevelDefContext) as TopLevelDefContext[];
	}
	public topLevelDef(i: number): TopLevelDefContext {
		return this.getTypedRuleContext(TopLevelDefContext, i) as TopLevelDefContext;
	}
	public emptyStatement__list(): EmptyStatement_Context[] {
		return this.getTypedRuleContexts(EmptyStatement_Context) as EmptyStatement_Context[];
	}
	public emptyStatement_(i: number): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, i) as EmptyStatement_Context;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_proto;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterProto) {
	 		listener.enterProto(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitProto) {
	 		listener.exitProto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitProto) {
			return visitor.visitProto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SyntaxContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYNTAX(): TerminalNode {
		return this.getToken(Protobuf2Parser.SYNTAX, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(Protobuf2Parser.EQ, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf2Parser.SEMI, 0);
	}
	public PROTO2_LIT_SINGLE(): TerminalNode {
		return this.getToken(Protobuf2Parser.PROTO2_LIT_SINGLE, 0);
	}
	public PROTO2_LIT_DOBULE(): TerminalNode {
		return this.getToken(Protobuf2Parser.PROTO2_LIT_DOBULE, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_syntax;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterSyntax) {
	 		listener.enterSyntax(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitSyntax) {
	 		listener.exitSyntax(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitSyntax) {
			return visitor.visitSyntax(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(Protobuf2Parser.IMPORT, 0);
	}
	public strLit(): StrLitContext {
		return this.getTypedRuleContext(StrLitContext, 0) as StrLitContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf2Parser.SEMI, 0);
	}
	public WEAK(): TerminalNode {
		return this.getToken(Protobuf2Parser.WEAK, 0);
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Protobuf2Parser.PUBLIC, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_importStatement;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterImportStatement) {
	 		listener.enterImportStatement(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitImportStatement) {
	 		listener.exitImportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageStatementContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PACKAGE(): TerminalNode {
		return this.getToken(Protobuf2Parser.PACKAGE, 0);
	}
	public fullIdent(): FullIdentContext {
		return this.getTypedRuleContext(FullIdentContext, 0) as FullIdentContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf2Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_packageStatement;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterPackageStatement) {
	 		listener.enterPackageStatement(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitPackageStatement) {
	 		listener.exitPackageStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitPackageStatement) {
			return visitor.visitPackageStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionStatementContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPTION(): TerminalNode {
		return this.getToken(Protobuf2Parser.OPTION, 0);
	}
	public optionName(): OptionNameContext {
		return this.getTypedRuleContext(OptionNameContext, 0) as OptionNameContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(Protobuf2Parser.EQ, 0);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf2Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_optionStatement;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterOptionStatement) {
	 		listener.enterOptionStatement(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitOptionStatement) {
	 		listener.exitOptionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitOptionStatement) {
			return visitor.visitOptionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fullIdent_list(): FullIdentContext[] {
		return this.getTypedRuleContexts(FullIdentContext) as FullIdentContext[];
	}
	public fullIdent(i: number): FullIdentContext {
		return this.getTypedRuleContext(FullIdentContext, i) as FullIdentContext;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public LP(): TerminalNode {
		return this.getToken(Protobuf2Parser.LP, 0);
	}
	public RP(): TerminalNode {
		return this.getToken(Protobuf2Parser.RP, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(Protobuf2Parser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_optionName;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterOptionName) {
	 		listener.enterOptionName(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitOptionName) {
	 		listener.exitOptionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitOptionName) {
			return visitor.visitOptionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldLabelContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REQUIRED(): TerminalNode {
		return this.getToken(Protobuf2Parser.REQUIRED, 0);
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(Protobuf2Parser.OPTIONAL, 0);
	}
	public REPEATED(): TerminalNode {
		return this.getToken(Protobuf2Parser.REPEATED, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_fieldLabel;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterFieldLabel) {
	 		listener.enterFieldLabel(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitFieldLabel) {
	 		listener.exitFieldLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitFieldLabel) {
			return visitor.visitFieldLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fieldLabel(): FieldLabelContext {
		return this.getTypedRuleContext(FieldLabelContext, 0) as FieldLabelContext;
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
	public fieldName(): FieldNameContext {
		return this.getTypedRuleContext(FieldNameContext, 0) as FieldNameContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(Protobuf2Parser.EQ, 0);
	}
	public fieldNumber(): FieldNumberContext {
		return this.getTypedRuleContext(FieldNumberContext, 0) as FieldNumberContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf2Parser.SEMI, 0);
	}
	public LB(): TerminalNode {
		return this.getToken(Protobuf2Parser.LB, 0);
	}
	public fieldOptions(): FieldOptionsContext {
		return this.getTypedRuleContext(FieldOptionsContext, 0) as FieldOptionsContext;
	}
	public RB(): TerminalNode {
		return this.getToken(Protobuf2Parser.RB, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_field;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterField) {
	 		listener.enterField(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitField) {
	 		listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldOptionsContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fieldOption_list(): FieldOptionContext[] {
		return this.getTypedRuleContexts(FieldOptionContext) as FieldOptionContext[];
	}
	public fieldOption(i: number): FieldOptionContext {
		return this.getTypedRuleContext(FieldOptionContext, i) as FieldOptionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf2Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Protobuf2Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_fieldOptions;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterFieldOptions) {
	 		listener.enterFieldOptions(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitFieldOptions) {
	 		listener.exitFieldOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitFieldOptions) {
			return visitor.visitFieldOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldOptionContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public optionName(): OptionNameContext {
		return this.getTypedRuleContext(OptionNameContext, 0) as OptionNameContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(Protobuf2Parser.EQ, 0);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_fieldOption;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterFieldOption) {
	 		listener.enterFieldOption(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitFieldOption) {
	 		listener.exitFieldOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitFieldOption) {
			return visitor.visitFieldOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldNumberContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public intLit(): IntLitContext {
		return this.getTypedRuleContext(IntLitContext, 0) as IntLitContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_fieldNumber;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterFieldNumber) {
	 		listener.enterFieldNumber(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitFieldNumber) {
	 		listener.exitFieldNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitFieldNumber) {
			return visitor.visitFieldNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fieldLabel(): FieldLabelContext {
		return this.getTypedRuleContext(FieldLabelContext, 0) as FieldLabelContext;
	}
	public GROUP(): TerminalNode {
		return this.getToken(Protobuf2Parser.GROUP, 0);
	}
	public groupName(): GroupNameContext {
		return this.getTypedRuleContext(GroupNameContext, 0) as GroupNameContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(Protobuf2Parser.EQ, 0);
	}
	public fieldNumber(): FieldNumberContext {
		return this.getTypedRuleContext(FieldNumberContext, 0) as FieldNumberContext;
	}
	public messageBody(): MessageBodyContext {
		return this.getTypedRuleContext(MessageBodyContext, 0) as MessageBodyContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_group;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterGroup) {
	 		listener.enterGroup(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitGroup) {
	 		listener.exitGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitGroup) {
			return visitor.visitGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OneofContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ONEOF(): TerminalNode {
		return this.getToken(Protobuf2Parser.ONEOF, 0);
	}
	public oneofName(): OneofNameContext {
		return this.getTypedRuleContext(OneofNameContext, 0) as OneofNameContext;
	}
	public LC(): TerminalNode {
		return this.getToken(Protobuf2Parser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(Protobuf2Parser.RC, 0);
	}
	public optionStatement_list(): OptionStatementContext[] {
		return this.getTypedRuleContexts(OptionStatementContext) as OptionStatementContext[];
	}
	public optionStatement(i: number): OptionStatementContext {
		return this.getTypedRuleContext(OptionStatementContext, i) as OptionStatementContext;
	}
	public oneofField_list(): OneofFieldContext[] {
		return this.getTypedRuleContexts(OneofFieldContext) as OneofFieldContext[];
	}
	public oneofField(i: number): OneofFieldContext {
		return this.getTypedRuleContext(OneofFieldContext, i) as OneofFieldContext;
	}
	public emptyStatement__list(): EmptyStatement_Context[] {
		return this.getTypedRuleContexts(EmptyStatement_Context) as EmptyStatement_Context[];
	}
	public emptyStatement_(i: number): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, i) as EmptyStatement_Context;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_oneof;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterOneof) {
	 		listener.enterOneof(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitOneof) {
	 		listener.exitOneof(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitOneof) {
			return visitor.visitOneof(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OneofFieldContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
	public fieldName(): FieldNameContext {
		return this.getTypedRuleContext(FieldNameContext, 0) as FieldNameContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(Protobuf2Parser.EQ, 0);
	}
	public fieldNumber(): FieldNumberContext {
		return this.getTypedRuleContext(FieldNumberContext, 0) as FieldNumberContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf2Parser.SEMI, 0);
	}
	public LB(): TerminalNode {
		return this.getToken(Protobuf2Parser.LB, 0);
	}
	public fieldOptions(): FieldOptionsContext {
		return this.getTypedRuleContext(FieldOptionsContext, 0) as FieldOptionsContext;
	}
	public RB(): TerminalNode {
		return this.getToken(Protobuf2Parser.RB, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_oneofField;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterOneofField) {
	 		listener.enterOneofField(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitOneofField) {
	 		listener.exitOneofField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitOneofField) {
			return visitor.visitOneofField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapFieldContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MAP(): TerminalNode {
		return this.getToken(Protobuf2Parser.MAP, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(Protobuf2Parser.LT, 0);
	}
	public keyType(): KeyTypeContext {
		return this.getTypedRuleContext(KeyTypeContext, 0) as KeyTypeContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(Protobuf2Parser.COMMA, 0);
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
	public GT(): TerminalNode {
		return this.getToken(Protobuf2Parser.GT, 0);
	}
	public mapName(): MapNameContext {
		return this.getTypedRuleContext(MapNameContext, 0) as MapNameContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(Protobuf2Parser.EQ, 0);
	}
	public fieldNumber(): FieldNumberContext {
		return this.getTypedRuleContext(FieldNumberContext, 0) as FieldNumberContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf2Parser.SEMI, 0);
	}
	public LB(): TerminalNode {
		return this.getToken(Protobuf2Parser.LB, 0);
	}
	public fieldOptions(): FieldOptionsContext {
		return this.getTypedRuleContext(FieldOptionsContext, 0) as FieldOptionsContext;
	}
	public RB(): TerminalNode {
		return this.getToken(Protobuf2Parser.RB, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_mapField;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterMapField) {
	 		listener.enterMapField(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitMapField) {
	 		listener.exitMapField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitMapField) {
			return visitor.visitMapField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyTypeContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT32(): TerminalNode {
		return this.getToken(Protobuf2Parser.INT32, 0);
	}
	public INT64(): TerminalNode {
		return this.getToken(Protobuf2Parser.INT64, 0);
	}
	public UINT32(): TerminalNode {
		return this.getToken(Protobuf2Parser.UINT32, 0);
	}
	public UINT64(): TerminalNode {
		return this.getToken(Protobuf2Parser.UINT64, 0);
	}
	public SINT32(): TerminalNode {
		return this.getToken(Protobuf2Parser.SINT32, 0);
	}
	public SINT64(): TerminalNode {
		return this.getToken(Protobuf2Parser.SINT64, 0);
	}
	public FIXED32(): TerminalNode {
		return this.getToken(Protobuf2Parser.FIXED32, 0);
	}
	public FIXED64(): TerminalNode {
		return this.getToken(Protobuf2Parser.FIXED64, 0);
	}
	public SFIXED32(): TerminalNode {
		return this.getToken(Protobuf2Parser.SFIXED32, 0);
	}
	public SFIXED64(): TerminalNode {
		return this.getToken(Protobuf2Parser.SFIXED64, 0);
	}
	public BOOL(): TerminalNode {
		return this.getToken(Protobuf2Parser.BOOL, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(Protobuf2Parser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_keyType;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterKeyType) {
	 		listener.enterKeyType(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitKeyType) {
	 		listener.exitKeyType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitKeyType) {
			return visitor.visitKeyType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(Protobuf2Parser.DOUBLE, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(Protobuf2Parser.FLOAT, 0);
	}
	public INT32(): TerminalNode {
		return this.getToken(Protobuf2Parser.INT32, 0);
	}
	public INT64(): TerminalNode {
		return this.getToken(Protobuf2Parser.INT64, 0);
	}
	public UINT32(): TerminalNode {
		return this.getToken(Protobuf2Parser.UINT32, 0);
	}
	public UINT64(): TerminalNode {
		return this.getToken(Protobuf2Parser.UINT64, 0);
	}
	public SINT32(): TerminalNode {
		return this.getToken(Protobuf2Parser.SINT32, 0);
	}
	public SINT64(): TerminalNode {
		return this.getToken(Protobuf2Parser.SINT64, 0);
	}
	public FIXED32(): TerminalNode {
		return this.getToken(Protobuf2Parser.FIXED32, 0);
	}
	public FIXED64(): TerminalNode {
		return this.getToken(Protobuf2Parser.FIXED64, 0);
	}
	public SFIXED32(): TerminalNode {
		return this.getToken(Protobuf2Parser.SFIXED32, 0);
	}
	public SFIXED64(): TerminalNode {
		return this.getToken(Protobuf2Parser.SFIXED64, 0);
	}
	public BOOL(): TerminalNode {
		return this.getToken(Protobuf2Parser.BOOL, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(Protobuf2Parser.STRING, 0);
	}
	public BYTES(): TerminalNode {
		return this.getToken(Protobuf2Parser.BYTES, 0);
	}
	public messageType(): MessageTypeContext {
		return this.getTypedRuleContext(MessageTypeContext, 0) as MessageTypeContext;
	}
	public enumType(): EnumTypeContext {
		return this.getTypedRuleContext(EnumTypeContext, 0) as EnumTypeContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_type_;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterType_) {
	 		listener.enterType_(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitType_) {
	 		listener.exitType_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitType_) {
			return visitor.visitType_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionsContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTENSIONS(): TerminalNode {
		return this.getToken(Protobuf2Parser.EXTENSIONS, 0);
	}
	public ranges(): RangesContext {
		return this.getTypedRuleContext(RangesContext, 0) as RangesContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf2Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_extensions;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterExtensions) {
	 		listener.enterExtensions(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitExtensions) {
	 		listener.exitExtensions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitExtensions) {
			return visitor.visitExtensions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RESERVED(): TerminalNode {
		return this.getToken(Protobuf2Parser.RESERVED, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf2Parser.SEMI, 0);
	}
	public ranges(): RangesContext {
		return this.getTypedRuleContext(RangesContext, 0) as RangesContext;
	}
	public reservedFieldNames(): ReservedFieldNamesContext {
		return this.getTypedRuleContext(ReservedFieldNamesContext, 0) as ReservedFieldNamesContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_reserved;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterReserved) {
	 		listener.enterReserved(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitReserved) {
	 		listener.exitReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitReserved) {
			return visitor.visitReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangesContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public range__list(): Range_Context[] {
		return this.getTypedRuleContexts(Range_Context) as Range_Context[];
	}
	public range_(i: number): Range_Context {
		return this.getTypedRuleContext(Range_Context, i) as Range_Context;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf2Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Protobuf2Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_ranges;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterRanges) {
	 		listener.enterRanges(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitRanges) {
	 		listener.exitRanges(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitRanges) {
			return visitor.visitRanges(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Range_Context extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public intLit_list(): IntLitContext[] {
		return this.getTypedRuleContexts(IntLitContext) as IntLitContext[];
	}
	public intLit(i: number): IntLitContext {
		return this.getTypedRuleContext(IntLitContext, i) as IntLitContext;
	}
	public TO(): TerminalNode {
		return this.getToken(Protobuf2Parser.TO, 0);
	}
	public MAX(): TerminalNode {
		return this.getToken(Protobuf2Parser.MAX, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_range_;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterRange_) {
	 		listener.enterRange_(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitRange_) {
	 		listener.exitRange_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitRange_) {
			return visitor.visitRange_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedFieldNamesContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public strLit_list(): StrLitContext[] {
		return this.getTypedRuleContexts(StrLitContext) as StrLitContext[];
	}
	public strLit(i: number): StrLitContext {
		return this.getTypedRuleContext(StrLitContext, i) as StrLitContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf2Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Protobuf2Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_reservedFieldNames;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterReservedFieldNames) {
	 		listener.enterReservedFieldNames(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitReservedFieldNames) {
	 		listener.exitReservedFieldNames(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitReservedFieldNames) {
			return visitor.visitReservedFieldNames(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopLevelDefContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public messageDef(): MessageDefContext {
		return this.getTypedRuleContext(MessageDefContext, 0) as MessageDefContext;
	}
	public enumDef(): EnumDefContext {
		return this.getTypedRuleContext(EnumDefContext, 0) as EnumDefContext;
	}
	public serviceDef(): ServiceDefContext {
		return this.getTypedRuleContext(ServiceDefContext, 0) as ServiceDefContext;
	}
	public extendDef(): ExtendDefContext {
		return this.getTypedRuleContext(ExtendDefContext, 0) as ExtendDefContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_topLevelDef;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterTopLevelDef) {
	 		listener.enterTopLevelDef(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitTopLevelDef) {
	 		listener.exitTopLevelDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitTopLevelDef) {
			return visitor.visitTopLevelDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUM(): TerminalNode {
		return this.getToken(Protobuf2Parser.ENUM, 0);
	}
	public enumName(): EnumNameContext {
		return this.getTypedRuleContext(EnumNameContext, 0) as EnumNameContext;
	}
	public enumBody(): EnumBodyContext {
		return this.getTypedRuleContext(EnumBodyContext, 0) as EnumBodyContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_enumDef;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterEnumDef) {
	 		listener.enterEnumDef(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitEnumDef) {
	 		listener.exitEnumDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitEnumDef) {
			return visitor.visitEnumDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LC(): TerminalNode {
		return this.getToken(Protobuf2Parser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(Protobuf2Parser.RC, 0);
	}
	public enumElement_list(): EnumElementContext[] {
		return this.getTypedRuleContexts(EnumElementContext) as EnumElementContext[];
	}
	public enumElement(i: number): EnumElementContext {
		return this.getTypedRuleContext(EnumElementContext, i) as EnumElementContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_enumBody;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterEnumBody) {
	 		listener.enterEnumBody(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitEnumBody) {
	 		listener.exitEnumBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitEnumBody) {
			return visitor.visitEnumBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumElementContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public optionStatement(): OptionStatementContext {
		return this.getTypedRuleContext(OptionStatementContext, 0) as OptionStatementContext;
	}
	public enumField(): EnumFieldContext {
		return this.getTypedRuleContext(EnumFieldContext, 0) as EnumFieldContext;
	}
	public emptyStatement_(): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, 0) as EmptyStatement_Context;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_enumElement;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterEnumElement) {
	 		listener.enterEnumElement(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitEnumElement) {
	 		listener.exitEnumElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitEnumElement) {
			return visitor.visitEnumElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumFieldContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(Protobuf2Parser.EQ, 0);
	}
	public intLit(): IntLitContext {
		return this.getTypedRuleContext(IntLitContext, 0) as IntLitContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf2Parser.SEMI, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(Protobuf2Parser.MINUS, 0);
	}
	public enumValueOptions(): EnumValueOptionsContext {
		return this.getTypedRuleContext(EnumValueOptionsContext, 0) as EnumValueOptionsContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_enumField;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterEnumField) {
	 		listener.enterEnumField(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitEnumField) {
	 		listener.exitEnumField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitEnumField) {
			return visitor.visitEnumField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValueOptionsContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LB(): TerminalNode {
		return this.getToken(Protobuf2Parser.LB, 0);
	}
	public enumValueOption_list(): EnumValueOptionContext[] {
		return this.getTypedRuleContexts(EnumValueOptionContext) as EnumValueOptionContext[];
	}
	public enumValueOption(i: number): EnumValueOptionContext {
		return this.getTypedRuleContext(EnumValueOptionContext, i) as EnumValueOptionContext;
	}
	public RB(): TerminalNode {
		return this.getToken(Protobuf2Parser.RB, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf2Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Protobuf2Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_enumValueOptions;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterEnumValueOptions) {
	 		listener.enterEnumValueOptions(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitEnumValueOptions) {
	 		listener.exitEnumValueOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitEnumValueOptions) {
			return visitor.visitEnumValueOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValueOptionContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public optionName(): OptionNameContext {
		return this.getTypedRuleContext(OptionNameContext, 0) as OptionNameContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(Protobuf2Parser.EQ, 0);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_enumValueOption;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterEnumValueOption) {
	 		listener.enterEnumValueOption(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitEnumValueOption) {
	 		listener.exitEnumValueOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitEnumValueOption) {
			return visitor.visitEnumValueOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageDefContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MESSAGE(): TerminalNode {
		return this.getToken(Protobuf2Parser.MESSAGE, 0);
	}
	public messageName(): MessageNameContext {
		return this.getTypedRuleContext(MessageNameContext, 0) as MessageNameContext;
	}
	public messageBody(): MessageBodyContext {
		return this.getTypedRuleContext(MessageBodyContext, 0) as MessageBodyContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_messageDef;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterMessageDef) {
	 		listener.enterMessageDef(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitMessageDef) {
	 		listener.exitMessageDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitMessageDef) {
			return visitor.visitMessageDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageBodyContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LC(): TerminalNode {
		return this.getToken(Protobuf2Parser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(Protobuf2Parser.RC, 0);
	}
	public messageElement_list(): MessageElementContext[] {
		return this.getTypedRuleContexts(MessageElementContext) as MessageElementContext[];
	}
	public messageElement(i: number): MessageElementContext {
		return this.getTypedRuleContext(MessageElementContext, i) as MessageElementContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_messageBody;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterMessageBody) {
	 		listener.enterMessageBody(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitMessageBody) {
	 		listener.exitMessageBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitMessageBody) {
			return visitor.visitMessageBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageElementContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public field(): FieldContext {
		return this.getTypedRuleContext(FieldContext, 0) as FieldContext;
	}
	public enumDef(): EnumDefContext {
		return this.getTypedRuleContext(EnumDefContext, 0) as EnumDefContext;
	}
	public messageDef(): MessageDefContext {
		return this.getTypedRuleContext(MessageDefContext, 0) as MessageDefContext;
	}
	public extendDef(): ExtendDefContext {
		return this.getTypedRuleContext(ExtendDefContext, 0) as ExtendDefContext;
	}
	public optionStatement(): OptionStatementContext {
		return this.getTypedRuleContext(OptionStatementContext, 0) as OptionStatementContext;
	}
	public oneof(): OneofContext {
		return this.getTypedRuleContext(OneofContext, 0) as OneofContext;
	}
	public mapField(): MapFieldContext {
		return this.getTypedRuleContext(MapFieldContext, 0) as MapFieldContext;
	}
	public extensions(): ExtensionsContext {
		return this.getTypedRuleContext(ExtensionsContext, 0) as ExtensionsContext;
	}
	public group(): GroupContext {
		return this.getTypedRuleContext(GroupContext, 0) as GroupContext;
	}
	public reserved(): ReservedContext {
		return this.getTypedRuleContext(ReservedContext, 0) as ReservedContext;
	}
	public emptyStatement_(): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, 0) as EmptyStatement_Context;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_messageElement;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterMessageElement) {
	 		listener.enterMessageElement(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitMessageElement) {
	 		listener.exitMessageElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitMessageElement) {
			return visitor.visitMessageElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtendDefContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTEND(): TerminalNode {
		return this.getToken(Protobuf2Parser.EXTEND, 0);
	}
	public messageType(): MessageTypeContext {
		return this.getTypedRuleContext(MessageTypeContext, 0) as MessageTypeContext;
	}
	public LC(): TerminalNode {
		return this.getToken(Protobuf2Parser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(Protobuf2Parser.RC, 0);
	}
	public extendElement_list(): ExtendElementContext[] {
		return this.getTypedRuleContexts(ExtendElementContext) as ExtendElementContext[];
	}
	public extendElement(i: number): ExtendElementContext {
		return this.getTypedRuleContext(ExtendElementContext, i) as ExtendElementContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_extendDef;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterExtendDef) {
	 		listener.enterExtendDef(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitExtendDef) {
	 		listener.exitExtendDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitExtendDef) {
			return visitor.visitExtendDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtendElementContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public field(): FieldContext {
		return this.getTypedRuleContext(FieldContext, 0) as FieldContext;
	}
	public group(): GroupContext {
		return this.getTypedRuleContext(GroupContext, 0) as GroupContext;
	}
	public emptyStatement_(): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, 0) as EmptyStatement_Context;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_extendElement;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterExtendElement) {
	 		listener.enterExtendElement(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitExtendElement) {
	 		listener.exitExtendElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitExtendElement) {
			return visitor.visitExtendElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ServiceDefContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SERVICE(): TerminalNode {
		return this.getToken(Protobuf2Parser.SERVICE, 0);
	}
	public serviceName(): ServiceNameContext {
		return this.getTypedRuleContext(ServiceNameContext, 0) as ServiceNameContext;
	}
	public LC(): TerminalNode {
		return this.getToken(Protobuf2Parser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(Protobuf2Parser.RC, 0);
	}
	public serviceElement_list(): ServiceElementContext[] {
		return this.getTypedRuleContexts(ServiceElementContext) as ServiceElementContext[];
	}
	public serviceElement(i: number): ServiceElementContext {
		return this.getTypedRuleContext(ServiceElementContext, i) as ServiceElementContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_serviceDef;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterServiceDef) {
	 		listener.enterServiceDef(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitServiceDef) {
	 		listener.exitServiceDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitServiceDef) {
			return visitor.visitServiceDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ServiceElementContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public optionStatement(): OptionStatementContext {
		return this.getTypedRuleContext(OptionStatementContext, 0) as OptionStatementContext;
	}
	public rpc(): RpcContext {
		return this.getTypedRuleContext(RpcContext, 0) as RpcContext;
	}
	public stream(): StreamContext {
		return this.getTypedRuleContext(StreamContext, 0) as StreamContext;
	}
	public emptyStatement_(): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, 0) as EmptyStatement_Context;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_serviceElement;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterServiceElement) {
	 		listener.enterServiceElement(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitServiceElement) {
	 		listener.exitServiceElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitServiceElement) {
			return visitor.visitServiceElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RpcContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RPC(): TerminalNode {
		return this.getToken(Protobuf2Parser.RPC, 0);
	}
	public rpcName(): RpcNameContext {
		return this.getTypedRuleContext(RpcNameContext, 0) as RpcNameContext;
	}
	public LP_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf2Parser.LP);
	}
	public LP(i: number): TerminalNode {
		return this.getToken(Protobuf2Parser.LP, i);
	}
	public messageType_list(): MessageTypeContext[] {
		return this.getTypedRuleContexts(MessageTypeContext) as MessageTypeContext[];
	}
	public messageType(i: number): MessageTypeContext {
		return this.getTypedRuleContext(MessageTypeContext, i) as MessageTypeContext;
	}
	public RP_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf2Parser.RP);
	}
	public RP(i: number): TerminalNode {
		return this.getToken(Protobuf2Parser.RP, i);
	}
	public RETURNS(): TerminalNode {
		return this.getToken(Protobuf2Parser.RETURNS, 0);
	}
	public LC(): TerminalNode {
		return this.getToken(Protobuf2Parser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(Protobuf2Parser.RC, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf2Parser.SEMI, 0);
	}
	public STREAM_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf2Parser.STREAM);
	}
	public STREAM(i: number): TerminalNode {
		return this.getToken(Protobuf2Parser.STREAM, i);
	}
	public optionStatement_list(): OptionStatementContext[] {
		return this.getTypedRuleContexts(OptionStatementContext) as OptionStatementContext[];
	}
	public optionStatement(i: number): OptionStatementContext {
		return this.getTypedRuleContext(OptionStatementContext, i) as OptionStatementContext;
	}
	public emptyStatement__list(): EmptyStatement_Context[] {
		return this.getTypedRuleContexts(EmptyStatement_Context) as EmptyStatement_Context[];
	}
	public emptyStatement_(i: number): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, i) as EmptyStatement_Context;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_rpc;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterRpc) {
	 		listener.enterRpc(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitRpc) {
	 		listener.exitRpc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitRpc) {
			return visitor.visitRpc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StreamContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STREAM(): TerminalNode {
		return this.getToken(Protobuf2Parser.STREAM, 0);
	}
	public streamName(): StreamNameContext {
		return this.getTypedRuleContext(StreamNameContext, 0) as StreamNameContext;
	}
	public LP(): TerminalNode {
		return this.getToken(Protobuf2Parser.LP, 0);
	}
	public messageType_list(): MessageTypeContext[] {
		return this.getTypedRuleContexts(MessageTypeContext) as MessageTypeContext[];
	}
	public messageType(i: number): MessageTypeContext {
		return this.getTypedRuleContext(MessageTypeContext, i) as MessageTypeContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(Protobuf2Parser.COMMA, 0);
	}
	public RP(): TerminalNode {
		return this.getToken(Protobuf2Parser.RP, 0);
	}
	public LC(): TerminalNode {
		return this.getToken(Protobuf2Parser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(Protobuf2Parser.RC, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf2Parser.SEMI, 0);
	}
	public optionStatement_list(): OptionStatementContext[] {
		return this.getTypedRuleContexts(OptionStatementContext) as OptionStatementContext[];
	}
	public optionStatement(i: number): OptionStatementContext {
		return this.getTypedRuleContext(OptionStatementContext, i) as OptionStatementContext;
	}
	public emptyStatement__list(): EmptyStatement_Context[] {
		return this.getTypedRuleContexts(EmptyStatement_Context) as EmptyStatement_Context[];
	}
	public emptyStatement_(i: number): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, i) as EmptyStatement_Context;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_stream;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterStream) {
	 		listener.enterStream(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitStream) {
	 		listener.exitStream(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitStream) {
			return visitor.visitStream(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fullIdent(): FullIdentContext {
		return this.getTypedRuleContext(FullIdentContext, 0) as FullIdentContext;
	}
	public intLit(): IntLitContext {
		return this.getTypedRuleContext(IntLitContext, 0) as IntLitContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(Protobuf2Parser.MINUS, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(Protobuf2Parser.PLUS, 0);
	}
	public floatLit(): FloatLitContext {
		return this.getTypedRuleContext(FloatLitContext, 0) as FloatLitContext;
	}
	public strLit(): StrLitContext {
		return this.getTypedRuleContext(StrLitContext, 0) as StrLitContext;
	}
	public boolLit(): BoolLitContext {
		return this.getTypedRuleContext(BoolLitContext, 0) as BoolLitContext;
	}
	public blockLit(): BlockLitContext {
		return this.getTypedRuleContext(BlockLitContext, 0) as BlockLitContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_constant;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterConstant) {
	 		listener.enterConstant(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitConstant) {
	 		listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockLitContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LC(): TerminalNode {
		return this.getToken(Protobuf2Parser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(Protobuf2Parser.RC, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf2Parser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(Protobuf2Parser.COLON, i);
	}
	public constant_list(): ConstantContext[] {
		return this.getTypedRuleContexts(ConstantContext) as ConstantContext[];
	}
	public constant(i: number): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, i) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_blockLit;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterBlockLit) {
	 		listener.enterBlockLit(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitBlockLit) {
	 		listener.exitBlockLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitBlockLit) {
			return visitor.visitBlockLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatement_Context extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf2Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_emptyStatement_;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterEmptyStatement_) {
	 		listener.enterEmptyStatement_(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitEmptyStatement_) {
	 		listener.exitEmptyStatement_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitEmptyStatement_) {
			return visitor.visitEmptyStatement_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(Protobuf2Parser.IDENTIFIER, 0);
	}
	public keywords(): KeywordsContext {
		return this.getTypedRuleContext(KeywordsContext, 0) as KeywordsContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_ident;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterIdent) {
	 		listener.enterIdent(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitIdent) {
	 		listener.exitIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitIdent) {
			return visitor.visitIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FullIdentContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf2Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Protobuf2Parser.DOT, i);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_fullIdent;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterFullIdent) {
	 		listener.enterFullIdent(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitFullIdent) {
	 		listener.exitFullIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitFullIdent) {
			return visitor.visitFullIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_messageName;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterMessageName) {
	 		listener.enterMessageName(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitMessageName) {
	 		listener.exitMessageName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitMessageName) {
			return visitor.visitMessageName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_enumName;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterEnumName) {
	 		listener.enterEnumName(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitEnumName) {
	 		listener.exitEnumName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitEnumName) {
			return visitor.visitEnumName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_fieldName;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterFieldName) {
	 		listener.enterFieldName(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitFieldName) {
	 		listener.exitFieldName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitFieldName) {
			return visitor.visitFieldName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_groupName;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterGroupName) {
	 		listener.enterGroupName(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitGroupName) {
	 		listener.exitGroupName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitGroupName) {
			return visitor.visitGroupName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OneofNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_oneofName;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterOneofName) {
	 		listener.enterOneofName(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitOneofName) {
	 		listener.exitOneofName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitOneofName) {
			return visitor.visitOneofName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_mapName;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterMapName) {
	 		listener.enterMapName(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitMapName) {
	 		listener.exitMapName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitMapName) {
			return visitor.visitMapName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ServiceNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_serviceName;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterServiceName) {
	 		listener.enterServiceName(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitServiceName) {
	 		listener.exitServiceName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitServiceName) {
			return visitor.visitServiceName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RpcNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_rpcName;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterRpcName) {
	 		listener.enterRpcName(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitRpcName) {
	 		listener.exitRpcName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitRpcName) {
			return visitor.visitRpcName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StreamNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_streamName;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterStreamName) {
	 		listener.enterStreamName(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitStreamName) {
	 		listener.exitStreamName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitStreamName) {
			return visitor.visitStreamName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageTypeContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public messageName(): MessageNameContext {
		return this.getTypedRuleContext(MessageNameContext, 0) as MessageNameContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf2Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Protobuf2Parser.DOT, i);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_messageType;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterMessageType) {
	 		listener.enterMessageType(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitMessageType) {
	 		listener.exitMessageType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitMessageType) {
			return visitor.visitMessageType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumTypeContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumName(): EnumNameContext {
		return this.getTypedRuleContext(EnumNameContext, 0) as EnumNameContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf2Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Protobuf2Parser.DOT, i);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_enumType;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterEnumType) {
	 		listener.enterEnumType(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitEnumType) {
	 		listener.exitEnumType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitEnumType) {
			return visitor.visitEnumType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntLitContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT_LIT(): TerminalNode {
		return this.getToken(Protobuf2Parser.INT_LIT, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_intLit;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterIntLit) {
	 		listener.enterIntLit(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitIntLit) {
	 		listener.exitIntLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitIntLit) {
			return visitor.visitIntLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrLitContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STR_LIT(): TerminalNode {
		return this.getToken(Protobuf2Parser.STR_LIT, 0);
	}
	public PROTO2_LIT_SINGLE(): TerminalNode {
		return this.getToken(Protobuf2Parser.PROTO2_LIT_SINGLE, 0);
	}
	public PROTO2_LIT_DOBULE(): TerminalNode {
		return this.getToken(Protobuf2Parser.PROTO2_LIT_DOBULE, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_strLit;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterStrLit) {
	 		listener.enterStrLit(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitStrLit) {
	 		listener.exitStrLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitStrLit) {
			return visitor.visitStrLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolLitContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOOL_LIT(): TerminalNode {
		return this.getToken(Protobuf2Parser.BOOL_LIT, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_boolLit;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterBoolLit) {
	 		listener.enterBoolLit(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitBoolLit) {
	 		listener.exitBoolLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitBoolLit) {
			return visitor.visitBoolLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatLitContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FLOAT_LIT(): TerminalNode {
		return this.getToken(Protobuf2Parser.FLOAT_LIT, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_floatLit;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterFloatLit) {
	 		listener.enterFloatLit(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitFloatLit) {
	 		listener.exitFloatLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitFloatLit) {
			return visitor.visitFloatLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordsContext extends ParserRuleContext {
	constructor(parser?: Protobuf2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYNTAX(): TerminalNode {
		return this.getToken(Protobuf2Parser.SYNTAX, 0);
	}
	public IMPORT(): TerminalNode {
		return this.getToken(Protobuf2Parser.IMPORT, 0);
	}
	public WEAK(): TerminalNode {
		return this.getToken(Protobuf2Parser.WEAK, 0);
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Protobuf2Parser.PUBLIC, 0);
	}
	public PACKAGE(): TerminalNode {
		return this.getToken(Protobuf2Parser.PACKAGE, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(Protobuf2Parser.OPTION, 0);
	}
	public REPEATED(): TerminalNode {
		return this.getToken(Protobuf2Parser.REPEATED, 0);
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(Protobuf2Parser.OPTIONAL, 0);
	}
	public REQUIRED(): TerminalNode {
		return this.getToken(Protobuf2Parser.REQUIRED, 0);
	}
	public GROUP(): TerminalNode {
		return this.getToken(Protobuf2Parser.GROUP, 0);
	}
	public ONEOF(): TerminalNode {
		return this.getToken(Protobuf2Parser.ONEOF, 0);
	}
	public MAP(): TerminalNode {
		return this.getToken(Protobuf2Parser.MAP, 0);
	}
	public INT32(): TerminalNode {
		return this.getToken(Protobuf2Parser.INT32, 0);
	}
	public INT64(): TerminalNode {
		return this.getToken(Protobuf2Parser.INT64, 0);
	}
	public UINT32(): TerminalNode {
		return this.getToken(Protobuf2Parser.UINT32, 0);
	}
	public UINT64(): TerminalNode {
		return this.getToken(Protobuf2Parser.UINT64, 0);
	}
	public SINT32(): TerminalNode {
		return this.getToken(Protobuf2Parser.SINT32, 0);
	}
	public SINT64(): TerminalNode {
		return this.getToken(Protobuf2Parser.SINT64, 0);
	}
	public FIXED32(): TerminalNode {
		return this.getToken(Protobuf2Parser.FIXED32, 0);
	}
	public FIXED64(): TerminalNode {
		return this.getToken(Protobuf2Parser.FIXED64, 0);
	}
	public SFIXED32(): TerminalNode {
		return this.getToken(Protobuf2Parser.SFIXED32, 0);
	}
	public SFIXED64(): TerminalNode {
		return this.getToken(Protobuf2Parser.SFIXED64, 0);
	}
	public BOOL(): TerminalNode {
		return this.getToken(Protobuf2Parser.BOOL, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(Protobuf2Parser.STRING, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(Protobuf2Parser.DOUBLE, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(Protobuf2Parser.FLOAT, 0);
	}
	public BYTES(): TerminalNode {
		return this.getToken(Protobuf2Parser.BYTES, 0);
	}
	public RESERVED(): TerminalNode {
		return this.getToken(Protobuf2Parser.RESERVED, 0);
	}
	public EXTENSIONS(): TerminalNode {
		return this.getToken(Protobuf2Parser.EXTENSIONS, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(Protobuf2Parser.TO, 0);
	}
	public MAX(): TerminalNode {
		return this.getToken(Protobuf2Parser.MAX, 0);
	}
	public ENUM(): TerminalNode {
		return this.getToken(Protobuf2Parser.ENUM, 0);
	}
	public MESSAGE(): TerminalNode {
		return this.getToken(Protobuf2Parser.MESSAGE, 0);
	}
	public EXTEND(): TerminalNode {
		return this.getToken(Protobuf2Parser.EXTEND, 0);
	}
	public SERVICE(): TerminalNode {
		return this.getToken(Protobuf2Parser.SERVICE, 0);
	}
	public RPC(): TerminalNode {
		return this.getToken(Protobuf2Parser.RPC, 0);
	}
	public STREAM(): TerminalNode {
		return this.getToken(Protobuf2Parser.STREAM, 0);
	}
	public RETURNS(): TerminalNode {
		return this.getToken(Protobuf2Parser.RETURNS, 0);
	}
	public BOOL_LIT(): TerminalNode {
		return this.getToken(Protobuf2Parser.BOOL_LIT, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf2Parser.RULE_keywords;
	}
	public enterRule(listener: Protobuf2Listener): void {
	    if(listener.enterKeywords) {
	 		listener.enterKeywords(this);
		}
	}
	public exitRule(listener: Protobuf2Listener): void {
	    if(listener.exitKeywords) {
	 		listener.exitKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf2Visitor<Result>): Result {
		if (visitor.visitKeywords) {
			return visitor.visitKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
