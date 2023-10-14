// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest_import
// file: unittest_import.proto

import * as unittest_import_public_models from "unittest_import_public_models";

import * as pjs from "protobufjs/minimal";

export interface IImportMessage {
  d: number;
}

export class ImportMessage implements IImportMessage {
  d: number = 0;

  constructor(obj?: Partial<IImportMessage>) {
    if (obj?.d ?? false) {
      this.d = obj.d;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): ImportMessage {
    return new ImportMessage(this);
  }
}

export enum ImportEnum {
  IMPORT_FOO = 7,
  IMPORT_BAR = 8,
  IMPORT_BAZ = 9,
}

export enum ImportEnumForMap {
  UNKNOWN = 0,
  FOO = 1,
  BAR = 2,
}
