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

import * as pjs from "protobufjs/minimal";

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

export class TestWellKnownTypes implements ITestWellKnownTypes {
  any_field: google.protobuf.Any = null;
  api_field: google.protobuf.Api = null;
  duration_field: google.protobuf.Duration = null;
  empty_field: google.protobuf.Empty = null;
  field_mask_field: google.protobuf.FieldMask = null;
  source_context_field: google.protobuf.SourceContext = null;
  struct_field: google.protobuf.Struct = null;
  timestamp_field: google.protobuf.Timestamp = null;
  type_field: google.protobuf.Type = null;
  double_field: google.protobuf.DoubleValue = null;
  float_field: google.protobuf.FloatValue = null;
  int64_field: google.protobuf.Int64Value = null;
  uint64_field: google.protobuf.UInt64Value = null;
  int32_field: google.protobuf.Int32Value = null;
  uint32_field: google.protobuf.UInt32Value = null;
  bool_field: google.protobuf.BoolValue = null;
  string_field: google.protobuf.StringValue = null;
  bytes_field: google.protobuf.BytesValue = null;
  value_field: google.protobuf.Value = null;

  constructor(obj?: Partial<ITestWellKnownTypes>) {
    if (obj?.any_field ?? false) {
      this.any_field = obj.any_field;
    }
    if (obj?.api_field ?? false) {
      this.api_field = obj.api_field;
    }
    if (obj?.duration_field ?? false) {
      this.duration_field = obj.duration_field;
    }
    if (obj?.empty_field ?? false) {
      this.empty_field = obj.empty_field;
    }
    if (obj?.field_mask_field ?? false) {
      this.field_mask_field = obj.field_mask_field;
    }
    if (obj?.source_context_field ?? false) {
      this.source_context_field = obj.source_context_field;
    }
    if (obj?.struct_field ?? false) {
      this.struct_field = obj.struct_field;
    }
    if (obj?.timestamp_field ?? false) {
      this.timestamp_field = obj.timestamp_field;
    }
    if (obj?.type_field ?? false) {
      this.type_field = obj.type_field;
    }
    if (obj?.double_field ?? false) {
      this.double_field = obj.double_field;
    }
    if (obj?.float_field ?? false) {
      this.float_field = obj.float_field;
    }
    if (obj?.int64_field ?? false) {
      this.int64_field = obj.int64_field;
    }
    if (obj?.uint64_field ?? false) {
      this.uint64_field = obj.uint64_field;
    }
    if (obj?.int32_field ?? false) {
      this.int32_field = obj.int32_field;
    }
    if (obj?.uint32_field ?? false) {
      this.uint32_field = obj.uint32_field;
    }
    if (obj?.bool_field ?? false) {
      this.bool_field = obj.bool_field;
    }
    if (obj?.string_field ?? false) {
      this.string_field = obj.string_field;
    }
    if (obj?.bytes_field ?? false) {
      this.bytes_field = obj.bytes_field;
    }
    if (obj?.value_field ?? false) {
      this.value_field = obj.value_field;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): TestWellKnownTypes {
    return new TestWellKnownTypes(this);
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

export class RepeatedWellKnownTypes implements IRepeatedWellKnownTypes {
  any_field: google.protobuf.Any = [];
  api_field: google.protobuf.Api = [];
  duration_field: google.protobuf.Duration = [];
  empty_field: google.protobuf.Empty = [];
  field_mask_field: google.protobuf.FieldMask = [];
  source_context_field: google.protobuf.SourceContext = [];
  struct_field: google.protobuf.Struct = [];
  timestamp_field: google.protobuf.Timestamp = [];
  type_field: google.protobuf.Type = [];
  double_field: google.protobuf.DoubleValue = [];
  float_field: google.protobuf.FloatValue = [];
  int64_field: google.protobuf.Int64Value = [];
  uint64_field: google.protobuf.UInt64Value = [];
  int32_field: google.protobuf.Int32Value = [];
  uint32_field: google.protobuf.UInt32Value = [];
  bool_field: google.protobuf.BoolValue = [];
  string_field: google.protobuf.StringValue = [];
  bytes_field: google.protobuf.BytesValue = [];

  constructor(obj?: Partial<IRepeatedWellKnownTypes>) {
    if (obj?.any_field ?? false) {
      this.any_field = obj.any_field;
    }
    if (obj?.api_field ?? false) {
      this.api_field = obj.api_field;
    }
    if (obj?.duration_field ?? false) {
      this.duration_field = obj.duration_field;
    }
    if (obj?.empty_field ?? false) {
      this.empty_field = obj.empty_field;
    }
    if (obj?.field_mask_field ?? false) {
      this.field_mask_field = obj.field_mask_field;
    }
    if (obj?.source_context_field ?? false) {
      this.source_context_field = obj.source_context_field;
    }
    if (obj?.struct_field ?? false) {
      this.struct_field = obj.struct_field;
    }
    if (obj?.timestamp_field ?? false) {
      this.timestamp_field = obj.timestamp_field;
    }
    if (obj?.type_field ?? false) {
      this.type_field = obj.type_field;
    }
    if (obj?.double_field ?? false) {
      this.double_field = obj.double_field;
    }
    if (obj?.float_field ?? false) {
      this.float_field = obj.float_field;
    }
    if (obj?.int64_field ?? false) {
      this.int64_field = obj.int64_field;
    }
    if (obj?.uint64_field ?? false) {
      this.uint64_field = obj.uint64_field;
    }
    if (obj?.int32_field ?? false) {
      this.int32_field = obj.int32_field;
    }
    if (obj?.uint32_field ?? false) {
      this.uint32_field = obj.uint32_field;
    }
    if (obj?.bool_field ?? false) {
      this.bool_field = obj.bool_field;
    }
    if (obj?.string_field ?? false) {
      this.string_field = obj.string_field;
    }
    if (obj?.bytes_field ?? false) {
      this.bytes_field = obj.bytes_field;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): RepeatedWellKnownTypes {
    return new RepeatedWellKnownTypes(this);
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

export class OneofWellKnownTypes implements IOneofWellKnownTypes {
  any_field?: google.protobuf.Any = null;
  api_field?: google.protobuf.Api = null;
  duration_field?: google.protobuf.Duration = null;
  empty_field?: google.protobuf.Empty = null;
  field_mask_field?: google.protobuf.FieldMask = null;
  source_context_field?: google.protobuf.SourceContext = null;
  struct_field?: google.protobuf.Struct = null;
  timestamp_field?: google.protobuf.Timestamp = null;
  type_field?: google.protobuf.Type = null;
  double_field?: google.protobuf.DoubleValue = null;
  float_field?: google.protobuf.FloatValue = null;
  int64_field?: google.protobuf.Int64Value = null;
  uint64_field?: google.protobuf.UInt64Value = null;
  int32_field?: google.protobuf.Int32Value = null;
  uint32_field?: google.protobuf.UInt32Value = null;
  bool_field?: google.protobuf.BoolValue = null;
  string_field?: google.protobuf.StringValue = null;
  bytes_field?: google.protobuf.BytesValue = null;

  constructor(obj?: Partial<IOneofWellKnownTypes>) {
    if (obj?.any_field ?? false) {
      this.any_field = obj.any_field;
    }
    if (obj?.api_field ?? false) {
      this.api_field = obj.api_field;
    }
    if (obj?.duration_field ?? false) {
      this.duration_field = obj.duration_field;
    }
    if (obj?.empty_field ?? false) {
      this.empty_field = obj.empty_field;
    }
    if (obj?.field_mask_field ?? false) {
      this.field_mask_field = obj.field_mask_field;
    }
    if (obj?.source_context_field ?? false) {
      this.source_context_field = obj.source_context_field;
    }
    if (obj?.struct_field ?? false) {
      this.struct_field = obj.struct_field;
    }
    if (obj?.timestamp_field ?? false) {
      this.timestamp_field = obj.timestamp_field;
    }
    if (obj?.type_field ?? false) {
      this.type_field = obj.type_field;
    }
    if (obj?.double_field ?? false) {
      this.double_field = obj.double_field;
    }
    if (obj?.float_field ?? false) {
      this.float_field = obj.float_field;
    }
    if (obj?.int64_field ?? false) {
      this.int64_field = obj.int64_field;
    }
    if (obj?.uint64_field ?? false) {
      this.uint64_field = obj.uint64_field;
    }
    if (obj?.int32_field ?? false) {
      this.int32_field = obj.int32_field;
    }
    if (obj?.uint32_field ?? false) {
      this.uint32_field = obj.uint32_field;
    }
    if (obj?.bool_field ?? false) {
      this.bool_field = obj.bool_field;
    }
    if (obj?.string_field ?? false) {
      this.string_field = obj.string_field;
    }
    if (obj?.bytes_field ?? false) {
      this.bytes_field = obj.bytes_field;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): OneofWellKnownTypes {
    return new OneofWellKnownTypes(this);
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

export class MapWellKnownTypes implements IMapWellKnownTypes {
  any_field: Record<number, google.protobuf.Any> = {};
  api_field: Record<number, google.protobuf.Api> = {};
  duration_field: Record<number, google.protobuf.Duration> = {};
  empty_field: Record<number, google.protobuf.Empty> = {};
  field_mask_field: Record<number, google.protobuf.FieldMask> = {};
  source_context_field: Record<number, google.protobuf.SourceContext> = {};
  struct_field: Record<number, google.protobuf.Struct> = {};
  timestamp_field: Record<number, google.protobuf.Timestamp> = {};
  type_field: Record<number, google.protobuf.Type> = {};
  double_field: Record<number, google.protobuf.DoubleValue> = {};
  float_field: Record<number, google.protobuf.FloatValue> = {};
  int64_field: Record<number, google.protobuf.Int64Value> = {};
  uint64_field: Record<number, google.protobuf.UInt64Value> = {};
  int32_field: Record<number, google.protobuf.Int32Value> = {};
  uint32_field: Record<number, google.protobuf.UInt32Value> = {};
  bool_field: Record<number, google.protobuf.BoolValue> = {};
  string_field: Record<number, google.protobuf.StringValue> = {};
  bytes_field: Record<number, google.protobuf.BytesValue> = {};

  constructor(obj?: Partial<IMapWellKnownTypes>) {
    if (obj?.any_field ?? false) {
      this.any_field = obj.any_field;
    }
    if (obj?.api_field ?? false) {
      this.api_field = obj.api_field;
    }
    if (obj?.duration_field ?? false) {
      this.duration_field = obj.duration_field;
    }
    if (obj?.empty_field ?? false) {
      this.empty_field = obj.empty_field;
    }
    if (obj?.field_mask_field ?? false) {
      this.field_mask_field = obj.field_mask_field;
    }
    if (obj?.source_context_field ?? false) {
      this.source_context_field = obj.source_context_field;
    }
    if (obj?.struct_field ?? false) {
      this.struct_field = obj.struct_field;
    }
    if (obj?.timestamp_field ?? false) {
      this.timestamp_field = obj.timestamp_field;
    }
    if (obj?.type_field ?? false) {
      this.type_field = obj.type_field;
    }
    if (obj?.double_field ?? false) {
      this.double_field = obj.double_field;
    }
    if (obj?.float_field ?? false) {
      this.float_field = obj.float_field;
    }
    if (obj?.int64_field ?? false) {
      this.int64_field = obj.int64_field;
    }
    if (obj?.uint64_field ?? false) {
      this.uint64_field = obj.uint64_field;
    }
    if (obj?.int32_field ?? false) {
      this.int32_field = obj.int32_field;
    }
    if (obj?.uint32_field ?? false) {
      this.uint32_field = obj.uint32_field;
    }
    if (obj?.bool_field ?? false) {
      this.bool_field = obj.bool_field;
    }
    if (obj?.string_field ?? false) {
      this.string_field = obj.string_field;
    }
    if (obj?.bytes_field ?? false) {
      this.bytes_field = obj.bytes_field;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): MapWellKnownTypes {
    return new MapWellKnownTypes(this);
  }
}
