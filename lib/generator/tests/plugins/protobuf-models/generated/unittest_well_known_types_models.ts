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
import * as runtime from "@catfish/runtime";

export interface TestWellKnownTypesJSON {
  anyField: google_protobuf_any_models.google.protobuf.AnyJSON;
  apiField: google_protobuf_api_models.google.protobuf.ApiJSON;
  durationField: google_protobuf_duration_models.google.protobuf.DurationJSON;
  emptyField: google_protobuf_empty_models.google.protobuf.EmptyJSON;
  fieldMaskField: google_protobuf_field_mask_models.google.protobuf.FieldMaskJSON;
  sourceContextField: google_protobuf_source_context_models.google.protobuf.SourceContextJSON;
  structField: google_protobuf_struct_models.google.protobuf.StructJSON;
  timestampField: google_protobuf_timestamp_models.google.protobuf.TimestampJSON;
  typeField: google_protobuf_type_models.google.protobuf.TypeJSON;
  doubleField: google_protobuf_wrappers_models.google.protobuf.DoubleValueJSON;
  floatField: google_protobuf_wrappers_models.google.protobuf.FloatValueJSON;
  int64Field: google_protobuf_wrappers_models.google.protobuf.Int64ValueJSON;
  uint64Field: google_protobuf_wrappers_models.google.protobuf.UInt64ValueJSON;
  int32Field: google_protobuf_wrappers_models.google.protobuf.Int32ValueJSON;
  uint32Field: google_protobuf_wrappers_models.google.protobuf.UInt32ValueJSON;
  boolField: google_protobuf_wrappers_models.google.protobuf.BoolValueJSON;
  stringField: google_protobuf_wrappers_models.google.protobuf.StringValueJSON;
  bytesField: google_protobuf_wrappers_models.google.protobuf.BytesValueJSON;
  valueField: google_protobuf_struct_models.google.protobuf.ValueJSON;
}

export class TestWellKnownTypes {
  anyField: google_protobuf_any_models.google.protobuf.Any =
    new google_protobuf_any_models.google.protobuf.Any();
  apiField: google_protobuf_api_models.google.protobuf.Api =
    new google_protobuf_api_models.google.protobuf.Api();
  durationField: google_protobuf_duration_models.google.protobuf.Duration =
    new google_protobuf_duration_models.google.protobuf.Duration();
  emptyField: google_protobuf_empty_models.google.protobuf.Empty =
    new google_protobuf_empty_models.google.protobuf.Empty();
  fieldMaskField: google_protobuf_field_mask_models.google.protobuf.FieldMask =
    new google_protobuf_field_mask_models.google.protobuf.FieldMask();
  sourceContextField: google_protobuf_source_context_models.google.protobuf.SourceContext =
    new google_protobuf_source_context_models.google.protobuf.SourceContext();
  structField: google_protobuf_struct_models.google.protobuf.Struct =
    new google_protobuf_struct_models.google.protobuf.Struct();
  timestampField: google_protobuf_timestamp_models.google.protobuf.Timestamp =
    new google_protobuf_timestamp_models.google.protobuf.Timestamp();
  typeField: google_protobuf_type_models.google.protobuf.Type =
    new google_protobuf_type_models.google.protobuf.Type();
  doubleField: google_protobuf_wrappers_models.google.protobuf.DoubleValue =
    new google_protobuf_wrappers_models.google.protobuf.DoubleValue();
  floatField: google_protobuf_wrappers_models.google.protobuf.FloatValue =
    new google_protobuf_wrappers_models.google.protobuf.FloatValue();
  int64Field: google_protobuf_wrappers_models.google.protobuf.Int64Value =
    new google_protobuf_wrappers_models.google.protobuf.Int64Value();
  uint64Field: google_protobuf_wrappers_models.google.protobuf.UInt64Value =
    new google_protobuf_wrappers_models.google.protobuf.UInt64Value();
  int32Field: google_protobuf_wrappers_models.google.protobuf.Int32Value =
    new google_protobuf_wrappers_models.google.protobuf.Int32Value();
  uint32Field: google_protobuf_wrappers_models.google.protobuf.UInt32Value =
    new google_protobuf_wrappers_models.google.protobuf.UInt32Value();
  boolField: google_protobuf_wrappers_models.google.protobuf.BoolValue =
    new google_protobuf_wrappers_models.google.protobuf.BoolValue();
  stringField: google_protobuf_wrappers_models.google.protobuf.StringValue =
    new google_protobuf_wrappers_models.google.protobuf.StringValue();
  bytesField: google_protobuf_wrappers_models.google.protobuf.BytesValue =
    new google_protobuf_wrappers_models.google.protobuf.BytesValue();
  valueField: google_protobuf_struct_models.google.protobuf.Value =
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

