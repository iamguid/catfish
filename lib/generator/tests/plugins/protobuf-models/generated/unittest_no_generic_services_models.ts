// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest.no_generic_services_test
// file: unittest_no_generic_services.proto

import * as pjs from "protobufjs/minimal";

export enum TestEnum {
  FOO = 1,
}

export interface ITestMessageObj {
  a: number;
}

export interface ITestMessage {
  a: number;
}

export class TestMessage implements ITestMessage {
  a: number = 0;

  constructor(obj?: Partial<ITestMessage>) {
    if (!obj) return;

    if (obj.a !== undefined) {
      this.a = obj.a;
    }
  }

  public static encode(
    m: ITestMessage,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // int32 a = 1
    if (m.a !== 0) {
      w.uint32(8);
      w.int32(m.a);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): TestMessage {
    const m = new TestMessage();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // int32 a = 1
        case 8:
          m.a = r.int32();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: ITestMessage): ITestMessageObj {}

  public static fromJSON(obj: ITestMessageObj): ITestMessage {}

  clone(): TestMessage {
    return new TestMessage(this);
  }
}
