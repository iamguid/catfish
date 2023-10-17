// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: proto3_lite_unittest
// file: unittest_proto3_lite.proto

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
  optionalNestedMessage: TestAllTypes.NestedMessage;
  optionalForeignMessage: ForeignMessage;
  optionalImportMessage: protobuf_unittest_import.ImportMessage;
  optionalNestedEnum: number;
  optionalForeignEnum: number;
  optionalStringPiece: string;
  optionalCord: string;
  optionalPublicImportMessage: protobuf_unittest_import.PublicImportMessage;
  optionalLazyMessage: TestAllTypes.NestedMessage;
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
  repeatedNestedMessage: TestAllTypes.NestedMessage;
  repeatedForeignMessage: ForeignMessage;
  repeatedImportMessage: protobuf_unittest_import.ImportMessage;
  repeatedNestedEnum: number;
  repeatedForeignEnum: number;
  repeatedStringPiece: string;
  repeatedCord: string;
  repeatedLazyMessage: TestAllTypes.NestedMessage;
  oneofUint32?: number;
  oneofNestedMessage?: TestAllTypes.NestedMessage;
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
  optionalBytes: Uint8Array | Buffer;
  optionalNestedMessage: TestAllTypes.NestedMessage;
  optionalForeignMessage: ForeignMessage;
  optionalImportMessage: protobuf_unittest_import.ImportMessage;
  optionalNestedEnum: number;
  optionalForeignEnum: number;
  optionalStringPiece: string;
  optionalCord: string;
  optionalPublicImportMessage: protobuf_unittest_import.PublicImportMessage;
  optionalLazyMessage: TestAllTypes.NestedMessage;
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
  repeatedBytes: Uint8Array | Buffer;
  repeatedNestedMessage: TestAllTypes.NestedMessage;
  repeatedForeignMessage: ForeignMessage;
  repeatedImportMessage: protobuf_unittest_import.ImportMessage;
  repeatedNestedEnum: number;
  repeatedForeignEnum: number;
  repeatedStringPiece: string;
  repeatedCord: string;
  repeatedLazyMessage: TestAllTypes.NestedMessage;
  oneofUint32?: number;
  oneofNestedMessage?: TestAllTypes.NestedMessage;
  oneofString?: string;
  oneofBytes?: Uint8Array | Buffer;
}

export class TestAllTypes implements ITestAllTypes {
  optionalInt32: number = 0;
  optionalInt64: pjs.Long = pjs.util.Long.fromValue(0, false);
  optionalUint32: number = 0;
  optionalUint64: pjs.Long = pjs.util.Long.fromValue(0, true);
  optionalSint32: number = 0;
  optionalSint64: pjs.Long = pjs.util.Long.fromValue(0, false);
  optionalFixed32: number = 0;
  optionalFixed64: pjs.Long = pjs.util.Long.fromValue(0, true);
  optionalSfixed32: number = 0;
  optionalSfixed64: pjs.Long = pjs.util.Long.fromValue(0, false);
  optionalFloat: number = 0;
  optionalDouble: number = 0;
  optionalBool: boolean = false;
  optionalString: string = "";
  optionalBytes: Uint8Array | Buffer = pjs.util.newBuffer(0);
  optionalNestedMessage: TestAllTypes.NestedMessage =
    new TestAllTypes.NestedMessage();
  optionalForeignMessage: ForeignMessage = new ForeignMessage();
  optionalImportMessage: protobuf_unittest_import.ImportMessage =
    new unittest_import_models.protobuf_unittest_import.ImportMessage();
  optionalNestedEnum: number = TestAllTypes.NestedEnum.ZERO;
  optionalForeignEnum: number = ForeignEnum.FOREIGN_ZERO;
  optionalStringPiece: string = "";
  optionalCord: string = "";
  optionalPublicImportMessage: protobuf_unittest_import.PublicImportMessage =
    new unittest_import_public_models.protobuf_unittest_import.PublicImportMessage();
  optionalLazyMessage: TestAllTypes.NestedMessage =
    new TestAllTypes.NestedMessage();
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
  repeatedBytes: Uint8Array | Buffer = [];
  repeatedNestedMessage: TestAllTypes.NestedMessage = [];
  repeatedForeignMessage: ForeignMessage = [];
  repeatedImportMessage: protobuf_unittest_import.ImportMessage = [];
  repeatedNestedEnum: number = [];
  repeatedForeignEnum: number = [];
  repeatedStringPiece: string = [];
  repeatedCord: string = [];
  repeatedLazyMessage: TestAllTypes.NestedMessage = [];
  oneofUint32?: number = 0;
  oneofNestedMessage?: TestAllTypes.NestedMessage =
    new TestAllTypes.NestedMessage();
  oneofString?: string = "";
  oneofBytes?: Uint8Array | Buffer = pjs.util.newBuffer(0);

