// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: proto3_arena_unittest
// file: unittest_proto3_arena.proto

import * as unittest_import_models from "unittest_import_models";

import * as unittest_import_public_models from "unittest_import_public_models";

import * as pjs from "protobufjs/minimal";

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}

export interface ITestAllTypesObj {
  optionalInt32: number;
  optionalInt64: string;
  optionalUint32: number;
  optionalUint64: string;
  optionalSint32: number;
  optionalSint64: string;
  optionalFixed32: number;
  optionalFixed64: string;
  optionalSfixed32: number;
  optionalSfixed64: string;
  optionalFloat: number;
  optionalDouble: number;
  optionalBool: boolean;
  optionalString: string;
  optionalBytes: string;
  optionalNestedMessage: null;
  optionalForeignMessage: null;
  optionalImportMessage: null;
  optionalNestedEnum: null;
  optionalForeignEnum: null;
  optionalStringPiece: string;
  optionalCord: string;
  optionalPublicImportMessage: null;
  optionalLazyMessage: null;
  optionalUnverifiedLazyMessage: null;
  optionalLazyImportMessage: null;
  repeatedInt32: number;
  repeatedInt64: string;
  repeatedUint32: number;
  repeatedUint64: string;
  repeatedSint32: number;
  repeatedSint64: string;
  repeatedFixed32: number;
  repeatedFixed64: string;
  repeatedSfixed32: number;
  repeatedSfixed64: string;
  repeatedFloat: number;
  repeatedDouble: number;
  repeatedBool: boolean;
  repeatedString: string;
  repeatedBytes: string;
  repeatedNestedMessage: null;
  repeatedForeignMessage: null;
  repeatedImportMessage: null;
  repeatedNestedEnum: null;
  repeatedForeignEnum: null;
  repeatedStringPiece: string;
  repeatedCord: string;
  repeatedLazyMessage: null;
  oneofUint32?: number;
  oneofNestedMessage?: null;
  oneofString?: string;
  oneofBytes?: string;
}

export interface ITestAllTypes {
  optionalInt32: number;
  optionalInt64: pjs.Long;
  optionalUint32: number;
  optionalUint64: pjs.Long;
  optionalSint32: number;
  optionalSint64: pjs.Long;
  optionalFixed32: number;
  optionalFixed64: pjs.Long;
  optionalSfixed32: number;
  optionalSfixed64: pjs.Long;
  optionalFloat: number;
  optionalDouble: number;
  optionalBool: boolean;
  optionalString: string;
  optionalBytes: Uint8Array;
  optionalNestedMessage: null;
  optionalForeignMessage: null;
  optionalImportMessage: null;
  optionalNestedEnum: null;
  optionalForeignEnum: null;
  optionalStringPiece: string;
  optionalCord: string;
  optionalPublicImportMessage: null;
  optionalLazyMessage: null;
  optionalUnverifiedLazyMessage: null;
  optionalLazyImportMessage: null;
  repeatedInt32: number;
  repeatedInt64: pjs.Long;
  repeatedUint32: number;
  repeatedUint64: pjs.Long;
  repeatedSint32: number;
  repeatedSint64: pjs.Long;
  repeatedFixed32: number;
  repeatedFixed64: pjs.Long;
  repeatedSfixed32: number;
  repeatedSfixed64: pjs.Long;
  repeatedFloat: number;
  repeatedDouble: number;
  repeatedBool: boolean;
  repeatedString: string;
  repeatedBytes: Uint8Array;
  repeatedNestedMessage: null;
  repeatedForeignMessage: null;
  repeatedImportMessage: null;
  repeatedNestedEnum: null;
  repeatedForeignEnum: null;
  repeatedStringPiece: string;
  repeatedCord: string;
  repeatedLazyMessage: null;
  oneofUint32?: number;
  oneofNestedMessage?: null;
  oneofString?: string;
  oneofBytes?: Uint8Array;
}

export class TestAllTypes implements ITestAllTypes {
  optionalInt32: number = 0;
  optionalInt64: pjs.Long = 0n;
  optionalUint32: number = 0;
  optionalUint64: pjs.Long = 0n;
  optionalSint32: number = 0;
  optionalSint64: pjs.Long = 0n;
  optionalFixed32: number = 0;
  optionalFixed64: pjs.Long = 0n;
  optionalSfixed32: number = 0;
  optionalSfixed64: pjs.Long = 0n;
  optionalFloat: number = 0;
  optionalDouble: number = 0;
  optionalBool: boolean = false;
  optionalString: string = "";
  optionalBytes: Uint8Array = new Uint8Array();
  optionalNestedMessage: null = null;
  optionalForeignMessage: null = null;
  optionalImportMessage: null = null;
  optionalNestedEnum: null = null;
  optionalForeignEnum: null = null;
  optionalStringPiece: string = "";
  optionalCord: string = "";
  optionalPublicImportMessage: null = null;
  optionalLazyMessage: null = null;
  optionalUnverifiedLazyMessage: null = null;
  optionalLazyImportMessage: null = null;
  repeatedInt32: number = [];
  repeatedInt64: pjs.Long = [];
  repeatedUint32: number = [];
  repeatedUint64: pjs.Long = [];
  repeatedSint32: number = [];
  repeatedSint64: pjs.Long = [];
  repeatedFixed32: number = [];
  repeatedFixed64: pjs.Long = [];
  repeatedSfixed32: number = [];
  repeatedSfixed64: pjs.Long = [];
  repeatedFloat: number = [];
  repeatedDouble: number = [];
  repeatedBool: boolean = [];
  repeatedString: string = [];
  repeatedBytes: Uint8Array = [];
  repeatedNestedMessage: null = [];
  repeatedForeignMessage: null = [];
  repeatedImportMessage: null = [];
  repeatedNestedEnum: null = [];
  repeatedForeignEnum: null = [];
  repeatedStringPiece: string = [];
  repeatedCord: string = [];
  repeatedLazyMessage: null = [];
  oneofUint32?: number = 0;
  oneofNestedMessage?: null = null;
  oneofString?: string = "";
  oneofBytes?: Uint8Array = new Uint8Array();

