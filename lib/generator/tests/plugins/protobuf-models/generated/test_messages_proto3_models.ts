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

export enum ForeignEnum {
  FOREIGN_FOO = 0,
  FOREIGN_BAR = 1,
  FOREIGN_BAZ = 2,
}

export interface ITestAllTypesProto3Obj {
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
  optionalNestedMessage: TestAllTypesProto3.NestedMessage;
  optionalForeignMessage: ForeignMessage;
  optionalNestedEnum: number;
  optionalForeignEnum: number;
  optionalAliasedEnum: number;
  optionalStringPiece: string;
  optionalCord: string;
  recursiveMessage: TestAllTypesProto3;
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
  repeatedNestedMessage: TestAllTypesProto3.NestedMessage;
  repeatedForeignMessage: ForeignMessage;
  repeatedNestedEnum: number;
  repeatedForeignEnum: number;
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
  packedNestedEnum: number;
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
  unpackedNestedEnum: number;
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
  mapStringNestedMessage: Record<string, TestAllTypesProto3.NestedMessage>;
  mapStringForeignMessage: Record<string, ForeignMessage>;
  mapStringNestedEnum: Record<string, number>;
  mapStringForeignEnum: Record<string, number>;
  oneofUint32?: number;
  oneofNestedMessage?: TestAllTypesProto3.NestedMessage;
  oneofString?: string;
  oneofBytes?: string;
  oneofBool?: boolean;
  oneofUint64?: string;
  oneofFloat?: number;
  oneofDouble?: number;
  oneofEnum?: number;
  oneofNullValue?: number;
  optionalBoolWrapper: google.protobuf.BoolValue;
  optionalInt32Wrapper: google.protobuf.Int32Value;
  optionalInt64Wrapper: google.protobuf.Int64Value;
  optionalUint32Wrapper: google.protobuf.UInt32Value;
  optionalUint64Wrapper: google.protobuf.UInt64Value;
  optionalFloatWrapper: google.protobuf.FloatValue;
  optionalDoubleWrapper: google.protobuf.DoubleValue;
  optionalStringWrapper: google.protobuf.StringValue;
  optionalBytesWrapper: google.protobuf.BytesValue;
  repeatedBoolWrapper: google.protobuf.BoolValue;
  repeatedInt32Wrapper: google.protobuf.Int32Value;
  repeatedInt64Wrapper: google.protobuf.Int64Value;
  repeatedUint32Wrapper: google.protobuf.UInt32Value;
  repeatedUint64Wrapper: google.protobuf.UInt64Value;
  repeatedFloatWrapper: google.protobuf.FloatValue;
  repeatedDoubleWrapper: google.protobuf.DoubleValue;
  repeatedStringWrapper: google.protobuf.StringValue;
  repeatedBytesWrapper: google.protobuf.BytesValue;
  optionalDuration: google.protobuf.Duration;
  optionalTimestamp: google.protobuf.Timestamp;
  optionalFieldMask: google.protobuf.FieldMask;
  optionalStruct: google.protobuf.Struct;
  optionalAny: google.protobuf.Any;
  optionalValue: google.protobuf.Value;
  optionalNullValue: number;
  repeatedDuration: google.protobuf.Duration;
  repeatedTimestamp: google.protobuf.Timestamp;
  repeatedFieldmask: google.protobuf.FieldMask;
  repeatedStruct: google.protobuf.Struct;
  repeatedAny: google.protobuf.Any;
  repeatedValue: google.protobuf.Value;
  repeatedListValue: google.protobuf.ListValue;
  fieldname1: number;
  fieldName2: number;
  FieldName3: number;
  field_name4_: number;
  field0name5: number;
  field0Name6: number;
  fieldName7: number;
  fieldName8: number;
  fieldName9: number;
  fieldName10: number;
  fIELDNAME11: number;
  fIELDName12: number;
  _fieldName13: number;
  _FieldName14: number;
  field_name15: number;
  field_Name16: number;
  fieldName17_: number;
  fieldName18_: number;
}

export interface ITestAllTypesProto3 {
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
  optionalNestedMessage: TestAllTypesProto3.NestedMessage;
  optionalForeignMessage: ForeignMessage;
  optionalNestedEnum: number;
  optionalForeignEnum: number;
  optionalAliasedEnum: number;
  optionalStringPiece: string;
  optionalCord: string;
  recursiveMessage: TestAllTypesProto3;
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
  repeatedNestedMessage: TestAllTypesProto3.NestedMessage;
  repeatedForeignMessage: ForeignMessage;
  repeatedNestedEnum: number;
  repeatedForeignEnum: number;
  repeatedStringPiece: string;
  repeatedCord: string;
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
  packedNestedEnum: number;
  unpackedInt32: number;
  unpackedInt64: pjs.Long;
  unpackedUint32: number;
  unpackedUint64: pjs.Long;
  unpackedSint32: number;
  unpackedSint64: pjs.Long;
  unpackedFixed32: number;
  unpackedFixed64: pjs.Long;
  unpackedSfixed32: number;
  unpackedSfixed64: pjs.Long;
  unpackedFloat: number;
  unpackedDouble: number;
  unpackedBool: boolean;
  unpackedNestedEnum: number;
  mapInt32Int32: Map<number, number>;
  mapInt64Int64: Map<pjs.Long, pjs.Long>;
  mapUint32Uint32: Map<number, number>;
  mapUint64Uint64: Map<pjs.Long, pjs.Long>;
  mapSint32Sint32: Map<number, number>;
  mapSint64Sint64: Map<pjs.Long, pjs.Long>;
  mapFixed32Fixed32: Map<number, number>;
  mapFixed64Fixed64: Map<pjs.Long, pjs.Long>;
  mapSfixed32Sfixed32: Map<number, number>;
  mapSfixed64Sfixed64: Map<pjs.Long, pjs.Long>;
  mapInt32Float: Map<number, number>;
  mapInt32Double: Map<number, number>;
  mapBoolBool: Map<boolean, boolean>;
  mapStringString: Map<string, string>;
  mapStringBytes: Map<string, Uint8Array | Buffer>;
  mapStringNestedMessage: Map<string, TestAllTypesProto3.NestedMessage>;
  mapStringForeignMessage: Map<string, ForeignMessage>;
  mapStringNestedEnum: Map<string, number>;
  mapStringForeignEnum: Map<string, number>;
  oneofUint32?: number;
  oneofNestedMessage?: TestAllTypesProto3.NestedMessage;
  oneofString?: string;
  oneofBytes?: Uint8Array | Buffer;
  oneofBool?: boolean;
  oneofUint64?: pjs.Long;
  oneofFloat?: number;
  oneofDouble?: number;
  oneofEnum?: number;
  oneofNullValue?: number;
  optionalBoolWrapper: google.protobuf.BoolValue;
  optionalInt32Wrapper: google.protobuf.Int32Value;
  optionalInt64Wrapper: google.protobuf.Int64Value;
  optionalUint32Wrapper: google.protobuf.UInt32Value;
  optionalUint64Wrapper: google.protobuf.UInt64Value;
  optionalFloatWrapper: google.protobuf.FloatValue;
  optionalDoubleWrapper: google.protobuf.DoubleValue;
  optionalStringWrapper: google.protobuf.StringValue;
  optionalBytesWrapper: google.protobuf.BytesValue;
  repeatedBoolWrapper: google.protobuf.BoolValue;
  repeatedInt32Wrapper: google.protobuf.Int32Value;
  repeatedInt64Wrapper: google.protobuf.Int64Value;
  repeatedUint32Wrapper: google.protobuf.UInt32Value;
  repeatedUint64Wrapper: google.protobuf.UInt64Value;
  repeatedFloatWrapper: google.protobuf.FloatValue;
  repeatedDoubleWrapper: google.protobuf.DoubleValue;
  repeatedStringWrapper: google.protobuf.StringValue;
  repeatedBytesWrapper: google.protobuf.BytesValue;
  optionalDuration: google.protobuf.Duration;
  optionalTimestamp: google.protobuf.Timestamp;
  optionalFieldMask: google.protobuf.FieldMask;
  optionalStruct: google.protobuf.Struct;
  optionalAny: google.protobuf.Any;
  optionalValue: google.protobuf.Value;
  optionalNullValue: number;
  repeatedDuration: google.protobuf.Duration;
  repeatedTimestamp: google.protobuf.Timestamp;
  repeatedFieldmask: google.protobuf.FieldMask;
  repeatedStruct: google.protobuf.Struct;
  repeatedAny: google.protobuf.Any;
  repeatedValue: google.protobuf.Value;
  repeatedListValue: google.protobuf.ListValue;
  fieldname1: number;
  fieldName2: number;
  FieldName3: number;
  field_name4_: number;
  field0name5: number;
  field0Name6: number;
  fieldName7: number;
  fieldName8: number;
  fieldName9: number;
  fieldName10: number;
  fIELDNAME11: number;
  fIELDName12: number;
  _fieldName13: number;
  _FieldName14: number;
  field_name15: number;
  field_Name16: number;
  fieldName17_: number;
  fieldName18_: number;
}

