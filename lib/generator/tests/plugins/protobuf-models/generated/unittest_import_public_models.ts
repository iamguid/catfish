// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest_import
// file: unittest_import_public.proto

import * as pjs from "protobufjs/minimal";

export interface IPublicImportMessageObj {
  e: number;
}

export interface IPublicImportMessage {
  e: number;
}

export class PublicImportMessage implements IPublicImportMessage {
  e: number = 0;

  constructor(obj?: Partial<IPublicImportMessage>) {
    if (!obj) return;

    if (obj.e !== undefined) {
      this.e = obj.e;
    }
  }

  public static encode(
    m: IPublicImportMessage,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // int32 e = 1
    if (m.e !== 0) {
      w.uint32(8);
      w.int32(m.e);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): PublicImportMessage {
    const m = new PublicImportMessage();
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

  public static toJSON(m: IPublicImportMessage): IPublicImportMessageObj {}

  public static fromJSON(obj: IPublicImportMessageObj): IPublicImportMessage {}

  clone(): PublicImportMessage {
    return new PublicImportMessage(this);
  }
}