  public static fields = [
    "optionalInt32",
    "optionalInt64",
    "optionalUint32",
    "optionalUint64",
    "optionalSint32",
    "optionalSint64",
    "optionalFixed32",
    "optionalFixed64",
    "optionalSfixed32",
    "optionalSfixed64",
    "optionalFloat",
    "optionalDouble",
    "optionalBool",
    "optionalString",
    "optionalBytes",
    "optionalNestedMessage",
    "optionalForeignMessage",
    "optionalImportMessage",
    "optionalNestedEnum",
    "optionalForeignEnum",
    "optionalStringPiece",
    "optionalCord",
    "optionalPublicImportMessage",
    "optionalLazyMessage",
    "repeatedInt32",
    "repeatedInt64",
    "repeatedUint32",
    "repeatedUint64",
    "repeatedSint32",
    "repeatedSint64",
    "repeatedFixed32",
    "repeatedFixed64",
    "repeatedSfixed32",
    "repeatedSfixed64",
    "repeatedFloat",
    "repeatedDouble",
    "repeatedBool",
    "repeatedString",
    "repeatedBytes",
    "repeatedNestedMessage",
    "repeatedForeignMessage",
    "repeatedImportMessage",
    "repeatedNestedEnum",
    "repeatedForeignEnum",
    "repeatedStringPiece",
    "repeatedCord",
    "repeatedLazyMessage",
    "oneofUint32",
    "oneofNestedMessage",
    "oneofString",
    "oneofBytes",
  ];

  public get fields() {
    return TestAllTypes.fields;
  }

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
    if (m.optionalInt64 !== pjs.util.Long.fromValue(0, false)) {
      w.uint32(16);
      w.int64(m.optionalInt64);
    }

    // uint32 optional_uint32 = 3
    if (m.optionalUint32 !== 0) {
      w.uint32(24);
      w.uint32(m.optionalUint32);
    }

    // uint64 optional_uint64 = 4
    if (m.optionalUint64 !== pjs.util.Long.fromValue(0, true)) {
      w.uint32(32);
      w.uint64(m.optionalUint64);
    }

    // sint32 optional_sint32 = 5
    if (m.optionalSint32 !== 0) {
      w.uint32(40);
      w.sint32(m.optionalSint32);
    }

    // sint64 optional_sint64 = 6
    if (m.optionalSint64 !== pjs.util.Long.fromValue(0, false)) {
      w.uint32(48);
      w.sint64(m.optionalSint64);
    }

    // fixed32 optional_fixed32 = 7
    if (m.optionalFixed32 !== 0) {
      w.uint32(61);
      w.fixed32(m.optionalFixed32);
    }

    // fixed64 optional_fixed64 = 8
    if (m.optionalFixed64 !== pjs.util.Long.fromValue(0, true)) {
      w.uint32(65);
      w.fixed64(m.optionalFixed64);
    }

    // sfixed32 optional_sfixed32 = 9
    if (m.optionalSfixed32 !== 0) {
      w.uint32(77);
      w.sfixed32(m.optionalSfixed32);
    }

