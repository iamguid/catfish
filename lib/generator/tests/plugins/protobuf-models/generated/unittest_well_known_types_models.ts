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

export interface ITestWellKnownTypesObj {
  anyField: google.protobuf.Any;
  apiField: google.protobuf.Api;
  durationField: google.protobuf.Duration;
  emptyField: google.protobuf.Empty;
  fieldMaskField: google.protobuf.FieldMask;
  sourceContextField: google.protobuf.SourceContext;
  structField: google.protobuf.Struct;
  timestampField: google.protobuf.Timestamp;
  typeField: google.protobuf.Type;
  doubleField: google.protobuf.DoubleValue;
  floatField: google.protobuf.FloatValue;
  int64Field: google.protobuf.Int64Value;
  uint64Field: google.protobuf.UInt64Value;
  int32Field: google.protobuf.Int32Value;
  uint32Field: google.protobuf.UInt32Value;
  boolField: google.protobuf.BoolValue;
  stringField: google.protobuf.StringValue;
  bytesField: google.protobuf.BytesValue;
  valueField: google.protobuf.Value;
}

export interface ITestWellKnownTypes {
  anyField: google.protobuf.Any;
  apiField: google.protobuf.Api;
  durationField: google.protobuf.Duration;
  emptyField: google.protobuf.Empty;
  fieldMaskField: google.protobuf.FieldMask;
  sourceContextField: google.protobuf.SourceContext;
  structField: google.protobuf.Struct;
  timestampField: google.protobuf.Timestamp;
  typeField: google.protobuf.Type;
  doubleField: google.protobuf.DoubleValue;
  floatField: google.protobuf.FloatValue;
  int64Field: google.protobuf.Int64Value;
  uint64Field: google.protobuf.UInt64Value;
  int32Field: google.protobuf.Int32Value;
  uint32Field: google.protobuf.UInt32Value;
  boolField: google.protobuf.BoolValue;
  stringField: google.protobuf.StringValue;
  bytesField: google.protobuf.BytesValue;
  valueField: google.protobuf.Value;
}

export class TestWellKnownTypes implements ITestWellKnownTypes {
  anyField: google.protobuf.Any =
    new google_protobuf_any_models.google.protobuf.Any();
  apiField: google.protobuf.Api =
    new google_protobuf_api_models.google.protobuf.Api();
  durationField: google.protobuf.Duration =
    new google_protobuf_duration_models.google.protobuf.Duration();
  emptyField: google.protobuf.Empty =
    new google_protobuf_empty_models.google.protobuf.Empty();
  fieldMaskField: google.protobuf.FieldMask =
    new google_protobuf_field_mask_models.google.protobuf.FieldMask();
  sourceContextField: google.protobuf.SourceContext =
    new google_protobuf_source_context_models.google.protobuf.SourceContext();
  structField: google.protobuf.Struct =
    new google_protobuf_struct_models.google.protobuf.Struct();
  timestampField: google.protobuf.Timestamp =
    new google_protobuf_timestamp_models.google.protobuf.Timestamp();
  typeField: google.protobuf.Type =
    new google_protobuf_type_models.google.protobuf.Type();
  doubleField: google.protobuf.DoubleValue =
    new google_protobuf_wrappers_models.google.protobuf.DoubleValue();
  floatField: google.protobuf.FloatValue =
    new google_protobuf_wrappers_models.google.protobuf.FloatValue();
  int64Field: google.protobuf.Int64Value =
    new google_protobuf_wrappers_models.google.protobuf.Int64Value();
  uint64Field: google.protobuf.UInt64Value =
    new google_protobuf_wrappers_models.google.protobuf.UInt64Value();
  int32Field: google.protobuf.Int32Value =
    new google_protobuf_wrappers_models.google.protobuf.Int32Value();
  uint32Field: google.protobuf.UInt32Value =
    new google_protobuf_wrappers_models.google.protobuf.UInt32Value();
  boolField: google.protobuf.BoolValue =
    new google_protobuf_wrappers_models.google.protobuf.BoolValue();
  stringField: google.protobuf.StringValue =
    new google_protobuf_wrappers_models.google.protobuf.StringValue();
  bytesField: google.protobuf.BytesValue =
    new google_protobuf_wrappers_models.google.protobuf.BytesValue();
  valueField: google.protobuf.Value =
    new google_protobuf_struct_models.google.protobuf.Value();

  public static fields = [
    "anyField",
    "apiField",
    "durationField",
    "emptyField",
    "fieldMaskField",
    "sourceContextField",
    "structField",
    "timestampField",
    "typeField",
    "doubleField",
    "floatField",
    "int64Field",
    "uint64Field",
    "int32Field",
    "uint32Field",
    "boolField",
    "stringField",
    "bytesField",
    "valueField",
  ];

  public get fields() {
    return TestWellKnownTypes.fields;
  }

  constructor(obj?: Partial<ITestWellKnownTypes>) {
    if (!obj) return;

    if (obj.anyField !== undefined) {
      this.anyField = obj.anyField;
    }
    if (obj.apiField !== undefined) {
      this.apiField = obj.apiField;
    }
    if (obj.durationField !== undefined) {
      this.durationField = obj.durationField;
    }
    if (obj.emptyField !== undefined) {
      this.emptyField = obj.emptyField;
    }
    if (obj.fieldMaskField !== undefined) {
      this.fieldMaskField = obj.fieldMaskField;
    }
    if (obj.sourceContextField !== undefined) {
      this.sourceContextField = obj.sourceContextField;
    }
    if (obj.structField !== undefined) {
      this.structField = obj.structField;
    }
    if (obj.timestampField !== undefined) {
      this.timestampField = obj.timestampField;
    }
    if (obj.typeField !== undefined) {
      this.typeField = obj.typeField;
    }
    if (obj.doubleField !== undefined) {
      this.doubleField = obj.doubleField;
    }
    if (obj.floatField !== undefined) {
      this.floatField = obj.floatField;
    }
    if (obj.int64Field !== undefined) {
      this.int64Field = obj.int64Field;
    }
    if (obj.uint64Field !== undefined) {
      this.uint64Field = obj.uint64Field;
    }
    if (obj.int32Field !== undefined) {
      this.int32Field = obj.int32Field;
    }
    if (obj.uint32Field !== undefined) {
      this.uint32Field = obj.uint32Field;
    }
    if (obj.boolField !== undefined) {
      this.boolField = obj.boolField;
    }
    if (obj.stringField !== undefined) {
      this.stringField = obj.stringField;
    }
    if (obj.bytesField !== undefined) {
      this.bytesField = obj.bytesField;
    }
    if (obj.valueField !== undefined) {
      this.valueField = obj.valueField;
    }
  }