export class TestAllTypesProto3 implements ITestAllTypesProto3 {
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
  repeatedNestedMessage: TestAllTypesProto3.NestedMessage = [];
  repeatedForeignMessage: ForeignMessage = [];
  repeatedNestedEnum: number = [];
  repeatedForeignEnum: number = [];
  repeatedStringPiece: string = [];
  repeatedCord: string = [];
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
  packedNestedEnum: number = [];
  unpackedInt32: number = [];
  unpackedInt64: pjs.Long = [];
  unpackedUint32: number = [];
  unpackedUint64: pjs.Long = [];
  unpackedSint32: number = [];
  unpackedSint64: pjs.Long = [];
  unpackedFixed32: number = [];
  unpackedFixed64: pjs.Long = [];
  unpackedSfixed32: number = [];
  unpackedSfixed64: pjs.Long = [];
  unpackedFloat: number = [];
  unpackedDouble: number = [];
  unpackedBool: boolean = [];
  unpackedNestedEnum: number = [];
  mapInt32Int32: Record<number, number> = {};
  mapInt64Int64: Record<pjs.Long, pjs.Long> = {};
  mapUint32Uint32: Record<number, number> = {};
  mapUint64Uint64: Record<pjs.Long, pjs.Long> = {};
  mapSint32Sint32: Record<number, number> = {};
  mapSint64Sint64: Record<pjs.Long, pjs.Long> = {};
  mapFixed32Fixed32: Record<number, number> = {};
  mapFixed64Fixed64: Record<pjs.Long, pjs.Long> = {};
  mapSfixed32Sfixed32: Record<number, number> = {};
  mapSfixed64Sfixed64: Record<pjs.Long, pjs.Long> = {};
  mapInt32Float: Record<number, number> = {};
  mapInt32Double: Record<number, number> = {};
  mapBoolBool: Record<boolean, boolean> = {};
  mapStringString: Record<string, string> = {};
  mapStringBytes: Record<string, Uint8Array | Buffer> = {};
  mapStringNestedMessage: Record<string, TestAllTypesProto3.NestedMessage> = {};
  mapStringForeignMessage: Record<string, ForeignMessage> = {};
  mapStringNestedEnum: Record<string, number> = {};
  mapStringForeignEnum: Record<string, number> = {};
  oneofUint32?: number = 0;
  oneofNestedMessage?: TestAllTypesProto3.NestedMessage =
    new TestAllTypesProto3.NestedMessage();
  oneofString?: string = "";
  oneofBytes?: Uint8Array | Buffer = pjs.util.newBuffer(0);
  oneofBool?: boolean = false;
  oneofUint64?: pjs.Long = pjs.util.Long.fromValue(0, true);
  oneofFloat?: number = 0;
  oneofDouble?: number = 0;
  oneofEnum?: number = TestAllTypesProto3.NestedEnum.FOO;
  oneofNullValue?: number =
    google_protobuf_struct_models.google.protobuf.NullValue.NULL_VALUE;
  optionalBoolWrapper: google.protobuf.BoolValue =
    new google_protobuf_wrappers_models.google.protobuf.BoolValue();
  optionalInt32Wrapper: google.protobuf.Int32Value =
    new google_protobuf_wrappers_models.google.protobuf.Int32Value();
  optionalInt64Wrapper: google.protobuf.Int64Value =
    new google_protobuf_wrappers_models.google.protobuf.Int64Value();
  optionalUint32Wrapper: google.protobuf.UInt32Value =
    new google_protobuf_wrappers_models.google.protobuf.UInt32Value();
  optionalUint64Wrapper: google.protobuf.UInt64Value =
    new google_protobuf_wrappers_models.google.protobuf.UInt64Value();
  optionalFloatWrapper: google.protobuf.FloatValue =
    new google_protobuf_wrappers_models.google.protobuf.FloatValue();
  optionalDoubleWrapper: google.protobuf.DoubleValue =
    new google_protobuf_wrappers_models.google.protobuf.DoubleValue();
  optionalStringWrapper: google.protobuf.StringValue =
    new google_protobuf_wrappers_models.google.protobuf.StringValue();
  optionalBytesWrapper: google.protobuf.BytesValue =
    new google_protobuf_wrappers_models.google.protobuf.BytesValue();
  repeatedBoolWrapper: google.protobuf.BoolValue = [];
  repeatedInt32Wrapper: google.protobuf.Int32Value = [];
  repeatedInt64Wrapper: google.protobuf.Int64Value = [];
  repeatedUint32Wrapper: google.protobuf.UInt32Value = [];
  repeatedUint64Wrapper: google.protobuf.UInt64Value = [];
  repeatedFloatWrapper: google.protobuf.FloatValue = [];
  repeatedDoubleWrapper: google.protobuf.DoubleValue = [];
  repeatedStringWrapper: google.protobuf.StringValue = [];
  repeatedBytesWrapper: google.protobuf.BytesValue = [];
  optionalDuration: google.protobuf.Duration =
    new google_protobuf_duration_models.google.protobuf.Duration();
  optionalTimestamp: google.protobuf.Timestamp =
    new google_protobuf_timestamp_models.google.protobuf.Timestamp();
  optionalFieldMask: google.protobuf.FieldMask =
    new google_protobuf_field_mask_models.google.protobuf.FieldMask();
  optionalStruct: google.protobuf.Struct =
    new google_protobuf_struct_models.google.protobuf.Struct();
  optionalAny: google.protobuf.Any =
    new google_protobuf_any_models.google.protobuf.Any();
  optionalValue: google.protobuf.Value =
    new google_protobuf_struct_models.google.protobuf.Value();
  optionalNullValue: number =
    google_protobuf_struct_models.google.protobuf.NullValue.NULL_VALUE;
  repeatedDuration: google.protobuf.Duration = [];
  repeatedTimestamp: google.protobuf.Timestamp = [];
  repeatedFieldmask: google.protobuf.FieldMask = [];
  repeatedStruct: google.protobuf.Struct = [];
  repeatedAny: google.protobuf.Any = [];
  repeatedValue: google.protobuf.Value = [];
  repeatedListValue: google.protobuf.ListValue = [];
  fieldname1: number = 0;
  fieldName2: number = 0;
  FieldName3: number = 0;
  field_name4_: number = 0;
  field0name5: number = 0;
  field0Name6: number = 0;
  fieldName7: number = 0;
  fieldName8: number = 0;
  fieldName9: number = 0;
  fieldName10: number = 0;
  fIELDNAME11: number = 0;
  fIELDName12: number = 0;
  _fieldName13: number = 0;
  _FieldName14: number = 0;
  field_name15: number = 0;
  field_Name16: number = 0;
  fieldName17_: number = 0;
  fieldName18_: number = 0;

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
    "oneofUint32",
    "oneofNestedMessage",
    "oneofString",
    "oneofBytes",
    "oneofBool",
    "oneofUint64",
    "oneofFloat",
    "oneofDouble",
    "oneofEnum",
    "oneofNullValue",
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
    "fieldName8",
    "fieldName9",
    "fieldName10",
    "fIELDNAME11",
    "fIELDName12",
    "_fieldName13",
    "_FieldName14",
    "field_name15",
    "field_Name16",
    "fieldName17_",
    "fieldName18_",
  ];

  public get fields() {
    return TestAllTypesProto3.fields;
  }

  constructor(obj?: Partial<ITestAllTypesProto3>) {
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
      this.mapInt32Int32 = obj.mapInt32Int32;
    }
    if (obj.mapInt64Int64 !== undefined) {
      this.mapInt64Int64 = obj.mapInt64Int64;
    }
    if (obj.mapUint32Uint32 !== undefined) {
      this.mapUint32Uint32 = obj.mapUint32Uint32;
    }
    if (obj.mapUint64Uint64 !== undefined) {
      this.mapUint64Uint64 = obj.mapUint64Uint64;
    }
    if (obj.mapSint32Sint32 !== undefined) {
      this.mapSint32Sint32 = obj.mapSint32Sint32;
    }
    if (obj.mapSint64Sint64 !== undefined) {
      this.mapSint64Sint64 = obj.mapSint64Sint64;
    }
    if (obj.mapFixed32Fixed32 !== undefined) {
      this.mapFixed32Fixed32 = obj.mapFixed32Fixed32;
    }
    if (obj.mapFixed64Fixed64 !== undefined) {
      this.mapFixed64Fixed64 = obj.mapFixed64Fixed64;
    }
    if (obj.mapSfixed32Sfixed32 !== undefined) {
      this.mapSfixed32Sfixed32 = obj.mapSfixed32Sfixed32;
    }
    if (obj.mapSfixed64Sfixed64 !== undefined) {
      this.mapSfixed64Sfixed64 = obj.mapSfixed64Sfixed64;
    }
    if (obj.mapInt32Float !== undefined) {
      this.mapInt32Float = obj.mapInt32Float;
    }
    if (obj.mapInt32Double !== undefined) {
      this.mapInt32Double = obj.mapInt32Double;
    }
    if (obj.mapBoolBool !== undefined) {
      this.mapBoolBool = obj.mapBoolBool;
    }
    if (obj.mapStringString !== undefined) {
      this.mapStringString = obj.mapStringString;
    }
    if (obj.mapStringBytes !== undefined) {
      this.mapStringBytes = obj.mapStringBytes;
    }
    if (obj.mapStringNestedMessage !== undefined) {
      this.mapStringNestedMessage = obj.mapStringNestedMessage;
    }
    if (obj.mapStringForeignMessage !== undefined) {
      this.mapStringForeignMessage = obj.mapStringForeignMessage;
    }
    if (obj.mapStringNestedEnum !== undefined) {
      this.mapStringNestedEnum = obj.mapStringNestedEnum;
    }
    if (obj.mapStringForeignEnum !== undefined) {
      this.mapStringForeignEnum = obj.mapStringForeignEnum;
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
    if (obj.oneofBool !== undefined) {
      this.oneofBool = obj.oneofBool;
    }
    if (obj.oneofUint64 !== undefined) {
      this.oneofUint64 = obj.oneofUint64;
    }
    if (obj.oneofFloat !== undefined) {
      this.oneofFloat = obj.oneofFloat;
    }
    if (obj.oneofDouble !== undefined) {
      this.oneofDouble = obj.oneofDouble;
    }
    if (obj.oneofEnum !== undefined) {
      this.oneofEnum = obj.oneofEnum;
    }
    if (obj.oneofNullValue !== undefined) {
      this.oneofNullValue = obj.oneofNullValue;
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
    if (obj.fieldName8 !== undefined) {
      this.fieldName8 = obj.fieldName8;
    }
    if (obj.fieldName9 !== undefined) {
      this.fieldName9 = obj.fieldName9;
    }
    if (obj.fieldName10 !== undefined) {
      this.fieldName10 = obj.fieldName10;
    }
    if (obj.fIELDNAME11 !== undefined) {
      this.fIELDNAME11 = obj.fIELDNAME11;
    }
    if (obj.fIELDName12 !== undefined) {
      this.fIELDName12 = obj.fIELDName12;
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
    if (obj.fieldName18_ !== undefined) {
      this.fieldName18_ = obj.fieldName18_;
    }
  }

  public static encode(
    m: ITestAllTypesProto3,
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

    // TestAllTypesProto3.NestedMessage optional_nested_message = 18
    if (m.optionalNestedMessage !== new TestAllTypesProto3.NestedMessage()) {
      w.uint32(146);
      w.TestAllTypesProto3.NestedMessage(m.optionalNestedMessage);
    }

    // ForeignMessage optional_foreign_message = 19
    if (m.optionalForeignMessage !== new ForeignMessage()) {
      w.uint32(154);
      w.ForeignMessage(m.optionalForeignMessage);
    }

    // TestAllTypesProto3.NestedEnum optional_nested_enum = 21
    if (m.optionalNestedEnum !== TestAllTypesProto3.NestedEnum.FOO) {
      w.uint32(168);
      w.uint32(m.optionalNestedEnum);
    }

    // ForeignEnum optional_foreign_enum = 22
    if (m.optionalForeignEnum !== ForeignEnum.FOREIGN_FOO) {
      w.uint32(176);
      w.uint32(m.optionalForeignEnum);
    }

    // TestAllTypesProto3.AliasedEnum optional_aliased_enum = 23
    if (m.optionalAliasedEnum !== TestAllTypesProto3.AliasedEnum.ALIAS_FOO) {
      w.uint32(184);
      w.uint32(m.optionalAliasedEnum);
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
      w.TestAllTypesProto3(m.recursiveMessage);
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

    // TestAllTypesProto3.NestedMessage repeated_nested_message = 48
    if (m.repeatedNestedMessage !== []) {
      w.uint32(386);
      w.TestAllTypesProto3.NestedMessage(m.repeatedNestedMessage);
    }

    // ForeignMessage repeated_foreign_message = 49
    if (m.repeatedForeignMessage !== []) {
      w.uint32(394);
      w.ForeignMessage(m.repeatedForeignMessage);
    }

    // TestAllTypesProto3.NestedEnum repeated_nested_enum = 51
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

    // int32 packed_int32 = 75
    if (m.packedInt32 !== []) {
      w.uint32(600);
      w.int32(m.packedInt32);
    }

    // int64 packed_int64 = 76
    if (m.packedInt64 !== []) {
      w.uint32(608);
      w.int64(m.packedInt64);
    }

    // uint32 packed_uint32 = 77
    if (m.packedUint32 !== []) {
      w.uint32(616);
      w.uint32(m.packedUint32);
    }

    // uint64 packed_uint64 = 78
    if (m.packedUint64 !== []) {
      w.uint32(624);
      w.uint64(m.packedUint64);
    }

    // sint32 packed_sint32 = 79
    if (m.packedSint32 !== []) {
      w.uint32(632);
      w.sint32(m.packedSint32);
    }

    // sint64 packed_sint64 = 80
    if (m.packedSint64 !== []) {
      w.uint32(640);
      w.sint64(m.packedSint64);
    }

    // fixed32 packed_fixed32 = 81
    if (m.packedFixed32 !== []) {
      w.uint32(653);
      w.fixed32(m.packedFixed32);
    }

    // fixed64 packed_fixed64 = 82
    if (m.packedFixed64 !== []) {
      w.uint32(657);
      w.fixed64(m.packedFixed64);
    }

    // sfixed32 packed_sfixed32 = 83
    if (m.packedSfixed32 !== []) {
      w.uint32(669);
      w.sfixed32(m.packedSfixed32);
    }

    // sfixed64 packed_sfixed64 = 84
    if (m.packedSfixed64 !== []) {
      w.uint32(673);
      w.sfixed64(m.packedSfixed64);
    }

    // float packed_float = 85
    if (m.packedFloat !== []) {
      w.uint32(685);
      w.float(m.packedFloat);
    }

    // double packed_double = 86
    if (m.packedDouble !== []) {
      w.uint32(689);
      w.double(m.packedDouble);
    }

    // bool packed_bool = 87
    if (m.packedBool !== []) {
      w.uint32(696);
      w.bool(m.packedBool);
    }

    // TestAllTypesProto3.NestedEnum packed_nested_enum = 88
    if (m.packedNestedEnum !== []) {
      w.uint32(704);
      w.uint32(m.packedNestedEnum);
    }

    // int32 unpacked_int32 = 89
    if (m.unpackedInt32 !== []) {
      w.uint32(712);
      w.int32(m.unpackedInt32);
    }

    // int64 unpacked_int64 = 90
    if (m.unpackedInt64 !== []) {
      w.uint32(720);
      w.int64(m.unpackedInt64);
    }

    // uint32 unpacked_uint32 = 91
    if (m.unpackedUint32 !== []) {
      w.uint32(728);
      w.uint32(m.unpackedUint32);
    }

    // uint64 unpacked_uint64 = 92
    if (m.unpackedUint64 !== []) {
      w.uint32(736);
      w.uint64(m.unpackedUint64);
    }

    // sint32 unpacked_sint32 = 93
    if (m.unpackedSint32 !== []) {
      w.uint32(744);
      w.sint32(m.unpackedSint32);
    }

    // sint64 unpacked_sint64 = 94
    if (m.unpackedSint64 !== []) {
      w.uint32(752);
      w.sint64(m.unpackedSint64);
    }

    // fixed32 unpacked_fixed32 = 95
    if (m.unpackedFixed32 !== []) {
      w.uint32(765);
      w.fixed32(m.unpackedFixed32);
    }

    // fixed64 unpacked_fixed64 = 96
    if (m.unpackedFixed64 !== []) {
      w.uint32(769);
      w.fixed64(m.unpackedFixed64);
    }

    // sfixed32 unpacked_sfixed32 = 97
    if (m.unpackedSfixed32 !== []) {
      w.uint32(781);
      w.sfixed32(m.unpackedSfixed32);
    }

    // sfixed64 unpacked_sfixed64 = 98
    if (m.unpackedSfixed64 !== []) {
      w.uint32(785);
      w.sfixed64(m.unpackedSfixed64);
    }

    // float unpacked_float = 99
    if (m.unpackedFloat !== []) {
      w.uint32(797);
      w.float(m.unpackedFloat);
    }

    // double unpacked_double = 100
    if (m.unpackedDouble !== []) {
      w.uint32(801);
      w.double(m.unpackedDouble);
    }

    // bool unpacked_bool = 101
    if (m.unpackedBool !== []) {
      w.uint32(808);
      w.bool(m.unpackedBool);
    }

    // TestAllTypesProto3.NestedEnum unpacked_nested_enum = 102
    if (m.unpackedNestedEnum !== []) {
      w.uint32(816);
      w.uint32(m.unpackedNestedEnum);
    }

    // map<int32, int32> map_int32_int32 = 56

    // map<int64, int64> map_int64_int64 = 57

    // map<uint32, uint32> map_uint32_uint32 = 58

    // map<uint64, uint64> map_uint64_uint64 = 59

    // map<sint32, sint32> map_sint32_sint32 = 60

    // map<sint64, sint64> map_sint64_sint64 = 61

    // map<fixed32, fixed32> map_fixed32_fixed32 = 62

    // map<fixed64, fixed64> map_fixed64_fixed64 = 63

    // map<sfixed32, sfixed32> map_sfixed32_sfixed32 = 64

    // map<sfixed64, sfixed64> map_sfixed64_sfixed64 = 65

    // map<int32, float> map_int32_float = 66

    // map<int32, double> map_int32_double = 67

    // map<bool, bool> map_bool_bool = 68

    // map<string, string> map_string_string = 69

    // map<string, bytes> map_string_bytes = 70

    // map<string, TestAllTypesProto3.NestedMessage> map_string_nested_message = 71

    // map<string, ForeignMessage> map_string_foreign_message = 72

    // map<string, TestAllTypesProto3.NestedEnum> map_string_nested_enum = 73

    // map<string, ForeignEnum> map_string_foreign_enum = 74

    // oneof uint32 oneof_uint32 = 111

    // oneof TestAllTypesProto3.NestedMessage oneof_nested_message = 112

    // oneof string oneof_string = 113

    // oneof bytes oneof_bytes = 114

    // oneof bool oneof_bool = 115

    // oneof uint64 oneof_uint64 = 116

    // oneof float oneof_float = 117

    // oneof double oneof_double = 118

    // oneof TestAllTypesProto3.NestedEnum oneof_enum = 119

    // oneof google.protobuf.NullValue oneof_null_value = 120

    // google.protobuf.BoolValue optional_bool_wrapper = 201
    if (
      m.optionalBoolWrapper !==
      new google_protobuf_wrappers_models.google.protobuf.BoolValue()
    ) {
      w.uint32(1610);
      w.google.protobuf.BoolValue(m.optionalBoolWrapper);
    }

    // google.protobuf.Int32Value optional_int32_wrapper = 202
    if (
      m.optionalInt32Wrapper !==
      new google_protobuf_wrappers_models.google.protobuf.Int32Value()
    ) {
      w.uint32(1618);
      w.google.protobuf.Int32Value(m.optionalInt32Wrapper);
    }

    // google.protobuf.Int64Value optional_int64_wrapper = 203
    if (
      m.optionalInt64Wrapper !==
      new google_protobuf_wrappers_models.google.protobuf.Int64Value()
    ) {
      w.uint32(1626);
      w.google.protobuf.Int64Value(m.optionalInt64Wrapper);
    }

    // google.protobuf.UInt32Value optional_uint32_wrapper = 204
    if (
      m.optionalUint32Wrapper !==
      new google_protobuf_wrappers_models.google.protobuf.UInt32Value()
    ) {
      w.uint32(1634);
      w.google.protobuf.UInt32Value(m.optionalUint32Wrapper);
    }

    // google.protobuf.UInt64Value optional_uint64_wrapper = 205
    if (
      m.optionalUint64Wrapper !==
      new google_protobuf_wrappers_models.google.protobuf.UInt64Value()
    ) {
      w.uint32(1642);
      w.google.protobuf.UInt64Value(m.optionalUint64Wrapper);
    }

    // google.protobuf.FloatValue optional_float_wrapper = 206
    if (
      m.optionalFloatWrapper !==
      new google_protobuf_wrappers_models.google.protobuf.FloatValue()
    ) {
      w.uint32(1650);
      w.google.protobuf.FloatValue(m.optionalFloatWrapper);
    }

    // google.protobuf.DoubleValue optional_double_wrapper = 207
    if (
      m.optionalDoubleWrapper !==
      new google_protobuf_wrappers_models.google.protobuf.DoubleValue()
    ) {
      w.uint32(1658);
      w.google.protobuf.DoubleValue(m.optionalDoubleWrapper);
    }

    // google.protobuf.StringValue optional_string_wrapper = 208
    if (
      m.optionalStringWrapper !==
      new google_protobuf_wrappers_models.google.protobuf.StringValue()
    ) {
      w.uint32(1666);
      w.google.protobuf.StringValue(m.optionalStringWrapper);
    }

    // google.protobuf.BytesValue optional_bytes_wrapper = 209
    if (
      m.optionalBytesWrapper !==
      new google_protobuf_wrappers_models.google.protobuf.BytesValue()
    ) {
      w.uint32(1674);
      w.google.protobuf.BytesValue(m.optionalBytesWrapper);
    }

    // google.protobuf.BoolValue repeated_bool_wrapper = 211
    if (m.repeatedBoolWrapper !== []) {
      w.uint32(1690);
      w.google.protobuf.BoolValue(m.repeatedBoolWrapper);
    }

    // google.protobuf.Int32Value repeated_int32_wrapper = 212
    if (m.repeatedInt32Wrapper !== []) {
      w.uint32(1698);
      w.google.protobuf.Int32Value(m.repeatedInt32Wrapper);
    }

    // google.protobuf.Int64Value repeated_int64_wrapper = 213
    if (m.repeatedInt64Wrapper !== []) {
      w.uint32(1706);
      w.google.protobuf.Int64Value(m.repeatedInt64Wrapper);
    }

    // google.protobuf.UInt32Value repeated_uint32_wrapper = 214
    if (m.repeatedUint32Wrapper !== []) {
      w.uint32(1714);
      w.google.protobuf.UInt32Value(m.repeatedUint32Wrapper);
    }

    // google.protobuf.UInt64Value repeated_uint64_wrapper = 215
    if (m.repeatedUint64Wrapper !== []) {
      w.uint32(1722);
      w.google.protobuf.UInt64Value(m.repeatedUint64Wrapper);
    }

    // google.protobuf.FloatValue repeated_float_wrapper = 216
    if (m.repeatedFloatWrapper !== []) {
      w.uint32(1730);
      w.google.protobuf.FloatValue(m.repeatedFloatWrapper);
    }

    // google.protobuf.DoubleValue repeated_double_wrapper = 217
    if (m.repeatedDoubleWrapper !== []) {
      w.uint32(1738);
      w.google.protobuf.DoubleValue(m.repeatedDoubleWrapper);
    }

    // google.protobuf.StringValue repeated_string_wrapper = 218
    if (m.repeatedStringWrapper !== []) {
      w.uint32(1746);
      w.google.protobuf.StringValue(m.repeatedStringWrapper);
    }

    // google.protobuf.BytesValue repeated_bytes_wrapper = 219
    if (m.repeatedBytesWrapper !== []) {
      w.uint32(1754);
      w.google.protobuf.BytesValue(m.repeatedBytesWrapper);
    }

    // google.protobuf.Duration optional_duration = 301
    if (
      m.optionalDuration !==
      new google_protobuf_duration_models.google.protobuf.Duration()
    ) {
      w.uint32(2410);
      w.google.protobuf.Duration(m.optionalDuration);
    }

    // google.protobuf.Timestamp optional_timestamp = 302
    if (
      m.optionalTimestamp !==
      new google_protobuf_timestamp_models.google.protobuf.Timestamp()
    ) {
      w.uint32(2418);
      w.google.protobuf.Timestamp(m.optionalTimestamp);
    }

    // google.protobuf.FieldMask optional_field_mask = 303
    if (
      m.optionalFieldMask !==
      new google_protobuf_field_mask_models.google.protobuf.FieldMask()
    ) {
      w.uint32(2426);
      w.google.protobuf.FieldMask(m.optionalFieldMask);
    }

    // google.protobuf.Struct optional_struct = 304
    if (
      m.optionalStruct !==
      new google_protobuf_struct_models.google.protobuf.Struct()
    ) {
      w.uint32(2434);
      w.google.protobuf.Struct(m.optionalStruct);
    }

    // google.protobuf.Any optional_any = 305
    if (
      m.optionalAny !== new google_protobuf_any_models.google.protobuf.Any()
    ) {
      w.uint32(2442);
      w.google.protobuf.Any(m.optionalAny);
    }

    // google.protobuf.Value optional_value = 306
    if (
      m.optionalValue !==
      new google_protobuf_struct_models.google.protobuf.Value()
    ) {
      w.uint32(2450);
      w.google.protobuf.Value(m.optionalValue);
    }

    // google.protobuf.NullValue optional_null_value = 307
    if (
      m.optionalNullValue !==
      google_protobuf_struct_models.google.protobuf.NullValue.NULL_VALUE
    ) {
      w.uint32(2456);
      w.uint32(m.optionalNullValue);
    }

    // google.protobuf.Duration repeated_duration = 311
    if (m.repeatedDuration !== []) {
      w.uint32(2490);
      w.google.protobuf.Duration(m.repeatedDuration);
    }

    // google.protobuf.Timestamp repeated_timestamp = 312
    if (m.repeatedTimestamp !== []) {
      w.uint32(2498);
      w.google.protobuf.Timestamp(m.repeatedTimestamp);
    }

    // google.protobuf.FieldMask repeated_fieldmask = 313
    if (m.repeatedFieldmask !== []) {
      w.uint32(2506);
      w.google.protobuf.FieldMask(m.repeatedFieldmask);
    }

    // google.protobuf.Struct repeated_struct = 324
    if (m.repeatedStruct !== []) {
      w.uint32(2594);
      w.google.protobuf.Struct(m.repeatedStruct);
    }

    // google.protobuf.Any repeated_any = 315
    if (m.repeatedAny !== []) {
      w.uint32(2522);
      w.google.protobuf.Any(m.repeatedAny);
    }

    // google.protobuf.Value repeated_value = 316
    if (m.repeatedValue !== []) {
      w.uint32(2530);
      w.google.protobuf.Value(m.repeatedValue);
    }

    // google.protobuf.ListValue repeated_list_value = 317
    if (m.repeatedListValue !== []) {
      w.uint32(2538);
      w.google.protobuf.ListValue(m.repeatedListValue);
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
    if (m.fieldName8 !== 0) {
      w.uint32(3264);
      w.int32(m.fieldName8);
    }

    // int32 field_Name9 = 409
    if (m.fieldName9 !== 0) {
      w.uint32(3272);
      w.int32(m.fieldName9);
    }

    // int32 Field_Name10 = 410
    if (m.fieldName10 !== 0) {
      w.uint32(3280);
      w.int32(m.fieldName10);
    }

    // int32 FIELD_NAME11 = 411
    if (m.fIELDNAME11 !== 0) {
      w.uint32(3288);
      w.int32(m.fIELDNAME11);
    }

    // int32 FIELD_name12 = 412
    if (m.fIELDName12 !== 0) {
      w.uint32(3296);
      w.int32(m.fIELDName12);
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
    if (m.fieldName18_ !== 0) {
      w.uint32(3344);
      w.int32(m.fieldName18_);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): TestAllTypesProto3 {
    const m = new TestAllTypesProto3();
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

        // TestAllTypesProto3.NestedMessage optional_nested_message = 18
        case 146:
          m.optionalNestedMessage = r.TestAllTypesProto3.NestedMessage();
          continue;

        // ForeignMessage optional_foreign_message = 19
        case 154:
          m.optionalForeignMessage = r.ForeignMessage();
          continue;

        // TestAllTypesProto3.NestedEnum optional_nested_enum = 21
        case 168:
          m.optionalNestedEnum = r.uint32();
          continue;

        // ForeignEnum optional_foreign_enum = 22
        case 176:
          m.optionalForeignEnum = r.uint32();
          continue;

        // TestAllTypesProto3.AliasedEnum optional_aliased_enum = 23
        case 184:
          m.optionalAliasedEnum = r.uint32();
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
          m.recursiveMessage = r.TestAllTypesProto3();
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

        // repeated TestAllTypesProto3.NestedMessage repeated_nested_message = 48
        case 386:
          {
            const value = r.TestAllTypesProto3.NestedMessage();

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

        // repeated TestAllTypesProto3.NestedEnum repeated_nested_enum = 51
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

        // repeated int32 packed_int32 = 75
        case 600:
          {
            const value = r.int32();

            m.packedInt32.push(value);
          }
          continue;

        // repeated int64 packed_int64 = 76
        case 608:
          {
            const value = r.int64();

            m.packedInt64.push(value);
          }
          continue;

        // repeated uint32 packed_uint32 = 77
        case 616:
          {
            const value = r.uint32();

            m.packedUint32.push(value);
          }
          continue;

        // repeated uint64 packed_uint64 = 78
        case 624:
          {
            const value = r.uint64();

            m.packedUint64.push(value);
          }
          continue;

        // repeated sint32 packed_sint32 = 79
        case 632:
          {
            const value = r.sint32();

            m.packedSint32.push(value);
          }
          continue;

        // repeated sint64 packed_sint64 = 80
        case 640:
          {
            const value = r.sint64();

            m.packedSint64.push(value);
          }
          continue;

        // repeated fixed32 packed_fixed32 = 81
        case 653:
          {
            const value = r.fixed32();

            m.packedFixed32.push(value);
          }
          continue;

        // repeated fixed64 packed_fixed64 = 82
        case 657:
          {
            const value = r.fixed64();

            m.packedFixed64.push(value);
          }
          continue;

        // repeated sfixed32 packed_sfixed32 = 83
        case 669:
          {
            const value = r.sfixed32();

            m.packedSfixed32.push(value);
          }
          continue;

        // repeated sfixed64 packed_sfixed64 = 84
        case 673:
          {
            const value = r.sfixed64();

            m.packedSfixed64.push(value);
          }
          continue;

        // repeated float packed_float = 85
        case 685:
          {
            const value = r.float();

            m.packedFloat.push(value);
          }
          continue;

        // repeated double packed_double = 86
        case 689:
          {
            const value = r.double();

            m.packedDouble.push(value);
          }
          continue;

        // repeated bool packed_bool = 87
        case 696:
          {
            const value = r.bool();

            m.packedBool.push(value);
          }
          continue;

        // repeated TestAllTypesProto3.NestedEnum packed_nested_enum = 88
        case 704:
          {
            const value = r.uint32();

            m.packedNestedEnum.push(value);
          }
          continue;

        // repeated int32 unpacked_int32 = 89
        case 712:
          {
            const value = r.int32();

            m.unpackedInt32.push(value);
          }
          continue;

        // repeated int64 unpacked_int64 = 90
        case 720:
          {
            const value = r.int64();

            m.unpackedInt64.push(value);
          }
          continue;

        // repeated uint32 unpacked_uint32 = 91
        case 728:
          {
            const value = r.uint32();

            m.unpackedUint32.push(value);
          }
          continue;

        // repeated uint64 unpacked_uint64 = 92
        case 736:
          {
            const value = r.uint64();

            m.unpackedUint64.push(value);
          }
          continue;

        // repeated sint32 unpacked_sint32 = 93
        case 744:
          {
            const value = r.sint32();

            m.unpackedSint32.push(value);
          }
          continue;

        // repeated sint64 unpacked_sint64 = 94
        case 752:
          {
            const value = r.sint64();

            m.unpackedSint64.push(value);
          }
          continue;

        // repeated fixed32 unpacked_fixed32 = 95
        case 765:
          {
            const value = r.fixed32();

            m.unpackedFixed32.push(value);
          }
          continue;

        // repeated fixed64 unpacked_fixed64 = 96
        case 769:
          {
            const value = r.fixed64();

            m.unpackedFixed64.push(value);
          }
          continue;

        // repeated sfixed32 unpacked_sfixed32 = 97
        case 781:
          {
            const value = r.sfixed32();

            m.unpackedSfixed32.push(value);
          }
          continue;

        // repeated sfixed64 unpacked_sfixed64 = 98
        case 785:
          {
            const value = r.sfixed64();

            m.unpackedSfixed64.push(value);
          }
          continue;

        // repeated float unpacked_float = 99
        case 797:
          {
            const value = r.float();

            m.unpackedFloat.push(value);
          }
          continue;

        // repeated double unpacked_double = 100
        case 801:
          {
            const value = r.double();

            m.unpackedDouble.push(value);
          }
          continue;

        // repeated bool unpacked_bool = 101
        case 808:
          {
            const value = r.bool();

            m.unpackedBool.push(value);
          }
          continue;

        // repeated TestAllTypesProto3.NestedEnum unpacked_nested_enum = 102
        case 816:
          {
            const value = r.uint32();

            m.unpackedNestedEnum.push(value);
          }
          continue;

        // map<int32, int32> map_int32_int32 = 56
        case null:
          {
            const key = r.int32();
            const value = r.int32();

            m.mapInt32Int32.set(key, value);
          }
          continue;

        // map<int64, int64> map_int64_int64 = 57
        case null:
          {
            const key = r.int64();
            const value = r.int64();

            m.mapInt64Int64.set(key, value);
          }
          continue;

        // map<uint32, uint32> map_uint32_uint32 = 58
        case null:
          {
            const key = r.uint32();
            const value = r.uint32();

            m.mapUint32Uint32.set(key, value);
          }
          continue;

        // map<uint64, uint64> map_uint64_uint64 = 59
        case null:
          {
            const key = r.uint64();
            const value = r.uint64();

            m.mapUint64Uint64.set(key, value);
          }
          continue;

        // map<sint32, sint32> map_sint32_sint32 = 60
        case null:
          {
            const key = r.sint32();
            const value = r.sint32();

            m.mapSint32Sint32.set(key, value);
          }
          continue;

        // map<sint64, sint64> map_sint64_sint64 = 61
        case null:
          {
            const key = r.sint64();
            const value = r.sint64();

            m.mapSint64Sint64.set(key, value);
          }
          continue;

        // map<fixed32, fixed32> map_fixed32_fixed32 = 62
        case null:
          {
            const key = r.fixed32();
            const value = r.fixed32();

            m.mapFixed32Fixed32.set(key, value);
          }
          continue;

        // map<fixed64, fixed64> map_fixed64_fixed64 = 63
        case null:
          {
            const key = r.fixed64();
            const value = r.fixed64();

            m.mapFixed64Fixed64.set(key, value);
          }
          continue;

        // map<sfixed32, sfixed32> map_sfixed32_sfixed32 = 64
        case null:
          {
            const key = r.sfixed32();
            const value = r.sfixed32();

            m.mapSfixed32Sfixed32.set(key, value);
          }
          continue;

        // map<sfixed64, sfixed64> map_sfixed64_sfixed64 = 65
        case null:
          {
            const key = r.sfixed64();
            const value = r.sfixed64();

            m.mapSfixed64Sfixed64.set(key, value);
          }
          continue;

        // map<int32, float> map_int32_float = 66
        case null:
          {
            const key = r.int32();
            const value = r.float();

            m.mapInt32Float.set(key, value);
          }
          continue;

        // map<int32, double> map_int32_double = 67
        case null:
          {
            const key = r.int32();
            const value = r.double();

            m.mapInt32Double.set(key, value);
          }
          continue;

        // map<bool, bool> map_bool_bool = 68
        case null:
          {
            const key = r.bool();
            const value = r.bool();

            m.mapBoolBool.set(key, value);
          }
          continue;

        // map<string, string> map_string_string = 69
        case null:
          {
            const key = r.string();
            const value = r.string();

            m.mapStringString.set(key, value);
          }
          continue;

        // map<string, bytes> map_string_bytes = 70
        case null:
          {
            const key = r.string();
            const value = r.bytes();

            m.mapStringBytes.set(key, value);
          }
          continue;

        // map<string, TestAllTypesProto3.NestedMessage> map_string_nested_message = 71
        case null:
          {
            const key = r.string();
            const value = r.TestAllTypesProto3.NestedMessage();

            m.mapStringNestedMessage.set(key, value);
          }
          continue;

        // map<string, ForeignMessage> map_string_foreign_message = 72
        case null:
          {
            const key = r.string();
            const value = r.ForeignMessage();

            m.mapStringForeignMessage.set(key, value);
          }
          continue;

        // map<string, TestAllTypesProto3.NestedEnum> map_string_nested_enum = 73
        case null:
          {
            const key = r.string();
            const value = r.uint32();

            m.mapStringNestedEnum.set(key, value);
          }
          continue;

        // map<string, ForeignEnum> map_string_foreign_enum = 74
        case null:
          {
            const key = r.string();
            const value = r.uint32();

            m.mapStringForeignEnum.set(key, value);
          }
          continue;

        // uint32 oneof_uint32 = 111
        case 888:
          m.oneofUint32 = r.uint32();
          continue;

        // TestAllTypesProto3.NestedMessage oneof_nested_message = 112
        case 898:
          m.oneofNestedMessage = r.TestAllTypesProto3.NestedMessage();
          continue;

        // string oneof_string = 113
        case 906:
          m.oneofString = r.string();
          continue;

        // bytes oneof_bytes = 114
        case 914:
          m.oneofBytes = r.bytes();
          continue;

        // bool oneof_bool = 115
        case 920:
          m.oneofBool = r.bool();
          continue;

        // uint64 oneof_uint64 = 116
        case 928:
          m.oneofUint64 = r.uint64();
          continue;

        // float oneof_float = 117
        case 941:
          m.oneofFloat = r.float();
          continue;

        // double oneof_double = 118
        case 945:
          m.oneofDouble = r.double();
          continue;

        // TestAllTypesProto3.NestedEnum oneof_enum = 119
        case 952:
          m.oneofEnum = r.uint32();
          continue;

        // google.protobuf.NullValue oneof_null_value = 120
        case 960:
          m.oneofNullValue = r.uint32();
          continue;

        // google.protobuf.BoolValue optional_bool_wrapper = 201
        case 1610:
          m.optionalBoolWrapper = r.google.protobuf.BoolValue();
          continue;

        // google.protobuf.Int32Value optional_int32_wrapper = 202
        case 1618:
          m.optionalInt32Wrapper = r.google.protobuf.Int32Value();
          continue;

        // google.protobuf.Int64Value optional_int64_wrapper = 203
        case 1626:
          m.optionalInt64Wrapper = r.google.protobuf.Int64Value();
          continue;

        // google.protobuf.UInt32Value optional_uint32_wrapper = 204
        case 1634:
          m.optionalUint32Wrapper = r.google.protobuf.UInt32Value();
          continue;

        // google.protobuf.UInt64Value optional_uint64_wrapper = 205
        case 1642:
          m.optionalUint64Wrapper = r.google.protobuf.UInt64Value();
          continue;

        // google.protobuf.FloatValue optional_float_wrapper = 206
        case 1650:
          m.optionalFloatWrapper = r.google.protobuf.FloatValue();
          continue;

        // google.protobuf.DoubleValue optional_double_wrapper = 207
        case 1658:
          m.optionalDoubleWrapper = r.google.protobuf.DoubleValue();
          continue;

        // google.protobuf.StringValue optional_string_wrapper = 208
        case 1666:
          m.optionalStringWrapper = r.google.protobuf.StringValue();
          continue;

        // google.protobuf.BytesValue optional_bytes_wrapper = 209
        case 1674:
          m.optionalBytesWrapper = r.google.protobuf.BytesValue();
          continue;

        // repeated google.protobuf.BoolValue repeated_bool_wrapper = 211
        case 1690:
          {
            const value = r.google.protobuf.BoolValue();

            m.repeatedBoolWrapper.push(value);
          }
          continue;

        // repeated google.protobuf.Int32Value repeated_int32_wrapper = 212
        case 1698:
          {
            const value = r.google.protobuf.Int32Value();

            m.repeatedInt32Wrapper.push(value);
          }
          continue;

        // repeated google.protobuf.Int64Value repeated_int64_wrapper = 213
        case 1706:
          {
            const value = r.google.protobuf.Int64Value();

            m.repeatedInt64Wrapper.push(value);
          }
          continue;

        // repeated google.protobuf.UInt32Value repeated_uint32_wrapper = 214
        case 1714:
          {
            const value = r.google.protobuf.UInt32Value();

            m.repeatedUint32Wrapper.push(value);
          }
          continue;

        // repeated google.protobuf.UInt64Value repeated_uint64_wrapper = 215
        case 1722:
          {
            const value = r.google.protobuf.UInt64Value();

            m.repeatedUint64Wrapper.push(value);
          }
          continue;

        // repeated google.protobuf.FloatValue repeated_float_wrapper = 216
        case 1730:
          {
            const value = r.google.protobuf.FloatValue();

            m.repeatedFloatWrapper.push(value);
          }
          continue;

        // repeated google.protobuf.DoubleValue repeated_double_wrapper = 217
        case 1738:
          {
            const value = r.google.protobuf.DoubleValue();

            m.repeatedDoubleWrapper.push(value);
          }
          continue;

        // repeated google.protobuf.StringValue repeated_string_wrapper = 218
        case 1746:
          {
            const value = r.google.protobuf.StringValue();

            m.repeatedStringWrapper.push(value);
          }
          continue;

        // repeated google.protobuf.BytesValue repeated_bytes_wrapper = 219
        case 1754:
          {
            const value = r.google.protobuf.BytesValue();

            m.repeatedBytesWrapper.push(value);
          }
          continue;

        // google.protobuf.Duration optional_duration = 301
        case 2410:
          m.optionalDuration = r.google.protobuf.Duration();
          continue;

        // google.protobuf.Timestamp optional_timestamp = 302
        case 2418:
          m.optionalTimestamp = r.google.protobuf.Timestamp();
          continue;

        // google.protobuf.FieldMask optional_field_mask = 303
        case 2426:
          m.optionalFieldMask = r.google.protobuf.FieldMask();
          continue;

        // google.protobuf.Struct optional_struct = 304
        case 2434:
          m.optionalStruct = r.google.protobuf.Struct();
          continue;

        // google.protobuf.Any optional_any = 305
        case 2442:
          m.optionalAny = r.google.protobuf.Any();
          continue;

        // google.protobuf.Value optional_value = 306
        case 2450:
          m.optionalValue = r.google.protobuf.Value();
          continue;

        // google.protobuf.NullValue optional_null_value = 307
        case 2456:
          m.optionalNullValue = r.uint32();
          continue;

        // repeated google.protobuf.Duration repeated_duration = 311
        case 2490:
          {
            const value = r.google.protobuf.Duration();

            m.repeatedDuration.push(value);
          }
          continue;

        // repeated google.protobuf.Timestamp repeated_timestamp = 312
        case 2498:
          {
            const value = r.google.protobuf.Timestamp();

            m.repeatedTimestamp.push(value);
          }
          continue;

        // repeated google.protobuf.FieldMask repeated_fieldmask = 313
        case 2506:
          {
            const value = r.google.protobuf.FieldMask();

            m.repeatedFieldmask.push(value);
          }
          continue;

        // repeated google.protobuf.Struct repeated_struct = 324
        case 2594:
          {
            const value = r.google.protobuf.Struct();

            m.repeatedStruct.push(value);
          }
          continue;

        // repeated google.protobuf.Any repeated_any = 315
        case 2522:
          {
            const value = r.google.protobuf.Any();

            m.repeatedAny.push(value);
          }
          continue;

        // repeated google.protobuf.Value repeated_value = 316
        case 2530:
          {
            const value = r.google.protobuf.Value();

            m.repeatedValue.push(value);
          }
          continue;

        // repeated google.protobuf.ListValue repeated_list_value = 317
        case 2538:
          {
            const value = r.google.protobuf.ListValue();

            m.repeatedListValue.push(value);
          }
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
          m.fieldName8 = r.int32();
          continue;

        // int32 field_Name9 = 409
        case 3272:
          m.fieldName9 = r.int32();
          continue;

        // int32 Field_Name10 = 410
        case 3280:
          m.fieldName10 = r.int32();
          continue;

        // int32 FIELD_NAME11 = 411
        case 3288:
          m.fIELDNAME11 = r.int32();
          continue;

        // int32 FIELD_name12 = 412
        case 3296:
          m.fIELDName12 = r.int32();
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
          m.fieldName18_ = r.int32();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: ITestAllTypesProto3): ITestAllTypesProto3Obj {
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
      mapInt32Int32: m.mapInt32Int32,
      mapInt64Int64: m.mapInt64Int64,
      mapUint32Uint32: m.mapUint32Uint32,
      mapUint64Uint64: m.mapUint64Uint64,
      mapSint32Sint32: m.mapSint32Sint32,
      mapSint64Sint64: m.mapSint64Sint64,
      mapFixed32Fixed32: m.mapFixed32Fixed32,
      mapFixed64Fixed64: m.mapFixed64Fixed64,
      mapSfixed32Sfixed32: m.mapSfixed32Sfixed32,
      mapSfixed64Sfixed64: m.mapSfixed64Sfixed64,
      mapInt32Float: m.mapInt32Float,
      mapInt32Double: m.mapInt32Double,
      mapBoolBool: m.mapBoolBool,
      mapStringString: m.mapStringString,
      mapStringBytes: m.mapStringBytes,
      mapStringNestedMessage: m.mapStringNestedMessage,
      mapStringForeignMessage: m.mapStringForeignMessage,
      mapStringNestedEnum: m.mapStringNestedEnum,
      mapStringForeignEnum: m.mapStringForeignEnum,
      oneofUint32: m.oneofUint32,
      oneofNestedMessage: m.oneofNestedMessage.toJSON(),
      oneofString: m.oneofString,
      oneofBytes: pjs.util.base64.encode(m.oneofBytes, 0, m.oneofBytes.length),
      oneofBool: m.oneofBool,
      oneofUint64: m.oneofUint64.toString(),
      oneofFloat: m.oneofFloat,
      oneofDouble: m.oneofDouble,
      oneofEnum: TestAllTypesProto3.NestedEnum[m.oneofEnum],
      oneofNullValue:
        google_protobuf_struct_models.google.protobuf.NullValue[
          m.oneofNullValue
        ],
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
      fieldName8: m.fieldName8,
      fieldName9: m.fieldName9,
      fieldName10: m.fieldName10,
      fIELDNAME11: m.fIELDNAME11,
      fIELDName12: m.fIELDName12,
      _fieldName13: m._fieldName13,
      _FieldName14: m._FieldName14,
      field_name15: m.field_name15,
      field_Name16: m.field_Name16,
      fieldName17_: m.fieldName17_,
      fieldName18_: m.fieldName18_,
    };
  }

  public static fromJSON(obj: ITestAllTypesProto3Obj): ITestAllTypesProto3 {
    const m = new TestAllTypesProto3();

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
    m.optionalNestedEnum =
      TestAllTypesProto3.NestedEnum[obj.optionalNestedEnum];
    m.optionalForeignEnum = ForeignEnum[obj.optionalForeignEnum];
    m.optionalAliasedEnum =
      TestAllTypesProto3.AliasedEnum[obj.optionalAliasedEnum];
    m.optionalStringPiece = obj.optionalStringPiece;
    m.optionalCord = obj.optionalCord;
    m.recursiveMessage.fromJSON(obj.recursiveMessage);
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
    m.mapInt32Int32 = obj.mapInt32Int32;
    m.mapInt64Int64 = obj.mapInt64Int64;
    m.mapUint32Uint32 = obj.mapUint32Uint32;
    m.mapUint64Uint64 = obj.mapUint64Uint64;
    m.mapSint32Sint32 = obj.mapSint32Sint32;
    m.mapSint64Sint64 = obj.mapSint64Sint64;
    m.mapFixed32Fixed32 = obj.mapFixed32Fixed32;
    m.mapFixed64Fixed64 = obj.mapFixed64Fixed64;
    m.mapSfixed32Sfixed32 = obj.mapSfixed32Sfixed32;
    m.mapSfixed64Sfixed64 = obj.mapSfixed64Sfixed64;
    m.mapInt32Float = obj.mapInt32Float;
    m.mapInt32Double = obj.mapInt32Double;
    m.mapBoolBool = obj.mapBoolBool;
    m.mapStringString = obj.mapStringString;
    m.mapStringBytes = obj.mapStringBytes;
    m.mapStringNestedMessage = obj.mapStringNestedMessage;
    m.mapStringForeignMessage = obj.mapStringForeignMessage;
    m.mapStringNestedEnum = obj.mapStringNestedEnum;
    m.mapStringForeignEnum = obj.mapStringForeignEnum;
    m.oneofUint32 = obj.oneofUint32;
    m.oneofNestedMessage.fromJSON(obj.oneofNestedMessage);
    m.oneofString = obj.oneofString;
    {
      const tmpBuffer = [];
      pjs.util.base64.decode(obj.oneofBytes, tmpBuffer, 0);
      m.oneofBytes = pjs.util.Buffer.from(tmpBuffer);
    }
    m.oneofBool = obj.oneofBool;
    m.oneofUint64 = pjs.util.Long.fromValue(obj.oneofUint64, true);
    m.oneofFloat = obj.oneofFloat;
    m.oneofDouble = obj.oneofDouble;
    m.oneofEnum = TestAllTypesProto3.NestedEnum[obj.oneofEnum];
    m.oneofNullValue =
      google_protobuf_struct_models.google.protobuf.NullValue[
        obj.oneofNullValue
      ];
    m.optionalBoolWrapper.fromJSON(obj.optionalBoolWrapper);
    m.optionalInt32Wrapper.fromJSON(obj.optionalInt32Wrapper);
    m.optionalInt64Wrapper.fromJSON(obj.optionalInt64Wrapper);
    m.optionalUint32Wrapper.fromJSON(obj.optionalUint32Wrapper);
    m.optionalUint64Wrapper.fromJSON(obj.optionalUint64Wrapper);
    m.optionalFloatWrapper.fromJSON(obj.optionalFloatWrapper);
    m.optionalDoubleWrapper.fromJSON(obj.optionalDoubleWrapper);
    m.optionalStringWrapper.fromJSON(obj.optionalStringWrapper);
    m.optionalBytesWrapper.fromJSON(obj.optionalBytesWrapper);
    m.repeatedBoolWrapper.fromJSON(obj.repeatedBoolWrapper);
    m.repeatedInt32Wrapper.fromJSON(obj.repeatedInt32Wrapper);
    m.repeatedInt64Wrapper.fromJSON(obj.repeatedInt64Wrapper);
    m.repeatedUint32Wrapper.fromJSON(obj.repeatedUint32Wrapper);
    m.repeatedUint64Wrapper.fromJSON(obj.repeatedUint64Wrapper);
    m.repeatedFloatWrapper.fromJSON(obj.repeatedFloatWrapper);
    m.repeatedDoubleWrapper.fromJSON(obj.repeatedDoubleWrapper);
    m.repeatedStringWrapper.fromJSON(obj.repeatedStringWrapper);
    m.repeatedBytesWrapper.fromJSON(obj.repeatedBytesWrapper);
    m.optionalDuration.fromJSON(obj.optionalDuration);
    m.optionalTimestamp.fromJSON(obj.optionalTimestamp);
    m.optionalFieldMask.fromJSON(obj.optionalFieldMask);
    m.optionalStruct.fromJSON(obj.optionalStruct);
    m.optionalAny.fromJSON(obj.optionalAny);
    m.optionalValue.fromJSON(obj.optionalValue);
    m.optionalNullValue =
      google_protobuf_struct_models.google.protobuf.NullValue[
        obj.optionalNullValue
      ];
    m.repeatedDuration.fromJSON(obj.repeatedDuration);
    m.repeatedTimestamp.fromJSON(obj.repeatedTimestamp);
    m.repeatedFieldmask.fromJSON(obj.repeatedFieldmask);
    m.repeatedStruct.fromJSON(obj.repeatedStruct);
    m.repeatedAny.fromJSON(obj.repeatedAny);
    m.repeatedValue.fromJSON(obj.repeatedValue);
    m.repeatedListValue.fromJSON(obj.repeatedListValue);
    m.fieldname1 = obj.fieldname1;
    m.fieldName2 = obj.fieldName2;
    m.FieldName3 = obj.FieldName3;
    m.field_name4_ = obj.field_name4_;
    m.field0name5 = obj.field0name5;
    m.field0Name6 = obj.field0Name6;
    m.fieldName7 = obj.fieldName7;
    m.fieldName8 = obj.fieldName8;
    m.fieldName9 = obj.fieldName9;
    m.fieldName10 = obj.fieldName10;
    m.fIELDNAME11 = obj.fIELDNAME11;
    m.fIELDName12 = obj.fIELDName12;
    m._fieldName13 = obj._fieldName13;
    m._FieldName14 = obj._FieldName14;
    m.field_name15 = obj.field_name15;
    m.field_Name16 = obj.field_Name16;
    m.fieldName17_ = obj.fieldName17_;
    m.fieldName18_ = obj.fieldName18_;

    return m;
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

  export interface INestedMessageObj {
    a: number;
    corecursive: TestAllTypesProto3;
  }

  export interface INestedMessage {
    a: number;
    corecursive: TestAllTypesProto3;
  }

  export class NestedMessage implements INestedMessage {
    a: number = 0;
    corecursive: TestAllTypesProto3 = new TestAllTypesProto3();

    public static fields = ["a", "corecursive"];

    public get fields() {
      return NestedMessage.fields;
    }

    constructor(obj?: Partial<INestedMessage>) {
      if (!obj) return;

      if (obj.a !== undefined) {
        this.a = obj.a;
      }
      if (obj.corecursive !== undefined) {
        this.corecursive = obj.corecursive;
      }
    }

    public static encode(
      m: INestedMessage,
      w: pjs.Writer = pjs.Writer.create()
    ): Uint8Array {
      // int32 a = 1
      if (m.a !== 0) {
        w.uint32(8);
        w.int32(m.a);
      }

      // TestAllTypesProto3 corecursive = 2
      if (m.corecursive !== new TestAllTypesProto3()) {
        w.uint32(18);
        w.TestAllTypesProto3(m.corecursive);
      }

      return w.finish();
    }

    public static decode(b: Uint8Array): NestedMessage {
      const m = new NestedMessage();
      const r = pjs.Reader.create(b);
      while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag) {
          // int32 a = 1
          case 8:
            m.a = r.int32();
            continue;

          // TestAllTypesProto3 corecursive = 2
          case 18:
            m.corecursive = r.TestAllTypesProto3();
            continue;
        }
      }

      return m;
    }

    public static toJSON(m: INestedMessage): INestedMessageObj {
      return {
        a: m.a,
        corecursive: m.corecursive.toJSON(),
      };
    }

    public static fromJSON(obj: INestedMessageObj): INestedMessage {
      const m = new NestedMessage();

      m.a = obj.a;
      m.corecursive.fromJSON(obj.corecursive);

      return m;
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
  FOREIGN_FOO = 0,
  FOREIGN_BAR = 1,
  FOREIGN_BAZ = 2,
}

export interface INullHypothesisProto3Obj {}

export interface INullHypothesisProto3 {}

export class NullHypothesisProto3 implements INullHypothesisProto3 {
  public static fields = [];

  public get fields() {
    return NullHypothesisProto3.fields;
  }

  constructor(obj?: Partial<INullHypothesisProto3>) {
    if (!obj) return;
  }

  public static encode(
    m: INullHypothesisProto3,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    return w.finish();
  }

  public static decode(b: Uint8Array): NullHypothesisProto3 {
    const m = new NullHypothesisProto3();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
      }
    }

    return m;
  }

  public static toJSON(m: INullHypothesisProto3): INullHypothesisProto3Obj {
    return {};
  }

  public static fromJSON(obj: INullHypothesisProto3Obj): INullHypothesisProto3 {
    const m = new NullHypothesisProto3();

    return m;
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

export interface IEnumOnlyProto3Obj {}

export interface IEnumOnlyProto3 {}

export class EnumOnlyProto3 implements IEnumOnlyProto3 {
  public static fields = [];

  public get fields() {
    return EnumOnlyProto3.fields;
  }

  constructor(obj?: Partial<IEnumOnlyProto3>) {
    if (!obj) return;
  }

  public static encode(
    m: IEnumOnlyProto3,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    return w.finish();
  }

  public static decode(b: Uint8Array): EnumOnlyProto3 {
    const m = new EnumOnlyProto3();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
      }
    }

    return m;
  }

  public static toJSON(m: IEnumOnlyProto3): IEnumOnlyProto3Obj {
    return {};
  }

  public static fromJSON(obj: IEnumOnlyProto3Obj): IEnumOnlyProto3 {
    const m = new EnumOnlyProto3();

    return m;
  }

  clone(): EnumOnlyProto3 {
    return new EnumOnlyProto3(this);
  }
}

export namespace EnumOnlyProto3 {}
