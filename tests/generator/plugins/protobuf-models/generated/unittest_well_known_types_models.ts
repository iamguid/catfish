// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest
// file: unittest_well_known_types.proto

import * as google_protobuf_any_models from "google/protobuf/any_models";

import * as google_protobuf_api_models from "google/protobuf/api_models";

import * as google_protobuf_source_context_models from "google/protobuf/source_context_models";

import * as google_protobuf_type_models from "google/protobuf/type_models";

import * as google_protobuf_any_models from "google/protobuf/any_models";

import * as google_protobuf_source_context_models from "google/protobuf/source_context_models";

import * as google_protobuf_duration_models from "google/protobuf/duration_models";

import * as google_protobuf_empty_models from "google/protobuf/empty_models";

import * as google_protobuf_field_mask_models from "google/protobuf/field_mask_models";

import * as google_protobuf_source_context_models from "google/protobuf/source_context_models";

import * as google_protobuf_struct_models from "google/protobuf/struct_models";

import * as google_protobuf_timestamp_models from "google/protobuf/timestamp_models";

import * as google_protobuf_type_models from "google/protobuf/type_models";

import * as google_protobuf_any_models from "google/protobuf/any_models";

import * as google_protobuf_source_context_models from "google/protobuf/source_context_models";

import * as google_protobuf_wrappers_models from "google/protobuf/wrappers_models";

import * as jspb from "google-protobuf";

export interface ITestWellKnownTypes {
  any_field: google.protobuf.Any;
  api_field: google.protobuf.Api;
  duration_field: google.protobuf.Duration;
  empty_field: google.protobuf.Empty;
  field_mask_field: google.protobuf.FieldMask;
  source_context_field: google.protobuf.SourceContext;
  struct_field: google.protobuf.Struct;
  timestamp_field: google.protobuf.Timestamp;
  type_field: google.protobuf.Type;
  double_field: google.protobuf.DoubleValue;
  float_field: google.protobuf.FloatValue;
  int64_field: google.protobuf.Int64Value;
  uint64_field: google.protobuf.UInt64Value;
  int32_field: google.protobuf.Int32Value;
  uint32_field: google.protobuf.UInt32Value;
  bool_field: google.protobuf.BoolValue;
  string_field: google.protobuf.StringValue;
  bytes_field: google.protobuf.BytesValue;
  value_field: google.protobuf.Value;
}