  public static encode(
    m: ITestWellKnownTypes,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // google.protobuf.Any any_field = 1
    if (m.anyField !== new google_protobuf_any_models.google.protobuf.Any()) {
      w.uint32(10);
      w.google.protobuf.Any(m.anyField);
    }

    // google.protobuf.Api api_field = 2
    if (m.apiField !== new google_protobuf_api_models.google.protobuf.Api()) {
      w.uint32(18);
      w.google.protobuf.Api(m.apiField);
    }

    // google.protobuf.Duration duration_field = 3
    if (
      m.durationField !==
      new google_protobuf_duration_models.google.protobuf.Duration()
    ) {
      w.uint32(26);
      w.google.protobuf.Duration(m.durationField);
    }

    // google.protobuf.Empty empty_field = 4
    if (
      m.emptyField !== new google_protobuf_empty_models.google.protobuf.Empty()
    ) {
      w.uint32(34);
      w.google.protobuf.Empty(m.emptyField);
    }

    // google.protobuf.FieldMask field_mask_field = 5
    if (
      m.fieldMaskField !==
      new google_protobuf_field_mask_models.google.protobuf.FieldMask()
    ) {
      w.uint32(42);
      w.google.protobuf.FieldMask(m.fieldMaskField);
    }

    // google.protobuf.SourceContext source_context_field = 6
    if (
      m.sourceContextField !==
      new google_protobuf_source_context_models.google.protobuf.SourceContext()
    ) {
      w.uint32(50);
      w.google.protobuf.SourceContext(m.sourceContextField);
    }

    // google.protobuf.Struct struct_field = 7
    if (
      m.structField !==
      new google_protobuf_struct_models.google.protobuf.Struct()
    ) {
      w.uint32(58);
      w.google.protobuf.Struct(m.structField);
    }

    // google.protobuf.Timestamp timestamp_field = 8
    if (
      m.timestampField !==
      new google_protobuf_timestamp_models.google.protobuf.Timestamp()
    ) {
      w.uint32(66);
      w.google.protobuf.Timestamp(m.timestampField);
    }

    // google.protobuf.Type type_field = 9
    if (
      m.typeField !== new google_protobuf_type_models.google.protobuf.Type()
    ) {
      w.uint32(74);
      w.google.protobuf.Type(m.typeField);
    }

    // google.protobuf.DoubleValue double_field = 10
    if (
      m.doubleField !==
      new google_protobuf_wrappers_models.google.protobuf.DoubleValue()
    ) {
      w.uint32(82);
      w.google.protobuf.DoubleValue(m.doubleField);
    }

    // google.protobuf.FloatValue float_field = 11
    if (
      m.floatField !==
      new google_protobuf_wrappers_models.google.protobuf.FloatValue()
    ) {
      w.uint32(90);
      w.google.protobuf.FloatValue(m.floatField);
    }

    // google.protobuf.Int64Value int64_field = 12
    if (
      m.int64Field !==
      new google_protobuf_wrappers_models.google.protobuf.Int64Value()
    ) {
      w.uint32(98);
      w.google.protobuf.Int64Value(m.int64Field);
    }

    // google.protobuf.UInt64Value uint64_field = 13
    if (
      m.uint64Field !==
      new google_protobuf_wrappers_models.google.protobuf.UInt64Value()
    ) {
      w.uint32(106);
      w.google.protobuf.UInt64Value(m.uint64Field);
    }

    // google.protobuf.Int32Value int32_field = 14
    if (
      m.int32Field !==
      new google_protobuf_wrappers_models.google.protobuf.Int32Value()
    ) {
      w.uint32(114);
      w.google.protobuf.Int32Value(m.int32Field);
    }

    // google.protobuf.UInt32Value uint32_field = 15
    if (
      m.uint32Field !==
      new google_protobuf_wrappers_models.google.protobuf.UInt32Value()
    ) {
      w.uint32(122);
      w.google.protobuf.UInt32Value(m.uint32Field);
    }

    // google.protobuf.BoolValue bool_field = 16
    if (
      m.boolField !==
      new google_protobuf_wrappers_models.google.protobuf.BoolValue()
    ) {
      w.uint32(130);
      w.google.protobuf.BoolValue(m.boolField);
    }

    // google.protobuf.StringValue string_field = 17
    if (
      m.stringField !==
      new google_protobuf_wrappers_models.google.protobuf.StringValue()
    ) {
      w.uint32(138);
      w.google.protobuf.StringValue(m.stringField);
    }

    // google.protobuf.BytesValue bytes_field = 18
    if (
      m.bytesField !==
      new google_protobuf_wrappers_models.google.protobuf.BytesValue()
    ) {
      w.uint32(146);
      w.google.protobuf.BytesValue(m.bytesField);
    }

    // google.protobuf.Value value_field = 19
    if (
      m.valueField !== new google_protobuf_struct_models.google.protobuf.Value()
    ) {
      w.uint32(154);
      w.google.protobuf.Value(m.valueField);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): TestWellKnownTypes {
    const m = new TestWellKnownTypes();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // google.protobuf.Any any_field = 1
        case 10:
          m.anyField = r.google.protobuf.Any();
          continue;

        // google.protobuf.Api api_field = 2
        case 18:
          m.apiField = r.google.protobuf.Api();
          continue;

        // google.protobuf.Duration duration_field = 3
        case 26:
          m.durationField = r.google.protobuf.Duration();
          continue;

        // google.protobuf.Empty empty_field = 4
        case 34:
          m.emptyField = r.google.protobuf.Empty();
          continue;

        // google.protobuf.FieldMask field_mask_field = 5
        case 42:
          m.fieldMaskField = r.google.protobuf.FieldMask();
          continue;

        // google.protobuf.SourceContext source_context_field = 6
        case 50:
          m.sourceContextField = r.google.protobuf.SourceContext();
          continue;

        // google.protobuf.Struct struct_field = 7
        case 58:
          m.structField = r.google.protobuf.Struct();
          continue;

        // google.protobuf.Timestamp timestamp_field = 8
        case 66:
          m.timestampField = r.google.protobuf.Timestamp();
          continue;

        // google.protobuf.Type type_field = 9
        case 74:
          m.typeField = r.google.protobuf.Type();
          continue;

        // google.protobuf.DoubleValue double_field = 10
        case 82:
          m.doubleField = r.google.protobuf.DoubleValue();
          continue;

        // google.protobuf.FloatValue float_field = 11
        case 90:
          m.floatField = r.google.protobuf.FloatValue();
          continue;

        // google.protobuf.Int64Value int64_field = 12
        case 98:
          m.int64Field = r.google.protobuf.Int64Value();
          continue;

        // google.protobuf.UInt64Value uint64_field = 13
        case 106:
          m.uint64Field = r.google.protobuf.UInt64Value();
          continue;

        // google.protobuf.Int32Value int32_field = 14
        case 114:
          m.int32Field = r.google.protobuf.Int32Value();
          continue;

        // google.protobuf.UInt32Value uint32_field = 15
        case 122:
          m.uint32Field = r.google.protobuf.UInt32Value();
          continue;

        // google.protobuf.BoolValue bool_field = 16
        case 130:
          m.boolField = r.google.protobuf.BoolValue();
          continue;

        // google.protobuf.StringValue string_field = 17
        case 138:
          m.stringField = r.google.protobuf.StringValue();
          continue;

        // google.protobuf.BytesValue bytes_field = 18
        case 146:
          m.bytesField = r.google.protobuf.BytesValue();
          continue;

        // google.protobuf.Value value_field = 19
        case 154:
          m.valueField = r.google.protobuf.Value();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: ITestWellKnownTypes): ITestWellKnownTypesObj {
    return {
      anyField: m.anyField.toJSON(),
      apiField: m.apiField.toJSON(),
      durationField: m.durationField.toJSON(),
      emptyField: m.emptyField.toJSON(),
      fieldMaskField: m.fieldMaskField.toJSON(),
      sourceContextField: m.sourceContextField.toJSON(),
      structField: m.structField.toJSON(),
      timestampField: m.timestampField.toJSON(),
      typeField: m.typeField.toJSON(),
      doubleField: m.doubleField.toJSON(),
      floatField: m.floatField.toJSON(),
      int64Field: m.int64Field.toJSON(),
      uint64Field: m.uint64Field.toJSON(),
      int32Field: m.int32Field.toJSON(),
      uint32Field: m.uint32Field.toJSON(),
      boolField: m.boolField.toJSON(),
      stringField: m.stringField.toJSON(),
      bytesField: m.bytesField.toJSON(),
      valueField: m.valueField.toJSON(),
    };
  }

  public static fromJSON(obj: ITestWellKnownTypesObj): ITestWellKnownTypes {
    const m = new TestWellKnownTypes();

    m.anyField.fromJSON(obj.anyField);
    m.apiField.fromJSON(obj.apiField);
    m.durationField.fromJSON(obj.durationField);
    m.emptyField.fromJSON(obj.emptyField);
    m.fieldMaskField.fromJSON(obj.fieldMaskField);
    m.sourceContextField.fromJSON(obj.sourceContextField);
    m.structField.fromJSON(obj.structField);
    m.timestampField.fromJSON(obj.timestampField);
    m.typeField.fromJSON(obj.typeField);
    m.doubleField.fromJSON(obj.doubleField);
    m.floatField.fromJSON(obj.floatField);
    m.int64Field.fromJSON(obj.int64Field);
    m.uint64Field.fromJSON(obj.uint64Field);
    m.int32Field.fromJSON(obj.int32Field);
    m.uint32Field.fromJSON(obj.uint32Field);
    m.boolField.fromJSON(obj.boolField);
    m.stringField.fromJSON(obj.stringField);
    m.bytesField.fromJSON(obj.bytesField);
    m.valueField.fromJSON(obj.valueField);

    return m;
  }

  clone(): TestWellKnownTypes {
    return new TestWellKnownTypes(this);
  }
}

export interface IRepeatedWellKnownTypesObj {
  anyField: google.protobuf.Any;
  apiField: google.protobuf.Api;
  durationField: google.protobuf.Duration;
  emptyField: google.protobuf.Empty;
  fieldMaskField: google.protobuf.FieldMask;
  sourceContextField: google.protobuf.SourceContext;
  structField: google.protobuf.Struct;
  timestampField: google.protobuf.Timestamp;
  typeField: google.protobuf.Type;
  doubleField: google.protobuf.DoubleValue;
  floatField: google.protobuf.FloatValue;
  int64Field: google.protobuf.Int64Value;
  uint64Field: google.protobuf.UInt64Value;
  int32Field: google.protobuf.Int32Value;
  uint32Field: google.protobuf.UInt32Value;
  boolField: google.protobuf.BoolValue;
  stringField: google.protobuf.StringValue;
  bytesField: google.protobuf.BytesValue;
}

export interface IRepeatedWellKnownTypes {
  anyField: google.protobuf.Any;
  apiField: google.protobuf.Api;
  durationField: google.protobuf.Duration;
  emptyField: google.protobuf.Empty;
  fieldMaskField: google.protobuf.FieldMask;
  sourceContextField: google.protobuf.SourceContext;
  structField: google.protobuf.Struct;
  timestampField: google.protobuf.Timestamp;
  typeField: google.protobuf.Type;
  doubleField: google.protobuf.DoubleValue;
  floatField: google.protobuf.FloatValue;
  int64Field: google.protobuf.Int64Value;
  uint64Field: google.protobuf.UInt64Value;
  int32Field: google.protobuf.Int32Value;
  uint32Field: google.protobuf.UInt32Value;
  boolField: google.protobuf.BoolValue;
  stringField: google.protobuf.StringValue;
  bytesField: google.protobuf.BytesValue;
}

export class RepeatedWellKnownTypes implements IRepeatedWellKnownTypes {
  anyField: google.protobuf.Any = [];
  apiField: google.protobuf.Api = [];
  durationField: google.protobuf.Duration = [];
  emptyField: google.protobuf.Empty = [];
  fieldMaskField: google.protobuf.FieldMask = [];
  sourceContextField: google.protobuf.SourceContext = [];
  structField: google.protobuf.Struct = [];
  timestampField: google.protobuf.Timestamp = [];
  typeField: google.protobuf.Type = [];
  doubleField: google.protobuf.DoubleValue = [];
  floatField: google.protobuf.FloatValue = [];
  int64Field: google.protobuf.Int64Value = [];
  uint64Field: google.protobuf.UInt64Value = [];
  int32Field: google.protobuf.Int32Value = [];
  uint32Field: google.protobuf.UInt32Value = [];
  boolField: google.protobuf.BoolValue = [];
  stringField: google.protobuf.StringValue = [];
  bytesField: google.protobuf.BytesValue = [];

