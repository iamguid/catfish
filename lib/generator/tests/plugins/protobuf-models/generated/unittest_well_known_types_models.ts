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
  anyField: null;
  apiField: null;
  durationField: null;
  emptyField: null;
  fieldMaskField: null;
  sourceContextField: null;
  structField: null;
  timestampField: null;
  typeField: null;
  doubleField: null;
  floatField: null;
  int64Field: null;
  uint64Field: null;
  int32Field: null;
  uint32Field: null;
  boolField: null;
  stringField: null;
  bytesField: null;
  valueField: null;
}

export interface ITestWellKnownTypes {
  anyField: null;
  apiField: null;
  durationField: null;
  emptyField: null;
  fieldMaskField: null;
  sourceContextField: null;
  structField: null;
  timestampField: null;
  typeField: null;
  doubleField: null;
  floatField: null;
  int64Field: null;
  uint64Field: null;
  int32Field: null;
  uint32Field: null;
  boolField: null;
  stringField: null;
  bytesField: null;
  valueField: null;
}

export class TestWellKnownTypes implements ITestWellKnownTypes {
  anyField: null = null;
  apiField: null = null;
  durationField: null = null;
  emptyField: null = null;
  fieldMaskField: null = null;
  sourceContextField: null = null;
  structField: null = null;
  timestampField: null = null;
  typeField: null = null;
  doubleField: null = null;
  floatField: null = null;
  int64Field: null = null;
  uint64Field: null = null;
  int32Field: null = null;
  uint32Field: null = null;
  boolField: null = null;
  stringField: null = null;
  bytesField: null = null;
  valueField: null = null;

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
    if (m.anyField !== null) {
      w.uint32(10);
      m.anyField.encode(writer);
    }

    // google.protobuf.Api api_field = 2
    if (m.apiField !== null) {
      w.uint32(18);
      m.apiField.encode(writer);
    }

    // google.protobuf.Duration duration_field = 3
    if (m.durationField !== null) {
      w.uint32(26);
      m.durationField.encode(writer);
    }

    // google.protobuf.Empty empty_field = 4
    if (m.emptyField !== null) {
      w.uint32(34);
      m.emptyField.encode(writer);
    }

    // google.protobuf.FieldMask field_mask_field = 5
    if (m.fieldMaskField !== null) {
      w.uint32(42);
      m.fieldMaskField.encode(writer);
    }

    // google.protobuf.SourceContext source_context_field = 6
    if (m.sourceContextField !== null) {
      w.uint32(50);
      m.sourceContextField.encode(writer);
    }

    // google.protobuf.Struct struct_field = 7
    if (m.structField !== null) {
      w.uint32(58);
      m.structField.encode(writer);
    }

    // google.protobuf.Timestamp timestamp_field = 8
    if (m.timestampField !== null) {
      w.uint32(66);
      m.timestampField.encode(writer);
    }

    // google.protobuf.Type type_field = 9
    if (m.typeField !== null) {
      w.uint32(74);
      m.typeField.encode(writer);
    }

    // google.protobuf.DoubleValue double_field = 10
    if (m.doubleField !== null) {
      w.uint32(82);
      m.doubleField.encode(writer);
    }

    // google.protobuf.FloatValue float_field = 11
    if (m.floatField !== null) {
      w.uint32(90);
      m.floatField.encode(writer);
    }

    // google.protobuf.Int64Value int64_field = 12
    if (m.int64Field !== null) {
      w.uint32(98);
      m.int64Field.encode(writer);
    }

    // google.protobuf.UInt64Value uint64_field = 13
    if (m.uint64Field !== null) {
      w.uint32(106);
      m.uint64Field.encode(writer);
    }

    // google.protobuf.Int32Value int32_field = 14
    if (m.int32Field !== null) {
      w.uint32(114);
      m.int32Field.encode(writer);
    }

    // google.protobuf.UInt32Value uint32_field = 15
    if (m.uint32Field !== null) {
      w.uint32(122);
      m.uint32Field.encode(writer);
    }

    // google.protobuf.BoolValue bool_field = 16
    if (m.boolField !== null) {
      w.uint32(130);
      m.boolField.encode(writer);
    }

    // google.protobuf.StringValue string_field = 17
    if (m.stringField !== null) {
      w.uint32(138);
      m.stringField.encode(writer);
    }