export class TestWellKnownTypes
  extends jspb.Message
  implements ITestWellKnownTypes
{
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get any_field(): google.protobuf.Any {
    return jspb.Message.getWrapperField(this, google.protobuf.Any, 1);
  }

  public set any_field(value: google.protobuf.Any): void {
    return jspb.Message.setWrapperField(
      this,
      1,

      value
    );
  }

  public get api_field(): google.protobuf.Api {
    return jspb.Message.getWrapperField(this, google.protobuf.Api, 2);
  }

  public set api_field(value: google.protobuf.Api): void {
    return jspb.Message.setWrapperField(
      this,
      2,

      value
    );
  }

  public get duration_field(): google.protobuf.Duration {
    return jspb.Message.getWrapperField(this, google.protobuf.Duration, 3);
  }

  public set duration_field(value: google.protobuf.Duration): void {
    return jspb.Message.setWrapperField(
      this,
      3,

      value
    );
  }

  public get empty_field(): google.protobuf.Empty {
    return jspb.Message.getWrapperField(this, google.protobuf.Empty, 4);
  }

  public set empty_field(value: google.protobuf.Empty): void {
    return jspb.Message.setWrapperField(
      this,
      4,

      value
    );
  }

  public get field_mask_field(): google.protobuf.FieldMask {
    return jspb.Message.getWrapperField(this, google.protobuf.FieldMask, 5);
  }

  public set field_mask_field(value: google.protobuf.FieldMask): void {
    return jspb.Message.setWrapperField(
      this,
      5,

      value
    );
  }

  public get source_context_field(): google.protobuf.SourceContext {
    return jspb.Message.getWrapperField(this, google.protobuf.SourceContext, 6);
  }

  public set source_context_field(value: google.protobuf.SourceContext): void {
    return jspb.Message.setWrapperField(
      this,
      6,

      value
    );
  }

  public get struct_field(): google.protobuf.Struct {
    return jspb.Message.getWrapperField(this, google.protobuf.Struct, 7);
  }

  public set struct_field(value: google.protobuf.Struct): void {
    return jspb.Message.setWrapperField(
      this,
      7,

      value
    );
  }

  public get timestamp_field(): google.protobuf.Timestamp {
    return jspb.Message.getWrapperField(this, google.protobuf.Timestamp, 8);
  }

  public set timestamp_field(value: google.protobuf.Timestamp): void {
    return jspb.Message.setWrapperField(
      this,
      8,

      value
    );
  }

  public get type_field(): google.protobuf.Type {
    return jspb.Message.getWrapperField(this, google.protobuf.Type, 9);
  }

  public set type_field(value: google.protobuf.Type): void {
    return jspb.Message.setWrapperField(
      this,
      9,

      value
    );
  }

  public get double_field(): google.protobuf.DoubleValue {
    return jspb.Message.getWrapperField(this, google.protobuf.DoubleValue, 10);
  }

  public set double_field(value: google.protobuf.DoubleValue): void {
    return jspb.Message.setWrapperField(
      this,
      10,

      value
    );
  }

  public get float_field(): google.protobuf.FloatValue {
    return jspb.Message.getWrapperField(this, google.protobuf.FloatValue, 11);
  }

  public set float_field(value: google.protobuf.FloatValue): void {
    return jspb.Message.setWrapperField(
      this,
      11,

      value
    );
  }

  public get int64_field(): google.protobuf.Int64Value {
    return jspb.Message.getWrapperField(this, google.protobuf.Int64Value, 12);
  }

  public set int64_field(value: google.protobuf.Int64Value): void {
    return jspb.Message.setWrapperField(
      this,
      12,

      value
    );
  }

  public get uint64_field(): google.protobuf.UInt64Value {
    return jspb.Message.getWrapperField(this, google.protobuf.UInt64Value, 13);
  }

  public set uint64_field(value: google.protobuf.UInt64Value): void {
    return jspb.Message.setWrapperField(
      this,
      13,

      value
    );
  }

  public get int32_field(): google.protobuf.Int32Value {
    return jspb.Message.getWrapperField(this, google.protobuf.Int32Value, 14);
  }

  public set int32_field(value: google.protobuf.Int32Value): void {
    return jspb.Message.setWrapperField(
      this,
      14,

      value
    );
  }

  public get uint32_field(): google.protobuf.UInt32Value {
    return jspb.Message.getWrapperField(this, google.protobuf.UInt32Value, 15);
  }

  public set uint32_field(value: google.protobuf.UInt32Value): void {
    return jspb.Message.setWrapperField(
      this,
      15,

      value
    );
  }

  public get bool_field(): google.protobuf.BoolValue {
    return jspb.Message.getWrapperField(this, google.protobuf.BoolValue, 16);
  }

  public set bool_field(value: google.protobuf.BoolValue): void {
    return jspb.Message.setWrapperField(
      this,
      16,

      value
    );
  }

  public get string_field(): google.protobuf.StringValue {
    return jspb.Message.getWrapperField(this, google.protobuf.StringValue, 17);
  }

  public set string_field(value: google.protobuf.StringValue): void {
    return jspb.Message.setWrapperField(
      this,
      17,

      value
    );
  }

  public get bytes_field(): google.protobuf.BytesValue {
    return jspb.Message.getWrapperField(this, google.protobuf.BytesValue, 18);
  }

  public set bytes_field(value: google.protobuf.BytesValue): void {
    return jspb.Message.setWrapperField(
      this,
      18,

      value
    );
  }

  public get value_field(): google.protobuf.Value {
    return jspb.Message.getWrapperField(this, google.protobuf.Value, 19);
  }

  public set value_field(value: google.protobuf.Value): void {
    return jspb.Message.setWrapperField(
      this,
      19,

      value
    );
  }
}

