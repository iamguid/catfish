// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_test_messages.proto3
// file: test_messages_proto3.proto

import * as google_protobuf_any_models from "google/protobuf/any_models";

import * as google_protobuf_duration_models from "google/protobuf/duration_models";

import * as google_protobuf_field_mask_models from "google/protobuf/field_mask_models";

import * as google_protobuf_struct_models from "google/protobuf/struct_models";

import * as google_protobuf_timestamp_models from "google/protobuf/timestamp_models";

import * as google_protobuf_wrappers_models from "google/protobuf/wrappers_models";

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export enum ForeignEnum {
  FOREIGN_FOO = 0,
  FOREIGN_BAR = 1,
  FOREIGN_BAZ = 2,
}

export interface TestAllTypesProto3JSON {
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
  optionalNestedMessage: TestAllTypesProto3.NestedMessageJSON;
  optionalForeignMessage: ForeignMessageJSON;
  optionalNestedEnum: string;
  optionalForeignEnum: string;
  optionalAliasedEnum: string;
  optionalStringPiece: string;
  optionalCord: string;
  recursiveMessage: TestAllTypesProto3JSON;
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
  repeatedNestedMessage: TestAllTypesProto3.NestedMessageJSON;
  repeatedForeignMessage: ForeignMessageJSON;
  repeatedNestedEnum: string;
  repeatedForeignEnum: string;
  repeatedStringPiece: string;
  repeatedCord: string;
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
  packedNestedEnum: string;
  unpackedInt32: number;
  unpackedInt64: string;
  unpackedUint32: number;
  unpackedUint64: string;
  unpackedSint32: number;
  unpackedSint64: string;
  unpackedFixed32: number;
  unpackedFixed64: string;
  unpackedSfixed32: number;
  unpackedSfixed64: string;
  unpackedFloat: number;
  unpackedDouble: number;
  unpackedBool: boolean;
  unpackedNestedEnum: string;
  mapInt32Int32: Record<number, number>;
  mapInt64Int64: Record<string, string>;
  mapUint32Uint32: Record<number, number>;
  mapUint64Uint64: Record<string, string>;
  mapSint32Sint32: Record<number, number>;
  mapSint64Sint64: Record<string, string>;
  mapFixed32Fixed32: Record<number, number>;
  mapFixed64Fixed64: Record<string, string>;
  mapSfixed32Sfixed32: Record<number, number>;
  mapSfixed64Sfixed64: Record<string, string>;
  mapInt32Float: Record<number, number>;
  mapInt32Double: Record<number, number>;
  mapBoolBool: Record<boolean, boolean>;
  mapStringString: Record<string, string>;
  mapStringBytes: Record<string, string>;
  mapStringNestedMessage: Record<string, TestAllTypesProto3.NestedMessageJSON>;
  mapStringForeignMessage: Record<string, ForeignMessageJSON>;
  mapStringNestedEnum: Record<string, string>;
  mapStringForeignEnum: Record<string, string>;
  // NOT IMPLEMENTED
  optionalBoolWrapper: google_protobuf_wrappers_models.google.protobuf.BoolValueJSON;
  optionalInt32Wrapper: google_protobuf_wrappers_models.google.protobuf.Int32ValueJSON;
  optionalInt64Wrapper: google_protobuf_wrappers_models.google.protobuf.Int64ValueJSON;
  optionalUint32Wrapper: google_protobuf_wrappers_models.google.protobuf.UInt32ValueJSON;
  optionalUint64Wrapper: google_protobuf_wrappers_models.google.protobuf.UInt64ValueJSON;
  optionalFloatWrapper: google_protobuf_wrappers_models.google.protobuf.FloatValueJSON;
  optionalDoubleWrapper: google_protobuf_wrappers_models.google.protobuf.DoubleValueJSON;
  optionalStringWrapper: google_protobuf_wrappers_models.google.protobuf.StringValueJSON;
  optionalBytesWrapper: google_protobuf_wrappers_models.google.protobuf.BytesValueJSON;
  repeatedBoolWrapper: google_protobuf_wrappers_models.google.protobuf.BoolValueJSON;
  repeatedInt32Wrapper: google_protobuf_wrappers_models.google.protobuf.Int32ValueJSON;
  repeatedInt64Wrapper: google_protobuf_wrappers_models.google.protobuf.Int64ValueJSON;
  repeatedUint32Wrapper: google_protobuf_wrappers_models.google.protobuf.UInt32ValueJSON;
  repeatedUint64Wrapper: google_protobuf_wrappers_models.google.protobuf.UInt64ValueJSON;
  repeatedFloatWrapper: google_protobuf_wrappers_models.google.protobuf.FloatValueJSON;
  repeatedDoubleWrapper: google_protobuf_wrappers_models.google.protobuf.DoubleValueJSON;
  repeatedStringWrapper: google_protobuf_wrappers_models.google.protobuf.StringValueJSON;
  repeatedBytesWrapper: google_protobuf_wrappers_models.google.protobuf.BytesValueJSON;
  optionalDuration: google_protobuf_duration_models.google.protobuf.DurationJSON;
  optionalTimestamp: google_protobuf_timestamp_models.google.protobuf.TimestampJSON;
  optionalFieldMask: google_protobuf_field_mask_models.google.protobuf.FieldMaskJSON;
  optionalStruct: google_protobuf_struct_models.google.protobuf.StructJSON;
  optionalAny: google_protobuf_any_models.google.protobuf.AnyJSON;
  optionalValue: google_protobuf_struct_models.google.protobuf.ValueJSON;
  optionalNullValue: string;
  repeatedDuration: google_protobuf_duration_models.google.protobuf.DurationJSON;
  repeatedTimestamp: google_protobuf_timestamp_models.google.protobuf.TimestampJSON;
  repeatedFieldmask: google_protobuf_field_mask_models.google.protobuf.FieldMaskJSON;
  repeatedStruct: google_protobuf_struct_models.google.protobuf.StructJSON;
  repeatedAny: google_protobuf_any_models.google.protobuf.AnyJSON;
  repeatedValue: google_protobuf_struct_models.google.protobuf.ValueJSON;
  repeatedListValue: google_protobuf_struct_models.google.protobuf.ListValueJSON;
  fieldname1: number;
  fieldName2: number;
  FieldName3: number;
  field_name4_: number;
  field0name5: number;
  field0Name6: number;
  fieldName7: number;
  FieldName8: number;
  fieldName9: number;
  FieldName10: number;
  FIELDNAME11: number;
  FIELDName12: number;
  _fieldName13: number;
  _FieldName14: number;
  field_name15: number;
  field_Name16: number;
  fieldName17_: number;
  FieldName18_: number;
}