  public static fields = [
    "anyField",
    "apiField",
    "durationField",
    "emptyField",
    "fieldMaskField",
    "sourceContextField",
    "structField",
    "timestampField",
    "typeField",
    "doubleField",
    "floatField",
    "int64Field",
    "uint64Field",
    "int32Field",
    "uint32Field",
    "boolField",
    "stringField",
    "bytesField",
  ];

  public get fields() {
    return RepeatedWellKnownTypes.fields;
  }

  constructor(obj?: Partial<IRepeatedWellKnownTypes>) {
    if (!obj) return;

    if (obj.anyField !== undefined) {
      this.anyField = obj.anyField;
    }
    if (obj.apiField !== undefined) {
      this.apiField = obj.apiField;
    }
    if (obj.durationField !== undefined) {
      this.durationField = obj.durationField;
    }
    if (obj.emptyField !== undefined) {
      this.emptyField = obj.emptyField;
    }
    if (obj.fieldMaskField !== undefined) {
      this.fieldMaskField = obj.fieldMaskField;
    }
    if (obj.sourceContextField !== undefined) {
      this.sourceContextField = obj.sourceContextField;
    }
    if (obj.structField !== undefined) {
      this.structField = obj.structField;
    }
    if (obj.timestampField !== undefined) {
      this.timestampField = obj.timestampField;
    }
    if (obj.typeField !== undefined) {
      this.typeField = obj.typeField;
    }
    if (obj.doubleField !== undefined) {
      this.doubleField = obj.doubleField;
    }
    if (obj.floatField !== undefined) {
      this.floatField = obj.floatField;
    }
    if (obj.int64Field !== undefined) {
      this.int64Field = obj.int64Field;
    }
    if (obj.uint64Field !== undefined) {
      this.uint64Field = obj.uint64Field;
    }
    if (obj.int32Field !== undefined) {
      this.int32Field = obj.int32Field;
    }
    if (obj.uint32Field !== undefined) {
      this.uint32Field = obj.uint32Field;
    }
    if (obj.boolField !== undefined) {
      this.boolField = obj.boolField;
    }
    if (obj.stringField !== undefined) {
      this.stringField = obj.stringField;
    }
    if (obj.bytesField !== undefined) {
      this.bytesField = obj.bytesField;
    }
  }

