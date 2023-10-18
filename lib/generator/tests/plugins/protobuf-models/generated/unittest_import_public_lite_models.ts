// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest_import
// file: unittest_import_public_lite.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export interface PublicImportMessageLiteJSON {
  e: number;
}

export class PublicImportMessageLite {
  e: number = 0;

  public static fields = ["e"];

  public get fields() {
    return PublicImportMessageLite.fields;
  }

  constructor(obj?: PublicImportMessageLite) {
    if (!obj) return;

    if (obj.e !== undefined) {
      this.e = obj.e;
    }
  }

  public static encode(m: PublicImportMessageLite, w: pjs.Writer): pjs.Writer {
    // int32 e = 1
    if (m.e !== 0) {
      w.uint32(8);
      w.int32(m.e);
    }

    return w;
  }

  public static decode(
    m: PublicImportMessageLite,
    r: pjs.Reader,
    l: number
  ): pjs.Reader {
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 e = 1
        case 8:
          m.e = r.int32();
          continue;
      }
    }

    return r;
  }

  public static toJSON(
    m: PublicImportMessageLite
  ): PublicImportMessageLiteJSON {
    return {
      e: m.e,
    };
  }

  public static fromJSON(
    m: PublicImportMessageLite,
    obj: PublicImportMessageLiteJSON
  ): PublicImportMessageLite {
    m.e = obj.e;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return PublicImportMessageLite.encode(this, w).finish();
  }

  deserialize(b: Uint8Array | Buffer): PublicImportMessageLite {
    const r = new pjs.Reader(b);
    PublicImportMessageLite.decode(this, r, r.len);
    return this;
  }

  toJSON(): PublicImportMessageLiteJSON {
    return PublicImportMessageLite.toJSON(this);
  }

  fromJSON(obj: PublicImportMessageLiteJSON): PublicImportMessageLite {
    return PublicImportMessageLite.fromJSON(this, obj);
  }

  clone(): PublicImportMessageLite {
    return new PublicImportMessageLite(this);
  }
}