  constructor(obj?: Partial<ITestAllTypes>) {
    if (!obj) return;

    if (obj.optionalInt32 !== undefined) {
      this.optionalInt32 = obj.optionalInt32;
    }
    if (obj.optionalInt64 !== undefined) {
      this.optionalInt64 = obj.optionalInt64;
    }
    if (obj.optionalUint32 !== undefined) {
      this.optionalUint32 = obj.optionalUint32;
    }
    if (obj.optionalUint64 !== undefined) {
      this.optionalUint64 = obj.optionalUint64;
    }
    if (obj.optionalSint32 !== undefined) {
      this.optionalSint32 = obj.optionalSint32;
    }
    if (obj.optionalSint64 !== undefined) {
      this.optionalSint64 = obj.optionalSint64;
    }
    if (obj.optionalFixed32 !== undefined) {
      this.optionalFixed32 = obj.optionalFixed32;
    }
    if (obj.optionalFixed64 !== undefined) {
      this.optionalFixed64 = obj.optionalFixed64;
    }
    if (obj.optionalSfixed32 !== undefined) {
      this.optionalSfixed32 = obj.optionalSfixed32;
    }
    if (obj.optionalSfixed64 !== undefined) {
      this.optionalSfixed64 = obj.optionalSfixed64;
    }
    if (obj.optionalFloat !== undefined) {
      this.optionalFloat = obj.optionalFloat;
    }
    if (obj.optionalDouble !== undefined) {
      this.optionalDouble = obj.optionalDouble;
    }
    if (obj.optionalBool !== undefined) {
      this.optionalBool = obj.optionalBool;
    }
    if (obj.optionalString !== undefined) {
      this.optionalString = obj.optionalString;
    }
    if (obj.optionalBytes !== undefined) {
      this.optionalBytes = obj.optionalBytes;
    }
    if (obj.optionalNestedMessage !== undefined) {
      this.optionalNestedMessage = obj.optionalNestedMessage;
    }
    if (obj.optionalForeignMessage !== undefined) {
      this.optionalForeignMessage = obj.optionalForeignMessage;
    }
    if (obj.optionalImportMessage !== undefined) {
      this.optionalImportMessage = obj.optionalImportMessage;
    }
    if (obj.optionalNestedEnum !== undefined) {
      this.optionalNestedEnum = obj.optionalNestedEnum;
    }
    if (obj.optionalForeignEnum !== undefined) {
      this.optionalForeignEnum = obj.optionalForeignEnum;
    }
    if (obj.optionalStringPiece !== undefined) {
      this.optionalStringPiece = obj.optionalStringPiece;
    }
    if (obj.optionalCord !== undefined) {
      this.optionalCord = obj.optionalCord;
    }
    if (obj.optionalPublicImportMessage !== undefined) {
      this.optionalPublicImportMessage = obj.optionalPublicImportMessage;
    }
    if (obj.optionalLazyMessage !== undefined) {
      this.optionalLazyMessage = obj.optionalLazyMessage;
    }
    if (obj.optionalUnverifiedLazyMessage !== undefined) {
      this.optionalUnverifiedLazyMessage = obj.optionalUnverifiedLazyMessage;
    }
    if (obj.optionalLazyImportMessage !== undefined) {
      this.optionalLazyImportMessage = obj.optionalLazyImportMessage;
    }
    if (obj.repeatedInt32 !== undefined) {
      this.repeatedInt32 = obj.repeatedInt32;
    }
    if (obj.repeatedInt64 !== undefined) {
      this.repeatedInt64 = obj.repeatedInt64;
    }
    if (obj.repeatedUint32 !== undefined) {
      this.repeatedUint32 = obj.repeatedUint32;
    }
    if (obj.repeatedUint64 !== undefined) {
      this.repeatedUint64 = obj.repeatedUint64;
    }
    if (obj.repeatedSint32 !== undefined) {
      this.repeatedSint32 = obj.repeatedSint32;
    }
    if (obj.repeatedSint64 !== undefined) {
      this.repeatedSint64 = obj.repeatedSint64;
    }
    if (obj.repeatedFixed32 !== undefined) {
      this.repeatedFixed32 = obj.repeatedFixed32;
    }
    if (obj.repeatedFixed64 !== undefined) {
      this.repeatedFixed64 = obj.repeatedFixed64;
    }
    if (obj.repeatedSfixed32 !== undefined) {
      this.repeatedSfixed32 = obj.repeatedSfixed32;
    }
    if (obj.repeatedSfixed64 !== undefined) {
      this.repeatedSfixed64 = obj.repeatedSfixed64;
    }
    if (obj.repeatedFloat !== undefined) {
      this.repeatedFloat = obj.repeatedFloat;
    }
    if (obj.repeatedDouble !== undefined) {
      this.repeatedDouble = obj.repeatedDouble;
    }
    if (obj.repeatedBool !== undefined) {
      this.repeatedBool = obj.repeatedBool;
    }
    if (obj.repeatedString !== undefined) {
      this.repeatedString = obj.repeatedString;
    }
    if (obj.repeatedBytes !== undefined) {
      this.repeatedBytes = obj.repeatedBytes;
    }
    if (obj.repeatedNestedMessage !== undefined) {
      this.repeatedNestedMessage = obj.repeatedNestedMessage;
    }
    if (obj.repeatedForeignMessage !== undefined) {
      this.repeatedForeignMessage = obj.repeatedForeignMessage;
    }
    if (obj.repeatedImportMessage !== undefined) {
      this.repeatedImportMessage = obj.repeatedImportMessage;
    }
    if (obj.repeatedNestedEnum !== undefined) {
      this.repeatedNestedEnum = obj.repeatedNestedEnum;
    }
    if (obj.repeatedForeignEnum !== undefined) {
      this.repeatedForeignEnum = obj.repeatedForeignEnum;
    }
    if (obj.repeatedStringPiece !== undefined) {
      this.repeatedStringPiece = obj.repeatedStringPiece;
    }
    if (obj.repeatedCord !== undefined) {
      this.repeatedCord = obj.repeatedCord;
    }
    if (obj.repeatedLazyMessage !== undefined) {
      this.repeatedLazyMessage = obj.repeatedLazyMessage;
    }
    if (obj.oneofUint32 !== undefined) {
      this.oneofUint32 = obj.oneofUint32;
    }
    if (obj.oneofNestedMessage !== undefined) {
      this.oneofNestedMessage = obj.oneofNestedMessage;
    }
    if (obj.oneofString !== undefined) {
      this.oneofString = obj.oneofString;
    }
    if (obj.oneofBytes !== undefined) {
      this.oneofBytes = obj.oneofBytes;
    }
  }

