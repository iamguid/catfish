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

import * as jspb from "google-protobuf";

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

export class TestAllTypesProto3
  extends jspb.Message
  implements ITestAllTypesProto3
{
  private static repeatedFields: number[] = [
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 48, 49, 51, 52,
    54, 55, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91,
    92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 211, 212, 213, 214, 215, 216,
    217, 218, 219, 311, 312, 313, 324, 315, 316, 317,
  ];
  private static oneofFieldsGroups: number[] = [
    [111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
  ];

  contructor(opt_data: any) {
    jspb.Message.initialize(
      this,
      opt_data,
      0,
      -1,
      TestAllTypesProto3.repeatedFields,
      TestAllTypesProto3.oneofFieldsGroups
    );
  }

  public get optional_int32(): number {
    return jspb.Message.getFieldWithDefault(this, 1, 0);
  }

  public set optional_int32(value: number) {}

  public get optional_int64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 2, 0n);
  }

  public set optional_int64(value: BigInt) {}

  public get optional_uint32(): number {
    return jspb.Message.getFieldWithDefault(this, 3, 0);
  }

  public set optional_uint32(value: number) {}

  public get optional_uint64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 4, 0n);
  }

  public set optional_uint64(value: BigInt) {}

  public get optional_sint32(): number {
    return jspb.Message.getFieldWithDefault(this, 5, 0);
  }

  public set optional_sint32(value: number) {}

  public get optional_sint64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 6, 0n);
  }

  public set optional_sint64(value: BigInt) {}

  public get optional_fixed32(): number {
    return jspb.Message.getFieldWithDefault(this, 7, 0);
  }

  public set optional_fixed32(value: number) {}

  public get optional_fixed64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 8, 0n);
  }

  public set optional_fixed64(value: BigInt) {}

  public get optional_sfixed32(): number {
    return jspb.Message.getFieldWithDefault(this, 9, 0);
  }

  public set optional_sfixed32(value: number) {}

  public get optional_sfixed64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 10, 0n);
  }

  public set optional_sfixed64(value: BigInt) {}

  public get optional_float(): number {
    return jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0);
  }

  public set optional_float(value: number) {}

  public get optional_double(): number {
    return jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0);
  }

  public set optional_double(value: number) {}

  public get optional_bool(): boolean {
    return jspb.Message.getBooleanFieldWithDefault(this, 13, false);
  }

  public set optional_bool(value: boolean) {}

  public get optional_string(): string {
    return jspb.Message.getFieldWithDefault(this, 14, "");
  }

  public set optional_string(value: string) {}

  public get optional_bytes(): Uint8Array {
    return jspb.Message.getFieldWithDefault(this, 15, new Uint8Array());
  }

  public set optional_bytes(value: Uint8Array) {}

  public get optional_nested_message(): TestAllTypesProto3.NestedMessage {
    return jspb.Message.getWrapperField(
      this,
      TestAllTypesProto3.NestedMessage,
      18
    );
  }

  public set optional_nested_message(
    value: TestAllTypesProto3.NestedMessage
  ): void {
    return jspb.Message.setWrapperField(
      this,
      18,

      value
    );
  }

  public get optional_foreign_message(): ForeignMessage {
    return jspb.Message.getWrapperField(this, ForeignMessage, 19);
  }

  public set optional_foreign_message(value: ForeignMessage): void {
    return jspb.Message.setWrapperField(
      this,
      19,

      value
    );
  }

  public get optional_nested_enum(): TestAllTypesProto3.NestedEnum {
    return jspb.Message.getWrapperField(
      this,
      TestAllTypesProto3.NestedEnum,
      21
    );
  }

  public set optional_nested_enum(value: TestAllTypesProto3.NestedEnum): void {
    return jspb.Message.setWrapperField(
      this,
      21,

      value
    );
  }

  public get optional_foreign_enum(): ForeignEnum {
    return jspb.Message.getWrapperField(this, ForeignEnum, 22);
  }

  public set optional_foreign_enum(value: ForeignEnum): void {
    return jspb.Message.setWrapperField(
      this,
      22,

      value
    );
  }

  public get optional_aliased_enum(): TestAllTypesProto3.AliasedEnum {
    return jspb.Message.getWrapperField(
      this,
      TestAllTypesProto3.AliasedEnum,
      23
    );
  }

  public set optional_aliased_enum(
    value: TestAllTypesProto3.AliasedEnum
  ): void {
    return jspb.Message.setWrapperField(
      this,
      23,

      value
    );
  }

  public get optional_string_piece(): string {
    return jspb.Message.getFieldWithDefault(this, 24, "");
  }

  public set optional_string_piece(value: string) {}

  public get optional_cord(): string {
    return jspb.Message.getFieldWithDefault(this, 25, "");
  }

  public set optional_cord(value: string) {}

  public get recursive_message(): TestAllTypesProto3 {
    return jspb.Message.getWrapperField(this, TestAllTypesProto3, 27);
  }

  public set recursive_message(value: TestAllTypesProto3): void {
    return jspb.Message.setWrapperField(
      this,
      27,

      value
    );
  }

  public get repeated_int32(): number {
    return jspb.Message.getRepeatedField(this, 31);
  }

  public set repeated_int32(value: number) {}

  public get repeated_int64(): BigInt {
    return jspb.Message.getRepeatedField(this, 32);
  }

  public set repeated_int64(value: BigInt) {}

  public get repeated_uint32(): number {
    return jspb.Message.getRepeatedField(this, 33);
  }

  public set repeated_uint32(value: number) {}

  public get repeated_uint64(): BigInt {
    return jspb.Message.getRepeatedField(this, 34);
  }

  public set repeated_uint64(value: BigInt) {}

  public get repeated_sint32(): number {
    return jspb.Message.getRepeatedField(this, 35);
  }

  public set repeated_sint32(value: number) {}

  public get repeated_sint64(): BigInt {
    return jspb.Message.getRepeatedField(this, 36);
  }

  public set repeated_sint64(value: BigInt) {}

  public get repeated_fixed32(): number {
    return jspb.Message.getRepeatedField(this, 37);
  }

  public set repeated_fixed32(value: number) {}

  public get repeated_fixed64(): BigInt {
    return jspb.Message.getRepeatedField(this, 38);
  }

  public set repeated_fixed64(value: BigInt) {}

  public get repeated_sfixed32(): number {
    return jspb.Message.getRepeatedField(this, 39);
  }

  public set repeated_sfixed32(value: number) {}

  public get repeated_sfixed64(): BigInt {
    return jspb.Message.getRepeatedField(this, 40);
  }

  public set repeated_sfixed64(value: BigInt) {}

  public get repeated_float(): number {
    return jspb.Message.getRepeatedFloatingPointField(this, 41);
  }

  public set repeated_float(value: number) {}

  public get repeated_double(): number {
    return jspb.Message.getRepeatedFloatingPointField(this, 42);
  }

  public set repeated_double(value: number) {}

  public get repeated_bool(): boolean {
    return jspb.Message.getRepeatedBooleanField(this, 43);
  }

  public set repeated_bool(value: boolean) {}

  public get repeated_string(): string {
    return jspb.Message.getRepeatedField(this, 44);
  }

  public set repeated_string(value: string) {}

  public get repeated_bytes(): Uint8Array {
    return jspb.Message.getRepeatedField(this, 45);
  }

  public set repeated_bytes(value: Uint8Array) {}

  public get repeated_nested_message(): TestAllTypesProto3.NestedMessage {
    return jspb.Message.getRepeatedWrapperField(
      this,
      TestAllTypesProto3.NestedMessage,
      48
    );
  }

  public set repeated_nested_message(
    value: TestAllTypesProto3.NestedMessage
  ): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      48,

      value
    );
  }

  public get repeated_foreign_message(): ForeignMessage {
    return jspb.Message.getRepeatedWrapperField(this, ForeignMessage, 49);
  }

  public set repeated_foreign_message(value: ForeignMessage): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      49,

      value
    );
  }

  public get repeated_nested_enum(): TestAllTypesProto3.NestedEnum {
    return jspb.Message.getRepeatedWrapperField(
      this,
      TestAllTypesProto3.NestedEnum,
      51
    );
  }

  public set repeated_nested_enum(value: TestAllTypesProto3.NestedEnum): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      51,

      value
    );
  }

  public get repeated_foreign_enum(): ForeignEnum {
    return jspb.Message.getRepeatedWrapperField(this, ForeignEnum, 52);
  }

  public set repeated_foreign_enum(value: ForeignEnum): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      52,

      value
    );
  }

  public get repeated_string_piece(): string {
    return jspb.Message.getRepeatedField(this, 54);
  }

  public set repeated_string_piece(value: string) {}

  public get repeated_cord(): string {
    return jspb.Message.getRepeatedField(this, 55);
  }

  public set repeated_cord(value: string) {}

  public get packed_int32(): number {
    return jspb.Message.getRepeatedField(this, 75);
  }

  public set packed_int32(value: number) {}

  public get packed_int64(): BigInt {
    return jspb.Message.getRepeatedField(this, 76);
  }

  public set packed_int64(value: BigInt) {}

  public get packed_uint32(): number {
    return jspb.Message.getRepeatedField(this, 77);
  }

  public set packed_uint32(value: number) {}

  public get packed_uint64(): BigInt {
    return jspb.Message.getRepeatedField(this, 78);
  }

  public set packed_uint64(value: BigInt) {}

  public get packed_sint32(): number {
    return jspb.Message.getRepeatedField(this, 79);
  }

  public set packed_sint32(value: number) {}

  public get packed_sint64(): BigInt {
    return jspb.Message.getRepeatedField(this, 80);
  }

  public set packed_sint64(value: BigInt) {}

  public get packed_fixed32(): number {
    return jspb.Message.getRepeatedField(this, 81);
  }

  public set packed_fixed32(value: number) {}

  public get packed_fixed64(): BigInt {
    return jspb.Message.getRepeatedField(this, 82);
  }

  public set packed_fixed64(value: BigInt) {}

  public get packed_sfixed32(): number {
    return jspb.Message.getRepeatedField(this, 83);
  }

  public set packed_sfixed32(value: number) {}

  public get packed_sfixed64(): BigInt {
    return jspb.Message.getRepeatedField(this, 84);
  }

  public set packed_sfixed64(value: BigInt) {}

  public get packed_float(): number {
    return jspb.Message.getRepeatedFloatingPointField(this, 85);
  }

  public set packed_float(value: number) {}

  public get packed_double(): number {
    return jspb.Message.getRepeatedFloatingPointField(this, 86);
  }

  public set packed_double(value: number) {}

  public get packed_bool(): boolean {
    return jspb.Message.getRepeatedBooleanField(this, 87);
  }

  public set packed_bool(value: boolean) {}

  public get packed_nested_enum(): TestAllTypesProto3.NestedEnum {
    return jspb.Message.getRepeatedWrapperField(
      this,
      TestAllTypesProto3.NestedEnum,
      88
    );
  }

  public set packed_nested_enum(value: TestAllTypesProto3.NestedEnum): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      88,

      value
    );
  }

  public get unpacked_int32(): number {
    return jspb.Message.getRepeatedField(this, 89);
  }

  public set unpacked_int32(value: number) {}

  public get unpacked_int64(): BigInt {
    return jspb.Message.getRepeatedField(this, 90);
  }

  public set unpacked_int64(value: BigInt) {}

  public get unpacked_uint32(): number {
    return jspb.Message.getRepeatedField(this, 91);
  }

  public set unpacked_uint32(value: number) {}

  public get unpacked_uint64(): BigInt {
    return jspb.Message.getRepeatedField(this, 92);
  }

  public set unpacked_uint64(value: BigInt) {}

  public get unpacked_sint32(): number {
    return jspb.Message.getRepeatedField(this, 93);
  }

  public set unpacked_sint32(value: number) {}

  public get unpacked_sint64(): BigInt {
    return jspb.Message.getRepeatedField(this, 94);
  }

  public set unpacked_sint64(value: BigInt) {}

  public get unpacked_fixed32(): number {
    return jspb.Message.getRepeatedField(this, 95);
  }

  public set unpacked_fixed32(value: number) {}

  public get unpacked_fixed64(): BigInt {
    return jspb.Message.getRepeatedField(this, 96);
  }

  public set unpacked_fixed64(value: BigInt) {}

  public get unpacked_sfixed32(): number {
    return jspb.Message.getRepeatedField(this, 97);
  }

  public set unpacked_sfixed32(value: number) {}

  public get unpacked_sfixed64(): BigInt {
    return jspb.Message.getRepeatedField(this, 98);
  }

  public set unpacked_sfixed64(value: BigInt) {}

  public get unpacked_float(): number {
    return jspb.Message.getRepeatedFloatingPointField(this, 99);
  }

  public set unpacked_float(value: number) {}

  public get unpacked_double(): number {
    return jspb.Message.getRepeatedFloatingPointField(this, 100);
  }

  public set unpacked_double(value: number) {}

  public get unpacked_bool(): boolean {
    return jspb.Message.getRepeatedBooleanField(this, 101);
  }

  public set unpacked_bool(value: boolean) {}

  public get unpacked_nested_enum(): TestAllTypesProto3.NestedEnum {
    return jspb.Message.getRepeatedWrapperField(
      this,
      TestAllTypesProto3.NestedEnum,
      102
    );
  }

  public set unpacked_nested_enum(value: TestAllTypesProto3.NestedEnum): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      102,

      value
    );
  }

  public get map_int32_int32(): jspb.Map<number, number> {
    return jspb.Message.getMapField(this, 56, false, null);
  }

  public get map_int64_int64(): jspb.Map<BigInt, BigInt> {
    return jspb.Message.getMapField(this, 57, false, null);
  }

  public get map_uint32_uint32(): jspb.Map<number, number> {
    return jspb.Message.getMapField(this, 58, false, null);
  }

  public get map_uint64_uint64(): jspb.Map<BigInt, BigInt> {
    return jspb.Message.getMapField(this, 59, false, null);
  }

  public get map_sint32_sint32(): jspb.Map<number, number> {
    return jspb.Message.getMapField(this, 60, false, null);
  }

  public get map_sint64_sint64(): jspb.Map<BigInt, BigInt> {
    return jspb.Message.getMapField(this, 61, false, null);
  }

  public get map_fixed32_fixed32(): jspb.Map<number, number> {
    return jspb.Message.getMapField(this, 62, false, null);
  }

  public get map_fixed64_fixed64(): jspb.Map<BigInt, BigInt> {
    return jspb.Message.getMapField(this, 63, false, null);
  }

  public get map_sfixed32_sfixed32(): jspb.Map<number, number> {
    return jspb.Message.getMapField(this, 64, false, null);
  }

  public get map_sfixed64_sfixed64(): jspb.Map<BigInt, BigInt> {
    return jspb.Message.getMapField(this, 65, false, null);
  }

  public get map_int32_float(): jspb.Map<number, number> {
    return jspb.Message.getMapField(this, 66, false, null);
  }

  public get map_int32_double(): jspb.Map<number, number> {
    return jspb.Message.getMapField(this, 67, false, null);
  }

  public get map_bool_bool(): jspb.Map<boolean, boolean> {
    return jspb.Message.getMapField(this, 68, false, null);
  }

  public get map_string_string(): jspb.Map<string, string> {
    return jspb.Message.getMapField(this, 69, false, null);
  }

  public get map_string_bytes(): jspb.Map<string, Uint8Array> {
    return jspb.Message.getMapField(this, 70, false, null);
  }

  public get map_string_nested_message(): jspb.Map<
    string,
    TestAllTypesProto3.NestedMessage
  > {
    return jspb.Message.getMapField(
      this,
      71,
      false,
      TestAllTypesProto3.NestedMessage
    );
  }

  public get map_string_foreign_message(): jspb.Map<string, ForeignMessage> {
    return jspb.Message.getMapField(this, 72, false, ForeignMessage);
  }

  public get map_string_nested_enum(): jspb.Map<
    string,
    TestAllTypesProto3.NestedEnum
  > {
    return jspb.Message.getMapField(
      this,
      73,
      false,
      TestAllTypesProto3.NestedEnum
    );
  }

  public get map_string_foreign_enum(): jspb.Map<string, ForeignEnum> {
    return jspb.Message.getMapField(this, 74, false, ForeignEnum);
  }

  public get oneof_uint32(): number {
    return jspb.Message.getFieldWithDefault(this, 111, 0);
  }

  public set oneof_uint32(value: number) {}

  public get oneof_nested_message(): TestAllTypesProto3.NestedMessage {
    return jspb.Message.getWrapperField(
      this,
      TestAllTypesProto3.NestedMessage,
      112
    );
  }

  public set oneof_nested_message(
    value: TestAllTypesProto3.NestedMessage
  ): void {
    return jspb.Message.setOneofWrapperField(
      this,
      112,
      TestAllTypesProto3.oneofFieldsGroups[0],
      value
    );
  }

  public get oneof_string(): string {
    return jspb.Message.getFieldWithDefault(this, 113, "");
  }

  public set oneof_string(value: string) {}

  public get oneof_bytes(): Uint8Array {
    return jspb.Message.getFieldWithDefault(this, 114, new Uint8Array());
  }

  public set oneof_bytes(value: Uint8Array) {}

  public get oneof_bool(): boolean {
    return jspb.Message.getBooleanFieldWithDefault(this, 115, false);
  }

  public set oneof_bool(value: boolean) {}

  public get oneof_uint64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 116, 0n);
  }

  public set oneof_uint64(value: BigInt) {}

  public get oneof_float(): number {
    return jspb.Message.getFloatingPointFieldWithDefault(this, 117, 0);
  }

  public set oneof_float(value: number) {}

  public get oneof_double(): number {
    return jspb.Message.getFloatingPointFieldWithDefault(this, 118, 0);
  }

  public set oneof_double(value: number) {}

  public get oneof_enum(): TestAllTypesProto3.NestedEnum {
    return jspb.Message.getWrapperField(
      this,
      TestAllTypesProto3.NestedEnum,
      119
    );
  }

  public set oneof_enum(value: TestAllTypesProto3.NestedEnum): void {
    return jspb.Message.setOneofWrapperField(
      this,
      119,
      TestAllTypesProto3.oneofFieldsGroups[0],
      value
    );
  }

  public get oneof_null_value(): google.protobuf.NullValue {
    return jspb.Message.getWrapperField(this, google.protobuf.NullValue, 120);
  }

  public set oneof_null_value(value: google.protobuf.NullValue): void {
    return jspb.Message.setOneofWrapperField(
      this,
      120,
      TestAllTypesProto3.oneofFieldsGroups[0],
      value
    );
  }

  public get optional_bool_wrapper(): google.protobuf.BoolValue {
    return jspb.Message.getWrapperField(this, google.protobuf.BoolValue, 201);
  }

  public set optional_bool_wrapper(value: google.protobuf.BoolValue): void {
    return jspb.Message.setWrapperField(
      this,
      201,

      value
    );
  }

  public get optional_int32_wrapper(): google.protobuf.Int32Value {
    return jspb.Message.getWrapperField(this, google.protobuf.Int32Value, 202);
  }

  public set optional_int32_wrapper(value: google.protobuf.Int32Value): void {
    return jspb.Message.setWrapperField(
      this,
      202,

      value
    );
  }

  public get optional_int64_wrapper(): google.protobuf.Int64Value {
    return jspb.Message.getWrapperField(this, google.protobuf.Int64Value, 203);
  }

  public set optional_int64_wrapper(value: google.protobuf.Int64Value): void {
    return jspb.Message.setWrapperField(
      this,
      203,

      value
    );
  }

  public get optional_uint32_wrapper(): google.protobuf.UInt32Value {
    return jspb.Message.getWrapperField(this, google.protobuf.UInt32Value, 204);
  }

  public set optional_uint32_wrapper(value: google.protobuf.UInt32Value): void {
    return jspb.Message.setWrapperField(
      this,
      204,

      value
    );
  }

  public get optional_uint64_wrapper(): google.protobuf.UInt64Value {
    return jspb.Message.getWrapperField(this, google.protobuf.UInt64Value, 205);
  }

  public set optional_uint64_wrapper(value: google.protobuf.UInt64Value): void {
    return jspb.Message.setWrapperField(
      this,
      205,

      value
    );
  }

  public get optional_float_wrapper(): google.protobuf.FloatValue {
    return jspb.Message.getWrapperField(this, google.protobuf.FloatValue, 206);
  }

  public set optional_float_wrapper(value: google.protobuf.FloatValue): void {
    return jspb.Message.setWrapperField(
      this,
      206,

      value
    );
  }

  public get optional_double_wrapper(): google.protobuf.DoubleValue {
    return jspb.Message.getWrapperField(this, google.protobuf.DoubleValue, 207);
  }

  public set optional_double_wrapper(value: google.protobuf.DoubleValue): void {
    return jspb.Message.setWrapperField(
      this,
      207,

      value
    );
  }

  public get optional_string_wrapper(): google.protobuf.StringValue {
    return jspb.Message.getWrapperField(this, google.protobuf.StringValue, 208);
  }

  public set optional_string_wrapper(value: google.protobuf.StringValue): void {
    return jspb.Message.setWrapperField(
      this,
      208,

      value
    );
  }

  public get optional_bytes_wrapper(): google.protobuf.BytesValue {
    return jspb.Message.getWrapperField(this, google.protobuf.BytesValue, 209);
  }

  public set optional_bytes_wrapper(value: google.protobuf.BytesValue): void {
    return jspb.Message.setWrapperField(
      this,
      209,

      value
    );
  }

  public get repeated_bool_wrapper(): google.protobuf.BoolValue {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.BoolValue,
      211
    );
  }

  public set repeated_bool_wrapper(value: google.protobuf.BoolValue): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      211,

      value
    );
  }

  public get repeated_int32_wrapper(): google.protobuf.Int32Value {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.Int32Value,
      212
    );
  }

  public set repeated_int32_wrapper(value: google.protobuf.Int32Value): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      212,

      value
    );
  }

  public get repeated_int64_wrapper(): google.protobuf.Int64Value {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.Int64Value,
      213
    );
  }

  public set repeated_int64_wrapper(value: google.protobuf.Int64Value): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      213,

      value
    );
  }

  public get repeated_uint32_wrapper(): google.protobuf.UInt32Value {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.UInt32Value,
      214
    );
  }

  public set repeated_uint32_wrapper(value: google.protobuf.UInt32Value): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      214,

      value
    );
  }

  public get repeated_uint64_wrapper(): google.protobuf.UInt64Value {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.UInt64Value,
      215
    );
  }

  public set repeated_uint64_wrapper(value: google.protobuf.UInt64Value): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      215,

      value
    );
  }

  public get repeated_float_wrapper(): google.protobuf.FloatValue {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.FloatValue,
      216
    );
  }

  public set repeated_float_wrapper(value: google.protobuf.FloatValue): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      216,

      value
    );
  }

  public get repeated_double_wrapper(): google.protobuf.DoubleValue {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.DoubleValue,
      217
    );
  }

  public set repeated_double_wrapper(value: google.protobuf.DoubleValue): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      217,

      value
    );
  }

  public get repeated_string_wrapper(): google.protobuf.StringValue {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.StringValue,
      218
    );
  }

  public set repeated_string_wrapper(value: google.protobuf.StringValue): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      218,

      value
    );
  }

  public get repeated_bytes_wrapper(): google.protobuf.BytesValue {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.BytesValue,
      219
    );
  }

  public set repeated_bytes_wrapper(value: google.protobuf.BytesValue): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      219,

      value
    );
  }

  public get optional_duration(): google.protobuf.Duration {
    return jspb.Message.getWrapperField(this, google.protobuf.Duration, 301);
  }

  public set optional_duration(value: google.protobuf.Duration): void {
    return jspb.Message.setWrapperField(
      this,
      301,

      value
    );
  }

  public get optional_timestamp(): google.protobuf.Timestamp {
    return jspb.Message.getWrapperField(this, google.protobuf.Timestamp, 302);
  }

  public set optional_timestamp(value: google.protobuf.Timestamp): void {
    return jspb.Message.setWrapperField(
      this,
      302,

      value
    );
  }

  public get optional_field_mask(): google.protobuf.FieldMask {
    return jspb.Message.getWrapperField(this, google.protobuf.FieldMask, 303);
  }

  public set optional_field_mask(value: google.protobuf.FieldMask): void {
    return jspb.Message.setWrapperField(
      this,
      303,

      value
    );
  }

  public get optional_struct(): google.protobuf.Struct {
    return jspb.Message.getWrapperField(this, google.protobuf.Struct, 304);
  }

  public set optional_struct(value: google.protobuf.Struct): void {
    return jspb.Message.setWrapperField(
      this,
      304,

      value
    );
  }

  public get optional_any(): google.protobuf.Any {
    return jspb.Message.getWrapperField(this, google.protobuf.Any, 305);
  }

  public set optional_any(value: google.protobuf.Any): void {
    return jspb.Message.setWrapperField(
      this,
      305,

      value
    );
  }

  public get optional_value(): google.protobuf.Value {
    return jspb.Message.getWrapperField(this, google.protobuf.Value, 306);
  }

  public set optional_value(value: google.protobuf.Value): void {
    return jspb.Message.setWrapperField(
      this,
      306,

      value
    );
  }

  public get optional_null_value(): google.protobuf.NullValue {
    return jspb.Message.getWrapperField(this, google.protobuf.NullValue, 307);
  }

  public set optional_null_value(value: google.protobuf.NullValue): void {
    return jspb.Message.setWrapperField(
      this,
      307,

      value
    );
  }

  public get repeated_duration(): google.protobuf.Duration {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.Duration,
      311
    );
  }

  public set repeated_duration(value: google.protobuf.Duration): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      311,

      value
    );
  }

  public get repeated_timestamp(): google.protobuf.Timestamp {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.Timestamp,
      312
    );
  }

  public set repeated_timestamp(value: google.protobuf.Timestamp): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      312,

      value
    );
  }

  public get repeated_fieldmask(): google.protobuf.FieldMask {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.FieldMask,
      313
    );
  }

  public set repeated_fieldmask(value: google.protobuf.FieldMask): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      313,

      value
    );
  }

  public get repeated_struct(): google.protobuf.Struct {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.Struct,
      324
    );
  }

  public set repeated_struct(value: google.protobuf.Struct): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      324,

      value
    );
  }

  public get repeated_any(): google.protobuf.Any {
    return jspb.Message.getRepeatedWrapperField(this, google.protobuf.Any, 315);
  }

  public set repeated_any(value: google.protobuf.Any): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      315,

      value
    );
  }

  public get repeated_value(): google.protobuf.Value {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.Value,
      316
    );
  }

  public set repeated_value(value: google.protobuf.Value): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      316,

      value
    );
  }

  public get repeated_list_value(): google.protobuf.ListValue {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.ListValue,
      317
    );
  }

  public set repeated_list_value(value: google.protobuf.ListValue): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      317,

      value
    );
  }

  public get fieldname1(): number {
    return jspb.Message.getFieldWithDefault(this, 401, 0);
  }

  public set fieldname1(value: number) {}

  public get field_name2(): number {
    return jspb.Message.getFieldWithDefault(this, 402, 0);
  }

  public set field_name2(value: number) {}

  public get _field_name3(): number {
    return jspb.Message.getFieldWithDefault(this, 403, 0);
  }

  public set _field_name3(value: number) {}

  public get field__name4_(): number {
    return jspb.Message.getFieldWithDefault(this, 404, 0);
  }

  public set field__name4_(value: number) {}

  public get field0name5(): number {
    return jspb.Message.getFieldWithDefault(this, 405, 0);
  }

  public set field0name5(value: number) {}

  public get field_0_name6(): number {
    return jspb.Message.getFieldWithDefault(this, 406, 0);
  }

  public set field_0_name6(value: number) {}

  public get fieldName7(): number {
    return jspb.Message.getFieldWithDefault(this, 407, 0);
  }

  public set fieldName7(value: number) {}

  public get fieldName8(): number {
    return jspb.Message.getFieldWithDefault(this, 408, 0);
  }

  public set fieldName8(value: number) {}

  public get field_Name9(): number {
    return jspb.Message.getFieldWithDefault(this, 409, 0);
  }

  public set field_Name9(value: number) {}

  public get field_Name10(): number {
    return jspb.Message.getFieldWithDefault(this, 410, 0);
  }

  public set field_Name10(value: number) {}

  public get fIELD_NAME11(): number {
    return jspb.Message.getFieldWithDefault(this, 411, 0);
  }

  public set fIELD_NAME11(value: number) {}

  public get fIELD_name12(): number {
    return jspb.Message.getFieldWithDefault(this, 412, 0);
  }

  public set fIELD_name12(value: number) {}

  public get __field_name13(): number {
    return jspb.Message.getFieldWithDefault(this, 413, 0);
  }

  public set __field_name13(value: number) {}

  public get __Field_name14(): number {
    return jspb.Message.getFieldWithDefault(this, 414, 0);
  }

  public set __Field_name14(value: number) {}

  public get field__name15(): number {
    return jspb.Message.getFieldWithDefault(this, 415, 0);
  }

  public set field__name15(value: number) {}

  public get field__Name16(): number {
    return jspb.Message.getFieldWithDefault(this, 416, 0);
  }

  public set field__Name16(value: number) {}

  public get field_name17__(): number {
    return jspb.Message.getFieldWithDefault(this, 417, 0);
  }

  public set field_name17__(value: number) {}

  public get field_name18__(): number {
    return jspb.Message.getFieldWithDefault(this, 418, 0);
  }

  public set field_name18__(value: number) {}
}