export interface IRepeatedWellKnownTypes {
  any_field: google.protobuf.Any;
  api_field: google.protobuf.Api;
  duration_field: google.protobuf.Duration;
  empty_field: google.protobuf.Empty;
  field_mask_field: google.protobuf.FieldMask;
  source_context_field: google.protobuf.SourceContext;
  struct_field: google.protobuf.Struct;
  timestamp_field: google.protobuf.Timestamp;
  type_field: google.protobuf.Type;
  double_field: google.protobuf.DoubleValue;
  float_field: google.protobuf.FloatValue;
  int64_field: google.protobuf.Int64Value;
  uint64_field: google.protobuf.UInt64Value;
  int32_field: google.protobuf.Int32Value;
  uint32_field: google.protobuf.UInt32Value;
  bool_field: google.protobuf.BoolValue;
  string_field: google.protobuf.StringValue;
  bytes_field: google.protobuf.BytesValue;
}

export class RepeatedWellKnownTypes
  extends jspb.Message
  implements IRepeatedWellKnownTypes
{
  private static repeatedFields: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  contructor(opt_data: any) {
    jspb.Message.initialize(
      this,
      opt_data,
      0,
      -1,
      RepeatedWellKnownTypes.repeatedFields,
      null
    );
  }

  public get any_field(): google.protobuf.Any {
    return jspb.Message.getRepeatedWrapperField(this, google.protobuf.Any, 1);
  }

  public set any_field(value: google.protobuf.Any): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      1,

      value
    );
  }

  public get api_field(): google.protobuf.Api {
    return jspb.Message.getRepeatedWrapperField(this, google.protobuf.Api, 2);
  }

  public set api_field(value: google.protobuf.Api): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      2,

      value
    );
  }

  public get duration_field(): google.protobuf.Duration {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.Duration,
      3
    );
  }

  public set duration_field(value: google.protobuf.Duration): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      3,

      value
    );
  }

  public get empty_field(): google.protobuf.Empty {
    return jspb.Message.getRepeatedWrapperField(this, google.protobuf.Empty, 4);
  }

  public set empty_field(value: google.protobuf.Empty): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      4,

      value
    );
  }

  public get field_mask_field(): google.protobuf.FieldMask {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.FieldMask,
      5
    );
  }

  public set field_mask_field(value: google.protobuf.FieldMask): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      5,

      value
    );
  }

  public get source_context_field(): google.protobuf.SourceContext {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.SourceContext,
      6
    );
  }

  public set source_context_field(value: google.protobuf.SourceContext): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      6,

      value
    );
  }

  public get struct_field(): google.protobuf.Struct {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.Struct,
      7
    );
  }

  public set struct_field(value: google.protobuf.Struct): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      7,

      value
    );
  }

  public get timestamp_field(): google.protobuf.Timestamp {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.Timestamp,
      8
    );
  }

  public set timestamp_field(value: google.protobuf.Timestamp): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      8,

      value
    );
  }

  public get type_field(): google.protobuf.Type {
    return jspb.Message.getRepeatedWrapperField(this, google.protobuf.Type, 9);
  }

  public set type_field(value: google.protobuf.Type): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      9,

      value
    );
  }

  public get double_field(): google.protobuf.DoubleValue {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.DoubleValue,
      10
    );
  }

  public set double_field(value: google.protobuf.DoubleValue): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      10,

      value
    );
  }

  public get float_field(): google.protobuf.FloatValue {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.FloatValue,
      11
    );
  }

  public set float_field(value: google.protobuf.FloatValue): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      11,

      value
    );
  }

  public get int64_field(): google.protobuf.Int64Value {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.Int64Value,
      12
    );
  }

  public set int64_field(value: google.protobuf.Int64Value): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      12,

      value
    );
  }

  public get uint64_field(): google.protobuf.UInt64Value {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.UInt64Value,
      13
    );
  }

  public set uint64_field(value: google.protobuf.UInt64Value): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      13,

      value
    );
  }

  public get int32_field(): google.protobuf.Int32Value {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.Int32Value,
      14
    );
  }

  public set int32_field(value: google.protobuf.Int32Value): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      14,

      value
    );
  }

  public get uint32_field(): google.protobuf.UInt32Value {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.UInt32Value,
      15
    );
  }

  public set uint32_field(value: google.protobuf.UInt32Value): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      15,

      value
    );
  }

  public get bool_field(): google.protobuf.BoolValue {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.BoolValue,
      16
    );
  }

  public set bool_field(value: google.protobuf.BoolValue): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      16,

      value
    );
  }

  public get string_field(): google.protobuf.StringValue {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.StringValue,
      17
    );
  }

  public set string_field(value: google.protobuf.StringValue): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      17,

      value
    );
  }

  public get bytes_field(): google.protobuf.BytesValue {
    return jspb.Message.getRepeatedWrapperField(
      this,
      google.protobuf.BytesValue,
      18
    );
  }

  public set bytes_field(value: google.protobuf.BytesValue): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      18,

      value
    );
  }
}