    // sfixed64 optional_sfixed64 = 10
    if (m.optionalSfixed64 !== pjs.util.Long.fromValue(0, false)) {
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
    if (m.optionalBytes !== pjs.util.newBuffer(0)) {
      w.uint32(122);
      w.bytes(m.optionalBytes);
    }

    // TestAllTypes.NestedMessage optional_nested_message = 18
    if (m.optionalNestedMessage !== new TestAllTypes.NestedMessage()) {
      w.uint32(146);
      w.TestAllTypes.NestedMessage(m.optionalNestedMessage);
    }

    // ForeignMessage optional_foreign_message = 19
    if (m.optionalForeignMessage !== new ForeignMessage()) {
      w.uint32(154);
      w.ForeignMessage(m.optionalForeignMessage);
    }

    // protobuf_unittest_import.ImportMessage optional_import_message = 20
    if (
      m.optionalImportMessage !==
      new unittest_import_models.protobuf_unittest_import.ImportMessage()
    ) {
      w.uint32(162);
      w.protobuf_unittest_import.ImportMessage(m.optionalImportMessage);
    }

    // TestAllTypes.NestedEnum optional_nested_enum = 21
    if (m.optionalNestedEnum !== TestAllTypes.NestedEnum.ZERO) {
      w.uint32(168);
      w.uint32(m.optionalNestedEnum);
    }

    // ForeignEnum optional_foreign_enum = 22
    if (m.optionalForeignEnum !== ForeignEnum.FOREIGN_ZERO) {
      w.uint32(176);
      w.uint32(m.optionalForeignEnum);
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
    if (
      m.optionalPublicImportMessage !==
      new unittest_import_public_models.protobuf_unittest_import.PublicImportMessage()
    ) {
      w.uint32(210);
      w.protobuf_unittest_import.PublicImportMessage(
        m.optionalPublicImportMessage
      );
    }

    // TestAllTypes.NestedMessage optional_lazy_message = 27
    if (m.optionalLazyMessage !== new TestAllTypes.NestedMessage()) {
      w.uint32(218);
      w.TestAllTypes.NestedMessage(m.optionalLazyMessage);
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
      w.TestAllTypes.NestedMessage(m.repeatedNestedMessage);
    }

    // ForeignMessage repeated_foreign_message = 49
    if (m.repeatedForeignMessage !== []) {
      w.uint32(394);
      w.ForeignMessage(m.repeatedForeignMessage);
    }

    // protobuf_unittest_import.ImportMessage repeated_import_message = 50
    if (m.repeatedImportMessage !== []) {
      w.uint32(402);
      w.protobuf_unittest_import.ImportMessage(m.repeatedImportMessage);
    }

    // TestAllTypes.NestedEnum repeated_nested_enum = 51
    if (m.repeatedNestedEnum !== []) {
      w.uint32(408);
      w.uint32(m.repeatedNestedEnum);
    }

    // ForeignEnum repeated_foreign_enum = 52
    if (m.repeatedForeignEnum !== []) {
      w.uint32(416);
      w.uint32(m.repeatedForeignEnum);
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
      w.TestAllTypes.NestedMessage(m.repeatedLazyMessage);
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
          m.optionalNestedMessage = r.TestAllTypes.NestedMessage();
          continue;

        // ForeignMessage optional_foreign_message = 19
        case 154:
          m.optionalForeignMessage = r.ForeignMessage();
          continue;

        // protobuf_unittest_import.ImportMessage optional_import_message = 20
        case 162:
          m.optionalImportMessage = r.protobuf_unittest_import.ImportMessage();
          continue;

        // TestAllTypes.NestedEnum optional_nested_enum = 21
        case 168:
          m.optionalNestedEnum = r.uint32();
          continue;

        // ForeignEnum optional_foreign_enum = 22
        case 176:
          m.optionalForeignEnum = r.uint32();
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
            r.protobuf_unittest_import.PublicImportMessage();
          continue;

        // TestAllTypes.NestedMessage optional_lazy_message = 27
        case 218:
          m.optionalLazyMessage = r.TestAllTypes.NestedMessage();
          continue;

        // repeated int32 repeated_int32 = 31
        case 248:
          {
            const value = r.int32();

            m.repeatedInt32.push(value);
          }
          continue;

        // repeated int64 repeated_int64 = 32
        case 256:
          {
            const value = r.int64();

            m.repeatedInt64.push(value);
          }
          continue;

        // repeated uint32 repeated_uint32 = 33
        case 264:
          {
            const value = r.uint32();

            m.repeatedUint32.push(value);
          }
          continue;

        // repeated uint64 repeated_uint64 = 34
        case 272:
          {
            const value = r.uint64();

            m.repeatedUint64.push(value);
          }
          continue;

        // repeated sint32 repeated_sint32 = 35
        case 280:
          {
            const value = r.sint32();

            m.repeatedSint32.push(value);
          }
          continue;

        // repeated sint64 repeated_sint64 = 36
        case 288:
          {
            const value = r.sint64();

            m.repeatedSint64.push(value);
          }
          continue;

        // repeated fixed32 repeated_fixed32 = 37
        case 301:
          {
            const value = r.fixed32();

            m.repeatedFixed32.push(value);
          }
          continue;

        // repeated fixed64 repeated_fixed64 = 38
        case 305:
          {
            const value = r.fixed64();

            m.repeatedFixed64.push(value);
          }
          continue;

        // repeated sfixed32 repeated_sfixed32 = 39
        case 317:
          {
            const value = r.sfixed32();

            m.repeatedSfixed32.push(value);
          }
          continue;

        // repeated sfixed64 repeated_sfixed64 = 40
        case 321:
          {
            const value = r.sfixed64();

            m.repeatedSfixed64.push(value);
          }
          continue;

        // repeated float repeated_float = 41
        case 333:
          {
            const value = r.float();

            m.repeatedFloat.push(value);
          }
          continue;

        // repeated double repeated_double = 42
        case 337:
          {
            const value = r.double();

            m.repeatedDouble.push(value);
          }
          continue;

        // repeated bool repeated_bool = 43
        case 344:
          {
            const value = r.bool();

            m.repeatedBool.push(value);
          }
          continue;

        // repeated string repeated_string = 44
        case 354:
          {
            const value = r.string();

            m.repeatedString.push(value);
          }
          continue;

        // repeated bytes repeated_bytes = 45
        case 362:
          {
            const value = r.bytes();

            m.repeatedBytes.push(value);
          }
          continue;

        // repeated TestAllTypes.NestedMessage repeated_nested_message = 48
        case 386:
          {
            const value = r.TestAllTypes.NestedMessage();

            m.repeatedNestedMessage.push(value);
          }
          continue;

        // repeated ForeignMessage repeated_foreign_message = 49
        case 394:
          {
            const value = r.ForeignMessage();

            m.repeatedForeignMessage.push(value);
          }
          continue;

        // repeated protobuf_unittest_import.ImportMessage repeated_import_message = 50
        case 402:
          {
            const value = r.protobuf_unittest_import.ImportMessage();

            m.repeatedImportMessage.push(value);
          }
          continue;

        // repeated TestAllTypes.NestedEnum repeated_nested_enum = 51
        case 408:
          {
            const value = r.uint32();

            m.repeatedNestedEnum.push(value);
          }
          continue;

        // repeated ForeignEnum repeated_foreign_enum = 52
        case 416:
          {
            const value = r.uint32();

            m.repeatedForeignEnum.push(value);
          }
          continue;

        // repeated string repeated_string_piece = 54
        case 434:
          {
            const value = r.string();

            m.repeatedStringPiece.push(value);
          }
          continue;

        // repeated string repeated_cord = 55
        case 442:
          {
            const value = r.string();

            m.repeatedCord.push(value);
          }
          continue;

        // repeated TestAllTypes.NestedMessage repeated_lazy_message = 57
        case 458:
          {
            const value = r.TestAllTypes.NestedMessage();

            m.repeatedLazyMessage.push(value);
          }
          continue;

        // uint32 oneof_uint32 = 111
        case 888:
          m.oneofUint32 = r.uint32();
          continue;

        // TestAllTypes.NestedMessage oneof_nested_message = 112
        case 898:
          m.oneofNestedMessage = r.TestAllTypes.NestedMessage();
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

  public static toJSON(m: ITestAllTypes): ITestAllTypesObj {
    return {
      optionalInt32: m.optionalInt32,
      optionalInt64: m.optionalInt64.toString(),
      optionalUint32: m.optionalUint32,
      optionalUint64: m.optionalUint64.toString(),
      optionalSint32: m.optionalSint32,
      optionalSint64: m.optionalSint64.toString(),
      optionalFixed32: m.optionalFixed32,
      optionalFixed64: m.optionalFixed64.toString(),
      optionalSfixed32: m.optionalSfixed32,
      optionalSfixed64: m.optionalSfixed64.toString(),
      optionalFloat: m.optionalFloat,
      optionalDouble: m.optionalDouble,
      optionalBool: m.optionalBool,
      optionalString: m.optionalString,
      optionalBytes: pjs.util.base64.encode(
        m.optionalBytes,
        0,
        m.optionalBytes.length
      ),
      optionalNestedMessage: m.optionalNestedMessage.toJSON(),
      optionalForeignMessage: m.optionalForeignMessage.toJSON(),
      optionalImportMessage: m.optionalImportMessage.toJSON(),
      optionalNestedEnum: TestAllTypes.NestedEnum[m.optionalNestedEnum],
      optionalForeignEnum: ForeignEnum[m.optionalForeignEnum],
      optionalStringPiece: m.optionalStringPiece,
      optionalCord: m.optionalCord,
      optionalPublicImportMessage: m.optionalPublicImportMessage.toJSON(),
      optionalLazyMessage: m.optionalLazyMessage.toJSON(),
      repeatedInt32: m.repeatedInt32,
      repeatedInt64: m.repeatedInt64.toString(),
      repeatedUint32: m.repeatedUint32,
      repeatedUint64: m.repeatedUint64.toString(),
      repeatedSint32: m.repeatedSint32,
      repeatedSint64: m.repeatedSint64.toString(),
      repeatedFixed32: m.repeatedFixed32,
      repeatedFixed64: m.repeatedFixed64.toString(),
      repeatedSfixed32: m.repeatedSfixed32,
      repeatedSfixed64: m.repeatedSfixed64.toString(),
      repeatedFloat: m.repeatedFloat,
      repeatedDouble: m.repeatedDouble,
      repeatedBool: m.repeatedBool,
      repeatedString: m.repeatedString,
      repeatedBytes: pjs.util.base64.encode(
        m.repeatedBytes,
        0,
        m.repeatedBytes.length
      ),
      repeatedNestedMessage: m.repeatedNestedMessage.toJSON(),
      repeatedForeignMessage: m.repeatedForeignMessage.toJSON(),
      repeatedImportMessage: m.repeatedImportMessage.toJSON(),
      repeatedNestedEnum: TestAllTypes.NestedEnum[m.repeatedNestedEnum],
      repeatedForeignEnum: ForeignEnum[m.repeatedForeignEnum],
      repeatedStringPiece: m.repeatedStringPiece,
      repeatedCord: m.repeatedCord,
      repeatedLazyMessage: m.repeatedLazyMessage.toJSON(),
      oneofUint32: m.oneofUint32,
      oneofNestedMessage: m.oneofNestedMessage.toJSON(),
      oneofString: m.oneofString,
      oneofBytes: pjs.util.base64.encode(m.oneofBytes, 0, m.oneofBytes.length),
    };
  }

  public static fromJSON(obj: ITestAllTypesObj): ITestAllTypes {
    const m = new TestAllTypes();

    m.optionalInt32 = obj.optionalInt32;
    m.optionalInt64 = pjs.util.Long.fromValue(obj.optionalInt64, false);
    m.optionalUint32 = obj.optionalUint32;
    m.optionalUint64 = pjs.util.Long.fromValue(obj.optionalUint64, true);
    m.optionalSint32 = obj.optionalSint32;
    m.optionalSint64 = pjs.util.Long.fromValue(obj.optionalSint64, false);
    m.optionalFixed32 = obj.optionalFixed32;
    m.optionalFixed64 = pjs.util.Long.fromValue(obj.optionalFixed64, true);
    m.optionalSfixed32 = obj.optionalSfixed32;
    m.optionalSfixed64 = pjs.util.Long.fromValue(obj.optionalSfixed64, false);
    m.optionalFloat = obj.optionalFloat;
    m.optionalDouble = obj.optionalDouble;
    m.optionalBool = obj.optionalBool;
    m.optionalString = obj.optionalString;
    {
      const tmpBuffer = [];
      pjs.util.base64.decode(obj.optionalBytes, tmpBuffer, 0);
      m.optionalBytes = pjs.util.Buffer.from(tmpBuffer);
    }
    m.optionalNestedMessage.fromJSON(obj.optionalNestedMessage);
    m.optionalForeignMessage.fromJSON(obj.optionalForeignMessage);
    m.optionalImportMessage.fromJSON(obj.optionalImportMessage);
    m.optionalNestedEnum = TestAllTypes.NestedEnum[obj.optionalNestedEnum];
    m.optionalForeignEnum = ForeignEnum[obj.optionalForeignEnum];
    m.optionalStringPiece = obj.optionalStringPiece;
    m.optionalCord = obj.optionalCord;
    m.optionalPublicImportMessage.fromJSON(obj.optionalPublicImportMessage);
    m.optionalLazyMessage.fromJSON(obj.optionalLazyMessage);
    m.repeatedInt32 = obj.repeatedInt32;
    m.repeatedInt64 = pjs.util.Long.fromValue(obj.repeatedInt64, false);
    m.repeatedUint32 = obj.repeatedUint32;
    m.repeatedUint64 = pjs.util.Long.fromValue(obj.repeatedUint64, true);
    m.repeatedSint32 = obj.repeatedSint32;
    m.repeatedSint64 = pjs.util.Long.fromValue(obj.repeatedSint64, false);
    m.repeatedFixed32 = obj.repeatedFixed32;
    m.repeatedFixed64 = pjs.util.Long.fromValue(obj.repeatedFixed64, true);
    m.repeatedSfixed32 = obj.repeatedSfixed32;
    m.repeatedSfixed64 = pjs.util.Long.fromValue(obj.repeatedSfixed64, false);
    m.repeatedFloat = obj.repeatedFloat;
    m.repeatedDouble = obj.repeatedDouble;
    m.repeatedBool = obj.repeatedBool;
    m.repeatedString = obj.repeatedString;
    {
      const tmpBuffer = [];
      pjs.util.base64.decode(obj.repeatedBytes, tmpBuffer, 0);
      m.repeatedBytes = pjs.util.Buffer.from(tmpBuffer);
    }
    m.repeatedNestedMessage.fromJSON(obj.repeatedNestedMessage);
    m.repeatedForeignMessage.fromJSON(obj.repeatedForeignMessage);
    m.repeatedImportMessage.fromJSON(obj.repeatedImportMessage);
    m.repeatedNestedEnum = TestAllTypes.NestedEnum[obj.repeatedNestedEnum];
    m.repeatedForeignEnum = ForeignEnum[obj.repeatedForeignEnum];
    m.repeatedStringPiece = obj.repeatedStringPiece;
    m.repeatedCord = obj.repeatedCord;
    m.repeatedLazyMessage.fromJSON(obj.repeatedLazyMessage);
    m.oneofUint32 = obj.oneofUint32;
    m.oneofNestedMessage.fromJSON(obj.oneofNestedMessage);
    m.oneofString = obj.oneofString;
    {
      const tmpBuffer = [];
      pjs.util.base64.decode(obj.oneofBytes, tmpBuffer, 0);
      m.oneofBytes = pjs.util.Buffer.from(tmpBuffer);
    }

    return m;
  }

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

    public static fields = ["bb"];

    public get fields() {
      return NestedMessage.fields;
    }

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

    public static toJSON(m: INestedMessage): INestedMessageObj {
      return {
        bb: m.bb,
      };
    }

    public static fromJSON(obj: INestedMessageObj): INestedMessage {
      const m = new NestedMessage();

      m.bb = obj.bb;

      return m;
    }

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
  packedEnum: number;
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
  packedEnum: number;
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
  packedEnum: number = [];

  public static fields = [
    "packedInt32",
    "packedInt64",
    "packedUint32",
    "packedUint64",
    "packedSint32",
    "packedSint64",
    "packedFixed32",
    "packedFixed64",
    "packedSfixed32",
    "packedSfixed64",
    "packedFloat",
    "packedDouble",
    "packedBool",
    "packedEnum",
  ];

  public get fields() {
    return TestPackedTypes.fields;
  }

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
      w.uint32(824);
      w.uint32(m.packedEnum);
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
          {
            const value = r.int32();

            m.packedInt32.push(value);
          }
          continue;

        // repeated int64 packed_int64 = 91
        case 728:
          {
            const value = r.int64();

            m.packedInt64.push(value);
          }
          continue;

        // repeated uint32 packed_uint32 = 92
        case 736:
          {
            const value = r.uint32();

            m.packedUint32.push(value);
          }
          continue;

        // repeated uint64 packed_uint64 = 93
        case 744:
          {
            const value = r.uint64();

            m.packedUint64.push(value);
          }
          continue;

        // repeated sint32 packed_sint32 = 94
        case 752:
          {
            const value = r.sint32();

            m.packedSint32.push(value);
          }
          continue;

        // repeated sint64 packed_sint64 = 95
        case 760:
          {
            const value = r.sint64();

            m.packedSint64.push(value);
          }
          continue;

        // repeated fixed32 packed_fixed32 = 96
        case 773:
          {
            const value = r.fixed32();

            m.packedFixed32.push(value);
          }
          continue;

        // repeated fixed64 packed_fixed64 = 97
        case 777:
          {
            const value = r.fixed64();

            m.packedFixed64.push(value);
          }
          continue;

        // repeated sfixed32 packed_sfixed32 = 98
        case 789:
          {
            const value = r.sfixed32();

            m.packedSfixed32.push(value);
          }
          continue;

        // repeated sfixed64 packed_sfixed64 = 99
        case 793:
          {
            const value = r.sfixed64();

            m.packedSfixed64.push(value);
          }
          continue;

        // repeated float packed_float = 100
        case 805:
          {
            const value = r.float();

            m.packedFloat.push(value);
          }
          continue;

        // repeated double packed_double = 101
        case 809:
          {
            const value = r.double();

            m.packedDouble.push(value);
          }
          continue;

        // repeated bool packed_bool = 102
        case 816:
          {
            const value = r.bool();

            m.packedBool.push(value);
          }
          continue;

        // repeated ForeignEnum packed_enum = 103
        case 824:
          {
            const value = r.uint32();

            m.packedEnum.push(value);
          }
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: ITestPackedTypes): ITestPackedTypesObj {
    return {
      packedInt32: m.packedInt32,
      packedInt64: m.packedInt64.toString(),
      packedUint32: m.packedUint32,
      packedUint64: m.packedUint64.toString(),
      packedSint32: m.packedSint32,
      packedSint64: m.packedSint64.toString(),
      packedFixed32: m.packedFixed32,
      packedFixed64: m.packedFixed64.toString(),
      packedSfixed32: m.packedSfixed32,
      packedSfixed64: m.packedSfixed64.toString(),
      packedFloat: m.packedFloat,
      packedDouble: m.packedDouble,
      packedBool: m.packedBool,
      packedEnum: ForeignEnum[m.packedEnum],
    };
  }

  public static fromJSON(obj: ITestPackedTypesObj): ITestPackedTypes {
    const m = new TestPackedTypes();

    m.packedInt32 = obj.packedInt32;
    m.packedInt64 = pjs.util.Long.fromValue(obj.packedInt64, false);
    m.packedUint32 = obj.packedUint32;
    m.packedUint64 = pjs.util.Long.fromValue(obj.packedUint64, true);
    m.packedSint32 = obj.packedSint32;
    m.packedSint64 = pjs.util.Long.fromValue(obj.packedSint64, false);
    m.packedFixed32 = obj.packedFixed32;
    m.packedFixed64 = pjs.util.Long.fromValue(obj.packedFixed64, true);
    m.packedSfixed32 = obj.packedSfixed32;
    m.packedSfixed64 = pjs.util.Long.fromValue(obj.packedSfixed64, false);
    m.packedFloat = obj.packedFloat;
    m.packedDouble = obj.packedDouble;
    m.packedBool = obj.packedBool;
    m.packedEnum = ForeignEnum[obj.packedEnum];

    return m;
  }

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
  repeatedNestedEnum: number;
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
  repeatedNestedEnum: number;
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
  repeatedNestedEnum: number = [];

  public static fields = [
    "repeatedInt32",
    "repeatedInt64",
    "repeatedUint32",
    "repeatedUint64",
    "repeatedSint32",
    "repeatedSint64",
    "repeatedFixed32",
    "repeatedFixed64",
    "repeatedSfixed32",
    "repeatedSfixed64",
    "repeatedFloat",
    "repeatedDouble",
    "repeatedBool",
    "repeatedNestedEnum",
  ];

  public get fields() {
    return TestUnpackedTypes.fields;
  }

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
      w.uint32(112);
      w.uint32(m.repeatedNestedEnum);
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
          {
            const value = r.int32();

            m.repeatedInt32.push(value);
          }
          continue;

        // repeated int64 repeated_int64 = 2
        case 16:
          {
            const value = r.int64();

            m.repeatedInt64.push(value);
          }
          continue;

        // repeated uint32 repeated_uint32 = 3
        case 24:
          {
            const value = r.uint32();

            m.repeatedUint32.push(value);
          }
          continue;

        // repeated uint64 repeated_uint64 = 4
        case 32:
          {
            const value = r.uint64();

            m.repeatedUint64.push(value);
          }
          continue;

        // repeated sint32 repeated_sint32 = 5
        case 40:
          {
            const value = r.sint32();

            m.repeatedSint32.push(value);
          }
          continue;

        // repeated sint64 repeated_sint64 = 6
        case 48:
          {
            const value = r.sint64();

            m.repeatedSint64.push(value);
          }
          continue;

        // repeated fixed32 repeated_fixed32 = 7
        case 61:
          {
            const value = r.fixed32();

            m.repeatedFixed32.push(value);
          }
          continue;

        // repeated fixed64 repeated_fixed64 = 8
        case 65:
          {
            const value = r.fixed64();

            m.repeatedFixed64.push(value);
          }
          continue;

        // repeated sfixed32 repeated_sfixed32 = 9
        case 77:
          {
            const value = r.sfixed32();

            m.repeatedSfixed32.push(value);
          }
          continue;

        // repeated sfixed64 repeated_sfixed64 = 10
        case 81:
          {
            const value = r.sfixed64();

            m.repeatedSfixed64.push(value);
          }
          continue;

        // repeated float repeated_float = 11
        case 93:
          {
            const value = r.float();

            m.repeatedFloat.push(value);
          }
          continue;

        // repeated double repeated_double = 12
        case 97:
          {
            const value = r.double();

            m.repeatedDouble.push(value);
          }
          continue;

        // repeated bool repeated_bool = 13
        case 104:
          {
            const value = r.bool();

            m.repeatedBool.push(value);
          }
          continue;

        // repeated TestAllTypes.NestedEnum repeated_nested_enum = 14
        case 112:
          {
            const value = r.uint32();

            m.repeatedNestedEnum.push(value);
          }
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: ITestUnpackedTypes): ITestUnpackedTypesObj {
    return {
      repeatedInt32: m.repeatedInt32,
      repeatedInt64: m.repeatedInt64.toString(),
      repeatedUint32: m.repeatedUint32,
      repeatedUint64: m.repeatedUint64.toString(),
      repeatedSint32: m.repeatedSint32,
      repeatedSint64: m.repeatedSint64.toString(),
      repeatedFixed32: m.repeatedFixed32,
      repeatedFixed64: m.repeatedFixed64.toString(),
      repeatedSfixed32: m.repeatedSfixed32,
      repeatedSfixed64: m.repeatedSfixed64.toString(),
      repeatedFloat: m.repeatedFloat,
      repeatedDouble: m.repeatedDouble,
      repeatedBool: m.repeatedBool,
      repeatedNestedEnum: TestAllTypes.NestedEnum[m.repeatedNestedEnum],
    };
  }

  public static fromJSON(obj: ITestUnpackedTypesObj): ITestUnpackedTypes {
    const m = new TestUnpackedTypes();

    m.repeatedInt32 = obj.repeatedInt32;
    m.repeatedInt64 = pjs.util.Long.fromValue(obj.repeatedInt64, false);
    m.repeatedUint32 = obj.repeatedUint32;
    m.repeatedUint64 = pjs.util.Long.fromValue(obj.repeatedUint64, true);
    m.repeatedSint32 = obj.repeatedSint32;
    m.repeatedSint64 = pjs.util.Long.fromValue(obj.repeatedSint64, false);
    m.repeatedFixed32 = obj.repeatedFixed32;
    m.repeatedFixed64 = pjs.util.Long.fromValue(obj.repeatedFixed64, true);
    m.repeatedSfixed32 = obj.repeatedSfixed32;
    m.repeatedSfixed64 = pjs.util.Long.fromValue(obj.repeatedSfixed64, false);
    m.repeatedFloat = obj.repeatedFloat;
    m.repeatedDouble = obj.repeatedDouble;
    m.repeatedBool = obj.repeatedBool;
    m.repeatedNestedEnum = TestAllTypes.NestedEnum[obj.repeatedNestedEnum];

    return m;
  }

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
  child: NestedTestAllTypes;
  payload: TestAllTypes;
}

export interface INestedTestAllTypes {
  child: NestedTestAllTypes;
  payload: TestAllTypes;
}

export class NestedTestAllTypes implements INestedTestAllTypes {
  child: NestedTestAllTypes = new NestedTestAllTypes();
  payload: TestAllTypes = new TestAllTypes();

