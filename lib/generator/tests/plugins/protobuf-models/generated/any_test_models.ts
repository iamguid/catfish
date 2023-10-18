// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest
// file: any_test.proto

import * as google_protobuf_any_models from "google/protobuf/any_models";

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export interface TestAnyJSON {
  int32Value: number;
  anyValue: google_protobuf_any_models.google.protobuf.AnyJSON;
  repeatedAnyValue: google_protobuf_any_models.google.protobuf.AnyJSON;
  text: string;
}

export class TestAny {
  int32Value: number = 0;
  anyValue: google_protobuf_any_models.google.protobuf.Any =
    new google_protobuf_any_models.google.protobuf.Any();
  repeatedAnyValue: google_protobuf_any_models.google.protobuf.Any = [];
  text: string = "";

  public static fields = ["int32Value", "anyValue", "repeatedAnyValue", "text"];

  public get fields() {
    return TestAny.fields;
  }

  constructor(obj?: TestAny) {
    if (!obj) return;

    if (obj.int32Value !== undefined) {
      this.int32Value = obj.int32Value;
    }
    if (obj.anyValue !== undefined) {
      this.anyValue = obj.anyValue;
    }
    if (obj.repeatedAnyValue !== undefined) {
      this.repeatedAnyValue = obj.repeatedAnyValue;
    }
    if (obj.text !== undefined) {
      this.text = obj.text;
    }
  }

  public static encode(m: TestAny, w: pjs.Writer): pjs.Writer {
    // int32 int32_value = 1
    if (m.int32Value !== 0) {
      w.uint32(8);
      w.int32(m.int32Value);
    }

    // google.protobuf.Any any_value = 2
    if (m.anyValue !== new google_protobuf_any_models.google.protobuf.Any()) {
      w.uint32(18);
      google_protobuf_any_models.google.protobuf.Any.encode(m.anyValue, w);
    }

    // google.protobuf.Any repeated_any_value = 3
    if (m.repeatedAnyValue !== []) {
      w.uint32(26);
      google_protobuf_any_models.google.protobuf.Any.encode(
        m.repeatedAnyValue,
        w
      );
    }

    // string text = 4
    if (m.text !== "") {
      w.uint32(34);
      w.string(m.text);
    }

    return w;
  }

  public static decode(m: TestAny, r: pjs.Reader, l: number): pjs.Reader {
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 int32_value = 1
        case 8:
          m.int32Value = r.int32();
          continue;

        // google.protobuf.Any any_value = 2
        case 18:
          m.anyValue = google_protobuf_any_models.google.protobuf.Any.decode(
            r,
            r.uint32()
          );
          continue;

        // repeated google.protobuf.Any repeated_any_value = 3
        case 26:
          {
            const value = google_protobuf_any_models.google.protobuf.Any.decode(
              r,
              r.uint32()
            );

            m.repeatedAnyValue.push(value);
          }
          continue;

        // string text = 4
        case 34:
          m.text = r.string();
          continue;
      }
    }

    return r;
  }

  public static toJSON(m: TestAny): TestAnyJSON {
    return {
      int32Value: m.int32Value,
      anyValue: m.anyValue.toJSON(),
      repeatedAnyValue: m.repeatedAnyValue.toJSON(),
      text: m.text,
    };
  }

  public static fromJSON(m: TestAny, obj: TestAnyJSON): TestAny {
    m.int32Value = obj.int32Value;
    m.anyValue = new google_protobuf_any_models.google.protobuf.Any().fromJSON(
      obj.anyValue
    );
    m.repeatedAnyValue =
      new google_protobuf_any_models.google.protobuf.Any().fromJSON(
        obj.repeatedAnyValue
      );
    m.text = obj.text;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return TestAny.encode(this, w).finish();
  }

  deserialize(b: Uint8Array | Buffer): TestAny {
    const r = new pjs.Reader(b);
    TestAny.decode(this, r, r.len);
    return this;
  }

  toJSON(): TestAnyJSON {
    return TestAny.toJSON(this);
  }

  fromJSON(obj: TestAnyJSON): TestAny {
    return TestAny.fromJSON(this, obj);
  }

  clone(): TestAny {
    return new TestAny(this);
  }
}