    // google.protobuf.BytesValue bytes_field = 18
    if (m.bytesField !== null) {
      w.uint32(146);
      m.bytesField.encode(writer);
    }

    // google.protobuf.Value value_field = 19
    if (m.valueField !== null) {
      w.uint32(154);
      m.valueField.encode(writer);
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
          m.anyField = google_protobuf_any_models.google.protobuf.Any;
          continue;

        // google.protobuf.Api api_field = 2
        case 18:
          m.apiField = google_protobuf_api_models.google.protobuf.Api;
          continue;

        // google.protobuf.Duration duration_field = 3
        case 26:
          m.durationField =
            google_protobuf_duration_models.google.protobuf.Duration;
          continue;

        // google.protobuf.Empty empty_field = 4
        case 34:
          m.emptyField = google_protobuf_empty_models.google.protobuf.Empty;
          continue;

        // google.protobuf.FieldMask field_mask_field = 5
        case 42:
          m.fieldMaskField =
            google_protobuf_field_mask_models.google.protobuf.FieldMask;
          continue;

        // google.protobuf.SourceContext source_context_field = 6
        case 50:
          m.sourceContextField =
            google_protobuf_source_context_models.google.protobuf.SourceContext;
          continue;

        // google.protobuf.Struct struct_field = 7
        case 58:
          m.structField = google_protobuf_struct_models.google.protobuf.Struct;
          continue;

        // google.protobuf.Timestamp timestamp_field = 8
        case 66:
          m.timestampField =
            google_protobuf_timestamp_models.google.protobuf.Timestamp;
          continue;

        // google.protobuf.Type type_field = 9
        case 74:
          m.typeField = google_protobuf_type_models.google.protobuf.Type;
          continue;

        // google.protobuf.DoubleValue double_field = 10
        case 82:
          m.doubleField =
            google_protobuf_wrappers_models.google.protobuf.DoubleValue;
          continue;

        // google.protobuf.FloatValue float_field = 11
        case 90:
          m.floatField =
            google_protobuf_wrappers_models.google.protobuf.FloatValue;
          continue;

        // google.protobuf.Int64Value int64_field = 12
        case 98:
          m.int64Field =
            google_protobuf_wrappers_models.google.protobuf.Int64Value;
          continue;

        // google.protobuf.UInt64Value uint64_field = 13
        case 106:
          m.uint64Field =
            google_protobuf_wrappers_models.google.protobuf.UInt64Value;
          continue;

        // google.protobuf.Int32Value int32_field = 14
        case 114:
          m.int32Field =
            google_protobuf_wrappers_models.google.protobuf.Int32Value;
          continue;

        // google.protobuf.UInt32Value uint32_field = 15
        case 122:
          m.uint32Field =
            google_protobuf_wrappers_models.google.protobuf.UInt32Value;
          continue;

        // google.protobuf.BoolValue bool_field = 16
        case 130:
          m.boolField =
            google_protobuf_wrappers_models.google.protobuf.BoolValue;
          continue;

        // google.protobuf.StringValue string_field = 17
        case 138:
          m.stringField =
            google_protobuf_wrappers_models.google.protobuf.StringValue;
          continue;

        // google.protobuf.BytesValue bytes_field = 18
        case 146:
          m.bytesField =
            google_protobuf_wrappers_models.google.protobuf.BytesValue;
          continue;

        // google.protobuf.Value value_field = 19
        case 154:
          m.valueField = google_protobuf_struct_models.google.protobuf.Value;
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: ITestWellKnownTypes): ITestWellKnownTypesObj {}

  public static fromJSON(obj: ITestWellKnownTypesObj): ITestWellKnownTypes {}

  clone(): TestWellKnownTypes {
    return new TestWellKnownTypes(this);
  }
}

export interface IRepeatedWellKnownTypesObj {
  anyField: null;
  apiField: null;
  durationField: null;
  emptyField: null;
  fieldMaskField: null;
  sourceContextField: null;
  structField: null;
  timestampField: null;
  typeField: null;
  doubleField: null;
  floatField: null;
  int64Field: null;
  uint64Field: null;
  int32Field: null;
  uint32Field: null;
  boolField: null;
  stringField: null;
  bytesField: null;
}