export interface IOneofWellKnownTypes {
  any_field?: google.protobuf.Any;
  api_field?: google.protobuf.Api;
  duration_field?: google.protobuf.Duration;
  empty_field?: google.protobuf.Empty;
  field_mask_field?: google.protobuf.FieldMask;
  source_context_field?: google.protobuf.SourceContext;
  struct_field?: google.protobuf.Struct;
  timestamp_field?: google.protobuf.Timestamp;
  type_field?: google.protobuf.Type;
  double_field?: google.protobuf.DoubleValue;
  float_field?: google.protobuf.FloatValue;
  int64_field?: google.protobuf.Int64Value;
  uint64_field?: google.protobuf.UInt64Value;
  int32_field?: google.protobuf.Int32Value;
  uint32_field?: google.protobuf.UInt32Value;
  bool_field?: google.protobuf.BoolValue;
  string_field?: google.protobuf.StringValue;
  bytes_field?: google.protobuf.BytesValue;
}

export class OneofWellKnownTypes
  extends jspb.Message
  implements IOneofWellKnownTypes
{
  private static oneofFieldsGroups: number[] = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  ];

  contructor(opt_data: any) {
    jspb.Message.initialize(
      this,
      opt_data,
      0,
      -1,
      null,
      OneofWellKnownTypes.oneofFieldsGroups
    );
  }

  public get any_field(): google.protobuf.Any {
    return jspb.Message.getWrapperField(this, google.protobuf.Any, 1);
  }

  public set any_field(value: google.protobuf.Any): void {
    return jspb.Message.setOneofWrapperField(
      this,
      1,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get api_field(): google.protobuf.Api {
    return jspb.Message.getWrapperField(this, google.protobuf.Api, 2);
  }

  public set api_field(value: google.protobuf.Api): void {
    return jspb.Message.setOneofWrapperField(
      this,
      2,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get duration_field(): google.protobuf.Duration {
    return jspb.Message.getWrapperField(this, google.protobuf.Duration, 3);
  }

  public set duration_field(value: google.protobuf.Duration): void {
    return jspb.Message.setOneofWrapperField(
      this,
      3,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get empty_field(): google.protobuf.Empty {
    return jspb.Message.getWrapperField(this, google.protobuf.Empty, 4);
  }

  public set empty_field(value: google.protobuf.Empty): void {
    return jspb.Message.setOneofWrapperField(
      this,
      4,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get field_mask_field(): google.protobuf.FieldMask {
    return jspb.Message.getWrapperField(this, google.protobuf.FieldMask, 5);
  }

  public set field_mask_field(value: google.protobuf.FieldMask): void {
    return jspb.Message.setOneofWrapperField(
      this,
      5,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get source_context_field(): google.protobuf.SourceContext {
    return jspb.Message.getWrapperField(this, google.protobuf.SourceContext, 6);
  }

  public set source_context_field(value: google.protobuf.SourceContext): void {
    return jspb.Message.setOneofWrapperField(
      this,
      6,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get struct_field(): google.protobuf.Struct {
    return jspb.Message.getWrapperField(this, google.protobuf.Struct, 7);
  }

  public set struct_field(value: google.protobuf.Struct): void {
    return jspb.Message.setOneofWrapperField(
      this,
      7,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get timestamp_field(): google.protobuf.Timestamp {
    return jspb.Message.getWrapperField(this, google.protobuf.Timestamp, 8);
  }

  public set timestamp_field(value: google.protobuf.Timestamp): void {
    return jspb.Message.setOneofWrapperField(
      this,
      8,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get type_field(): google.protobuf.Type {
    return jspb.Message.getWrapperField(this, google.protobuf.Type, 9);
  }

  public set type_field(value: google.protobuf.Type): void {
    return jspb.Message.setOneofWrapperField(
      this,
      9,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get double_field(): google.protobuf.DoubleValue {
    return jspb.Message.getWrapperField(this, google.protobuf.DoubleValue, 10);
  }

  public set double_field(value: google.protobuf.DoubleValue): void {
    return jspb.Message.setOneofWrapperField(
      this,
      10,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get float_field(): google.protobuf.FloatValue {
    return jspb.Message.getWrapperField(this, google.protobuf.FloatValue, 11);
  }

  public set float_field(value: google.protobuf.FloatValue): void {
    return jspb.Message.setOneofWrapperField(
      this,
      11,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get int64_field(): google.protobuf.Int64Value {
    return jspb.Message.getWrapperField(this, google.protobuf.Int64Value, 12);
  }

  public set int64_field(value: google.protobuf.Int64Value): void {
    return jspb.Message.setOneofWrapperField(
      this,
      12,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get uint64_field(): google.protobuf.UInt64Value {
    return jspb.Message.getWrapperField(this, google.protobuf.UInt64Value, 13);
  }

  public set uint64_field(value: google.protobuf.UInt64Value): void {
    return jspb.Message.setOneofWrapperField(
      this,
      13,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get int32_field(): google.protobuf.Int32Value {
    return jspb.Message.getWrapperField(this, google.protobuf.Int32Value, 14);
  }

  public set int32_field(value: google.protobuf.Int32Value): void {
    return jspb.Message.setOneofWrapperField(
      this,
      14,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get uint32_field(): google.protobuf.UInt32Value {
    return jspb.Message.getWrapperField(this, google.protobuf.UInt32Value, 15);
  }

  public set uint32_field(value: google.protobuf.UInt32Value): void {
    return jspb.Message.setOneofWrapperField(
      this,
      15,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get bool_field(): google.protobuf.BoolValue {
    return jspb.Message.getWrapperField(this, google.protobuf.BoolValue, 16);
  }

  public set bool_field(value: google.protobuf.BoolValue): void {
    return jspb.Message.setOneofWrapperField(
      this,
      16,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get string_field(): google.protobuf.StringValue {
    return jspb.Message.getWrapperField(this, google.protobuf.StringValue, 17);
  }

  public set string_field(value: google.protobuf.StringValue): void {
    return jspb.Message.setOneofWrapperField(
      this,
      17,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get bytes_field(): google.protobuf.BytesValue {
    return jspb.Message.getWrapperField(this, google.protobuf.BytesValue, 18);
  }

  public set bytes_field(value: google.protobuf.BytesValue): void {
    return jspb.Message.setOneofWrapperField(
      this,
      18,
      OneofWellKnownTypes.oneofFieldsGroups[0],
      value
    );
  }
}

export interface IMapWellKnownTypes {
  any_field: Record<number, google.protobuf.Any>;
  api_field: Record<number, google.protobuf.Api>;
  duration_field: Record<number, google.protobuf.Duration>;
  empty_field: Record<number, google.protobuf.Empty>;
  field_mask_field: Record<number, google.protobuf.FieldMask>;
  source_context_field: Record<number, google.protobuf.SourceContext>;
  struct_field: Record<number, google.protobuf.Struct>;
  timestamp_field: Record<number, google.protobuf.Timestamp>;
  type_field: Record<number, google.protobuf.Type>;
  double_field: Record<number, google.protobuf.DoubleValue>;
  float_field: Record<number, google.protobuf.FloatValue>;
  int64_field: Record<number, google.protobuf.Int64Value>;
  uint64_field: Record<number, google.protobuf.UInt64Value>;
  int32_field: Record<number, google.protobuf.Int32Value>;
  uint32_field: Record<number, google.protobuf.UInt32Value>;
  bool_field: Record<number, google.protobuf.BoolValue>;
  string_field: Record<number, google.protobuf.StringValue>;
  bytes_field: Record<number, google.protobuf.BytesValue>;
}

export class MapWellKnownTypes
  extends jspb.Message
  implements IMapWellKnownTypes
{
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get any_field(): jspb.Map<number, google.protobuf.Any> {
    return jspb.Message.getMapField(this, 1, false, google.protobuf.Any);
  }

  public get api_field(): jspb.Map<number, google.protobuf.Api> {
    return jspb.Message.getMapField(this, 2, false, google.protobuf.Api);
  }

  public get duration_field(): jspb.Map<number, google.protobuf.Duration> {
    return jspb.Message.getMapField(this, 3, false, google.protobuf.Duration);
  }

  public get empty_field(): jspb.Map<number, google.protobuf.Empty> {
    return jspb.Message.getMapField(this, 4, false, google.protobuf.Empty);
  }

  public get field_mask_field(): jspb.Map<number, google.protobuf.FieldMask> {
    return jspb.Message.getMapField(this, 5, false, google.protobuf.FieldMask);
  }

  public get source_context_field(): jspb.Map<
    number,
    google.protobuf.SourceContext
  > {
    return jspb.Message.getMapField(
      this,
      6,
      false,
      google.protobuf.SourceContext
    );
  }

  public get struct_field(): jspb.Map<number, google.protobuf.Struct> {
    return jspb.Message.getMapField(this, 7, false, google.protobuf.Struct);
  }

  public get timestamp_field(): jspb.Map<number, google.protobuf.Timestamp> {
    return jspb.Message.getMapField(this, 8, false, google.protobuf.Timestamp);
  }

  public get type_field(): jspb.Map<number, google.protobuf.Type> {
    return jspb.Message.getMapField(this, 9, false, google.protobuf.Type);
  }

  public get double_field(): jspb.Map<number, google.protobuf.DoubleValue> {
    return jspb.Message.getMapField(
      this,
      10,
      false,
      google.protobuf.DoubleValue
    );
  }

  public get float_field(): jspb.Map<number, google.protobuf.FloatValue> {
    return jspb.Message.getMapField(
      this,
      11,
      false,
      google.protobuf.FloatValue
    );
  }

  public get int64_field(): jspb.Map<number, google.protobuf.Int64Value> {
    return jspb.Message.getMapField(
      this,
      12,
      false,
      google.protobuf.Int64Value
    );
  }

  public get uint64_field(): jspb.Map<number, google.protobuf.UInt64Value> {
    return jspb.Message.getMapField(
      this,
      13,
      false,
      google.protobuf.UInt64Value
    );
  }

  public get int32_field(): jspb.Map<number, google.protobuf.Int32Value> {
    return jspb.Message.getMapField(
      this,
      14,
      false,
      google.protobuf.Int32Value
    );
  }

  public get uint32_field(): jspb.Map<number, google.protobuf.UInt32Value> {
    return jspb.Message.getMapField(
      this,
      15,
      false,
      google.protobuf.UInt32Value
    );
  }

  public get bool_field(): jspb.Map<number, google.protobuf.BoolValue> {
    return jspb.Message.getMapField(this, 16, false, google.protobuf.BoolValue);
  }

  public get string_field(): jspb.Map<number, google.protobuf.StringValue> {
    return jspb.Message.getMapField(
      this,
      17,
      false,
      google.protobuf.StringValue
    );
  }

  public get bytes_field(): jspb.Map<number, google.protobuf.BytesValue> {
    return jspb.Message.getMapField(
      this,
      18,
      false,
      google.protobuf.BytesValue
    );
  }
}