  public static encode(
    m: ITestAllTypes,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // int32 optional_int32 = 1
    if (m.optionalInt32 !== 0) {
      w.uint32(8);
      w.int32(m.optionalInt32);
    }

    // int64 optional_int64 = 2
    if (m.optionalInt64 !== 0n) {
      w.uint32(16);
      w.int64(m.optionalInt64);
    }

    // uint32 optional_uint32 = 3
    if (m.optionalUint32 !== 0) {
      w.uint32(24);
      w.uint32(m.optionalUint32);
    }

    // uint64 optional_uint64 = 4
    if (m.optionalUint64 !== 0n) {
      w.uint32(32);
      w.uint64(m.optionalUint64);
    }

    // sint32 optional_sint32 = 5
    if (m.optionalSint32 !== 0) {
      w.uint32(40);
      w.sint32(m.optionalSint32);
    }

    // sint64 optional_sint64 = 6
    if (m.optionalSint64 !== 0n) {
      w.uint32(48);
      w.sint64(m.optionalSint64);
    }

    // fixed32 optional_fixed32 = 7
    if (m.optionalFixed32 !== 0) {
      w.uint32(61);
      w.fixed32(m.optionalFixed32);
    }

    // fixed64 optional_fixed64 = 8
    if (m.optionalFixed64 !== 0n) {
      w.uint32(65);
      w.fixed64(m.optionalFixed64);
    }

    // sfixed32 optional_sfixed32 = 9
    if (m.optionalSfixed32 !== 0) {
      w.uint32(77);
      w.sfixed32(m.optionalSfixed32);
    }

    // sfixed64 optional_sfixed64 = 10
    if (m.optionalSfixed64 !== 0n) {
      w.uint32(81);
      w.sfixed64(m.optionalSfixed64);
    }

    // float optional_float = 11
    if (m.optionalFloat !== 0) {
      w.uint32(93);
      w.float(m.optionalFloat);
    }

    // double optional_double = 12
    if (m.optionalDouble !== 0) {
      w.uint32(97);
      w.double(m.optionalDouble);
    }

    // bool optional_bool = 13
    if (m.optionalBool !== false) {
      w.uint32(104);
      w.bool(m.optionalBool);
    }

    // string optional_string = 14
    if (m.optionalString !== "") {
      w.uint32(114);
      w.string(m.optionalString);
    }

    // bytes optional_bytes = 15
    if (m.optionalBytes !== new Uint8Array()) {
      w.uint32(122);
      w.bytes(m.optionalBytes);
    }

    // TestAllTypes.NestedMessage optional_nested_message = 18
    if (m.optionalNestedMessage !== null) {
      w.uint32(146);
      m.optionalNestedMessage.encode(writer);
    }

    // ForeignMessage optional_foreign_message = 19
    if (m.optionalForeignMessage !== null) {
      w.uint32(154);
      m.optionalForeignMessage.encode(writer);
    }

    // protobuf_unittest_import.ImportMessage optional_import_message = 20
    if (m.optionalImportMessage !== null) {
      w.uint32(162);
      m.optionalImportMessage.encode(writer);
    }

    // TestAllTypes.NestedEnum optional_nested_enum = 21
    if (m.optionalNestedEnum !== null) {
      w.uint32(170);
      m.optionalNestedEnum.encode(writer);
    }

    // ForeignEnum optional_foreign_enum = 22
    if (m.optionalForeignEnum !== null) {
      w.uint32(178);
      m.optionalForeignEnum.encode(writer);
    }

    // string optional_string_piece = 24
    if (m.optionalStringPiece !== "") {
      w.uint32(194);
      w.string(m.optionalStringPiece);
    }

    // string optional_cord = 25
    if (m.optionalCord !== "") {
      w.uint32(202);
      w.string(m.optionalCord);
    }

    // protobuf_unittest_import.PublicImportMessage optional_public_import_message = 26
    if (m.optionalPublicImportMessage !== null) {
      w.uint32(210);
      m.optionalPublicImportMessage.encode(writer);
    }

    // TestAllTypes.NestedMessage optional_lazy_message = 27
    if (m.optionalLazyMessage !== null) {
      w.uint32(218);
      m.optionalLazyMessage.encode(writer);
    }

    // TestAllTypes.NestedMessage optional_unverified_lazy_message = 28
    if (m.optionalUnverifiedLazyMessage !== null) {
      w.uint32(226);
      m.optionalUnverifiedLazyMessage.encode(writer);
    }

    // protobuf_unittest_import.ImportMessage optional_lazy_import_message = 115
    if (m.optionalLazyImportMessage !== null) {
      w.uint32(922);
      m.optionalLazyImportMessage.encode(writer);
    }

    // int32 repeated_int32 = 31
    if (m.repeatedInt32 !== []) {
      w.uint32(248);
      w.int32(m.repeatedInt32);
    }

    // int64 repeated_int64 = 32
    if (m.repeatedInt64 !== []) {
      w.uint32(256);
      w.int64(m.repeatedInt64);
    }

    // uint32 repeated_uint32 = 33
    if (m.repeatedUint32 !== []) {
      w.uint32(264);
      w.uint32(m.repeatedUint32);
    }

    // uint64 repeated_uint64 = 34
    if (m.repeatedUint64 !== []) {
      w.uint32(272);
      w.uint64(m.repeatedUint64);
    }

    // sint32 repeated_sint32 = 35
    if (m.repeatedSint32 !== []) {
      w.uint32(280);
      w.sint32(m.repeatedSint32);
    }

    // sint64 repeated_sint64 = 36
    if (m.repeatedSint64 !== []) {
      w.uint32(288);
      w.sint64(m.repeatedSint64);
    }

    // fixed32 repeated_fixed32 = 37
    if (m.repeatedFixed32 !== []) {
      w.uint32(301);
      w.fixed32(m.repeatedFixed32);
    }

    // fixed64 repeated_fixed64 = 38
    if (m.repeatedFixed64 !== []) {
      w.uint32(305);
      w.fixed64(m.repeatedFixed64);
    }

    // sfixed32 repeated_sfixed32 = 39
    if (m.repeatedSfixed32 !== []) {
      w.uint32(317);
      w.sfixed32(m.repeatedSfixed32);
    }

    // sfixed64 repeated_sfixed64 = 40
    if (m.repeatedSfixed64 !== []) {
      w.uint32(321);
      w.sfixed64(m.repeatedSfixed64);
    }

    // float repeated_float = 41
    if (m.repeatedFloat !== []) {
      w.uint32(333);
      w.float(m.repeatedFloat);
    }

    // double repeated_double = 42
    if (m.repeatedDouble !== []) {
      w.uint32(337);
      w.double(m.repeatedDouble);
    }

    // bool repeated_bool = 43
    if (m.repeatedBool !== []) {
      w.uint32(344);
      w.bool(m.repeatedBool);
    }

    // string repeated_string = 44
    if (m.repeatedString !== []) {
      w.uint32(354);
      w.string(m.repeatedString);
    }

    // bytes repeated_bytes = 45
    if (m.repeatedBytes !== []) {
      w.uint32(362);
      w.bytes(m.repeatedBytes);
    }

    // TestAllTypes.NestedMessage repeated_nested_message = 48
    if (m.repeatedNestedMessage !== []) {
      w.uint32(386);
      m.repeatedNestedMessage.encode(writer);
    }

    // ForeignMessage repeated_foreign_message = 49
    if (m.repeatedForeignMessage !== []) {
      w.uint32(394);
      m.repeatedForeignMessage.encode(writer);
    }

    // protobuf_unittest_import.ImportMessage repeated_import_message = 50
    if (m.repeatedImportMessage !== []) {
      w.uint32(402);
      m.repeatedImportMessage.encode(writer);
    }

    // TestAllTypes.NestedEnum repeated_nested_enum = 51
    if (m.repeatedNestedEnum !== []) {
      w.uint32(410);
      m.repeatedNestedEnum.encode(writer);
    }

    // ForeignEnum repeated_foreign_enum = 52
    if (m.repeatedForeignEnum !== []) {
      w.uint32(418);
      m.repeatedForeignEnum.encode(writer);
    }

    // string repeated_string_piece = 54
    if (m.repeatedStringPiece !== []) {
      w.uint32(434);
      w.string(m.repeatedStringPiece);
    }

    // string repeated_cord = 55
    if (m.repeatedCord !== []) {
      w.uint32(442);
      w.string(m.repeatedCord);
    }

    // TestAllTypes.NestedMessage repeated_lazy_message = 57
    if (m.repeatedLazyMessage !== []) {
      w.uint32(458);
      m.repeatedLazyMessage.encode(writer);
    }

    // oneof uint32 oneof_uint32 = 111

    // oneof TestAllTypes.NestedMessage oneof_nested_message = 112

    // oneof string oneof_string = 113

    // oneof bytes oneof_bytes = 114

    return w.finish();
  }