export interface IRepeatedWellKnownTypes {
  anyField: null;
  apiField: null;
  durationField: null;
  emptyField: null;
  fieldMaskField: null;
  sourceContextField: null;
  structField: null;
  timestampField: null;
  typeField: null;
  doubleField: null;
  floatField: null;
  int64Field: null;
  uint64Field: null;
  int32Field: null;
  uint32Field: null;
  boolField: null;
  stringField: null;
  bytesField: null;
}

export class RepeatedWellKnownTypes implements IRepeatedWellKnownTypes {
  anyField: null = [];
  apiField: null = [];
  durationField: null = [];
  emptyField: null = [];
  fieldMaskField: null = [];
  sourceContextField: null = [];
  structField: null = [];
  timestampField: null = [];
  typeField: null = [];
  doubleField: null = [];
  floatField: null = [];
  int64Field: null = [];
  uint64Field: null = [];
  int32Field: null = [];
  uint32Field: null = [];
  boolField: null = [];
  stringField: null = [];
  bytesField: null = [];

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
      m.anyField.encode(writer);
    }

    // google.protobuf.Api api_field = 2
    if (m.apiField !== []) {
      w.uint32(18);
      m.apiField.encode(writer);
    }

    // google.protobuf.Duration duration_field = 3
    if (m.durationField !== []) {
      w.uint32(26);
      m.durationField.encode(writer);
    }

    // google.protobuf.Empty empty_field = 4
    if (m.emptyField !== []) {
      w.uint32(34);
      m.emptyField.encode(writer);
    }

    // google.protobuf.FieldMask field_mask_field = 5
    if (m.fieldMaskField !== []) {
      w.uint32(42);
      m.fieldMaskField.encode(writer);
    }

    // google.protobuf.SourceContext source_context_field = 6
    if (m.sourceContextField !== []) {
      w.uint32(50);
      m.sourceContextField.encode(writer);
    }

    // google.protobuf.Struct struct_field = 7
    if (m.structField !== []) {
      w.uint32(58);
      m.structField.encode(writer);
    }

    // google.protobuf.Timestamp timestamp_field = 8
    if (m.timestampField !== []) {
      w.uint32(66);
      m.timestampField.encode(writer);
    }

    // google.protobuf.Type type_field = 9
    if (m.typeField !== []) {
      w.uint32(74);
      m.typeField.encode(writer);
    }

    // google.protobuf.DoubleValue double_field = 10
    if (m.doubleField !== []) {
      w.uint32(82);
      m.doubleField.encode(writer);
    }

    // google.protobuf.FloatValue float_field = 11
    if (m.floatField !== []) {
      w.uint32(90);
      m.floatField.encode(writer);
    }

    // google.protobuf.Int64Value int64_field = 12
    if (m.int64Field !== []) {
      w.uint32(98);
      m.int64Field.encode(writer);
    }

    // google.protobuf.UInt64Value uint64_field = 13
    if (m.uint64Field !== []) {
      w.uint32(106);
      m.uint64Field.encode(writer);
    }

    // google.protobuf.Int32Value int32_field = 14
    if (m.int32Field !== []) {
      w.uint32(114);
      m.int32Field.encode(writer);
    }

    // google.protobuf.UInt32Value uint32_field = 15
    if (m.uint32Field !== []) {
      w.uint32(122);
      m.uint32Field.encode(writer);
    }

    // google.protobuf.BoolValue bool_field = 16
    if (m.boolField !== []) {
      w.uint32(130);
      m.boolField.encode(writer);
    }

    // google.protobuf.StringValue string_field = 17
    if (m.stringField !== []) {
      w.uint32(138);
      m.stringField.encode(writer);
    }

    // google.protobuf.BytesValue bytes_field = 18
    if (m.bytesField !== []) {
      w.uint32(146);
      m.bytesField.encode(writer);
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
          const anyFieldValue = google_protobuf_any_models.google.protobuf.Any;

          m.anyField.push(anyFieldValue);
          continue;

        // repeated google.protobuf.Api api_field = 2
        case 18:
          const apiFieldValue = google_protobuf_api_models.google.protobuf.Api;

          m.apiField.push(apiFieldValue);
          continue;

        // repeated google.protobuf.Duration duration_field = 3
        case 26:
          const durationFieldValue =
            google_protobuf_duration_models.google.protobuf.Duration;

          m.durationField.push(durationFieldValue);
          continue;

        // repeated google.protobuf.Empty empty_field = 4
        case 34:
          const emptyFieldValue =
            google_protobuf_empty_models.google.protobuf.Empty;

          m.emptyField.push(emptyFieldValue);
          continue;

        // repeated google.protobuf.FieldMask field_mask_field = 5
        case 42:
          const fieldMaskFieldValue =
            google_protobuf_field_mask_models.google.protobuf.FieldMask;

          m.fieldMaskField.push(fieldMaskFieldValue);
          continue;

        // repeated google.protobuf.SourceContext source_context_field = 6
        case 50:
          const sourceContextFieldValue =
            google_protobuf_source_context_models.google.protobuf.SourceContext;

          m.sourceContextField.push(sourceContextFieldValue);
          continue;

        // repeated google.protobuf.Struct struct_field = 7
        case 58:
          const structFieldValue =
            google_protobuf_struct_models.google.protobuf.Struct;

          m.structField.push(structFieldValue);
          continue;

        // repeated google.protobuf.Timestamp timestamp_field = 8
        case 66:
          const timestampFieldValue =
            google_protobuf_timestamp_models.google.protobuf.Timestamp;

          m.timestampField.push(timestampFieldValue);
          continue;

        // repeated google.protobuf.Type type_field = 9
        case 74:
          const typeFieldValue =
            google_protobuf_type_models.google.protobuf.Type;

          m.typeField.push(typeFieldValue);
          continue;

        // repeated google.protobuf.DoubleValue double_field = 10
        case 82:
          const doubleFieldValue =
            google_protobuf_wrappers_models.google.protobuf.DoubleValue;

          m.doubleField.push(doubleFieldValue);
          continue;

        // repeated google.protobuf.FloatValue float_field = 11
        case 90:
          const floatFieldValue =
            google_protobuf_wrappers_models.google.protobuf.FloatValue;

          m.floatField.push(floatFieldValue);
          continue;

        // repeated google.protobuf.Int64Value int64_field = 12
        case 98:
          const int64FieldValue =
            google_protobuf_wrappers_models.google.protobuf.Int64Value;

          m.int64Field.push(int64FieldValue);
          continue;

        // repeated google.protobuf.UInt64Value uint64_field = 13
        case 106:
          const uint64FieldValue =
            google_protobuf_wrappers_models.google.protobuf.UInt64Value;

          m.uint64Field.push(uint64FieldValue);
          continue;

        // repeated google.protobuf.Int32Value int32_field = 14
        case 114:
          const int32FieldValue =
            google_protobuf_wrappers_models.google.protobuf.Int32Value;

          m.int32Field.push(int32FieldValue);
          continue;

        // repeated google.protobuf.UInt32Value uint32_field = 15
        case 122:
          const uint32FieldValue =
            google_protobuf_wrappers_models.google.protobuf.UInt32Value;

          m.uint32Field.push(uint32FieldValue);
          continue;

        // repeated google.protobuf.BoolValue bool_field = 16
        case 130:
          const boolFieldValue =
            google_protobuf_wrappers_models.google.protobuf.BoolValue;

          m.boolField.push(boolFieldValue);
          continue;

        // repeated google.protobuf.StringValue string_field = 17
        case 138:
          const stringFieldValue =
            google_protobuf_wrappers_models.google.protobuf.StringValue;

          m.stringField.push(stringFieldValue);
          continue;

        // repeated google.protobuf.BytesValue bytes_field = 18
        case 146:
          const bytesFieldValue =
            google_protobuf_wrappers_models.google.protobuf.BytesValue;

          m.bytesField.push(bytesFieldValue);
          continue;
      }
    }

    return m;
  }

  public static toJSON(
    m: IRepeatedWellKnownTypes
  ): IRepeatedWellKnownTypesObj {}

  public static fromJSON(
    obj: IRepeatedWellKnownTypesObj
  ): IRepeatedWellKnownTypes {}

  clone(): RepeatedWellKnownTypes {
    return new RepeatedWellKnownTypes(this);
  }
}

