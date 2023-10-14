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

export interface IImportMessageLite {
  d: number;
}

export class ImportMessageLite implements IImportMessageLite {
  d: number = 0;

  constructor(obj?: Partial<IImportMessageLite>) {
    if (obj?.d ?? false) {
      this.d = obj.d;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): ImportMessageLite {
    return new ImportMessageLite(this);
  }
}

export enum ImportEnumLite {
  IMPORT_LITE_FOO = 7,
  IMPORT_LITE_BAR = 8,
  IMPORT_LITE_BAZ = 9,
}
