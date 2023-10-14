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

export interface ITestAllTypesProto3 {
  optional_int32: number;
  optional_int64: BigInt;
  optional_uint32: number;
  optional_uint64: BigInt;
  optional_sint32: number;
  optional_sint64: BigInt;
  optional_fixed32: number;
  optional_fixed64: BigInt;
  optional_sfixed32: number;
  optional_sfixed64: BigInt;
  optional_float: number;
  optional_double: number;
  optional_bool: boolean;
  optional_string: string;
  optional_bytes: Uint8Array;
  optional_nested_message: TestAllTypesProto3.NestedMessage;
  optional_foreign_message: ForeignMessage;
  optional_nested_enum: TestAllTypesProto3.NestedEnum;
  optional_foreign_enum: ForeignEnum;
  optional_aliased_enum: TestAllTypesProto3.AliasedEnum;
  optional_string_piece: string;
  optional_cord: string;
  recursive_message: TestAllTypesProto3;
  repeated_int32: number;
  repeated_int64: BigInt;
  repeated_uint32: number;
  repeated_uint64: BigInt;
  repeated_sint32: number;
  repeated_sint64: BigInt;
  repeated_fixed32: number;
  repeated_fixed64: BigInt;
  repeated_sfixed32: number;
  repeated_sfixed64: BigInt;
  repeated_float: number;
  repeated_double: number;
  repeated_bool: boolean;
  repeated_string: string;
  repeated_bytes: Uint8Array;
  repeated_nested_message: TestAllTypesProto3.NestedMessage;
  repeated_foreign_message: ForeignMessage;
  repeated_nested_enum: TestAllTypesProto3.NestedEnum;
  repeated_foreign_enum: ForeignEnum;
  repeated_string_piece: string;
  repeated_cord: string;
  packed_int32: number;
  packed_int64: BigInt;
  packed_uint32: number;
  packed_uint64: BigInt;
  packed_sint32: number;
  packed_sint64: BigInt;
  packed_fixed32: number;
  packed_fixed64: BigInt;
  packed_sfixed32: number;
  packed_sfixed64: BigInt;
  packed_float: number;
  packed_double: number;
  packed_bool: boolean;
  packed_nested_enum: TestAllTypesProto3.NestedEnum;
  unpacked_int32: number;
  unpacked_int64: BigInt;
  unpacked_uint32: number;
  unpacked_uint64: BigInt;
  unpacked_sint32: number;
  unpacked_sint64: BigInt;
  unpacked_fixed32: number;
  unpacked_fixed64: BigInt;
  unpacked_sfixed32: number;
  unpacked_sfixed64: BigInt;
  unpacked_float: number;
  unpacked_double: number;
  unpacked_bool: boolean;
  unpacked_nested_enum: TestAllTypesProto3.NestedEnum;
  map_int32_int32: Record<number, number>;
  map_int64_int64: Record<BigInt, BigInt>;
  map_uint32_uint32: Record<number, number>;
  map_uint64_uint64: Record<BigInt, BigInt>;
  map_sint32_sint32: Record<number, number>;
  map_sint64_sint64: Record<BigInt, BigInt>;
  map_fixed32_fixed32: Record<number, number>;
  map_fixed64_fixed64: Record<BigInt, BigInt>;
  map_sfixed32_sfixed32: Record<number, number>;
  map_sfixed64_sfixed64: Record<BigInt, BigInt>;
  map_int32_float: Record<number, number>;
  map_int32_double: Record<number, number>;
  map_bool_bool: Record<boolean, boolean>;
  map_string_string: Record<string, string>;
  map_string_bytes: Record<string, Uint8Array>;
  map_string_nested_message: Record<string, TestAllTypesProto3.NestedMessage>;
  map_string_foreign_message: Record<string, ForeignMessage>;
  map_string_nested_enum: Record<string, TestAllTypesProto3.NestedEnum>;
  map_string_foreign_enum: Record<string, ForeignEnum>;
  oneof_uint32?: number;
  oneof_nested_message?: TestAllTypesProto3.NestedMessage;
  oneof_string?: string;
  oneof_bytes?: Uint8Array;
  oneof_bool?: boolean;
  oneof_uint64?: BigInt;
  oneof_float?: number;
  oneof_double?: number;
  oneof_enum?: TestAllTypesProto3.NestedEnum;
  oneof_null_value?: google.protobuf.NullValue;
  optional_bool_wrapper: google.protobuf.BoolValue;
  optional_int32_wrapper: google.protobuf.Int32Value;
  optional_int64_wrapper: google.protobuf.Int64Value;
  optional_uint32_wrapper: google.protobuf.UInt32Value;
  optional_uint64_wrapper: google.protobuf.UInt64Value;
  optional_float_wrapper: google.protobuf.FloatValue;
  optional_double_wrapper: google.protobuf.DoubleValue;
  optional_string_wrapper: google.protobuf.StringValue;
  optional_bytes_wrapper: google.protobuf.BytesValue;
  repeated_bool_wrapper: google.protobuf.BoolValue;
  repeated_int32_wrapper: google.protobuf.Int32Value;
  repeated_int64_wrapper: google.protobuf.Int64Value;
  repeated_uint32_wrapper: google.protobuf.UInt32Value;
  repeated_uint64_wrapper: google.protobuf.UInt64Value;
  repeated_float_wrapper: google.protobuf.FloatValue;
  repeated_double_wrapper: google.protobuf.DoubleValue;
  repeated_string_wrapper: google.protobuf.StringValue;
  repeated_bytes_wrapper: google.protobuf.BytesValue;
  optional_duration: google.protobuf.Duration;
  optional_timestamp: google.protobuf.Timestamp;
  optional_field_mask: google.protobuf.FieldMask;
  optional_struct: google.protobuf.Struct;
  optional_any: google.protobuf.Any;
  optional_value: google.protobuf.Value;
  optional_null_value: google.protobuf.NullValue;
  repeated_duration: google.protobuf.Duration;
  repeated_timestamp: google.protobuf.Timestamp;
  repeated_fieldmask: google.protobuf.FieldMask;
  repeated_struct: google.protobuf.Struct;
  repeated_any: google.protobuf.Any;
  repeated_value: google.protobuf.Value;
  repeated_list_value: google.protobuf.ListValue;
  fieldname1: number;
  field_name2: number;
  _field_name3: number;
  field__name4_: number;
  field0name5: number;
  field_0_name6: number;
  fieldName7: number;
  fieldName8: number;
  field_Name9: number;
  field_Name10: number;
  fIELD_NAME11: number;
  fIELD_name12: number;
  __field_name13: number;
  __Field_name14: number;
  field__name15: number;
  field__Name16: number;
  field_name17__: number;
  field_name18__: number;
}