export namespace TestAllTypesProto3 {
  export interface INestedMessage {
    a: number;
    corecursive: TestAllTypesProto3;
  }

  export class NestedMessage extends jspb.Message implements INestedMessage {
    contructor(opt_data: any) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    }

    public get a(): number {
      return jspb.Message.getFieldWithDefault(this, 1, 0);
    }

    public set a(value: number) {}

    public get corecursive(): TestAllTypesProto3 {
      return jspb.Message.getWrapperField(this, TestAllTypesProto3, 2);
    }

    public set corecursive(value: TestAllTypesProto3): void {
      return jspb.Message.setWrapperField(
        this,
        2,

        value
      );
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

export class ForeignMessage extends jspb.Message implements IForeignMessage {
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get c(): number {
    return jspb.Message.getFieldWithDefault(this, 1, 0);
  }

  public set c(value: number) {}
}

export enum ForeignEnum {
  FOREIGN_FOO = 0,
  FOREIGN_BAR = 1,
  FOREIGN_BAZ = 2,
}

export interface INullHypothesisProto3 {}

export class NullHypothesisProto3
  extends jspb.Message
  implements INullHypothesisProto3
{
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }
}

export enum ForeignEnum {
  FOREIGN_FOO = 0,
  FOREIGN_BAR = 1,
  FOREIGN_BAZ = 2,
}

export interface IEnumOnlyProto3 {}

export class EnumOnlyProto3 extends jspb.Message implements IEnumOnlyProto3 {
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }
}

export namespace EnumOnlyProto3 {}

export enum ForeignEnum {
  FOREIGN_FOO = 0,
  FOREIGN_BAR = 1,
  FOREIGN_BAZ = 2,
}