  public static decode(b: Uint8Array): TestAllTypes {
    const m = new TestAllTypes();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // int32 optional_int32 = 1
        case 8:
          m.optionalInt32 = r.int32();
          continue;

        // int64 optional_int64 = 2
        case 16:
          m.optionalInt64 = r.int64();
          continue;

        // uint32 optional_uint32 = 3
        case 24:
          m.optionalUint32 = r.uint32();
          continue;

        // uint64 optional_uint64 = 4
        case 32:
          m.optionalUint64 = r.uint64();
          continue;

        // sint32 optional_sint32 = 5
        case 40:
          m.optionalSint32 = r.sint32();
          continue;

        // sint64 optional_sint64 = 6
        case 48:
          m.optionalSint64 = r.sint64();
          continue;

        // fixed32 optional_fixed32 = 7
        case 61:
          m.optionalFixed32 = r.fixed32();
          continue;

        // fixed64 optional_fixed64 = 8
        case 65:
          m.optionalFixed64 = r.fixed64();
          continue;

        // sfixed32 optional_sfixed32 = 9
        case 77:
          m.optionalSfixed32 = r.sfixed32();
          continue;

        // sfixed64 optional_sfixed64 = 10
        case 81:
          m.optionalSfixed64 = r.sfixed64();
          continue;

        // float optional_float = 11
        case 93:
          m.optionalFloat = r.float();
          continue;

        // double optional_double = 12
        case 97:
          m.optionalDouble = r.double();
          continue;

        // bool optional_bool = 13
        case 104:
          m.optionalBool = r.bool();
          continue;

        // string optional_string = 14
        case 114:
          m.optionalString = r.string();
          continue;

        // bytes optional_bytes = 15
        case 122:
          m.optionalBytes = r.bytes();
          continue;

        // TestAllTypes.NestedMessage optional_nested_message = 18
        case 146:
          m.optionalNestedMessage =
            unittest_proto3_arena_models.proto3_arena_unittest.TestAllTypes.NestedMessage;
          continue;

        // ForeignMessage optional_foreign_message = 19
        case 154:
          m.optionalForeignMessage =
            unittest_proto3_arena_models.proto3_arena_unittest.ForeignMessage;
          continue;

        // protobuf_unittest_import.ImportMessage optional_import_message = 20
        case 162:
          m.optionalImportMessage =
            unittest_import_models.protobuf_unittest_import.ImportMessage;
          continue;

        // TestAllTypes.NestedEnum optional_nested_enum = 21
        case 170:
          m.optionalNestedEnum =
            unittest_proto3_arena_models.proto3_arena_unittest.TestAllTypes.NestedEnum;
          continue;

        // ForeignEnum optional_foreign_enum = 22
        case 178:
          m.optionalForeignEnum =
            unittest_proto3_arena_models.proto3_arena_unittest.ForeignEnum;
          continue;

        // string optional_string_piece = 24
        case 194:
          m.optionalStringPiece = r.string();
          continue;

        // string optional_cord = 25
        case 202:
          m.optionalCord = r.string();
          continue;

        // protobuf_unittest_import.PublicImportMessage optional_public_import_message = 26
        case 210:
          m.optionalPublicImportMessage =
            unittest_import_public_models.protobuf_unittest_import.PublicImportMessage;
          continue;

        // TestAllTypes.NestedMessage optional_lazy_message = 27
        case 218:
          m.optionalLazyMessage =
            unittest_proto3_arena_models.proto3_arena_unittest.TestAllTypes.NestedMessage;
          continue;

        // TestAllTypes.NestedMessage optional_unverified_lazy_message = 28
        case 226:
          m.optionalUnverifiedLazyMessage =
            unittest_proto3_arena_models.proto3_arena_unittest.TestAllTypes.NestedMessage;
          continue;

        // protobuf_unittest_import.ImportMessage optional_lazy_import_message = 115
        case 922:
          m.optionalLazyImportMessage =
            unittest_import_models.protobuf_unittest_import.ImportMessage;
          continue;

        // repeated int32 repeated_int32 = 31
        case 248:
          const repeatedInt32Value = r.int32();

          m.repeatedInt32.push(repeatedInt32Value);
          continue;

        // repeated int64 repeated_int64 = 32
        case 256:
          const repeatedInt64Value = r.int64();

          m.repeatedInt64.push(repeatedInt64Value);
          continue;

        // repeated uint32 repeated_uint32 = 33
        case 264:
          const repeatedUint32Value = r.uint32();

          m.repeatedUint32.push(repeatedUint32Value);
          continue;

        // repeated uint64 repeated_uint64 = 34
        case 272:
          const repeatedUint64Value = r.uint64();

          m.repeatedUint64.push(repeatedUint64Value);
          continue;

        // repeated sint32 repeated_sint32 = 35
        case 280:
          const repeatedSint32Value = r.sint32();

          m.repeatedSint32.push(repeatedSint32Value);
          continue;

        // repeated sint64 repeated_sint64 = 36
        case 288:
          const repeatedSint64Value = r.sint64();

          m.repeatedSint64.push(repeatedSint64Value);
          continue;

        // repeated fixed32 repeated_fixed32 = 37
        case 301:
          const repeatedFixed32Value = r.fixed32();

          m.repeatedFixed32.push(repeatedFixed32Value);
          continue;

        // repeated fixed64 repeated_fixed64 = 38
        case 305:
          const repeatedFixed64Value = r.fixed64();

          m.repeatedFixed64.push(repeatedFixed64Value);
          continue;

        // repeated sfixed32 repeated_sfixed32 = 39
        case 317:
          const repeatedSfixed32Value = r.sfixed32();

          m.repeatedSfixed32.push(repeatedSfixed32Value);
          continue;

        // repeated sfixed64 repeated_sfixed64 = 40
        case 321:
          const repeatedSfixed64Value = r.sfixed64();

          m.repeatedSfixed64.push(repeatedSfixed64Value);
          continue;

        // repeated float repeated_float = 41
        case 333:
          const repeatedFloatValue = r.float();

          m.repeatedFloat.push(repeatedFloatValue);
          continue;

        // repeated double repeated_double = 42
        case 337:
          const repeatedDoubleValue = r.double();

          m.repeatedDouble.push(repeatedDoubleValue);
          continue;

        // repeated bool repeated_bool = 43
        case 344:
          const repeatedBoolValue = r.bool();

          m.repeatedBool.push(repeatedBoolValue);
          continue;

        // repeated string repeated_string = 44
        case 354:
          const repeatedStringValue = r.string();

          m.repeatedString.push(repeatedStringValue);
          continue;

        // repeated bytes repeated_bytes = 45
        case 362:
          const repeatedBytesValue = r.bytes();

          m.repeatedBytes.push(repeatedBytesValue);
          continue;

        // repeated TestAllTypes.NestedMessage repeated_nested_message = 48
        case 386:
          const repeatedNestedMessageValue =
            unittest_proto3_arena_models.proto3_arena_unittest.TestAllTypes
              .NestedMessage;

          m.repeatedNestedMessage.push(repeatedNestedMessageValue);
          continue;

        // repeated ForeignMessage repeated_foreign_message = 49
        case 394:
          const repeatedForeignMessageValue =
            unittest_proto3_arena_models.proto3_arena_unittest.ForeignMessage;

          m.repeatedForeignMessage.push(repeatedForeignMessageValue);
          continue;

        // repeated protobuf_unittest_import.ImportMessage repeated_import_message = 50
        case 402:
          const repeatedImportMessageValue =
            unittest_import_models.protobuf_unittest_import.ImportMessage;

          m.repeatedImportMessage.push(repeatedImportMessageValue);
          continue;

        // repeated TestAllTypes.NestedEnum repeated_nested_enum = 51
        case 410:
          const repeatedNestedEnumValue =
            unittest_proto3_arena_models.proto3_arena_unittest.TestAllTypes
              .NestedEnum;

          m.repeatedNestedEnum.push(repeatedNestedEnumValue);
          continue;

        // repeated ForeignEnum repeated_foreign_enum = 52
        case 418:
          const repeatedForeignEnumValue =
            unittest_proto3_arena_models.proto3_arena_unittest.ForeignEnum;

          m.repeatedForeignEnum.push(repeatedForeignEnumValue);
          continue;

        // repeated string repeated_string_piece = 54
        case 434:
          const repeatedStringPieceValue = r.string();

          m.repeatedStringPiece.push(repeatedStringPieceValue);
          continue;

        // repeated string repeated_cord = 55
        case 442:
          const repeatedCordValue = r.string();

          m.repeatedCord.push(repeatedCordValue);
          continue;

        // repeated TestAllTypes.NestedMessage repeated_lazy_message = 57
        case 458:
          const repeatedLazyMessageValue =
            unittest_proto3_arena_models.proto3_arena_unittest.TestAllTypes
              .NestedMessage;

          m.repeatedLazyMessage.push(repeatedLazyMessageValue);
          continue;

        // uint32 oneof_uint32 = 111
        case 888:
          m.oneofUint32 = r.uint32();
          continue;

        // TestAllTypes.NestedMessage oneof_nested_message = 112
        case 898:
          m.oneofNestedMessage =
            unittest_proto3_arena_models.proto3_arena_unittest.TestAllTypes.NestedMessage;
          continue;

        // string oneof_string = 113
        case 906:
          m.oneofString = r.string();
          continue;

        // bytes oneof_bytes = 114
        case 914:
          m.oneofBytes = r.bytes();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: ITestAllTypes): ITestAllTypesObj {}