export class TestAllTypesProto3 implements ITestAllTypesProto3 {
  optional_int32: number = 0;
  optional_int64: BigInt = 0n;
  optional_uint32: number = 0;
  optional_uint64: BigInt = 0n;
  optional_sint32: number = 0;
  optional_sint64: BigInt = 0n;
  optional_fixed32: number = 0;
  optional_fixed64: BigInt = 0n;
  optional_sfixed32: number = 0;
  optional_sfixed64: BigInt = 0n;
  optional_float: number = 0;
  optional_double: number = 0;
  optional_bool: boolean = false;
  optional_string: string = "";
  optional_bytes: Uint8Array = new Uint8Array();
  optional_nested_message: TestAllTypesProto3.NestedMessage = null;
  optional_foreign_message: ForeignMessage = null;
  optional_nested_enum: TestAllTypesProto3.NestedEnum = null;
  optional_foreign_enum: ForeignEnum = null;
  optional_aliased_enum: TestAllTypesProto3.AliasedEnum = null;
  optional_string_piece: string = "";
  optional_cord: string = "";
  recursive_message: TestAllTypesProto3 = null;
  repeated_int32: number = [];
  repeated_int64: BigInt = [];
  repeated_uint32: number = [];
  repeated_uint64: BigInt = [];
  repeated_sint32: number = [];
  repeated_sint64: BigInt = [];
  repeated_fixed32: number = [];
  repeated_fixed64: BigInt = [];
  repeated_sfixed32: number = [];
  repeated_sfixed64: BigInt = [];
  repeated_float: number = [];
  repeated_double: number = [];
  repeated_bool: boolean = [];
  repeated_string: string = [];
  repeated_bytes: Uint8Array = [];
  repeated_nested_message: TestAllTypesProto3.NestedMessage = [];
  repeated_foreign_message: ForeignMessage = [];
  repeated_nested_enum: TestAllTypesProto3.NestedEnum = [];
  repeated_foreign_enum: ForeignEnum = [];
  repeated_string_piece: string = [];
  repeated_cord: string = [];
  packed_int32: number = [];
  packed_int64: BigInt = [];
  packed_uint32: number = [];
  packed_uint64: BigInt = [];
  packed_sint32: number = [];
  packed_sint64: BigInt = [];
  packed_fixed32: number = [];
  packed_fixed64: BigInt = [];
  packed_sfixed32: number = [];
  packed_sfixed64: BigInt = [];
  packed_float: number = [];
  packed_double: number = [];
  packed_bool: boolean = [];
  packed_nested_enum: TestAllTypesProto3.NestedEnum = [];
  unpacked_int32: number = [];
  unpacked_int64: BigInt = [];
  unpacked_uint32: number = [];
  unpacked_uint64: BigInt = [];
  unpacked_sint32: number = [];
  unpacked_sint64: BigInt = [];
  unpacked_fixed32: number = [];
  unpacked_fixed64: BigInt = [];
  unpacked_sfixed32: number = [];
  unpacked_sfixed64: BigInt = [];
  unpacked_float: number = [];
  unpacked_double: number = [];
  unpacked_bool: boolean = [];
  unpacked_nested_enum: TestAllTypesProto3.NestedEnum = [];
  map_int32_int32: Record<number, number> = {};
  map_int64_int64: Record<BigInt, BigInt> = {};
  map_uint32_uint32: Record<number, number> = {};
  map_uint64_uint64: Record<BigInt, BigInt> = {};
  map_sint32_sint32: Record<number, number> = {};
  map_sint64_sint64: Record<BigInt, BigInt> = {};
  map_fixed32_fixed32: Record<number, number> = {};
  map_fixed64_fixed64: Record<BigInt, BigInt> = {};
  map_sfixed32_sfixed32: Record<number, number> = {};
  map_sfixed64_sfixed64: Record<BigInt, BigInt> = {};
  map_int32_float: Record<number, number> = {};
  map_int32_double: Record<number, number> = {};
  map_bool_bool: Record<boolean, boolean> = {};
  map_string_string: Record<string, string> = {};
  map_string_bytes: Record<string, Uint8Array> = {};
  map_string_nested_message: Record<string, TestAllTypesProto3.NestedMessage> =
    {};
  map_string_foreign_message: Record<string, ForeignMessage> = {};
  map_string_nested_enum: Record<string, TestAllTypesProto3.NestedEnum> = {};
  map_string_foreign_enum: Record<string, ForeignEnum> = {};
  oneof_uint32?: number = 0;
  oneof_nested_message?: TestAllTypesProto3.NestedMessage = null;
  oneof_string?: string = "";
  oneof_bytes?: Uint8Array = new Uint8Array();
  oneof_bool?: boolean = false;
  oneof_uint64?: BigInt = 0n;
  oneof_float?: number = 0;
  oneof_double?: number = 0;
  oneof_enum?: TestAllTypesProto3.NestedEnum = null;
  oneof_null_value?: google.protobuf.NullValue = null;
  optional_bool_wrapper: google.protobuf.BoolValue = null;
  optional_int32_wrapper: google.protobuf.Int32Value = null;
  optional_int64_wrapper: google.protobuf.Int64Value = null;
  optional_uint32_wrapper: google.protobuf.UInt32Value = null;
  optional_uint64_wrapper: google.protobuf.UInt64Value = null;
  optional_float_wrapper: google.protobuf.FloatValue = null;
  optional_double_wrapper: google.protobuf.DoubleValue = null;
  optional_string_wrapper: google.protobuf.StringValue = null;
  optional_bytes_wrapper: google.protobuf.BytesValue = null;
  repeated_bool_wrapper: google.protobuf.BoolValue = [];
  repeated_int32_wrapper: google.protobuf.Int32Value = [];
  repeated_int64_wrapper: google.protobuf.Int64Value = [];
  repeated_uint32_wrapper: google.protobuf.UInt32Value = [];
  repeated_uint64_wrapper: google.protobuf.UInt64Value = [];
  repeated_float_wrapper: google.protobuf.FloatValue = [];
  repeated_double_wrapper: google.protobuf.DoubleValue = [];
  repeated_string_wrapper: google.protobuf.StringValue = [];
  repeated_bytes_wrapper: google.protobuf.BytesValue = [];
  optional_duration: google.protobuf.Duration = null;
  optional_timestamp: google.protobuf.Timestamp = null;
  optional_field_mask: google.protobuf.FieldMask = null;
  optional_struct: google.protobuf.Struct = null;
  optional_any: google.protobuf.Any = null;
  optional_value: google.protobuf.Value = null;
  optional_null_value: google.protobuf.NullValue = null;
  repeated_duration: google.protobuf.Duration = [];
  repeated_timestamp: google.protobuf.Timestamp = [];
  repeated_fieldmask: google.protobuf.FieldMask = [];
  repeated_struct: google.protobuf.Struct = [];
  repeated_any: google.protobuf.Any = [];
  repeated_value: google.protobuf.Value = [];
  repeated_list_value: google.protobuf.ListValue = [];
  fieldname1: number = 0;
  field_name2: number = 0;
  _field_name3: number = 0;
  field__name4_: number = 0;
  field0name5: number = 0;
  field_0_name6: number = 0;
  fieldName7: number = 0;
  fieldName8: number = 0;
  field_Name9: number = 0;
  field_Name10: number = 0;
  fIELD_NAME11: number = 0;
  fIELD_name12: number = 0;
  __field_name13: number = 0;
  __Field_name14: number = 0;
  field__name15: number = 0;
  field__Name16: number = 0;
  field_name17__: number = 0;
  field_name18__: number = 0;

