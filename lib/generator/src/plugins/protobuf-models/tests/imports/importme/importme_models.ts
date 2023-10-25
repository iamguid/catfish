// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: importme
// file: importme/importme.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export interface ImportMeJSON {
  test: number;
}

export class ImportMe {
  test: number = 0;

  public static fields = ["test"];

  public get fields() {
    return ImportMe.fields;
  }

  constructor(obj?: ImportMe) {
    if (!obj) return;

    if (obj.test !== undefined) {
      this.test = obj.test;
    }
  }

  public static encode(m: ImportMe, w: pjs.Writer): pjs.Writer {
    // int32 test = 1
    if (m.test !== undefined) {
      w.uint32(8);
      w.int32(m.test);
    }

    return w;
  }

  public static decode(m: ImportMe, r: pjs.Reader, length: number): ImportMe {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 test = 1
        case 8:
          m.test = r.int32();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: ImportMe): ImportMeJSON {
    const obj = {};

    obj["test"] = m.test;

    return obj;
  }

  public static fromJSON(m: ImportMe, obj: ImportMeJSON): ImportMe {
    m.test = obj.test;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return ImportMe.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): ImportMe {
    const r = new pjs.Reader(buffer);
    return ImportMe.decode(this, r, r.len);
  }

  toJSON(): ImportMeJSON {
    return ImportMe.toJSON(this);
  }

  fromJSON(obj: ImportMeJSON): ImportMe {
    return ImportMe.fromJSON(this, obj);
  }

  clone(): ImportMe {
    return new ImportMe(this);
  }
}
