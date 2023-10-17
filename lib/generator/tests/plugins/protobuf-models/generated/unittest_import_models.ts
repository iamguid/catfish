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

export interface IImportMessageObj {
  d: number;
}

export interface IImportMessage {
  d: number;
}

export class ImportMessage implements IImportMessage {
  d: number = 0;

  public static fields = ["d"];

  public get fields() {
    return ImportMessage.fields;
  }

  constructor(obj?: Partial<IImportMessage>) {
    if (!obj) return;

    if (obj.d !== undefined) {
      this.d = obj.d;
    }
  }

  public static encode(
    m: IImportMessage,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // int32 d = 1
    if (m.d !== 0) {
      w.uint32(8);
      w.int32(m.d);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): ImportMessage {
    const m = new ImportMessage();
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

  public static toJSON(m: IImportMessage): IImportMessageObj {
    return {
      d: m.d,
    };
  }

  public static fromJSON(obj: IImportMessageObj): IImportMessage {
    const m = new ImportMessage();

    m.d = obj.d;

    return m;
  }

  clone(): ImportMessage {
    return new ImportMessage(this);
  }
}