  constructor(obj?: Partial<ITestAllTypesProto3>) {
    if (obj?.optional_int32 ?? false) {
      this.optional_int32 = obj.optional_int32;
    }
    if (obj?.optional_int64 ?? false) {
      this.optional_int64 = obj.optional_int64;
    }
    if (obj?.optional_uint32 ?? false) {
      this.optional_uint32 = obj.optional_uint32;
    }
    if (obj?.optional_uint64 ?? false) {
      this.optional_uint64 = obj.optional_uint64;
    }
    if (obj?.optional_sint32 ?? false) {
      this.optional_sint32 = obj.optional_sint32;
    }
    if (obj?.optional_sint64 ?? false) {
      this.optional_sint64 = obj.optional_sint64;
    }
    if (obj?.optional_fixed32 ?? false) {
      this.optional_fixed32 = obj.optional_fixed32;
    }
    if (obj?.optional_fixed64 ?? false) {
      this.optional_fixed64 = obj.optional_fixed64;
    }
    if (obj?.optional_sfixed32 ?? false) {
      this.optional_sfixed32 = obj.optional_sfixed32;
    }
    if (obj?.optional_sfixed64 ?? false) {
      this.optional_sfixed64 = obj.optional_sfixed64;
    }
    if (obj?.optional_float ?? false) {
      this.optional_float = obj.optional_float;
    }
    if (obj?.optional_double ?? false) {
      this.optional_double = obj.optional_double;
    }
    if (obj?.optional_bool ?? false) {
      this.optional_bool = obj.optional_bool;
    }
    if (obj?.optional_string ?? false) {
      this.optional_string = obj.optional_string;
    }
    if (obj?.optional_bytes ?? false) {
      this.optional_bytes = obj.optional_bytes;
    }
    if (obj?.optional_nested_message ?? false) {
      this.optional_nested_message = obj.optional_nested_message;
    }
    if (obj?.optional_foreign_message ?? false) {
      this.optional_foreign_message = obj.optional_foreign_message;
    }
    if (obj?.optional_nested_enum ?? false) {
      this.optional_nested_enum = obj.optional_nested_enum;
    }
    if (obj?.optional_foreign_enum ?? false) {
      this.optional_foreign_enum = obj.optional_foreign_enum;
    }
    if (obj?.optional_aliased_enum ?? false) {
      this.optional_aliased_enum = obj.optional_aliased_enum;
    }
    if (obj?.optional_string_piece ?? false) {
      this.optional_string_piece = obj.optional_string_piece;
    }
    if (obj?.optional_cord ?? false) {
      this.optional_cord = obj.optional_cord;
    }
    if (obj?.recursive_message ?? false) {
      this.recursive_message = obj.recursive_message;
    }
    if (obj?.repeated_int32 ?? false) {
      this.repeated_int32 = obj.repeated_int32;
    }
    if (obj?.repeated_int64 ?? false) {
      this.repeated_int64 = obj.repeated_int64;
    }
    if (obj?.repeated_uint32 ?? false) {
      this.repeated_uint32 = obj.repeated_uint32;
    }
    if (obj?.repeated_uint64 ?? false) {
      this.repeated_uint64 = obj.repeated_uint64;
    }
    if (obj?.repeated_sint32 ?? false) {
      this.repeated_sint32 = obj.repeated_sint32;
    }
    if (obj?.repeated_sint64 ?? false) {
      this.repeated_sint64 = obj.repeated_sint64;
    }
    if (obj?.repeated_fixed32 ?? false) {
      this.repeated_fixed32 = obj.repeated_fixed32;
    }
    if (obj?.repeated_fixed64 ?? false) {
      this.repeated_fixed64 = obj.repeated_fixed64;
    }
    if (obj?.repeated_sfixed32 ?? false) {
      this.repeated_sfixed32 = obj.repeated_sfixed32;
    }
    if (obj?.repeated_sfixed64 ?? false) {
      this.repeated_sfixed64 = obj.repeated_sfixed64;
    }
    if (obj?.repeated_float ?? false) {
      this.repeated_float = obj.repeated_float;
    }
    if (obj?.repeated_double ?? false) {
      this.repeated_double = obj.repeated_double;
    }
    if (obj?.repeated_bool ?? false) {
      this.repeated_bool = obj.repeated_bool;
    }
    if (obj?.repeated_string ?? false) {
      this.repeated_string = obj.repeated_string;
    }
    if (obj?.repeated_bytes ?? false) {
      this.repeated_bytes = obj.repeated_bytes;
    }
    if (obj?.repeated_nested_message ?? false) {
      this.repeated_nested_message = obj.repeated_nested_message;
    }
    if (obj?.repeated_foreign_message ?? false) {
      this.repeated_foreign_message = obj.repeated_foreign_message;
    }
    if (obj?.repeated_nested_enum ?? false) {
      this.repeated_nested_enum = obj.repeated_nested_enum;
    }
    if (obj?.repeated_foreign_enum ?? false) {
      this.repeated_foreign_enum = obj.repeated_foreign_enum;
    }
    if (obj?.repeated_string_piece ?? false) {
      this.repeated_string_piece = obj.repeated_string_piece;
    }
    if (obj?.repeated_cord ?? false) {
      this.repeated_cord = obj.repeated_cord;
    }
    if (obj?.packed_int32 ?? false) {
      this.packed_int32 = obj.packed_int32;
    }
    if (obj?.packed_int64 ?? false) {
      this.packed_int64 = obj.packed_int64;
    }
    if (obj?.packed_uint32 ?? false) {
      this.packed_uint32 = obj.packed_uint32;
    }
    if (obj?.packed_uint64 ?? false) {
      this.packed_uint64 = obj.packed_uint64;
    }
    if (obj?.packed_sint32 ?? false) {
      this.packed_sint32 = obj.packed_sint32;
    }
    if (obj?.packed_sint64 ?? false) {
      this.packed_sint64 = obj.packed_sint64;
    }
    if (obj?.packed_fixed32 ?? false) {
      this.packed_fixed32 = obj.packed_fixed32;
    }
    if (obj?.packed_fixed64 ?? false) {
      this.packed_fixed64 = obj.packed_fixed64;
    }
    if (obj?.packed_sfixed32 ?? false) {
      this.packed_sfixed32 = obj.packed_sfixed32;
    }
    if (obj?.packed_sfixed64 ?? false) {
      this.packed_sfixed64 = obj.packed_sfixed64;
    }
    if (obj?.packed_float ?? false) {
      this.packed_float = obj.packed_float;
    }
    if (obj?.packed_double ?? false) {
      this.packed_double = obj.packed_double;
    }
    if (obj?.packed_bool ?? false) {
      this.packed_bool = obj.packed_bool;
    }
    if (obj?.packed_nested_enum ?? false) {
      this.packed_nested_enum = obj.packed_nested_enum;
    }
    if (obj?.unpacked_int32 ?? false) {
      this.unpacked_int32 = obj.unpacked_int32;
    }
    if (obj?.unpacked_int64 ?? false) {
      this.unpacked_int64 = obj.unpacked_int64;
    }
    if (obj?.unpacked_uint32 ?? false) {
      this.unpacked_uint32 = obj.unpacked_uint32;
    }
    if (obj?.unpacked_uint64 ?? false) {
      this.unpacked_uint64 = obj.unpacked_uint64;
    }
    if (obj?.unpacked_sint32 ?? false) {
      this.unpacked_sint32 = obj.unpacked_sint32;
    }
    if (obj?.unpacked_sint64 ?? false) {
      this.unpacked_sint64 = obj.unpacked_sint64;
    }
    if (obj?.unpacked_fixed32 ?? false) {
      this.unpacked_fixed32 = obj.unpacked_fixed32;
    }
    if (obj?.unpacked_fixed64 ?? false) {
      this.unpacked_fixed64 = obj.unpacked_fixed64;
    }
    if (obj?.unpacked_sfixed32 ?? false) {
      this.unpacked_sfixed32 = obj.unpacked_sfixed32;
    }
    if (obj?.unpacked_sfixed64 ?? false) {
      this.unpacked_sfixed64 = obj.unpacked_sfixed64;
    }
    if (obj?.unpacked_float ?? false) {
      this.unpacked_float = obj.unpacked_float;
    }
    if (obj?.unpacked_double ?? false) {
      this.unpacked_double = obj.unpacked_double;
    }
    if (obj?.unpacked_bool ?? false) {
      this.unpacked_bool = obj.unpacked_bool;
    }
    if (obj?.unpacked_nested_enum ?? false) {
      this.unpacked_nested_enum = obj.unpacked_nested_enum;
    }
    if (obj?.map_int32_int32 ?? false) {
      this.map_int32_int32 = obj.map_int32_int32;
    }
    if (obj?.map_int64_int64 ?? false) {
      this.map_int64_int64 = obj.map_int64_int64;
    }
    if (obj?.map_uint32_uint32 ?? false) {
      this.map_uint32_uint32 = obj.map_uint32_uint32;
    }
    if (obj?.map_uint64_uint64 ?? false) {
      this.map_uint64_uint64 = obj.map_uint64_uint64;
    }
    if (obj?.map_sint32_sint32 ?? false) {
      this.map_sint32_sint32 = obj.map_sint32_sint32;
    }
    if (obj?.map_sint64_sint64 ?? false) {
      this.map_sint64_sint64 = obj.map_sint64_sint64;
    }
    if (obj?.map_fixed32_fixed32 ?? false) {
      this.map_fixed32_fixed32 = obj.map_fixed32_fixed32;
    }
    if (obj?.map_fixed64_fixed64 ?? false) {
      this.map_fixed64_fixed64 = obj.map_fixed64_fixed64;
    }
    if (obj?.map_sfixed32_sfixed32 ?? false) {
      this.map_sfixed32_sfixed32 = obj.map_sfixed32_sfixed32;
    }
    if (obj?.map_sfixed64_sfixed64 ?? false) {
      this.map_sfixed64_sfixed64 = obj.map_sfixed64_sfixed64;
    }
    if (obj?.map_int32_float ?? false) {
      this.map_int32_float = obj.map_int32_float;
    }
    if (obj?.map_int32_double ?? false) {
      this.map_int32_double = obj.map_int32_double;
    }
    if (obj?.map_bool_bool ?? false) {
      this.map_bool_bool = obj.map_bool_bool;
    }
    if (obj?.map_string_string ?? false) {
      this.map_string_string = obj.map_string_string;
    }
    if (obj?.map_string_bytes ?? false) {
      this.map_string_bytes = obj.map_string_bytes;
    }
    if (obj?.map_string_nested_message ?? false) {
      this.map_string_nested_message = obj.map_string_nested_message;
    }
    if (obj?.map_string_foreign_message ?? false) {
      this.map_string_foreign_message = obj.map_string_foreign_message;
    }
    if (obj?.map_string_nested_enum ?? false) {
      this.map_string_nested_enum = obj.map_string_nested_enum;
    }
    if (obj?.map_string_foreign_enum ?? false) {
      this.map_string_foreign_enum = obj.map_string_foreign_enum;
    }
    if (obj?.oneof_uint32 ?? false) {
      this.oneof_uint32 = obj.oneof_uint32;
    }
    if (obj?.oneof_nested_message ?? false) {
      this.oneof_nested_message = obj.oneof_nested_message;
    }
    if (obj?.oneof_string ?? false) {
      this.oneof_string = obj.oneof_string;
    }
    if (obj?.oneof_bytes ?? false) {
      this.oneof_bytes = obj.oneof_bytes;
    }
    if (obj?.oneof_bool ?? false) {
      this.oneof_bool = obj.oneof_bool;
    }
    if (obj?.oneof_uint64 ?? false) {
      this.oneof_uint64 = obj.oneof_uint64;
    }
    if (obj?.oneof_float ?? false) {
      this.oneof_float = obj.oneof_float;
    }
    if (obj?.oneof_double ?? false) {
      this.oneof_double = obj.oneof_double;
    }
    if (obj?.oneof_enum ?? false) {
      this.oneof_enum = obj.oneof_enum;
    }
    if (obj?.oneof_null_value ?? false) {
      this.oneof_null_value = obj.oneof_null_value;
    }
    if (obj?.optional_bool_wrapper ?? false) {
      this.optional_bool_wrapper = obj.optional_bool_wrapper;
    }
    if (obj?.optional_int32_wrapper ?? false) {
      this.optional_int32_wrapper = obj.optional_int32_wrapper;
    }
    if (obj?.optional_int64_wrapper ?? false) {
      this.optional_int64_wrapper = obj.optional_int64_wrapper;
    }
    if (obj?.optional_uint32_wrapper ?? false) {
      this.optional_uint32_wrapper = obj.optional_uint32_wrapper;
    }
    if (obj?.optional_uint64_wrapper ?? false) {
      this.optional_uint64_wrapper = obj.optional_uint64_wrapper;
    }
    if (obj?.optional_float_wrapper ?? false) {
      this.optional_float_wrapper = obj.optional_float_wrapper;
    }
    if (obj?.optional_double_wrapper ?? false) {
      this.optional_double_wrapper = obj.optional_double_wrapper;
    }
    if (obj?.optional_string_wrapper ?? false) {
      this.optional_string_wrapper = obj.optional_string_wrapper;
    }
    if (obj?.optional_bytes_wrapper ?? false) {
      this.optional_bytes_wrapper = obj.optional_bytes_wrapper;
    }
    if (obj?.repeated_bool_wrapper ?? false) {
      this.repeated_bool_wrapper = obj.repeated_bool_wrapper;
    }
    if (obj?.repeated_int32_wrapper ?? false) {
      this.repeated_int32_wrapper = obj.repeated_int32_wrapper;
    }
    if (obj?.repeated_int64_wrapper ?? false) {
      this.repeated_int64_wrapper = obj.repeated_int64_wrapper;
    }
    if (obj?.repeated_uint32_wrapper ?? false) {
      this.repeated_uint32_wrapper = obj.repeated_uint32_wrapper;
    }
    if (obj?.repeated_uint64_wrapper ?? false) {
      this.repeated_uint64_wrapper = obj.repeated_uint64_wrapper;
    }
    if (obj?.repeated_float_wrapper ?? false) {
      this.repeated_float_wrapper = obj.repeated_float_wrapper;
    }
    if (obj?.repeated_double_wrapper ?? false) {
      this.repeated_double_wrapper = obj.repeated_double_wrapper;
    }
    if (obj?.repeated_string_wrapper ?? false) {
      this.repeated_string_wrapper = obj.repeated_string_wrapper;
    }
    if (obj?.repeated_bytes_wrapper ?? false) {
      this.repeated_bytes_wrapper = obj.repeated_bytes_wrapper;
    }
    if (obj?.optional_duration ?? false) {
      this.optional_duration = obj.optional_duration;
    }
    if (obj?.optional_timestamp ?? false) {
      this.optional_timestamp = obj.optional_timestamp;
    }
    if (obj?.optional_field_mask ?? false) {
      this.optional_field_mask = obj.optional_field_mask;
    }
    if (obj?.optional_struct ?? false) {
      this.optional_struct = obj.optional_struct;
    }
    if (obj?.optional_any ?? false) {
      this.optional_any = obj.optional_any;
    }
    if (obj?.optional_value ?? false) {
      this.optional_value = obj.optional_value;
    }
    if (obj?.optional_null_value ?? false) {
      this.optional_null_value = obj.optional_null_value;
    }
    if (obj?.repeated_duration ?? false) {
      this.repeated_duration = obj.repeated_duration;
    }
    if (obj?.repeated_timestamp ?? false) {
      this.repeated_timestamp = obj.repeated_timestamp;
    }
    if (obj?.repeated_fieldmask ?? false) {
      this.repeated_fieldmask = obj.repeated_fieldmask;
    }
    if (obj?.repeated_struct ?? false) {
      this.repeated_struct = obj.repeated_struct;
    }
    if (obj?.repeated_any ?? false) {
      this.repeated_any = obj.repeated_any;
    }
    if (obj?.repeated_value ?? false) {
      this.repeated_value = obj.repeated_value;
    }
    if (obj?.repeated_list_value ?? false) {
      this.repeated_list_value = obj.repeated_list_value;
    }
    if (obj?.fieldname1 ?? false) {
      this.fieldname1 = obj.fieldname1;
    }
    if (obj?.field_name2 ?? false) {
      this.field_name2 = obj.field_name2;
    }
    if (obj?._field_name3 ?? false) {
      this._field_name3 = obj._field_name3;
    }
    if (obj?.field__name4_ ?? false) {
      this.field__name4_ = obj.field__name4_;
    }
    if (obj?.field0name5 ?? false) {
      this.field0name5 = obj.field0name5;
    }
    if (obj?.field_0_name6 ?? false) {
      this.field_0_name6 = obj.field_0_name6;
    }
    if (obj?.fieldName7 ?? false) {
      this.fieldName7 = obj.fieldName7;
    }
    if (obj?.fieldName8 ?? false) {
      this.fieldName8 = obj.fieldName8;
    }
    if (obj?.field_Name9 ?? false) {
      this.field_Name9 = obj.field_Name9;
    }
    if (obj?.field_Name10 ?? false) {
      this.field_Name10 = obj.field_Name10;
    }
    if (obj?.fIELD_NAME11 ?? false) {
      this.fIELD_NAME11 = obj.fIELD_NAME11;
    }
    if (obj?.fIELD_name12 ?? false) {
      this.fIELD_name12 = obj.fIELD_name12;
    }
    if (obj?.__field_name13 ?? false) {
      this.__field_name13 = obj.__field_name13;
    }
    if (obj?.__Field_name14 ?? false) {
      this.__Field_name14 = obj.__Field_name14;
    }
    if (obj?.field__name15 ?? false) {
      this.field__name15 = obj.field__name15;
    }
    if (obj?.field__Name16 ?? false) {
      this.field__Name16 = obj.field__Name16;
    }
    if (obj?.field_name17__ ?? false) {
      this.field_name17__ = obj.field_name17__;
    }
    if (obj?.field_name18__ ?? false) {
      this.field_name18__ = obj.field_name18__;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): TestAllTypesProto3 {
    return new TestAllTypesProto3(this);
  }
}

export namespace TestAllTypesProto3 {
  export interface INestedMessage {
    a: number;
    corecursive: TestAllTypesProto3;
  }