  public static encode(
    m: IRepeatedWellKnownTypes,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // google.protobuf.Any any_field = 1
    if (m.anyField !== []) {
      w.uint32(10);
      w.google.protobuf.Any(m.anyField);
    }

    // google.protobuf.Api api_field = 2
    if (m.apiField !== []) {
      w.uint32(18);
      w.google.protobuf.Api(m.apiField);
    }

    // google.protobuf.Duration duration_field = 3
    if (m.durationField !== []) {
      w.uint32(26);
      w.google.protobuf.Duration(m.durationField);
    }

    // google.protobuf.Empty empty_field = 4
    if (m.emptyField !== []) {
      w.uint32(34);
      w.google.protobuf.Empty(m.emptyField);
    }

    // google.protobuf.FieldMask field_mask_field = 5
    if (m.fieldMaskField !== []) {
      w.uint32(42);
      w.google.protobuf.FieldMask(m.fieldMaskField);
    }

    // google.protobuf.SourceContext source_context_field = 6
    if (m.sourceContextField !== []) {
      w.uint32(50);
      w.google.protobuf.SourceContext(m.sourceContextField);
    }

    // google.protobuf.Struct struct_field = 7
    if (m.structField !== []) {
      w.uint32(58);
      w.google.protobuf.Struct(m.structField);
    }

    // google.protobuf.Timestamp timestamp_field = 8
    if (m.timestampField !== []) {
      w.uint32(66);
      w.google.protobuf.Timestamp(m.timestampField);
    }

    // google.protobuf.Type type_field = 9
    if (m.typeField !== []) {
      w.uint32(74);
      w.google.protobuf.Type(m.typeField);
    }

    // google.protobuf.DoubleValue double_field = 10
    if (m.doubleField !== []) {
      w.uint32(82);
      w.google.protobuf.DoubleValue(m.doubleField);
    }

    // google.protobuf.FloatValue float_field = 11
    if (m.floatField !== []) {
      w.uint32(90);
      w.google.protobuf.FloatValue(m.floatField);
    }

    // google.protobuf.Int64Value int64_field = 12
    if (m.int64Field !== []) {
      w.uint32(98);
      w.google.protobuf.Int64Value(m.int64Field);
    }

    // google.protobuf.UInt64Value uint64_field = 13
    if (m.uint64Field !== []) {
      w.uint32(106);
      w.google.protobuf.UInt64Value(m.uint64Field);
    }

    // google.protobuf.Int32Value int32_field = 14
    if (m.int32Field !== []) {
      w.uint32(114);
      w.google.protobuf.Int32Value(m.int32Field);
    }

    // google.protobuf.UInt32Value uint32_field = 15
    if (m.uint32Field !== []) {
      w.uint32(122);
      w.google.protobuf.UInt32Value(m.uint32Field);
    }

    // google.protobuf.BoolValue bool_field = 16
    if (m.boolField !== []) {
      w.uint32(130);
      w.google.protobuf.BoolValue(m.boolField);
    }

    // google.protobuf.StringValue string_field = 17
    if (m.stringField !== []) {
      w.uint32(138);
      w.google.protobuf.StringValue(m.stringField);
    }

    // google.protobuf.BytesValue bytes_field = 18
    if (m.bytesField !== []) {
      w.uint32(146);
      w.google.protobuf.BytesValue(m.bytesField);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): RepeatedWellKnownTypes {
    const m = new RepeatedWellKnownTypes();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // repeated google.protobuf.Any any_field = 1
        case 10:
          {
            const value = r.google.protobuf.Any();

            m.anyField.push(value);
          }
          continue;

        // repeated google.protobuf.Api api_field = 2
        case 18:
          {
            const value = r.google.protobuf.Api();

            m.apiField.push(value);
          }
          continue;

        // repeated google.protobuf.Duration duration_field = 3
        case 26:
          {
            const value = r.google.protobuf.Duration();

            m.durationField.push(value);
          }
          continue;

        // repeated google.protobuf.Empty empty_field = 4
        case 34:
          {
            const value = r.google.protobuf.Empty();

            m.emptyField.push(value);
          }
          continue;

        // repeated google.protobuf.FieldMask field_mask_field = 5
        case 42:
          {
            const value = r.google.protobuf.FieldMask();

            m.fieldMaskField.push(value);
          }
          continue;

        // repeated google.protobuf.SourceContext source_context_field = 6
        case 50:
          {
            const value = r.google.protobuf.SourceContext();

            m.sourceContextField.push(value);
          }
          continue;

        // repeated google.protobuf.Struct struct_field = 7
        case 58:
          {
            const value = r.google.protobuf.Struct();

            m.structField.push(value);
          }
          continue;

        // repeated google.protobuf.Timestamp timestamp_field = 8
        case 66:
          {
            const value = r.google.protobuf.Timestamp();

            m.timestampField.push(value);
          }
          continue;

        // repeated google.protobuf.Type type_field = 9
        case 74:
          {
            const value = r.google.protobuf.Type();

            m.typeField.push(value);
          }
          continue;

        // repeated google.protobuf.DoubleValue double_field = 10
        case 82:
          {
            const value = r.google.protobuf.DoubleValue();

            m.doubleField.push(value);
          }
          continue;

        // repeated google.protobuf.FloatValue float_field = 11
        case 90:
          {
            const value = r.google.protobuf.FloatValue();

            m.floatField.push(value);
          }
          continue;

        // repeated google.protobuf.Int64Value int64_field = 12
        case 98:
          {
            const value = r.google.protobuf.Int64Value();

            m.int64Field.push(value);
          }
          continue;

        // repeated google.protobuf.UInt64Value uint64_field = 13
        case 106:
          {
            const value = r.google.protobuf.UInt64Value();

            m.uint64Field.push(value);
          }
          continue;

        // repeated google.protobuf.Int32Value int32_field = 14
        case 114:
          {
            const value = r.google.protobuf.Int32Value();

            m.int32Field.push(value);
          }
          continue;

        // repeated google.protobuf.UInt32Value uint32_field = 15
        case 122:
          {
            const value = r.google.protobuf.UInt32Value();

            m.uint32Field.push(value);
          }
          continue;

        // repeated google.protobuf.BoolValue bool_field = 16
        case 130:
          {
            const value = r.google.protobuf.BoolValue();

            m.boolField.push(value);
          }
          continue;

        // repeated google.protobuf.StringValue string_field = 17
        case 138:
          {
            const value = r.google.protobuf.StringValue();

            m.stringField.push(value);
          }
          continue;

        // repeated google.protobuf.BytesValue bytes_field = 18
        case 146:
          {
            const value = r.google.protobuf.BytesValue();

            m.bytesField.push(value);
          }
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IRepeatedWellKnownTypes): IRepeatedWellKnownTypesObj {
    return {
      anyField: m.anyField.toJSON(),
      apiField: m.apiField.toJSON(),
      durationField: m.durationField.toJSON(),
      emptyField: m.emptyField.toJSON(),
      fieldMaskField: m.fieldMaskField.toJSON(),
      sourceContextField: m.sourceContextField.toJSON(),
      structField: m.structField.toJSON(),
      timestampField: m.timestampField.toJSON(),
      typeField: m.typeField.toJSON(),
      doubleField: m.doubleField.toJSON(),
      floatField: m.floatField.toJSON(),
      int64Field: m.int64Field.toJSON(),
      uint64Field: m.uint64Field.toJSON(),
      int32Field: m.int32Field.toJSON(),
      uint32Field: m.uint32Field.toJSON(),
      boolField: m.boolField.toJSON(),
      stringField: m.stringField.toJSON(),
      bytesField: m.bytesField.toJSON(),
    };
  }

  public static fromJSON(
    obj: IRepeatedWellKnownTypesObj
  ): IRepeatedWellKnownTypes {
    const m = new RepeatedWellKnownTypes();

    m.anyField.fromJSON(obj.anyField);
    m.apiField.fromJSON(obj.apiField);
    m.durationField.fromJSON(obj.durationField);
    m.emptyField.fromJSON(obj.emptyField);
    m.fieldMaskField.fromJSON(obj.fieldMaskField);
    m.sourceContextField.fromJSON(obj.sourceContextField);
    m.structField.fromJSON(obj.structField);
    m.timestampField.fromJSON(obj.timestampField);
    m.typeField.fromJSON(obj.typeField);
    m.doubleField.fromJSON(obj.doubleField);
    m.floatField.fromJSON(obj.floatField);
    m.int64Field.fromJSON(obj.int64Field);
    m.uint64Field.fromJSON(obj.uint64Field);
    m.int32Field.fromJSON(obj.int32Field);
    m.uint32Field.fromJSON(obj.uint32Field);
    m.boolField.fromJSON(obj.boolField);
    m.stringField.fromJSON(obj.stringField);
    m.bytesField.fromJSON(obj.bytesField);

    return m;
  }

  clone(): RepeatedWellKnownTypes {
    return new RepeatedWellKnownTypes(this);
  }
}

export interface IOneofWellKnownTypesObj {
  anyField?: google.protobuf.Any;
  apiField?: google.protobuf.Api;
  durationField?: google.protobuf.Duration;
  emptyField?: google.protobuf.Empty;
  fieldMaskField?: google.protobuf.FieldMask;
  sourceContextField?: google.protobuf.SourceContext;
  structField?: google.protobuf.Struct;
  timestampField?: google.protobuf.Timestamp;
  typeField?: google.protobuf.Type;
  doubleField?: google.protobuf.DoubleValue;
  floatField?: google.protobuf.FloatValue;
  int64Field?: google.protobuf.Int64Value;
  uint64Field?: google.protobuf.UInt64Value;
  int32Field?: google.protobuf.Int32Value;
  uint32Field?: google.protobuf.UInt32Value;
  boolField?: google.protobuf.BoolValue;
  stringField?: google.protobuf.StringValue;
  bytesField?: google.protobuf.BytesValue;
}

export interface IOneofWellKnownTypes {
  anyField?: google.protobuf.Any;
  apiField?: google.protobuf.Api;
  durationField?: google.protobuf.Duration;
  emptyField?: google.protobuf.Empty;
  fieldMaskField?: google.protobuf.FieldMask;
  sourceContextField?: google.protobuf.SourceContext;
  structField?: google.protobuf.Struct;
  timestampField?: google.protobuf.Timestamp;
  typeField?: google.protobuf.Type;
  doubleField?: google.protobuf.DoubleValue;
  floatField?: google.protobuf.FloatValue;
  int64Field?: google.protobuf.Int64Value;
  uint64Field?: google.protobuf.UInt64Value;
  int32Field?: google.protobuf.Int32Value;
  uint32Field?: google.protobuf.UInt32Value;
  boolField?: google.protobuf.BoolValue;
  stringField?: google.protobuf.StringValue;
  bytesField?: google.protobuf.BytesValue;
}

export class OneofWellKnownTypes implements IOneofWellKnownTypes {
  anyField?: google.protobuf.Any =
    new google_protobuf_any_models.google.protobuf.Any();
  apiField?: google.protobuf.Api =
    new google_protobuf_api_models.google.protobuf.Api();
  durationField?: google.protobuf.Duration =
    new google_protobuf_duration_models.google.protobuf.Duration();
  emptyField?: google.protobuf.Empty =
    new google_protobuf_empty_models.google.protobuf.Empty();
  fieldMaskField?: google.protobuf.FieldMask =
    new google_protobuf_field_mask_models.google.protobuf.FieldMask();
  sourceContextField?: google.protobuf.SourceContext =
    new google_protobuf_source_context_models.google.protobuf.SourceContext();
  structField?: google.protobuf.Struct =
    new google_protobuf_struct_models.google.protobuf.Struct();
  timestampField?: google.protobuf.Timestamp =
    new google_protobuf_timestamp_models.google.protobuf.Timestamp();
  typeField?: google.protobuf.Type =
    new google_protobuf_type_models.google.protobuf.Type();
  doubleField?: google.protobuf.DoubleValue =
    new google_protobuf_wrappers_models.google.protobuf.DoubleValue();
  floatField?: google.protobuf.FloatValue =
    new google_protobuf_wrappers_models.google.protobuf.FloatValue();
  int64Field?: google.protobuf.Int64Value =
    new google_protobuf_wrappers_models.google.protobuf.Int64Value();
  uint64Field?: google.protobuf.UInt64Value =
    new google_protobuf_wrappers_models.google.protobuf.UInt64Value();
  int32Field?: google.protobuf.Int32Value =
    new google_protobuf_wrappers_models.google.protobuf.Int32Value();
  uint32Field?: google.protobuf.UInt32Value =
    new google_protobuf_wrappers_models.google.protobuf.UInt32Value();
  boolField?: google.protobuf.BoolValue =
    new google_protobuf_wrappers_models.google.protobuf.BoolValue();
  stringField?: google.protobuf.StringValue =
    new google_protobuf_wrappers_models.google.protobuf.StringValue();
  bytesField?: google.protobuf.BytesValue =
    new google_protobuf_wrappers_models.google.protobuf.BytesValue();

