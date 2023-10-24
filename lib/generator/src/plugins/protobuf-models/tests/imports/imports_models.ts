// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: test
// file: imports.proto

import * as importme_importme_models from "./importme/importme_models";

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export interface TestMessageJSON {
  fImported: imports_models.ImportMeJSON;
}

export class TestMessage {
  fImported: imports_models.ImportMe = new imports_models.ImportMe();

  public static fields = ["fImported"];

  public get fields() {
    return TestMessage.fields;
  }

  constructor(obj?: TestMessage) {
    if (!obj) return;

    if (obj.fImported !== undefined) {
      this.fImported = new imports_models.ImportMe(obj.fImported);
    }
  }

  public static encode(m: TestMessage, w: pjs.Writer): pjs.Writer {
    // ImportMe f_imported = 1
    if (m.fImported !== undefined) {
      w.uint32(10);
      imports_models.ImportMe.encode(m.fImported, w.fork()).ldelim();
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
          m.fImported = imports_models.ImportMe.decode(
            new imports_models.ImportMe(),
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
    m.fImported = new imports_models.ImportMe().fromJSON(obj.fImported);

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
