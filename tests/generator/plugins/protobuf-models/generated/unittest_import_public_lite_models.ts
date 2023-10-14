// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest_import
// file: unittest_import_public_lite.proto

import * as pjs from "protobufjs/minimal";

export interface IPublicImportMessageLite {
  e: number;
}

export class PublicImportMessageLite implements IPublicImportMessageLite {
  e: number = 0;

  constructor(obj?: Partial<IPublicImportMessageLite>) {
    if (obj?.e ?? false) {
      this.e = obj.e;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): PublicImportMessageLite {
    return new PublicImportMessageLite(this);
  }
}