export interface IOneofWellKnownTypesObj {
  anyField?: null;
  apiField?: null;
  durationField?: null;
  emptyField?: null;
  fieldMaskField?: null;
  sourceContextField?: null;
  structField?: null;
  timestampField?: null;
  typeField?: null;
  doubleField?: null;
  floatField?: null;
  int64Field?: null;
  uint64Field?: null;
  int32Field?: null;
  uint32Field?: null;
  boolField?: null;
  stringField?: null;
  bytesField?: null;
}

export interface IOneofWellKnownTypes {
  anyField?: null;
  apiField?: null;
  durationField?: null;
  emptyField?: null;
  fieldMaskField?: null;
  sourceContextField?: null;
  structField?: null;
  timestampField?: null;
  typeField?: null;
  doubleField?: null;
  floatField?: null;
  int64Field?: null;
  uint64Field?: null;
  int32Field?: null;
  uint32Field?: null;
  boolField?: null;
  stringField?: null;
  bytesField?: null;
}

export class OneofWellKnownTypes implements IOneofWellKnownTypes {
  anyField?: null = null;
  apiField?: null = null;
  durationField?: null = null;
  emptyField?: null = null;
  fieldMaskField?: null = null;
  sourceContextField?: null = null;
  structField?: null = null;
  timestampField?: null = null;
  typeField?: null = null;
  doubleField?: null = null;
  floatField?: null = null;
  int64Field?: null = null;
  uint64Field?: null = null;
  int32Field?: null = null;
  uint32Field?: null = null;
  boolField?: null = null;
  stringField?: null = null;
  bytesField?: null = null;

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
          m.anyField = google_protobuf_any_models.google.protobuf.Any;
          continue;

