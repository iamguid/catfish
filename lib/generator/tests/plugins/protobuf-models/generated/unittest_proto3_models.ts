// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: proto3_unittest
// file: unittest_proto3.proto

import * as unittest_import_models from "unittest_import_models";

import * as unittest_import_public_models from "unittest_import_public_models";

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}

export interface TestAllTypesJSON {
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
  optionalForeignMessage: ForeignMessageJSON;
  optionalImportMessage: unittest_import_models.protobuf_unittest_import.ImportMessageJSON;
  optionalNestedEnum: string;
  optionalForeignEnum: string;
  optionalStringPiece: string;
  optionalCord: string;
  optionalPublicImportMessage: unittest_import_public_models.protobuf_unittest_import.PublicImportMessageJSON;
  optionalLazyMessage: TestAllTypes.NestedMessageJSON;
  optionalUnverifiedLazyMessage: TestAllTypes.NestedMessageJSON;
  optionalLazyImportMessage: unittest_import_models.protobuf_unittest_import.ImportMessageJSON;
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
  repeatedNestedMessage: TestAllTypes.NestedMessageJSON;
  repeatedForeignMessage: ForeignMessageJSON;
  repeatedImportMessage: unittest_import_models.protobuf_unittest_import.ImportMessageJSON;
  repeatedNestedEnum: string;
  repeatedForeignEnum: string;
  repeatedStringPiece: string;
  repeatedCord: string;
  repeatedLazyMessage: TestAllTypes.NestedMessageJSON;
  oneofUint32?: number;
  oneofNestedMessage?: TestAllTypes.NestedMessageJSON;
  oneofString?: string;
  oneofBytes?: string;
}

export class TestAllTypes {
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
  optionalForeignMessage: ForeignMessage = new ForeignMessage();
  optionalImportMessage: unittest_import_models.protobuf_unittest_import.ImportMessage =
    new unittest_import_models.protobuf_unittest_import.ImportMessage();
  optionalNestedEnum: number = TestAllTypes.NestedEnum.ZERO;
  optionalForeignEnum: number = ForeignEnum.FOREIGN_ZERO;
  optionalStringPiece: string = "";
  optionalCord: string = "";
  optionalPublicImportMessage: unittest_import_public_models.protobuf_unittest_import.PublicImportMessage =
    new unittest_import_public_models.protobuf_unittest_import.PublicImportMessage();
  optionalLazyMessage: TestAllTypes.NestedMessage =
    new TestAllTypes.NestedMessage();
  optionalUnverifiedLazyMessage: TestAllTypes.NestedMessage =
    new TestAllTypes.NestedMessage();
  optionalLazyImportMessage: unittest_import_models.protobuf_unittest_import.ImportMessage =
    new unittest_import_models.protobuf_unittest_import.ImportMessage();
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
  repeatedImportMessage: unittest_import_models.protobuf_unittest_import.ImportMessage =
    [];
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
    "optionalForeignMessage",
    "optionalImportMessage",
    "optionalNestedEnum",
    "optionalForeignEnum",
    "optionalStringPiece",
    "optionalCord",
    "optionalPublicImportMessage",
    "optionalLazyMessage",
    "optionalUnverifiedLazyMessage",
    "optionalLazyImportMessage",
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

