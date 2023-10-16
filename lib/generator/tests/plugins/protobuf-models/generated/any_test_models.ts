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

export interface ITestAnyObj {
  int32Value: number;
  anyValue: null;
  repeatedAnyValue: null;
  text: string;
}

export interface ITestAny {
  int32Value: number;
  anyValue: null;
  repeatedAnyValue: null;
  text: string;
}

export class TestAny implements ITestAny {
  int32Value: number = 0;
  anyValue: null = null;
  repeatedAnyValue: null = [];
  text: string = "";

  constructor(obj?: Partial<ITestAny>) {
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

  public static encode(
    m: ITestAny,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // int32 int32_value = 1
    if (m.int32Value !== 0) {
      w.uint32(8);
      w.int32(m.int32Value);
    }

    // google.protobuf.Any any_value = 2
    if (m.anyValue !== null) {
      w.uint32(18);
      m.anyValue.encode(writer);
    }

    // google.protobuf.Any repeated_any_value = 3
    if (m.repeatedAnyValue !== []) {
      w.uint32(26);
      m.repeatedAnyValue.encode(writer);
    }

    // string text = 4
    if (m.text !== "") {
      w.uint32(34);
      w.string(m.text);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): TestAny {
    const m = new TestAny();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // int32 int32_value = 1
        case 8:
          m.int32Value = r.int32();
          continue;

        // google.protobuf.Any any_value = 2
        case 18:
          m.anyValue = google_protobuf_any_models.google.protobuf.Any;
          continue;

        // repeated google.protobuf.Any repeated_any_value = 3
        case 26:
          const repeatedAnyValueValue =
            google_protobuf_any_models.google.protobuf.Any;

          m.repeatedAnyValue.push(repeatedAnyValueValue);
          continue;

        // string text = 4
        case 34:
          m.text = r.string();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: ITestAny): ITestAnyObj {}

  public static fromJSON(obj: ITestAnyObj): ITestAny {}

  clone(): TestAny {
    return new TestAny(this);
  }
}