        // google.protobuf.Api api_field = 2
        case 18:
          m.apiField = google_protobuf_api_models.google.protobuf.Api;
          continue;

        // google.protobuf.Duration duration_field = 3
        case 26:
          m.durationField =
            google_protobuf_duration_models.google.protobuf.Duration;
          continue;

        // google.protobuf.Empty empty_field = 4
        case 34:
          m.emptyField = google_protobuf_empty_models.google.protobuf.Empty;
          continue;

        // google.protobuf.FieldMask field_mask_field = 5
        case 42:
          m.fieldMaskField =
            google_protobuf_field_mask_models.google.protobuf.FieldMask;
          continue;

        // google.protobuf.SourceContext source_context_field = 6
        case 50:
          m.sourceContextField =
            google_protobuf_source_context_models.google.protobuf.SourceContext;
          continue;

        // google.protobuf.Struct struct_field = 7
        case 58:
          m.structField = google_protobuf_struct_models.google.protobuf.Struct;
          continue;

        // google.protobuf.Timestamp timestamp_field = 8
        case 66:
          m.timestampField =
            google_protobuf_timestamp_models.google.protobuf.Timestamp;
          continue;

        // google.protobuf.Type type_field = 9
        case 74:
          m.typeField = google_protobuf_type_models.google.protobuf.Type;
          continue;

        // google.protobuf.DoubleValue double_field = 10
        case 82:
          m.doubleField =
            google_protobuf_wrappers_models.google.protobuf.DoubleValue;
          continue;

        // google.protobuf.FloatValue float_field = 11
        case 90:
          m.floatField =
            google_protobuf_wrappers_models.google.protobuf.FloatValue;
          continue;

        // google.protobuf.Int64Value int64_field = 12
        case 98:
          m.int64Field =
            google_protobuf_wrappers_models.google.protobuf.Int64Value;
          continue;

        // google.protobuf.UInt64Value uint64_field = 13
        case 106:
          m.uint64Field =
            google_protobuf_wrappers_models.google.protobuf.UInt64Value;
          continue;

        // google.protobuf.Int32Value int32_field = 14
        case 114:
          m.int32Field =
            google_protobuf_wrappers_models.google.protobuf.Int32Value;
          continue;

        // google.protobuf.UInt32Value uint32_field = 15
        case 122:
          m.uint32Field =
            google_protobuf_wrappers_models.google.protobuf.UInt32Value;
          continue;

        // google.protobuf.BoolValue bool_field = 16
        case 130:
          m.boolField =
            google_protobuf_wrappers_models.google.protobuf.BoolValue;
          continue;

        // google.protobuf.StringValue string_field = 17
        case 138:
          m.stringField =
            google_protobuf_wrappers_models.google.protobuf.StringValue;
          continue;

