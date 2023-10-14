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

export interface ITestAny {
  int32_value: number;
  any_value: google.protobuf.Any;
  repeated_any_value: google.protobuf.Any;
  text: string;
}

export class TestAny implements ITestAny {
  int32_value: number = 0;
  any_value: google.protobuf.Any = null;
  repeated_any_value: google.protobuf.Any = [];
  text: string = "";

  constructor(obj?: Partial<ITestAny>) {
    if (obj?.int32_value ?? false) {
      this.int32_value = obj.int32_value;
    }
    if (obj?.any_value ?? false) {
      this.any_value = obj.any_value;
    }
    if (obj?.repeated_any_value ?? false) {
      this.repeated_any_value = obj.repeated_any_value;
    }
    if (obj?.text ?? false) {
      this.text = obj.text;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): TestAny {
    return new TestAny(this);
  }
}