  constructor(obj?: TestAllTypes) {
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

  public static encode(m: TestAllTypes, w: pjs.Writer): pjs.Writer {
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

    // ForeignMessage optional_foreign_message = 19
    if (m.optionalForeignMessage !== new ForeignMessage()) {
      w.uint32(154);
      ForeignMessage.encode(m.optionalForeignMessage, w);
    }

    // protobuf_unittest_import.ImportMessage optional_import_message = 20
    if (
      m.optionalImportMessage !==
      new unittest_import_models.protobuf_unittest_import.ImportMessage()
    ) {
      w.uint32(162);
      unittest_import_models.protobuf_unittest_import.ImportMessage.encode(
        m.optionalImportMessage,
        w
      );
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
      unittest_import_public_models.protobuf_unittest_import.PublicImportMessage.encode(
        m.optionalPublicImportMessage,
        w
      );
    }

    // TestAllTypes.NestedMessage optional_lazy_message = 27
    if (m.optionalLazyMessage !== new TestAllTypes.NestedMessage()) {
      w.uint32(218);
      TestAllTypes.NestedMessage.encode(m.optionalLazyMessage, w);
    }

    // TestAllTypes.NestedMessage optional_unverified_lazy_message = 28
    if (m.optionalUnverifiedLazyMessage !== new TestAllTypes.NestedMessage()) {
      w.uint32(226);
      TestAllTypes.NestedMessage.encode(m.optionalUnverifiedLazyMessage, w);
    }

    // protobuf_unittest_import.ImportMessage optional_lazy_import_message = 115
    if (
      m.optionalLazyImportMessage !==
      new unittest_import_models.protobuf_unittest_import.ImportMessage()
    ) {
      w.uint32(922);
      unittest_import_models.protobuf_unittest_import.ImportMessage.encode(
        m.optionalLazyImportMessage,
        w
      );
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
      TestAllTypes.NestedMessage.encode(m.repeatedNestedMessage, w);
    }

    // ForeignMessage repeated_foreign_message = 49
    if (m.repeatedForeignMessage !== []) {
      w.uint32(394);
      ForeignMessage.encode(m.repeatedForeignMessage, w);
    }

    // protobuf_unittest_import.ImportMessage repeated_import_message = 50
    if (m.repeatedImportMessage !== []) {
      w.uint32(402);
      unittest_import_models.protobuf_unittest_import.ImportMessage.encode(
        m.repeatedImportMessage,
        w
      );
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
      TestAllTypes.NestedMessage.encode(m.repeatedLazyMessage, w);
    }

    // oneof uint32 oneof_uint32 = 111

    // oneof TestAllTypes.NestedMessage oneof_nested_message = 112

    // oneof string oneof_string = 113

    // oneof bytes oneof_bytes = 114

    return w;
  }

  public static decode(m: TestAllTypes, r: pjs.Reader, l: number): pjs.Reader {
    while (r.pos < l) {
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

        // ForeignMessage optional_foreign_message = 19
        case 154:
          m.optionalForeignMessage = ForeignMessage.decode(r, r.uint32());
          continue;

        // protobuf_unittest_import.ImportMessage optional_import_message = 20
        case 162:
          m.optionalImportMessage =
            unittest_import_models.protobuf_unittest_import.ImportMessage.decode(
              r,
              r.uint32()
            );
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
            unittest_import_public_models.protobuf_unittest_import.PublicImportMessage.decode(
              r,
              r.uint32()
            );
          continue;

        // TestAllTypes.NestedMessage optional_lazy_message = 27
        case 218:
          m.optionalLazyMessage = TestAllTypes.NestedMessage.decode(
            r,
            r.uint32()
          );
          continue;

        // TestAllTypes.NestedMessage optional_unverified_lazy_message = 28
        case 226:
          m.optionalUnverifiedLazyMessage = TestAllTypes.NestedMessage.decode(
            r,
            r.uint32()
          );
          continue;

        // protobuf_unittest_import.ImportMessage optional_lazy_import_message = 115
        case 922:
          m.optionalLazyImportMessage =
            unittest_import_models.protobuf_unittest_import.ImportMessage.decode(
              r,
              r.uint32()
            );
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
            const value = TestAllTypes.NestedMessage.decode(r, r.uint32());

            m.repeatedNestedMessage.push(value);
          }
          continue;

        // repeated ForeignMessage repeated_foreign_message = 49
        case 394:
          {
            const value = ForeignMessage.decode(r, r.uint32());

            m.repeatedForeignMessage.push(value);
          }
          continue;

        // repeated protobuf_unittest_import.ImportMessage repeated_import_message = 50
        case 402:
          {
            const value =
              unittest_import_models.protobuf_unittest_import.ImportMessage.decode(
                r,
                r.uint32()
              );

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
            const value = TestAllTypes.NestedMessage.decode(r, r.uint32());

            m.repeatedLazyMessage.push(value);
          }
          continue;

        // uint32 oneof_uint32 = 111
        case 888:
          m.oneofUint32 = r.uint32();
          continue;

        // TestAllTypes.NestedMessage oneof_nested_message = 112
        case 898:
          m.oneofNestedMessage = TestAllTypes.NestedMessage.decode(
            r,
            r.uint32()
          );
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

    return r;
  }

  public static toJSON(m: TestAllTypes): TestAllTypesJSON {
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
      optionalForeignMessage: m.optionalForeignMessage.toJSON(),
      optionalImportMessage: m.optionalImportMessage.toJSON(),
      optionalNestedEnum: TestAllTypes.NestedEnum[m.optionalNestedEnum],
      optionalForeignEnum: ForeignEnum[m.optionalForeignEnum],
      optionalStringPiece: m.optionalStringPiece,
      optionalCord: m.optionalCord,
      optionalPublicImportMessage: m.optionalPublicImportMessage.toJSON(),
      optionalLazyMessage: m.optionalLazyMessage.toJSON(),
      optionalUnverifiedLazyMessage: m.optionalUnverifiedLazyMessage.toJSON(),
      optionalLazyImportMessage: m.optionalLazyImportMessage.toJSON(),
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

  public static fromJSON(m: TestAllTypes, obj: TestAllTypesJSON): TestAllTypes {
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
      m.optionalBytes = new pjs.util.Buffer(tmpBuffer);
    }
    m.optionalForeignMessage = new ForeignMessage().fromJSON(
      obj.optionalForeignMessage
    );
    m.optionalImportMessage =
      new unittest_import_models.protobuf_unittest_import.ImportMessage().fromJSON(
        obj.optionalImportMessage
      );
    m.optionalNestedEnum = TestAllTypes.NestedEnum[obj.optionalNestedEnum];
    m.optionalForeignEnum = ForeignEnum[obj.optionalForeignEnum];
    m.optionalStringPiece = obj.optionalStringPiece;
    m.optionalCord = obj.optionalCord;
    m.optionalPublicImportMessage =
      new unittest_import_public_models.protobuf_unittest_import.PublicImportMessage().fromJSON(
        obj.optionalPublicImportMessage
      );
    m.optionalLazyMessage = new TestAllTypes.NestedMessage().fromJSON(
      obj.optionalLazyMessage
    );
    m.optionalUnverifiedLazyMessage = new TestAllTypes.NestedMessage().fromJSON(
      obj.optionalUnverifiedLazyMessage
    );
    m.optionalLazyImportMessage =
      new unittest_import_models.protobuf_unittest_import.ImportMessage().fromJSON(
        obj.optionalLazyImportMessage
      );
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
      m.repeatedBytes = new pjs.util.Buffer(tmpBuffer);
    }
    m.repeatedNestedMessage = new TestAllTypes.NestedMessage().fromJSON(
      obj.repeatedNestedMessage
    );
    m.repeatedForeignMessage = new ForeignMessage().fromJSON(
      obj.repeatedForeignMessage
    );
    m.repeatedImportMessage =
      new unittest_import_models.protobuf_unittest_import.ImportMessage().fromJSON(
        obj.repeatedImportMessage
      );
    m.repeatedNestedEnum = TestAllTypes.NestedEnum[obj.repeatedNestedEnum];
    m.repeatedForeignEnum = ForeignEnum[obj.repeatedForeignEnum];
    m.repeatedStringPiece = obj.repeatedStringPiece;
    m.repeatedCord = obj.repeatedCord;
    m.repeatedLazyMessage = new TestAllTypes.NestedMessage().fromJSON(
      obj.repeatedLazyMessage
    );
    m.oneofUint32 = obj.oneofUint32;
    m.oneofNestedMessage = new TestAllTypes.NestedMessage().fromJSON(
      obj.oneofNestedMessage
    );
    m.oneofString = obj.oneofString;
    {
      const tmpBuffer = [];
      pjs.util.base64.decode(obj.oneofBytes, tmpBuffer, 0);
      m.oneofBytes = new pjs.util.Buffer(tmpBuffer);
    }

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return TestAllTypes.encode(this, w).finish();
  }