        // google.protobuf.BytesValue bytes_field = 18
        case 146:
          m.bytesField =
            google_protobuf_wrappers_models.google.protobuf.BytesValue;
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IOneofWellKnownTypes): IOneofWellKnownTypesObj {}

  public static fromJSON(obj: IOneofWellKnownTypesObj): IOneofWellKnownTypes {}

  clone(): OneofWellKnownTypes {
    return new OneofWellKnownTypes(this);
  }
}

export interface IMapWellKnownTypesObj {
  anyField: Record<number, null>;
  apiField: Record<number, null>;
  durationField: Record<number, null>;
  emptyField: Record<number, null>;
  fieldMaskField: Record<number, null>;
  sourceContextField: Record<number, null>;
  structField: Record<number, null>;
  timestampField: Record<number, null>;
  typeField: Record<number, null>;
  doubleField: Record<number, null>;
  floatField: Record<number, null>;
  int64Field: Record<number, null>;
  uint64Field: Record<number, null>;
  int32Field: Record<number, null>;
  uint32Field: Record<number, null>;
  boolField: Record<number, null>;
  stringField: Record<number, null>;
  bytesField: Record<number, null>;
}

export interface IMapWellKnownTypes {
  anyField: Map<number, null>;
  apiField: Map<number, null>;
  durationField: Map<number, null>;
  emptyField: Map<number, null>;
  fieldMaskField: Map<number, null>;
  sourceContextField: Map<number, null>;
  structField: Map<number, null>;
  timestampField: Map<number, null>;
  typeField: Map<number, null>;
  doubleField: Map<number, null>;
  floatField: Map<number, null>;
  int64Field: Map<number, null>;
  uint64Field: Map<number, null>;
  int32Field: Map<number, null>;
  uint32Field: Map<number, null>;
  boolField: Map<number, null>;
  stringField: Map<number, null>;
  bytesField: Map<number, null>;
}

export class MapWellKnownTypes implements IMapWellKnownTypes {
  anyField: Record<number, null> = {};
  apiField: Record<number, null> = {};
  durationField: Record<number, null> = {};
  emptyField: Record<number, null> = {};
  fieldMaskField: Record<number, null> = {};
  sourceContextField: Record<number, null> = {};
  structField: Record<number, null> = {};
  timestampField: Record<number, null> = {};
  typeField: Record<number, null> = {};
  doubleField: Record<number, null> = {};
  floatField: Record<number, null> = {};
  int64Field: Record<number, null> = {};
  uint64Field: Record<number, null> = {};
  int32Field: Record<number, null> = {};
  uint32Field: Record<number, null> = {};
  boolField: Record<number, null> = {};
  stringField: Record<number, null> = {};
  bytesField: Record<number, null> = {};

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
        case 10:
          const anyFieldKey = r.int32();
          const anyFieldValue = google_protobuf_any_models.google.protobuf.Any;

          m.anyField.set(anyFieldKey, anyFieldValue);
          continue;

        // map<int32, google.protobuf.Api> api_field = 2
        case 18:
          const apiFieldKey = r.int32();
          const apiFieldValue = google_protobuf_api_models.google.protobuf.Api;

          m.apiField.set(apiFieldKey, apiFieldValue);
          continue;

        // map<int32, google.protobuf.Duration> duration_field = 3
        case 26:
          const durationFieldKey = r.int32();
          const durationFieldValue =
            google_protobuf_duration_models.google.protobuf.Duration;

          m.durationField.set(durationFieldKey, durationFieldValue);
          continue;

        // map<int32, google.protobuf.Empty> empty_field = 4
        case 34:
          const emptyFieldKey = r.int32();
          const emptyFieldValue =
            google_protobuf_empty_models.google.protobuf.Empty;

          m.emptyField.set(emptyFieldKey, emptyFieldValue);
          continue;

        // map<int32, google.protobuf.FieldMask> field_mask_field = 5
        case 42:
          const fieldMaskFieldKey = r.int32();
          const fieldMaskFieldValue =
            google_protobuf_field_mask_models.google.protobuf.FieldMask;

          m.fieldMaskField.set(fieldMaskFieldKey, fieldMaskFieldValue);
          continue;

