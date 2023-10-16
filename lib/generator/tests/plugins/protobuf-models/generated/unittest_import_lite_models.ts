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

export enum ImportEnumLite {
  IMPORT_LITE_FOO = 7,
  IMPORT_LITE_BAR = 8,
  IMPORT_LITE_BAZ = 9,
}

export interface IImportMessageLiteObj {
  d: number;
}

export interface IImportMessageLite {
  d: number;
}

export class ImportMessageLite implements IImportMessageLite {
  d: number = 0;

  constructor(obj?: Partial<IImportMessageLite>) {
    if (!obj) return;

    if (obj.d !== undefined) {
      this.d = obj.d;
    }
  }

  public static encode(
    m: IImportMessageLite,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // int32 d = 1
    if (m.d !== 0) {
      w.uint32(8);
      w.int32(m.d);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): ImportMessageLite {
    const m = new ImportMessageLite();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // int32 d = 1
        case 8:
          m.d = r.int32();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IImportMessageLite): IImportMessageLiteObj {}

  public static fromJSON(obj: IImportMessageLiteObj): IImportMessageLite {}

  clone(): ImportMessageLite {
    return new ImportMessageLite(this);
  }
}