  export class NestedMessage implements INestedMessage {
    a: number = 0;
    corecursive: TestAllTypesProto3 = null;

    constructor(obj?: Partial<INestedMessage>) {
      if (obj?.a ?? false) {
        this.a = obj.a;
      }
      if (obj?.corecursive ?? false) {
        this.corecursive = obj.corecursive;
      }
    }

    serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
      return w;
    }

    deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

    clone(): NestedMessage {
      return new NestedMessage(this);
    }
  }

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
}

export enum ForeignEnum {
  FOREIGN_FOO = 0,
  FOREIGN_BAR = 1,
  FOREIGN_BAZ = 2,
}

export interface IForeignMessage {
  c: number;
}

export class ForeignMessage implements IForeignMessage {
  c: number = 0;

  constructor(obj?: Partial<IForeignMessage>) {
    if (obj?.c ?? false) {
      this.c = obj.c;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): ForeignMessage {
    return new ForeignMessage(this);
  }
}

export enum ForeignEnum {
  FOREIGN_FOO = 0,
  FOREIGN_BAR = 1,
  FOREIGN_BAZ = 2,
}

export interface INullHypothesisProto3 {}

export class NullHypothesisProto3 implements INullHypothesisProto3 {
  constructor(obj?: Partial<INullHypothesisProto3>) {}

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): NullHypothesisProto3 {
    return new NullHypothesisProto3(this);
  }
}

export enum ForeignEnum {
  FOREIGN_FOO = 0,
  FOREIGN_BAR = 1,
  FOREIGN_BAZ = 2,
}

export interface IEnumOnlyProto3 {}

export class EnumOnlyProto3 implements IEnumOnlyProto3 {
  constructor(obj?: Partial<IEnumOnlyProto3>) {}

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): EnumOnlyProto3 {
    return new EnumOnlyProto3(this);
  }
}

export namespace EnumOnlyProto3 {}

export enum ForeignEnum {
  FOREIGN_FOO = 0,
  FOREIGN_BAR = 1,
  FOREIGN_BAZ = 2,
}