  public static fields = [
    "anyField",
    "apiField",
    "durationField",
    "emptyField",
    "fieldMaskField",
    "sourceContextField",
    "structField",
    "timestampField",
    "typeField",
    "doubleField",
    "floatField",
    "int64Field",
    "uint64Field",
    "int32Field",
    "uint32Field",
    "boolField",
    "stringField",
    "bytesField",
  ];

  public get fields() {
    return OneofWellKnownTypes.fields;
  }

  constructor(obj?: Partial<IOneofWellKnownTypes>) {
    if (!obj) return;

    if (obj.anyField !== undefined) {
      this.anyField = obj.anyField;
    }
    if (obj.apiField !== undefined) {
      this.apiField = obj.apiField;
    }
    if (obj.durationField !== undefined) {
      this.durationField = obj.durationField;
    }
    if (obj.emptyField !== undefined) {
      this.emptyField = obj.emptyField;
    }
    if (obj.fieldMaskField !== undefined) {
      this.fieldMaskField = obj.fieldMaskField;
    }
    if (obj.sourceContextField !== undefined) {
      this.sourceContextField = obj.sourceContextField;
    }
    if (obj.structField !== undefined) {
      this.structField = obj.structField;
    }
    if (obj.timestampField !== undefined) {
      this.timestampField = obj.timestampField;
    }
    if (obj.typeField !== undefined) {
      this.typeField = obj.typeField;
    }
    if (obj.doubleField !== undefined) {
      this.doubleField = obj.doubleField;
    }
    if (obj.floatField !== undefined) {
      this.floatField = obj.floatField;
    }
    if (obj.int64Field !== undefined) {
      this.int64Field = obj.int64Field;
    }
    if (obj.uint64Field !== undefined) {
      this.uint64Field = obj.uint64Field;
    }
    if (obj.int32Field !== undefined) {
      this.int32Field = obj.int32Field;
    }
    if (obj.uint32Field !== undefined) {
      this.uint32Field = obj.uint32Field;
    }
    if (obj.boolField !== undefined) {
      this.boolField = obj.boolField;
    }
    if (obj.stringField !== undefined) {
      this.stringField = obj.stringField;
    }
    if (obj.bytesField !== undefined) {
      this.bytesField = obj.bytesField;
    }
  }