  public static fromJSON(obj: ITestAllTypesObj): ITestAllTypes {}

  clone(): TestAllTypes {
    return new TestAllTypes(this);
  }
}

export namespace TestAllTypes {
  export enum NestedEnum {
    ZERO = 0,
    FOO = 1,
    BAR = 2,
    BAZ = 3,
    NEG = 1,
  }

  export interface INestedMessageObj {
    bb: number;
  }

  export interface INestedMessage {
    bb: number;
  }

  export class NestedMessage implements INestedMessage {
    bb: number = 0;

    constructor(obj?: Partial<INestedMessage>) {
      if (!obj) return;

      if (obj.bb !== undefined) {
        this.bb = obj.bb;
      }
    }

    public static encode(
      m: INestedMessage,
      w: pjs.Writer = pjs.Writer.create()
    ): Uint8Array {
      // int32 bb = 1
      if (m.bb !== 0) {
        w.uint32(8);
        w.int32(m.bb);
      }

      return w.finish();
    }

    public static decode(b: Uint8Array): NestedMessage {
      const m = new NestedMessage();
      const r = pjs.Reader.create(b);
      while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag) {
          // int32 bb = 1
          case 8:
            m.bb = r.int32();
            continue;
        }
      }

      return m;
    }

    public static toJSON(m: INestedMessage): INestedMessageObj {}

    public static fromJSON(obj: INestedMessageObj): INestedMessage {}

    clone(): NestedMessage {
      return new NestedMessage(this);
    }
  }
}

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}

export interface ITestPackedTypesObj {
  packedInt32: number;
  packedInt64: string;
  packedUint32: number;
  packedUint64: string;
  packedSint32: number;
  packedSint64: string;
  packedFixed32: number;
  packedFixed64: string;
  packedSfixed32: number;
  packedSfixed64: string;
  packedFloat: number;
  packedDouble: number;
  packedBool: boolean;
  packedEnum: null;
}

export interface ITestPackedTypes {
  packedInt32: number;
  packedInt64: pjs.Long;
  packedUint32: number;
  packedUint64: pjs.Long;
  packedSint32: number;
  packedSint64: pjs.Long;
  packedFixed32: number;
  packedFixed64: pjs.Long;
  packedSfixed32: number;
  packedSfixed64: pjs.Long;
  packedFloat: number;
  packedDouble: number;
  packedBool: boolean;
  packedEnum: null;
}

export class TestPackedTypes implements ITestPackedTypes {
  packedInt32: number = [];
  packedInt64: pjs.Long = [];
  packedUint32: number = [];
  packedUint64: pjs.Long = [];
  packedSint32: number = [];
  packedSint64: pjs.Long = [];
  packedFixed32: number = [];
  packedFixed64: pjs.Long = [];
  packedSfixed32: number = [];
  packedSfixed64: pjs.Long = [];
  packedFloat: number = [];
  packedDouble: number = [];
  packedBool: boolean = [];
  packedEnum: null = [];

  constructor(obj?: Partial<ITestPackedTypes>) {
    if (!obj) return;

    if (obj.packedInt32 !== undefined) {
      this.packedInt32 = obj.packedInt32;
    }
    if (obj.packedInt64 !== undefined) {
      this.packedInt64 = obj.packedInt64;
    }
    if (obj.packedUint32 !== undefined) {
      this.packedUint32 = obj.packedUint32;
    }
    if (obj.packedUint64 !== undefined) {
      this.packedUint64 = obj.packedUint64;
    }
    if (obj.packedSint32 !== undefined) {
      this.packedSint32 = obj.packedSint32;
    }
    if (obj.packedSint64 !== undefined) {
      this.packedSint64 = obj.packedSint64;
    }
    if (obj.packedFixed32 !== undefined) {
      this.packedFixed32 = obj.packedFixed32;
    }
    if (obj.packedFixed64 !== undefined) {
      this.packedFixed64 = obj.packedFixed64;
    }
    if (obj.packedSfixed32 !== undefined) {
      this.packedSfixed32 = obj.packedSfixed32;
    }
    if (obj.packedSfixed64 !== undefined) {
      this.packedSfixed64 = obj.packedSfixed64;
    }
    if (obj.packedFloat !== undefined) {
      this.packedFloat = obj.packedFloat;
    }
    if (obj.packedDouble !== undefined) {
      this.packedDouble = obj.packedDouble;
    }
    if (obj.packedBool !== undefined) {
      this.packedBool = obj.packedBool;
    }
    if (obj.packedEnum !== undefined) {
      this.packedEnum = obj.packedEnum;
    }
  }

