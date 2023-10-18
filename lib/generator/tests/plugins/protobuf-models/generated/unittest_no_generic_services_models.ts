// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest.no_generic_services_test
// file: unittest_no_generic_services.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export enum TestEnum {
  FOO = 1,
}

export interface TestMessageJSON {
  a: number;
}

export class TestMessage {
  a: number = 0;

  public static fields = ["a"];

  public get fields() {
    return TestMessage.fields;
  }

  constructor(obj?: TestMessage) {
    if (!obj) return;

    if (obj.a !== undefined) {
      this.a = obj.a;
    }
  }

  public static encode(m: TestMessage, w: pjs.Writer): pjs.Writer {
    // int32 a = 1
    if (m.a !== 0) {
      w.uint32(8);
      w.int32(m.a);
    }

    return w;
  }

  public static decode(m: TestMessage, r: pjs.Reader, l: number): pjs.Reader {
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 a = 1
        case 8:
          m.a = r.int32();
          continue;
      }
    }

    return r;
  }

  public static toJSON(m: TestMessage): TestMessageJSON {
    return {
      a: m.a,
    };
  }

  public static fromJSON(m: TestMessage, obj: TestMessageJSON): TestMessage {
    m.a = obj.a;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return TestMessage.encode(this, w).finish();
  }

  deserialize(b: Uint8Array | Buffer): TestMessage {
    const r = new pjs.Reader(b);
    TestMessage.decode(this, r, r.len);
    return this;
  }

  toJSON(): TestMessageJSON {
    return TestMessage.toJSON(this);
  }

  fromJSON(obj: TestMessageJSON): TestMessage {
    return TestMessage.fromJSON(this, obj);
  }

  clone(): TestMessage {
    return new TestMessage(this);
  }
}
