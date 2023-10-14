// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest.no_generic_services_test
// file: unittest_no_generic_services.proto

import * as pjs from "protobufjs/minimal";

export interface ITestMessage {
  a: number;
}

export class TestMessage implements ITestMessage {
  a: number = 0;

  constructor(obj?: Partial<ITestMessage>) {
    if (obj?.a ?? false) {
      this.a = obj.a;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): TestMessage {
    return new TestMessage(this);
  }
}

export enum TestEnum {
  FOO = 1,
}