  public static encode(
    m: IOneofWellKnownTypes,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // oneof google.protobuf.Any any_field = 1

    // oneof google.protobuf.Api api_field = 2

    // oneof google.protobuf.Duration duration_field = 3

    // oneof google.protobuf.Empty empty_field = 4

    // oneof google.protobuf.FieldMask field_mask_field = 5

    // oneof google.protobuf.SourceContext source_context_field = 6

    // oneof google.protobuf.Struct struct_field = 7

    // oneof google.protobuf.Timestamp timestamp_field = 8

    // oneof google.protobuf.Type type_field = 9

    // oneof google.protobuf.DoubleValue double_field = 10

    // oneof google.protobuf.FloatValue float_field = 11

    // oneof google.protobuf.Int64Value int64_field = 12

    // oneof google.protobuf.UInt64Value uint64_field = 13

    // oneof google.protobuf.Int32Value int32_field = 14

    // oneof google.protobuf.UInt32Value uint32_field = 15

    // oneof google.protobuf.BoolValue bool_field = 16

    // oneof google.protobuf.StringValue string_field = 17

    // oneof google.protobuf.BytesValue bytes_field = 18

    return w.finish();
  }

  public static decode(b: Uint8Array): OneofWellKnownTypes {
    const m = new OneofWellKnownTypes();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // google.protobuf.Any any_field = 1
        case 10:
          m.anyField = r.google.protobuf.Any();
          continue;

        // google.protobuf.Api api_field = 2
        case 18:
          m.apiField = r.google.protobuf.Api();
          continue;

        // google.protobuf.Duration duration_field = 3
        case 26:
          m.durationField = r.google.protobuf.Duration();
          continue;

        // google.protobuf.Empty empty_field = 4
        case 34:
          m.emptyField = r.google.protobuf.Empty();
          continue;

        // google.protobuf.FieldMask field_mask_field = 5
        case 42:
          m.fieldMaskField = r.google.protobuf.FieldMask();
          continue;

        // google.protobuf.SourceContext source_context_field = 6
        case 50:
          m.sourceContextField = r.google.protobuf.SourceContext();
          continue;

        // google.protobuf.Struct struct_field = 7
        case 58:
          m.structField = r.google.protobuf.Struct();
          continue;

        // google.protobuf.Timestamp timestamp_field = 8
        case 66:
          m.timestampField = r.google.protobuf.Timestamp();
          continue;

        // google.protobuf.Type type_field = 9
        case 74:
          m.typeField = r.google.protobuf.Type();
          continue;

        // google.protobuf.DoubleValue double_field = 10
        case 82:
          m.doubleField = r.google.protobuf.DoubleValue();
          continue;

        // google.protobuf.FloatValue float_field = 11
        case 90:
          m.floatField = r.google.protobuf.FloatValue();
          continue;

        // google.protobuf.Int64Value int64_field = 12
        case 98:
          m.int64Field = r.google.protobuf.Int64Value();
          continue;

        // google.protobuf.UInt64Value uint64_field = 13
        case 106:
          m.uint64Field = r.google.protobuf.UInt64Value();
          continue;

        // google.protobuf.Int32Value int32_field = 14
        case 114:
          m.int32Field = r.google.protobuf.Int32Value();
          continue;

        // google.protobuf.UInt32Value uint32_field = 15
        case 122:
          m.uint32Field = r.google.protobuf.UInt32Value();
          continue;

        // google.protobuf.BoolValue bool_field = 16
        case 130:
          m.boolField = r.google.protobuf.BoolValue();
          continue;

        // google.protobuf.StringValue string_field = 17
        case 138:
          m.stringField = r.google.protobuf.StringValue();
          continue;

        // google.protobuf.BytesValue bytes_field = 18
        case 146:
          m.bytesField = r.google.protobuf.BytesValue();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IOneofWellKnownTypes): IOneofWellKnownTypesObj {
    return {
      anyField: m.anyField.toJSON(),
      apiField: m.apiField.toJSON(),
      durationField: m.durationField.toJSON(),
      emptyField: m.emptyField.toJSON(),
      fieldMaskField: m.fieldMaskField.toJSON(),
      sourceContextField: m.sourceContextField.toJSON(),
      structField: m.structField.toJSON(),
      timestampField: m.timestampField.toJSON(),
      typeField: m.typeField.toJSON(),
      doubleField: m.doubleField.toJSON(),
      floatField: m.floatField.toJSON(),
      int64Field: m.int64Field.toJSON(),
      uint64Field: m.uint64Field.toJSON(),
      int32Field: m.int32Field.toJSON(),
      uint32Field: m.uint32Field.toJSON(),
      boolField: m.boolField.toJSON(),
      stringField: m.stringField.toJSON(),
      bytesField: m.bytesField.toJSON(),
    };
  }