        // map<int32, google.protobuf.SourceContext> source_context_field = 6
        case 50:
          const sourceContextFieldKey = r.int32();
          const sourceContextFieldValue =
            google_protobuf_source_context_models.google.protobuf.SourceContext;

          m.sourceContextField.set(
            sourceContextFieldKey,
            sourceContextFieldValue
          );
          continue;

        // map<int32, google.protobuf.Struct> struct_field = 7
        case 58:
          const structFieldKey = r.int32();
          const structFieldValue =
            google_protobuf_struct_models.google.protobuf.Struct;

          m.structField.set(structFieldKey, structFieldValue);
          continue;

        // map<int32, google.protobuf.Timestamp> timestamp_field = 8
        case 66:
          const timestampFieldKey = r.int32();
          const timestampFieldValue =
            google_protobuf_timestamp_models.google.protobuf.Timestamp;

          m.timestampField.set(timestampFieldKey, timestampFieldValue);
          continue;

        // map<int32, google.protobuf.Type> type_field = 9
        case 74:
          const typeFieldKey = r.int32();
          const typeFieldValue =
            google_protobuf_type_models.google.protobuf.Type;

          m.typeField.set(typeFieldKey, typeFieldValue);
          continue;

        // map<int32, google.protobuf.DoubleValue> double_field = 10
        case 82:
          const doubleFieldKey = r.int32();
          const doubleFieldValue =
            google_protobuf_wrappers_models.google.protobuf.DoubleValue;

          m.doubleField.set(doubleFieldKey, doubleFieldValue);
          continue;

        // map<int32, google.protobuf.FloatValue> float_field = 11
        case 90:
          const floatFieldKey = r.int32();
          const floatFieldValue =
            google_protobuf_wrappers_models.google.protobuf.FloatValue;

          m.floatField.set(floatFieldKey, floatFieldValue);
          continue;

        // map<int32, google.protobuf.Int64Value> int64_field = 12
        case 98:
          const int64FieldKey = r.int32();
          const int64FieldValue =
            google_protobuf_wrappers_models.google.protobuf.Int64Value;

          m.int64Field.set(int64FieldKey, int64FieldValue);
          continue;

        // map<int32, google.protobuf.UInt64Value> uint64_field = 13
        case 106:
          const uint64FieldKey = r.int32();
          const uint64FieldValue =
            google_protobuf_wrappers_models.google.protobuf.UInt64Value;

          m.uint64Field.set(uint64FieldKey, uint64FieldValue);
          continue;

        // map<int32, google.protobuf.Int32Value> int32_field = 14
        case 114:
          const int32FieldKey = r.int32();
          const int32FieldValue =
            google_protobuf_wrappers_models.google.protobuf.Int32Value;

          m.int32Field.set(int32FieldKey, int32FieldValue);
          continue;

        // map<int32, google.protobuf.UInt32Value> uint32_field = 15
        case 122:
          const uint32FieldKey = r.int32();
          const uint32FieldValue =
            google_protobuf_wrappers_models.google.protobuf.UInt32Value;

          m.uint32Field.set(uint32FieldKey, uint32FieldValue);
          continue;

        // map<int32, google.protobuf.BoolValue> bool_field = 16
        case 130:
          const boolFieldKey = r.int32();
          const boolFieldValue =
            google_protobuf_wrappers_models.google.protobuf.BoolValue;

          m.boolField.set(boolFieldKey, boolFieldValue);
          continue;

        // map<int32, google.protobuf.StringValue> string_field = 17
        case 138:
          const stringFieldKey = r.int32();
          const stringFieldValue =
            google_protobuf_wrappers_models.google.protobuf.StringValue;

          m.stringField.set(stringFieldKey, stringFieldValue);
          continue;

        // map<int32, google.protobuf.BytesValue> bytes_field = 18
        case 146:
          const bytesFieldKey = r.int32();
          const bytesFieldValue =
            google_protobuf_wrappers_models.google.protobuf.BytesValue;

          m.bytesField.set(bytesFieldKey, bytesFieldValue);
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IMapWellKnownTypes): IMapWellKnownTypesObj {}

  public static fromJSON(obj: IMapWellKnownTypesObj): IMapWellKnownTypes {}

  clone(): MapWellKnownTypes {
    return new MapWellKnownTypes(this);
  }
}
