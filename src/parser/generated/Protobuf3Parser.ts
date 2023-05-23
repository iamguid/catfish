// Generated from ./Protobuf3.g4 by ANTLR 4.13.0
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
import Protobuf3Listener from "./Protobuf3Listener.js";
import Protobuf3Visitor from "./Protobuf3Visitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class Protobuf3Parser extends Parser {
	public static readonly SYNTAX = 1;
	public static readonly IMPORT = 2;
	public static readonly WEAK = 3;
	public static readonly PUBLIC = 4;
	public static readonly PACKAGE = 5;
	public static readonly OPTION = 6;
	public static readonly REPEATED = 7;
	public static readonly ONEOF = 8;
	public static readonly MAP = 9;
	public static readonly INT32 = 10;
	public static readonly INT64 = 11;
	public static readonly UINT32 = 12;
	public static readonly UINT64 = 13;
	public static readonly SINT32 = 14;
	public static readonly SINT64 = 15;
	public static readonly FIXED32 = 16;
	public static readonly FIXED64 = 17;
	public static readonly SFIXED32 = 18;
	public static readonly SFIXED64 = 19;
	public static readonly BOOL = 20;
	public static readonly STRING = 21;
	public static readonly DOUBLE = 22;
	public static readonly FLOAT = 23;
	public static readonly BYTES = 24;
	public static readonly RESERVED = 25;
	public static readonly TO = 26;
	public static readonly MAX = 27;
	public static readonly ENUM = 28;
	public static readonly MESSAGE = 29;
	public static readonly SERVICE = 30;
	public static readonly RPC = 31;
	public static readonly STREAM = 32;
	public static readonly RETURNS = 33;
	public static readonly PROTO3_LIT_SINGLE = 34;
	public static readonly PROTO3_LIT_DOBULE = 35;
	public static readonly SEMI = 36;
	public static readonly EQ = 37;
	public static readonly LP = 38;
	public static readonly RP = 39;
	public static readonly LB = 40;
	public static readonly RB = 41;
	public static readonly LC = 42;
	public static readonly RC = 43;
	public static readonly LT = 44;
	public static readonly GT = 45;
	public static readonly DOT = 46;
	public static readonly COMMA = 47;
	public static readonly COLON = 48;
	public static readonly PLUS = 49;
	public static readonly MINUS = 50;
	public static readonly STR_LIT = 51;
	public static readonly BOOL_LIT = 52;
	public static readonly FLOAT_LIT = 53;
	public static readonly INT_LIT = 54;
	public static readonly IDENTIFIER = 55;
	public static readonly WS = 56;
	public static readonly LINE_COMMENT = 57;
	public static readonly COMMENT = 58;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_proto = 0;
	public static readonly RULE_syntax = 1;
	public static readonly RULE_importStatement = 2;
	public static readonly RULE_packageStatement = 3;
	public static readonly RULE_optionStatement = 4;
	public static readonly RULE_optionName = 5;
	public static readonly RULE_field = 6;
	public static readonly RULE_fieldOptions = 7;
	public static readonly RULE_fieldOption = 8;
	public static readonly RULE_fieldNumber = 9;
	public static readonly RULE_oneof = 10;
	public static readonly RULE_oneofField = 11;
	public static readonly RULE_mapField = 12;
	public static readonly RULE_keyType = 13;
	public static readonly RULE_type_ = 14;
	public static readonly RULE_reserved = 15;
	public static readonly RULE_ranges = 16;
	public static readonly RULE_range_ = 17;
	public static readonly RULE_reservedFieldNames = 18;
	public static readonly RULE_topLevelDef = 19;
	public static readonly RULE_enumDef = 20;
	public static readonly RULE_enumBody = 21;
	public static readonly RULE_enumElement = 22;
	public static readonly RULE_enumField = 23;
	public static readonly RULE_enumValueOptions = 24;
	public static readonly RULE_enumValueOption = 25;
	public static readonly RULE_messageDef = 26;
	public static readonly RULE_messageBody = 27;
	public static readonly RULE_messageElement = 28;
	public static readonly RULE_serviceDef = 29;
	public static readonly RULE_serviceElement = 30;
	public static readonly RULE_rpc = 31;
	public static readonly RULE_constant = 32;
	public static readonly RULE_blockLit = 33;
	public static readonly RULE_emptyStatement = 34;
	public static readonly RULE_ident = 35;
	public static readonly RULE_fullIdent = 36;
	public static readonly RULE_messageName = 37;
	public static readonly RULE_enumName = 38;
	public static readonly RULE_fieldName = 39;
	public static readonly RULE_oneofName = 40;
	public static readonly RULE_mapName = 41;
	public static readonly RULE_serviceName = 42;
	public static readonly RULE_rpcName = 43;
	public static readonly RULE_messageType = 44;
	public static readonly RULE_enumType = 45;
	public static readonly RULE_intLit = 46;
	public static readonly RULE_strLit = 47;
	public static readonly RULE_boolLit = 48;
	public static readonly RULE_floatLit = 49;
	public static readonly RULE_keywords = 50;
	public static readonly literalNames: (string | null)[] = [ null, "'syntax'", 
                                                            "'import'", 
                                                            "'weak'", "'public'", 
                                                            "'package'", 
                                                            "'option'", 
                                                            "'repeated'", 
                                                            "'oneof'", "'map'", 
                                                            "'int32'", "'int64'", 
                                                            "'uint32'", 
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
                                                            "'to'", "'max'", 
                                                            "'enum'", "'message'", 
                                                            "'service'", 
                                                            "'rpc'", "'stream'", 
                                                            "'returns'", 
                                                            "'\"proto3\"'", 
                                                            "''proto3''", 
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
                                                             "ONEOF", "MAP", 
                                                             "INT32", "INT64", 
                                                             "UINT32", "UINT64", 
                                                             "SINT32", "SINT64", 
                                                             "FIXED32", 
                                                             "FIXED64", 
                                                             "SFIXED32", 
                                                             "SFIXED64", 
                                                             "BOOL", "STRING", 
                                                             "DOUBLE", "FLOAT", 
                                                             "BYTES", "RESERVED", 
                                                             "TO", "MAX", 
                                                             "ENUM", "MESSAGE", 
                                                             "SERVICE", 
                                                             "RPC", "STREAM", 
                                                             "RETURNS", 
                                                             "PROTO3_LIT_SINGLE", 
                                                             "PROTO3_LIT_DOBULE", 
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
		"optionName", "field", "fieldOptions", "fieldOption", "fieldNumber", "oneof", 
		"oneofField", "mapField", "keyType", "type_", "reserved", "ranges", "range_", 
		"reservedFieldNames", "topLevelDef", "enumDef", "enumBody", "enumElement", 
		"enumField", "enumValueOptions", "enumValueOption", "messageDef", "messageBody", 
		"messageElement", "serviceDef", "serviceElement", "rpc", "constant", "blockLit", 
		"emptyStatement", "ident", "fullIdent", "messageName", "enumName", "fieldName", 
		"oneofName", "mapName", "serviceName", "rpcName", "messageType", "enumType", 
		"intLit", "strLit", "boolLit", "floatLit", "keywords",
	];
	public get grammarFileName(): string { return "Protobuf3.g4"; }
	public get literalNames(): (string | null)[] { return Protobuf3Parser.literalNames; }
	public get symbolicNames(): (string | null)[] { return Protobuf3Parser.symbolicNames; }
	public get ruleNames(): string[] { return Protobuf3Parser.ruleNames; }
	public get serializedATN(): number[] { return Protobuf3Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, Protobuf3Parser._ATN, Protobuf3Parser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public proto(): ProtoContext {
		let localctx: ProtoContext = new ProtoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, Protobuf3Parser.RULE_proto);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 102;
			this.syntax();
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1879048292) !== 0) || _la===36) {
				{
				this.state = 108;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 2:
					{
					this.state = 103;
					this.importStatement();
					}
					break;
				case 5:
					{
					this.state = 104;
					this.packageStatement();
					}
					break;
				case 6:
					{
					this.state = 105;
					this.optionStatement();
					}
					break;
				case 28:
				case 29:
				case 30:
					{
					this.state = 106;
					this.topLevelDef();
					}
					break;
				case 36:
					{
					this.state = 107;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 112;
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
	public syntax(): SyntaxContext {
		let localctx: SyntaxContext = new SyntaxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, Protobuf3Parser.RULE_syntax);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 113;
			this.match(Protobuf3Parser.SYNTAX);
			this.state = 114;
			this.match(Protobuf3Parser.EQ);
			this.state = 115;
			_la = this._input.LA(1);
			if(!(_la===34 || _la===35)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 116;
			this.match(Protobuf3Parser.SEMI);
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
		this.enterRule(localctx, 4, Protobuf3Parser.RULE_importStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 118;
			this.match(Protobuf3Parser.IMPORT);
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3 || _la===4) {
				{
				this.state = 119;
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

			this.state = 122;
			this.strLit();
			this.state = 123;
			this.match(Protobuf3Parser.SEMI);
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
		this.enterRule(localctx, 6, Protobuf3Parser.RULE_packageStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 125;
			this.match(Protobuf3Parser.PACKAGE);
			this.state = 126;
			this.fullIdent();
			this.state = 127;
			this.match(Protobuf3Parser.SEMI);
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
		this.enterRule(localctx, 8, Protobuf3Parser.RULE_optionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 129;
			this.match(Protobuf3Parser.OPTION);
			this.state = 130;
			this.optionName();
			this.state = 131;
			this.match(Protobuf3Parser.EQ);
			this.state = 132;
			this.constant();
			this.state = 133;
			this.match(Protobuf3Parser.SEMI);
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
		this.enterRule(localctx, 10, Protobuf3Parser.RULE_optionName);
		let _la: number;
		try {
			this.state = 143;
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
			case 52:
			case 55:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 135;
				this.fullIdent();
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 136;
				this.match(Protobuf3Parser.LP);
				this.state = 137;
				this.fullIdent();
				this.state = 138;
				this.match(Protobuf3Parser.RP);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===46) {
					{
					this.state = 139;
					this.match(Protobuf3Parser.DOT);
					this.state = 140;
					this.fullIdent();
					}
				}

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
	public field(): FieldContext {
		let localctx: FieldContext = new FieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, Protobuf3Parser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 146;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 145;
				this.match(Protobuf3Parser.REPEATED);
				}
				break;
			}
			this.state = 148;
			this.type_();
			this.state = 149;
			this.fieldName();
			this.state = 150;
			this.match(Protobuf3Parser.EQ);
			this.state = 151;
			this.fieldNumber();
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===40) {
				{
				this.state = 152;
				this.match(Protobuf3Parser.LB);
				this.state = 153;
				this.fieldOptions();
				this.state = 154;
				this.match(Protobuf3Parser.RB);
				}
			}

			this.state = 158;
			this.match(Protobuf3Parser.SEMI);
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
		this.enterRule(localctx, 14, Protobuf3Parser.RULE_fieldOptions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 160;
			this.fieldOption();
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===47) {
				{
				{
				this.state = 161;
				this.match(Protobuf3Parser.COMMA);
				this.state = 162;
				this.fieldOption();
				}
				}
				this.state = 167;
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
		this.enterRule(localctx, 16, Protobuf3Parser.RULE_fieldOption);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 168;
			this.optionName();
			this.state = 169;
			this.match(Protobuf3Parser.EQ);
			this.state = 170;
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
		this.enterRule(localctx, 18, Protobuf3Parser.RULE_fieldNumber);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 172;
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
	public oneof(): OneofContext {
		let localctx: OneofContext = new OneofContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, Protobuf3Parser.RULE_oneof);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 174;
			this.match(Protobuf3Parser.ONEOF);
			this.state = 175;
			this.oneofName();
			this.state = 176;
			this.match(Protobuf3Parser.LC);
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 9453587) !== 0)) {
				{
				this.state = 180;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 177;
					this.optionStatement();
					}
					break;
				case 2:
					{
					this.state = 178;
					this.oneofField();
					}
					break;
				case 3:
					{
					this.state = 179;
					this.emptyStatement();
					}
					break;
				}
				}
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 185;
			this.match(Protobuf3Parser.RC);
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
		this.enterRule(localctx, 22, Protobuf3Parser.RULE_oneofField);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 187;
			this.type_();
			this.state = 188;
			this.fieldName();
			this.state = 189;
			this.match(Protobuf3Parser.EQ);
			this.state = 190;
			this.fieldNumber();
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===40) {
				{
				this.state = 191;
				this.match(Protobuf3Parser.LB);
				this.state = 192;
				this.fieldOptions();
				this.state = 193;
				this.match(Protobuf3Parser.RB);
				}
			}

			this.state = 197;
			this.match(Protobuf3Parser.SEMI);
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
		this.enterRule(localctx, 24, Protobuf3Parser.RULE_mapField);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 199;
			this.match(Protobuf3Parser.MAP);
			this.state = 200;
			this.match(Protobuf3Parser.LT);
			this.state = 201;
			this.keyType();
			this.state = 202;
			this.match(Protobuf3Parser.COMMA);
			this.state = 203;
			this.type_();
			this.state = 204;
			this.match(Protobuf3Parser.GT);
			this.state = 205;
			this.mapName();
			this.state = 206;
			this.match(Protobuf3Parser.EQ);
			this.state = 207;
			this.fieldNumber();
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===40) {
				{
				this.state = 208;
				this.match(Protobuf3Parser.LB);
				this.state = 209;
				this.fieldOptions();
				this.state = 210;
				this.match(Protobuf3Parser.RB);
				}
			}

			this.state = 214;
			this.match(Protobuf3Parser.SEMI);
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
		this.enterRule(localctx, 26, Protobuf3Parser.RULE_keyType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 216;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4193280) !== 0))) {
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
		this.enterRule(localctx, 28, Protobuf3Parser.RULE_type_);
		try {
			this.state = 235;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 218;
				this.match(Protobuf3Parser.DOUBLE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 219;
				this.match(Protobuf3Parser.FLOAT);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 220;
				this.match(Protobuf3Parser.INT32);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 221;
				this.match(Protobuf3Parser.INT64);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 222;
				this.match(Protobuf3Parser.UINT32);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 223;
				this.match(Protobuf3Parser.UINT64);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 224;
				this.match(Protobuf3Parser.SINT32);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 225;
				this.match(Protobuf3Parser.SINT64);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 226;
				this.match(Protobuf3Parser.FIXED32);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 227;
				this.match(Protobuf3Parser.FIXED64);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 228;
				this.match(Protobuf3Parser.SFIXED32);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 229;
				this.match(Protobuf3Parser.SFIXED64);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 230;
				this.match(Protobuf3Parser.BOOL);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 231;
				this.match(Protobuf3Parser.STRING);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 232;
				this.match(Protobuf3Parser.BYTES);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 233;
				this.messageType();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 234;
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
	public reserved(): ReservedContext {
		let localctx: ReservedContext = new ReservedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, Protobuf3Parser.RULE_reserved);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 237;
			this.match(Protobuf3Parser.RESERVED);
			this.state = 240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 54:
				{
				this.state = 238;
				this.ranges();
				}
				break;
			case 34:
			case 35:
			case 51:
				{
				this.state = 239;
				this.reservedFieldNames();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 242;
			this.match(Protobuf3Parser.SEMI);
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
		this.enterRule(localctx, 32, Protobuf3Parser.RULE_ranges);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 244;
			this.range_();
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===47) {
				{
				{
				this.state = 245;
				this.match(Protobuf3Parser.COMMA);
				this.state = 246;
				this.range_();
				}
				}
				this.state = 251;
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
		this.enterRule(localctx, 34, Protobuf3Parser.RULE_range_);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 252;
			this.intLit();
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 253;
				this.match(Protobuf3Parser.TO);
				this.state = 256;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 54:
					{
					this.state = 254;
					this.intLit();
					}
					break;
				case 27:
					{
					this.state = 255;
					this.match(Protobuf3Parser.MAX);
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
		this.enterRule(localctx, 36, Protobuf3Parser.RULE_reservedFieldNames);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 260;
			this.strLit();
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===47) {
				{
				{
				this.state = 261;
				this.match(Protobuf3Parser.COMMA);
				this.state = 262;
				this.strLit();
				}
				}
				this.state = 267;
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
		this.enterRule(localctx, 38, Protobuf3Parser.RULE_topLevelDef);
		try {
			this.state = 271;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 29:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 268;
				this.messageDef();
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 269;
				this.enumDef();
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 270;
				this.serviceDef();
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
		this.enterRule(localctx, 40, Protobuf3Parser.RULE_enumDef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 273;
			this.match(Protobuf3Parser.ENUM);
			this.state = 274;
			this.enumName();
			this.state = 275;
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
		this.enterRule(localctx, 42, Protobuf3Parser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 277;
			this.match(Protobuf3Parser.LC);
			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 9437203) !== 0)) {
				{
				{
				this.state = 278;
				this.enumElement();
				}
				}
				this.state = 283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 284;
			this.match(Protobuf3Parser.RC);
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
		this.enterRule(localctx, 44, Protobuf3Parser.RULE_enumElement);
		try {
			this.state = 289;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 286;
				this.optionStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 287;
				this.enumField();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 288;
				this.emptyStatement();
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
		this.enterRule(localctx, 46, Protobuf3Parser.RULE_enumField);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 291;
			this.ident();
			this.state = 292;
			this.match(Protobuf3Parser.EQ);
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===50) {
				{
				this.state = 293;
				this.match(Protobuf3Parser.MINUS);
				}
			}

			this.state = 296;
			this.intLit();
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===40) {
				{
				this.state = 297;
				this.enumValueOptions();
				}
			}

			this.state = 300;
			this.match(Protobuf3Parser.SEMI);
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
		this.enterRule(localctx, 48, Protobuf3Parser.RULE_enumValueOptions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 302;
			this.match(Protobuf3Parser.LB);
			this.state = 303;
			this.enumValueOption();
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===47) {
				{
				{
				this.state = 304;
				this.match(Protobuf3Parser.COMMA);
				this.state = 305;
				this.enumValueOption();
				}
				}
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 311;
			this.match(Protobuf3Parser.RB);
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
		this.enterRule(localctx, 50, Protobuf3Parser.RULE_enumValueOption);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 313;
			this.optionName();
			this.state = 314;
			this.match(Protobuf3Parser.EQ);
			this.state = 315;
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
		this.enterRule(localctx, 52, Protobuf3Parser.RULE_messageDef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 317;
			this.match(Protobuf3Parser.MESSAGE);
			this.state = 318;
			this.messageName();
			this.state = 319;
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
		this.enterRule(localctx, 54, Protobuf3Parser.RULE_messageBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 321;
			this.match(Protobuf3Parser.LC);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 9453587) !== 0)) {
				{
				{
				this.state = 322;
				this.messageElement();
				}
				}
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 328;
			this.match(Protobuf3Parser.RC);
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
		this.enterRule(localctx, 56, Protobuf3Parser.RULE_messageElement);
		try {
			this.state = 338;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 330;
				this.field();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 331;
				this.enumDef();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 332;
				this.messageDef();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 333;
				this.optionStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 334;
				this.oneof();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 335;
				this.mapField();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 336;
				this.reserved();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 337;
				this.emptyStatement();
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
		this.enterRule(localctx, 58, Protobuf3Parser.RULE_serviceDef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 340;
			this.match(Protobuf3Parser.SERVICE);
			this.state = 341;
			this.serviceName();
			this.state = 342;
			this.match(Protobuf3Parser.LC);
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 1107296257) !== 0)) {
				{
				{
				this.state = 343;
				this.serviceElement();
				}
				}
				this.state = 348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 349;
			this.match(Protobuf3Parser.RC);
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
		this.enterRule(localctx, 60, Protobuf3Parser.RULE_serviceElement);
		try {
			this.state = 354;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 351;
				this.optionStatement();
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 352;
				this.rpc();
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 353;
				this.emptyStatement();
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
		this.enterRule(localctx, 62, Protobuf3Parser.RULE_rpc);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 356;
			this.match(Protobuf3Parser.RPC);
			this.state = 357;
			this.rpcName();
			this.state = 358;
			this.match(Protobuf3Parser.LP);
			this.state = 360;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 359;
				this.match(Protobuf3Parser.STREAM);
				}
				break;
			}
			this.state = 362;
			this.messageType();
			this.state = 363;
			this.match(Protobuf3Parser.RP);
			this.state = 364;
			this.match(Protobuf3Parser.RETURNS);
			this.state = 365;
			this.match(Protobuf3Parser.LP);
			this.state = 367;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 366;
				this.match(Protobuf3Parser.STREAM);
				}
				break;
			}
			this.state = 369;
			this.messageType();
			this.state = 370;
			this.match(Protobuf3Parser.RP);
			this.state = 381;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 42:
				{
				this.state = 371;
				this.match(Protobuf3Parser.LC);
				this.state = 376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===6 || _la===36) {
					{
					this.state = 374;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 6:
						{
						this.state = 372;
						this.optionStatement();
						}
						break;
					case 36:
						{
						this.state = 373;
						this.emptyStatement();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 378;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 379;
				this.match(Protobuf3Parser.RC);
				}
				break;
			case 36:
				{
				this.state = 380;
				this.match(Protobuf3Parser.SEMI);
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
		this.enterRule(localctx, 64, Protobuf3Parser.RULE_constant);
		let _la: number;
		try {
			this.state = 395;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===49 || _la===50) {
					{
					this.state = 383;
					_la = this._input.LA(1);
					if(!(_la===49 || _la===50)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 386;
				this.intLit();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===49 || _la===50) {
					{
					this.state = 387;
					_la = this._input.LA(1);
					if(!(_la===49 || _la===50)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 390;
				this.floatLit();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 391;
				this.strLit();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 392;
				this.boolLit();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 393;
				this.blockLit();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 394;
				this.fullIdent();
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
		this.enterRule(localctx, 66, Protobuf3Parser.RULE_blockLit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 397;
			this.match(Protobuf3Parser.LC);
			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 9437187) !== 0)) {
				{
				{
				this.state = 398;
				this.ident();
				this.state = 399;
				this.match(Protobuf3Parser.COLON);
				this.state = 400;
				this.constant();
				}
				}
				this.state = 406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 407;
			this.match(Protobuf3Parser.RC);
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
	public emptyStatement(): EmptyStatementContext {
		let localctx: EmptyStatementContext = new EmptyStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, Protobuf3Parser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 409;
			this.match(Protobuf3Parser.SEMI);
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
		this.enterRule(localctx, 70, Protobuf3Parser.RULE_ident);
		try {
			this.state = 413;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 55:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 411;
				this.match(Protobuf3Parser.IDENTIFIER);
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
			case 52:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 412;
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
		this.enterRule(localctx, 72, Protobuf3Parser.RULE_fullIdent);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 415;
			this.ident();
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===46) {
				{
				{
				this.state = 416;
				this.match(Protobuf3Parser.DOT);
				this.state = 417;
				this.ident();
				}
				}
				this.state = 422;
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
		this.enterRule(localctx, 74, Protobuf3Parser.RULE_messageName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 423;
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
		this.enterRule(localctx, 76, Protobuf3Parser.RULE_enumName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 425;
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
		this.enterRule(localctx, 78, Protobuf3Parser.RULE_fieldName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 427;
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
		this.enterRule(localctx, 80, Protobuf3Parser.RULE_oneofName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 429;
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
		this.enterRule(localctx, 82, Protobuf3Parser.RULE_mapName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 431;
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
		this.enterRule(localctx, 84, Protobuf3Parser.RULE_serviceName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 433;
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
		this.enterRule(localctx, 86, Protobuf3Parser.RULE_rpcName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 435;
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
		this.enterRule(localctx, 88, Protobuf3Parser.RULE_messageType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===46) {
				{
				this.state = 437;
				this.match(Protobuf3Parser.DOT);
				}
			}

			this.state = 445;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 440;
					this.ident();
					this.state = 441;
					this.match(Protobuf3Parser.DOT);
					}
					}
				}
				this.state = 447;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
			}
			this.state = 448;
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
		this.enterRule(localctx, 90, Protobuf3Parser.RULE_enumType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===46) {
				{
				this.state = 450;
				this.match(Protobuf3Parser.DOT);
				}
			}

			this.state = 458;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 453;
					this.ident();
					this.state = 454;
					this.match(Protobuf3Parser.DOT);
					}
					}
				}
				this.state = 460;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
			}
			this.state = 461;
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
		this.enterRule(localctx, 92, Protobuf3Parser.RULE_intLit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 463;
			this.match(Protobuf3Parser.INT_LIT);
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
		this.enterRule(localctx, 94, Protobuf3Parser.RULE_strLit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 465;
			_la = this._input.LA(1);
			if(!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 131075) !== 0))) {
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
		this.enterRule(localctx, 96, Protobuf3Parser.RULE_boolLit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 467;
			this.match(Protobuf3Parser.BOOL_LIT);
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
		this.enterRule(localctx, 98, Protobuf3Parser.RULE_floatLit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 469;
			this.match(Protobuf3Parser.FLOAT_LIT);
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
		this.enterRule(localctx, 100, Protobuf3Parser.RULE_keywords);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 471;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1048579) !== 0))) {
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

	public static readonly _serializedATN: number[] = [4,1,58,474,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
	7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,1,0,1,0,1,0,1,0,1,0,1,0,5,
	0,109,8,0,10,0,12,0,112,9,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,3,2,121,8,2,1,2,
	1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,
	3,5,142,8,5,3,5,144,8,5,1,6,3,6,147,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
	3,6,157,8,6,1,6,1,6,1,7,1,7,1,7,5,7,164,8,7,10,7,12,7,167,9,7,1,8,1,8,1,
	8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,5,10,181,8,10,10,10,12,10,184,
	9,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,196,8,11,1,
	11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
	3,12,213,8,12,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
	14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,236,8,14,1,15,1,15,
	1,15,3,15,241,8,15,1,15,1,15,1,16,1,16,1,16,5,16,248,8,16,10,16,12,16,251,
	9,16,1,17,1,17,1,17,1,17,3,17,257,8,17,3,17,259,8,17,1,18,1,18,1,18,5,18,
	264,8,18,10,18,12,18,267,9,18,1,19,1,19,1,19,3,19,272,8,19,1,20,1,20,1,
	20,1,20,1,21,1,21,5,21,280,8,21,10,21,12,21,283,9,21,1,21,1,21,1,22,1,22,
	1,22,3,22,290,8,22,1,23,1,23,1,23,3,23,295,8,23,1,23,1,23,3,23,299,8,23,
	1,23,1,23,1,24,1,24,1,24,1,24,5,24,307,8,24,10,24,12,24,310,9,24,1,24,1,
	24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,27,1,27,5,27,324,8,27,10,27,
	12,27,327,9,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,339,
	8,28,1,29,1,29,1,29,1,29,5,29,345,8,29,10,29,12,29,348,9,29,1,29,1,29,1,
	30,1,30,1,30,3,30,355,8,30,1,31,1,31,1,31,1,31,3,31,361,8,31,1,31,1,31,
	1,31,1,31,1,31,3,31,368,8,31,1,31,1,31,1,31,1,31,1,31,5,31,375,8,31,10,
	31,12,31,378,9,31,1,31,1,31,3,31,382,8,31,1,32,3,32,385,8,32,1,32,1,32,
	3,32,389,8,32,1,32,1,32,1,32,1,32,1,32,3,32,396,8,32,1,33,1,33,1,33,1,33,
	1,33,5,33,403,8,33,10,33,12,33,406,9,33,1,33,1,33,1,34,1,34,1,35,1,35,3,
	35,414,8,35,1,36,1,36,1,36,5,36,419,8,36,10,36,12,36,422,9,36,1,37,1,37,
	1,38,1,38,1,39,1,39,1,40,1,40,1,41,1,41,1,42,1,42,1,43,1,43,1,44,3,44,439,
	8,44,1,44,1,44,1,44,5,44,444,8,44,10,44,12,44,447,9,44,1,44,1,44,1,45,3,
	45,452,8,45,1,45,1,45,1,45,5,45,457,8,45,10,45,12,45,460,9,45,1,45,1,45,
	1,46,1,46,1,47,1,47,1,48,1,48,1,49,1,49,1,50,1,50,1,50,0,0,51,0,2,4,6,8,
	10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
	58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,0,6,
	1,0,34,35,1,0,3,4,1,0,10,21,1,0,49,50,2,0,34,35,51,51,2,0,1,33,52,52,497,
	0,102,1,0,0,0,2,113,1,0,0,0,4,118,1,0,0,0,6,125,1,0,0,0,8,129,1,0,0,0,10,
	143,1,0,0,0,12,146,1,0,0,0,14,160,1,0,0,0,16,168,1,0,0,0,18,172,1,0,0,0,
	20,174,1,0,0,0,22,187,1,0,0,0,24,199,1,0,0,0,26,216,1,0,0,0,28,235,1,0,
	0,0,30,237,1,0,0,0,32,244,1,0,0,0,34,252,1,0,0,0,36,260,1,0,0,0,38,271,
	1,0,0,0,40,273,1,0,0,0,42,277,1,0,0,0,44,289,1,0,0,0,46,291,1,0,0,0,48,
	302,1,0,0,0,50,313,1,0,0,0,52,317,1,0,0,0,54,321,1,0,0,0,56,338,1,0,0,0,
	58,340,1,0,0,0,60,354,1,0,0,0,62,356,1,0,0,0,64,395,1,0,0,0,66,397,1,0,
	0,0,68,409,1,0,0,0,70,413,1,0,0,0,72,415,1,0,0,0,74,423,1,0,0,0,76,425,
	1,0,0,0,78,427,1,0,0,0,80,429,1,0,0,0,82,431,1,0,0,0,84,433,1,0,0,0,86,
	435,1,0,0,0,88,438,1,0,0,0,90,451,1,0,0,0,92,463,1,0,0,0,94,465,1,0,0,0,
	96,467,1,0,0,0,98,469,1,0,0,0,100,471,1,0,0,0,102,110,3,2,1,0,103,109,3,
	4,2,0,104,109,3,6,3,0,105,109,3,8,4,0,106,109,3,38,19,0,107,109,3,68,34,
	0,108,103,1,0,0,0,108,104,1,0,0,0,108,105,1,0,0,0,108,106,1,0,0,0,108,107,
	1,0,0,0,109,112,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,1,1,0,0,0,112,
	110,1,0,0,0,113,114,5,1,0,0,114,115,5,37,0,0,115,116,7,0,0,0,116,117,5,
	36,0,0,117,3,1,0,0,0,118,120,5,2,0,0,119,121,7,1,0,0,120,119,1,0,0,0,120,
	121,1,0,0,0,121,122,1,0,0,0,122,123,3,94,47,0,123,124,5,36,0,0,124,5,1,
	0,0,0,125,126,5,5,0,0,126,127,3,72,36,0,127,128,5,36,0,0,128,7,1,0,0,0,
	129,130,5,6,0,0,130,131,3,10,5,0,131,132,5,37,0,0,132,133,3,64,32,0,133,
	134,5,36,0,0,134,9,1,0,0,0,135,144,3,72,36,0,136,137,5,38,0,0,137,138,3,
	72,36,0,138,141,5,39,0,0,139,140,5,46,0,0,140,142,3,72,36,0,141,139,1,0,
	0,0,141,142,1,0,0,0,142,144,1,0,0,0,143,135,1,0,0,0,143,136,1,0,0,0,144,
	11,1,0,0,0,145,147,5,7,0,0,146,145,1,0,0,0,146,147,1,0,0,0,147,148,1,0,
	0,0,148,149,3,28,14,0,149,150,3,78,39,0,150,151,5,37,0,0,151,156,3,18,9,
	0,152,153,5,40,0,0,153,154,3,14,7,0,154,155,5,41,0,0,155,157,1,0,0,0,156,
	152,1,0,0,0,156,157,1,0,0,0,157,158,1,0,0,0,158,159,5,36,0,0,159,13,1,0,
	0,0,160,165,3,16,8,0,161,162,5,47,0,0,162,164,3,16,8,0,163,161,1,0,0,0,
	164,167,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,15,1,0,0,0,167,165,
	1,0,0,0,168,169,3,10,5,0,169,170,5,37,0,0,170,171,3,64,32,0,171,17,1,0,
	0,0,172,173,3,92,46,0,173,19,1,0,0,0,174,175,5,8,0,0,175,176,3,80,40,0,
	176,182,5,42,0,0,177,181,3,8,4,0,178,181,3,22,11,0,179,181,3,68,34,0,180,
	177,1,0,0,0,180,178,1,0,0,0,180,179,1,0,0,0,181,184,1,0,0,0,182,180,1,0,
	0,0,182,183,1,0,0,0,183,185,1,0,0,0,184,182,1,0,0,0,185,186,5,43,0,0,186,
	21,1,0,0,0,187,188,3,28,14,0,188,189,3,78,39,0,189,190,5,37,0,0,190,195,
	3,18,9,0,191,192,5,40,0,0,192,193,3,14,7,0,193,194,5,41,0,0,194,196,1,0,
	0,0,195,191,1,0,0,0,195,196,1,0,0,0,196,197,1,0,0,0,197,198,5,36,0,0,198,
	23,1,0,0,0,199,200,5,9,0,0,200,201,5,44,0,0,201,202,3,26,13,0,202,203,5,
	47,0,0,203,204,3,28,14,0,204,205,5,45,0,0,205,206,3,82,41,0,206,207,5,37,
	0,0,207,212,3,18,9,0,208,209,5,40,0,0,209,210,3,14,7,0,210,211,5,41,0,0,
	211,213,1,0,0,0,212,208,1,0,0,0,212,213,1,0,0,0,213,214,1,0,0,0,214,215,
	5,36,0,0,215,25,1,0,0,0,216,217,7,2,0,0,217,27,1,0,0,0,218,236,5,22,0,0,
	219,236,5,23,0,0,220,236,5,10,0,0,221,236,5,11,0,0,222,236,5,12,0,0,223,
	236,5,13,0,0,224,236,5,14,0,0,225,236,5,15,0,0,226,236,5,16,0,0,227,236,
	5,17,0,0,228,236,5,18,0,0,229,236,5,19,0,0,230,236,5,20,0,0,231,236,5,21,
	0,0,232,236,5,24,0,0,233,236,3,88,44,0,234,236,3,90,45,0,235,218,1,0,0,
	0,235,219,1,0,0,0,235,220,1,0,0,0,235,221,1,0,0,0,235,222,1,0,0,0,235,223,
	1,0,0,0,235,224,1,0,0,0,235,225,1,0,0,0,235,226,1,0,0,0,235,227,1,0,0,0,
	235,228,1,0,0,0,235,229,1,0,0,0,235,230,1,0,0,0,235,231,1,0,0,0,235,232,
	1,0,0,0,235,233,1,0,0,0,235,234,1,0,0,0,236,29,1,0,0,0,237,240,5,25,0,0,
	238,241,3,32,16,0,239,241,3,36,18,0,240,238,1,0,0,0,240,239,1,0,0,0,241,
	242,1,0,0,0,242,243,5,36,0,0,243,31,1,0,0,0,244,249,3,34,17,0,245,246,5,
	47,0,0,246,248,3,34,17,0,247,245,1,0,0,0,248,251,1,0,0,0,249,247,1,0,0,
	0,249,250,1,0,0,0,250,33,1,0,0,0,251,249,1,0,0,0,252,258,3,92,46,0,253,
	256,5,26,0,0,254,257,3,92,46,0,255,257,5,27,0,0,256,254,1,0,0,0,256,255,
	1,0,0,0,257,259,1,0,0,0,258,253,1,0,0,0,258,259,1,0,0,0,259,35,1,0,0,0,
	260,265,3,94,47,0,261,262,5,47,0,0,262,264,3,94,47,0,263,261,1,0,0,0,264,
	267,1,0,0,0,265,263,1,0,0,0,265,266,1,0,0,0,266,37,1,0,0,0,267,265,1,0,
	0,0,268,272,3,52,26,0,269,272,3,40,20,0,270,272,3,58,29,0,271,268,1,0,0,
	0,271,269,1,0,0,0,271,270,1,0,0,0,272,39,1,0,0,0,273,274,5,28,0,0,274,275,
	3,76,38,0,275,276,3,42,21,0,276,41,1,0,0,0,277,281,5,42,0,0,278,280,3,44,
	22,0,279,278,1,0,0,0,280,283,1,0,0,0,281,279,1,0,0,0,281,282,1,0,0,0,282,
	284,1,0,0,0,283,281,1,0,0,0,284,285,5,43,0,0,285,43,1,0,0,0,286,290,3,8,
	4,0,287,290,3,46,23,0,288,290,3,68,34,0,289,286,1,0,0,0,289,287,1,0,0,0,
	289,288,1,0,0,0,290,45,1,0,0,0,291,292,3,70,35,0,292,294,5,37,0,0,293,295,
	5,50,0,0,294,293,1,0,0,0,294,295,1,0,0,0,295,296,1,0,0,0,296,298,3,92,46,
	0,297,299,3,48,24,0,298,297,1,0,0,0,298,299,1,0,0,0,299,300,1,0,0,0,300,
	301,5,36,0,0,301,47,1,0,0,0,302,303,5,40,0,0,303,308,3,50,25,0,304,305,
	5,47,0,0,305,307,3,50,25,0,306,304,1,0,0,0,307,310,1,0,0,0,308,306,1,0,
	0,0,308,309,1,0,0,0,309,311,1,0,0,0,310,308,1,0,0,0,311,312,5,41,0,0,312,
	49,1,0,0,0,313,314,3,10,5,0,314,315,5,37,0,0,315,316,3,64,32,0,316,51,1,
	0,0,0,317,318,5,29,0,0,318,319,3,74,37,0,319,320,3,54,27,0,320,53,1,0,0,
	0,321,325,5,42,0,0,322,324,3,56,28,0,323,322,1,0,0,0,324,327,1,0,0,0,325,
	323,1,0,0,0,325,326,1,0,0,0,326,328,1,0,0,0,327,325,1,0,0,0,328,329,5,43,
	0,0,329,55,1,0,0,0,330,339,3,12,6,0,331,339,3,40,20,0,332,339,3,52,26,0,
	333,339,3,8,4,0,334,339,3,20,10,0,335,339,3,24,12,0,336,339,3,30,15,0,337,
	339,3,68,34,0,338,330,1,0,0,0,338,331,1,0,0,0,338,332,1,0,0,0,338,333,1,
	0,0,0,338,334,1,0,0,0,338,335,1,0,0,0,338,336,1,0,0,0,338,337,1,0,0,0,339,
	57,1,0,0,0,340,341,5,30,0,0,341,342,3,84,42,0,342,346,5,42,0,0,343,345,
	3,60,30,0,344,343,1,0,0,0,345,348,1,0,0,0,346,344,1,0,0,0,346,347,1,0,0,
	0,347,349,1,0,0,0,348,346,1,0,0,0,349,350,5,43,0,0,350,59,1,0,0,0,351,355,
	3,8,4,0,352,355,3,62,31,0,353,355,3,68,34,0,354,351,1,0,0,0,354,352,1,0,
	0,0,354,353,1,0,0,0,355,61,1,0,0,0,356,357,5,31,0,0,357,358,3,86,43,0,358,
	360,5,38,0,0,359,361,5,32,0,0,360,359,1,0,0,0,360,361,1,0,0,0,361,362,1,
	0,0,0,362,363,3,88,44,0,363,364,5,39,0,0,364,365,5,33,0,0,365,367,5,38,
	0,0,366,368,5,32,0,0,367,366,1,0,0,0,367,368,1,0,0,0,368,369,1,0,0,0,369,
	370,3,88,44,0,370,381,5,39,0,0,371,376,5,42,0,0,372,375,3,8,4,0,373,375,
	3,68,34,0,374,372,1,0,0,0,374,373,1,0,0,0,375,378,1,0,0,0,376,374,1,0,0,
	0,376,377,1,0,0,0,377,379,1,0,0,0,378,376,1,0,0,0,379,382,5,43,0,0,380,
	382,5,36,0,0,381,371,1,0,0,0,381,380,1,0,0,0,382,63,1,0,0,0,383,385,7,3,
	0,0,384,383,1,0,0,0,384,385,1,0,0,0,385,386,1,0,0,0,386,396,3,92,46,0,387,
	389,7,3,0,0,388,387,1,0,0,0,388,389,1,0,0,0,389,390,1,0,0,0,390,396,3,98,
	49,0,391,396,3,94,47,0,392,396,3,96,48,0,393,396,3,66,33,0,394,396,3,72,
	36,0,395,384,1,0,0,0,395,388,1,0,0,0,395,391,1,0,0,0,395,392,1,0,0,0,395,
	393,1,0,0,0,395,394,1,0,0,0,396,65,1,0,0,0,397,404,5,42,0,0,398,399,3,70,
	35,0,399,400,5,48,0,0,400,401,3,64,32,0,401,403,1,0,0,0,402,398,1,0,0,0,
	403,406,1,0,0,0,404,402,1,0,0,0,404,405,1,0,0,0,405,407,1,0,0,0,406,404,
	1,0,0,0,407,408,5,43,0,0,408,67,1,0,0,0,409,410,5,36,0,0,410,69,1,0,0,0,
	411,414,5,55,0,0,412,414,3,100,50,0,413,411,1,0,0,0,413,412,1,0,0,0,414,
	71,1,0,0,0,415,420,3,70,35,0,416,417,5,46,0,0,417,419,3,70,35,0,418,416,
	1,0,0,0,419,422,1,0,0,0,420,418,1,0,0,0,420,421,1,0,0,0,421,73,1,0,0,0,
	422,420,1,0,0,0,423,424,3,70,35,0,424,75,1,0,0,0,425,426,3,70,35,0,426,
	77,1,0,0,0,427,428,3,70,35,0,428,79,1,0,0,0,429,430,3,70,35,0,430,81,1,
	0,0,0,431,432,3,70,35,0,432,83,1,0,0,0,433,434,3,70,35,0,434,85,1,0,0,0,
	435,436,3,70,35,0,436,87,1,0,0,0,437,439,5,46,0,0,438,437,1,0,0,0,438,439,
	1,0,0,0,439,445,1,0,0,0,440,441,3,70,35,0,441,442,5,46,0,0,442,444,1,0,
	0,0,443,440,1,0,0,0,444,447,1,0,0,0,445,443,1,0,0,0,445,446,1,0,0,0,446,
	448,1,0,0,0,447,445,1,0,0,0,448,449,3,74,37,0,449,89,1,0,0,0,450,452,5,
	46,0,0,451,450,1,0,0,0,451,452,1,0,0,0,452,458,1,0,0,0,453,454,3,70,35,
	0,454,455,5,46,0,0,455,457,1,0,0,0,456,453,1,0,0,0,457,460,1,0,0,0,458,
	456,1,0,0,0,458,459,1,0,0,0,459,461,1,0,0,0,460,458,1,0,0,0,461,462,3,76,
	38,0,462,91,1,0,0,0,463,464,5,54,0,0,464,93,1,0,0,0,465,466,7,4,0,0,466,
	95,1,0,0,0,467,468,5,52,0,0,468,97,1,0,0,0,469,470,5,53,0,0,470,99,1,0,
	0,0,471,472,7,5,0,0,472,101,1,0,0,0,43,108,110,120,141,143,146,156,165,
	180,182,195,212,235,240,249,256,258,265,271,281,289,294,298,308,325,338,
	346,354,360,367,374,376,381,384,388,395,404,413,420,438,445,451,458];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Protobuf3Parser.__ATN) {
			Protobuf3Parser.__ATN = new ATNDeserializer().deserialize(Protobuf3Parser._serializedATN);
		}

		return Protobuf3Parser.__ATN;
	}


	static DecisionsToDFA = Protobuf3Parser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProtoContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public syntax(): SyntaxContext {
		return this.getTypedRuleContext(SyntaxContext, 0) as SyntaxContext;
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
	public emptyStatement_list(): EmptyStatementContext[] {
		return this.getTypedRuleContexts(EmptyStatementContext) as EmptyStatementContext[];
	}
	public emptyStatement(i: number): EmptyStatementContext {
		return this.getTypedRuleContext(EmptyStatementContext, i) as EmptyStatementContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_proto;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterProto) {
	 		listener.enterProto(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitProto) {
	 		listener.exitProto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitProto) {
			return visitor.visitProto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SyntaxContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYNTAX(): TerminalNode {
		return this.getToken(Protobuf3Parser.SYNTAX, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(Protobuf3Parser.EQ, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf3Parser.SEMI, 0);
	}
	public PROTO3_LIT_SINGLE(): TerminalNode {
		return this.getToken(Protobuf3Parser.PROTO3_LIT_SINGLE, 0);
	}
	public PROTO3_LIT_DOBULE(): TerminalNode {
		return this.getToken(Protobuf3Parser.PROTO3_LIT_DOBULE, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_syntax;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterSyntax) {
	 		listener.enterSyntax(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitSyntax) {
	 		listener.exitSyntax(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitSyntax) {
			return visitor.visitSyntax(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(Protobuf3Parser.IMPORT, 0);
	}
	public strLit(): StrLitContext {
		return this.getTypedRuleContext(StrLitContext, 0) as StrLitContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf3Parser.SEMI, 0);
	}
	public WEAK(): TerminalNode {
		return this.getToken(Protobuf3Parser.WEAK, 0);
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Protobuf3Parser.PUBLIC, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_importStatement;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterImportStatement) {
	 		listener.enterImportStatement(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitImportStatement) {
	 		listener.exitImportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageStatementContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PACKAGE(): TerminalNode {
		return this.getToken(Protobuf3Parser.PACKAGE, 0);
	}
	public fullIdent(): FullIdentContext {
		return this.getTypedRuleContext(FullIdentContext, 0) as FullIdentContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf3Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_packageStatement;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterPackageStatement) {
	 		listener.enterPackageStatement(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitPackageStatement) {
	 		listener.exitPackageStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitPackageStatement) {
			return visitor.visitPackageStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionStatementContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPTION(): TerminalNode {
		return this.getToken(Protobuf3Parser.OPTION, 0);
	}
	public optionName(): OptionNameContext {
		return this.getTypedRuleContext(OptionNameContext, 0) as OptionNameContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(Protobuf3Parser.EQ, 0);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf3Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_optionStatement;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterOptionStatement) {
	 		listener.enterOptionStatement(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitOptionStatement) {
	 		listener.exitOptionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitOptionStatement) {
			return visitor.visitOptionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fullIdent_list(): FullIdentContext[] {
		return this.getTypedRuleContexts(FullIdentContext) as FullIdentContext[];
	}
	public fullIdent(i: number): FullIdentContext {
		return this.getTypedRuleContext(FullIdentContext, i) as FullIdentContext;
	}
	public LP(): TerminalNode {
		return this.getToken(Protobuf3Parser.LP, 0);
	}
	public RP(): TerminalNode {
		return this.getToken(Protobuf3Parser.RP, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(Protobuf3Parser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_optionName;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterOptionName) {
	 		listener.enterOptionName(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitOptionName) {
	 		listener.exitOptionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitOptionName) {
			return visitor.visitOptionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getToken(Protobuf3Parser.EQ, 0);
	}
	public fieldNumber(): FieldNumberContext {
		return this.getTypedRuleContext(FieldNumberContext, 0) as FieldNumberContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf3Parser.SEMI, 0);
	}
	public REPEATED(): TerminalNode {
		return this.getToken(Protobuf3Parser.REPEATED, 0);
	}
	public LB(): TerminalNode {
		return this.getToken(Protobuf3Parser.LB, 0);
	}
	public fieldOptions(): FieldOptionsContext {
		return this.getTypedRuleContext(FieldOptionsContext, 0) as FieldOptionsContext;
	}
	public RB(): TerminalNode {
		return this.getToken(Protobuf3Parser.RB, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_field;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterField) {
	 		listener.enterField(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitField) {
	 		listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldOptionsContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(Protobuf3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Protobuf3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_fieldOptions;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterFieldOptions) {
	 		listener.enterFieldOptions(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitFieldOptions) {
	 		listener.exitFieldOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitFieldOptions) {
			return visitor.visitFieldOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldOptionContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public optionName(): OptionNameContext {
		return this.getTypedRuleContext(OptionNameContext, 0) as OptionNameContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(Protobuf3Parser.EQ, 0);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_fieldOption;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterFieldOption) {
	 		listener.enterFieldOption(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitFieldOption) {
	 		listener.exitFieldOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitFieldOption) {
			return visitor.visitFieldOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldNumberContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public intLit(): IntLitContext {
		return this.getTypedRuleContext(IntLitContext, 0) as IntLitContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_fieldNumber;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterFieldNumber) {
	 		listener.enterFieldNumber(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitFieldNumber) {
	 		listener.exitFieldNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitFieldNumber) {
			return visitor.visitFieldNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OneofContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ONEOF(): TerminalNode {
		return this.getToken(Protobuf3Parser.ONEOF, 0);
	}
	public oneofName(): OneofNameContext {
		return this.getTypedRuleContext(OneofNameContext, 0) as OneofNameContext;
	}
	public LC(): TerminalNode {
		return this.getToken(Protobuf3Parser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(Protobuf3Parser.RC, 0);
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
	public emptyStatement_list(): EmptyStatementContext[] {
		return this.getTypedRuleContexts(EmptyStatementContext) as EmptyStatementContext[];
	}
	public emptyStatement(i: number): EmptyStatementContext {
		return this.getTypedRuleContext(EmptyStatementContext, i) as EmptyStatementContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_oneof;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterOneof) {
	 		listener.enterOneof(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitOneof) {
	 		listener.exitOneof(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitOneof) {
			return visitor.visitOneof(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OneofFieldContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getToken(Protobuf3Parser.EQ, 0);
	}
	public fieldNumber(): FieldNumberContext {
		return this.getTypedRuleContext(FieldNumberContext, 0) as FieldNumberContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf3Parser.SEMI, 0);
	}
	public LB(): TerminalNode {
		return this.getToken(Protobuf3Parser.LB, 0);
	}
	public fieldOptions(): FieldOptionsContext {
		return this.getTypedRuleContext(FieldOptionsContext, 0) as FieldOptionsContext;
	}
	public RB(): TerminalNode {
		return this.getToken(Protobuf3Parser.RB, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_oneofField;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterOneofField) {
	 		listener.enterOneofField(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitOneofField) {
	 		listener.exitOneofField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitOneofField) {
			return visitor.visitOneofField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapFieldContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MAP(): TerminalNode {
		return this.getToken(Protobuf3Parser.MAP, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(Protobuf3Parser.LT, 0);
	}
	public keyType(): KeyTypeContext {
		return this.getTypedRuleContext(KeyTypeContext, 0) as KeyTypeContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(Protobuf3Parser.COMMA, 0);
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
	public GT(): TerminalNode {
		return this.getToken(Protobuf3Parser.GT, 0);
	}
	public mapName(): MapNameContext {
		return this.getTypedRuleContext(MapNameContext, 0) as MapNameContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(Protobuf3Parser.EQ, 0);
	}
	public fieldNumber(): FieldNumberContext {
		return this.getTypedRuleContext(FieldNumberContext, 0) as FieldNumberContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf3Parser.SEMI, 0);
	}
	public LB(): TerminalNode {
		return this.getToken(Protobuf3Parser.LB, 0);
	}
	public fieldOptions(): FieldOptionsContext {
		return this.getTypedRuleContext(FieldOptionsContext, 0) as FieldOptionsContext;
	}
	public RB(): TerminalNode {
		return this.getToken(Protobuf3Parser.RB, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_mapField;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterMapField) {
	 		listener.enterMapField(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitMapField) {
	 		listener.exitMapField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitMapField) {
			return visitor.visitMapField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyTypeContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT32(): TerminalNode {
		return this.getToken(Protobuf3Parser.INT32, 0);
	}
	public INT64(): TerminalNode {
		return this.getToken(Protobuf3Parser.INT64, 0);
	}
	public UINT32(): TerminalNode {
		return this.getToken(Protobuf3Parser.UINT32, 0);
	}
	public UINT64(): TerminalNode {
		return this.getToken(Protobuf3Parser.UINT64, 0);
	}
	public SINT32(): TerminalNode {
		return this.getToken(Protobuf3Parser.SINT32, 0);
	}
	public SINT64(): TerminalNode {
		return this.getToken(Protobuf3Parser.SINT64, 0);
	}
	public FIXED32(): TerminalNode {
		return this.getToken(Protobuf3Parser.FIXED32, 0);
	}
	public FIXED64(): TerminalNode {
		return this.getToken(Protobuf3Parser.FIXED64, 0);
	}
	public SFIXED32(): TerminalNode {
		return this.getToken(Protobuf3Parser.SFIXED32, 0);
	}
	public SFIXED64(): TerminalNode {
		return this.getToken(Protobuf3Parser.SFIXED64, 0);
	}
	public BOOL(): TerminalNode {
		return this.getToken(Protobuf3Parser.BOOL, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(Protobuf3Parser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_keyType;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterKeyType) {
	 		listener.enterKeyType(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitKeyType) {
	 		listener.exitKeyType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitKeyType) {
			return visitor.visitKeyType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(Protobuf3Parser.DOUBLE, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(Protobuf3Parser.FLOAT, 0);
	}
	public INT32(): TerminalNode {
		return this.getToken(Protobuf3Parser.INT32, 0);
	}
	public INT64(): TerminalNode {
		return this.getToken(Protobuf3Parser.INT64, 0);
	}
	public UINT32(): TerminalNode {
		return this.getToken(Protobuf3Parser.UINT32, 0);
	}
	public UINT64(): TerminalNode {
		return this.getToken(Protobuf3Parser.UINT64, 0);
	}
	public SINT32(): TerminalNode {
		return this.getToken(Protobuf3Parser.SINT32, 0);
	}
	public SINT64(): TerminalNode {
		return this.getToken(Protobuf3Parser.SINT64, 0);
	}
	public FIXED32(): TerminalNode {
		return this.getToken(Protobuf3Parser.FIXED32, 0);
	}
	public FIXED64(): TerminalNode {
		return this.getToken(Protobuf3Parser.FIXED64, 0);
	}
	public SFIXED32(): TerminalNode {
		return this.getToken(Protobuf3Parser.SFIXED32, 0);
	}
	public SFIXED64(): TerminalNode {
		return this.getToken(Protobuf3Parser.SFIXED64, 0);
	}
	public BOOL(): TerminalNode {
		return this.getToken(Protobuf3Parser.BOOL, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(Protobuf3Parser.STRING, 0);
	}
	public BYTES(): TerminalNode {
		return this.getToken(Protobuf3Parser.BYTES, 0);
	}
	public messageType(): MessageTypeContext {
		return this.getTypedRuleContext(MessageTypeContext, 0) as MessageTypeContext;
	}
	public enumType(): EnumTypeContext {
		return this.getTypedRuleContext(EnumTypeContext, 0) as EnumTypeContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_type_;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterType_) {
	 		listener.enterType_(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitType_) {
	 		listener.exitType_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitType_) {
			return visitor.visitType_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RESERVED(): TerminalNode {
		return this.getToken(Protobuf3Parser.RESERVED, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf3Parser.SEMI, 0);
	}
	public ranges(): RangesContext {
		return this.getTypedRuleContext(RangesContext, 0) as RangesContext;
	}
	public reservedFieldNames(): ReservedFieldNamesContext {
		return this.getTypedRuleContext(ReservedFieldNamesContext, 0) as ReservedFieldNamesContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_reserved;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterReserved) {
	 		listener.enterReserved(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitReserved) {
	 		listener.exitReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitReserved) {
			return visitor.visitReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangesContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(Protobuf3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Protobuf3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_ranges;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterRanges) {
	 		listener.enterRanges(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitRanges) {
	 		listener.exitRanges(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitRanges) {
			return visitor.visitRanges(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Range_Context extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getToken(Protobuf3Parser.TO, 0);
	}
	public MAX(): TerminalNode {
		return this.getToken(Protobuf3Parser.MAX, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_range_;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterRange_) {
	 		listener.enterRange_(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitRange_) {
	 		listener.exitRange_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitRange_) {
			return visitor.visitRange_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedFieldNamesContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(Protobuf3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Protobuf3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_reservedFieldNames;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterReservedFieldNames) {
	 		listener.enterReservedFieldNames(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitReservedFieldNames) {
	 		listener.exitReservedFieldNames(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitReservedFieldNames) {
			return visitor.visitReservedFieldNames(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopLevelDefContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
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
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_topLevelDef;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterTopLevelDef) {
	 		listener.enterTopLevelDef(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitTopLevelDef) {
	 		listener.exitTopLevelDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitTopLevelDef) {
			return visitor.visitTopLevelDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUM(): TerminalNode {
		return this.getToken(Protobuf3Parser.ENUM, 0);
	}
	public enumName(): EnumNameContext {
		return this.getTypedRuleContext(EnumNameContext, 0) as EnumNameContext;
	}
	public enumBody(): EnumBodyContext {
		return this.getTypedRuleContext(EnumBodyContext, 0) as EnumBodyContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_enumDef;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterEnumDef) {
	 		listener.enterEnumDef(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitEnumDef) {
	 		listener.exitEnumDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEnumDef) {
			return visitor.visitEnumDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LC(): TerminalNode {
		return this.getToken(Protobuf3Parser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(Protobuf3Parser.RC, 0);
	}
	public enumElement_list(): EnumElementContext[] {
		return this.getTypedRuleContexts(EnumElementContext) as EnumElementContext[];
	}
	public enumElement(i: number): EnumElementContext {
		return this.getTypedRuleContext(EnumElementContext, i) as EnumElementContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_enumBody;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterEnumBody) {
	 		listener.enterEnumBody(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitEnumBody) {
	 		listener.exitEnumBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEnumBody) {
			return visitor.visitEnumBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumElementContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public optionStatement(): OptionStatementContext {
		return this.getTypedRuleContext(OptionStatementContext, 0) as OptionStatementContext;
	}
	public enumField(): EnumFieldContext {
		return this.getTypedRuleContext(EnumFieldContext, 0) as EnumFieldContext;
	}
	public emptyStatement(): EmptyStatementContext {
		return this.getTypedRuleContext(EmptyStatementContext, 0) as EmptyStatementContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_enumElement;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterEnumElement) {
	 		listener.enterEnumElement(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitEnumElement) {
	 		listener.exitEnumElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEnumElement) {
			return visitor.visitEnumElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumFieldContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(Protobuf3Parser.EQ, 0);
	}
	public intLit(): IntLitContext {
		return this.getTypedRuleContext(IntLitContext, 0) as IntLitContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf3Parser.SEMI, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(Protobuf3Parser.MINUS, 0);
	}
	public enumValueOptions(): EnumValueOptionsContext {
		return this.getTypedRuleContext(EnumValueOptionsContext, 0) as EnumValueOptionsContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_enumField;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterEnumField) {
	 		listener.enterEnumField(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitEnumField) {
	 		listener.exitEnumField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEnumField) {
			return visitor.visitEnumField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValueOptionsContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LB(): TerminalNode {
		return this.getToken(Protobuf3Parser.LB, 0);
	}
	public enumValueOption_list(): EnumValueOptionContext[] {
		return this.getTypedRuleContexts(EnumValueOptionContext) as EnumValueOptionContext[];
	}
	public enumValueOption(i: number): EnumValueOptionContext {
		return this.getTypedRuleContext(EnumValueOptionContext, i) as EnumValueOptionContext;
	}
	public RB(): TerminalNode {
		return this.getToken(Protobuf3Parser.RB, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Protobuf3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_enumValueOptions;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterEnumValueOptions) {
	 		listener.enterEnumValueOptions(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitEnumValueOptions) {
	 		listener.exitEnumValueOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEnumValueOptions) {
			return visitor.visitEnumValueOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValueOptionContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public optionName(): OptionNameContext {
		return this.getTypedRuleContext(OptionNameContext, 0) as OptionNameContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(Protobuf3Parser.EQ, 0);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_enumValueOption;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterEnumValueOption) {
	 		listener.enterEnumValueOption(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitEnumValueOption) {
	 		listener.exitEnumValueOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEnumValueOption) {
			return visitor.visitEnumValueOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageDefContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MESSAGE(): TerminalNode {
		return this.getToken(Protobuf3Parser.MESSAGE, 0);
	}
	public messageName(): MessageNameContext {
		return this.getTypedRuleContext(MessageNameContext, 0) as MessageNameContext;
	}
	public messageBody(): MessageBodyContext {
		return this.getTypedRuleContext(MessageBodyContext, 0) as MessageBodyContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_messageDef;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterMessageDef) {
	 		listener.enterMessageDef(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitMessageDef) {
	 		listener.exitMessageDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitMessageDef) {
			return visitor.visitMessageDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageBodyContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LC(): TerminalNode {
		return this.getToken(Protobuf3Parser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(Protobuf3Parser.RC, 0);
	}
	public messageElement_list(): MessageElementContext[] {
		return this.getTypedRuleContexts(MessageElementContext) as MessageElementContext[];
	}
	public messageElement(i: number): MessageElementContext {
		return this.getTypedRuleContext(MessageElementContext, i) as MessageElementContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_messageBody;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterMessageBody) {
	 		listener.enterMessageBody(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitMessageBody) {
	 		listener.exitMessageBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitMessageBody) {
			return visitor.visitMessageBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageElementContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
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
	public optionStatement(): OptionStatementContext {
		return this.getTypedRuleContext(OptionStatementContext, 0) as OptionStatementContext;
	}
	public oneof(): OneofContext {
		return this.getTypedRuleContext(OneofContext, 0) as OneofContext;
	}
	public mapField(): MapFieldContext {
		return this.getTypedRuleContext(MapFieldContext, 0) as MapFieldContext;
	}
	public reserved(): ReservedContext {
		return this.getTypedRuleContext(ReservedContext, 0) as ReservedContext;
	}
	public emptyStatement(): EmptyStatementContext {
		return this.getTypedRuleContext(EmptyStatementContext, 0) as EmptyStatementContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_messageElement;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterMessageElement) {
	 		listener.enterMessageElement(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitMessageElement) {
	 		listener.exitMessageElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitMessageElement) {
			return visitor.visitMessageElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ServiceDefContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SERVICE(): TerminalNode {
		return this.getToken(Protobuf3Parser.SERVICE, 0);
	}
	public serviceName(): ServiceNameContext {
		return this.getTypedRuleContext(ServiceNameContext, 0) as ServiceNameContext;
	}
	public LC(): TerminalNode {
		return this.getToken(Protobuf3Parser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(Protobuf3Parser.RC, 0);
	}
	public serviceElement_list(): ServiceElementContext[] {
		return this.getTypedRuleContexts(ServiceElementContext) as ServiceElementContext[];
	}
	public serviceElement(i: number): ServiceElementContext {
		return this.getTypedRuleContext(ServiceElementContext, i) as ServiceElementContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_serviceDef;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterServiceDef) {
	 		listener.enterServiceDef(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitServiceDef) {
	 		listener.exitServiceDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitServiceDef) {
			return visitor.visitServiceDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ServiceElementContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public optionStatement(): OptionStatementContext {
		return this.getTypedRuleContext(OptionStatementContext, 0) as OptionStatementContext;
	}
	public rpc(): RpcContext {
		return this.getTypedRuleContext(RpcContext, 0) as RpcContext;
	}
	public emptyStatement(): EmptyStatementContext {
		return this.getTypedRuleContext(EmptyStatementContext, 0) as EmptyStatementContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_serviceElement;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterServiceElement) {
	 		listener.enterServiceElement(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitServiceElement) {
	 		listener.exitServiceElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitServiceElement) {
			return visitor.visitServiceElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RpcContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RPC(): TerminalNode {
		return this.getToken(Protobuf3Parser.RPC, 0);
	}
	public rpcName(): RpcNameContext {
		return this.getTypedRuleContext(RpcNameContext, 0) as RpcNameContext;
	}
	public LP_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf3Parser.LP);
	}
	public LP(i: number): TerminalNode {
		return this.getToken(Protobuf3Parser.LP, i);
	}
	public messageType_list(): MessageTypeContext[] {
		return this.getTypedRuleContexts(MessageTypeContext) as MessageTypeContext[];
	}
	public messageType(i: number): MessageTypeContext {
		return this.getTypedRuleContext(MessageTypeContext, i) as MessageTypeContext;
	}
	public RP_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf3Parser.RP);
	}
	public RP(i: number): TerminalNode {
		return this.getToken(Protobuf3Parser.RP, i);
	}
	public RETURNS(): TerminalNode {
		return this.getToken(Protobuf3Parser.RETURNS, 0);
	}
	public LC(): TerminalNode {
		return this.getToken(Protobuf3Parser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(Protobuf3Parser.RC, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf3Parser.SEMI, 0);
	}
	public STREAM_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf3Parser.STREAM);
	}
	public STREAM(i: number): TerminalNode {
		return this.getToken(Protobuf3Parser.STREAM, i);
	}
	public optionStatement_list(): OptionStatementContext[] {
		return this.getTypedRuleContexts(OptionStatementContext) as OptionStatementContext[];
	}
	public optionStatement(i: number): OptionStatementContext {
		return this.getTypedRuleContext(OptionStatementContext, i) as OptionStatementContext;
	}
	public emptyStatement_list(): EmptyStatementContext[] {
		return this.getTypedRuleContexts(EmptyStatementContext) as EmptyStatementContext[];
	}
	public emptyStatement(i: number): EmptyStatementContext {
		return this.getTypedRuleContext(EmptyStatementContext, i) as EmptyStatementContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_rpc;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterRpc) {
	 		listener.enterRpc(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitRpc) {
	 		listener.exitRpc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitRpc) {
			return visitor.visitRpc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public intLit(): IntLitContext {
		return this.getTypedRuleContext(IntLitContext, 0) as IntLitContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(Protobuf3Parser.MINUS, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(Protobuf3Parser.PLUS, 0);
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
	public fullIdent(): FullIdentContext {
		return this.getTypedRuleContext(FullIdentContext, 0) as FullIdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_constant;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterConstant) {
	 		listener.enterConstant(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitConstant) {
	 		listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockLitContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LC(): TerminalNode {
		return this.getToken(Protobuf3Parser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(Protobuf3Parser.RC, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf3Parser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(Protobuf3Parser.COLON, i);
	}
	public constant_list(): ConstantContext[] {
		return this.getTypedRuleContexts(ConstantContext) as ConstantContext[];
	}
	public constant(i: number): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, i) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_blockLit;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterBlockLit) {
	 		listener.enterBlockLit(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitBlockLit) {
	 		listener.exitBlockLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitBlockLit) {
			return visitor.visitBlockLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf3Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_emptyStatement;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterEmptyStatement) {
	 		listener.enterEmptyStatement(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitEmptyStatement) {
	 		listener.exitEmptyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(Protobuf3Parser.IDENTIFIER, 0);
	}
	public keywords(): KeywordsContext {
		return this.getTypedRuleContext(KeywordsContext, 0) as KeywordsContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_ident;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterIdent) {
	 		listener.enterIdent(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitIdent) {
	 		listener.exitIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitIdent) {
			return visitor.visitIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FullIdentContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(Protobuf3Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Protobuf3Parser.DOT, i);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_fullIdent;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterFullIdent) {
	 		listener.enterFullIdent(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitFullIdent) {
	 		listener.exitFullIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitFullIdent) {
			return visitor.visitFullIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_messageName;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterMessageName) {
	 		listener.enterMessageName(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitMessageName) {
	 		listener.exitMessageName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitMessageName) {
			return visitor.visitMessageName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_enumName;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterEnumName) {
	 		listener.enterEnumName(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitEnumName) {
	 		listener.exitEnumName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEnumName) {
			return visitor.visitEnumName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_fieldName;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterFieldName) {
	 		listener.enterFieldName(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitFieldName) {
	 		listener.exitFieldName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitFieldName) {
			return visitor.visitFieldName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OneofNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_oneofName;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterOneofName) {
	 		listener.enterOneofName(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitOneofName) {
	 		listener.exitOneofName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitOneofName) {
			return visitor.visitOneofName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_mapName;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterMapName) {
	 		listener.enterMapName(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitMapName) {
	 		listener.exitMapName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitMapName) {
			return visitor.visitMapName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ServiceNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_serviceName;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterServiceName) {
	 		listener.enterServiceName(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitServiceName) {
	 		listener.exitServiceName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitServiceName) {
			return visitor.visitServiceName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RpcNameContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_rpcName;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterRpcName) {
	 		listener.enterRpcName(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitRpcName) {
	 		listener.exitRpcName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitRpcName) {
			return visitor.visitRpcName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageTypeContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public messageName(): MessageNameContext {
		return this.getTypedRuleContext(MessageNameContext, 0) as MessageNameContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf3Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Protobuf3Parser.DOT, i);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_messageType;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterMessageType) {
	 		listener.enterMessageType(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitMessageType) {
	 		listener.exitMessageType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitMessageType) {
			return visitor.visitMessageType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumTypeContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumName(): EnumNameContext {
		return this.getTypedRuleContext(EnumNameContext, 0) as EnumNameContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Protobuf3Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Protobuf3Parser.DOT, i);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_enumType;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterEnumType) {
	 		listener.enterEnumType(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitEnumType) {
	 		listener.exitEnumType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEnumType) {
			return visitor.visitEnumType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntLitContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT_LIT(): TerminalNode {
		return this.getToken(Protobuf3Parser.INT_LIT, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_intLit;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterIntLit) {
	 		listener.enterIntLit(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitIntLit) {
	 		listener.exitIntLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitIntLit) {
			return visitor.visitIntLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrLitContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STR_LIT(): TerminalNode {
		return this.getToken(Protobuf3Parser.STR_LIT, 0);
	}
	public PROTO3_LIT_SINGLE(): TerminalNode {
		return this.getToken(Protobuf3Parser.PROTO3_LIT_SINGLE, 0);
	}
	public PROTO3_LIT_DOBULE(): TerminalNode {
		return this.getToken(Protobuf3Parser.PROTO3_LIT_DOBULE, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_strLit;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterStrLit) {
	 		listener.enterStrLit(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitStrLit) {
	 		listener.exitStrLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitStrLit) {
			return visitor.visitStrLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolLitContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOOL_LIT(): TerminalNode {
		return this.getToken(Protobuf3Parser.BOOL_LIT, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_boolLit;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterBoolLit) {
	 		listener.enterBoolLit(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitBoolLit) {
	 		listener.exitBoolLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitBoolLit) {
			return visitor.visitBoolLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatLitContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FLOAT_LIT(): TerminalNode {
		return this.getToken(Protobuf3Parser.FLOAT_LIT, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_floatLit;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterFloatLit) {
	 		listener.enterFloatLit(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitFloatLit) {
	 		listener.exitFloatLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitFloatLit) {
			return visitor.visitFloatLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordsContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYNTAX(): TerminalNode {
		return this.getToken(Protobuf3Parser.SYNTAX, 0);
	}
	public IMPORT(): TerminalNode {
		return this.getToken(Protobuf3Parser.IMPORT, 0);
	}
	public WEAK(): TerminalNode {
		return this.getToken(Protobuf3Parser.WEAK, 0);
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Protobuf3Parser.PUBLIC, 0);
	}
	public PACKAGE(): TerminalNode {
		return this.getToken(Protobuf3Parser.PACKAGE, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(Protobuf3Parser.OPTION, 0);
	}
	public REPEATED(): TerminalNode {
		return this.getToken(Protobuf3Parser.REPEATED, 0);
	}
	public ONEOF(): TerminalNode {
		return this.getToken(Protobuf3Parser.ONEOF, 0);
	}
	public MAP(): TerminalNode {
		return this.getToken(Protobuf3Parser.MAP, 0);
	}
	public INT32(): TerminalNode {
		return this.getToken(Protobuf3Parser.INT32, 0);
	}
	public INT64(): TerminalNode {
		return this.getToken(Protobuf3Parser.INT64, 0);
	}
	public UINT32(): TerminalNode {
		return this.getToken(Protobuf3Parser.UINT32, 0);
	}
	public UINT64(): TerminalNode {
		return this.getToken(Protobuf3Parser.UINT64, 0);
	}
	public SINT32(): TerminalNode {
		return this.getToken(Protobuf3Parser.SINT32, 0);
	}
	public SINT64(): TerminalNode {
		return this.getToken(Protobuf3Parser.SINT64, 0);
	}
	public FIXED32(): TerminalNode {
		return this.getToken(Protobuf3Parser.FIXED32, 0);
	}
	public FIXED64(): TerminalNode {
		return this.getToken(Protobuf3Parser.FIXED64, 0);
	}
	public SFIXED32(): TerminalNode {
		return this.getToken(Protobuf3Parser.SFIXED32, 0);
	}
	public SFIXED64(): TerminalNode {
		return this.getToken(Protobuf3Parser.SFIXED64, 0);
	}
	public BOOL(): TerminalNode {
		return this.getToken(Protobuf3Parser.BOOL, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(Protobuf3Parser.STRING, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(Protobuf3Parser.DOUBLE, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(Protobuf3Parser.FLOAT, 0);
	}
	public BYTES(): TerminalNode {
		return this.getToken(Protobuf3Parser.BYTES, 0);
	}
	public RESERVED(): TerminalNode {
		return this.getToken(Protobuf3Parser.RESERVED, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(Protobuf3Parser.TO, 0);
	}
	public MAX(): TerminalNode {
		return this.getToken(Protobuf3Parser.MAX, 0);
	}
	public ENUM(): TerminalNode {
		return this.getToken(Protobuf3Parser.ENUM, 0);
	}
	public MESSAGE(): TerminalNode {
		return this.getToken(Protobuf3Parser.MESSAGE, 0);
	}
	public SERVICE(): TerminalNode {
		return this.getToken(Protobuf3Parser.SERVICE, 0);
	}
	public RPC(): TerminalNode {
		return this.getToken(Protobuf3Parser.RPC, 0);
	}
	public STREAM(): TerminalNode {
		return this.getToken(Protobuf3Parser.STREAM, 0);
	}
	public RETURNS(): TerminalNode {
		return this.getToken(Protobuf3Parser.RETURNS, 0);
	}
	public BOOL_LIT(): TerminalNode {
		return this.getToken(Protobuf3Parser.BOOL_LIT, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_keywords;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterKeywords) {
	 		listener.enterKeywords(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitKeywords) {
	 		listener.exitKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitKeywords) {
			return visitor.visitKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