  public static fields = ["child", "payload"];

  public get fields() {
    return NestedTestAllTypes.fields;
  }

  constructor(obj?: Partial<INestedTestAllTypes>) {
    if (!obj) return;

    if (obj.child !== undefined) {
      this.child = obj.child;
    }
    if (obj.payload !== undefined) {
      this.payload = obj.payload;
    }
  }

  public static encode(
    m: INestedTestAllTypes,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // NestedTestAllTypes child = 1
    if (m.child !== new NestedTestAllTypes()) {
      w.uint32(10);
      w.NestedTestAllTypes(m.child);
    }

    // TestAllTypes payload = 2
    if (m.payload !== new TestAllTypes()) {
      w.uint32(18);
      w.TestAllTypes(m.payload);
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
          m.child = r.NestedTestAllTypes();
          continue;

        // TestAllTypes payload = 2
        case 18:
          m.payload = r.TestAllTypes();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: INestedTestAllTypes): INestedTestAllTypesObj {
    return {
      child: m.child.toJSON(),
      payload: m.payload.toJSON(),
    };
  }

  public static fromJSON(obj: INestedTestAllTypesObj): INestedTestAllTypes {
    const m = new NestedTestAllTypes();

    m.child.fromJSON(obj.child);
    m.payload.fromJSON(obj.payload);

    return m;
  }

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

  public static fields = ["c"];

  public get fields() {
    return ForeignMessage.fields;
  }

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

  public static toJSON(m: IForeignMessage): IForeignMessageObj {
    return {
      c: m.c,
    };
  }

  public static fromJSON(obj: IForeignMessageObj): IForeignMessage {
    const m = new ForeignMessage();

    m.c = obj.c;

    return m;
  }

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
  public static fields = [];

  public get fields() {
    return TestEmptyMessage.fields;
  }

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

  public static toJSON(m: ITestEmptyMessage): ITestEmptyMessageObj {
    return {};
  }

  public static fromJSON(obj: ITestEmptyMessageObj): ITestEmptyMessage {
    const m = new TestEmptyMessage();

    return m;
  }

  clone(): TestEmptyMessage {
    return new TestEmptyMessage(this);
  }
}