export class TestAllTypesProto3 {
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
  optionalNestedMessage: TestAllTypesProto3.NestedMessage =
    new TestAllTypesProto3.NestedMessage();
  optionalForeignMessage: ForeignMessage = new ForeignMessage();
  optionalNestedEnum: number = TestAllTypesProto3.NestedEnum.FOO;
  optionalForeignEnum: number = ForeignEnum.FOREIGN_FOO;
  optionalAliasedEnum: number = TestAllTypesProto3.AliasedEnum.ALIAS_FOO;
  optionalStringPiece: string = "";
  optionalCord: string = "";
  recursiveMessage: TestAllTypesProto3 = new TestAllTypesProto3();
  repeatedInt32: number = 0;
  repeatedInt64: pjs.Long = pjs.util.Long.fromValue(0, false);
  repeatedUint32: number = 0;
  repeatedUint64: pjs.Long = pjs.util.Long.fromValue(0, true);
  repeatedSint32: number = 0;
  repeatedSint64: pjs.Long = pjs.util.Long.fromValue(0, false);
  repeatedFixed32: number = 0;
  repeatedFixed64: pjs.Long = pjs.util.Long.fromValue(0, true);
  repeatedSfixed32: number = 0;
  repeatedSfixed64: pjs.Long = pjs.util.Long.fromValue(0, false);
  repeatedFloat: number = 0;
  repeatedDouble: number = 0;
  repeatedBool: boolean = false;
  repeatedString: string = "";
  repeatedBytes: Uint8Array | Buffer = pjs.util.newBuffer(0);
  repeatedNestedMessage: TestAllTypesProto3.NestedMessage =
    new TestAllTypesProto3.NestedMessage();
  repeatedForeignMessage: ForeignMessage = new ForeignMessage();
  repeatedNestedEnum: number = TestAllTypesProto3.NestedEnum.FOO;
  repeatedForeignEnum: number = ForeignEnum.FOREIGN_FOO;
  repeatedStringPiece: string = "";
  repeatedCord: string = "";
  packedInt32: number = 0;
  packedInt64: pjs.Long = pjs.util.Long.fromValue(0, false);
  packedUint32: number = 0;
  packedUint64: pjs.Long = pjs.util.Long.fromValue(0, true);
  packedSint32: number = 0;
  packedSint64: pjs.Long = pjs.util.Long.fromValue(0, false);
  packedFixed32: number = 0;
  packedFixed64: pjs.Long = pjs.util.Long.fromValue(0, true);
  packedSfixed32: number = 0;
  packedSfixed64: pjs.Long = pjs.util.Long.fromValue(0, false);
  packedFloat: number = 0;
  packedDouble: number = 0;
  packedBool: boolean = false;
  packedNestedEnum: number = TestAllTypesProto3.NestedEnum.FOO;
  unpackedInt32: number = 0;
  unpackedInt64: pjs.Long = pjs.util.Long.fromValue(0, false);
  unpackedUint32: number = 0;
  unpackedUint64: pjs.Long = pjs.util.Long.fromValue(0, true);
  unpackedSint32: number = 0;
  unpackedSint64: pjs.Long = pjs.util.Long.fromValue(0, false);
  unpackedFixed32: number = 0;
  unpackedFixed64: pjs.Long = pjs.util.Long.fromValue(0, true);
  unpackedSfixed32: number = 0;
  unpackedSfixed64: pjs.Long = pjs.util.Long.fromValue(0, false);
  unpackedFloat: number = 0;
  unpackedDouble: number = 0;
  unpackedBool: boolean = false;
  unpackedNestedEnum: number = TestAllTypesProto3.NestedEnum.FOO;
  mapInt32Int32: Map<number, number> = new Map();
  mapInt64Int64: Map<pjs.Long, pjs.Long> = new Map();
  mapUint32Uint32: Map<number, number> = new Map();
  mapUint64Uint64: Map<pjs.Long, pjs.Long> = new Map();
  mapSint32Sint32: Map<number, number> = new Map();
  mapSint64Sint64: Map<pjs.Long, pjs.Long> = new Map();
  mapFixed32Fixed32: Map<number, number> = new Map();
  mapFixed64Fixed64: Map<pjs.Long, pjs.Long> = new Map();
  mapSfixed32Sfixed32: Map<number, number> = new Map();
  mapSfixed64Sfixed64: Map<pjs.Long, pjs.Long> = new Map();
  mapInt32Float: Map<number, number> = new Map();
  mapInt32Double: Map<number, number> = new Map();
  mapBoolBool: Map<boolean, boolean> = new Map();
  mapStringString: Map<string, string> = new Map();
  mapStringBytes: Map<string, Uint8Array | Buffer> = new Map();
  mapStringNestedMessage: Map<string, TestAllTypesProto3.NestedMessage> =
    new Map();
  mapStringForeignMessage: Map<string, ForeignMessage> = new Map();
  mapStringNestedEnum: Map<string, number> = new Map();
  mapStringForeignEnum: Map<string, number> = new Map();
  // NOT IMPLEMENTED
  optionalBoolWrapper: google_protobuf_wrappers_models.google.protobuf.BoolValue =
    new google_protobuf_wrappers_models.google.protobuf.BoolValue();
  optionalInt32Wrapper: google_protobuf_wrappers_models.google.protobuf.Int32Value =
    new google_protobuf_wrappers_models.google.protobuf.Int32Value();
  optionalInt64Wrapper: google_protobuf_wrappers_models.google.protobuf.Int64Value =
    new google_protobuf_wrappers_models.google.protobuf.Int64Value();
  optionalUint32Wrapper: google_protobuf_wrappers_models.google.protobuf.UInt32Value =
    new google_protobuf_wrappers_models.google.protobuf.UInt32Value();
  optionalUint64Wrapper: google_protobuf_wrappers_models.google.protobuf.UInt64Value =
    new google_protobuf_wrappers_models.google.protobuf.UInt64Value();
  optionalFloatWrapper: google_protobuf_wrappers_models.google.protobuf.FloatValue =
    new google_protobuf_wrappers_models.google.protobuf.FloatValue();
  optionalDoubleWrapper: google_protobuf_wrappers_models.google.protobuf.DoubleValue =
    new google_protobuf_wrappers_models.google.protobuf.DoubleValue();
  optionalStringWrapper: google_protobuf_wrappers_models.google.protobuf.StringValue =
    new google_protobuf_wrappers_models.google.protobuf.StringValue();
  optionalBytesWrapper: google_protobuf_wrappers_models.google.protobuf.BytesValue =
    new google_protobuf_wrappers_models.google.protobuf.BytesValue();
  repeatedBoolWrapper: google_protobuf_wrappers_models.google.protobuf.BoolValue =
    new google_protobuf_wrappers_models.google.protobuf.BoolValue();
  repeatedInt32Wrapper: google_protobuf_wrappers_models.google.protobuf.Int32Value =
    new google_protobuf_wrappers_models.google.protobuf.Int32Value();
  repeatedInt64Wrapper: google_protobuf_wrappers_models.google.protobuf.Int64Value =
    new google_protobuf_wrappers_models.google.protobuf.Int64Value();
  repeatedUint32Wrapper: google_protobuf_wrappers_models.google.protobuf.UInt32Value =
    new google_protobuf_wrappers_models.google.protobuf.UInt32Value();
  repeatedUint64Wrapper: google_protobuf_wrappers_models.google.protobuf.UInt64Value =
    new google_protobuf_wrappers_models.google.protobuf.UInt64Value();
  repeatedFloatWrapper: google_protobuf_wrappers_models.google.protobuf.FloatValue =
    new google_protobuf_wrappers_models.google.protobuf.FloatValue();
  repeatedDoubleWrapper: google_protobuf_wrappers_models.google.protobuf.DoubleValue =
    new google_protobuf_wrappers_models.google.protobuf.DoubleValue();
  repeatedStringWrapper: google_protobuf_wrappers_models.google.protobuf.StringValue =
    new google_protobuf_wrappers_models.google.protobuf.StringValue();
  repeatedBytesWrapper: google_protobuf_wrappers_models.google.protobuf.BytesValue =
    new google_protobuf_wrappers_models.google.protobuf.BytesValue();
  optionalDuration: google_protobuf_duration_models.google.protobuf.Duration =
    new google_protobuf_duration_models.google.protobuf.Duration();
  optionalTimestamp: google_protobuf_timestamp_models.google.protobuf.Timestamp =
    new google_protobuf_timestamp_models.google.protobuf.Timestamp();
  optionalFieldMask: google_protobuf_field_mask_models.google.protobuf.FieldMask =
    new google_protobuf_field_mask_models.google.protobuf.FieldMask();
  optionalStruct: google_protobuf_struct_models.google.protobuf.Struct =
    new google_protobuf_struct_models.google.protobuf.Struct();
  optionalAny: google_protobuf_any_models.google.protobuf.Any =
    new google_protobuf_any_models.google.protobuf.Any();
  optionalValue: google_protobuf_struct_models.google.protobuf.Value =
    new google_protobuf_struct_models.google.protobuf.Value();
  optionalNullValue: number =
    google_protobuf_struct_models.google.protobuf.NullValue.NULL_VALUE;
  repeatedDuration: google_protobuf_duration_models.google.protobuf.Duration =
    new google_protobuf_duration_models.google.protobuf.Duration();
  repeatedTimestamp: google_protobuf_timestamp_models.google.protobuf.Timestamp =
    new google_protobuf_timestamp_models.google.protobuf.Timestamp();
  repeatedFieldmask: google_protobuf_field_mask_models.google.protobuf.FieldMask =
    new google_protobuf_field_mask_models.google.protobuf.FieldMask();
  repeatedStruct: google_protobuf_struct_models.google.protobuf.Struct =
    new google_protobuf_struct_models.google.protobuf.Struct();
  repeatedAny: google_protobuf_any_models.google.protobuf.Any =
    new google_protobuf_any_models.google.protobuf.Any();
  repeatedValue: google_protobuf_struct_models.google.protobuf.Value =
    new google_protobuf_struct_models.google.protobuf.Value();
  repeatedListValue: google_protobuf_struct_models.google.protobuf.ListValue =
    new google_protobuf_struct_models.google.protobuf.ListValue();
  fieldname1: number = 0;
  fieldName2: number = 0;
  FieldName3: number = 0;
  field_name4_: number = 0;
  field0name5: number = 0;
  field0Name6: number = 0;
  fieldName7: number = 0;
  FieldName8: number = 0;
  fieldName9: number = 0;
  FieldName10: number = 0;
  FIELDNAME11: number = 0;
  FIELDName12: number = 0;
  _fieldName13: number = 0;
  _FieldName14: number = 0;
  field_name15: number = 0;
  field_Name16: number = 0;
  fieldName17_: number = 0;
  FieldName18_: number = 0;

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
    "optionalNestedEnum",
    "optionalForeignEnum",
    "optionalAliasedEnum",
    "optionalStringPiece",
    "optionalCord",
    "recursiveMessage",
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
    "repeatedNestedEnum",
    "repeatedForeignEnum",
    "repeatedStringPiece",
    "repeatedCord",
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
    "packedNestedEnum",
    "unpackedInt32",
    "unpackedInt64",
    "unpackedUint32",
    "unpackedUint64",
    "unpackedSint32",
    "unpackedSint64",
    "unpackedFixed32",
    "unpackedFixed64",
    "unpackedSfixed32",
    "unpackedSfixed64",
    "unpackedFloat",
    "unpackedDouble",
    "unpackedBool",
    "unpackedNestedEnum",
    "mapInt32Int32",
    "mapInt64Int64",
    "mapUint32Uint32",
    "mapUint64Uint64",
    "mapSint32Sint32",
    "mapSint64Sint64",
    "mapFixed32Fixed32",
    "mapFixed64Fixed64",
    "mapSfixed32Sfixed32",
    "mapSfixed64Sfixed64",
    "mapInt32Float",
    "mapInt32Double",
    "mapBoolBool",
    "mapStringString",
    "mapStringBytes",
    "mapStringNestedMessage",
    "mapStringForeignMessage",
    "mapStringNestedEnum",
    "mapStringForeignEnum",
    "oneof_field",
    "optionalBoolWrapper",
    "optionalInt32Wrapper",
    "optionalInt64Wrapper",
    "optionalUint32Wrapper",
    "optionalUint64Wrapper",
    "optionalFloatWrapper",
    "optionalDoubleWrapper",
    "optionalStringWrapper",
    "optionalBytesWrapper",
    "repeatedBoolWrapper",
    "repeatedInt32Wrapper",
    "repeatedInt64Wrapper",
    "repeatedUint32Wrapper",
    "repeatedUint64Wrapper",
    "repeatedFloatWrapper",
    "repeatedDoubleWrapper",
    "repeatedStringWrapper",
    "repeatedBytesWrapper",
    "optionalDuration",
    "optionalTimestamp",
    "optionalFieldMask",
    "optionalStruct",
    "optionalAny",
    "optionalValue",
    "optionalNullValue",
    "repeatedDuration",
    "repeatedTimestamp",
    "repeatedFieldmask",
    "repeatedStruct",
    "repeatedAny",
    "repeatedValue",
    "repeatedListValue",
    "fieldname1",
    "fieldName2",
    "FieldName3",
    "field_name4_",
    "field0name5",
    "field0Name6",
    "fieldName7",
    "FieldName8",
    "fieldName9",
    "FieldName10",
    "FIELDNAME11",
    "FIELDName12",
    "_fieldName13",
    "_FieldName14",
    "field_name15",
    "field_Name16",
    "fieldName17_",
    "FieldName18_",
  ];

  // map<int32, int32> map_int32_int32 = 56
  public static encodeMapInt32Int32(
    m: Map<number, number>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(450);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(16);
      w2.int32(val);
      w2.ldelim();
    }
    return w;
  }

  // map<int64, int64> map_int64_int64 = 57
  public static encodeMapInt64Int64(
    m: Map<pjs.Long, pjs.Long>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(458);
      const w2 = w.fork();
      w.uint32(8);
      w.int64(key);
      w.uint32(16);
      w2.int64(val);
      w2.ldelim();
    }
    return w;
  }

  // map<uint32, uint32> map_uint32_uint32 = 58
  public static encodeMapUint32Uint32(
    m: Map<number, number>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(466);
      const w2 = w.fork();
      w.uint32(8);
      w.uint32(key);
      w.uint32(16);
      w2.uint32(val);
      w2.ldelim();
    }
    return w;
  }

  // map<uint64, uint64> map_uint64_uint64 = 59
  public static encodeMapUint64Uint64(
    m: Map<pjs.Long, pjs.Long>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(474);
      const w2 = w.fork();
      w.uint32(8);
      w.uint64(key);
      w.uint32(16);
      w2.uint64(val);
      w2.ldelim();
    }
    return w;
  }

  // map<sint32, sint32> map_sint32_sint32 = 60
  public static encodeMapSint32Sint32(
    m: Map<number, number>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(482);
      const w2 = w.fork();
      w.uint32(8);
      w.sint32(key);
      w.uint32(16);
      w2.sint32(val);
      w2.ldelim();
    }
    return w;
  }

  // map<sint64, sint64> map_sint64_sint64 = 61
  public static encodeMapSint64Sint64(
    m: Map<pjs.Long, pjs.Long>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(490);
      const w2 = w.fork();
      w.uint32(8);
      w.sint64(key);
      w.uint32(16);
      w2.sint64(val);
      w2.ldelim();
    }
    return w;
  }

  // map<fixed32, fixed32> map_fixed32_fixed32 = 62
  public static encodeMapFixed32Fixed32(
    m: Map<number, number>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(498);
      const w2 = w.fork();
      w.uint32(13);
      w.fixed32(key);
      w.uint32(21);
      w2.fixed32(val);
      w2.ldelim();
    }
    return w;
  }

  // map<fixed64, fixed64> map_fixed64_fixed64 = 63
  public static encodeMapFixed64Fixed64(
    m: Map<pjs.Long, pjs.Long>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(506);
      const w2 = w.fork();
      w.uint32(9);
      w.fixed64(key);
      w.uint32(17);
      w2.fixed64(val);
      w2.ldelim();
    }
    return w;
  }

  // map<sfixed32, sfixed32> map_sfixed32_sfixed32 = 64
  public static encodeMapSfixed32Sfixed32(
    m: Map<number, number>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(514);
      const w2 = w.fork();
      w.uint32(13);
      w.sfixed32(key);
      w.uint32(21);
      w2.sfixed32(val);
      w2.ldelim();
    }
    return w;
  }

  // map<sfixed64, sfixed64> map_sfixed64_sfixed64 = 65
  public static encodeMapSfixed64Sfixed64(
    m: Map<pjs.Long, pjs.Long>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(522);
      const w2 = w.fork();
      w.uint32(9);
      w.sfixed64(key);
      w.uint32(17);
      w2.sfixed64(val);
      w2.ldelim();
    }
    return w;
  }

  // map<int32, float> map_int32_float = 66
  public static encodeMapInt32Float(
    m: Map<number, number>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(530);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(21);
      w2.float(val);
      w2.ldelim();
    }
    return w;
  }

  // map<int32, double> map_int32_double = 67
  public static encodeMapInt32Double(
    m: Map<number, number>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(538);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(17);
      w2.double(val);
      w2.ldelim();
    }
    return w;
  }

  // map<bool, bool> map_bool_bool = 68
  public static encodeMapBoolBool(
    m: Map<boolean, boolean>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(546);
      const w2 = w.fork();
      w.uint32(8);
      w.bool(key);
      w.uint32(16);
      w2.bool(val);
      w2.ldelim();
    }
    return w;
  }

  // map<string, string> map_string_string = 69
  public static encodeMapStringString(
    m: Map<string, string>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(554);
      const w2 = w.fork();
      w.uint32(10);
      w.string(key);
      w.uint32(18);
      w2.string(val);
      w2.ldelim();
    }
    return w;
  }

  // map<string, bytes> map_string_bytes = 70
  public static encodeMapStringBytes(
    m: Map<string, Uint8Array | Buffer>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(562);
      const w2 = w.fork();
      w.uint32(10);
      w.string(key);
      w.uint32(18);
      w2.bytes(val);
      w2.ldelim();
    }
    return w;
  }

  // map<string, TestAllTypesProto3.NestedMessage> map_string_nested_message = 71
  public static encodeMapStringNestedMessage(
    m: Map<string, TestAllTypesProto3.NestedMessage>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(570);
      const w2 = w.fork();
      w.uint32(10);
      w.string(key);
      w.uint32(18);
      TestAllTypesProto3.NestedMessage.encode(val, w2.fork()).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<string, ForeignMessage> map_string_foreign_message = 72
  public static encodeMapStringForeignMessage(
    m: Map<string, ForeignMessage>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(578);
      const w2 = w.fork();
      w.uint32(10);
      w.string(key);
      w.uint32(18);
      ForeignMessage.encode(val, w2.fork()).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<string, TestAllTypesProto3.NestedEnum> map_string_nested_enum = 73
  public static encodeMapStringNestedEnum(
    m: Map<string, number>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(586);
      const w2 = w.fork();
      w.uint32(10);
      w.string(key);
      w.uint32(16);
      w2.int32(val);
      w2.ldelim();
    }
    return w;
  }

  // map<string, ForeignEnum> map_string_foreign_enum = 74
  public static encodeMapStringForeignEnum(
    m: Map<string, number>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(594);
      const w2 = w.fork();
      w.uint32(10);
      w.string(key);
      w.uint32(16);
      w2.int32(val);
      w2.ldelim();
    }
    return w;
  }

  // map<int32, int32> map_int32_int32 = 56
  public static decodeMapInt32Int32(
    r: pjs.Reader,
    length: number
  ): [number, number] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 16:
          v = r.int32();
          continue;
      }
    }

    return [k, v];
  }

  // map<int64, int64> map_int64_int64 = 57
  public static decodeMapInt64Int64(
    r: pjs.Reader,
    length: number
  ): [pjs.Long, pjs.Long] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int64();
          continue;
        case 16:
          v = r.int64();
          continue;
      }
    }

    return [k, v];
  }

  // map<uint32, uint32> map_uint32_uint32 = 58
  public static decodeMapUint32Uint32(
    r: pjs.Reader,
    length: number
  ): [number, number] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.uint32();
          continue;
        case 16:
          v = r.uint32();
          continue;
      }
    }

    return [k, v];
  }

  // map<uint64, uint64> map_uint64_uint64 = 59
  public static decodeMapUint64Uint64(
    r: pjs.Reader,
    length: number
  ): [pjs.Long, pjs.Long] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.uint64();
          continue;
        case 16:
          v = r.uint64();
          continue;
      }
    }

    return [k, v];
  }

  // map<sint32, sint32> map_sint32_sint32 = 60
  public static decodeMapSint32Sint32(
    r: pjs.Reader,
    length: number
  ): [number, number] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.sint32();
          continue;
        case 16:
          v = r.sint32();
          continue;
      }
    }

    return [k, v];
  }

  // map<sint64, sint64> map_sint64_sint64 = 61
  public static decodeMapSint64Sint64(
    r: pjs.Reader,
    length: number
  ): [pjs.Long, pjs.Long] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.sint64();
          continue;
        case 16:
          v = r.sint64();
          continue;
      }
    }

    return [k, v];
  }

  // map<fixed32, fixed32> map_fixed32_fixed32 = 62
  public static decodeMapFixed32Fixed32(
    r: pjs.Reader,
    length: number
  ): [number, number] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 13:
          k = r.fixed32();
          continue;
        case 21:
          v = r.fixed32();
          continue;
      }
    }

    return [k, v];
  }

  // map<fixed64, fixed64> map_fixed64_fixed64 = 63
  public static decodeMapFixed64Fixed64(
    r: pjs.Reader,
    length: number
  ): [pjs.Long, pjs.Long] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 9:
          k = r.fixed64();
          continue;
        case 17:
          v = r.fixed64();
          continue;
      }
    }

    return [k, v];
  }

  // map<sfixed32, sfixed32> map_sfixed32_sfixed32 = 64
  public static decodeMapSfixed32Sfixed32(
    r: pjs.Reader,
    length: number
  ): [number, number] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 13:
          k = r.sfixed32();
          continue;
        case 21:
          v = r.sfixed32();
          continue;
      }
    }

    return [k, v];
  }

  // map<sfixed64, sfixed64> map_sfixed64_sfixed64 = 65
  public static decodeMapSfixed64Sfixed64(
    r: pjs.Reader,
    length: number
  ): [pjs.Long, pjs.Long] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 9:
          k = r.sfixed64();
          continue;
        case 17:
          v = r.sfixed64();
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, float> map_int32_float = 66
  public static decodeMapInt32Float(
    r: pjs.Reader,
    length: number
  ): [number, number] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 21:
          v = r.float();
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, double> map_int32_double = 67
  public static decodeMapInt32Double(
    r: pjs.Reader,
    length: number
  ): [number, number] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 17:
          v = r.double();
          continue;
      }
    }

    return [k, v];
  }

  // map<bool, bool> map_bool_bool = 68
  public static decodeMapBoolBool(
    r: pjs.Reader,
    length: number
  ): [boolean, boolean] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.bool();
          continue;
        case 16:
          v = r.bool();
          continue;
      }
    }

    return [k, v];
  }

  // map<string, string> map_string_string = 69
  public static decodeMapStringString(
    r: pjs.Reader,
    length: number
  ): [string, string] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 10:
          k = r.string();
          continue;
        case 18:
          v = r.string();
          continue;
      }
    }

    return [k, v];
  }

  // map<string, bytes> map_string_bytes = 70
  public static decodeMapStringBytes(
    r: pjs.Reader,
    length: number
  ): [string, Uint8Array | Buffer] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 10:
          k = r.string();
          continue;
        case 18:
          v = r.bytes();
          continue;
      }
    }

    return [k, v];
  }

  // map<string, TestAllTypesProto3.NestedMessage> map_string_nested_message = 71
  public static decodeMapStringNestedMessage(
    r: pjs.Reader,
    length: number
  ): [string, TestAllTypesProto3.NestedMessage] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 10:
          k = r.string();
          continue;
        case 18:
          v = TestAllTypesProto3.NestedMessage.decode(
            new TestAllTypesProto3.NestedMessage(),
            r,
            r.uint32()
          );
          continue;
      }
    }

    return [k, v];
  }

  // map<string, ForeignMessage> map_string_foreign_message = 72
  public static decodeMapStringForeignMessage(
    r: pjs.Reader,
    length: number
  ): [string, ForeignMessage] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 10:
          k = r.string();
          continue;
        case 18:
          v = ForeignMessage.decode(new ForeignMessage(), r, r.uint32());
          continue;
      }
    }

    return [k, v];
  }

  // map<string, TestAllTypesProto3.NestedEnum> map_string_nested_enum = 73
  public static decodeMapStringNestedEnum(
    r: pjs.Reader,
    length: number
  ): [string, number] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 10:
          k = r.string();
          continue;
        case 16:
          v = r.int32();
          continue;
      }
    }

    return [k, v];
  }

  // map<string, ForeignEnum> map_string_foreign_enum = 74
  public static decodeMapStringForeignEnum(
    r: pjs.Reader,
    length: number
  ): [string, number] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 10:
          k = r.string();
          continue;
        case 16:
          v = r.int32();
          continue;
      }
    }

    return [k, v];
  }

  public get fields() {
    return TestAllTypesProto3.fields;
  }

  constructor(obj?: TestAllTypesProto3) {
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
    if (obj.optionalNestedEnum !== undefined) {
      this.optionalNestedEnum = obj.optionalNestedEnum;
    }
    if (obj.optionalForeignEnum !== undefined) {
      this.optionalForeignEnum = obj.optionalForeignEnum;
    }
    if (obj.optionalAliasedEnum !== undefined) {
      this.optionalAliasedEnum = obj.optionalAliasedEnum;
    }
    if (obj.optionalStringPiece !== undefined) {
      this.optionalStringPiece = obj.optionalStringPiece;
    }
    if (obj.optionalCord !== undefined) {
      this.optionalCord = obj.optionalCord;
    }
    if (obj.recursiveMessage !== undefined) {
      this.recursiveMessage = obj.recursiveMessage;
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
    if (obj.packedNestedEnum !== undefined) {
      this.packedNestedEnum = obj.packedNestedEnum;
    }
    if (obj.unpackedInt32 !== undefined) {
      this.unpackedInt32 = obj.unpackedInt32;
    }
    if (obj.unpackedInt64 !== undefined) {
      this.unpackedInt64 = obj.unpackedInt64;
    }
    if (obj.unpackedUint32 !== undefined) {
      this.unpackedUint32 = obj.unpackedUint32;
    }
    if (obj.unpackedUint64 !== undefined) {
      this.unpackedUint64 = obj.unpackedUint64;
    }
    if (obj.unpackedSint32 !== undefined) {
      this.unpackedSint32 = obj.unpackedSint32;
    }
    if (obj.unpackedSint64 !== undefined) {
      this.unpackedSint64 = obj.unpackedSint64;
    }
    if (obj.unpackedFixed32 !== undefined) {
      this.unpackedFixed32 = obj.unpackedFixed32;
    }
    if (obj.unpackedFixed64 !== undefined) {
      this.unpackedFixed64 = obj.unpackedFixed64;
    }
    if (obj.unpackedSfixed32 !== undefined) {
      this.unpackedSfixed32 = obj.unpackedSfixed32;
    }
    if (obj.unpackedSfixed64 !== undefined) {
      this.unpackedSfixed64 = obj.unpackedSfixed64;
    }
    if (obj.unpackedFloat !== undefined) {
      this.unpackedFloat = obj.unpackedFloat;
    }
    if (obj.unpackedDouble !== undefined) {
      this.unpackedDouble = obj.unpackedDouble;
    }
    if (obj.unpackedBool !== undefined) {
      this.unpackedBool = obj.unpackedBool;
    }
    if (obj.unpackedNestedEnum !== undefined) {
      this.unpackedNestedEnum = obj.unpackedNestedEnum;
    }
    if (obj.mapInt32Int32 !== undefined) {
      const entries = Array.from(obj.mapInt32Int32.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapInt32Int32 = new Map(copy);
    }
    if (obj.mapInt64Int64 !== undefined) {
      const entries = Array.from(obj.mapInt64Int64.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapInt64Int64 = new Map(copy);
    }
    if (obj.mapUint32Uint32 !== undefined) {
      const entries = Array.from(obj.mapUint32Uint32.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapUint32Uint32 = new Map(copy);
    }
    if (obj.mapUint64Uint64 !== undefined) {
      const entries = Array.from(obj.mapUint64Uint64.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapUint64Uint64 = new Map(copy);
    }
    if (obj.mapSint32Sint32 !== undefined) {
      const entries = Array.from(obj.mapSint32Sint32.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapSint32Sint32 = new Map(copy);
    }
    if (obj.mapSint64Sint64 !== undefined) {
      const entries = Array.from(obj.mapSint64Sint64.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapSint64Sint64 = new Map(copy);
    }
    if (obj.mapFixed32Fixed32 !== undefined) {
      const entries = Array.from(obj.mapFixed32Fixed32.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapFixed32Fixed32 = new Map(copy);
    }
    if (obj.mapFixed64Fixed64 !== undefined) {
      const entries = Array.from(obj.mapFixed64Fixed64.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapFixed64Fixed64 = new Map(copy);
    }
    if (obj.mapSfixed32Sfixed32 !== undefined) {
      const entries = Array.from(obj.mapSfixed32Sfixed32.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapSfixed32Sfixed32 = new Map(copy);
    }
    if (obj.mapSfixed64Sfixed64 !== undefined) {
      const entries = Array.from(obj.mapSfixed64Sfixed64.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapSfixed64Sfixed64 = new Map(copy);
    }
    if (obj.mapInt32Float !== undefined) {
      const entries = Array.from(obj.mapInt32Float.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapInt32Float = new Map(copy);
    }
    if (obj.mapInt32Double !== undefined) {
      const entries = Array.from(obj.mapInt32Double.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapInt32Double = new Map(copy);
    }
    if (obj.mapBoolBool !== undefined) {
      const entries = Array.from(obj.mapBoolBool.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapBoolBool = new Map(copy);
    }
    if (obj.mapStringString !== undefined) {
      const entries = Array.from(obj.mapStringString.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapStringString = new Map(copy);
    }
    if (obj.mapStringBytes !== undefined) {
      const entries = Array.from(obj.mapStringBytes.entries());
      const copy = entries.map(([key, val]) => [key, new pjs.util.Buffer(val)]);
      this.mapStringBytes = new Map(copy);
    }
    if (obj.mapStringNestedMessage !== undefined) {
      const entries = Array.from(obj.mapStringNestedMessage.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.mapStringNestedMessage = new Map(copy);
    }
    if (obj.mapStringForeignMessage !== undefined) {
      const entries = Array.from(obj.mapStringForeignMessage.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.mapStringForeignMessage = new Map(copy);
    }
    if (obj.mapStringNestedEnum !== undefined) {
      const entries = Array.from(obj.mapStringNestedEnum.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapStringNestedEnum = new Map(copy);
    }
    if (obj.mapStringForeignEnum !== undefined) {
      const entries = Array.from(obj.mapStringForeignEnum.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapStringForeignEnum = new Map(copy);
    }
    if (obj.oneof_field !== undefined) {
      // NOT IMPLEMENTED
    }
    if (obj.optionalBoolWrapper !== undefined) {
      this.optionalBoolWrapper = obj.optionalBoolWrapper;
    }
    if (obj.optionalInt32Wrapper !== undefined) {
      this.optionalInt32Wrapper = obj.optionalInt32Wrapper;
    }
    if (obj.optionalInt64Wrapper !== undefined) {
      this.optionalInt64Wrapper = obj.optionalInt64Wrapper;
    }
    if (obj.optionalUint32Wrapper !== undefined) {
      this.optionalUint32Wrapper = obj.optionalUint32Wrapper;
    }
    if (obj.optionalUint64Wrapper !== undefined) {
      this.optionalUint64Wrapper = obj.optionalUint64Wrapper;
    }
    if (obj.optionalFloatWrapper !== undefined) {
      this.optionalFloatWrapper = obj.optionalFloatWrapper;
    }
    if (obj.optionalDoubleWrapper !== undefined) {
      this.optionalDoubleWrapper = obj.optionalDoubleWrapper;
    }
    if (obj.optionalStringWrapper !== undefined) {
      this.optionalStringWrapper = obj.optionalStringWrapper;
    }
    if (obj.optionalBytesWrapper !== undefined) {
      this.optionalBytesWrapper = obj.optionalBytesWrapper;
    }
    if (obj.repeatedBoolWrapper !== undefined) {
      this.repeatedBoolWrapper = obj.repeatedBoolWrapper;
    }
    if (obj.repeatedInt32Wrapper !== undefined) {
      this.repeatedInt32Wrapper = obj.repeatedInt32Wrapper;
    }
    if (obj.repeatedInt64Wrapper !== undefined) {
      this.repeatedInt64Wrapper = obj.repeatedInt64Wrapper;
    }
    if (obj.repeatedUint32Wrapper !== undefined) {
      this.repeatedUint32Wrapper = obj.repeatedUint32Wrapper;
    }
    if (obj.repeatedUint64Wrapper !== undefined) {
      this.repeatedUint64Wrapper = obj.repeatedUint64Wrapper;
    }
    if (obj.repeatedFloatWrapper !== undefined) {
      this.repeatedFloatWrapper = obj.repeatedFloatWrapper;
    }
    if (obj.repeatedDoubleWrapper !== undefined) {
      this.repeatedDoubleWrapper = obj.repeatedDoubleWrapper;
    }
    if (obj.repeatedStringWrapper !== undefined) {
      this.repeatedStringWrapper = obj.repeatedStringWrapper;
    }
    if (obj.repeatedBytesWrapper !== undefined) {
      this.repeatedBytesWrapper = obj.repeatedBytesWrapper;
    }
    if (obj.optionalDuration !== undefined) {
      this.optionalDuration = obj.optionalDuration;
    }
    if (obj.optionalTimestamp !== undefined) {
      this.optionalTimestamp = obj.optionalTimestamp;
    }
    if (obj.optionalFieldMask !== undefined) {
      this.optionalFieldMask = obj.optionalFieldMask;
    }
    if (obj.optionalStruct !== undefined) {
      this.optionalStruct = obj.optionalStruct;
    }
    if (obj.optionalAny !== undefined) {
      this.optionalAny = obj.optionalAny;
    }
    if (obj.optionalValue !== undefined) {
      this.optionalValue = obj.optionalValue;
    }
    if (obj.optionalNullValue !== undefined) {
      this.optionalNullValue = obj.optionalNullValue;
    }
    if (obj.repeatedDuration !== undefined) {
      this.repeatedDuration = obj.repeatedDuration;
    }
    if (obj.repeatedTimestamp !== undefined) {
      this.repeatedTimestamp = obj.repeatedTimestamp;
    }
    if (obj.repeatedFieldmask !== undefined) {
      this.repeatedFieldmask = obj.repeatedFieldmask;
    }
    if (obj.repeatedStruct !== undefined) {
      this.repeatedStruct = obj.repeatedStruct;
    }
    if (obj.repeatedAny !== undefined) {
      this.repeatedAny = obj.repeatedAny;
    }
    if (obj.repeatedValue !== undefined) {
      this.repeatedValue = obj.repeatedValue;
    }
    if (obj.repeatedListValue !== undefined) {
      this.repeatedListValue = obj.repeatedListValue;
    }
    if (obj.fieldname1 !== undefined) {
      this.fieldname1 = obj.fieldname1;
    }
    if (obj.fieldName2 !== undefined) {
      this.fieldName2 = obj.fieldName2;
    }
    if (obj.FieldName3 !== undefined) {
      this.FieldName3 = obj.FieldName3;
    }
    if (obj.field_name4_ !== undefined) {
      this.field_name4_ = obj.field_name4_;
    }
    if (obj.field0name5 !== undefined) {
      this.field0name5 = obj.field0name5;
    }
    if (obj.field0Name6 !== undefined) {
      this.field0Name6 = obj.field0Name6;
    }
    if (obj.fieldName7 !== undefined) {
      this.fieldName7 = obj.fieldName7;
    }
    if (obj.FieldName8 !== undefined) {
      this.FieldName8 = obj.FieldName8;
    }
    if (obj.fieldName9 !== undefined) {
      this.fieldName9 = obj.fieldName9;
    }
    if (obj.FieldName10 !== undefined) {
      this.FieldName10 = obj.FieldName10;
    }
    if (obj.FIELDNAME11 !== undefined) {
      this.FIELDNAME11 = obj.FIELDNAME11;
    }
    if (obj.FIELDName12 !== undefined) {
      this.FIELDName12 = obj.FIELDName12;
    }
    if (obj._fieldName13 !== undefined) {
      this._fieldName13 = obj._fieldName13;
    }
    if (obj._FieldName14 !== undefined) {
      this._FieldName14 = obj._FieldName14;
    }
    if (obj.field_name15 !== undefined) {
      this.field_name15 = obj.field_name15;
    }
    if (obj.field_Name16 !== undefined) {
      this.field_Name16 = obj.field_Name16;
    }
    if (obj.fieldName17_ !== undefined) {
      this.fieldName17_ = obj.fieldName17_;
    }
    if (obj.FieldName18_ !== undefined) {
      this.FieldName18_ = obj.FieldName18_;
    }
  }

  public static encode(m: TestAllTypesProto3, w: pjs.Writer): pjs.Writer {
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

    // TestAllTypesProto3.NestedMessage optional_nested_message = 18
    if (m.optionalNestedMessage !== new TestAllTypesProto3.NestedMessage()) {
      w.uint32(146);
      TestAllTypesProto3.NestedMessage.encode(
        m.optionalNestedMessage,
        w.fork()
      ).ldelim();
    }

    // ForeignMessage optional_foreign_message = 19
    if (m.optionalForeignMessage !== new ForeignMessage()) {
      w.uint32(154);
      ForeignMessage.encode(m.optionalForeignMessage, w.fork()).ldelim();
    }

    // TestAllTypesProto3.NestedEnum optional_nested_enum = 21
    if (m.optionalNestedEnum !== TestAllTypesProto3.NestedEnum.FOO) {
      w.uint32(168);
      w.int32(m.optionalNestedEnum);
    }

    // ForeignEnum optional_foreign_enum = 22
    if (m.optionalForeignEnum !== ForeignEnum.FOREIGN_FOO) {
      w.uint32(176);
      w.int32(m.optionalForeignEnum);
    }

    // TestAllTypesProto3.AliasedEnum optional_aliased_enum = 23
    if (m.optionalAliasedEnum !== TestAllTypesProto3.AliasedEnum.ALIAS_FOO) {
      w.uint32(184);
      w.int32(m.optionalAliasedEnum);
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

    // TestAllTypesProto3 recursive_message = 27
    if (m.recursiveMessage !== new TestAllTypesProto3()) {
      w.uint32(218);
      TestAllTypesProto3.encode(m.recursiveMessage, w.fork()).ldelim();
    }

    // int32 repeated_int32 = 31
    if (m.repeatedInt32 !== 0) {
      w.uint32(248);
      w.int32(m.repeatedInt32);
    }

    // int64 repeated_int64 = 32
    if (m.repeatedInt64 !== pjs.util.Long.fromValue(0, false)) {
      w.uint32(256);
      w.int64(m.repeatedInt64);
    }

    // uint32 repeated_uint32 = 33
    if (m.repeatedUint32 !== 0) {
      w.uint32(264);
      w.uint32(m.repeatedUint32);
    }

    // uint64 repeated_uint64 = 34
    if (m.repeatedUint64 !== pjs.util.Long.fromValue(0, true)) {
      w.uint32(272);
      w.uint64(m.repeatedUint64);
    }

    // sint32 repeated_sint32 = 35
    if (m.repeatedSint32 !== 0) {
      w.uint32(280);
      w.sint32(m.repeatedSint32);
    }

    // sint64 repeated_sint64 = 36
    if (m.repeatedSint64 !== pjs.util.Long.fromValue(0, false)) {
      w.uint32(288);
      w.sint64(m.repeatedSint64);
    }

    // fixed32 repeated_fixed32 = 37
    if (m.repeatedFixed32 !== 0) {
      w.uint32(301);
      w.fixed32(m.repeatedFixed32);
    }

    // fixed64 repeated_fixed64 = 38
    if (m.repeatedFixed64 !== pjs.util.Long.fromValue(0, true)) {
      w.uint32(305);
      w.fixed64(m.repeatedFixed64);
    }

    // sfixed32 repeated_sfixed32 = 39
    if (m.repeatedSfixed32 !== 0) {
      w.uint32(317);
      w.sfixed32(m.repeatedSfixed32);
    }

    // sfixed64 repeated_sfixed64 = 40
    if (m.repeatedSfixed64 !== pjs.util.Long.fromValue(0, false)) {
      w.uint32(321);
      w.sfixed64(m.repeatedSfixed64);
    }

    // float repeated_float = 41
    if (m.repeatedFloat !== 0) {
      w.uint32(333);
      w.float(m.repeatedFloat);
    }

    // double repeated_double = 42
    if (m.repeatedDouble !== 0) {
      w.uint32(337);
      w.double(m.repeatedDouble);
    }

    // bool repeated_bool = 43
    if (m.repeatedBool !== false) {
      w.uint32(344);
      w.bool(m.repeatedBool);
    }

    // string repeated_string = 44
    if (m.repeatedString !== "") {
      w.uint32(354);
      w.string(m.repeatedString);
    }

    // bytes repeated_bytes = 45
    if (m.repeatedBytes !== pjs.util.newBuffer(0)) {
      w.uint32(362);
      w.bytes(m.repeatedBytes);
    }

    // TestAllTypesProto3.NestedMessage repeated_nested_message = 48
    if (m.repeatedNestedMessage !== new TestAllTypesProto3.NestedMessage()) {
      w.uint32(386);
      TestAllTypesProto3.NestedMessage.encode(
        m.repeatedNestedMessage,
        w.fork()
      ).ldelim();
    }

    // ForeignMessage repeated_foreign_message = 49
    if (m.repeatedForeignMessage !== new ForeignMessage()) {
      w.uint32(394);
      ForeignMessage.encode(m.repeatedForeignMessage, w.fork()).ldelim();
    }

    // TestAllTypesProto3.NestedEnum repeated_nested_enum = 51
    if (m.repeatedNestedEnum !== TestAllTypesProto3.NestedEnum.FOO) {
      w.uint32(408);
      w.int32(m.repeatedNestedEnum);
    }

    // ForeignEnum repeated_foreign_enum = 52
    if (m.repeatedForeignEnum !== ForeignEnum.FOREIGN_FOO) {
      w.uint32(416);
      w.int32(m.repeatedForeignEnum);
    }

    // string repeated_string_piece = 54
    if (m.repeatedStringPiece !== "") {
      w.uint32(434);
      w.string(m.repeatedStringPiece);
    }

    // string repeated_cord = 55
    if (m.repeatedCord !== "") {
      w.uint32(442);
      w.string(m.repeatedCord);
    }

    // int32 packed_int32 = 75
    if (m.packedInt32 !== 0) {
      w.uint32(600);
      w.int32(m.packedInt32);
    }

    // int64 packed_int64 = 76
    if (m.packedInt64 !== pjs.util.Long.fromValue(0, false)) {
      w.uint32(608);
      w.int64(m.packedInt64);
    }

    // uint32 packed_uint32 = 77
    if (m.packedUint32 !== 0) {
      w.uint32(616);
      w.uint32(m.packedUint32);
    }

    // uint64 packed_uint64 = 78
    if (m.packedUint64 !== pjs.util.Long.fromValue(0, true)) {
      w.uint32(624);
      w.uint64(m.packedUint64);
    }

    // sint32 packed_sint32 = 79
    if (m.packedSint32 !== 0) {
      w.uint32(632);
      w.sint32(m.packedSint32);
    }

    // sint64 packed_sint64 = 80
    if (m.packedSint64 !== pjs.util.Long.fromValue(0, false)) {
      w.uint32(640);
      w.sint64(m.packedSint64);
    }

    // fixed32 packed_fixed32 = 81
    if (m.packedFixed32 !== 0) {
      w.uint32(653);
      w.fixed32(m.packedFixed32);
    }

    // fixed64 packed_fixed64 = 82
    if (m.packedFixed64 !== pjs.util.Long.fromValue(0, true)) {
      w.uint32(657);
      w.fixed64(m.packedFixed64);
    }

    // sfixed32 packed_sfixed32 = 83
    if (m.packedSfixed32 !== 0) {
      w.uint32(669);
      w.sfixed32(m.packedSfixed32);
    }

    // sfixed64 packed_sfixed64 = 84
    if (m.packedSfixed64 !== pjs.util.Long.fromValue(0, false)) {
      w.uint32(673);
      w.sfixed64(m.packedSfixed64);
    }

    // float packed_float = 85
    if (m.packedFloat !== 0) {
      w.uint32(685);
      w.float(m.packedFloat);
    }

    // double packed_double = 86
    if (m.packedDouble !== 0) {
      w.uint32(689);
      w.double(m.packedDouble);
    }

    // bool packed_bool = 87
    if (m.packedBool !== false) {
      w.uint32(696);
      w.bool(m.packedBool);
    }

    // TestAllTypesProto3.NestedEnum packed_nested_enum = 88
    if (m.packedNestedEnum !== TestAllTypesProto3.NestedEnum.FOO) {
      w.uint32(704);
      w.int32(m.packedNestedEnum);
    }

    // int32 unpacked_int32 = 89
    if (m.unpackedInt32 !== 0) {
      w.uint32(712);
      w.int32(m.unpackedInt32);
    }

    // int64 unpacked_int64 = 90
    if (m.unpackedInt64 !== pjs.util.Long.fromValue(0, false)) {
      w.uint32(720);
      w.int64(m.unpackedInt64);
    }

    // uint32 unpacked_uint32 = 91
    if (m.unpackedUint32 !== 0) {
      w.uint32(728);
      w.uint32(m.unpackedUint32);
    }

    // uint64 unpacked_uint64 = 92
    if (m.unpackedUint64 !== pjs.util.Long.fromValue(0, true)) {
      w.uint32(736);
      w.uint64(m.unpackedUint64);
    }

    // sint32 unpacked_sint32 = 93
    if (m.unpackedSint32 !== 0) {
      w.uint32(744);
      w.sint32(m.unpackedSint32);
    }

    // sint64 unpacked_sint64 = 94
    if (m.unpackedSint64 !== pjs.util.Long.fromValue(0, false)) {
      w.uint32(752);
      w.sint64(m.unpackedSint64);
    }

    // fixed32 unpacked_fixed32 = 95
    if (m.unpackedFixed32 !== 0) {
      w.uint32(765);
      w.fixed32(m.unpackedFixed32);
    }

    // fixed64 unpacked_fixed64 = 96
    if (m.unpackedFixed64 !== pjs.util.Long.fromValue(0, true)) {
      w.uint32(769);
      w.fixed64(m.unpackedFixed64);
    }

    // sfixed32 unpacked_sfixed32 = 97
    if (m.unpackedSfixed32 !== 0) {
      w.uint32(781);
      w.sfixed32(m.unpackedSfixed32);
    }

    // sfixed64 unpacked_sfixed64 = 98
    if (m.unpackedSfixed64 !== pjs.util.Long.fromValue(0, false)) {
      w.uint32(785);
      w.sfixed64(m.unpackedSfixed64);
    }

    // float unpacked_float = 99
    if (m.unpackedFloat !== 0) {
      w.uint32(797);
      w.float(m.unpackedFloat);
    }

    // double unpacked_double = 100
    if (m.unpackedDouble !== 0) {
      w.uint32(801);
      w.double(m.unpackedDouble);
    }

    // bool unpacked_bool = 101
    if (m.unpackedBool !== false) {
      w.uint32(808);
      w.bool(m.unpackedBool);
    }

    // TestAllTypesProto3.NestedEnum unpacked_nested_enum = 102
    if (m.unpackedNestedEnum !== TestAllTypesProto3.NestedEnum.FOO) {
      w.uint32(816);
      w.int32(m.unpackedNestedEnum);
    }

    // map<int32, int32> map_int32_int32 = 56
    TestAllTypesProto3.encodeMapInt32Int32(m.mapInt32Int32, w);

    // map<int64, int64> map_int64_int64 = 57
    TestAllTypesProto3.encodeMapInt64Int64(m.mapInt64Int64, w);

    // map<uint32, uint32> map_uint32_uint32 = 58
    TestAllTypesProto3.encodeMapUint32Uint32(m.mapUint32Uint32, w);

    // map<uint64, uint64> map_uint64_uint64 = 59
    TestAllTypesProto3.encodeMapUint64Uint64(m.mapUint64Uint64, w);

    // map<sint32, sint32> map_sint32_sint32 = 60
    TestAllTypesProto3.encodeMapSint32Sint32(m.mapSint32Sint32, w);

    // map<sint64, sint64> map_sint64_sint64 = 61
    TestAllTypesProto3.encodeMapSint64Sint64(m.mapSint64Sint64, w);

    // map<fixed32, fixed32> map_fixed32_fixed32 = 62
    TestAllTypesProto3.encodeMapFixed32Fixed32(m.mapFixed32Fixed32, w);

    // map<fixed64, fixed64> map_fixed64_fixed64 = 63
    TestAllTypesProto3.encodeMapFixed64Fixed64(m.mapFixed64Fixed64, w);

    // map<sfixed32, sfixed32> map_sfixed32_sfixed32 = 64
    TestAllTypesProto3.encodeMapSfixed32Sfixed32(m.mapSfixed32Sfixed32, w);

    // map<sfixed64, sfixed64> map_sfixed64_sfixed64 = 65
    TestAllTypesProto3.encodeMapSfixed64Sfixed64(m.mapSfixed64Sfixed64, w);

    // map<int32, float> map_int32_float = 66
    TestAllTypesProto3.encodeMapInt32Float(m.mapInt32Float, w);

    // map<int32, double> map_int32_double = 67
    TestAllTypesProto3.encodeMapInt32Double(m.mapInt32Double, w);

    // map<bool, bool> map_bool_bool = 68
    TestAllTypesProto3.encodeMapBoolBool(m.mapBoolBool, w);

    // map<string, string> map_string_string = 69
    TestAllTypesProto3.encodeMapStringString(m.mapStringString, w);

    // map<string, bytes> map_string_bytes = 70
    TestAllTypesProto3.encodeMapStringBytes(m.mapStringBytes, w);

    // map<string, TestAllTypesProto3.NestedMessage> map_string_nested_message = 71
    TestAllTypesProto3.encodeMapStringNestedMessage(
      m.mapStringNestedMessage,
      w
    );

    // map<string, ForeignMessage> map_string_foreign_message = 72
    TestAllTypesProto3.encodeMapStringForeignMessage(
      m.mapStringForeignMessage,
      w
    );

    // map<string, TestAllTypesProto3.NestedEnum> map_string_nested_enum = 73
    TestAllTypesProto3.encodeMapStringNestedEnum(m.mapStringNestedEnum, w);

    // map<string, ForeignEnum> map_string_foreign_enum = 74
    TestAllTypesProto3.encodeMapStringForeignEnum(m.mapStringForeignEnum, w);

    // NOT IMPLEMENTED

    // google.protobuf.BoolValue optional_bool_wrapper = 201
    if (
      m.optionalBoolWrapper !==
      new google_protobuf_wrappers_models.google.protobuf.BoolValue()
    ) {
      w.uint32(1610);
      google_protobuf_wrappers_models.google.protobuf.BoolValue.encode(
        m.optionalBoolWrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Int32Value optional_int32_wrapper = 202
    if (
      m.optionalInt32Wrapper !==
      new google_protobuf_wrappers_models.google.protobuf.Int32Value()
    ) {
      w.uint32(1618);
      google_protobuf_wrappers_models.google.protobuf.Int32Value.encode(
        m.optionalInt32Wrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Int64Value optional_int64_wrapper = 203
    if (
      m.optionalInt64Wrapper !==
      new google_protobuf_wrappers_models.google.protobuf.Int64Value()
    ) {
      w.uint32(1626);
      google_protobuf_wrappers_models.google.protobuf.Int64Value.encode(
        m.optionalInt64Wrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.UInt32Value optional_uint32_wrapper = 204
    if (
      m.optionalUint32Wrapper !==
      new google_protobuf_wrappers_models.google.protobuf.UInt32Value()
    ) {
      w.uint32(1634);
      google_protobuf_wrappers_models.google.protobuf.UInt32Value.encode(
        m.optionalUint32Wrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.UInt64Value optional_uint64_wrapper = 205
    if (
      m.optionalUint64Wrapper !==
      new google_protobuf_wrappers_models.google.protobuf.UInt64Value()
    ) {
      w.uint32(1642);
      google_protobuf_wrappers_models.google.protobuf.UInt64Value.encode(
        m.optionalUint64Wrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.FloatValue optional_float_wrapper = 206
    if (
      m.optionalFloatWrapper !==
      new google_protobuf_wrappers_models.google.protobuf.FloatValue()
    ) {
      w.uint32(1650);
      google_protobuf_wrappers_models.google.protobuf.FloatValue.encode(
        m.optionalFloatWrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.DoubleValue optional_double_wrapper = 207
    if (
      m.optionalDoubleWrapper !==
      new google_protobuf_wrappers_models.google.protobuf.DoubleValue()
    ) {
      w.uint32(1658);
      google_protobuf_wrappers_models.google.protobuf.DoubleValue.encode(
        m.optionalDoubleWrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.StringValue optional_string_wrapper = 208
    if (
      m.optionalStringWrapper !==
      new google_protobuf_wrappers_models.google.protobuf.StringValue()
    ) {
      w.uint32(1666);
      google_protobuf_wrappers_models.google.protobuf.StringValue.encode(
        m.optionalStringWrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.BytesValue optional_bytes_wrapper = 209
    if (
      m.optionalBytesWrapper !==
      new google_protobuf_wrappers_models.google.protobuf.BytesValue()
    ) {
      w.uint32(1674);
      google_protobuf_wrappers_models.google.protobuf.BytesValue.encode(
        m.optionalBytesWrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.BoolValue repeated_bool_wrapper = 211
    if (
      m.repeatedBoolWrapper !==
      new google_protobuf_wrappers_models.google.protobuf.BoolValue()
    ) {
      w.uint32(1690);
      google_protobuf_wrappers_models.google.protobuf.BoolValue.encode(
        m.repeatedBoolWrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Int32Value repeated_int32_wrapper = 212
    if (
      m.repeatedInt32Wrapper !==
      new google_protobuf_wrappers_models.google.protobuf.Int32Value()
    ) {
      w.uint32(1698);
      google_protobuf_wrappers_models.google.protobuf.Int32Value.encode(
        m.repeatedInt32Wrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Int64Value repeated_int64_wrapper = 213
    if (
      m.repeatedInt64Wrapper !==
      new google_protobuf_wrappers_models.google.protobuf.Int64Value()
    ) {
      w.uint32(1706);
      google_protobuf_wrappers_models.google.protobuf.Int64Value.encode(
        m.repeatedInt64Wrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.UInt32Value repeated_uint32_wrapper = 214
    if (
      m.repeatedUint32Wrapper !==
      new google_protobuf_wrappers_models.google.protobuf.UInt32Value()
    ) {
      w.uint32(1714);
      google_protobuf_wrappers_models.google.protobuf.UInt32Value.encode(
        m.repeatedUint32Wrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.UInt64Value repeated_uint64_wrapper = 215
    if (
      m.repeatedUint64Wrapper !==
      new google_protobuf_wrappers_models.google.protobuf.UInt64Value()
    ) {
      w.uint32(1722);
      google_protobuf_wrappers_models.google.protobuf.UInt64Value.encode(
        m.repeatedUint64Wrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.FloatValue repeated_float_wrapper = 216
    if (
      m.repeatedFloatWrapper !==
      new google_protobuf_wrappers_models.google.protobuf.FloatValue()
    ) {
      w.uint32(1730);
      google_protobuf_wrappers_models.google.protobuf.FloatValue.encode(
        m.repeatedFloatWrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.DoubleValue repeated_double_wrapper = 217
    if (
      m.repeatedDoubleWrapper !==
      new google_protobuf_wrappers_models.google.protobuf.DoubleValue()
    ) {
      w.uint32(1738);
      google_protobuf_wrappers_models.google.protobuf.DoubleValue.encode(
        m.repeatedDoubleWrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.StringValue repeated_string_wrapper = 218
    if (
      m.repeatedStringWrapper !==
      new google_protobuf_wrappers_models.google.protobuf.StringValue()
    ) {
      w.uint32(1746);
      google_protobuf_wrappers_models.google.protobuf.StringValue.encode(
        m.repeatedStringWrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.BytesValue repeated_bytes_wrapper = 219
    if (
      m.repeatedBytesWrapper !==
      new google_protobuf_wrappers_models.google.protobuf.BytesValue()
    ) {
      w.uint32(1754);
      google_protobuf_wrappers_models.google.protobuf.BytesValue.encode(
        m.repeatedBytesWrapper,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Duration optional_duration = 301
    if (
      m.optionalDuration !==
      new google_protobuf_duration_models.google.protobuf.Duration()
    ) {
      w.uint32(2410);
      google_protobuf_duration_models.google.protobuf.Duration.encode(
        m.optionalDuration,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Timestamp optional_timestamp = 302
    if (
      m.optionalTimestamp !==
      new google_protobuf_timestamp_models.google.protobuf.Timestamp()
    ) {
      w.uint32(2418);
      google_protobuf_timestamp_models.google.protobuf.Timestamp.encode(
        m.optionalTimestamp,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.FieldMask optional_field_mask = 303
    if (
      m.optionalFieldMask !==
      new google_protobuf_field_mask_models.google.protobuf.FieldMask()
    ) {
      w.uint32(2426);
      google_protobuf_field_mask_models.google.protobuf.FieldMask.encode(
        m.optionalFieldMask,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Struct optional_struct = 304
    if (
      m.optionalStruct !==
      new google_protobuf_struct_models.google.protobuf.Struct()
    ) {
      w.uint32(2434);
      google_protobuf_struct_models.google.protobuf.Struct.encode(
        m.optionalStruct,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Any optional_any = 305
    if (
      m.optionalAny !== new google_protobuf_any_models.google.protobuf.Any()
    ) {
      w.uint32(2442);
      google_protobuf_any_models.google.protobuf.Any.encode(
        m.optionalAny,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Value optional_value = 306
    if (
      m.optionalValue !==
      new google_protobuf_struct_models.google.protobuf.Value()
    ) {
      w.uint32(2450);
      google_protobuf_struct_models.google.protobuf.Value.encode(
        m.optionalValue,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.NullValue optional_null_value = 307
    if (
      m.optionalNullValue !==
      google_protobuf_struct_models.google.protobuf.NullValue.NULL_VALUE
    ) {
      w.uint32(2456);
      w.int32(m.optionalNullValue);
    }

    // google.protobuf.Duration repeated_duration = 311
    if (
      m.repeatedDuration !==
      new google_protobuf_duration_models.google.protobuf.Duration()
    ) {
      w.uint32(2490);
      google_protobuf_duration_models.google.protobuf.Duration.encode(
        m.repeatedDuration,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Timestamp repeated_timestamp = 312
    if (
      m.repeatedTimestamp !==
      new google_protobuf_timestamp_models.google.protobuf.Timestamp()
    ) {
      w.uint32(2498);
      google_protobuf_timestamp_models.google.protobuf.Timestamp.encode(
        m.repeatedTimestamp,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.FieldMask repeated_fieldmask = 313
    if (
      m.repeatedFieldmask !==
      new google_protobuf_field_mask_models.google.protobuf.FieldMask()
    ) {
      w.uint32(2506);
      google_protobuf_field_mask_models.google.protobuf.FieldMask.encode(
        m.repeatedFieldmask,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Struct repeated_struct = 324
    if (
      m.repeatedStruct !==
      new google_protobuf_struct_models.google.protobuf.Struct()
    ) {
      w.uint32(2594);
      google_protobuf_struct_models.google.protobuf.Struct.encode(
        m.repeatedStruct,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Any repeated_any = 315
    if (
      m.repeatedAny !== new google_protobuf_any_models.google.protobuf.Any()
    ) {
      w.uint32(2522);
      google_protobuf_any_models.google.protobuf.Any.encode(
        m.repeatedAny,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Value repeated_value = 316
    if (
      m.repeatedValue !==
      new google_protobuf_struct_models.google.protobuf.Value()
    ) {
      w.uint32(2530);
      google_protobuf_struct_models.google.protobuf.Value.encode(
        m.repeatedValue,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.ListValue repeated_list_value = 317
    if (
      m.repeatedListValue !==
      new google_protobuf_struct_models.google.protobuf.ListValue()
    ) {
      w.uint32(2538);
      google_protobuf_struct_models.google.protobuf.ListValue.encode(
        m.repeatedListValue,
        w.fork()
      ).ldelim();
    }

    // int32 fieldname1 = 401
    if (m.fieldname1 !== 0) {
      w.uint32(3208);
      w.int32(m.fieldname1);
    }

    // int32 field_name2 = 402
    if (m.fieldName2 !== 0) {
      w.uint32(3216);
      w.int32(m.fieldName2);
    }

    // int32 _field_name3 = 403
    if (m.FieldName3 !== 0) {
      w.uint32(3224);
      w.int32(m.FieldName3);
    }

    // int32 field__name4_ = 404
    if (m.field_name4_ !== 0) {
      w.uint32(3232);
      w.int32(m.field_name4_);
    }

    // int32 field0name5 = 405
    if (m.field0name5 !== 0) {
      w.uint32(3240);
      w.int32(m.field0name5);
    }

    // int32 field_0_name6 = 406
    if (m.field0Name6 !== 0) {
      w.uint32(3248);
      w.int32(m.field0Name6);
    }

    // int32 fieldName7 = 407
    if (m.fieldName7 !== 0) {
      w.uint32(3256);
      w.int32(m.fieldName7);
    }

    // int32 FieldName8 = 408
    if (m.FieldName8 !== 0) {
      w.uint32(3264);
      w.int32(m.FieldName8);
    }

    // int32 field_Name9 = 409
    if (m.fieldName9 !== 0) {
      w.uint32(3272);
      w.int32(m.fieldName9);
    }

    // int32 Field_Name10 = 410
    if (m.FieldName10 !== 0) {
      w.uint32(3280);
      w.int32(m.FieldName10);
    }

    // int32 FIELD_NAME11 = 411
    if (m.FIELDNAME11 !== 0) {
      w.uint32(3288);
      w.int32(m.FIELDNAME11);
    }

    // int32 FIELD_name12 = 412
    if (m.FIELDName12 !== 0) {
      w.uint32(3296);
      w.int32(m.FIELDName12);
    }

    // int32 __field_name13 = 413
    if (m._fieldName13 !== 0) {
      w.uint32(3304);
      w.int32(m._fieldName13);
    }

    // int32 __Field_name14 = 414
    if (m._FieldName14 !== 0) {
      w.uint32(3312);
      w.int32(m._FieldName14);
    }

    // int32 field__name15 = 415
    if (m.field_name15 !== 0) {
      w.uint32(3320);
      w.int32(m.field_name15);
    }

    // int32 field__Name16 = 416
    if (m.field_Name16 !== 0) {
      w.uint32(3328);
      w.int32(m.field_Name16);
    }

    // int32 field_name17__ = 417
    if (m.fieldName17_ !== 0) {
      w.uint32(3336);
      w.int32(m.fieldName17_);
    }

    // int32 Field_name18__ = 418
    if (m.FieldName18_ !== 0) {
      w.uint32(3344);
      w.int32(m.FieldName18_);
    }

    return w;
  }

  public static decode(
    m: TestAllTypesProto3,
    r: pjs.Reader,
    length: number
  ): TestAllTypesProto3 {
    const l = r.pos + length;
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

        // TestAllTypesProto3.NestedMessage optional_nested_message = 18
        case 146:
          m.optionalNestedMessage = TestAllTypesProto3.NestedMessage.decode(
            undefined,
            r,
            r.uint32()
          );
          continue;

        // ForeignMessage optional_foreign_message = 19
        case 154:
          m.optionalForeignMessage = ForeignMessage.decode(
            undefined,
            r,
            r.uint32()
          );
          continue;

        // TestAllTypesProto3.NestedEnum optional_nested_enum = 21
        case 168:
          m.optionalNestedEnum = r.int32();
          continue;

        // ForeignEnum optional_foreign_enum = 22
        case 176:
          m.optionalForeignEnum = r.int32();
          continue;

        // TestAllTypesProto3.AliasedEnum optional_aliased_enum = 23
        case 184:
          m.optionalAliasedEnum = r.int32();
          continue;

        // string optional_string_piece = 24
        case 194:
          m.optionalStringPiece = r.string();
          continue;

        // string optional_cord = 25
        case 202:
          m.optionalCord = r.string();
          continue;

        // TestAllTypesProto3 recursive_message = 27
        case 218:
          m.recursiveMessage = TestAllTypesProto3.decode(
            undefined,
            r,
            r.uint32()
          );
          continue;

        // int32 repeated_int32 = 31
        case 248:
          m.repeatedInt32 = r.int32();
          continue;

        // int64 repeated_int64 = 32
        case 256:
          m.repeatedInt64 = r.int64();
          continue;

        // uint32 repeated_uint32 = 33
        case 264:
          m.repeatedUint32 = r.uint32();
          continue;

        // uint64 repeated_uint64 = 34
        case 272:
          m.repeatedUint64 = r.uint64();
          continue;

        // sint32 repeated_sint32 = 35
        case 280:
          m.repeatedSint32 = r.sint32();
          continue;

        // sint64 repeated_sint64 = 36
        case 288:
          m.repeatedSint64 = r.sint64();
          continue;

        // fixed32 repeated_fixed32 = 37
        case 301:
          m.repeatedFixed32 = r.fixed32();
          continue;

        // fixed64 repeated_fixed64 = 38
        case 305:
          m.repeatedFixed64 = r.fixed64();
          continue;

        // sfixed32 repeated_sfixed32 = 39
        case 317:
          m.repeatedSfixed32 = r.sfixed32();
          continue;

        // sfixed64 repeated_sfixed64 = 40
        case 321:
          m.repeatedSfixed64 = r.sfixed64();
          continue;

        // float repeated_float = 41
        case 333:
          m.repeatedFloat = r.float();
          continue;

        // double repeated_double = 42
        case 337:
          m.repeatedDouble = r.double();
          continue;

        // bool repeated_bool = 43
        case 344:
          m.repeatedBool = r.bool();
          continue;

        // string repeated_string = 44
        case 354:
          m.repeatedString = r.string();
          continue;

        // bytes repeated_bytes = 45
        case 362:
          m.repeatedBytes = r.bytes();
          continue;

        // TestAllTypesProto3.NestedMessage repeated_nested_message = 48
        case 386:
          m.repeatedNestedMessage = TestAllTypesProto3.NestedMessage.decode(
            undefined,
            r,
            r.uint32()
          );
          continue;

        // ForeignMessage repeated_foreign_message = 49
        case 394:
          m.repeatedForeignMessage = ForeignMessage.decode(
            undefined,
            r,
            r.uint32()
          );
          continue;

        // TestAllTypesProto3.NestedEnum repeated_nested_enum = 51
        case 408:
          m.repeatedNestedEnum = r.int32();
          continue;

        // ForeignEnum repeated_foreign_enum = 52
        case 416:
          m.repeatedForeignEnum = r.int32();
          continue;

        // string repeated_string_piece = 54
        case 434:
          m.repeatedStringPiece = r.string();
          continue;

        // string repeated_cord = 55
        case 442:
          m.repeatedCord = r.string();
          continue;

        // int32 packed_int32 = 75
        case 600:
          m.packedInt32 = r.int32();
          continue;

        // int64 packed_int64 = 76
        case 608:
          m.packedInt64 = r.int64();
          continue;

        // uint32 packed_uint32 = 77
        case 616:
          m.packedUint32 = r.uint32();
          continue;

        // uint64 packed_uint64 = 78
        case 624:
          m.packedUint64 = r.uint64();
          continue;

        // sint32 packed_sint32 = 79
        case 632:
          m.packedSint32 = r.sint32();
          continue;

        // sint64 packed_sint64 = 80
        case 640:
          m.packedSint64 = r.sint64();
          continue;

        // fixed32 packed_fixed32 = 81
        case 653:
          m.packedFixed32 = r.fixed32();
          continue;

        // fixed64 packed_fixed64 = 82
        case 657:
          m.packedFixed64 = r.fixed64();
          continue;

        // sfixed32 packed_sfixed32 = 83
        case 669:
          m.packedSfixed32 = r.sfixed32();
          continue;

        // sfixed64 packed_sfixed64 = 84
        case 673:
          m.packedSfixed64 = r.sfixed64();
          continue;

        // float packed_float = 85
        case 685:
          m.packedFloat = r.float();
          continue;

        // double packed_double = 86
        case 689:
          m.packedDouble = r.double();
          continue;

        // bool packed_bool = 87
        case 696:
          m.packedBool = r.bool();
          continue;

        // TestAllTypesProto3.NestedEnum packed_nested_enum = 88
        case 704:
          m.packedNestedEnum = r.int32();
          continue;

        // int32 unpacked_int32 = 89
        case 712:
          m.unpackedInt32 = r.int32();
          continue;

        // int64 unpacked_int64 = 90
        case 720:
          m.unpackedInt64 = r.int64();
          continue;

        // uint32 unpacked_uint32 = 91
        case 728:
          m.unpackedUint32 = r.uint32();
          continue;

        // uint64 unpacked_uint64 = 92
        case 736:
          m.unpackedUint64 = r.uint64();
          continue;

        // sint32 unpacked_sint32 = 93
        case 744:
          m.unpackedSint32 = r.sint32();
          continue;

        // sint64 unpacked_sint64 = 94
        case 752:
          m.unpackedSint64 = r.sint64();
          continue;

        // fixed32 unpacked_fixed32 = 95
        case 765:
          m.unpackedFixed32 = r.fixed32();
          continue;

        // fixed64 unpacked_fixed64 = 96
        case 769:
          m.unpackedFixed64 = r.fixed64();
          continue;

        // sfixed32 unpacked_sfixed32 = 97
        case 781:
          m.unpackedSfixed32 = r.sfixed32();
          continue;

        // sfixed64 unpacked_sfixed64 = 98
        case 785:
          m.unpackedSfixed64 = r.sfixed64();
          continue;

        // float unpacked_float = 99
        case 797:
          m.unpackedFloat = r.float();
          continue;

        // double unpacked_double = 100
        case 801:
          m.unpackedDouble = r.double();
          continue;

        // bool unpacked_bool = 101
        case 808:
          m.unpackedBool = r.bool();
          continue;

        // TestAllTypesProto3.NestedEnum unpacked_nested_enum = 102
        case 816:
          m.unpackedNestedEnum = r.int32();
          continue;

        // map<int32, int32> map_int32_int32 = 56
        case 450:
          {
            const [k, v] = TestAllTypesProto3.decodeMapInt32Int32(
              r,
              r.uint32()
            );
            m.mapInt32Int32.set(k, v);
          }
          continue;

        // map<int64, int64> map_int64_int64 = 57
        case 458:
          {
            const [k, v] = TestAllTypesProto3.decodeMapInt64Int64(
              r,
              r.uint32()
            );
            m.mapInt64Int64.set(k, v);
          }
          continue;

        // map<uint32, uint32> map_uint32_uint32 = 58
        case 466:
          {
            const [k, v] = TestAllTypesProto3.decodeMapUint32Uint32(
              r,
              r.uint32()
            );
            m.mapUint32Uint32.set(k, v);
          }
          continue;

        // map<uint64, uint64> map_uint64_uint64 = 59
        case 474:
          {
            const [k, v] = TestAllTypesProto3.decodeMapUint64Uint64(
              r,
              r.uint32()
            );
            m.mapUint64Uint64.set(k, v);
          }
          continue;

        // map<sint32, sint32> map_sint32_sint32 = 60
        case 482:
          {
            const [k, v] = TestAllTypesProto3.decodeMapSint32Sint32(
              r,
              r.uint32()
            );
            m.mapSint32Sint32.set(k, v);
          }
          continue;

        // map<sint64, sint64> map_sint64_sint64 = 61
        case 490:
          {
            const [k, v] = TestAllTypesProto3.decodeMapSint64Sint64(
              r,
              r.uint32()
            );
            m.mapSint64Sint64.set(k, v);
          }
          continue;

        // map<fixed32, fixed32> map_fixed32_fixed32 = 62
        case 498:
          {
            const [k, v] = TestAllTypesProto3.decodeMapFixed32Fixed32(
              r,
              r.uint32()
            );
            m.mapFixed32Fixed32.set(k, v);
          }
          continue;

        // map<fixed64, fixed64> map_fixed64_fixed64 = 63
        case 506:
          {
            const [k, v] = TestAllTypesProto3.decodeMapFixed64Fixed64(
              r,
              r.uint32()
            );
            m.mapFixed64Fixed64.set(k, v);
          }
          continue;

        // map<sfixed32, sfixed32> map_sfixed32_sfixed32 = 64
        case 514:
          {
            const [k, v] = TestAllTypesProto3.decodeMapSfixed32Sfixed32(
              r,
              r.uint32()
            );
            m.mapSfixed32Sfixed32.set(k, v);
          }
          continue;

        // map<sfixed64, sfixed64> map_sfixed64_sfixed64 = 65
        case 522:
          {
            const [k, v] = TestAllTypesProto3.decodeMapSfixed64Sfixed64(
              r,
              r.uint32()
            );
            m.mapSfixed64Sfixed64.set(k, v);
          }
          continue;

        // map<int32, float> map_int32_float = 66
        case 530:
          {
            const [k, v] = TestAllTypesProto3.decodeMapInt32Float(
              r,
              r.uint32()
            );
            m.mapInt32Float.set(k, v);
          }
          continue;

        // map<int32, double> map_int32_double = 67
        case 538:
          {
            const [k, v] = TestAllTypesProto3.decodeMapInt32Double(
              r,
              r.uint32()
            );
            m.mapInt32Double.set(k, v);
          }
          continue;

        // map<bool, bool> map_bool_bool = 68
        case 546:
          {
            const [k, v] = TestAllTypesProto3.decodeMapBoolBool(r, r.uint32());
            m.mapBoolBool.set(k, v);
          }
          continue;

        // map<string, string> map_string_string = 69
        case 554:
          {
            const [k, v] = TestAllTypesProto3.decodeMapStringString(
              r,
              r.uint32()
            );
            m.mapStringString.set(k, v);
          }
          continue;

        // map<string, bytes> map_string_bytes = 70
        case 562:
          {
            const [k, v] = TestAllTypesProto3.decodeMapStringBytes(
              r,
              r.uint32()
            );
            m.mapStringBytes.set(k, v);
          }
          continue;

        // map<string, TestAllTypesProto3.NestedMessage> map_string_nested_message = 71
        case 570:
          {
            const [k, v] = TestAllTypesProto3.decodeMapStringNestedMessage(
              r,
              r.uint32()
            );
            m.mapStringNestedMessage.set(k, v);
          }
          continue;

        // map<string, ForeignMessage> map_string_foreign_message = 72
        case 578:
          {
            const [k, v] = TestAllTypesProto3.decodeMapStringForeignMessage(
              r,
              r.uint32()
            );
            m.mapStringForeignMessage.set(k, v);
          }
          continue;

        // map<string, TestAllTypesProto3.NestedEnum> map_string_nested_enum = 73
        case 586:
          {
            const [k, v] = TestAllTypesProto3.decodeMapStringNestedEnum(
              r,
              r.uint32()
            );
            m.mapStringNestedEnum.set(k, v);
          }
          continue;

        // map<string, ForeignEnum> map_string_foreign_enum = 74
        case 594:
          {
            const [k, v] = TestAllTypesProto3.decodeMapStringForeignEnum(
              r,
              r.uint32()
            );
            m.mapStringForeignEnum.set(k, v);
          }
          continue;

        // NOT IMPLEMENTED

        // google.protobuf.BoolValue optional_bool_wrapper = 201
        case 1610:
          m.optionalBoolWrapper =
            google_protobuf_wrappers_models.google.protobuf.BoolValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Int32Value optional_int32_wrapper = 202
        case 1618:
          m.optionalInt32Wrapper =
            google_protobuf_wrappers_models.google.protobuf.Int32Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Int64Value optional_int64_wrapper = 203
        case 1626:
          m.optionalInt64Wrapper =
            google_protobuf_wrappers_models.google.protobuf.Int64Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.UInt32Value optional_uint32_wrapper = 204
        case 1634:
          m.optionalUint32Wrapper =
            google_protobuf_wrappers_models.google.protobuf.UInt32Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.UInt64Value optional_uint64_wrapper = 205
        case 1642:
          m.optionalUint64Wrapper =
            google_protobuf_wrappers_models.google.protobuf.UInt64Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.FloatValue optional_float_wrapper = 206
        case 1650:
          m.optionalFloatWrapper =
            google_protobuf_wrappers_models.google.protobuf.FloatValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.DoubleValue optional_double_wrapper = 207
        case 1658:
          m.optionalDoubleWrapper =
            google_protobuf_wrappers_models.google.protobuf.DoubleValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.StringValue optional_string_wrapper = 208
        case 1666:
          m.optionalStringWrapper =
            google_protobuf_wrappers_models.google.protobuf.StringValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.BytesValue optional_bytes_wrapper = 209
        case 1674:
          m.optionalBytesWrapper =
            google_protobuf_wrappers_models.google.protobuf.BytesValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.BoolValue repeated_bool_wrapper = 211
        case 1690:
          m.repeatedBoolWrapper =
            google_protobuf_wrappers_models.google.protobuf.BoolValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Int32Value repeated_int32_wrapper = 212
        case 1698:
          m.repeatedInt32Wrapper =
            google_protobuf_wrappers_models.google.protobuf.Int32Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Int64Value repeated_int64_wrapper = 213
        case 1706:
          m.repeatedInt64Wrapper =
            google_protobuf_wrappers_models.google.protobuf.Int64Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.UInt32Value repeated_uint32_wrapper = 214
        case 1714:
          m.repeatedUint32Wrapper =
            google_protobuf_wrappers_models.google.protobuf.UInt32Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.UInt64Value repeated_uint64_wrapper = 215
        case 1722:
          m.repeatedUint64Wrapper =
            google_protobuf_wrappers_models.google.protobuf.UInt64Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.FloatValue repeated_float_wrapper = 216
        case 1730:
          m.repeatedFloatWrapper =
            google_protobuf_wrappers_models.google.protobuf.FloatValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.DoubleValue repeated_double_wrapper = 217
        case 1738:
          m.repeatedDoubleWrapper =
            google_protobuf_wrappers_models.google.protobuf.DoubleValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.StringValue repeated_string_wrapper = 218
        case 1746:
          m.repeatedStringWrapper =
            google_protobuf_wrappers_models.google.protobuf.StringValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.BytesValue repeated_bytes_wrapper = 219
        case 1754:
          m.repeatedBytesWrapper =
            google_protobuf_wrappers_models.google.protobuf.BytesValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Duration optional_duration = 301
        case 2410:
          m.optionalDuration =
            google_protobuf_duration_models.google.protobuf.Duration.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Timestamp optional_timestamp = 302
        case 2418:
          m.optionalTimestamp =
            google_protobuf_timestamp_models.google.protobuf.Timestamp.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.FieldMask optional_field_mask = 303
        case 2426:
          m.optionalFieldMask =
            google_protobuf_field_mask_models.google.protobuf.FieldMask.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Struct optional_struct = 304
        case 2434:
          m.optionalStruct =
            google_protobuf_struct_models.google.protobuf.Struct.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Any optional_any = 305
        case 2442:
          m.optionalAny = google_protobuf_any_models.google.protobuf.Any.decode(
            undefined,
            r,
            r.uint32()
          );
          continue;

        // google.protobuf.Value optional_value = 306
        case 2450:
          m.optionalValue =
            google_protobuf_struct_models.google.protobuf.Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.NullValue optional_null_value = 307
        case 2456:
          m.optionalNullValue = r.int32();
          continue;

        // google.protobuf.Duration repeated_duration = 311
        case 2490:
          m.repeatedDuration =
            google_protobuf_duration_models.google.protobuf.Duration.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Timestamp repeated_timestamp = 312
        case 2498:
          m.repeatedTimestamp =
            google_protobuf_timestamp_models.google.protobuf.Timestamp.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.FieldMask repeated_fieldmask = 313
        case 2506:
          m.repeatedFieldmask =
            google_protobuf_field_mask_models.google.protobuf.FieldMask.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Struct repeated_struct = 324
        case 2594:
          m.repeatedStruct =
            google_protobuf_struct_models.google.protobuf.Struct.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Any repeated_any = 315
        case 2522:
          m.repeatedAny = google_protobuf_any_models.google.protobuf.Any.decode(
            undefined,
            r,
            r.uint32()
          );
          continue;

        // google.protobuf.Value repeated_value = 316
        case 2530:
          m.repeatedValue =
            google_protobuf_struct_models.google.protobuf.Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.ListValue repeated_list_value = 317
        case 2538:
          m.repeatedListValue =
            google_protobuf_struct_models.google.protobuf.ListValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // int32 fieldname1 = 401
        case 3208:
          m.fieldname1 = r.int32();
          continue;

        // int32 field_name2 = 402
        case 3216:
          m.fieldName2 = r.int32();
          continue;

        // int32 _field_name3 = 403
        case 3224:
          m.FieldName3 = r.int32();
          continue;

        // int32 field__name4_ = 404
        case 3232:
          m.field_name4_ = r.int32();
          continue;

        // int32 field0name5 = 405
        case 3240:
          m.field0name5 = r.int32();
          continue;

        // int32 field_0_name6 = 406
        case 3248:
          m.field0Name6 = r.int32();
          continue;

        // int32 fieldName7 = 407
        case 3256:
          m.fieldName7 = r.int32();
          continue;

        // int32 FieldName8 = 408
        case 3264:
          m.FieldName8 = r.int32();
          continue;

        // int32 field_Name9 = 409
        case 3272:
          m.fieldName9 = r.int32();
          continue;

        // int32 Field_Name10 = 410
        case 3280:
          m.FieldName10 = r.int32();
          continue;

        // int32 FIELD_NAME11 = 411
        case 3288:
          m.FIELDNAME11 = r.int32();
          continue;

        // int32 FIELD_name12 = 412
        case 3296:
          m.FIELDName12 = r.int32();
          continue;

        // int32 __field_name13 = 413
        case 3304:
          m._fieldName13 = r.int32();
          continue;

        // int32 __Field_name14 = 414
        case 3312:
          m._FieldName14 = r.int32();
          continue;

        // int32 field__name15 = 415
        case 3320:
          m.field_name15 = r.int32();
          continue;

        // int32 field__Name16 = 416
        case 3328:
          m.field_Name16 = r.int32();
          continue;

        // int32 field_name17__ = 417
        case 3336:
          m.fieldName17_ = r.int32();
          continue;

        // int32 Field_name18__ = 418
        case 3344:
          m.FieldName18_ = r.int32();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: TestAllTypesProto3): TestAllTypesProto3JSON {
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
      optionalNestedEnum: TestAllTypesProto3.NestedEnum[m.optionalNestedEnum],
      optionalForeignEnum: ForeignEnum[m.optionalForeignEnum],
      optionalAliasedEnum:
        TestAllTypesProto3.AliasedEnum[m.optionalAliasedEnum],
      optionalStringPiece: m.optionalStringPiece,
      optionalCord: m.optionalCord,
      recursiveMessage: m.recursiveMessage.toJSON(),
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
      repeatedNestedEnum: TestAllTypesProto3.NestedEnum[m.repeatedNestedEnum],
      repeatedForeignEnum: ForeignEnum[m.repeatedForeignEnum],
      repeatedStringPiece: m.repeatedStringPiece,
      repeatedCord: m.repeatedCord,
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
      packedNestedEnum: TestAllTypesProto3.NestedEnum[m.packedNestedEnum],
      unpackedInt32: m.unpackedInt32,
      unpackedInt64: m.unpackedInt64.toString(),
      unpackedUint32: m.unpackedUint32,
      unpackedUint64: m.unpackedUint64.toString(),
      unpackedSint32: m.unpackedSint32,
      unpackedSint64: m.unpackedSint64.toString(),
      unpackedFixed32: m.unpackedFixed32,
      unpackedFixed64: m.unpackedFixed64.toString(),
      unpackedSfixed32: m.unpackedSfixed32,
      unpackedSfixed64: m.unpackedSfixed64.toString(),
      unpackedFloat: m.unpackedFloat,
      unpackedDouble: m.unpackedDouble,
      unpackedBool: m.unpackedBool,
      unpackedNestedEnum: TestAllTypesProto3.NestedEnum[m.unpackedNestedEnum],
      mapInt32Int32: runtime.convertMapToRecord(m.mapInt32Int32, (val) => val),
      mapInt64Int64: runtime.convertMapToRecord(m.mapInt64Int64, (val) =>
        val.toString()
      ),
      mapUint32Uint32: runtime.convertMapToRecord(
        m.mapUint32Uint32,
        (val) => val
      ),
      mapUint64Uint64: runtime.convertMapToRecord(m.mapUint64Uint64, (val) =>
        val.toString()
      ),
      mapSint32Sint32: runtime.convertMapToRecord(
        m.mapSint32Sint32,
        (val) => val
      ),
      mapSint64Sint64: runtime.convertMapToRecord(m.mapSint64Sint64, (val) =>
        val.toString()
      ),
      mapFixed32Fixed32: runtime.convertMapToRecord(
        m.mapFixed32Fixed32,
        (val) => val
      ),
      mapFixed64Fixed64: runtime.convertMapToRecord(
        m.mapFixed64Fixed64,
        (val) => val.toString()
      ),
      mapSfixed32Sfixed32: runtime.convertMapToRecord(
        m.mapSfixed32Sfixed32,
        (val) => val
      ),
      mapSfixed64Sfixed64: runtime.convertMapToRecord(
        m.mapSfixed64Sfixed64,
        (val) => val.toString()
      ),
      mapInt32Float: runtime.convertMapToRecord(m.mapInt32Float, (val) => val),
      mapInt32Double: runtime.convertMapToRecord(
        m.mapInt32Double,
        (val) => val
      ),
      mapBoolBool: runtime.convertMapToRecord(m.mapBoolBool, (val) => val),
      mapStringString: runtime.convertMapToRecord(
        m.mapStringString,
        (val) => val
      ),
      mapStringBytes: runtime.convertMapToRecord(m.mapStringBytes, (val) =>
        pjs.util.base64.encode(val, 0, val.length)
      ),
      mapStringNestedMessage: runtime.convertMapToRecord(
        m.mapStringNestedMessage,
        (val) => val.toJSON()
      ),
      mapStringForeignMessage: runtime.convertMapToRecord(
        m.mapStringForeignMessage,
        (val) => val.toJSON()
      ),
      mapStringNestedEnum: runtime.convertMapToRecord(
        m.mapStringNestedEnum,
        (val) => TestAllTypesProto3.NestedEnum[val]
      ),
      mapStringForeignEnum: runtime.convertMapToRecord(
        m.mapStringForeignEnum,
        (val) => ForeignEnum[val]
      ),
      // NOT IMPLEMENTED
      optionalBoolWrapper: m.optionalBoolWrapper.toJSON(),
      optionalInt32Wrapper: m.optionalInt32Wrapper.toJSON(),
      optionalInt64Wrapper: m.optionalInt64Wrapper.toJSON(),
      optionalUint32Wrapper: m.optionalUint32Wrapper.toJSON(),
      optionalUint64Wrapper: m.optionalUint64Wrapper.toJSON(),
      optionalFloatWrapper: m.optionalFloatWrapper.toJSON(),
      optionalDoubleWrapper: m.optionalDoubleWrapper.toJSON(),
      optionalStringWrapper: m.optionalStringWrapper.toJSON(),
      optionalBytesWrapper: m.optionalBytesWrapper.toJSON(),
      repeatedBoolWrapper: m.repeatedBoolWrapper.toJSON(),
      repeatedInt32Wrapper: m.repeatedInt32Wrapper.toJSON(),
      repeatedInt64Wrapper: m.repeatedInt64Wrapper.toJSON(),
      repeatedUint32Wrapper: m.repeatedUint32Wrapper.toJSON(),
      repeatedUint64Wrapper: m.repeatedUint64Wrapper.toJSON(),
      repeatedFloatWrapper: m.repeatedFloatWrapper.toJSON(),
      repeatedDoubleWrapper: m.repeatedDoubleWrapper.toJSON(),
      repeatedStringWrapper: m.repeatedStringWrapper.toJSON(),
      repeatedBytesWrapper: m.repeatedBytesWrapper.toJSON(),
      optionalDuration: m.optionalDuration.toJSON(),
      optionalTimestamp: m.optionalTimestamp.toJSON(),
      optionalFieldMask: m.optionalFieldMask.toJSON(),
      optionalStruct: m.optionalStruct.toJSON(),
      optionalAny: m.optionalAny.toJSON(),
      optionalValue: m.optionalValue.toJSON(),
      optionalNullValue:
        google_protobuf_struct_models.google.protobuf.NullValue[
          m.optionalNullValue
        ],
      repeatedDuration: m.repeatedDuration.toJSON(),
      repeatedTimestamp: m.repeatedTimestamp.toJSON(),
      repeatedFieldmask: m.repeatedFieldmask.toJSON(),
      repeatedStruct: m.repeatedStruct.toJSON(),
      repeatedAny: m.repeatedAny.toJSON(),
      repeatedValue: m.repeatedValue.toJSON(),
      repeatedListValue: m.repeatedListValue.toJSON(),
      fieldname1: m.fieldname1,
      fieldName2: m.fieldName2,
      FieldName3: m.FieldName3,
      field_name4_: m.field_name4_,
      field0name5: m.field0name5,
      field0Name6: m.field0Name6,
      fieldName7: m.fieldName7,
      FieldName8: m.FieldName8,
      fieldName9: m.fieldName9,
      FieldName10: m.FieldName10,
      FIELDNAME11: m.FIELDNAME11,
      FIELDName12: m.FIELDName12,
      _fieldName13: m._fieldName13,
      _FieldName14: m._FieldName14,
      field_name15: m.field_name15,
      field_Name16: m.field_Name16,
      fieldName17_: m.fieldName17_,
      FieldName18_: m.FieldName18_,
    };
  }

  public static fromJSON(
    m: TestAllTypesProto3,
    obj: TestAllTypesProto3JSON
  ): TestAllTypesProto3 {
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
    m.optionalNestedMessage = new TestAllTypesProto3.NestedMessage().fromJSON(
      obj.optionalNestedMessage
    );
    m.optionalForeignMessage = new ForeignMessage().fromJSON(
      obj.optionalForeignMessage
    );
    m.optionalNestedEnum =
      TestAllTypesProto3.NestedEnum[obj.optionalNestedEnum];
    m.optionalForeignEnum = ForeignEnum[obj.optionalForeignEnum];
    m.optionalAliasedEnum =
      TestAllTypesProto3.AliasedEnum[obj.optionalAliasedEnum];
    m.optionalStringPiece = obj.optionalStringPiece;
    m.optionalCord = obj.optionalCord;
    m.recursiveMessage = new TestAllTypesProto3().fromJSON(
      obj.recursiveMessage
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
    m.repeatedNestedMessage = new TestAllTypesProto3.NestedMessage().fromJSON(
      obj.repeatedNestedMessage
    );
    m.repeatedForeignMessage = new ForeignMessage().fromJSON(
      obj.repeatedForeignMessage
    );
    m.repeatedNestedEnum =
      TestAllTypesProto3.NestedEnum[obj.repeatedNestedEnum];
    m.repeatedForeignEnum = ForeignEnum[obj.repeatedForeignEnum];
    m.repeatedStringPiece = obj.repeatedStringPiece;
    m.repeatedCord = obj.repeatedCord;
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
    m.packedNestedEnum = TestAllTypesProto3.NestedEnum[obj.packedNestedEnum];
    m.unpackedInt32 = obj.unpackedInt32;
    m.unpackedInt64 = pjs.util.Long.fromValue(obj.unpackedInt64, false);
    m.unpackedUint32 = obj.unpackedUint32;
    m.unpackedUint64 = pjs.util.Long.fromValue(obj.unpackedUint64, true);
    m.unpackedSint32 = obj.unpackedSint32;
    m.unpackedSint64 = pjs.util.Long.fromValue(obj.unpackedSint64, false);
    m.unpackedFixed32 = obj.unpackedFixed32;
    m.unpackedFixed64 = pjs.util.Long.fromValue(obj.unpackedFixed64, true);
    m.unpackedSfixed32 = obj.unpackedSfixed32;
    m.unpackedSfixed64 = pjs.util.Long.fromValue(obj.unpackedSfixed64, false);
    m.unpackedFloat = obj.unpackedFloat;
    m.unpackedDouble = obj.unpackedDouble;
    m.unpackedBool = obj.unpackedBool;
    m.unpackedNestedEnum =
      TestAllTypesProto3.NestedEnum[obj.unpackedNestedEnum];
    m.mapInt32Int32 = runtime.convertRecordToMap(
      obj.mapInt32Int32,
      (val) => val
    );
    m.mapInt64Int64 = runtime.convertRecordToMap(obj.mapInt64Int64, (val) =>
      pjs.util.Long.fromValue(val, false)
    );
    m.mapUint32Uint32 = runtime.convertRecordToMap(
      obj.mapUint32Uint32,
      (val) => val
    );
    m.mapUint64Uint64 = runtime.convertRecordToMap(obj.mapUint64Uint64, (val) =>
      pjs.util.Long.fromValue(val, true)
    );
    m.mapSint32Sint32 = runtime.convertRecordToMap(
      obj.mapSint32Sint32,
      (val) => val
    );
    m.mapSint64Sint64 = runtime.convertRecordToMap(obj.mapSint64Sint64, (val) =>
      pjs.util.Long.fromValue(val, false)
    );
    m.mapFixed32Fixed32 = runtime.convertRecordToMap(
      obj.mapFixed32Fixed32,
      (val) => val
    );
    m.mapFixed64Fixed64 = runtime.convertRecordToMap(
      obj.mapFixed64Fixed64,
      (val) => pjs.util.Long.fromValue(val, true)
    );
    m.mapSfixed32Sfixed32 = runtime.convertRecordToMap(
      obj.mapSfixed32Sfixed32,
      (val) => val
    );
    m.mapSfixed64Sfixed64 = runtime.convertRecordToMap(
      obj.mapSfixed64Sfixed64,
      (val) => pjs.util.Long.fromValue(val, false)
    );
    m.mapInt32Float = runtime.convertRecordToMap(
      obj.mapInt32Float,
      (val) => val
    );
    m.mapInt32Double = runtime.convertRecordToMap(
      obj.mapInt32Double,
      (val) => val
    );
    m.mapBoolBool = runtime.convertRecordToMap(obj.mapBoolBool, (val) => val);
    m.mapStringString = runtime.convertRecordToMap(
      obj.mapStringString,
      (val) => val
    );
    m.mapStringBytes = runtime.convertRecordToMap(obj.mapStringBytes, (val) => {
      const tmpBuffer = [];
      pjs.util.base64.decode(val, tmpBuffer, 0);
      return new pjs.util.Buffer(tmpBuffer);
    });
    m.mapStringNestedMessage = runtime.convertRecordToMap(
      obj.mapStringNestedMessage,
      (val) => new TestAllTypesProto3.NestedMessage().fromJSON(val)
    );
    m.mapStringForeignMessage = runtime.convertRecordToMap(
      obj.mapStringForeignMessage,
      (val) => new ForeignMessage().fromJSON(val)
    );
    m.mapStringNestedEnum = runtime.convertRecordToMap(
      obj.mapStringNestedEnum,
      (val) => TestAllTypesProto3.NestedEnum[val]
    );
    m.mapStringForeignEnum = runtime.convertRecordToMap(
      obj.mapStringForeignEnum,
      (val) => ForeignEnum[val]
    );
    // NOT IMPLEMENTED
    m.optionalBoolWrapper =
      new google_protobuf_wrappers_models.google.protobuf.BoolValue().fromJSON(
        obj.optionalBoolWrapper
      );
    m.optionalInt32Wrapper =
      new google_protobuf_wrappers_models.google.protobuf.Int32Value().fromJSON(
        obj.optionalInt32Wrapper
      );
    m.optionalInt64Wrapper =
      new google_protobuf_wrappers_models.google.protobuf.Int64Value().fromJSON(
        obj.optionalInt64Wrapper
      );
    m.optionalUint32Wrapper =
      new google_protobuf_wrappers_models.google.protobuf.UInt32Value().fromJSON(
        obj.optionalUint32Wrapper
      );
    m.optionalUint64Wrapper =
      new google_protobuf_wrappers_models.google.protobuf.UInt64Value().fromJSON(
        obj.optionalUint64Wrapper
      );
    m.optionalFloatWrapper =
      new google_protobuf_wrappers_models.google.protobuf.FloatValue().fromJSON(
        obj.optionalFloatWrapper
      );
    m.optionalDoubleWrapper =
      new google_protobuf_wrappers_models.google.protobuf.DoubleValue().fromJSON(
        obj.optionalDoubleWrapper
      );
    m.optionalStringWrapper =
      new google_protobuf_wrappers_models.google.protobuf.StringValue().fromJSON(
        obj.optionalStringWrapper
      );
    m.optionalBytesWrapper =
      new google_protobuf_wrappers_models.google.protobuf.BytesValue().fromJSON(
        obj.optionalBytesWrapper
      );
    m.repeatedBoolWrapper =
      new google_protobuf_wrappers_models.google.protobuf.BoolValue().fromJSON(
        obj.repeatedBoolWrapper
      );
    m.repeatedInt32Wrapper =
      new google_protobuf_wrappers_models.google.protobuf.Int32Value().fromJSON(
        obj.repeatedInt32Wrapper
      );
    m.repeatedInt64Wrapper =
      new google_protobuf_wrappers_models.google.protobuf.Int64Value().fromJSON(
        obj.repeatedInt64Wrapper
      );
    m.repeatedUint32Wrapper =
      new google_protobuf_wrappers_models.google.protobuf.UInt32Value().fromJSON(
        obj.repeatedUint32Wrapper
      );
    m.repeatedUint64Wrapper =
      new google_protobuf_wrappers_models.google.protobuf.UInt64Value().fromJSON(
        obj.repeatedUint64Wrapper
      );
    m.repeatedFloatWrapper =
      new google_protobuf_wrappers_models.google.protobuf.FloatValue().fromJSON(
        obj.repeatedFloatWrapper
      );
    m.repeatedDoubleWrapper =
      new google_protobuf_wrappers_models.google.protobuf.DoubleValue().fromJSON(
        obj.repeatedDoubleWrapper
      );
    m.repeatedStringWrapper =
      new google_protobuf_wrappers_models.google.protobuf.StringValue().fromJSON(
        obj.repeatedStringWrapper
      );
    m.repeatedBytesWrapper =
      new google_protobuf_wrappers_models.google.protobuf.BytesValue().fromJSON(
        obj.repeatedBytesWrapper
      );
    m.optionalDuration =
      new google_protobuf_duration_models.google.protobuf.Duration().fromJSON(
        obj.optionalDuration
      );
    m.optionalTimestamp =
      new google_protobuf_timestamp_models.google.protobuf.Timestamp().fromJSON(
        obj.optionalTimestamp
      );
    m.optionalFieldMask =
      new google_protobuf_field_mask_models.google.protobuf.FieldMask().fromJSON(
        obj.optionalFieldMask
      );
    m.optionalStruct =
      new google_protobuf_struct_models.google.protobuf.Struct().fromJSON(
        obj.optionalStruct
      );
    m.optionalAny =
      new google_protobuf_any_models.google.protobuf.Any().fromJSON(
        obj.optionalAny
      );
    m.optionalValue =
      new google_protobuf_struct_models.google.protobuf.Value().fromJSON(
        obj.optionalValue
      );
    m.optionalNullValue =
      google_protobuf_struct_models.google.protobuf.NullValue[
        obj.optionalNullValue
      ];
    m.repeatedDuration =
      new google_protobuf_duration_models.google.protobuf.Duration().fromJSON(
        obj.repeatedDuration
      );
    m.repeatedTimestamp =
      new google_protobuf_timestamp_models.google.protobuf.Timestamp().fromJSON(
        obj.repeatedTimestamp
      );
    m.repeatedFieldmask =
      new google_protobuf_field_mask_models.google.protobuf.FieldMask().fromJSON(
        obj.repeatedFieldmask
      );
    m.repeatedStruct =
      new google_protobuf_struct_models.google.protobuf.Struct().fromJSON(
        obj.repeatedStruct
      );
    m.repeatedAny =
      new google_protobuf_any_models.google.protobuf.Any().fromJSON(
        obj.repeatedAny
      );
    m.repeatedValue =
      new google_protobuf_struct_models.google.protobuf.Value().fromJSON(
        obj.repeatedValue
      );
    m.repeatedListValue =
      new google_protobuf_struct_models.google.protobuf.ListValue().fromJSON(
        obj.repeatedListValue
      );
    m.fieldname1 = obj.fieldname1;
    m.fieldName2 = obj.fieldName2;
    m.FieldName3 = obj.FieldName3;
    m.field_name4_ = obj.field_name4_;
    m.field0name5 = obj.field0name5;
    m.field0Name6 = obj.field0Name6;
    m.fieldName7 = obj.fieldName7;
    m.FieldName8 = obj.FieldName8;
    m.fieldName9 = obj.fieldName9;
    m.FieldName10 = obj.FieldName10;
    m.FIELDNAME11 = obj.FIELDNAME11;
    m.FIELDName12 = obj.FIELDName12;
    m._fieldName13 = obj._fieldName13;
    m._FieldName14 = obj._FieldName14;
    m.field_name15 = obj.field_name15;
    m.field_Name16 = obj.field_Name16;
    m.fieldName17_ = obj.fieldName17_;
    m.FieldName18_ = obj.FieldName18_;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return TestAllTypesProto3.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): TestAllTypesProto3 {
    const r = new pjs.Reader(buffer);
    return TestAllTypesProto3.decode(this, r, r.len);
  }

  toJSON(): TestAllTypesProto3JSON {
    return TestAllTypesProto3.toJSON(this);
  }

  fromJSON(obj: TestAllTypesProto3JSON): TestAllTypesProto3 {
    return TestAllTypesProto3.fromJSON(this, obj);
  }

  clone(): TestAllTypesProto3 {
    return new TestAllTypesProto3(this);
  }
}

export namespace TestAllTypesProto3 {
  export enum NestedEnum {
    FOO = 0,
    BAR = 1,
    BAZ = 2,
    NEG = 1,
  }

  export enum AliasedEnum {
    ALIAS_FOO = 0,
    ALIAS_BAR = 1,
    ALIAS_BAZ = 2,
    MOO = 2,
    moo = 2,
    bAz = 2,
  }

  export interface NestedMessageJSON {
    a: number;
    corecursive: TestAllTypesProto3JSON;
  }

  export class NestedMessage {
    a: number = 0;
    corecursive: TestAllTypesProto3 = new TestAllTypesProto3();

    public static fields = ["a", "corecursive"];

    public get fields() {
      return NestedMessage.fields;
    }

    constructor(obj?: NestedMessage) {
      if (!obj) return;

      if (obj.a !== undefined) {
        this.a = obj.a;
      }
      if (obj.corecursive !== undefined) {
        this.corecursive = obj.corecursive;
      }
    }

    public static encode(m: NestedMessage, w: pjs.Writer): pjs.Writer {
      // int32 a = 1
      if (m.a !== 0) {
        w.uint32(8);
        w.int32(m.a);
      }

      // TestAllTypesProto3 corecursive = 2
      if (m.corecursive !== new TestAllTypesProto3()) {
        w.uint32(18);
        TestAllTypesProto3.encode(m.corecursive, w.fork()).ldelim();
      }

      return w;
    }

    public static decode(
      m: NestedMessage,
      r: pjs.Reader,
      length: number
    ): NestedMessage {
      const l = r.pos + length;
      while (r.pos < l) {
        const tag = r.uint32();
        switch (tag) {
          // int32 a = 1
          case 8:
            m.a = r.int32();
            continue;

          // TestAllTypesProto3 corecursive = 2
          case 18:
            m.corecursive = TestAllTypesProto3.decode(undefined, r, r.uint32());
            continue;
        }

        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
      }

      return m;
    }

    public static toJSON(m: NestedMessage): NestedMessageJSON {
      return {
        a: m.a,
        corecursive: m.corecursive.toJSON(),
      };
    }

    public static fromJSON(
      m: NestedMessage,
      obj: NestedMessageJSON
    ): NestedMessage {
      m.a = obj.a;
      m.corecursive = new TestAllTypesProto3().fromJSON(obj.corecursive);

      return m;
    }

    serialize(): Uint8Array | Buffer {
      const w = pjs.Writer.create();
      return NestedMessage.encode(this, w).finish();
    }

    deserialize(buffer: Uint8Array | Buffer): NestedMessage {
      const r = new pjs.Reader(buffer);
      return NestedMessage.decode(this, r, r.len);
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
  FOREIGN_FOO = 0,
  FOREIGN_BAR = 1,
  FOREIGN_BAZ = 2,
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
    length: number
  ): ForeignMessage {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 c = 1
        case 8:
          m.c = r.int32();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
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

  deserialize(buffer: Uint8Array | Buffer): ForeignMessage {
    const r = new pjs.Reader(buffer);
    return ForeignMessage.decode(this, r, r.len);
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
  FOREIGN_FOO = 0,
  FOREIGN_BAR = 1,
  FOREIGN_BAZ = 2,
}

export interface NullHypothesisProto3JSON {}

export class NullHypothesisProto3 {
  public static fields = [];

  public get fields() {
    return NullHypothesisProto3.fields;
  }

  constructor(obj?: NullHypothesisProto3) {
    if (!obj) return;
  }

  public static encode(m: NullHypothesisProto3, w: pjs.Writer): pjs.Writer {
    return w;
  }

  public static decode(
    m: NullHypothesisProto3,
    r: pjs.Reader,
    length: number
  ): NullHypothesisProto3 {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: NullHypothesisProto3): NullHypothesisProto3JSON {
    return {};
  }

  public static fromJSON(
    m: NullHypothesisProto3,
    obj: NullHypothesisProto3JSON
  ): NullHypothesisProto3 {
    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return NullHypothesisProto3.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): NullHypothesisProto3 {
    const r = new pjs.Reader(buffer);
    return NullHypothesisProto3.decode(this, r, r.len);
  }

  toJSON(): NullHypothesisProto3JSON {
    return NullHypothesisProto3.toJSON(this);
  }

  fromJSON(obj: NullHypothesisProto3JSON): NullHypothesisProto3 {
    return NullHypothesisProto3.fromJSON(this, obj);
  }

  clone(): NullHypothesisProto3 {
    return new NullHypothesisProto3(this);
  }
}

export enum ForeignEnum {
  FOREIGN_FOO = 0,
  FOREIGN_BAR = 1,
  FOREIGN_BAZ = 2,
}

export interface EnumOnlyProto3JSON {}

export class EnumOnlyProto3 {
  public static fields = [];

  public get fields() {
    return EnumOnlyProto3.fields;
  }

  constructor(obj?: EnumOnlyProto3) {
    if (!obj) return;
  }

  public static encode(m: EnumOnlyProto3, w: pjs.Writer): pjs.Writer {
    return w;
  }

  public static decode(
    m: EnumOnlyProto3,
    r: pjs.Reader,
    length: number
  ): EnumOnlyProto3 {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: EnumOnlyProto3): EnumOnlyProto3JSON {
    return {};
  }

  public static fromJSON(
    m: EnumOnlyProto3,
    obj: EnumOnlyProto3JSON
  ): EnumOnlyProto3 {
    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return EnumOnlyProto3.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): EnumOnlyProto3 {
    const r = new pjs.Reader(buffer);
    return EnumOnlyProto3.decode(this, r, r.len);
  }

  toJSON(): EnumOnlyProto3JSON {
    return EnumOnlyProto3.toJSON(this);
  }

  fromJSON(obj: EnumOnlyProto3JSON): EnumOnlyProto3 {
    return EnumOnlyProto3.fromJSON(this, obj);
  }

  clone(): EnumOnlyProto3 {
    return new EnumOnlyProto3(this);
  }
}

export namespace EnumOnlyProto3 {}