  public static encode(
    m: ITestPackedTypes,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // int32 packed_int32 = 90
    if (m.packedInt32 !== []) {
      w.uint32(720);
      w.int32(m.packedInt32);
    }

    // int64 packed_int64 = 91
    if (m.packedInt64 !== []) {
      w.uint32(728);
      w.int64(m.packedInt64);
    }

    // uint32 packed_uint32 = 92
    if (m.packedUint32 !== []) {
      w.uint32(736);
      w.uint32(m.packedUint32);
    }

    // uint64 packed_uint64 = 93
    if (m.packedUint64 !== []) {
      w.uint32(744);
      w.uint64(m.packedUint64);
    }

    // sint32 packed_sint32 = 94
    if (m.packedSint32 !== []) {
      w.uint32(752);
      w.sint32(m.packedSint32);
    }

    // sint64 packed_sint64 = 95
    if (m.packedSint64 !== []) {
      w.uint32(760);
      w.sint64(m.packedSint64);
    }

    // fixed32 packed_fixed32 = 96
    if (m.packedFixed32 !== []) {
      w.uint32(773);
      w.fixed32(m.packedFixed32);
    }

    // fixed64 packed_fixed64 = 97
    if (m.packedFixed64 !== []) {
      w.uint32(777);
      w.fixed64(m.packedFixed64);
    }

    // sfixed32 packed_sfixed32 = 98
    if (m.packedSfixed32 !== []) {
      w.uint32(789);
      w.sfixed32(m.packedSfixed32);
    }

    // sfixed64 packed_sfixed64 = 99
    if (m.packedSfixed64 !== []) {
      w.uint32(793);
      w.sfixed64(m.packedSfixed64);
    }

    // float packed_float = 100
    if (m.packedFloat !== []) {
      w.uint32(805);
      w.float(m.packedFloat);
    }

    // double packed_double = 101
    if (m.packedDouble !== []) {
      w.uint32(809);
      w.double(m.packedDouble);
    }

    // bool packed_bool = 102
    if (m.packedBool !== []) {
      w.uint32(816);
      w.bool(m.packedBool);
    }

    // ForeignEnum packed_enum = 103
    if (m.packedEnum !== []) {
      w.uint32(826);
      m.packedEnum.encode(writer);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): TestPackedTypes {
    const m = new TestPackedTypes();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // repeated int32 packed_int32 = 90
        case 720:
          const packedInt32Value = r.int32();

          m.packedInt32.push(packedInt32Value);
          continue;

        // repeated int64 packed_int64 = 91
        case 728:
          const packedInt64Value = r.int64();

          m.packedInt64.push(packedInt64Value);
          continue;

        // repeated uint32 packed_uint32 = 92
        case 736:
          const packedUint32Value = r.uint32();

          m.packedUint32.push(packedUint32Value);
          continue;

        // repeated uint64 packed_uint64 = 93
        case 744:
          const packedUint64Value = r.uint64();

          m.packedUint64.push(packedUint64Value);
          continue;

        // repeated sint32 packed_sint32 = 94
        case 752:
          const packedSint32Value = r.sint32();

          m.packedSint32.push(packedSint32Value);
          continue;

        // repeated sint64 packed_sint64 = 95
        case 760:
          const packedSint64Value = r.sint64();

          m.packedSint64.push(packedSint64Value);
          continue;

        // repeated fixed32 packed_fixed32 = 96
        case 773:
          const packedFixed32Value = r.fixed32();

          m.packedFixed32.push(packedFixed32Value);
          continue;

        // repeated fixed64 packed_fixed64 = 97
        case 777:
          const packedFixed64Value = r.fixed64();

          m.packedFixed64.push(packedFixed64Value);
          continue;

        // repeated sfixed32 packed_sfixed32 = 98
        case 789:
          const packedSfixed32Value = r.sfixed32();

          m.packedSfixed32.push(packedSfixed32Value);
          continue;

        // repeated sfixed64 packed_sfixed64 = 99
        case 793:
          const packedSfixed64Value = r.sfixed64();

          m.packedSfixed64.push(packedSfixed64Value);
          continue;

        // repeated float packed_float = 100
        case 805:
          const packedFloatValue = r.float();

          m.packedFloat.push(packedFloatValue);
          continue;

        // repeated double packed_double = 101
        case 809:
          const packedDoubleValue = r.double();

          m.packedDouble.push(packedDoubleValue);
          continue;

        // repeated bool packed_bool = 102
        case 816:
          const packedBoolValue = r.bool();

          m.packedBool.push(packedBoolValue);
          continue;

        // repeated ForeignEnum packed_enum = 103
        case 826:
          const packedEnumValue =
            unittest_proto3_arena_models.proto3_arena_unittest.ForeignEnum;

          m.packedEnum.push(packedEnumValue);
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: ITestPackedTypes): ITestPackedTypesObj {}

  public static fromJSON(obj: ITestPackedTypesObj): ITestPackedTypes {}

  clone(): TestPackedTypes {
    return new TestPackedTypes(this);
  }
}

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}

export interface ITestUnpackedTypesObj {
  repeatedInt32: number;
  repeatedInt64: string;
  repeatedUint32: number;
  repeatedUint64: string;
  repeatedSint32: number;
  repeatedSint64: string;
  repeatedFixed32: number;
  repeatedFixed64: string;
  repeatedSfixed32: number;
  repeatedSfixed64: string;
  repeatedFloat: number;
  repeatedDouble: number;
  repeatedBool: boolean;
  repeatedNestedEnum: null;
}

export interface ITestUnpackedTypes {
  repeatedInt32: number;
  repeatedInt64: pjs.Long;
  repeatedUint32: number;
  repeatedUint64: pjs.Long;
  repeatedSint32: number;
  repeatedSint64: pjs.Long;
  repeatedFixed32: number;
  repeatedFixed64: pjs.Long;
  repeatedSfixed32: number;
  repeatedSfixed64: pjs.Long;
  repeatedFloat: number;
  repeatedDouble: number;
  repeatedBool: boolean;
  repeatedNestedEnum: null;
}

export class TestUnpackedTypes implements ITestUnpackedTypes {
  repeatedInt32: number = [];
  repeatedInt64: pjs.Long = [];
  repeatedUint32: number = [];
  repeatedUint64: pjs.Long = [];
  repeatedSint32: number = [];
  repeatedSint64: pjs.Long = [];
  repeatedFixed32: number = [];
  repeatedFixed64: pjs.Long = [];
  repeatedSfixed32: number = [];
  repeatedSfixed64: pjs.Long = [];
  repeatedFloat: number = [];
  repeatedDouble: number = [];
  repeatedBool: boolean = [];
  repeatedNestedEnum: null = [];