  public static fromJSON(obj: IOneofWellKnownTypesObj): IOneofWellKnownTypes {
    const m = new OneofWellKnownTypes();

    m.anyField.fromJSON(obj.anyField);
    m.apiField.fromJSON(obj.apiField);
    m.durationField.fromJSON(obj.durationField);
    m.emptyField.fromJSON(obj.emptyField);
    m.fieldMaskField.fromJSON(obj.fieldMaskField);
    m.sourceContextField.fromJSON(obj.sourceContextField);
    m.structField.fromJSON(obj.structField);
    m.timestampField.fromJSON(obj.timestampField);
    m.typeField.fromJSON(obj.typeField);
    m.doubleField.fromJSON(obj.doubleField);
    m.floatField.fromJSON(obj.floatField);
    m.int64Field.fromJSON(obj.int64Field);
    m.uint64Field.fromJSON(obj.uint64Field);
    m.int32Field.fromJSON(obj.int32Field);
    m.uint32Field.fromJSON(obj.uint32Field);
    m.boolField.fromJSON(obj.boolField);
    m.stringField.fromJSON(obj.stringField);
    m.bytesField.fromJSON(obj.bytesField);

    return m;
  }

  clone(): OneofWellKnownTypes {
    return new OneofWellKnownTypes(this);
  }
}

export interface IMapWellKnownTypesObj {
  anyField: Record<number, google.protobuf.Any>;
  apiField: Record<number, google.protobuf.Api>;
  durationField: Record<number, google.protobuf.Duration>;
  emptyField: Record<number, google.protobuf.Empty>;
  fieldMaskField: Record<number, google.protobuf.FieldMask>;
  sourceContextField: Record<number, google.protobuf.SourceContext>;
  structField: Record<number, google.protobuf.Struct>;
  timestampField: Record<number, google.protobuf.Timestamp>;
  typeField: Record<number, google.protobuf.Type>;
  doubleField: Record<number, google.protobuf.DoubleValue>;
  floatField: Record<number, google.protobuf.FloatValue>;
  int64Field: Record<number, google.protobuf.Int64Value>;
  uint64Field: Record<number, google.protobuf.UInt64Value>;
  int32Field: Record<number, google.protobuf.Int32Value>;
  uint32Field: Record<number, google.protobuf.UInt32Value>;
  boolField: Record<number, google.protobuf.BoolValue>;
  stringField: Record<number, google.protobuf.StringValue>;
  bytesField: Record<number, google.protobuf.BytesValue>;
}

export interface IMapWellKnownTypes {
  anyField: Map<number, google.protobuf.Any>;
  apiField: Map<number, google.protobuf.Api>;
  durationField: Map<number, google.protobuf.Duration>;
  emptyField: Map<number, google.protobuf.Empty>;
  fieldMaskField: Map<number, google.protobuf.FieldMask>;
  sourceContextField: Map<number, google.protobuf.SourceContext>;
  structField: Map<number, google.protobuf.Struct>;
  timestampField: Map<number, google.protobuf.Timestamp>;
  typeField: Map<number, google.protobuf.Type>;
  doubleField: Map<number, google.protobuf.DoubleValue>;
  floatField: Map<number, google.protobuf.FloatValue>;
  int64Field: Map<number, google.protobuf.Int64Value>;
  uint64Field: Map<number, google.protobuf.UInt64Value>;
  int32Field: Map<number, google.protobuf.Int32Value>;
  uint32Field: Map<number, google.protobuf.UInt32Value>;
  boolField: Map<number, google.protobuf.BoolValue>;
  stringField: Map<number, google.protobuf.StringValue>;
  bytesField: Map<number, google.protobuf.BytesValue>;
}

export class MapWellKnownTypes implements IMapWellKnownTypes {
  anyField: Record<number, google.protobuf.Any> = {};
  apiField: Record<number, google.protobuf.Api> = {};
  durationField: Record<number, google.protobuf.Duration> = {};
  emptyField: Record<number, google.protobuf.Empty> = {};
  fieldMaskField: Record<number, google.protobuf.FieldMask> = {};
  sourceContextField: Record<number, google.protobuf.SourceContext> = {};
  structField: Record<number, google.protobuf.Struct> = {};
  timestampField: Record<number, google.protobuf.Timestamp> = {};
  typeField: Record<number, google.protobuf.Type> = {};
  doubleField: Record<number, google.protobuf.DoubleValue> = {};
  floatField: Record<number, google.protobuf.FloatValue> = {};
  int64Field: Record<number, google.protobuf.Int64Value> = {};
  uint64Field: Record<number, google.protobuf.UInt64Value> = {};
  int32Field: Record<number, google.protobuf.Int32Value> = {};
  uint32Field: Record<number, google.protobuf.UInt32Value> = {};
  boolField: Record<number, google.protobuf.BoolValue> = {};
  stringField: Record<number, google.protobuf.StringValue> = {};
  bytesField: Record<number, google.protobuf.BytesValue> = {};

  public static fields = [
    "anyField",
    "apiField",
    "durationField",
    "emptyField",
    "fieldMaskField",
    "sourceContextField",
    "structField",
    "timestampField",
    "typeField",
    "doubleField",
    "floatField",
    "int64Field",
    "uint64Field",
    "int32Field",
    "uint32Field",
    "boolField",
    "stringField",
    "bytesField",
  ];

