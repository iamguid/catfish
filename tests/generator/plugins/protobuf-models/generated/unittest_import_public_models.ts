// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest_import
// file: unittest_import_public.proto

import * as pjs from "protobufjs/minimal";

export interface IPublicImportMessage {
  e: number;
}

export class PublicImportMessage implements IPublicImportMessage {
  e: number = 0;

  constructor(obj?: Partial<IPublicImportMessage>) {
    if (obj?.e ?? false) {
      this.e = obj.e;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): PublicImportMessage {
    return new PublicImportMessage(this);
  }
}
