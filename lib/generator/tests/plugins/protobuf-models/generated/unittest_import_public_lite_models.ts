// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest_import
// file: unittest_import_public_lite.proto

import * as pjs from "protobufjs/minimal";

export interface IPublicImportMessageLiteObj {
  e: number;
}

export interface IPublicImportMessageLite {
  e: number;
}

export class PublicImportMessageLite implements IPublicImportMessageLite {
  e: number = 0;

  public static fields = ["e"];

  public get fields() {
    return PublicImportMessageLite.fields;
  }

  constructor(obj?: Partial<IPublicImportMessageLite>) {
    if (!obj) return;

    if (obj.e !== undefined) {
      this.e = obj.e;
    }
  }

  public static encode(
    m: IPublicImportMessageLite,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // int32 e = 1
    if (m.e !== 0) {
      w.uint32(8);
      w.int32(m.e);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): PublicImportMessageLite {
    const m = new PublicImportMessageLite();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // int32 e = 1
        case 8:
          m.e = r.int32();
          continue;
      }
    }

    return m;
  }

  public static toJSON(
    m: IPublicImportMessageLite
  ): IPublicImportMessageLiteObj {
    return {
      e: m.e,
    };
  }

  public static fromJSON(
    obj: IPublicImportMessageLiteObj
  ): IPublicImportMessageLite {
    const m = new PublicImportMessageLite();

    m.e = obj.e;

    return m;
  }

  clone(): PublicImportMessageLite {
    return new PublicImportMessageLite(this);
  }
}