  public get fields() {
    return MapWellKnownTypes.fields;
  }

  constructor(obj?: Partial<IMapWellKnownTypes>) {
    if (!obj) return;

    if (obj.anyField !== undefined) {
      this.anyField = obj.anyField;
    }
    if (obj.apiField !== undefined) {
      this.apiField = obj.apiField;
    }
    if (obj.durationField !== undefined) {
      this.durationField = obj.durationField;
    }
    if (obj.emptyField !== undefined) {
      this.emptyField = obj.emptyField;
    }
    if (obj.fieldMaskField !== undefined) {
      this.fieldMaskField = obj.fieldMaskField;
    }
    if (obj.sourceContextField !== undefined) {
      this.sourceContextField = obj.sourceContextField;
    }
    if (obj.structField !== undefined) {
      this.structField = obj.structField;
    }
    if (obj.timestampField !== undefined) {
      this.timestampField = obj.timestampField;
    }
    if (obj.typeField !== undefined) {
      this.typeField = obj.typeField;
    }
    if (obj.doubleField !== undefined) {
      this.doubleField = obj.doubleField;
    }
    if (obj.floatField !== undefined) {
      this.floatField = obj.floatField;
    }
    if (obj.int64Field !== undefined) {
      this.int64Field = obj.int64Field;
    }
    if (obj.uint64Field !== undefined) {
      this.uint64Field = obj.uint64Field;
    }
    if (obj.int32Field !== undefined) {
      this.int32Field = obj.int32Field;
    }
    if (obj.uint32Field !== undefined) {
      this.uint32Field = obj.uint32Field;
    }
    if (obj.boolField !== undefined) {
      this.boolField = obj.boolField;
    }
    if (obj.stringField !== undefined) {
      this.stringField = obj.stringField;
    }
    if (obj.bytesField !== undefined) {
      this.bytesField = obj.bytesField;
    }
  }

  public static encode(
    m: IMapWellKnownTypes,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // map<int32, google.protobuf.Any> any_field = 1

    // map<int32, google.protobuf.Api> api_field = 2

    // map<int32, google.protobuf.Duration> duration_field = 3

    // map<int32, google.protobuf.Empty> empty_field = 4

    // map<int32, google.protobuf.FieldMask> field_mask_field = 5

    // map<int32, google.protobuf.SourceContext> source_context_field = 6

    // map<int32, google.protobuf.Struct> struct_field = 7

    // map<int32, google.protobuf.Timestamp> timestamp_field = 8

    // map<int32, google.protobuf.Type> type_field = 9

    // map<int32, google.protobuf.DoubleValue> double_field = 10

    // map<int32, google.protobuf.FloatValue> float_field = 11

    // map<int32, google.protobuf.Int64Value> int64_field = 12

    // map<int32, google.protobuf.UInt64Value> uint64_field = 13

    // map<int32, google.protobuf.Int32Value> int32_field = 14

    // map<int32, google.protobuf.UInt32Value> uint32_field = 15

    // map<int32, google.protobuf.BoolValue> bool_field = 16

    // map<int32, google.protobuf.StringValue> string_field = 17

    // map<int32, google.protobuf.BytesValue> bytes_field = 18

    return w.finish();
  }

  public static decode(b: Uint8Array): MapWellKnownTypes {
    const m = new MapWellKnownTypes();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // map<int32, google.protobuf.Any> any_field = 1
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.Any();

            m.anyField.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.Api> api_field = 2
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.Api();

            m.apiField.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.Duration> duration_field = 3
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.Duration();

            m.durationField.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.Empty> empty_field = 4
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.Empty();

            m.emptyField.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.FieldMask> field_mask_field = 5
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.FieldMask();

            m.fieldMaskField.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.SourceContext> source_context_field = 6
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.SourceContext();

            m.sourceContextField.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.Struct> struct_field = 7
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.Struct();

            m.structField.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.Timestamp> timestamp_field = 8
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.Timestamp();

            m.timestampField.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.Type> type_field = 9
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.Type();

            m.typeField.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.DoubleValue> double_field = 10
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.DoubleValue();

            m.doubleField.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.FloatValue> float_field = 11
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.FloatValue();

            m.floatField.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.Int64Value> int64_field = 12
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.Int64Value();

            m.int64Field.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.UInt64Value> uint64_field = 13
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.UInt64Value();

            m.uint64Field.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.Int32Value> int32_field = 14
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.Int32Value();

            m.int32Field.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.UInt32Value> uint32_field = 15
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.UInt32Value();

            m.uint32Field.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.BoolValue> bool_field = 16
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.BoolValue();

            m.boolField.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.StringValue> string_field = 17
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.StringValue();

            m.stringField.set(key, value);
          }
          continue;

        // map<int32, google.protobuf.BytesValue> bytes_field = 18
        case null:
          {
            const key = r.int32();
            const value = r.google.protobuf.BytesValue();

            m.bytesField.set(key, value);
          }
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IMapWellKnownTypes): IMapWellKnownTypesObj {
    return {
      anyField: m.anyField,
      apiField: m.apiField,
      durationField: m.durationField,
      emptyField: m.emptyField,
      fieldMaskField: m.fieldMaskField,
      sourceContextField: m.sourceContextField,
      structField: m.structField,
      timestampField: m.timestampField,
      typeField: m.typeField,
      doubleField: m.doubleField,
      floatField: m.floatField,
      int64Field: m.int64Field,
      uint64Field: m.uint64Field,
      int32Field: m.int32Field,
      uint32Field: m.uint32Field,
      boolField: m.boolField,
      stringField: m.stringField,
      bytesField: m.bytesField,
    };
  }

  public static fromJSON(obj: IMapWellKnownTypesObj): IMapWellKnownTypes {
    const m = new MapWellKnownTypes();

    m.anyField = obj.anyField;
    m.apiField = obj.apiField;
    m.durationField = obj.durationField;
    m.emptyField = obj.emptyField;
    m.fieldMaskField = obj.fieldMaskField;
    m.sourceContextField = obj.sourceContextField;
    m.structField = obj.structField;
    m.timestampField = obj.timestampField;
    m.typeField = obj.typeField;
    m.doubleField = obj.doubleField;
    m.floatField = obj.floatField;
    m.int64Field = obj.int64Field;
    m.uint64Field = obj.uint64Field;
    m.int32Field = obj.int32Field;
    m.uint32Field = obj.uint32Field;
    m.boolField = obj.boolField;
    m.stringField = obj.stringField;
    m.bytesField = obj.bytesField;

    return m;
  }

  clone(): MapWellKnownTypes {
    return new MapWellKnownTypes(this);
  }
}
