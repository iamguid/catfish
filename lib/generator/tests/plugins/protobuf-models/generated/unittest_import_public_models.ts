// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest_import
// file: unittest_import_public.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export interface PublicImportMessageJSON {
  e: number;
}

export class PublicImportMessage {
  e: number = 0;

  public static fields = ["e"];

  public get fields() {
    return PublicImportMessage.fields;
  }

  constructor(obj?: PublicImportMessage) {
    if (!obj) return;

    if (obj.e !== undefined) {
      this.e = obj.e;
    }
  }

  public static encode(m: PublicImportMessage, w: pjs.Writer): pjs.Writer {
    // int32 e = 1
    if (m.e !== 0) {
      w.uint32(8);
      w.int32(m.e);
    }

    return w;
  }

  public static decode(
    m: PublicImportMessage,
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

  public static toJSON(m: PublicImportMessage): PublicImportMessageJSON {
    return {
      e: m.e,
    };
  }

  public static fromJSON(
    m: PublicImportMessage,
    obj: PublicImportMessageJSON
  ): PublicImportMessage {
    m.e = obj.e;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return PublicImportMessage.encode(this, w).finish();
  }

  deserialize(b: Uint8Array | Buffer): PublicImportMessage {
    const r = new pjs.Reader(b);
    PublicImportMessage.decode(this, r, r.len);
    return this;
  }

  toJSON(): PublicImportMessageJSON {
    return PublicImportMessage.toJSON(this);
  }

  fromJSON(obj: PublicImportMessageJSON): PublicImportMessage {
    return PublicImportMessage.fromJSON(this, obj);
  }

  clone(): PublicImportMessage {
    return new PublicImportMessage(this);
  }
}
