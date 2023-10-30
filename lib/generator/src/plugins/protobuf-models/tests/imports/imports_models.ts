// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: test
// file: imports.proto

import * as i7c00b4b13ee0caa808348981faf33357 from "./importme/importme_models.ts";

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export interface TestMessageJSON {
  fImported: i7c00b4b13ee0caa808348981faf33357.ImportMeJSON;
}

export class TestMessage {
  fImported: i7c00b4b13ee0caa808348981faf33357.ImportMe =
    new i7c00b4b13ee0caa808348981faf33357.ImportMe();

  public static fields = ["fImported"];

  public get fields() {
    return TestMessage.fields;
  }

  constructor(obj?: TestMessage) {
    if (!obj) return;

    if (obj.fImported !== undefined) {
      this.fImported = new i7c00b4b13ee0caa808348981faf33357.ImportMe(
        obj.fImported
      );
    }
  }

  public static encode(m: TestMessage, w: pjs.Writer): pjs.Writer {
    // ImportMe f_imported = 1
    if (m.fImported !== undefined) {
      w.uint32(10);
      i7c00b4b13ee0caa808348981faf33357.ImportMe.encode(
        m.fImported,
        w.fork()
      ).ldelim();
    }

    return w;
  }

  public static decode(
    m: TestMessage,
    r: pjs.Reader,
    length: number
  ): TestMessage {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // ImportMe f_imported = 1
        case 10:
          m.fImported = i7c00b4b13ee0caa808348981faf33357.ImportMe.decode(
            new i7c00b4b13ee0caa808348981faf33357.ImportMe(),
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

  public static toJSON(m: TestMessage): TestMessageJSON {
    const obj = {};

    obj["fImported"] = m.fImported.toJSON();

    return obj;
  }

  public static fromJSON(m: TestMessage, obj: TestMessageJSON): TestMessage {
    m.fImported = new i7c00b4b13ee0caa808348981faf33357.ImportMe().fromJSON(
      obj.fImported
    );

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return TestMessage.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): TestMessage {
    const r = new pjs.Reader(buffer);
    return TestMessage.decode(this, r, r.len);
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