  constructor(obj?: Partial<ITestUnpackedTypes>) {
    if (!obj) return;

    if (obj.repeatedInt32 !== undefined) {
      this.repeatedInt32 = obj.repeatedInt32;
    }
    if (obj.repeatedInt64 !== undefined) {
      this.repeatedInt64 = obj.repeatedInt64;
    }
    if (obj.repeatedUint32 !== undefined) {
      this.repeatedUint32 = obj.repeatedUint32;
    }
    if (obj.repeatedUint64 !== undefined) {
      this.repeatedUint64 = obj.repeatedUint64;
    }
    if (obj.repeatedSint32 !== undefined) {
      this.repeatedSint32 = obj.repeatedSint32;
    }
    if (obj.repeatedSint64 !== undefined) {
      this.repeatedSint64 = obj.repeatedSint64;
    }
    if (obj.repeatedFixed32 !== undefined) {
      this.repeatedFixed32 = obj.repeatedFixed32;
    }
    if (obj.repeatedFixed64 !== undefined) {
      this.repeatedFixed64 = obj.repeatedFixed64;
    }
    if (obj.repeatedSfixed32 !== undefined) {
      this.repeatedSfixed32 = obj.repeatedSfixed32;
    }
    if (obj.repeatedSfixed64 !== undefined) {
      this.repeatedSfixed64 = obj.repeatedSfixed64;
    }
    if (obj.repeatedFloat !== undefined) {
      this.repeatedFloat = obj.repeatedFloat;
    }
    if (obj.repeatedDouble !== undefined) {
      this.repeatedDouble = obj.repeatedDouble;
    }
    if (obj.repeatedBool !== undefined) {
      this.repeatedBool = obj.repeatedBool;
    }
    if (obj.repeatedNestedEnum !== undefined) {
      this.repeatedNestedEnum = obj.repeatedNestedEnum;
    }
  }

  public static encode(
    m: ITestUnpackedTypes,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // int32 repeated_int32 = 1
    if (m.repeatedInt32 !== []) {
      w.uint32(8);
      w.int32(m.repeatedInt32);
    }

    // int64 repeated_int64 = 2
    if (m.repeatedInt64 !== []) {
      w.uint32(16);
      w.int64(m.repeatedInt64);
    }

    // uint32 repeated_uint32 = 3
    if (m.repeatedUint32 !== []) {
      w.uint32(24);
      w.uint32(m.repeatedUint32);
    }

    // uint64 repeated_uint64 = 4
    if (m.repeatedUint64 !== []) {
      w.uint32(32);
      w.uint64(m.repeatedUint64);
    }

    // sint32 repeated_sint32 = 5
    if (m.repeatedSint32 !== []) {
      w.uint32(40);
      w.sint32(m.repeatedSint32);
    }

    // sint64 repeated_sint64 = 6
    if (m.repeatedSint64 !== []) {
      w.uint32(48);
      w.sint64(m.repeatedSint64);
    }

    // fixed32 repeated_fixed32 = 7
    if (m.repeatedFixed32 !== []) {
      w.uint32(61);
      w.fixed32(m.repeatedFixed32);
    }

    // fixed64 repeated_fixed64 = 8
    if (m.repeatedFixed64 !== []) {
      w.uint32(65);
      w.fixed64(m.repeatedFixed64);
    }

    // sfixed32 repeated_sfixed32 = 9
    if (m.repeatedSfixed32 !== []) {
      w.uint32(77);
      w.sfixed32(m.repeatedSfixed32);
    }

    // sfixed64 repeated_sfixed64 = 10
    if (m.repeatedSfixed64 !== []) {
      w.uint32(81);
      w.sfixed64(m.repeatedSfixed64);
    }

    // float repeated_float = 11
    if (m.repeatedFloat !== []) {
      w.uint32(93);
      w.float(m.repeatedFloat);
    }

    // double repeated_double = 12
    if (m.repeatedDouble !== []) {
      w.uint32(97);
      w.double(m.repeatedDouble);
    }

    // bool repeated_bool = 13
    if (m.repeatedBool !== []) {
      w.uint32(104);
      w.bool(m.repeatedBool);
    }

    // TestAllTypes.NestedEnum repeated_nested_enum = 14
    if (m.repeatedNestedEnum !== []) {
      w.uint32(114);
      m.repeatedNestedEnum.encode(writer);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): TestUnpackedTypes {
    const m = new TestUnpackedTypes();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // repeated int32 repeated_int32 = 1
        case 8:
          const repeatedInt32Value = r.int32();

          m.repeatedInt32.push(repeatedInt32Value);
          continue;

        // repeated int64 repeated_int64 = 2
        case 16:
          const repeatedInt64Value = r.int64();

          m.repeatedInt64.push(repeatedInt64Value);
          continue;

        // repeated uint32 repeated_uint32 = 3
        case 24:
          const repeatedUint32Value = r.uint32();

          m.repeatedUint32.push(repeatedUint32Value);
          continue;

        // repeated uint64 repeated_uint64 = 4
        case 32:
          const repeatedUint64Value = r.uint64();

          m.repeatedUint64.push(repeatedUint64Value);
          continue;

        // repeated sint32 repeated_sint32 = 5
        case 40:
          const repeatedSint32Value = r.sint32();

          m.repeatedSint32.push(repeatedSint32Value);
          continue;

        // repeated sint64 repeated_sint64 = 6
        case 48:
          const repeatedSint64Value = r.sint64();

          m.repeatedSint64.push(repeatedSint64Value);
          continue;

        // repeated fixed32 repeated_fixed32 = 7
        case 61:
          const repeatedFixed32Value = r.fixed32();

          m.repeatedFixed32.push(repeatedFixed32Value);
          continue;

        // repeated fixed64 repeated_fixed64 = 8
        case 65:
          const repeatedFixed64Value = r.fixed64();

          m.repeatedFixed64.push(repeatedFixed64Value);
          continue;

        // repeated sfixed32 repeated_sfixed32 = 9
        case 77:
          const repeatedSfixed32Value = r.sfixed32();

          m.repeatedSfixed32.push(repeatedSfixed32Value);
          continue;

        // repeated sfixed64 repeated_sfixed64 = 10
        case 81:
          const repeatedSfixed64Value = r.sfixed64();

          m.repeatedSfixed64.push(repeatedSfixed64Value);
          continue;

        // repeated float repeated_float = 11
        case 93:
          const repeatedFloatValue = r.float();

          m.repeatedFloat.push(repeatedFloatValue);
          continue;

        // repeated double repeated_double = 12
        case 97:
          const repeatedDoubleValue = r.double();

          m.repeatedDouble.push(repeatedDoubleValue);
          continue;

        // repeated bool repeated_bool = 13
        case 104:
          const repeatedBoolValue = r.bool();

          m.repeatedBool.push(repeatedBoolValue);
          continue;

        // repeated TestAllTypes.NestedEnum repeated_nested_enum = 14
        case 114:
          const repeatedNestedEnumValue =
            unittest_proto3_arena_models.proto3_arena_unittest.TestAllTypes
              .NestedEnum;

          m.repeatedNestedEnum.push(repeatedNestedEnumValue);
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: ITestUnpackedTypes): ITestUnpackedTypesObj {}

  public static fromJSON(obj: ITestUnpackedTypesObj): ITestUnpackedTypes {}

  clone(): TestUnpackedTypes {
    return new TestUnpackedTypes(this);
  }
}

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}

