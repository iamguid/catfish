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
	public static readonly OPTIONAL = 7;
	public static readonly REPEATED = 8;
	public static readonly ONEOF = 9;
	public static readonly MAP = 10;
	public static readonly INT32 = 11;
	public static readonly INT64 = 12;
	public static readonly UINT32 = 13;
	public static readonly UINT64 = 14;
	public static readonly SINT32 = 15;
	public static readonly SINT64 = 16;
	public static readonly FIXED32 = 17;
	public static readonly FIXED64 = 18;
	public static readonly SFIXED32 = 19;
	public static readonly SFIXED64 = 20;
	public static readonly BOOL = 21;
	public static readonly STRING = 22;
	public static readonly DOUBLE = 23;
	public static readonly FLOAT = 24;
	public static readonly BYTES = 25;
	public static readonly RESERVED = 26;
	public static readonly TO = 27;
	public static readonly MAX = 28;
	public static readonly ENUM = 29;
	public static readonly MESSAGE = 30;
	public static readonly SERVICE = 31;
	public static readonly EXTEND = 32;
	public static readonly RPC = 33;
	public static readonly STREAM = 34;
	public static readonly RETURNS = 35;
	public static readonly PROTO3_LIT_SINGLE = 36;
	public static readonly PROTO3_LIT_DOBULE = 37;
	public static readonly SEMI = 38;
	public static readonly EQ = 39;
	public static readonly LP = 40;
	public static readonly RP = 41;
	public static readonly LB = 42;
	public static readonly RB = 43;
	public static readonly LC = 44;
	public static readonly RC = 45;
	public static readonly LT = 46;
	public static readonly GT = 47;
	public static readonly DOT = 48;
	public static readonly COMMA = 49;
	public static readonly COLON = 50;
	public static readonly PLUS = 51;
	public static readonly MINUS = 52;
	public static readonly STR_LIT = 53;
	public static readonly BOOL_LIT = 54;
	public static readonly FLOAT_LIT = 55;
	public static readonly INT_LIT = 56;
	public static readonly IDENTIFIER = 57;
	public static readonly WS = 58;
	public static readonly LINE_COMMENT = 59;
	public static readonly COMMENT = 60;
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
	public static readonly RULE_oneof = 11;
	public static readonly RULE_oneofField = 12;
	public static readonly RULE_mapField = 13;
	public static readonly RULE_keyType = 14;
	public static readonly RULE_type_ = 15;
	public static readonly RULE_reserved = 16;
	public static readonly RULE_ranges = 17;
	public static readonly RULE_range_ = 18;
	public static readonly RULE_reservedFieldNames = 19;
	public static readonly RULE_topLevelDef = 20;
	public static readonly RULE_enumDef = 21;
	public static readonly RULE_enumBody = 22;
	public static readonly RULE_enumElement = 23;
	public static readonly RULE_enumField = 24;
	public static readonly RULE_enumValueOptions = 25;
	public static readonly RULE_enumValueOption = 26;
	public static readonly RULE_messageDef = 27;
	public static readonly RULE_messageBody = 28;
	public static readonly RULE_messageElement = 29;
	public static readonly RULE_extendDef = 30;
	public static readonly RULE_serviceDef = 31;
	public static readonly RULE_serviceElement = 32;
	public static readonly RULE_rpc = 33;
	public static readonly RULE_constant = 34;
	public static readonly RULE_blockLit = 35;
	public static readonly RULE_emptyStatement_ = 36;
	public static readonly RULE_ident = 37;
	public static readonly RULE_fullIdent = 38;
	public static readonly RULE_messageName = 39;
	public static readonly RULE_enumName = 40;
	public static readonly RULE_fieldName = 41;
	public static readonly RULE_oneofName = 42;
	public static readonly RULE_mapName = 43;
	public static readonly RULE_serviceName = 44;
	public static readonly RULE_rpcName = 45;
	public static readonly RULE_messageType = 46;
	public static readonly RULE_enumType = 47;
	public static readonly RULE_intLit = 48;
	public static readonly RULE_strLit = 49;
	public static readonly RULE_boolLit = 50;
	public static readonly RULE_floatLit = 51;
	public static readonly RULE_keywords = 52;
	public static readonly literalNames: (string | null)[] = [ null, "'syntax'", 
                                                            "'import'", 
                                                            "'weak'", "'public'", 
                                                            "'package'", 
                                                            "'option'", 
                                                            "'optional'", 
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
                                                            "'extend'", 
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
                                                             "OPTION", "OPTIONAL", 
                                                             "REPEATED", 
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
                                                             "EXTEND", "RPC", 
                                                             "STREAM", "RETURNS", 
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
		"optionName", "fieldLabel", "field", "fieldOptions", "fieldOption", "fieldNumber", 
		"oneof", "oneofField", "mapField", "keyType", "type_", "reserved", "ranges", 
		"range_", "reservedFieldNames", "topLevelDef", "enumDef", "enumBody", 
		"enumElement", "enumField", "enumValueOptions", "enumValueOption", "messageDef", 
		"messageBody", "messageElement", "extendDef", "serviceDef", "serviceElement", 
		"rpc", "constant", "blockLit", "emptyStatement_", "ident", "fullIdent", 
		"messageName", "enumName", "fieldName", "oneofName", "mapName", "serviceName", 
		"rpcName", "messageType", "enumType", "intLit", "strLit", "boolLit", "floatLit", 
		"keywords",
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
			this.state = 106;
			this.syntax();
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3758096484) !== 0) || _la===32 || _la===38) {
				{
				this.state = 112;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 2:
					{
					this.state = 107;
					this.importStatement();
					}
					break;
				case 5:
					{
					this.state = 108;
					this.packageStatement();
					}
					break;
				case 6:
					{
					this.state = 109;
					this.optionStatement();
					}
					break;
				case 29:
				case 30:
				case 31:
				case 32:
					{
					this.state = 110;
					this.topLevelDef();
					}
					break;
				case 38:
					{
					this.state = 111;
					this.emptyStatement_();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 117;
			this.match(Protobuf3Parser.EOF);
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
			this.state = 119;
			this.match(Protobuf3Parser.SYNTAX);
			this.state = 120;
			this.match(Protobuf3Parser.EQ);
			this.state = 121;
			_la = this._input.LA(1);
			if(!(_la===36 || _la===37)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 122;
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
			this.state = 124;
			this.match(Protobuf3Parser.IMPORT);
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3 || _la===4) {
				{
				this.state = 125;
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

			this.state = 128;
			this.strLit();
			this.state = 129;
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
			this.state = 131;
			this.match(Protobuf3Parser.PACKAGE);
			this.state = 132;
			this.fullIdent();
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
	public optionStatement(): OptionStatementContext {
		let localctx: OptionStatementContext = new OptionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, Protobuf3Parser.RULE_optionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 135;
			this.match(Protobuf3Parser.OPTION);
			this.state = 136;
			this.optionName();
			this.state = 137;
			this.match(Protobuf3Parser.EQ);
			this.state = 138;
			this.constant();
			this.state = 139;
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
			this.state = 149;
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
			case 54:
			case 57:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 141;
				this.fullIdent();
				}
				break;
			case 40:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 142;
				this.match(Protobuf3Parser.LP);
				this.state = 143;
				this.fullIdent();
				this.state = 144;
				this.match(Protobuf3Parser.RP);
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===48) {
					{
					this.state = 145;
					this.match(Protobuf3Parser.DOT);
					this.state = 146;
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
	public fieldLabel(): FieldLabelContext {
		let localctx: FieldLabelContext = new FieldLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, Protobuf3Parser.RULE_fieldLabel);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 151;
			_la = this._input.LA(1);
			if(!(_la===7 || _la===8)) {
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
		this.enterRule(localctx, 14, Protobuf3Parser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 154;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 153;
				this.fieldLabel();
				}
				break;
			}
			this.state = 156;
			this.type_();
			this.state = 157;
			this.fieldName();
			this.state = 158;
			this.match(Protobuf3Parser.EQ);
			this.state = 159;
			this.fieldNumber();
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 160;
				this.match(Protobuf3Parser.LB);
				this.state = 161;
				this.fieldOptions();
				this.state = 162;
				this.match(Protobuf3Parser.RB);
				}
			}

			this.state = 166;
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
		this.enterRule(localctx, 16, Protobuf3Parser.RULE_fieldOptions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 168;
			this.fieldOption();
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===49) {
				{
				{
				this.state = 169;
				this.match(Protobuf3Parser.COMMA);
				this.state = 170;
				this.fieldOption();
				}
				}
				this.state = 175;
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
		this.enterRule(localctx, 18, Protobuf3Parser.RULE_fieldOption);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 176;
			this.optionName();
			this.state = 177;
			this.match(Protobuf3Parser.EQ);
			this.state = 178;
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
		this.enterRule(localctx, 20, Protobuf3Parser.RULE_fieldNumber);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 180;
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
		this.enterRule(localctx, 22, Protobuf3Parser.RULE_oneof);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 182;
			this.match(Protobuf3Parser.ONEOF);
			this.state = 183;
			this.oneofName();
			this.state = 184;
			this.match(Protobuf3Parser.LC);
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 37814351) !== 0)) {
				{
				this.state = 188;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 185;
					this.optionStatement();
					}
					break;
				case 2:
					{
					this.state = 186;
					this.oneofField();
					}
					break;
				case 3:
					{
					this.state = 187;
					this.emptyStatement_();
					}
					break;
				}
				}
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 193;
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
		this.enterRule(localctx, 24, Protobuf3Parser.RULE_oneofField);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 195;
			this.type_();
			this.state = 196;
			this.fieldName();
			this.state = 197;
			this.match(Protobuf3Parser.EQ);
			this.state = 198;
			this.fieldNumber();
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 199;
				this.match(Protobuf3Parser.LB);
				this.state = 200;
				this.fieldOptions();
				this.state = 201;
				this.match(Protobuf3Parser.RB);
				}
			}

			this.state = 205;
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
		this.enterRule(localctx, 26, Protobuf3Parser.RULE_mapField);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 207;
			this.match(Protobuf3Parser.MAP);
			this.state = 208;
			this.match(Protobuf3Parser.LT);
			this.state = 209;
			this.keyType();
			this.state = 210;
			this.match(Protobuf3Parser.COMMA);
			this.state = 211;
			this.type_();
			this.state = 212;
			this.match(Protobuf3Parser.GT);
			this.state = 213;
			this.mapName();
			this.state = 214;
			this.match(Protobuf3Parser.EQ);
			this.state = 215;
			this.fieldNumber();
			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 216;
				this.match(Protobuf3Parser.LB);
				this.state = 217;
				this.fieldOptions();
				this.state = 218;
				this.match(Protobuf3Parser.RB);
				}
			}

			this.state = 222;
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
		this.enterRule(localctx, 28, Protobuf3Parser.RULE_keyType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 224;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 8386560) !== 0))) {
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
		this.enterRule(localctx, 30, Protobuf3Parser.RULE_type_);
		try {
			this.state = 243;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 226;
				this.match(Protobuf3Parser.DOUBLE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 227;
				this.match(Protobuf3Parser.FLOAT);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 228;
				this.match(Protobuf3Parser.INT32);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 229;
				this.match(Protobuf3Parser.INT64);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 230;
				this.match(Protobuf3Parser.UINT32);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 231;
				this.match(Protobuf3Parser.UINT64);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 232;
				this.match(Protobuf3Parser.SINT32);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 233;
				this.match(Protobuf3Parser.SINT64);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 234;
				this.match(Protobuf3Parser.FIXED32);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 235;
				this.match(Protobuf3Parser.FIXED64);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 236;
				this.match(Protobuf3Parser.SFIXED32);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 237;
				this.match(Protobuf3Parser.SFIXED64);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 238;
				this.match(Protobuf3Parser.BOOL);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 239;
				this.match(Protobuf3Parser.STRING);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 240;
				this.match(Protobuf3Parser.BYTES);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 241;
				this.messageType();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 242;
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
		this.enterRule(localctx, 32, Protobuf3Parser.RULE_reserved);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 245;
			this.match(Protobuf3Parser.RESERVED);
			this.state = 248;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 56:
				{
				this.state = 246;
				this.ranges();
				}
				break;
			case 36:
			case 37:
			case 53:
				{
				this.state = 247;
				this.reservedFieldNames();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 250;
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
		this.enterRule(localctx, 34, Protobuf3Parser.RULE_ranges);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 252;
			this.range_();
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===49) {
				{
				{
				this.state = 253;
				this.match(Protobuf3Parser.COMMA);
				this.state = 254;
				this.range_();
				}
				}
				this.state = 259;
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
		this.enterRule(localctx, 36, Protobuf3Parser.RULE_range_);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 260;
			this.intLit();
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===27) {
				{
				this.state = 261;
				this.match(Protobuf3Parser.TO);
				this.state = 264;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 56:
					{
					this.state = 262;
					this.intLit();
					}
					break;
				case 28:
					{
					this.state = 263;
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
		this.enterRule(localctx, 38, Protobuf3Parser.RULE_reservedFieldNames);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 268;
			this.strLit();
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===49) {
				{
				{
				this.state = 269;
				this.match(Protobuf3Parser.COMMA);
				this.state = 270;
				this.strLit();
				}
				}
				this.state = 275;
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
		this.enterRule(localctx, 40, Protobuf3Parser.RULE_topLevelDef);
		try {
			this.state = 280;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 276;
				this.messageDef();
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 277;
				this.enumDef();
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 278;
				this.extendDef();
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 279;
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
		this.enterRule(localctx, 42, Protobuf3Parser.RULE_enumDef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 282;
			this.match(Protobuf3Parser.ENUM);
			this.state = 283;
			this.enumName();
			this.state = 284;
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
		this.enterRule(localctx, 44, Protobuf3Parser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 286;
			this.match(Protobuf3Parser.LC);
			this.state = 290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 37748815) !== 0)) {
				{
				{
				this.state = 287;
				this.enumElement();
				}
				}
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 293;
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
		this.enterRule(localctx, 46, Protobuf3Parser.RULE_enumElement);
		try {
			this.state = 298;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 295;
				this.optionStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 296;
				this.enumField();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 297;
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
		this.enterRule(localctx, 48, Protobuf3Parser.RULE_enumField);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 300;
			this.ident();
			this.state = 301;
			this.match(Protobuf3Parser.EQ);
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 302;
				this.match(Protobuf3Parser.MINUS);
				}
			}

			this.state = 305;
			this.intLit();
			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 306;
				this.enumValueOptions();
				}
			}

			this.state = 309;
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
		this.enterRule(localctx, 50, Protobuf3Parser.RULE_enumValueOptions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 311;
			this.match(Protobuf3Parser.LB);
			this.state = 312;
			this.enumValueOption();
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===49) {
				{
				{
				this.state = 313;
				this.match(Protobuf3Parser.COMMA);
				this.state = 314;
				this.enumValueOption();
				}
				}
				this.state = 319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 320;
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
		this.enterRule(localctx, 52, Protobuf3Parser.RULE_enumValueOption);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 322;
			this.optionName();
			this.state = 323;
			this.match(Protobuf3Parser.EQ);
			this.state = 324;
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
		this.enterRule(localctx, 54, Protobuf3Parser.RULE_messageDef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 326;
			this.match(Protobuf3Parser.MESSAGE);
			this.state = 327;
			this.messageName();
			this.state = 328;
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
		this.enterRule(localctx, 56, Protobuf3Parser.RULE_messageBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 330;
			this.match(Protobuf3Parser.LC);
			this.state = 334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 37814351) !== 0)) {
				{
				{
				this.state = 331;
				this.messageElement();
				}
				}
				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 337;
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
		this.enterRule(localctx, 58, Protobuf3Parser.RULE_messageElement);
		try {
			this.state = 348;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 339;
				this.field();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 340;
				this.enumDef();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 341;
				this.messageDef();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 342;
				this.extendDef();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 343;
				this.optionStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 344;
				this.oneof();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 345;
				this.mapField();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 346;
				this.reserved();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 347;
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
		this.enterRule(localctx, 60, Protobuf3Parser.RULE_extendDef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 350;
			this.match(Protobuf3Parser.EXTEND);
			this.state = 351;
			this.messageType();
			this.state = 352;
			this.match(Protobuf3Parser.LC);
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 37814351) !== 0)) {
				{
				this.state = 355;
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
				case 48:
				case 54:
				case 57:
					{
					this.state = 353;
					this.field();
					}
					break;
				case 38:
					{
					this.state = 354;
					this.emptyStatement_();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 360;
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
	public serviceDef(): ServiceDefContext {
		let localctx: ServiceDefContext = new ServiceDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, Protobuf3Parser.RULE_serviceDef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 362;
			this.match(Protobuf3Parser.SERVICE);
			this.state = 363;
			this.serviceName();
			this.state = 364;
			this.match(Protobuf3Parser.LC);
			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6 || _la===33 || _la===38) {
				{
				{
				this.state = 365;
				this.serviceElement();
				}
				}
				this.state = 370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 371;
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
		this.enterRule(localctx, 64, Protobuf3Parser.RULE_serviceElement);
		try {
			this.state = 376;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 373;
				this.optionStatement();
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 374;
				this.rpc();
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 375;
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
		this.enterRule(localctx, 66, Protobuf3Parser.RULE_rpc);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 378;
			this.match(Protobuf3Parser.RPC);
			this.state = 379;
			this.rpcName();
			this.state = 380;
			this.match(Protobuf3Parser.LP);
			this.state = 382;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 381;
				this.match(Protobuf3Parser.STREAM);
				}
				break;
			}
			this.state = 384;
			this.messageType();
			this.state = 385;
			this.match(Protobuf3Parser.RP);
			this.state = 386;
			this.match(Protobuf3Parser.RETURNS);
			this.state = 387;
			this.match(Protobuf3Parser.LP);
			this.state = 389;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 388;
				this.match(Protobuf3Parser.STREAM);
				}
				break;
			}
			this.state = 391;
			this.messageType();
			this.state = 392;
			this.match(Protobuf3Parser.RP);
			this.state = 403;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 44:
				{
				this.state = 393;
				this.match(Protobuf3Parser.LC);
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===6 || _la===38) {
					{
					this.state = 396;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 6:
						{
						this.state = 394;
						this.optionStatement();
						}
						break;
					case 38:
						{
						this.state = 395;
						this.emptyStatement_();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 400;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 401;
				this.match(Protobuf3Parser.RC);
				}
				break;
			case 38:
				{
				this.state = 402;
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
		this.enterRule(localctx, 68, Protobuf3Parser.RULE_constant);
		let _la: number;
		try {
			this.state = 417;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 405;
				this.fullIdent();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===51 || _la===52) {
					{
					this.state = 406;
					_la = this._input.LA(1);
					if(!(_la===51 || _la===52)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 409;
				this.intLit();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 411;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===51 || _la===52) {
					{
					this.state = 410;
					_la = this._input.LA(1);
					if(!(_la===51 || _la===52)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 413;
				this.floatLit();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 414;
				this.strLit();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 415;
				this.boolLit();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 416;
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
		this.enterRule(localctx, 70, Protobuf3Parser.RULE_blockLit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 419;
			this.match(Protobuf3Parser.LC);
			this.state = 426;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 37748751) !== 0)) {
				{
				{
				this.state = 420;
				this.ident();
				this.state = 421;
				this.match(Protobuf3Parser.COLON);
				this.state = 422;
				this.constant();
				}
				}
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 429;
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
	public emptyStatement_(): EmptyStatement_Context {
		let localctx: EmptyStatement_Context = new EmptyStatement_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 72, Protobuf3Parser.RULE_emptyStatement_);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 431;
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
		this.enterRule(localctx, 74, Protobuf3Parser.RULE_ident);
		try {
			this.state = 435;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 57:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 433;
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
			case 34:
			case 35:
			case 54:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 434;
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
		this.enterRule(localctx, 76, Protobuf3Parser.RULE_fullIdent);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 437;
			this.ident();
			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===48) {
				{
				{
				this.state = 438;
				this.match(Protobuf3Parser.DOT);
				this.state = 439;
				this.ident();
				}
				}
				this.state = 444;
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
		this.enterRule(localctx, 78, Protobuf3Parser.RULE_messageName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 445;
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
		this.enterRule(localctx, 80, Protobuf3Parser.RULE_enumName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 447;
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
		this.enterRule(localctx, 82, Protobuf3Parser.RULE_fieldName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 449;
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
		this.enterRule(localctx, 84, Protobuf3Parser.RULE_oneofName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 451;
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
		this.enterRule(localctx, 86, Protobuf3Parser.RULE_mapName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 453;
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
		this.enterRule(localctx, 88, Protobuf3Parser.RULE_serviceName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 455;
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
		this.enterRule(localctx, 90, Protobuf3Parser.RULE_rpcName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 457;
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
		this.enterRule(localctx, 92, Protobuf3Parser.RULE_messageType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===48) {
				{
				this.state = 459;
				this.match(Protobuf3Parser.DOT);
				}
			}

			this.state = 467;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 462;
					this.ident();
					this.state = 463;
					this.match(Protobuf3Parser.DOT);
					}
					}
				}
				this.state = 469;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
			}
			this.state = 470;
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
		this.enterRule(localctx, 94, Protobuf3Parser.RULE_enumType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===48) {
				{
				this.state = 472;
				this.match(Protobuf3Parser.DOT);
				}
			}

			this.state = 480;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 475;
					this.ident();
					this.state = 476;
					this.match(Protobuf3Parser.DOT);
					}
					}
				}
				this.state = 482;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 44, this._ctx);
			}
			this.state = 483;
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
		this.enterRule(localctx, 96, Protobuf3Parser.RULE_intLit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 485;
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
		this.enterRule(localctx, 98, Protobuf3Parser.RULE_strLit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 487;
			_la = this._input.LA(1);
			if(!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 131075) !== 0))) {
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
		this.enterRule(localctx, 100, Protobuf3Parser.RULE_boolLit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 489;
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
		this.enterRule(localctx, 102, Protobuf3Parser.RULE_floatLit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 491;
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
		this.enterRule(localctx, 104, Protobuf3Parser.RULE_keywords);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 493;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4194319) !== 0))) {
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

	public static readonly _serializedATN: number[] = [4,1,60,496,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
	7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,1,0,1,
	0,1,0,1,0,1,0,1,0,5,0,113,8,0,10,0,12,0,116,9,0,1,0,1,0,1,1,1,1,1,1,1,1,
	1,1,1,2,1,2,3,2,127,8,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,
	1,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,148,8,5,3,5,150,8,5,1,6,1,6,1,7,3,7,155,
	8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,165,8,7,1,7,1,7,1,8,1,8,1,8,5,8,
	172,8,8,10,8,12,8,175,9,8,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,
	1,11,1,11,5,11,189,8,11,10,11,12,11,192,9,11,1,11,1,11,1,12,1,12,1,12,1,
	12,1,12,1,12,1,12,1,12,3,12,204,8,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,
	1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,221,8,13,1,13,1,13,1,14,1,
	14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
	1,15,1,15,1,15,3,15,244,8,15,1,16,1,16,1,16,3,16,249,8,16,1,16,1,16,1,17,
	1,17,1,17,5,17,256,8,17,10,17,12,17,259,9,17,1,18,1,18,1,18,1,18,3,18,265,
	8,18,3,18,267,8,18,1,19,1,19,1,19,5,19,272,8,19,10,19,12,19,275,9,19,1,
	20,1,20,1,20,1,20,3,20,281,8,20,1,21,1,21,1,21,1,21,1,22,1,22,5,22,289,
	8,22,10,22,12,22,292,9,22,1,22,1,22,1,23,1,23,1,23,3,23,299,8,23,1,24,1,
	24,1,24,3,24,304,8,24,1,24,1,24,3,24,308,8,24,1,24,1,24,1,25,1,25,1,25,
	1,25,5,25,316,8,25,10,25,12,25,319,9,25,1,25,1,25,1,26,1,26,1,26,1,26,1,
	27,1,27,1,27,1,27,1,28,1,28,5,28,333,8,28,10,28,12,28,336,9,28,1,28,1,28,
	1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,349,8,29,1,30,1,30,1,
	30,1,30,1,30,5,30,356,8,30,10,30,12,30,359,9,30,1,30,1,30,1,31,1,31,1,31,
	1,31,5,31,367,8,31,10,31,12,31,370,9,31,1,31,1,31,1,32,1,32,1,32,3,32,377,
	8,32,1,33,1,33,1,33,1,33,3,33,383,8,33,1,33,1,33,1,33,1,33,1,33,3,33,390,
	8,33,1,33,1,33,1,33,1,33,1,33,5,33,397,8,33,10,33,12,33,400,9,33,1,33,1,
	33,3,33,404,8,33,1,34,1,34,3,34,408,8,34,1,34,1,34,3,34,412,8,34,1,34,1,
	34,1,34,1,34,3,34,418,8,34,1,35,1,35,1,35,1,35,1,35,5,35,425,8,35,10,35,
	12,35,428,9,35,1,35,1,35,1,36,1,36,1,37,1,37,3,37,436,8,37,1,38,1,38,1,
	38,5,38,441,8,38,10,38,12,38,444,9,38,1,39,1,39,1,40,1,40,1,41,1,41,1,42,
	1,42,1,43,1,43,1,44,1,44,1,45,1,45,1,46,3,46,461,8,46,1,46,1,46,1,46,5,
	46,466,8,46,10,46,12,46,469,9,46,1,46,1,46,1,47,3,47,474,8,47,1,47,1,47,
	1,47,5,47,479,8,47,10,47,12,47,482,9,47,1,47,1,47,1,48,1,48,1,49,1,49,1,
	50,1,50,1,51,1,51,1,52,1,52,1,52,0,0,53,0,2,4,6,8,10,12,14,16,18,20,22,
	24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
	72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,0,7,1,0,36,37,1,0,
	3,4,1,0,7,8,1,0,11,22,1,0,51,52,2,0,36,37,53,53,2,0,1,35,54,54,521,0,106,
	1,0,0,0,2,119,1,0,0,0,4,124,1,0,0,0,6,131,1,0,0,0,8,135,1,0,0,0,10,149,
	1,0,0,0,12,151,1,0,0,0,14,154,1,0,0,0,16,168,1,0,0,0,18,176,1,0,0,0,20,
	180,1,0,0,0,22,182,1,0,0,0,24,195,1,0,0,0,26,207,1,0,0,0,28,224,1,0,0,0,
	30,243,1,0,0,0,32,245,1,0,0,0,34,252,1,0,0,0,36,260,1,0,0,0,38,268,1,0,
	0,0,40,280,1,0,0,0,42,282,1,0,0,0,44,286,1,0,0,0,46,298,1,0,0,0,48,300,
	1,0,0,0,50,311,1,0,0,0,52,322,1,0,0,0,54,326,1,0,0,0,56,330,1,0,0,0,58,
	348,1,0,0,0,60,350,1,0,0,0,62,362,1,0,0,0,64,376,1,0,0,0,66,378,1,0,0,0,
	68,417,1,0,0,0,70,419,1,0,0,0,72,431,1,0,0,0,74,435,1,0,0,0,76,437,1,0,
	0,0,78,445,1,0,0,0,80,447,1,0,0,0,82,449,1,0,0,0,84,451,1,0,0,0,86,453,
	1,0,0,0,88,455,1,0,0,0,90,457,1,0,0,0,92,460,1,0,0,0,94,473,1,0,0,0,96,
	485,1,0,0,0,98,487,1,0,0,0,100,489,1,0,0,0,102,491,1,0,0,0,104,493,1,0,
	0,0,106,114,3,2,1,0,107,113,3,4,2,0,108,113,3,6,3,0,109,113,3,8,4,0,110,
	113,3,40,20,0,111,113,3,72,36,0,112,107,1,0,0,0,112,108,1,0,0,0,112,109,
	1,0,0,0,112,110,1,0,0,0,112,111,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,
	114,115,1,0,0,0,115,117,1,0,0,0,116,114,1,0,0,0,117,118,5,0,0,1,118,1,1,
	0,0,0,119,120,5,1,0,0,120,121,5,39,0,0,121,122,7,0,0,0,122,123,5,38,0,0,
	123,3,1,0,0,0,124,126,5,2,0,0,125,127,7,1,0,0,126,125,1,0,0,0,126,127,1,
	0,0,0,127,128,1,0,0,0,128,129,3,98,49,0,129,130,5,38,0,0,130,5,1,0,0,0,
	131,132,5,5,0,0,132,133,3,76,38,0,133,134,5,38,0,0,134,7,1,0,0,0,135,136,
	5,6,0,0,136,137,3,10,5,0,137,138,5,39,0,0,138,139,3,68,34,0,139,140,5,38,
	0,0,140,9,1,0,0,0,141,150,3,76,38,0,142,143,5,40,0,0,143,144,3,76,38,0,
	144,147,5,41,0,0,145,146,5,48,0,0,146,148,3,76,38,0,147,145,1,0,0,0,147,
	148,1,0,0,0,148,150,1,0,0,0,149,141,1,0,0,0,149,142,1,0,0,0,150,11,1,0,
	0,0,151,152,7,2,0,0,152,13,1,0,0,0,153,155,3,12,6,0,154,153,1,0,0,0,154,
	155,1,0,0,0,155,156,1,0,0,0,156,157,3,30,15,0,157,158,3,82,41,0,158,159,
	5,39,0,0,159,164,3,20,10,0,160,161,5,42,0,0,161,162,3,16,8,0,162,163,5,
	43,0,0,163,165,1,0,0,0,164,160,1,0,0,0,164,165,1,0,0,0,165,166,1,0,0,0,
	166,167,5,38,0,0,167,15,1,0,0,0,168,173,3,18,9,0,169,170,5,49,0,0,170,172,
	3,18,9,0,171,169,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,
	0,174,17,1,0,0,0,175,173,1,0,0,0,176,177,3,10,5,0,177,178,5,39,0,0,178,
	179,3,68,34,0,179,19,1,0,0,0,180,181,3,96,48,0,181,21,1,0,0,0,182,183,5,
	9,0,0,183,184,3,84,42,0,184,190,5,44,0,0,185,189,3,8,4,0,186,189,3,24,12,
	0,187,189,3,72,36,0,188,185,1,0,0,0,188,186,1,0,0,0,188,187,1,0,0,0,189,
	192,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,193,1,0,0,0,192,190,1,0,
	0,0,193,194,5,45,0,0,194,23,1,0,0,0,195,196,3,30,15,0,196,197,3,82,41,0,
	197,198,5,39,0,0,198,203,3,20,10,0,199,200,5,42,0,0,200,201,3,16,8,0,201,
	202,5,43,0,0,202,204,1,0,0,0,203,199,1,0,0,0,203,204,1,0,0,0,204,205,1,
	0,0,0,205,206,5,38,0,0,206,25,1,0,0,0,207,208,5,10,0,0,208,209,5,46,0,0,
	209,210,3,28,14,0,210,211,5,49,0,0,211,212,3,30,15,0,212,213,5,47,0,0,213,
	214,3,86,43,0,214,215,5,39,0,0,215,220,3,20,10,0,216,217,5,42,0,0,217,218,
	3,16,8,0,218,219,5,43,0,0,219,221,1,0,0,0,220,216,1,0,0,0,220,221,1,0,0,
	0,221,222,1,0,0,0,222,223,5,38,0,0,223,27,1,0,0,0,224,225,7,3,0,0,225,29,
	1,0,0,0,226,244,5,23,0,0,227,244,5,24,0,0,228,244,5,11,0,0,229,244,5,12,
	0,0,230,244,5,13,0,0,231,244,5,14,0,0,232,244,5,15,0,0,233,244,5,16,0,0,
	234,244,5,17,0,0,235,244,5,18,0,0,236,244,5,19,0,0,237,244,5,20,0,0,238,
	244,5,21,0,0,239,244,5,22,0,0,240,244,5,25,0,0,241,244,3,92,46,0,242,244,
	3,94,47,0,243,226,1,0,0,0,243,227,1,0,0,0,243,228,1,0,0,0,243,229,1,0,0,
	0,243,230,1,0,0,0,243,231,1,0,0,0,243,232,1,0,0,0,243,233,1,0,0,0,243,234,
	1,0,0,0,243,235,1,0,0,0,243,236,1,0,0,0,243,237,1,0,0,0,243,238,1,0,0,0,
	243,239,1,0,0,0,243,240,1,0,0,0,243,241,1,0,0,0,243,242,1,0,0,0,244,31,
	1,0,0,0,245,248,5,26,0,0,246,249,3,34,17,0,247,249,3,38,19,0,248,246,1,
	0,0,0,248,247,1,0,0,0,249,250,1,0,0,0,250,251,5,38,0,0,251,33,1,0,0,0,252,
	257,3,36,18,0,253,254,5,49,0,0,254,256,3,36,18,0,255,253,1,0,0,0,256,259,
	1,0,0,0,257,255,1,0,0,0,257,258,1,0,0,0,258,35,1,0,0,0,259,257,1,0,0,0,
	260,266,3,96,48,0,261,264,5,27,0,0,262,265,3,96,48,0,263,265,5,28,0,0,264,
	262,1,0,0,0,264,263,1,0,0,0,265,267,1,0,0,0,266,261,1,0,0,0,266,267,1,0,
	0,0,267,37,1,0,0,0,268,273,3,98,49,0,269,270,5,49,0,0,270,272,3,98,49,0,
	271,269,1,0,0,0,272,275,1,0,0,0,273,271,1,0,0,0,273,274,1,0,0,0,274,39,
	1,0,0,0,275,273,1,0,0,0,276,281,3,54,27,0,277,281,3,42,21,0,278,281,3,60,
	30,0,279,281,3,62,31,0,280,276,1,0,0,0,280,277,1,0,0,0,280,278,1,0,0,0,
	280,279,1,0,0,0,281,41,1,0,0,0,282,283,5,29,0,0,283,284,3,80,40,0,284,285,
	3,44,22,0,285,43,1,0,0,0,286,290,5,44,0,0,287,289,3,46,23,0,288,287,1,0,
	0,0,289,292,1,0,0,0,290,288,1,0,0,0,290,291,1,0,0,0,291,293,1,0,0,0,292,
	290,1,0,0,0,293,294,5,45,0,0,294,45,1,0,0,0,295,299,3,8,4,0,296,299,3,48,
	24,0,297,299,3,72,36,0,298,295,1,0,0,0,298,296,1,0,0,0,298,297,1,0,0,0,
	299,47,1,0,0,0,300,301,3,74,37,0,301,303,5,39,0,0,302,304,5,52,0,0,303,
	302,1,0,0,0,303,304,1,0,0,0,304,305,1,0,0,0,305,307,3,96,48,0,306,308,3,
	50,25,0,307,306,1,0,0,0,307,308,1,0,0,0,308,309,1,0,0,0,309,310,5,38,0,
	0,310,49,1,0,0,0,311,312,5,42,0,0,312,317,3,52,26,0,313,314,5,49,0,0,314,
	316,3,52,26,0,315,313,1,0,0,0,316,319,1,0,0,0,317,315,1,0,0,0,317,318,1,
	0,0,0,318,320,1,0,0,0,319,317,1,0,0,0,320,321,5,43,0,0,321,51,1,0,0,0,322,
	323,3,10,5,0,323,324,5,39,0,0,324,325,3,68,34,0,325,53,1,0,0,0,326,327,
	5,30,0,0,327,328,3,78,39,0,328,329,3,56,28,0,329,55,1,0,0,0,330,334,5,44,
	0,0,331,333,3,58,29,0,332,331,1,0,0,0,333,336,1,0,0,0,334,332,1,0,0,0,334,
	335,1,0,0,0,335,337,1,0,0,0,336,334,1,0,0,0,337,338,5,45,0,0,338,57,1,0,
	0,0,339,349,3,14,7,0,340,349,3,42,21,0,341,349,3,54,27,0,342,349,3,60,30,
	0,343,349,3,8,4,0,344,349,3,22,11,0,345,349,3,26,13,0,346,349,3,32,16,0,
	347,349,3,72,36,0,348,339,1,0,0,0,348,340,1,0,0,0,348,341,1,0,0,0,348,342,
	1,0,0,0,348,343,1,0,0,0,348,344,1,0,0,0,348,345,1,0,0,0,348,346,1,0,0,0,
	348,347,1,0,0,0,349,59,1,0,0,0,350,351,5,32,0,0,351,352,3,92,46,0,352,357,
	5,44,0,0,353,356,3,14,7,0,354,356,3,72,36,0,355,353,1,0,0,0,355,354,1,0,
	0,0,356,359,1,0,0,0,357,355,1,0,0,0,357,358,1,0,0,0,358,360,1,0,0,0,359,
	357,1,0,0,0,360,361,5,45,0,0,361,61,1,0,0,0,362,363,5,31,0,0,363,364,3,
	88,44,0,364,368,5,44,0,0,365,367,3,64,32,0,366,365,1,0,0,0,367,370,1,0,
	0,0,368,366,1,0,0,0,368,369,1,0,0,0,369,371,1,0,0,0,370,368,1,0,0,0,371,
	372,5,45,0,0,372,63,1,0,0,0,373,377,3,8,4,0,374,377,3,66,33,0,375,377,3,
	72,36,0,376,373,1,0,0,0,376,374,1,0,0,0,376,375,1,0,0,0,377,65,1,0,0,0,
	378,379,5,33,0,0,379,380,3,90,45,0,380,382,5,40,0,0,381,383,5,34,0,0,382,
	381,1,0,0,0,382,383,1,0,0,0,383,384,1,0,0,0,384,385,3,92,46,0,385,386,5,
	41,0,0,386,387,5,35,0,0,387,389,5,40,0,0,388,390,5,34,0,0,389,388,1,0,0,
	0,389,390,1,0,0,0,390,391,1,0,0,0,391,392,3,92,46,0,392,403,5,41,0,0,393,
	398,5,44,0,0,394,397,3,8,4,0,395,397,3,72,36,0,396,394,1,0,0,0,396,395,
	1,0,0,0,397,400,1,0,0,0,398,396,1,0,0,0,398,399,1,0,0,0,399,401,1,0,0,0,
	400,398,1,0,0,0,401,404,5,45,0,0,402,404,5,38,0,0,403,393,1,0,0,0,403,402,
	1,0,0,0,404,67,1,0,0,0,405,418,3,76,38,0,406,408,7,4,0,0,407,406,1,0,0,
	0,407,408,1,0,0,0,408,409,1,0,0,0,409,418,3,96,48,0,410,412,7,4,0,0,411,
	410,1,0,0,0,411,412,1,0,0,0,412,413,1,0,0,0,413,418,3,102,51,0,414,418,
	3,98,49,0,415,418,3,100,50,0,416,418,3,70,35,0,417,405,1,0,0,0,417,407,
	1,0,0,0,417,411,1,0,0,0,417,414,1,0,0,0,417,415,1,0,0,0,417,416,1,0,0,0,
	418,69,1,0,0,0,419,426,5,44,0,0,420,421,3,74,37,0,421,422,5,50,0,0,422,
	423,3,68,34,0,423,425,1,0,0,0,424,420,1,0,0,0,425,428,1,0,0,0,426,424,1,
	0,0,0,426,427,1,0,0,0,427,429,1,0,0,0,428,426,1,0,0,0,429,430,5,45,0,0,
	430,71,1,0,0,0,431,432,5,38,0,0,432,73,1,0,0,0,433,436,5,57,0,0,434,436,
	3,104,52,0,435,433,1,0,0,0,435,434,1,0,0,0,436,75,1,0,0,0,437,442,3,74,
	37,0,438,439,5,48,0,0,439,441,3,74,37,0,440,438,1,0,0,0,441,444,1,0,0,0,
	442,440,1,0,0,0,442,443,1,0,0,0,443,77,1,0,0,0,444,442,1,0,0,0,445,446,
	3,74,37,0,446,79,1,0,0,0,447,448,3,74,37,0,448,81,1,0,0,0,449,450,3,74,
	37,0,450,83,1,0,0,0,451,452,3,74,37,0,452,85,1,0,0,0,453,454,3,74,37,0,
	454,87,1,0,0,0,455,456,3,74,37,0,456,89,1,0,0,0,457,458,3,74,37,0,458,91,
	1,0,0,0,459,461,5,48,0,0,460,459,1,0,0,0,460,461,1,0,0,0,461,467,1,0,0,
	0,462,463,3,74,37,0,463,464,5,48,0,0,464,466,1,0,0,0,465,462,1,0,0,0,466,
	469,1,0,0,0,467,465,1,0,0,0,467,468,1,0,0,0,468,470,1,0,0,0,469,467,1,0,
	0,0,470,471,3,78,39,0,471,93,1,0,0,0,472,474,5,48,0,0,473,472,1,0,0,0,473,
	474,1,0,0,0,474,480,1,0,0,0,475,476,3,74,37,0,476,477,5,48,0,0,477,479,
	1,0,0,0,478,475,1,0,0,0,479,482,1,0,0,0,480,478,1,0,0,0,480,481,1,0,0,0,
	481,483,1,0,0,0,482,480,1,0,0,0,483,484,3,80,40,0,484,95,1,0,0,0,485,486,
	5,56,0,0,486,97,1,0,0,0,487,488,7,5,0,0,488,99,1,0,0,0,489,490,5,54,0,0,
	490,101,1,0,0,0,491,492,5,55,0,0,492,103,1,0,0,0,493,494,7,6,0,0,494,105,
	1,0,0,0,45,112,114,126,147,149,154,164,173,188,190,203,220,243,248,257,
	264,266,273,280,290,298,303,307,317,334,348,355,357,368,376,382,389,396,
	398,403,407,411,417,426,435,442,460,467,473,480];

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
	public EOF(): TerminalNode {
		return this.getToken(Protobuf3Parser.EOF, 0);
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


export class FieldLabelContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(Protobuf3Parser.OPTIONAL, 0);
	}
	public REPEATED(): TerminalNode {
		return this.getToken(Protobuf3Parser.REPEATED, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_fieldLabel;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterFieldLabel) {
	 		listener.enterFieldLabel(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitFieldLabel) {
	 		listener.exitFieldLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitFieldLabel) {
			return visitor.visitFieldLabel(this);
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
	public fieldLabel(): FieldLabelContext {
		return this.getTypedRuleContext(FieldLabelContext, 0) as FieldLabelContext;
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
	public emptyStatement__list(): EmptyStatement_Context[] {
		return this.getTypedRuleContexts(EmptyStatement_Context) as EmptyStatement_Context[];
	}
	public emptyStatement_(i: number): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, i) as EmptyStatement_Context;
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
	public extendDef(): ExtendDefContext {
		return this.getTypedRuleContext(ExtendDefContext, 0) as ExtendDefContext;
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
	public emptyStatement_(): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, 0) as EmptyStatement_Context;
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
	public reserved(): ReservedContext {
		return this.getTypedRuleContext(ReservedContext, 0) as ReservedContext;
	}
	public emptyStatement_(): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, 0) as EmptyStatement_Context;
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


export class ExtendDefContext extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTEND(): TerminalNode {
		return this.getToken(Protobuf3Parser.EXTEND, 0);
	}
	public messageType(): MessageTypeContext {
		return this.getTypedRuleContext(MessageTypeContext, 0) as MessageTypeContext;
	}
	public LC(): TerminalNode {
		return this.getToken(Protobuf3Parser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(Protobuf3Parser.RC, 0);
	}
	public field_list(): FieldContext[] {
		return this.getTypedRuleContexts(FieldContext) as FieldContext[];
	}
	public field(i: number): FieldContext {
		return this.getTypedRuleContext(FieldContext, i) as FieldContext;
	}
	public emptyStatement__list(): EmptyStatement_Context[] {
		return this.getTypedRuleContexts(EmptyStatement_Context) as EmptyStatement_Context[];
	}
	public emptyStatement_(i: number): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, i) as EmptyStatement_Context;
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_extendDef;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterExtendDef) {
	 		listener.enterExtendDef(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitExtendDef) {
	 		listener.exitExtendDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitExtendDef) {
			return visitor.visitExtendDef(this);
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
	public emptyStatement_(): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, 0) as EmptyStatement_Context;
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
	public emptyStatement__list(): EmptyStatement_Context[] {
		return this.getTypedRuleContexts(EmptyStatement_Context) as EmptyStatement_Context[];
	}
	public emptyStatement_(i: number): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, i) as EmptyStatement_Context;
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
	public fullIdent(): FullIdentContext {
		return this.getTypedRuleContext(FullIdentContext, 0) as FullIdentContext;
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


export class EmptyStatement_Context extends ParserRuleContext {
	constructor(parser?: Protobuf3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Protobuf3Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Protobuf3Parser.RULE_emptyStatement_;
	}
	public enterRule(listener: Protobuf3Listener): void {
	    if(listener.enterEmptyStatement_) {
	 		listener.enterEmptyStatement_(this);
		}
	}
	public exitRule(listener: Protobuf3Listener): void {
	    if(listener.exitEmptyStatement_) {
	 		listener.exitEmptyStatement_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEmptyStatement_) {
			return visitor.visitEmptyStatement_(this);
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
	public OPTIONAL(): TerminalNode {
		return this.getToken(Protobuf3Parser.OPTIONAL, 0);
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
	public EXTEND(): TerminalNode {
		return this.getToken(Protobuf3Parser.EXTEND, 0);
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