  deserialize(b: Uint8Array | Buffer): TestAllTypes {
    const r = new pjs.Reader(b);
    TestAllTypes.decode(this, r, r.len);
    return this;
  }

  toJSON(): TestAllTypesJSON {
    return TestAllTypes.toJSON(this);
  }

  fromJSON(obj: TestAllTypesJSON): TestAllTypes {
    return TestAllTypes.fromJSON(this, obj);
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

  export interface NestedMessageJSON {
    bb: number;
  }

  export class NestedMessage {
    bb: number = 0;

    public static fields = ["bb"];

    public get fields() {
      return NestedMessage.fields;
    }

    constructor(obj?: NestedMessage) {
      if (!obj) return;

      if (obj.bb !== undefined) {
        this.bb = obj.bb;
      }
    }

    public static encode(m: NestedMessage, w: pjs.Writer): pjs.Writer {
      // int32 bb = 1
      if (m.bb !== 0) {
        w.uint32(8);
        w.int32(m.bb);
      }

      return w;
    }

    public static decode(
      m: NestedMessage,
      r: pjs.Reader,
      l: number
    ): pjs.Reader {
      while (r.pos < l) {
        const tag = r.uint32();
        switch (tag) {
          // int32 bb = 1
          case 8:
            m.bb = r.int32();
            continue;
        }
      }

      return r;
    }

    public static toJSON(m: NestedMessage): NestedMessageJSON {
      return {
        bb: m.bb,
      };
    }

    public static fromJSON(
      m: NestedMessage,
      obj: NestedMessageJSON
    ): NestedMessage {
      m.bb = obj.bb;

      return m;
    }

    serialize(): Uint8Array | Buffer {
      const w = pjs.Writer.create();
      return NestedMessage.encode(this, w).finish();
    }

    deserialize(b: Uint8Array | Buffer): NestedMessage {
      const r = new pjs.Reader(b);
      NestedMessage.decode(this, r, r.len);
      return this;
    }

    toJSON(): NestedMessageJSON {
      return NestedMessage.toJSON(this);
    }

    fromJSON(obj: NestedMessageJSON): NestedMessage {
      return NestedMessage.fromJSON(this, obj);
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

export interface TestPackedTypesJSON {
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
  packedEnum: string;
}

export class TestPackedTypes {
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

  constructor(obj?: TestPackedTypes) {
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

  public static encode(m: TestPackedTypes, w: pjs.Writer): pjs.Writer {
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

    return w;
  }

  public static decode(
    m: TestPackedTypes,
    r: pjs.Reader,
    l: number
  ): pjs.Reader {
    while (r.pos < l) {
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

    return r;
  }

  public static toJSON(m: TestPackedTypes): TestPackedTypesJSON {
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

  public static fromJSON(
    m: TestPackedTypes,
    obj: TestPackedTypesJSON
  ): TestPackedTypes {
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

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return TestPackedTypes.encode(this, w).finish();
  }

  deserialize(b: Uint8Array | Buffer): TestPackedTypes {
    const r = new pjs.Reader(b);
    TestPackedTypes.decode(this, r, r.len);
    return this;
  }

  toJSON(): TestPackedTypesJSON {
    return TestPackedTypes.toJSON(this);
  }

  fromJSON(obj: TestPackedTypesJSON): TestPackedTypes {
    return TestPackedTypes.fromJSON(this, obj);
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

export interface TestUnpackedTypesJSON {
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
  repeatedNestedEnum: string;
}

export class TestUnpackedTypes {
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

  constructor(obj?: TestUnpackedTypes) {
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

  public static encode(m: TestUnpackedTypes, w: pjs.Writer): pjs.Writer {
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

    return w;
  }

  public static decode(
    m: TestUnpackedTypes,
    r: pjs.Reader,
    l: number
  ): pjs.Reader {
    while (r.pos < l) {
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

    return r;
  }

  public static toJSON(m: TestUnpackedTypes): TestUnpackedTypesJSON {
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

  public static fromJSON(
    m: TestUnpackedTypes,
    obj: TestUnpackedTypesJSON
  ): TestUnpackedTypes {
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

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return TestUnpackedTypes.encode(this, w).finish();
  }

  deserialize(b: Uint8Array | Buffer): TestUnpackedTypes {
    const r = new pjs.Reader(b);
    TestUnpackedTypes.decode(this, r, r.len);
    return this;
  }

  toJSON(): TestUnpackedTypesJSON {
    return TestUnpackedTypes.toJSON(this);
  }

  fromJSON(obj: TestUnpackedTypesJSON): TestUnpackedTypes {
    return TestUnpackedTypes.fromJSON(this, obj);
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

export interface NestedTestAllTypesJSON {
  child: NestedTestAllTypesJSON;
  payload: TestAllTypesJSON;
}

export class NestedTestAllTypes {
  child: NestedTestAllTypes = new NestedTestAllTypes();
  payload: TestAllTypes = new TestAllTypes();

  public static fields = ["child", "payload"];

  public get fields() {
    return NestedTestAllTypes.fields;
  }

  constructor(obj?: NestedTestAllTypes) {
    if (!obj) return;

    if (obj.child !== undefined) {
      this.child = obj.child;
    }
    if (obj.payload !== undefined) {
      this.payload = obj.payload;
    }
  }

  public static encode(m: NestedTestAllTypes, w: pjs.Writer): pjs.Writer {
    // NestedTestAllTypes child = 1
    if (m.child !== new NestedTestAllTypes()) {
      w.uint32(10);
      NestedTestAllTypes.encode(m.child, w);
    }

    // TestAllTypes payload = 2
    if (m.payload !== new TestAllTypes()) {
      w.uint32(18);
      TestAllTypes.encode(m.payload, w);
    }

    return w;
  }

  public static decode(
    m: NestedTestAllTypes,
    r: pjs.Reader,
    l: number
  ): pjs.Reader {
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // NestedTestAllTypes child = 1
        case 10:
          m.child = NestedTestAllTypes.decode(r, r.uint32());
          continue;

        // TestAllTypes payload = 2
        case 18:
          m.payload = TestAllTypes.decode(r, r.uint32());
          continue;
      }
    }

    return r;
  }

  public static toJSON(m: NestedTestAllTypes): NestedTestAllTypesJSON {
    return {
      child: m.child.toJSON(),
      payload: m.payload.toJSON(),
    };
  }

  public static fromJSON(
    m: NestedTestAllTypes,
    obj: NestedTestAllTypesJSON
  ): NestedTestAllTypes {
    m.child = new NestedTestAllTypes().fromJSON(obj.child);
    m.payload = new TestAllTypes().fromJSON(obj.payload);

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return NestedTestAllTypes.encode(this, w).finish();
  }

  deserialize(b: Uint8Array | Buffer): NestedTestAllTypes {
    const r = new pjs.Reader(b);
    NestedTestAllTypes.decode(this, r, r.len);
    return this;
  }

  toJSON(): NestedTestAllTypesJSON {
    return NestedTestAllTypes.toJSON(this);
  }

  fromJSON(obj: NestedTestAllTypesJSON): NestedTestAllTypes {
    return NestedTestAllTypes.fromJSON(this, obj);
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

export interface ForeignMessageJSON {
  c: number;
}

export class ForeignMessage {
  c: number = 0;

  public static fields = ["c"];

  public get fields() {
    return ForeignMessage.fields;
  }

  constructor(obj?: ForeignMessage) {
    if (!obj) return;

    if (obj.c !== undefined) {
      this.c = obj.c;
    }
  }

  public static encode(m: ForeignMessage, w: pjs.Writer): pjs.Writer {
    // int32 c = 1
    if (m.c !== 0) {
      w.uint32(8);
      w.int32(m.c);
    }

    return w;
  }

  public static decode(
    m: ForeignMessage,
    r: pjs.Reader,
    l: number
  ): pjs.Reader {
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 c = 1
        case 8:
          m.c = r.int32();
          continue;
      }
    }

    return r;
  }

  public static toJSON(m: ForeignMessage): ForeignMessageJSON {
    return {
      c: m.c,
    };
  }

  public static fromJSON(
    m: ForeignMessage,
    obj: ForeignMessageJSON
  ): ForeignMessage {
    m.c = obj.c;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return ForeignMessage.encode(this, w).finish();
  }

  deserialize(b: Uint8Array | Buffer): ForeignMessage {
    const r = new pjs.Reader(b);
    ForeignMessage.decode(this, r, r.len);
    return this;
  }

  toJSON(): ForeignMessageJSON {
    return ForeignMessage.toJSON(this);
  }

  fromJSON(obj: ForeignMessageJSON): ForeignMessage {
    return ForeignMessage.fromJSON(this, obj);
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

export interface TestEmptyMessageJSON {}

export class TestEmptyMessage {
  public static fields = [];

  public get fields() {
    return TestEmptyMessage.fields;
  }

  constructor(obj?: TestEmptyMessage) {
    if (!obj) return;
  }

  public static encode(m: TestEmptyMessage, w: pjs.Writer): pjs.Writer {
    return w;
  }

  public static decode(
    m: TestEmptyMessage,
    r: pjs.Reader,
    l: number
  ): pjs.Reader {
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
      }
    }

    return r;
  }

  public static toJSON(m: TestEmptyMessage): TestEmptyMessageJSON {
    return {};
  }

  public static fromJSON(
    m: TestEmptyMessage,
    obj: TestEmptyMessageJSON
  ): TestEmptyMessage {
    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return TestEmptyMessage.encode(this, w).finish();
  }

  deserialize(b: Uint8Array | Buffer): TestEmptyMessage {
    const r = new pjs.Reader(b);
    TestEmptyMessage.decode(this, r, r.len);
    return this;
  }

  toJSON(): TestEmptyMessageJSON {
    return TestEmptyMessage.toJSON(this);
  }

  fromJSON(obj: TestEmptyMessageJSON): TestEmptyMessage {
    return TestEmptyMessage.fromJSON(this, obj);
  }

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

export interface TestMessageWithDummyJSON {
  dummy: boolean;
}

export class TestMessageWithDummy {
  dummy: boolean = false;

  public static fields = ["dummy"];

  public get fields() {
    return TestMessageWithDummy.fields;
  }

  constructor(obj?: TestMessageWithDummy) {
    if (!obj) return;

    if (obj.dummy !== undefined) {
      this.dummy = obj.dummy;
    }
  }

  public static encode(m: TestMessageWithDummy, w: pjs.Writer): pjs.Writer {
    // bool dummy = 536870911
    if (m.dummy !== false) {
      w.uint32(4294967288);
      w.bool(m.dummy);
    }

    return w;
  }

  public static decode(
    m: TestMessageWithDummy,
    r: pjs.Reader,
    l: number
  ): pjs.Reader {
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // bool dummy = 536870911
        case 4294967288:
          m.dummy = r.bool();
          continue;
      }
    }

    return r;
  }

  public static toJSON(m: TestMessageWithDummy): TestMessageWithDummyJSON {
    return {
      dummy: m.dummy,
    };
  }

  public static fromJSON(
    m: TestMessageWithDummy,
    obj: TestMessageWithDummyJSON
  ): TestMessageWithDummy {
    m.dummy = obj.dummy;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return TestMessageWithDummy.encode(this, w).finish();
  }

  deserialize(b: Uint8Array | Buffer): TestMessageWithDummy {
    const r = new pjs.Reader(b);
    TestMessageWithDummy.decode(this, r, r.len);
    return this;
  }

  toJSON(): TestMessageWithDummyJSON {
    return TestMessageWithDummy.toJSON(this);
  }

  fromJSON(obj: TestMessageWithDummyJSON): TestMessageWithDummy {
    return TestMessageWithDummy.fromJSON(this, obj);
  }

  clone(): TestMessageWithDummy {
    return new TestMessageWithDummy(this);
  }
}

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}

export interface TestOneof2JSON {
  fooEnum?: string;
}

export class TestOneof2 {
  fooEnum?: number = TestOneof2.NestedEnum.UNKNOWN;

  public static fields = ["fooEnum"];

  public get fields() {
    return TestOneof2.fields;
  }

  constructor(obj?: TestOneof2) {
    if (!obj) return;

    if (obj.fooEnum !== undefined) {
      this.fooEnum = obj.fooEnum;
    }
  }

  public static encode(m: TestOneof2, w: pjs.Writer): pjs.Writer {
    // oneof TestOneof2.NestedEnum foo_enum = 6

    return w;
  }

  public static decode(m: TestOneof2, r: pjs.Reader, l: number): pjs.Reader {
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // TestOneof2.NestedEnum foo_enum = 6
        case 48:
          m.fooEnum = r.uint32();
          continue;
      }
    }

    return r;
  }

  public static toJSON(m: TestOneof2): TestOneof2JSON {
    return {
      fooEnum: TestOneof2.NestedEnum[m.fooEnum],
    };
  }

  public static fromJSON(m: TestOneof2, obj: TestOneof2JSON): TestOneof2 {
    m.fooEnum = TestOneof2.NestedEnum[obj.fooEnum];

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return TestOneof2.encode(this, w).finish();
  }

  deserialize(b: Uint8Array | Buffer): TestOneof2 {
    const r = new pjs.Reader(b);
    TestOneof2.decode(this, r, r.len);
    return this;
  }

  toJSON(): TestOneof2JSON {
    return TestOneof2.toJSON(this);
  }

  fromJSON(obj: TestOneof2JSON): TestOneof2 {
    return TestOneof2.fromJSON(this, obj);
  }

  clone(): TestOneof2 {
    return new TestOneof2(this);
  }
}

export namespace TestOneof2 {}