export interface INestedTestAllTypesObj {
  child: null;
  payload: null;
  repeatedChild: null;
}

export interface INestedTestAllTypes {
  child: null;
  payload: null;
  repeatedChild: null;
}

export class NestedTestAllTypes implements INestedTestAllTypes {
  child: null = null;
  payload: null = null;
  repeatedChild: null = [];

  constructor(obj?: Partial<INestedTestAllTypes>) {
    if (!obj) return;

    if (obj.child !== undefined) {
      this.child = obj.child;
    }
    if (obj.payload !== undefined) {
      this.payload = obj.payload;
    }
    if (obj.repeatedChild !== undefined) {
      this.repeatedChild = obj.repeatedChild;
    }
  }

  public static encode(
    m: INestedTestAllTypes,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // NestedTestAllTypes child = 1
    if (m.child !== null) {
      w.uint32(10);
      m.child.encode(writer);
    }

    // TestAllTypes payload = 2
    if (m.payload !== null) {
      w.uint32(18);
      m.payload.encode(writer);
    }

    // NestedTestAllTypes repeated_child = 3
    if (m.repeatedChild !== []) {
      w.uint32(26);
      m.repeatedChild.encode(writer);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): NestedTestAllTypes {
    const m = new NestedTestAllTypes();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // NestedTestAllTypes child = 1
        case 10:
          m.child =
            unittest_proto3_arena_models.proto3_arena_unittest.NestedTestAllTypes;
          continue;

        // TestAllTypes payload = 2
        case 18:
          m.payload =
            unittest_proto3_arena_models.proto3_arena_unittest.TestAllTypes;
          continue;

        // repeated NestedTestAllTypes repeated_child = 3
        case 26:
          const repeatedChildValue =
            unittest_proto3_arena_models.proto3_arena_unittest
              .NestedTestAllTypes;

          m.repeatedChild.push(repeatedChildValue);
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: INestedTestAllTypes): INestedTestAllTypesObj {}

  public static fromJSON(obj: INestedTestAllTypesObj): INestedTestAllTypes {}

  clone(): NestedTestAllTypes {
    return new NestedTestAllTypes(this);
  }
}

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}

export interface IForeignMessageObj {
  c: number;
}

export interface IForeignMessage {
  c: number;
}

export class ForeignMessage implements IForeignMessage {
  c: number = 0;

  constructor(obj?: Partial<IForeignMessage>) {
    if (!obj) return;

    if (obj.c !== undefined) {
      this.c = obj.c;
    }
  }

  public static encode(
    m: IForeignMessage,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // int32 c = 1
    if (m.c !== 0) {
      w.uint32(8);
      w.int32(m.c);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): ForeignMessage {
    const m = new ForeignMessage();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // int32 c = 1
        case 8:
          m.c = r.int32();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IForeignMessage): IForeignMessageObj {}

  public static fromJSON(obj: IForeignMessageObj): IForeignMessage {}

  clone(): ForeignMessage {
    return new ForeignMessage(this);
  }
}

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}

export interface ITestEmptyMessageObj {}

export interface ITestEmptyMessage {}

export class TestEmptyMessage implements ITestEmptyMessage {
  constructor(obj?: Partial<ITestEmptyMessage>) {
    if (!obj) return;
  }

  public static encode(
    m: ITestEmptyMessage,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    return w.finish();
  }

  public static decode(b: Uint8Array): TestEmptyMessage {
    const m = new TestEmptyMessage();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
      }
    }

    return m;
  }

  public static toJSON(m: ITestEmptyMessage): ITestEmptyMessageObj {}

  public static fromJSON(obj: ITestEmptyMessageObj): ITestEmptyMessage {}

  clone(): TestEmptyMessage {
    return new TestEmptyMessage(this);
  }
}

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}

export interface ITestPickleNestedMessageObj {}

export interface ITestPickleNestedMessage {}

export class TestPickleNestedMessage implements ITestPickleNestedMessage {
  constructor(obj?: Partial<ITestPickleNestedMessage>) {
    if (!obj) return;
  }

  public static encode(
    m: ITestPickleNestedMessage,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    return w.finish();
  }

  public static decode(b: Uint8Array): TestPickleNestedMessage {
    const m = new TestPickleNestedMessage();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
      }
    }

    return m;
  }

  public static toJSON(
    m: ITestPickleNestedMessage
  ): ITestPickleNestedMessageObj {}

  public static fromJSON(
    obj: ITestPickleNestedMessageObj
  ): ITestPickleNestedMessage {}

  clone(): TestPickleNestedMessage {
    return new TestPickleNestedMessage(this);
  }
}

export namespace TestPickleNestedMessage {
  export interface INestedMessageObj {
    bb: number;
  }

  export interface INestedMessage {
    bb: number;
  }

  export class NestedMessage implements INestedMessage {
    bb: number = 0;

    constructor(obj?: Partial<INestedMessage>) {
      if (!obj) return;

      if (obj.bb !== undefined) {
        this.bb = obj.bb;
      }
    }

    public static encode(
      m: INestedMessage,
      w: pjs.Writer = pjs.Writer.create()
    ): Uint8Array {
      // int32 bb = 1
      if (m.bb !== 0) {
        w.uint32(8);
        w.int32(m.bb);
      }

      return w.finish();
    }

    public static decode(b: Uint8Array): NestedMessage {
      const m = new NestedMessage();
      const r = pjs.Reader.create(b);
      while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag) {
          // int32 bb = 1
          case 8:
            m.bb = r.int32();
            continue;
        }
      }

      return m;
    }

    public static toJSON(m: INestedMessage): INestedMessageObj {}

    public static fromJSON(obj: INestedMessageObj): INestedMessage {}

    clone(): NestedMessage {
      return new NestedMessage(this);
    }
  }

  export namespace NestedMessage {
    export interface INestedNestedMessageObj {
      cc: number;
    }

    export interface INestedNestedMessage {
      cc: number;
    }

    export class NestedNestedMessage implements INestedNestedMessage {
      cc: number = 0;

      constructor(obj?: Partial<INestedNestedMessage>) {
        if (!obj) return;

        if (obj.cc !== undefined) {
          this.cc = obj.cc;
        }
      }

      public static encode(
        m: INestedNestedMessage,
        w: pjs.Writer = pjs.Writer.create()
      ): Uint8Array {
        // int32 cc = 1
        if (m.cc !== 0) {
          w.uint32(8);
          w.int32(m.cc);
        }

        return w.finish();
      }

      public static decode(b: Uint8Array): NestedNestedMessage {
        const m = new NestedNestedMessage();
        const r = pjs.Reader.create(b);
        while (r.pos < r.len) {
          const tag = r.uint32();
          switch (tag) {
            // int32 cc = 1
            case 8:
              m.cc = r.int32();
              continue;
          }
        }

        return m;
      }

      public static toJSON(m: INestedNestedMessage): INestedNestedMessageObj {}

      public static fromJSON(
        obj: INestedNestedMessageObj
      ): INestedNestedMessage {}

      clone(): NestedNestedMessage {
        return new NestedNestedMessage(this);
      }
    }
  }
}
