// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest_import
// file: unittest_import_lite.proto

import * as unittest_import_public_lite_models from "unittest_import_public_lite_models";

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export enum ImportEnumLite {
  IMPORT_LITE_FOO = 7,
  IMPORT_LITE_BAR = 8,
  IMPORT_LITE_BAZ = 9,
}

export interface ImportMessageLiteJSON {
  d: number;
}

export class ImportMessageLite {
  d: number = 0;

  public static fields = ["d"];

  public get fields() {
    return ImportMessageLite.fields;
  }

  constructor(obj?: ImportMessageLite) {
    if (!obj) return;

    if (obj.d !== undefined) {
      this.d = obj.d;
    }
  }

  public static encode(m: ImportMessageLite, w: pjs.Writer): pjs.Writer {
    // int32 d = 1
    if (m.d !== 0) {
      w.uint32(8);
      w.int32(m.d);
    }

    return w;
  }

  public static decode(
    m: ImportMessageLite,
    r: pjs.Reader,
    length: number
  ): ImportMessageLite {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 d = 1
        case 8:
          m.d = r.int32();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: ImportMessageLite): ImportMessageLiteJSON {
    return {
      d: m.d,
    };
  }

  public static fromJSON(
    m: ImportMessageLite,
    obj: ImportMessageLiteJSON
  ): ImportMessageLite {
    m.d = obj.d;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return ImportMessageLite.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): ImportMessageLite {
    const r = new pjs.Reader(buffer);
    return ImportMessageLite.decode(this, r, r.len);
  }

  toJSON(): ImportMessageLiteJSON {
    return ImportMessageLite.toJSON(this);
  }

  fromJSON(obj: ImportMessageLiteJSON): ImportMessageLite {
    return ImportMessageLite.fromJSON(this, obj);
  }

  clone(): ImportMessageLite {
    return new ImportMessageLite(this);
  }
}
