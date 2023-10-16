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
  optionalNestedMessage: null;
  optionalForeignMessage: null;
  optionalNestedEnum: null;
  optionalForeignEnum: null;
  optionalAliasedEnum: null;
  optionalStringPiece: string;
  optionalCord: string;
  recursiveMessage: null;
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
  repeatedNestedEnum: null;
  repeatedForeignEnum: null;
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
  packedNestedEnum: null;
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
  unpackedNestedEnum: null;
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
  mapStringNestedMessage: Record<string, null>;
  mapStringForeignMessage: Record<string, null>;
  mapStringNestedEnum: Record<string, null>;
  mapStringForeignEnum: Record<string, null>;
  oneofUint32?: number;
  oneofNestedMessage?: null;
  oneofString?: string;
  oneofBytes?: string;
  oneofBool?: boolean;
  oneofUint64?: string;
  oneofFloat?: number;
  oneofDouble?: number;
  oneofEnum?: null;
  oneofNullValue?: null;
  optionalBoolWrapper: null;
  optionalInt32Wrapper: null;
  optionalInt64Wrapper: null;
  optionalUint32Wrapper: null;
  optionalUint64Wrapper: null;
  optionalFloatWrapper: null;
  optionalDoubleWrapper: null;
  optionalStringWrapper: null;
  optionalBytesWrapper: null;
  repeatedBoolWrapper: null;
  repeatedInt32Wrapper: null;
  repeatedInt64Wrapper: null;
  repeatedUint32Wrapper: null;
  repeatedUint64Wrapper: null;
  repeatedFloatWrapper: null;
  repeatedDoubleWrapper: null;
  repeatedStringWrapper: null;
  repeatedBytesWrapper: null;
  optionalDuration: null;
  optionalTimestamp: null;
  optionalFieldMask: null;
  optionalStruct: null;
  optionalAny: null;
  optionalValue: null;
  optionalNullValue: null;
  repeatedDuration: null;
  repeatedTimestamp: null;
  repeatedFieldmask: null;
  repeatedStruct: null;
  repeatedAny: null;
  repeatedValue: null;
  repeatedListValue: null;
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
  optionalBytes: Uint8Array;
  optionalNestedMessage: null;
  optionalForeignMessage: null;
  optionalNestedEnum: null;
  optionalForeignEnum: null;
  optionalAliasedEnum: null;
  optionalStringPiece: string;
  optionalCord: string;
  recursiveMessage: null;
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
  repeatedNestedEnum: null;
  repeatedForeignEnum: null;
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
  packedNestedEnum: null;
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
  unpackedNestedEnum: null;
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
  mapStringBytes: Map<string, Uint8Array>;
  mapStringNestedMessage: Map<string, null>;
  mapStringForeignMessage: Map<string, null>;
  mapStringNestedEnum: Map<string, null>;
  mapStringForeignEnum: Map<string, null>;
  oneofUint32?: number;
  oneofNestedMessage?: null;
  oneofString?: string;
  oneofBytes?: Uint8Array;
  oneofBool?: boolean;
  oneofUint64?: pjs.Long;
  oneofFloat?: number;
  oneofDouble?: number;
  oneofEnum?: null;
  oneofNullValue?: null;
  optionalBoolWrapper: null;
  optionalInt32Wrapper: null;
  optionalInt64Wrapper: null;
  optionalUint32Wrapper: null;
  optionalUint64Wrapper: null;
  optionalFloatWrapper: null;
  optionalDoubleWrapper: null;
  optionalStringWrapper: null;
  optionalBytesWrapper: null;
  repeatedBoolWrapper: null;
  repeatedInt32Wrapper: null;
  repeatedInt64Wrapper: null;
  repeatedUint32Wrapper: null;
  repeatedUint64Wrapper: null;
  repeatedFloatWrapper: null;
  repeatedDoubleWrapper: null;
  repeatedStringWrapper: null;
  repeatedBytesWrapper: null;
  optionalDuration: null;
  optionalTimestamp: null;
  optionalFieldMask: null;
  optionalStruct: null;
  optionalAny: null;
  optionalValue: null;
  optionalNullValue: null;
  repeatedDuration: null;
  repeatedTimestamp: null;
  repeatedFieldmask: null;
  repeatedStruct: null;
  repeatedAny: null;
  repeatedValue: null;
  repeatedListValue: null;
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
  optionalNestedEnum: null = null;
  optionalForeignEnum: null = null;
  optionalAliasedEnum: null = null;
  optionalStringPiece: string = "";
  optionalCord: string = "";
  recursiveMessage: null = null;
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
  repeatedNestedEnum: null = [];
  repeatedForeignEnum: null = [];
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
  packedNestedEnum: null = [];
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
  unpackedNestedEnum: null = [];
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
  mapStringBytes: Record<string, Uint8Array> = {};
  mapStringNestedMessage: Record<string, null> = {};
  mapStringForeignMessage: Record<string, null> = {};
  mapStringNestedEnum: Record<string, null> = {};
  mapStringForeignEnum: Record<string, null> = {};
  oneofUint32?: number = 0;
  oneofNestedMessage?: null = null;
  oneofString?: string = "";
  oneofBytes?: Uint8Array = new Uint8Array();
  oneofBool?: boolean = false;
  oneofUint64?: pjs.Long = 0n;
  oneofFloat?: number = 0;
  oneofDouble?: number = 0;
  oneofEnum?: null = null;
  oneofNullValue?: null = null;
  optionalBoolWrapper: null = null;
  optionalInt32Wrapper: null = null;
  optionalInt64Wrapper: null = null;
  optionalUint32Wrapper: null = null;
  optionalUint64Wrapper: null = null;
  optionalFloatWrapper: null = null;
  optionalDoubleWrapper: null = null;
  optionalStringWrapper: null = null;
  optionalBytesWrapper: null = null;
  repeatedBoolWrapper: null = [];
  repeatedInt32Wrapper: null = [];
  repeatedInt64Wrapper: null = [];
  repeatedUint32Wrapper: null = [];
  repeatedUint64Wrapper: null = [];
  repeatedFloatWrapper: null = [];
  repeatedDoubleWrapper: null = [];
  repeatedStringWrapper: null = [];
  repeatedBytesWrapper: null = [];
  optionalDuration: null = null;
  optionalTimestamp: null = null;
  optionalFieldMask: null = null;
  optionalStruct: null = null;
  optionalAny: null = null;
  optionalValue: null = null;
  optionalNullValue: null = null;
  repeatedDuration: null = [];
  repeatedTimestamp: null = [];
  repeatedFieldmask: null = [];
  repeatedStruct: null = [];
  repeatedAny: null = [];
  repeatedValue: null = [];
  repeatedListValue: null = [];
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

    // TestAllTypesProto3.NestedMessage optional_nested_message = 18
    if (m.optionalNestedMessage !== null) {
      w.uint32(146);
      m.optionalNestedMessage.encode(writer);
    }

    // ForeignMessage optional_foreign_message = 19
    if (m.optionalForeignMessage !== null) {
      w.uint32(154);
      m.optionalForeignMessage.encode(writer);
    }

    // TestAllTypesProto3.NestedEnum optional_nested_enum = 21
    if (m.optionalNestedEnum !== null) {
      w.uint32(170);
      m.optionalNestedEnum.encode(writer);
    }

    // ForeignEnum optional_foreign_enum = 22
    if (m.optionalForeignEnum !== null) {
      w.uint32(178);
      m.optionalForeignEnum.encode(writer);
    }

    // TestAllTypesProto3.AliasedEnum optional_aliased_enum = 23
    if (m.optionalAliasedEnum !== null) {
      w.uint32(186);
      m.optionalAliasedEnum.encode(writer);
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
    if (m.recursiveMessage !== null) {
      w.uint32(218);
      m.recursiveMessage.encode(writer);
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
      m.repeatedNestedMessage.encode(writer);
    }

    // ForeignMessage repeated_foreign_message = 49
    if (m.repeatedForeignMessage !== []) {
      w.uint32(394);
      m.repeatedForeignMessage.encode(writer);
    }

    // TestAllTypesProto3.NestedEnum repeated_nested_enum = 51
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
      w.uint32(706);
      m.packedNestedEnum.encode(writer);
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
      w.uint32(818);
      m.unpackedNestedEnum.encode(writer);
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
    if (m.optionalBoolWrapper !== null) {
      w.uint32(1610);
      m.optionalBoolWrapper.encode(writer);
    }

    // google.protobuf.Int32Value optional_int32_wrapper = 202
    if (m.optionalInt32Wrapper !== null) {
      w.uint32(1618);
      m.optionalInt32Wrapper.encode(writer);
    }

    // google.protobuf.Int64Value optional_int64_wrapper = 203
    if (m.optionalInt64Wrapper !== null) {
      w.uint32(1626);
      m.optionalInt64Wrapper.encode(writer);
    }

    // google.protobuf.UInt32Value optional_uint32_wrapper = 204
    if (m.optionalUint32Wrapper !== null) {
      w.uint32(1634);
      m.optionalUint32Wrapper.encode(writer);
    }

    // google.protobuf.UInt64Value optional_uint64_wrapper = 205
    if (m.optionalUint64Wrapper !== null) {
      w.uint32(1642);
      m.optionalUint64Wrapper.encode(writer);
    }

    // google.protobuf.FloatValue optional_float_wrapper = 206
    if (m.optionalFloatWrapper !== null) {
      w.uint32(1650);
      m.optionalFloatWrapper.encode(writer);
    }

    // google.protobuf.DoubleValue optional_double_wrapper = 207
    if (m.optionalDoubleWrapper !== null) {
      w.uint32(1658);
      m.optionalDoubleWrapper.encode(writer);
    }

    // google.protobuf.StringValue optional_string_wrapper = 208
    if (m.optionalStringWrapper !== null) {
      w.uint32(1666);
      m.optionalStringWrapper.encode(writer);
    }

    // google.protobuf.BytesValue optional_bytes_wrapper = 209
    if (m.optionalBytesWrapper !== null) {
      w.uint32(1674);
      m.optionalBytesWrapper.encode(writer);
    }

    // google.protobuf.BoolValue repeated_bool_wrapper = 211
    if (m.repeatedBoolWrapper !== []) {
      w.uint32(1690);
      m.repeatedBoolWrapper.encode(writer);
    }

    // google.protobuf.Int32Value repeated_int32_wrapper = 212
    if (m.repeatedInt32Wrapper !== []) {
      w.uint32(1698);
      m.repeatedInt32Wrapper.encode(writer);
    }

    // google.protobuf.Int64Value repeated_int64_wrapper = 213
    if (m.repeatedInt64Wrapper !== []) {
      w.uint32(1706);
      m.repeatedInt64Wrapper.encode(writer);
    }

    // google.protobuf.UInt32Value repeated_uint32_wrapper = 214
    if (m.repeatedUint32Wrapper !== []) {
      w.uint32(1714);
      m.repeatedUint32Wrapper.encode(writer);
    }

    // google.protobuf.UInt64Value repeated_uint64_wrapper = 215
    if (m.repeatedUint64Wrapper !== []) {
      w.uint32(1722);
      m.repeatedUint64Wrapper.encode(writer);
    }

    // google.protobuf.FloatValue repeated_float_wrapper = 216
    if (m.repeatedFloatWrapper !== []) {
      w.uint32(1730);
      m.repeatedFloatWrapper.encode(writer);
    }

    // google.protobuf.DoubleValue repeated_double_wrapper = 217
    if (m.repeatedDoubleWrapper !== []) {
      w.uint32(1738);
      m.repeatedDoubleWrapper.encode(writer);
    }

    // google.protobuf.StringValue repeated_string_wrapper = 218
    if (m.repeatedStringWrapper !== []) {
      w.uint32(1746);
      m.repeatedStringWrapper.encode(writer);
    }

    // google.protobuf.BytesValue repeated_bytes_wrapper = 219
    if (m.repeatedBytesWrapper !== []) {
      w.uint32(1754);
      m.repeatedBytesWrapper.encode(writer);
    }

    // google.protobuf.Duration optional_duration = 301
    if (m.optionalDuration !== null) {
      w.uint32(2410);
      m.optionalDuration.encode(writer);
    }

    // google.protobuf.Timestamp optional_timestamp = 302
    if (m.optionalTimestamp !== null) {
      w.uint32(2418);
      m.optionalTimestamp.encode(writer);
    }

    // google.protobuf.FieldMask optional_field_mask = 303
    if (m.optionalFieldMask !== null) {
      w.uint32(2426);
      m.optionalFieldMask.encode(writer);
    }

    // google.protobuf.Struct optional_struct = 304
    if (m.optionalStruct !== null) {
      w.uint32(2434);
      m.optionalStruct.encode(writer);
    }

    // google.protobuf.Any optional_any = 305
    if (m.optionalAny !== null) {
      w.uint32(2442);
      m.optionalAny.encode(writer);
    }

    // google.protobuf.Value optional_value = 306
    if (m.optionalValue !== null) {
      w.uint32(2450);
      m.optionalValue.encode(writer);
    }

    // google.protobuf.NullValue optional_null_value = 307
    if (m.optionalNullValue !== null) {
      w.uint32(2458);
      m.optionalNullValue.encode(writer);
    }

    // google.protobuf.Duration repeated_duration = 311
    if (m.repeatedDuration !== []) {
      w.uint32(2490);
      m.repeatedDuration.encode(writer);
    }

    // google.protobuf.Timestamp repeated_timestamp = 312
    if (m.repeatedTimestamp !== []) {
      w.uint32(2498);
      m.repeatedTimestamp.encode(writer);
    }

    // google.protobuf.FieldMask repeated_fieldmask = 313
    if (m.repeatedFieldmask !== []) {
      w.uint32(2506);
      m.repeatedFieldmask.encode(writer);
    }

    // google.protobuf.Struct repeated_struct = 324
    if (m.repeatedStruct !== []) {
      w.uint32(2594);
      m.repeatedStruct.encode(writer);
    }

    // google.protobuf.Any repeated_any = 315
    if (m.repeatedAny !== []) {
      w.uint32(2522);
      m.repeatedAny.encode(writer);
    }

    // google.protobuf.Value repeated_value = 316
    if (m.repeatedValue !== []) {
      w.uint32(2530);
      m.repeatedValue.encode(writer);
    }

    // google.protobuf.ListValue repeated_list_value = 317
    if (m.repeatedListValue !== []) {
      w.uint32(2538);
      m.repeatedListValue.encode(writer);
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
          m.optionalNestedMessage =
            test_messages_proto3_models.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage;
          continue;

        // ForeignMessage optional_foreign_message = 19
        case 154:
          m.optionalForeignMessage =
            test_messages_proto3_models.protobuf_test_messages.proto3.ForeignMessage;
          continue;

        // TestAllTypesProto3.NestedEnum optional_nested_enum = 21
        case 170:
          m.optionalNestedEnum =
            test_messages_proto3_models.protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum;
          continue;

        // ForeignEnum optional_foreign_enum = 22
        case 178:
          m.optionalForeignEnum =
            test_messages_proto3_models.protobuf_test_messages.proto3.ForeignEnum;
          continue;

        // TestAllTypesProto3.AliasedEnum optional_aliased_enum = 23
        case 186:
          m.optionalAliasedEnum =
            test_messages_proto3_models.protobuf_test_messages.proto3.TestAllTypesProto3.AliasedEnum;
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
          m.recursiveMessage =
            test_messages_proto3_models.protobuf_test_messages.proto3.TestAllTypesProto3;
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

        // repeated TestAllTypesProto3.NestedMessage repeated_nested_message = 48
        case 386:
          const repeatedNestedMessageValue =
            test_messages_proto3_models.protobuf_test_messages.proto3
              .TestAllTypesProto3.NestedMessage;

          m.repeatedNestedMessage.push(repeatedNestedMessageValue);
          continue;

        // repeated ForeignMessage repeated_foreign_message = 49
        case 394:
          const repeatedForeignMessageValue =
            test_messages_proto3_models.protobuf_test_messages.proto3
              .ForeignMessage;

          m.repeatedForeignMessage.push(repeatedForeignMessageValue);
          continue;

        // repeated TestAllTypesProto3.NestedEnum repeated_nested_enum = 51
        case 410:
          const repeatedNestedEnumValue =
            test_messages_proto3_models.protobuf_test_messages.proto3
              .TestAllTypesProto3.NestedEnum;

          m.repeatedNestedEnum.push(repeatedNestedEnumValue);
          continue;

        // repeated ForeignEnum repeated_foreign_enum = 52
        case 418:
          const repeatedForeignEnumValue =
            test_messages_proto3_models.protobuf_test_messages.proto3
              .ForeignEnum;

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

        // repeated int32 packed_int32 = 75
        case 600:
          const packedInt32Value = r.int32();

          m.packedInt32.push(packedInt32Value);
          continue;

        // repeated int64 packed_int64 = 76
        case 608:
          const packedInt64Value = r.int64();

          m.packedInt64.push(packedInt64Value);
          continue;

        // repeated uint32 packed_uint32 = 77
        case 616:
          const packedUint32Value = r.uint32();

          m.packedUint32.push(packedUint32Value);
          continue;

        // repeated uint64 packed_uint64 = 78
        case 624:
          const packedUint64Value = r.uint64();

          m.packedUint64.push(packedUint64Value);
          continue;

        // repeated sint32 packed_sint32 = 79
        case 632:
          const packedSint32Value = r.sint32();

          m.packedSint32.push(packedSint32Value);
          continue;

        // repeated sint64 packed_sint64 = 80
        case 640:
          const packedSint64Value = r.sint64();

          m.packedSint64.push(packedSint64Value);
          continue;

        // repeated fixed32 packed_fixed32 = 81
        case 653:
          const packedFixed32Value = r.fixed32();

          m.packedFixed32.push(packedFixed32Value);
          continue;

        // repeated fixed64 packed_fixed64 = 82
        case 657:
          const packedFixed64Value = r.fixed64();

          m.packedFixed64.push(packedFixed64Value);
          continue;

        // repeated sfixed32 packed_sfixed32 = 83
        case 669:
          const packedSfixed32Value = r.sfixed32();

          m.packedSfixed32.push(packedSfixed32Value);
          continue;

        // repeated sfixed64 packed_sfixed64 = 84
        case 673:
          const packedSfixed64Value = r.sfixed64();

          m.packedSfixed64.push(packedSfixed64Value);
          continue;

        // repeated float packed_float = 85
        case 685:
          const packedFloatValue = r.float();

          m.packedFloat.push(packedFloatValue);
          continue;

        // repeated double packed_double = 86
        case 689:
          const packedDoubleValue = r.double();

          m.packedDouble.push(packedDoubleValue);
          continue;

        // repeated bool packed_bool = 87
        case 696:
          const packedBoolValue = r.bool();

          m.packedBool.push(packedBoolValue);
          continue;

        // repeated TestAllTypesProto3.NestedEnum packed_nested_enum = 88
        case 706:
          const packedNestedEnumValue =
            test_messages_proto3_models.protobuf_test_messages.proto3
              .TestAllTypesProto3.NestedEnum;

          m.packedNestedEnum.push(packedNestedEnumValue);
          continue;

        // repeated int32 unpacked_int32 = 89
        case 712:
          const unpackedInt32Value = r.int32();

          m.unpackedInt32.push(unpackedInt32Value);
          continue;

        // repeated int64 unpacked_int64 = 90
        case 720:
          const unpackedInt64Value = r.int64();

          m.unpackedInt64.push(unpackedInt64Value);
          continue;

        // repeated uint32 unpacked_uint32 = 91
        case 728:
          const unpackedUint32Value = r.uint32();

          m.unpackedUint32.push(unpackedUint32Value);
          continue;

        // repeated uint64 unpacked_uint64 = 92
        case 736:
          const unpackedUint64Value = r.uint64();

          m.unpackedUint64.push(unpackedUint64Value);
          continue;

        // repeated sint32 unpacked_sint32 = 93
        case 744:
          const unpackedSint32Value = r.sint32();

          m.unpackedSint32.push(unpackedSint32Value);
          continue;

        // repeated sint64 unpacked_sint64 = 94
        case 752:
          const unpackedSint64Value = r.sint64();

          m.unpackedSint64.push(unpackedSint64Value);
          continue;

        // repeated fixed32 unpacked_fixed32 = 95
        case 765:
          const unpackedFixed32Value = r.fixed32();

          m.unpackedFixed32.push(unpackedFixed32Value);
          continue;

        // repeated fixed64 unpacked_fixed64 = 96
        case 769:
          const unpackedFixed64Value = r.fixed64();

          m.unpackedFixed64.push(unpackedFixed64Value);
          continue;

        // repeated sfixed32 unpacked_sfixed32 = 97
        case 781:
          const unpackedSfixed32Value = r.sfixed32();

          m.unpackedSfixed32.push(unpackedSfixed32Value);
          continue;

        // repeated sfixed64 unpacked_sfixed64 = 98
        case 785:
          const unpackedSfixed64Value = r.sfixed64();

          m.unpackedSfixed64.push(unpackedSfixed64Value);
          continue;

        // repeated float unpacked_float = 99
        case 797:
          const unpackedFloatValue = r.float();

          m.unpackedFloat.push(unpackedFloatValue);
          continue;

        // repeated double unpacked_double = 100
        case 801:
          const unpackedDoubleValue = r.double();

          m.unpackedDouble.push(unpackedDoubleValue);
          continue;

        // repeated bool unpacked_bool = 101
        case 808:
          const unpackedBoolValue = r.bool();

          m.unpackedBool.push(unpackedBoolValue);
          continue;

        // repeated TestAllTypesProto3.NestedEnum unpacked_nested_enum = 102
        case 818:
          const unpackedNestedEnumValue =
            test_messages_proto3_models.protobuf_test_messages.proto3
              .TestAllTypesProto3.NestedEnum;

          m.unpackedNestedEnum.push(unpackedNestedEnumValue);
          continue;

        // map<int32, int32> map_int32_int32 = 56
        case 450:
          const mapInt32Int32Key = r.int32();
          const mapInt32Int32Value = r.int32();

          m.mapInt32Int32.set(mapInt32Int32Key, mapInt32Int32Value);
          continue;

        // map<int64, int64> map_int64_int64 = 57
        case 458:
          const mapInt64Int64Key = r.int64();
          const mapInt64Int64Value = r.int64();

          m.mapInt64Int64.set(mapInt64Int64Key, mapInt64Int64Value);
          continue;

        // map<uint32, uint32> map_uint32_uint32 = 58
        case 466:
          const mapUint32Uint32Key = r.uint32();
          const mapUint32Uint32Value = r.uint32();

          m.mapUint32Uint32.set(mapUint32Uint32Key, mapUint32Uint32Value);
          continue;

        // map<uint64, uint64> map_uint64_uint64 = 59
        case 474:
          const mapUint64Uint64Key = r.uint64();
          const mapUint64Uint64Value = r.uint64();

          m.mapUint64Uint64.set(mapUint64Uint64Key, mapUint64Uint64Value);
          continue;

        // map<sint32, sint32> map_sint32_sint32 = 60
        case 482:
          const mapSint32Sint32Key = r.sint32();
          const mapSint32Sint32Value = r.sint32();

          m.mapSint32Sint32.set(mapSint32Sint32Key, mapSint32Sint32Value);
          continue;

        // map<sint64, sint64> map_sint64_sint64 = 61
        case 490:
          const mapSint64Sint64Key = r.sint64();
          const mapSint64Sint64Value = r.sint64();

          m.mapSint64Sint64.set(mapSint64Sint64Key, mapSint64Sint64Value);
          continue;

        // map<fixed32, fixed32> map_fixed32_fixed32 = 62
        case 498:
          const mapFixed32Fixed32Key = r.fixed32();
          const mapFixed32Fixed32Value = r.fixed32();

          m.mapFixed32Fixed32.set(mapFixed32Fixed32Key, mapFixed32Fixed32Value);
          continue;

        // map<fixed64, fixed64> map_fixed64_fixed64 = 63
        case 506:
          const mapFixed64Fixed64Key = r.fixed64();
          const mapFixed64Fixed64Value = r.fixed64();

          m.mapFixed64Fixed64.set(mapFixed64Fixed64Key, mapFixed64Fixed64Value);
          continue;

        // map<sfixed32, sfixed32> map_sfixed32_sfixed32 = 64
        case 514:
          const mapSfixed32Sfixed32Key = r.sfixed32();
          const mapSfixed32Sfixed32Value = r.sfixed32();

          m.mapSfixed32Sfixed32.set(
            mapSfixed32Sfixed32Key,
            mapSfixed32Sfixed32Value
          );
          continue;

        // map<sfixed64, sfixed64> map_sfixed64_sfixed64 = 65
        case 522:
          const mapSfixed64Sfixed64Key = r.sfixed64();
          const mapSfixed64Sfixed64Value = r.sfixed64();

          m.mapSfixed64Sfixed64.set(
            mapSfixed64Sfixed64Key,
            mapSfixed64Sfixed64Value
          );
          continue;

        // map<int32, float> map_int32_float = 66
        case 530:
          const mapInt32FloatKey = r.int32();
          const mapInt32FloatValue = r.float();

          m.mapInt32Float.set(mapInt32FloatKey, mapInt32FloatValue);
          continue;

        // map<int32, double> map_int32_double = 67
        case 538:
          const mapInt32DoubleKey = r.int32();
          const mapInt32DoubleValue = r.double();

          m.mapInt32Double.set(mapInt32DoubleKey, mapInt32DoubleValue);
          continue;

        // map<bool, bool> map_bool_bool = 68
        case 546:
          const mapBoolBoolKey = r.bool();
          const mapBoolBoolValue = r.bool();

          m.mapBoolBool.set(mapBoolBoolKey, mapBoolBoolValue);
          continue;

        // map<string, string> map_string_string = 69
        case 554:
          const mapStringStringKey = r.string();
          const mapStringStringValue = r.string();

          m.mapStringString.set(mapStringStringKey, mapStringStringValue);
          continue;

        // map<string, bytes> map_string_bytes = 70
        case 562:
          const mapStringBytesKey = r.string();
          const mapStringBytesValue = r.bytes();

          m.mapStringBytes.set(mapStringBytesKey, mapStringBytesValue);
          continue;

        // map<string, TestAllTypesProto3.NestedMessage> map_string_nested_message = 71
        case 570:
          const mapStringNestedMessageKey = r.string();
          const mapStringNestedMessageValue =
            test_messages_proto3_models.protobuf_test_messages.proto3
              .TestAllTypesProto3.NestedMessage;

          m.mapStringNestedMessage.set(
            mapStringNestedMessageKey,
            mapStringNestedMessageValue
          );
          continue;

        // map<string, ForeignMessage> map_string_foreign_message = 72
        case 578:
          const mapStringForeignMessageKey = r.string();
          const mapStringForeignMessageValue =
            test_messages_proto3_models.protobuf_test_messages.proto3
              .ForeignMessage;

          m.mapStringForeignMessage.set(
            mapStringForeignMessageKey,
            mapStringForeignMessageValue
          );
          continue;

        // map<string, TestAllTypesProto3.NestedEnum> map_string_nested_enum = 73
        case 586:
          const mapStringNestedEnumKey = r.string();
          const mapStringNestedEnumValue =
            test_messages_proto3_models.protobuf_test_messages.proto3
              .TestAllTypesProto3.NestedEnum;

          m.mapStringNestedEnum.set(
            mapStringNestedEnumKey,
            mapStringNestedEnumValue
          );
          continue;

        // map<string, ForeignEnum> map_string_foreign_enum = 74
        case 594:
          const mapStringForeignEnumKey = r.string();
          const mapStringForeignEnumValue =
            test_messages_proto3_models.protobuf_test_messages.proto3
              .ForeignEnum;

          m.mapStringForeignEnum.set(
            mapStringForeignEnumKey,
            mapStringForeignEnumValue
          );
          continue;

        // uint32 oneof_uint32 = 111
        case 888:
          m.oneofUint32 = r.uint32();
          continue;

        // TestAllTypesProto3.NestedMessage oneof_nested_message = 112
        case 898:
          m.oneofNestedMessage =
            test_messages_proto3_models.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage;
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
        case 954:
          m.oneofEnum =
            test_messages_proto3_models.protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum;
          continue;

        // google.protobuf.NullValue oneof_null_value = 120
        case 962:
          m.oneofNullValue =
            google_protobuf_struct_models.google.protobuf.NullValue;
          continue;

        // google.protobuf.BoolValue optional_bool_wrapper = 201
        case 1610:
          m.optionalBoolWrapper =
            google_protobuf_wrappers_models.google.protobuf.BoolValue;
          continue;

        // google.protobuf.Int32Value optional_int32_wrapper = 202
        case 1618:
          m.optionalInt32Wrapper =
            google_protobuf_wrappers_models.google.protobuf.Int32Value;
          continue;

        // google.protobuf.Int64Value optional_int64_wrapper = 203
        case 1626:
          m.optionalInt64Wrapper =
            google_protobuf_wrappers_models.google.protobuf.Int64Value;
          continue;

        // google.protobuf.UInt32Value optional_uint32_wrapper = 204
        case 1634:
          m.optionalUint32Wrapper =
            google_protobuf_wrappers_models.google.protobuf.UInt32Value;
          continue;

        // google.protobuf.UInt64Value optional_uint64_wrapper = 205
        case 1642:
          m.optionalUint64Wrapper =
            google_protobuf_wrappers_models.google.protobuf.UInt64Value;
          continue;

        // google.protobuf.FloatValue optional_float_wrapper = 206
        case 1650:
          m.optionalFloatWrapper =
            google_protobuf_wrappers_models.google.protobuf.FloatValue;
          continue;

        // google.protobuf.DoubleValue optional_double_wrapper = 207
        case 1658:
          m.optionalDoubleWrapper =
            google_protobuf_wrappers_models.google.protobuf.DoubleValue;
          continue;

        // google.protobuf.StringValue optional_string_wrapper = 208
        case 1666:
          m.optionalStringWrapper =
            google_protobuf_wrappers_models.google.protobuf.StringValue;
          continue;

        // google.protobuf.BytesValue optional_bytes_wrapper = 209
        case 1674:
          m.optionalBytesWrapper =
            google_protobuf_wrappers_models.google.protobuf.BytesValue;
          continue;

        // repeated google.protobuf.BoolValue repeated_bool_wrapper = 211
        case 1690:
          const repeatedBoolWrapperValue =
            google_protobuf_wrappers_models.google.protobuf.BoolValue;

          m.repeatedBoolWrapper.push(repeatedBoolWrapperValue);
          continue;

        // repeated google.protobuf.Int32Value repeated_int32_wrapper = 212
        case 1698:
          const repeatedInt32WrapperValue =
            google_protobuf_wrappers_models.google.protobuf.Int32Value;

          m.repeatedInt32Wrapper.push(repeatedInt32WrapperValue);
          continue;

        // repeated google.protobuf.Int64Value repeated_int64_wrapper = 213
        case 1706:
          const repeatedInt64WrapperValue =
            google_protobuf_wrappers_models.google.protobuf.Int64Value;

          m.repeatedInt64Wrapper.push(repeatedInt64WrapperValue);
          continue;

        // repeated google.protobuf.UInt32Value repeated_uint32_wrapper = 214
        case 1714:
          const repeatedUint32WrapperValue =
            google_protobuf_wrappers_models.google.protobuf.UInt32Value;

          m.repeatedUint32Wrapper.push(repeatedUint32WrapperValue);
          continue;

        // repeated google.protobuf.UInt64Value repeated_uint64_wrapper = 215
        case 1722:
          const repeatedUint64WrapperValue =
            google_protobuf_wrappers_models.google.protobuf.UInt64Value;

          m.repeatedUint64Wrapper.push(repeatedUint64WrapperValue);
          continue;

        // repeated google.protobuf.FloatValue repeated_float_wrapper = 216
        case 1730:
          const repeatedFloatWrapperValue =
            google_protobuf_wrappers_models.google.protobuf.FloatValue;

          m.repeatedFloatWrapper.push(repeatedFloatWrapperValue);
          continue;

        // repeated google.protobuf.DoubleValue repeated_double_wrapper = 217
        case 1738:
          const repeatedDoubleWrapperValue =
            google_protobuf_wrappers_models.google.protobuf.DoubleValue;

          m.repeatedDoubleWrapper.push(repeatedDoubleWrapperValue);
          continue;

        // repeated google.protobuf.StringValue repeated_string_wrapper = 218
        case 1746:
          const repeatedStringWrapperValue =
            google_protobuf_wrappers_models.google.protobuf.StringValue;

          m.repeatedStringWrapper.push(repeatedStringWrapperValue);
          continue;

        // repeated google.protobuf.BytesValue repeated_bytes_wrapper = 219
        case 1754:
          const repeatedBytesWrapperValue =
            google_protobuf_wrappers_models.google.protobuf.BytesValue;

          m.repeatedBytesWrapper.push(repeatedBytesWrapperValue);
          continue;

        // google.protobuf.Duration optional_duration = 301
        case 2410:
          m.optionalDuration =
            google_protobuf_duration_models.google.protobuf.Duration;
          continue;

        // google.protobuf.Timestamp optional_timestamp = 302
        case 2418:
          m.optionalTimestamp =
            google_protobuf_timestamp_models.google.protobuf.Timestamp;
          continue;

        // google.protobuf.FieldMask optional_field_mask = 303
        case 2426:
          m.optionalFieldMask =
            google_protobuf_field_mask_models.google.protobuf.FieldMask;
          continue;

        // google.protobuf.Struct optional_struct = 304
        case 2434:
          m.optionalStruct =
            google_protobuf_struct_models.google.protobuf.Struct;
          continue;

        // google.protobuf.Any optional_any = 305
        case 2442:
          m.optionalAny = google_protobuf_any_models.google.protobuf.Any;
          continue;

        // google.protobuf.Value optional_value = 306
        case 2450:
          m.optionalValue = google_protobuf_struct_models.google.protobuf.Value;
          continue;

        // google.protobuf.NullValue optional_null_value = 307
        case 2458:
          m.optionalNullValue =
            google_protobuf_struct_models.google.protobuf.NullValue;
          continue;

        // repeated google.protobuf.Duration repeated_duration = 311
        case 2490:
          const repeatedDurationValue =
            google_protobuf_duration_models.google.protobuf.Duration;

          m.repeatedDuration.push(repeatedDurationValue);
          continue;

        // repeated google.protobuf.Timestamp repeated_timestamp = 312
        case 2498:
          const repeatedTimestampValue =
            google_protobuf_timestamp_models.google.protobuf.Timestamp;

          m.repeatedTimestamp.push(repeatedTimestampValue);
          continue;

        // repeated google.protobuf.FieldMask repeated_fieldmask = 313
        case 2506:
          const repeatedFieldmaskValue =
            google_protobuf_field_mask_models.google.protobuf.FieldMask;

          m.repeatedFieldmask.push(repeatedFieldmaskValue);
          continue;

        // repeated google.protobuf.Struct repeated_struct = 324
        case 2594:
          const repeatedStructValue =
            google_protobuf_struct_models.google.protobuf.Struct;

          m.repeatedStruct.push(repeatedStructValue);
          continue;

        // repeated google.protobuf.Any repeated_any = 315
        case 2522:
          const repeatedAnyValue =
            google_protobuf_any_models.google.protobuf.Any;

          m.repeatedAny.push(repeatedAnyValue);
          continue;

        // repeated google.protobuf.Value repeated_value = 316
        case 2530:
          const repeatedValueValue =
            google_protobuf_struct_models.google.protobuf.Value;

          m.repeatedValue.push(repeatedValueValue);
          continue;

        // repeated google.protobuf.ListValue repeated_list_value = 317
        case 2538:
          const repeatedListValueValue =
            google_protobuf_struct_models.google.protobuf.ListValue;

          m.repeatedListValue.push(repeatedListValueValue);
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

  public static toJSON(m: ITestAllTypesProto3): ITestAllTypesProto3Obj {}

  public static fromJSON(obj: ITestAllTypesProto3Obj): ITestAllTypesProto3 {}

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
    corecursive: null;
  }

  export interface INestedMessage {
    a: number;
    corecursive: null;
  }

  export class NestedMessage implements INestedMessage {
    a: number = 0;
    corecursive: null = null;

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
      if (m.corecursive !== null) {
        w.uint32(18);
        m.corecursive.encode(writer);
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
            m.corecursive =
              test_messages_proto3_models.protobuf_test_messages.proto3.TestAllTypesProto3;
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
  FOREIGN_FOO = 0,
  FOREIGN_BAR = 1,
  FOREIGN_BAZ = 2,
}

export interface INullHypothesisProto3Obj {}

export interface INullHypothesisProto3 {}

export class NullHypothesisProto3 implements INullHypothesisProto3 {
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

  public static toJSON(m: INullHypothesisProto3): INullHypothesisProto3Obj {}

  public static fromJSON(
    obj: INullHypothesisProto3Obj
  ): INullHypothesisProto3 {}

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

  public static toJSON(m: IEnumOnlyProto3): IEnumOnlyProto3Obj {}

  public static fromJSON(obj: IEnumOnlyProto3Obj): IEnumOnlyProto3 {}

  clone(): EnumOnlyProto3 {
    return new EnumOnlyProto3(this);
  }
}

export namespace EnumOnlyProto3 {}