  constructor(obj?: TestWellKnownTypes) {
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

  public static encode(m: TestWellKnownTypes, w: pjs.Writer): pjs.Writer {
    // google.protobuf.Any any_field = 1
    if (m.anyField !== new google_protobuf_any_models.google.protobuf.Any()) {
      w.uint32(10);
      google_protobuf_any_models.google.protobuf.Any.encode(
        m.anyField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Api api_field = 2
    if (m.apiField !== new google_protobuf_api_models.google.protobuf.Api()) {
      w.uint32(18);
      google_protobuf_api_models.google.protobuf.Api.encode(
        m.apiField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Duration duration_field = 3
    if (
      m.durationField !==
      new google_protobuf_duration_models.google.protobuf.Duration()
    ) {
      w.uint32(26);
      google_protobuf_duration_models.google.protobuf.Duration.encode(
        m.durationField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Empty empty_field = 4
    if (
      m.emptyField !== new google_protobuf_empty_models.google.protobuf.Empty()
    ) {
      w.uint32(34);
      google_protobuf_empty_models.google.protobuf.Empty.encode(
        m.emptyField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.FieldMask field_mask_field = 5
    if (
      m.fieldMaskField !==
      new google_protobuf_field_mask_models.google.protobuf.FieldMask()
    ) {
      w.uint32(42);
      google_protobuf_field_mask_models.google.protobuf.FieldMask.encode(
        m.fieldMaskField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.SourceContext source_context_field = 6
    if (
      m.sourceContextField !==
      new google_protobuf_source_context_models.google.protobuf.SourceContext()
    ) {
      w.uint32(50);
      google_protobuf_source_context_models.google.protobuf.SourceContext.encode(
        m.sourceContextField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Struct struct_field = 7
    if (
      m.structField !==
      new google_protobuf_struct_models.google.protobuf.Struct()
    ) {
      w.uint32(58);
      google_protobuf_struct_models.google.protobuf.Struct.encode(
        m.structField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Timestamp timestamp_field = 8
    if (
      m.timestampField !==
      new google_protobuf_timestamp_models.google.protobuf.Timestamp()
    ) {
      w.uint32(66);
      google_protobuf_timestamp_models.google.protobuf.Timestamp.encode(
        m.timestampField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Type type_field = 9
    if (
      m.typeField !== new google_protobuf_type_models.google.protobuf.Type()
    ) {
      w.uint32(74);
      google_protobuf_type_models.google.protobuf.Type.encode(
        m.typeField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.DoubleValue double_field = 10
    if (
      m.doubleField !==
      new google_protobuf_wrappers_models.google.protobuf.DoubleValue()
    ) {
      w.uint32(82);
      google_protobuf_wrappers_models.google.protobuf.DoubleValue.encode(
        m.doubleField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.FloatValue float_field = 11
    if (
      m.floatField !==
      new google_protobuf_wrappers_models.google.protobuf.FloatValue()
    ) {
      w.uint32(90);
      google_protobuf_wrappers_models.google.protobuf.FloatValue.encode(
        m.floatField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Int64Value int64_field = 12
    if (
      m.int64Field !==
      new google_protobuf_wrappers_models.google.protobuf.Int64Value()
    ) {
      w.uint32(98);
      google_protobuf_wrappers_models.google.protobuf.Int64Value.encode(
        m.int64Field,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.UInt64Value uint64_field = 13
    if (
      m.uint64Field !==
      new google_protobuf_wrappers_models.google.protobuf.UInt64Value()
    ) {
      w.uint32(106);
      google_protobuf_wrappers_models.google.protobuf.UInt64Value.encode(
        m.uint64Field,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Int32Value int32_field = 14
    if (
      m.int32Field !==
      new google_protobuf_wrappers_models.google.protobuf.Int32Value()
    ) {
      w.uint32(114);
      google_protobuf_wrappers_models.google.protobuf.Int32Value.encode(
        m.int32Field,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.UInt32Value uint32_field = 15
    if (
      m.uint32Field !==
      new google_protobuf_wrappers_models.google.protobuf.UInt32Value()
    ) {
      w.uint32(122);
      google_protobuf_wrappers_models.google.protobuf.UInt32Value.encode(
        m.uint32Field,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.BoolValue bool_field = 16
    if (
      m.boolField !==
      new google_protobuf_wrappers_models.google.protobuf.BoolValue()
    ) {
      w.uint32(130);
      google_protobuf_wrappers_models.google.protobuf.BoolValue.encode(
        m.boolField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.StringValue string_field = 17
    if (
      m.stringField !==
      new google_protobuf_wrappers_models.google.protobuf.StringValue()
    ) {
      w.uint32(138);
      google_protobuf_wrappers_models.google.protobuf.StringValue.encode(
        m.stringField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.BytesValue bytes_field = 18
    if (
      m.bytesField !==
      new google_protobuf_wrappers_models.google.protobuf.BytesValue()
    ) {
      w.uint32(146);
      google_protobuf_wrappers_models.google.protobuf.BytesValue.encode(
        m.bytesField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Value value_field = 19
    if (
      m.valueField !== new google_protobuf_struct_models.google.protobuf.Value()
    ) {
      w.uint32(154);
      google_protobuf_struct_models.google.protobuf.Value.encode(
        m.valueField,
        w.fork()
      ).ldelim();
    }

    return w;
  }

  public static decode(
    m: TestWellKnownTypes,
    r: pjs.Reader,
    length: number
  ): TestWellKnownTypes {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // google.protobuf.Any any_field = 1
        case 10:
          m.anyField = google_protobuf_any_models.google.protobuf.Any.decode(
            undefined,
            r,
            r.uint32()
          );
          continue;

        // google.protobuf.Api api_field = 2
        case 18:
          m.apiField = google_protobuf_api_models.google.protobuf.Api.decode(
            undefined,
            r,
            r.uint32()
          );
          continue;

        // google.protobuf.Duration duration_field = 3
        case 26:
          m.durationField =
            google_protobuf_duration_models.google.protobuf.Duration.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Empty empty_field = 4
        case 34:
          m.emptyField =
            google_protobuf_empty_models.google.protobuf.Empty.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.FieldMask field_mask_field = 5
        case 42:
          m.fieldMaskField =
            google_protobuf_field_mask_models.google.protobuf.FieldMask.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.SourceContext source_context_field = 6
        case 50:
          m.sourceContextField =
            google_protobuf_source_context_models.google.protobuf.SourceContext.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Struct struct_field = 7
        case 58:
          m.structField =
            google_protobuf_struct_models.google.protobuf.Struct.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Timestamp timestamp_field = 8
        case 66:
          m.timestampField =
            google_protobuf_timestamp_models.google.protobuf.Timestamp.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Type type_field = 9
        case 74:
          m.typeField = google_protobuf_type_models.google.protobuf.Type.decode(
            undefined,
            r,
            r.uint32()
          );
          continue;

        // google.protobuf.DoubleValue double_field = 10
        case 82:
          m.doubleField =
            google_protobuf_wrappers_models.google.protobuf.DoubleValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.FloatValue float_field = 11
        case 90:
          m.floatField =
            google_protobuf_wrappers_models.google.protobuf.FloatValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Int64Value int64_field = 12
        case 98:
          m.int64Field =
            google_protobuf_wrappers_models.google.protobuf.Int64Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.UInt64Value uint64_field = 13
        case 106:
          m.uint64Field =
            google_protobuf_wrappers_models.google.protobuf.UInt64Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Int32Value int32_field = 14
        case 114:
          m.int32Field =
            google_protobuf_wrappers_models.google.protobuf.Int32Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.UInt32Value uint32_field = 15
        case 122:
          m.uint32Field =
            google_protobuf_wrappers_models.google.protobuf.UInt32Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.BoolValue bool_field = 16
        case 130:
          m.boolField =
            google_protobuf_wrappers_models.google.protobuf.BoolValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.StringValue string_field = 17
        case 138:
          m.stringField =
            google_protobuf_wrappers_models.google.protobuf.StringValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.BytesValue bytes_field = 18
        case 146:
          m.bytesField =
            google_protobuf_wrappers_models.google.protobuf.BytesValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Value value_field = 19
        case 154:
          m.valueField =
            google_protobuf_struct_models.google.protobuf.Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: TestWellKnownTypes): TestWellKnownTypesJSON {
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

  public static fromJSON(
    m: TestWellKnownTypes,
    obj: TestWellKnownTypesJSON
  ): TestWellKnownTypes {
    m.anyField = new google_protobuf_any_models.google.protobuf.Any().fromJSON(
      obj.anyField
    );
    m.apiField = new google_protobuf_api_models.google.protobuf.Api().fromJSON(
      obj.apiField
    );
    m.durationField =
      new google_protobuf_duration_models.google.protobuf.Duration().fromJSON(
        obj.durationField
      );
    m.emptyField =
      new google_protobuf_empty_models.google.protobuf.Empty().fromJSON(
        obj.emptyField
      );
    m.fieldMaskField =
      new google_protobuf_field_mask_models.google.protobuf.FieldMask().fromJSON(
        obj.fieldMaskField
      );
    m.sourceContextField =
      new google_protobuf_source_context_models.google.protobuf.SourceContext().fromJSON(
        obj.sourceContextField
      );
    m.structField =
      new google_protobuf_struct_models.google.protobuf.Struct().fromJSON(
        obj.structField
      );
    m.timestampField =
      new google_protobuf_timestamp_models.google.protobuf.Timestamp().fromJSON(
        obj.timestampField
      );
    m.typeField =
      new google_protobuf_type_models.google.protobuf.Type().fromJSON(
        obj.typeField
      );
    m.doubleField =
      new google_protobuf_wrappers_models.google.protobuf.DoubleValue().fromJSON(
        obj.doubleField
      );
    m.floatField =
      new google_protobuf_wrappers_models.google.protobuf.FloatValue().fromJSON(
        obj.floatField
      );
    m.int64Field =
      new google_protobuf_wrappers_models.google.protobuf.Int64Value().fromJSON(
        obj.int64Field
      );
    m.uint64Field =
      new google_protobuf_wrappers_models.google.protobuf.UInt64Value().fromJSON(
        obj.uint64Field
      );
    m.int32Field =
      new google_protobuf_wrappers_models.google.protobuf.Int32Value().fromJSON(
        obj.int32Field
      );
    m.uint32Field =
      new google_protobuf_wrappers_models.google.protobuf.UInt32Value().fromJSON(
        obj.uint32Field
      );
    m.boolField =
      new google_protobuf_wrappers_models.google.protobuf.BoolValue().fromJSON(
        obj.boolField
      );
    m.stringField =
      new google_protobuf_wrappers_models.google.protobuf.StringValue().fromJSON(
        obj.stringField
      );
    m.bytesField =
      new google_protobuf_wrappers_models.google.protobuf.BytesValue().fromJSON(
        obj.bytesField
      );
    m.valueField =
      new google_protobuf_struct_models.google.protobuf.Value().fromJSON(
        obj.valueField
      );

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return TestWellKnownTypes.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): TestWellKnownTypes {
    const r = new pjs.Reader(buffer);
    return TestWellKnownTypes.decode(this, r, r.len);
  }

  toJSON(): TestWellKnownTypesJSON {
    return TestWellKnownTypes.toJSON(this);
  }

  fromJSON(obj: TestWellKnownTypesJSON): TestWellKnownTypes {
    return TestWellKnownTypes.fromJSON(this, obj);
  }

  clone(): TestWellKnownTypes {
    return new TestWellKnownTypes(this);
  }
}

export interface RepeatedWellKnownTypesJSON {
  anyField: google_protobuf_any_models.google.protobuf.AnyJSON;
  apiField: google_protobuf_api_models.google.protobuf.ApiJSON;
  durationField: google_protobuf_duration_models.google.protobuf.DurationJSON;
  emptyField: google_protobuf_empty_models.google.protobuf.EmptyJSON;
  fieldMaskField: google_protobuf_field_mask_models.google.protobuf.FieldMaskJSON;
  sourceContextField: google_protobuf_source_context_models.google.protobuf.SourceContextJSON;
  structField: google_protobuf_struct_models.google.protobuf.StructJSON;
  timestampField: google_protobuf_timestamp_models.google.protobuf.TimestampJSON;
  typeField: google_protobuf_type_models.google.protobuf.TypeJSON;
  doubleField: google_protobuf_wrappers_models.google.protobuf.DoubleValueJSON;
  floatField: google_protobuf_wrappers_models.google.protobuf.FloatValueJSON;
  int64Field: google_protobuf_wrappers_models.google.protobuf.Int64ValueJSON;
  uint64Field: google_protobuf_wrappers_models.google.protobuf.UInt64ValueJSON;
  int32Field: google_protobuf_wrappers_models.google.protobuf.Int32ValueJSON;
  uint32Field: google_protobuf_wrappers_models.google.protobuf.UInt32ValueJSON;
  boolField: google_protobuf_wrappers_models.google.protobuf.BoolValueJSON;
  stringField: google_protobuf_wrappers_models.google.protobuf.StringValueJSON;
  bytesField: google_protobuf_wrappers_models.google.protobuf.BytesValueJSON;
}

export class RepeatedWellKnownTypes {
  anyField: google_protobuf_any_models.google.protobuf.Any =
    new google_protobuf_any_models.google.protobuf.Any();
  apiField: google_protobuf_api_models.google.protobuf.Api =
    new google_protobuf_api_models.google.protobuf.Api();
  durationField: google_protobuf_duration_models.google.protobuf.Duration =
    new google_protobuf_duration_models.google.protobuf.Duration();
  emptyField: google_protobuf_empty_models.google.protobuf.Empty =
    new google_protobuf_empty_models.google.protobuf.Empty();
  fieldMaskField: google_protobuf_field_mask_models.google.protobuf.FieldMask =
    new google_protobuf_field_mask_models.google.protobuf.FieldMask();
  sourceContextField: google_protobuf_source_context_models.google.protobuf.SourceContext =
    new google_protobuf_source_context_models.google.protobuf.SourceContext();
  structField: google_protobuf_struct_models.google.protobuf.Struct =
    new google_protobuf_struct_models.google.protobuf.Struct();
  timestampField: google_protobuf_timestamp_models.google.protobuf.Timestamp =
    new google_protobuf_timestamp_models.google.protobuf.Timestamp();
  typeField: google_protobuf_type_models.google.protobuf.Type =
    new google_protobuf_type_models.google.protobuf.Type();
  doubleField: google_protobuf_wrappers_models.google.protobuf.DoubleValue =
    new google_protobuf_wrappers_models.google.protobuf.DoubleValue();
  floatField: google_protobuf_wrappers_models.google.protobuf.FloatValue =
    new google_protobuf_wrappers_models.google.protobuf.FloatValue();
  int64Field: google_protobuf_wrappers_models.google.protobuf.Int64Value =
    new google_protobuf_wrappers_models.google.protobuf.Int64Value();
  uint64Field: google_protobuf_wrappers_models.google.protobuf.UInt64Value =
    new google_protobuf_wrappers_models.google.protobuf.UInt64Value();
  int32Field: google_protobuf_wrappers_models.google.protobuf.Int32Value =
    new google_protobuf_wrappers_models.google.protobuf.Int32Value();
  uint32Field: google_protobuf_wrappers_models.google.protobuf.UInt32Value =
    new google_protobuf_wrappers_models.google.protobuf.UInt32Value();
  boolField: google_protobuf_wrappers_models.google.protobuf.BoolValue =
    new google_protobuf_wrappers_models.google.protobuf.BoolValue();
  stringField: google_protobuf_wrappers_models.google.protobuf.StringValue =
    new google_protobuf_wrappers_models.google.protobuf.StringValue();
  bytesField: google_protobuf_wrappers_models.google.protobuf.BytesValue =
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
    return RepeatedWellKnownTypes.fields;
  }

  constructor(obj?: RepeatedWellKnownTypes) {
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

  public static encode(m: RepeatedWellKnownTypes, w: pjs.Writer): pjs.Writer {
    // google.protobuf.Any any_field = 1
    if (m.anyField !== new google_protobuf_any_models.google.protobuf.Any()) {
      w.uint32(10);
      google_protobuf_any_models.google.protobuf.Any.encode(
        m.anyField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Api api_field = 2
    if (m.apiField !== new google_protobuf_api_models.google.protobuf.Api()) {
      w.uint32(18);
      google_protobuf_api_models.google.protobuf.Api.encode(
        m.apiField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Duration duration_field = 3
    if (
      m.durationField !==
      new google_protobuf_duration_models.google.protobuf.Duration()
    ) {
      w.uint32(26);
      google_protobuf_duration_models.google.protobuf.Duration.encode(
        m.durationField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Empty empty_field = 4
    if (
      m.emptyField !== new google_protobuf_empty_models.google.protobuf.Empty()
    ) {
      w.uint32(34);
      google_protobuf_empty_models.google.protobuf.Empty.encode(
        m.emptyField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.FieldMask field_mask_field = 5
    if (
      m.fieldMaskField !==
      new google_protobuf_field_mask_models.google.protobuf.FieldMask()
    ) {
      w.uint32(42);
      google_protobuf_field_mask_models.google.protobuf.FieldMask.encode(
        m.fieldMaskField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.SourceContext source_context_field = 6
    if (
      m.sourceContextField !==
      new google_protobuf_source_context_models.google.protobuf.SourceContext()
    ) {
      w.uint32(50);
      google_protobuf_source_context_models.google.protobuf.SourceContext.encode(
        m.sourceContextField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Struct struct_field = 7
    if (
      m.structField !==
      new google_protobuf_struct_models.google.protobuf.Struct()
    ) {
      w.uint32(58);
      google_protobuf_struct_models.google.protobuf.Struct.encode(
        m.structField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Timestamp timestamp_field = 8
    if (
      m.timestampField !==
      new google_protobuf_timestamp_models.google.protobuf.Timestamp()
    ) {
      w.uint32(66);
      google_protobuf_timestamp_models.google.protobuf.Timestamp.encode(
        m.timestampField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Type type_field = 9
    if (
      m.typeField !== new google_protobuf_type_models.google.protobuf.Type()
    ) {
      w.uint32(74);
      google_protobuf_type_models.google.protobuf.Type.encode(
        m.typeField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.DoubleValue double_field = 10
    if (
      m.doubleField !==
      new google_protobuf_wrappers_models.google.protobuf.DoubleValue()
    ) {
      w.uint32(82);
      google_protobuf_wrappers_models.google.protobuf.DoubleValue.encode(
        m.doubleField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.FloatValue float_field = 11
    if (
      m.floatField !==
      new google_protobuf_wrappers_models.google.protobuf.FloatValue()
    ) {
      w.uint32(90);
      google_protobuf_wrappers_models.google.protobuf.FloatValue.encode(
        m.floatField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Int64Value int64_field = 12
    if (
      m.int64Field !==
      new google_protobuf_wrappers_models.google.protobuf.Int64Value()
    ) {
      w.uint32(98);
      google_protobuf_wrappers_models.google.protobuf.Int64Value.encode(
        m.int64Field,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.UInt64Value uint64_field = 13
    if (
      m.uint64Field !==
      new google_protobuf_wrappers_models.google.protobuf.UInt64Value()
    ) {
      w.uint32(106);
      google_protobuf_wrappers_models.google.protobuf.UInt64Value.encode(
        m.uint64Field,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.Int32Value int32_field = 14
    if (
      m.int32Field !==
      new google_protobuf_wrappers_models.google.protobuf.Int32Value()
    ) {
      w.uint32(114);
      google_protobuf_wrappers_models.google.protobuf.Int32Value.encode(
        m.int32Field,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.UInt32Value uint32_field = 15
    if (
      m.uint32Field !==
      new google_protobuf_wrappers_models.google.protobuf.UInt32Value()
    ) {
      w.uint32(122);
      google_protobuf_wrappers_models.google.protobuf.UInt32Value.encode(
        m.uint32Field,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.BoolValue bool_field = 16
    if (
      m.boolField !==
      new google_protobuf_wrappers_models.google.protobuf.BoolValue()
    ) {
      w.uint32(130);
      google_protobuf_wrappers_models.google.protobuf.BoolValue.encode(
        m.boolField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.StringValue string_field = 17
    if (
      m.stringField !==
      new google_protobuf_wrappers_models.google.protobuf.StringValue()
    ) {
      w.uint32(138);
      google_protobuf_wrappers_models.google.protobuf.StringValue.encode(
        m.stringField,
        w.fork()
      ).ldelim();
    }

    // google.protobuf.BytesValue bytes_field = 18
    if (
      m.bytesField !==
      new google_protobuf_wrappers_models.google.protobuf.BytesValue()
    ) {
      w.uint32(146);
      google_protobuf_wrappers_models.google.protobuf.BytesValue.encode(
        m.bytesField,
        w.fork()
      ).ldelim();
    }

    return w;
  }

  public static decode(
    m: RepeatedWellKnownTypes,
    r: pjs.Reader,
    length: number
  ): RepeatedWellKnownTypes {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // google.protobuf.Any any_field = 1
        case 10:
          m.anyField = google_protobuf_any_models.google.protobuf.Any.decode(
            undefined,
            r,
            r.uint32()
          );
          continue;

        // google.protobuf.Api api_field = 2
        case 18:
          m.apiField = google_protobuf_api_models.google.protobuf.Api.decode(
            undefined,
            r,
            r.uint32()
          );
          continue;

        // google.protobuf.Duration duration_field = 3
        case 26:
          m.durationField =
            google_protobuf_duration_models.google.protobuf.Duration.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Empty empty_field = 4
        case 34:
          m.emptyField =
            google_protobuf_empty_models.google.protobuf.Empty.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.FieldMask field_mask_field = 5
        case 42:
          m.fieldMaskField =
            google_protobuf_field_mask_models.google.protobuf.FieldMask.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.SourceContext source_context_field = 6
        case 50:
          m.sourceContextField =
            google_protobuf_source_context_models.google.protobuf.SourceContext.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Struct struct_field = 7
        case 58:
          m.structField =
            google_protobuf_struct_models.google.protobuf.Struct.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Timestamp timestamp_field = 8
        case 66:
          m.timestampField =
            google_protobuf_timestamp_models.google.protobuf.Timestamp.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Type type_field = 9
        case 74:
          m.typeField = google_protobuf_type_models.google.protobuf.Type.decode(
            undefined,
            r,
            r.uint32()
          );
          continue;

        // google.protobuf.DoubleValue double_field = 10
        case 82:
          m.doubleField =
            google_protobuf_wrappers_models.google.protobuf.DoubleValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.FloatValue float_field = 11
        case 90:
          m.floatField =
            google_protobuf_wrappers_models.google.protobuf.FloatValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Int64Value int64_field = 12
        case 98:
          m.int64Field =
            google_protobuf_wrappers_models.google.protobuf.Int64Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.UInt64Value uint64_field = 13
        case 106:
          m.uint64Field =
            google_protobuf_wrappers_models.google.protobuf.UInt64Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.Int32Value int32_field = 14
        case 114:
          m.int32Field =
            google_protobuf_wrappers_models.google.protobuf.Int32Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.UInt32Value uint32_field = 15
        case 122:
          m.uint32Field =
            google_protobuf_wrappers_models.google.protobuf.UInt32Value.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.BoolValue bool_field = 16
        case 130:
          m.boolField =
            google_protobuf_wrappers_models.google.protobuf.BoolValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.StringValue string_field = 17
        case 138:
          m.stringField =
            google_protobuf_wrappers_models.google.protobuf.StringValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;

        // google.protobuf.BytesValue bytes_field = 18
        case 146:
          m.bytesField =
            google_protobuf_wrappers_models.google.protobuf.BytesValue.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: RepeatedWellKnownTypes): RepeatedWellKnownTypesJSON {
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
    m: RepeatedWellKnownTypes,
    obj: RepeatedWellKnownTypesJSON
  ): RepeatedWellKnownTypes {
    m.anyField = new google_protobuf_any_models.google.protobuf.Any().fromJSON(
      obj.anyField
    );
    m.apiField = new google_protobuf_api_models.google.protobuf.Api().fromJSON(
      obj.apiField
    );
    m.durationField =
      new google_protobuf_duration_models.google.protobuf.Duration().fromJSON(
        obj.durationField
      );
    m.emptyField =
      new google_protobuf_empty_models.google.protobuf.Empty().fromJSON(
        obj.emptyField
      );
    m.fieldMaskField =
      new google_protobuf_field_mask_models.google.protobuf.FieldMask().fromJSON(
        obj.fieldMaskField
      );
    m.sourceContextField =
      new google_protobuf_source_context_models.google.protobuf.SourceContext().fromJSON(
        obj.sourceContextField
      );
    m.structField =
      new google_protobuf_struct_models.google.protobuf.Struct().fromJSON(
        obj.structField
      );
    m.timestampField =
      new google_protobuf_timestamp_models.google.protobuf.Timestamp().fromJSON(
        obj.timestampField
      );
    m.typeField =
      new google_protobuf_type_models.google.protobuf.Type().fromJSON(
        obj.typeField
      );
    m.doubleField =
      new google_protobuf_wrappers_models.google.protobuf.DoubleValue().fromJSON(
        obj.doubleField
      );
    m.floatField =
      new google_protobuf_wrappers_models.google.protobuf.FloatValue().fromJSON(
        obj.floatField
      );
    m.int64Field =
      new google_protobuf_wrappers_models.google.protobuf.Int64Value().fromJSON(
        obj.int64Field
      );
    m.uint64Field =
      new google_protobuf_wrappers_models.google.protobuf.UInt64Value().fromJSON(
        obj.uint64Field
      );
    m.int32Field =
      new google_protobuf_wrappers_models.google.protobuf.Int32Value().fromJSON(
        obj.int32Field
      );
    m.uint32Field =
      new google_protobuf_wrappers_models.google.protobuf.UInt32Value().fromJSON(
        obj.uint32Field
      );
    m.boolField =
      new google_protobuf_wrappers_models.google.protobuf.BoolValue().fromJSON(
        obj.boolField
      );
    m.stringField =
      new google_protobuf_wrappers_models.google.protobuf.StringValue().fromJSON(
        obj.stringField
      );
    m.bytesField =
      new google_protobuf_wrappers_models.google.protobuf.BytesValue().fromJSON(
        obj.bytesField
      );

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return RepeatedWellKnownTypes.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): RepeatedWellKnownTypes {
    const r = new pjs.Reader(buffer);
    return RepeatedWellKnownTypes.decode(this, r, r.len);
  }

  toJSON(): RepeatedWellKnownTypesJSON {
    return RepeatedWellKnownTypes.toJSON(this);
  }

  fromJSON(obj: RepeatedWellKnownTypesJSON): RepeatedWellKnownTypes {
    return RepeatedWellKnownTypes.fromJSON(this, obj);
  }

  clone(): RepeatedWellKnownTypes {
    return new RepeatedWellKnownTypes(this);
  }
}

export interface OneofWellKnownTypesJSON {
  // NOT IMPLEMENTED
}

export class OneofWellKnownTypes {
  // NOT IMPLEMENTED

  public static fields = ["oneof_field"];

  public get fields() {
    return OneofWellKnownTypes.fields;
  }

  constructor(obj?: OneofWellKnownTypes) {
    if (!obj) return;

    if (obj.oneof_field !== undefined) {
      // NOT IMPLEMENTED
    }
  }

  public static encode(m: OneofWellKnownTypes, w: pjs.Writer): pjs.Writer {
    // NOT IMPLEMENTED

    return w;
  }

  public static decode(
    m: OneofWellKnownTypes,
    r: pjs.Reader,
    length: number
  ): OneofWellKnownTypes {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (
        tag

        // NOT IMPLEMENTED
      ) {
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: OneofWellKnownTypes): OneofWellKnownTypesJSON {
    return {
      // NOT IMPLEMENTED
    };
  }

  public static fromJSON(
    m: OneofWellKnownTypes,
    obj: OneofWellKnownTypesJSON
  ): OneofWellKnownTypes {
    // NOT IMPLEMENTED

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return OneofWellKnownTypes.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): OneofWellKnownTypes {
    const r = new pjs.Reader(buffer);
    return OneofWellKnownTypes.decode(this, r, r.len);
  }

  toJSON(): OneofWellKnownTypesJSON {
    return OneofWellKnownTypes.toJSON(this);
  }

  fromJSON(obj: OneofWellKnownTypesJSON): OneofWellKnownTypes {
    return OneofWellKnownTypes.fromJSON(this, obj);
  }

  clone(): OneofWellKnownTypes {
    return new OneofWellKnownTypes(this);
  }
}

export interface MapWellKnownTypesJSON {
  anyField: Record<number, google_protobuf_any_models.google.protobuf.AnyJSON>;
  apiField: Record<number, google_protobuf_api_models.google.protobuf.ApiJSON>;
  durationField: Record<
    number,
    google_protobuf_duration_models.google.protobuf.DurationJSON
  >;
  emptyField: Record<
    number,
    google_protobuf_empty_models.google.protobuf.EmptyJSON
  >;
  fieldMaskField: Record<
    number,
    google_protobuf_field_mask_models.google.protobuf.FieldMaskJSON
  >;
  sourceContextField: Record<
    number,
    google_protobuf_source_context_models.google.protobuf.SourceContextJSON
  >;
  structField: Record<
    number,
    google_protobuf_struct_models.google.protobuf.StructJSON
  >;
  timestampField: Record<
    number,
    google_protobuf_timestamp_models.google.protobuf.TimestampJSON
  >;
  typeField: Record<
    number,
    google_protobuf_type_models.google.protobuf.TypeJSON
  >;
  doubleField: Record<
    number,
    google_protobuf_wrappers_models.google.protobuf.DoubleValueJSON
  >;
  floatField: Record<
    number,
    google_protobuf_wrappers_models.google.protobuf.FloatValueJSON
  >;
  int64Field: Record<
    number,
    google_protobuf_wrappers_models.google.protobuf.Int64ValueJSON
  >;
  uint64Field: Record<
    number,
    google_protobuf_wrappers_models.google.protobuf.UInt64ValueJSON
  >;
  int32Field: Record<
    number,
    google_protobuf_wrappers_models.google.protobuf.Int32ValueJSON
  >;
  uint32Field: Record<
    number,
    google_protobuf_wrappers_models.google.protobuf.UInt32ValueJSON
  >;
  boolField: Record<
    number,
    google_protobuf_wrappers_models.google.protobuf.BoolValueJSON
  >;
  stringField: Record<
    number,
    google_protobuf_wrappers_models.google.protobuf.StringValueJSON
  >;
  bytesField: Record<
    number,
    google_protobuf_wrappers_models.google.protobuf.BytesValueJSON
  >;
}

export class MapWellKnownTypes {
  anyField: Map<number, google_protobuf_any_models.google.protobuf.Any> =
    new Map();
  apiField: Map<number, google_protobuf_api_models.google.protobuf.Api> =
    new Map();
  durationField: Map<
    number,
    google_protobuf_duration_models.google.protobuf.Duration
  > = new Map();
  emptyField: Map<number, google_protobuf_empty_models.google.protobuf.Empty> =
    new Map();
  fieldMaskField: Map<
    number,
    google_protobuf_field_mask_models.google.protobuf.FieldMask
  > = new Map();
  sourceContextField: Map<
    number,
    google_protobuf_source_context_models.google.protobuf.SourceContext
  > = new Map();
  structField: Map<
    number,
    google_protobuf_struct_models.google.protobuf.Struct
  > = new Map();
  timestampField: Map<
    number,
    google_protobuf_timestamp_models.google.protobuf.Timestamp
  > = new Map();
  typeField: Map<number, google_protobuf_type_models.google.protobuf.Type> =
    new Map();
  doubleField: Map<
    number,
    google_protobuf_wrappers_models.google.protobuf.DoubleValue
  > = new Map();
  floatField: Map<
    number,
    google_protobuf_wrappers_models.google.protobuf.FloatValue
  > = new Map();
  int64Field: Map<
    number,
    google_protobuf_wrappers_models.google.protobuf.Int64Value
  > = new Map();
  uint64Field: Map<
    number,
    google_protobuf_wrappers_models.google.protobuf.UInt64Value
  > = new Map();
  int32Field: Map<
    number,
    google_protobuf_wrappers_models.google.protobuf.Int32Value
  > = new Map();
  uint32Field: Map<
    number,
    google_protobuf_wrappers_models.google.protobuf.UInt32Value
  > = new Map();
  boolField: Map<
    number,
    google_protobuf_wrappers_models.google.protobuf.BoolValue
  > = new Map();
  stringField: Map<
    number,
    google_protobuf_wrappers_models.google.protobuf.StringValue
  > = new Map();
  bytesField: Map<
    number,
    google_protobuf_wrappers_models.google.protobuf.BytesValue
  > = new Map();

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

  // map<int32, google.protobuf.Any> any_field = 1
  public static encodeAnyField(
    m: Map<number, google_protobuf_any_models.google.protobuf.Any>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(10);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_any_models.google.protobuf.Any.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.Api> api_field = 2
  public static encodeApiField(
    m: Map<number, google_protobuf_api_models.google.protobuf.Api>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(18);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_api_models.google.protobuf.Api.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.Duration> duration_field = 3
  public static encodeDurationField(
    m: Map<number, google_protobuf_duration_models.google.protobuf.Duration>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(26);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_duration_models.google.protobuf.Duration.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.Empty> empty_field = 4
  public static encodeEmptyField(
    m: Map<number, google_protobuf_empty_models.google.protobuf.Empty>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(34);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_empty_models.google.protobuf.Empty.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.FieldMask> field_mask_field = 5
  public static encodeFieldMaskField(
    m: Map<number, google_protobuf_field_mask_models.google.protobuf.FieldMask>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(42);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_field_mask_models.google.protobuf.FieldMask.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.SourceContext> source_context_field = 6
  public static encodeSourceContextField(
    m: Map<
      number,
      google_protobuf_source_context_models.google.protobuf.SourceContext
    >,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(50);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_source_context_models.google.protobuf.SourceContext.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.Struct> struct_field = 7
  public static encodeStructField(
    m: Map<number, google_protobuf_struct_models.google.protobuf.Struct>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(58);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_struct_models.google.protobuf.Struct.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.Timestamp> timestamp_field = 8
  public static encodeTimestampField(
    m: Map<number, google_protobuf_timestamp_models.google.protobuf.Timestamp>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(66);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_timestamp_models.google.protobuf.Timestamp.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.Type> type_field = 9
  public static encodeTypeField(
    m: Map<number, google_protobuf_type_models.google.protobuf.Type>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(74);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_type_models.google.protobuf.Type.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.DoubleValue> double_field = 10
  public static encodeDoubleField(
    m: Map<number, google_protobuf_wrappers_models.google.protobuf.DoubleValue>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(82);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_wrappers_models.google.protobuf.DoubleValue.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.FloatValue> float_field = 11
  public static encodeFloatField(
    m: Map<number, google_protobuf_wrappers_models.google.protobuf.FloatValue>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(90);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_wrappers_models.google.protobuf.FloatValue.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.Int64Value> int64_field = 12
  public static encodeInt64Field(
    m: Map<number, google_protobuf_wrappers_models.google.protobuf.Int64Value>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(98);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_wrappers_models.google.protobuf.Int64Value.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.UInt64Value> uint64_field = 13
  public static encodeUint64Field(
    m: Map<number, google_protobuf_wrappers_models.google.protobuf.UInt64Value>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(106);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_wrappers_models.google.protobuf.UInt64Value.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.Int32Value> int32_field = 14
  public static encodeInt32Field(
    m: Map<number, google_protobuf_wrappers_models.google.protobuf.Int32Value>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(114);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_wrappers_models.google.protobuf.Int32Value.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.UInt32Value> uint32_field = 15
  public static encodeUint32Field(
    m: Map<number, google_protobuf_wrappers_models.google.protobuf.UInt32Value>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(122);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_wrappers_models.google.protobuf.UInt32Value.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.BoolValue> bool_field = 16
  public static encodeBoolField(
    m: Map<number, google_protobuf_wrappers_models.google.protobuf.BoolValue>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(130);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_wrappers_models.google.protobuf.BoolValue.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.StringValue> string_field = 17
  public static encodeStringField(
    m: Map<number, google_protobuf_wrappers_models.google.protobuf.StringValue>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(138);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_wrappers_models.google.protobuf.StringValue.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.BytesValue> bytes_field = 18
  public static encodeBytesField(
    m: Map<number, google_protobuf_wrappers_models.google.protobuf.BytesValue>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(146);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      google_protobuf_wrappers_models.google.protobuf.BytesValue.encode(
        val,
        w2.fork()
      ).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, google.protobuf.Any> any_field = 1
  public static decodeAnyField(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_any_models.google.protobuf.Any] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v = google_protobuf_any_models.google.protobuf.Any.decode(
            new google_protobuf_any_models.google.protobuf.Any(),
            r,
            r.uint32()
          );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.Api> api_field = 2
  public static decodeApiField(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_api_models.google.protobuf.Api] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v = google_protobuf_api_models.google.protobuf.Api.decode(
            new google_protobuf_api_models.google.protobuf.Api(),
            r,
            r.uint32()
          );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.Duration> duration_field = 3
  public static decodeDurationField(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_duration_models.google.protobuf.Duration] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v = google_protobuf_duration_models.google.protobuf.Duration.decode(
            new google_protobuf_duration_models.google.protobuf.Duration(),
            r,
            r.uint32()
          );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.Empty> empty_field = 4
  public static decodeEmptyField(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_empty_models.google.protobuf.Empty] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v = google_protobuf_empty_models.google.protobuf.Empty.decode(
            new google_protobuf_empty_models.google.protobuf.Empty(),
            r,
            r.uint32()
          );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.FieldMask> field_mask_field = 5
  public static decodeFieldMaskField(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_field_mask_models.google.protobuf.FieldMask] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v =
            google_protobuf_field_mask_models.google.protobuf.FieldMask.decode(
              new google_protobuf_field_mask_models.google.protobuf.FieldMask(),
              r,
              r.uint32()
            );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.SourceContext> source_context_field = 6
  public static decodeSourceContextField(
    r: pjs.Reader,
    length: number
  ): [
    number,
    google_protobuf_source_context_models.google.protobuf.SourceContext
  ] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v =
            google_protobuf_source_context_models.google.protobuf.SourceContext.decode(
              new google_protobuf_source_context_models.google.protobuf.SourceContext(),
              r,
              r.uint32()
            );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.Struct> struct_field = 7
  public static decodeStructField(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_struct_models.google.protobuf.Struct] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v = google_protobuf_struct_models.google.protobuf.Struct.decode(
            new google_protobuf_struct_models.google.protobuf.Struct(),
            r,
            r.uint32()
          );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.Timestamp> timestamp_field = 8
  public static decodeTimestampField(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_timestamp_models.google.protobuf.Timestamp] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v = google_protobuf_timestamp_models.google.protobuf.Timestamp.decode(
            new google_protobuf_timestamp_models.google.protobuf.Timestamp(),
            r,
            r.uint32()
          );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.Type> type_field = 9
  public static decodeTypeField(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_type_models.google.protobuf.Type] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v = google_protobuf_type_models.google.protobuf.Type.decode(
            new google_protobuf_type_models.google.protobuf.Type(),
            r,
            r.uint32()
          );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.DoubleValue> double_field = 10
  public static decodeDoubleField(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_wrappers_models.google.protobuf.DoubleValue] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v =
            google_protobuf_wrappers_models.google.protobuf.DoubleValue.decode(
              new google_protobuf_wrappers_models.google.protobuf.DoubleValue(),
              r,
              r.uint32()
            );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.FloatValue> float_field = 11
  public static decodeFloatField(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_wrappers_models.google.protobuf.FloatValue] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v = google_protobuf_wrappers_models.google.protobuf.FloatValue.decode(
            new google_protobuf_wrappers_models.google.protobuf.FloatValue(),
            r,
            r.uint32()
          );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.Int64Value> int64_field = 12
  public static decodeInt64Field(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_wrappers_models.google.protobuf.Int64Value] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v = google_protobuf_wrappers_models.google.protobuf.Int64Value.decode(
            new google_protobuf_wrappers_models.google.protobuf.Int64Value(),
            r,
            r.uint32()
          );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.UInt64Value> uint64_field = 13
  public static decodeUint64Field(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_wrappers_models.google.protobuf.UInt64Value] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v =
            google_protobuf_wrappers_models.google.protobuf.UInt64Value.decode(
              new google_protobuf_wrappers_models.google.protobuf.UInt64Value(),
              r,
              r.uint32()
            );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.Int32Value> int32_field = 14
  public static decodeInt32Field(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_wrappers_models.google.protobuf.Int32Value] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v = google_protobuf_wrappers_models.google.protobuf.Int32Value.decode(
            new google_protobuf_wrappers_models.google.protobuf.Int32Value(),
            r,
            r.uint32()
          );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.UInt32Value> uint32_field = 15
  public static decodeUint32Field(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_wrappers_models.google.protobuf.UInt32Value] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v =
            google_protobuf_wrappers_models.google.protobuf.UInt32Value.decode(
              new google_protobuf_wrappers_models.google.protobuf.UInt32Value(),
              r,
              r.uint32()
            );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.BoolValue> bool_field = 16
  public static decodeBoolField(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_wrappers_models.google.protobuf.BoolValue] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v = google_protobuf_wrappers_models.google.protobuf.BoolValue.decode(
            new google_protobuf_wrappers_models.google.protobuf.BoolValue(),
            r,
            r.uint32()
          );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.StringValue> string_field = 17
  public static decodeStringField(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_wrappers_models.google.protobuf.StringValue] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v =
            google_protobuf_wrappers_models.google.protobuf.StringValue.decode(
              new google_protobuf_wrappers_models.google.protobuf.StringValue(),
              r,
              r.uint32()
            );
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, google.protobuf.BytesValue> bytes_field = 18
  public static decodeBytesField(
    r: pjs.Reader,
    length: number
  ): [number, google_protobuf_wrappers_models.google.protobuf.BytesValue] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v = google_protobuf_wrappers_models.google.protobuf.BytesValue.decode(
            new google_protobuf_wrappers_models.google.protobuf.BytesValue(),
            r,
            r.uint32()
          );
          continue;
      }
    }

    return [k, v];
  }

  public get fields() {
    return MapWellKnownTypes.fields;
  }

  constructor(obj?: MapWellKnownTypes) {
    if (!obj) return;

    if (obj.anyField !== undefined) {
      const entries = Array.from(obj.anyField.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.anyField = new Map(copy);
    }
    if (obj.apiField !== undefined) {
      const entries = Array.from(obj.apiField.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.apiField = new Map(copy);
    }
    if (obj.durationField !== undefined) {
      const entries = Array.from(obj.durationField.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.durationField = new Map(copy);
    }
    if (obj.emptyField !== undefined) {
      const entries = Array.from(obj.emptyField.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.emptyField = new Map(copy);
    }
    if (obj.fieldMaskField !== undefined) {
      const entries = Array.from(obj.fieldMaskField.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.fieldMaskField = new Map(copy);
    }
    if (obj.sourceContextField !== undefined) {
      const entries = Array.from(obj.sourceContextField.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.sourceContextField = new Map(copy);
    }
    if (obj.structField !== undefined) {
      const entries = Array.from(obj.structField.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.structField = new Map(copy);
    }
    if (obj.timestampField !== undefined) {
      const entries = Array.from(obj.timestampField.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.timestampField = new Map(copy);
    }
    if (obj.typeField !== undefined) {
      const entries = Array.from(obj.typeField.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.typeField = new Map(copy);
    }
    if (obj.doubleField !== undefined) {
      const entries = Array.from(obj.doubleField.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.doubleField = new Map(copy);
    }
    if (obj.floatField !== undefined) {
      const entries = Array.from(obj.floatField.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.floatField = new Map(copy);
    }
    if (obj.int64Field !== undefined) {
      const entries = Array.from(obj.int64Field.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.int64Field = new Map(copy);
    }
    if (obj.uint64Field !== undefined) {
      const entries = Array.from(obj.uint64Field.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.uint64Field = new Map(copy);
    }
    if (obj.int32Field !== undefined) {
      const entries = Array.from(obj.int32Field.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.int32Field = new Map(copy);
    }
    if (obj.uint32Field !== undefined) {
      const entries = Array.from(obj.uint32Field.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.uint32Field = new Map(copy);
    }
    if (obj.boolField !== undefined) {
      const entries = Array.from(obj.boolField.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.boolField = new Map(copy);
    }
    if (obj.stringField !== undefined) {
      const entries = Array.from(obj.stringField.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.stringField = new Map(copy);
    }
    if (obj.bytesField !== undefined) {
      const entries = Array.from(obj.bytesField.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.bytesField = new Map(copy);
    }
  }

  public static encode(m: MapWellKnownTypes, w: pjs.Writer): pjs.Writer {
    // map<int32, google.protobuf.Any> any_field = 1
    MapWellKnownTypes.encodeAnyField(m.anyField, w);

    // map<int32, google.protobuf.Api> api_field = 2
    MapWellKnownTypes.encodeApiField(m.apiField, w);

    // map<int32, google.protobuf.Duration> duration_field = 3
    MapWellKnownTypes.encodeDurationField(m.durationField, w);

    // map<int32, google.protobuf.Empty> empty_field = 4
    MapWellKnownTypes.encodeEmptyField(m.emptyField, w);

    // map<int32, google.protobuf.FieldMask> field_mask_field = 5
    MapWellKnownTypes.encodeFieldMaskField(m.fieldMaskField, w);

    // map<int32, google.protobuf.SourceContext> source_context_field = 6
    MapWellKnownTypes.encodeSourceContextField(m.sourceContextField, w);

    // map<int32, google.protobuf.Struct> struct_field = 7
    MapWellKnownTypes.encodeStructField(m.structField, w);

    // map<int32, google.protobuf.Timestamp> timestamp_field = 8
    MapWellKnownTypes.encodeTimestampField(m.timestampField, w);

    // map<int32, google.protobuf.Type> type_field = 9
    MapWellKnownTypes.encodeTypeField(m.typeField, w);

    // map<int32, google.protobuf.DoubleValue> double_field = 10
    MapWellKnownTypes.encodeDoubleField(m.doubleField, w);

    // map<int32, google.protobuf.FloatValue> float_field = 11
    MapWellKnownTypes.encodeFloatField(m.floatField, w);

    // map<int32, google.protobuf.Int64Value> int64_field = 12
    MapWellKnownTypes.encodeInt64Field(m.int64Field, w);

    // map<int32, google.protobuf.UInt64Value> uint64_field = 13
    MapWellKnownTypes.encodeUint64Field(m.uint64Field, w);

    // map<int32, google.protobuf.Int32Value> int32_field = 14
    MapWellKnownTypes.encodeInt32Field(m.int32Field, w);

    // map<int32, google.protobuf.UInt32Value> uint32_field = 15
    MapWellKnownTypes.encodeUint32Field(m.uint32Field, w);

    // map<int32, google.protobuf.BoolValue> bool_field = 16
    MapWellKnownTypes.encodeBoolField(m.boolField, w);

    // map<int32, google.protobuf.StringValue> string_field = 17
    MapWellKnownTypes.encodeStringField(m.stringField, w);

    // map<int32, google.protobuf.BytesValue> bytes_field = 18
    MapWellKnownTypes.encodeBytesField(m.bytesField, w);

    return w;
  }

  public static decode(
    m: MapWellKnownTypes,
    r: pjs.Reader,
    length: number
  ): MapWellKnownTypes {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // map<int32, google.protobuf.Any> any_field = 1
        case 10:
          {
            const [k, v] = MapWellKnownTypes.decodeAnyField(r, r.uint32());
            m.anyField.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.Api> api_field = 2
        case 18:
          {
            const [k, v] = MapWellKnownTypes.decodeApiField(r, r.uint32());
            m.apiField.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.Duration> duration_field = 3
        case 26:
          {
            const [k, v] = MapWellKnownTypes.decodeDurationField(r, r.uint32());
            m.durationField.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.Empty> empty_field = 4
        case 34:
          {
            const [k, v] = MapWellKnownTypes.decodeEmptyField(r, r.uint32());
            m.emptyField.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.FieldMask> field_mask_field = 5
        case 42:
          {
            const [k, v] = MapWellKnownTypes.decodeFieldMaskField(
              r,
              r.uint32()
            );
            m.fieldMaskField.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.SourceContext> source_context_field = 6
        case 50:
          {
            const [k, v] = MapWellKnownTypes.decodeSourceContextField(
              r,
              r.uint32()
            );
            m.sourceContextField.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.Struct> struct_field = 7
        case 58:
          {
            const [k, v] = MapWellKnownTypes.decodeStructField(r, r.uint32());
            m.structField.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.Timestamp> timestamp_field = 8
        case 66:
          {
            const [k, v] = MapWellKnownTypes.decodeTimestampField(
              r,
              r.uint32()
            );
            m.timestampField.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.Type> type_field = 9
        case 74:
          {
            const [k, v] = MapWellKnownTypes.decodeTypeField(r, r.uint32());
            m.typeField.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.DoubleValue> double_field = 10
        case 82:
          {
            const [k, v] = MapWellKnownTypes.decodeDoubleField(r, r.uint32());
            m.doubleField.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.FloatValue> float_field = 11
        case 90:
          {
            const [k, v] = MapWellKnownTypes.decodeFloatField(r, r.uint32());
            m.floatField.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.Int64Value> int64_field = 12
        case 98:
          {
            const [k, v] = MapWellKnownTypes.decodeInt64Field(r, r.uint32());
            m.int64Field.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.UInt64Value> uint64_field = 13
        case 106:
          {
            const [k, v] = MapWellKnownTypes.decodeUint64Field(r, r.uint32());
            m.uint64Field.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.Int32Value> int32_field = 14
        case 114:
          {
            const [k, v] = MapWellKnownTypes.decodeInt32Field(r, r.uint32());
            m.int32Field.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.UInt32Value> uint32_field = 15
        case 122:
          {
            const [k, v] = MapWellKnownTypes.decodeUint32Field(r, r.uint32());
            m.uint32Field.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.BoolValue> bool_field = 16
        case 130:
          {
            const [k, v] = MapWellKnownTypes.decodeBoolField(r, r.uint32());
            m.boolField.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.StringValue> string_field = 17
        case 138:
          {
            const [k, v] = MapWellKnownTypes.decodeStringField(r, r.uint32());
            m.stringField.set(k, v);
          }
          continue;

        // map<int32, google.protobuf.BytesValue> bytes_field = 18
        case 146:
          {
            const [k, v] = MapWellKnownTypes.decodeBytesField(r, r.uint32());
            m.bytesField.set(k, v);
          }
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: MapWellKnownTypes): MapWellKnownTypesJSON {
    return {
      anyField: runtime.convertMapToRecord(m.anyField, (val) => val.toJSON()),
      apiField: runtime.convertMapToRecord(m.apiField, (val) => val.toJSON()),
      durationField: runtime.convertMapToRecord(m.durationField, (val) =>
        val.toJSON()
      ),
      emptyField: runtime.convertMapToRecord(m.emptyField, (val) =>
        val.toJSON()
      ),
      fieldMaskField: runtime.convertMapToRecord(m.fieldMaskField, (val) =>
        val.toJSON()
      ),
      sourceContextField: runtime.convertMapToRecord(
        m.sourceContextField,
        (val) => val.toJSON()
      ),
      structField: runtime.convertMapToRecord(m.structField, (val) =>
        val.toJSON()
      ),
      timestampField: runtime.convertMapToRecord(m.timestampField, (val) =>
        val.toJSON()
      ),
      typeField: runtime.convertMapToRecord(m.typeField, (val) => val.toJSON()),
      doubleField: runtime.convertMapToRecord(m.doubleField, (val) =>
        val.toJSON()
      ),
      floatField: runtime.convertMapToRecord(m.floatField, (val) =>
        val.toJSON()
      ),
      int64Field: runtime.convertMapToRecord(m.int64Field, (val) =>
        val.toJSON()
      ),
      uint64Field: runtime.convertMapToRecord(m.uint64Field, (val) =>
        val.toJSON()
      ),
      int32Field: runtime.convertMapToRecord(m.int32Field, (val) =>
        val.toJSON()
      ),
      uint32Field: runtime.convertMapToRecord(m.uint32Field, (val) =>
        val.toJSON()
      ),
      boolField: runtime.convertMapToRecord(m.boolField, (val) => val.toJSON()),
      stringField: runtime.convertMapToRecord(m.stringField, (val) =>
        val.toJSON()
      ),
      bytesField: runtime.convertMapToRecord(m.bytesField, (val) =>
        val.toJSON()
      ),
    };
  }

  public static fromJSON(
    m: MapWellKnownTypes,
    obj: MapWellKnownTypesJSON
  ): MapWellKnownTypes {
    m.anyField = runtime.convertRecordToMap(obj.anyField, (val) =>
      new google_protobuf_any_models.google.protobuf.Any().fromJSON(val)
    );
    m.apiField = runtime.convertRecordToMap(obj.apiField, (val) =>
      new google_protobuf_api_models.google.protobuf.Api().fromJSON(val)
    );
    m.durationField = runtime.convertRecordToMap(obj.durationField, (val) =>
      new google_protobuf_duration_models.google.protobuf.Duration().fromJSON(
        val
      )
    );
    m.emptyField = runtime.convertRecordToMap(obj.emptyField, (val) =>
      new google_protobuf_empty_models.google.protobuf.Empty().fromJSON(val)
    );
    m.fieldMaskField = runtime.convertRecordToMap(obj.fieldMaskField, (val) =>
      new google_protobuf_field_mask_models.google.protobuf.FieldMask().fromJSON(
        val
      )
    );
    m.sourceContextField = runtime.convertRecordToMap(
      obj.sourceContextField,
      (val) =>
        new google_protobuf_source_context_models.google.protobuf.SourceContext().fromJSON(
          val
        )
    );
    m.structField = runtime.convertRecordToMap(obj.structField, (val) =>
      new google_protobuf_struct_models.google.protobuf.Struct().fromJSON(val)
    );
    m.timestampField = runtime.convertRecordToMap(obj.timestampField, (val) =>
      new google_protobuf_timestamp_models.google.protobuf.Timestamp().fromJSON(
        val
      )
    );
    m.typeField = runtime.convertRecordToMap(obj.typeField, (val) =>
      new google_protobuf_type_models.google.protobuf.Type().fromJSON(val)
    );
    m.doubleField = runtime.convertRecordToMap(obj.doubleField, (val) =>
      new google_protobuf_wrappers_models.google.protobuf.DoubleValue().fromJSON(
        val
      )
    );
    m.floatField = runtime.convertRecordToMap(obj.floatField, (val) =>
      new google_protobuf_wrappers_models.google.protobuf.FloatValue().fromJSON(
        val
      )
    );
    m.int64Field = runtime.convertRecordToMap(obj.int64Field, (val) =>
      new google_protobuf_wrappers_models.google.protobuf.Int64Value().fromJSON(
        val
      )
    );
    m.uint64Field = runtime.convertRecordToMap(obj.uint64Field, (val) =>
      new google_protobuf_wrappers_models.google.protobuf.UInt64Value().fromJSON(
        val
      )
    );
    m.int32Field = runtime.convertRecordToMap(obj.int32Field, (val) =>
      new google_protobuf_wrappers_models.google.protobuf.Int32Value().fromJSON(
        val
      )
    );
    m.uint32Field = runtime.convertRecordToMap(obj.uint32Field, (val) =>
      new google_protobuf_wrappers_models.google.protobuf.UInt32Value().fromJSON(
        val
      )
    );
    m.boolField = runtime.convertRecordToMap(obj.boolField, (val) =>
      new google_protobuf_wrappers_models.google.protobuf.BoolValue().fromJSON(
        val
      )
    );
    m.stringField = runtime.convertRecordToMap(obj.stringField, (val) =>
      new google_protobuf_wrappers_models.google.protobuf.StringValue().fromJSON(
        val
      )
    );
    m.bytesField = runtime.convertRecordToMap(obj.bytesField, (val) =>
      new google_protobuf_wrappers_models.google.protobuf.BytesValue().fromJSON(
        val
      )
    );

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return MapWellKnownTypes.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): MapWellKnownTypes {
    const r = new pjs.Reader(buffer);
    return MapWellKnownTypes.decode(this, r, r.len);
  }

  toJSON(): MapWellKnownTypesJSON {
    return MapWellKnownTypes.toJSON(this);
  }

  fromJSON(obj: MapWellKnownTypesJSON): MapWellKnownTypes {
    return MapWellKnownTypes.fromJSON(this, obj);
  }

  clone(): MapWellKnownTypes {
    return new MapWellKnownTypes(this);
  }
}
