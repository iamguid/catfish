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
import * as runtime from "@catfish/runtime";

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

export interface ImportMessageJSON {
  d: number;
}

export class ImportMessage {
  d: number = 0;

  public static fields = ["d"];

  public get fields() {
    return ImportMessage.fields;
  }

  constructor(obj?: ImportMessage) {
    if (!obj) return;

    if (obj.d !== undefined) {
      this.d = obj.d;
    }
  }

  public static encode(m: ImportMessage, w: pjs.Writer): pjs.Writer {
    // int32 d = 1
    if (m.d !== 0) {
      w.uint32(8);
      w.int32(m.d);
    }

    return w;
  }

  public static decode(m: ImportMessage, r: pjs.Reader, l: number): pjs.Reader {
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 d = 1
        case 8:
          m.d = r.int32();
          continue;
      }
    }

    return r;
  }

  public static toJSON(m: ImportMessage): ImportMessageJSON {
    return {
      d: m.d,
    };
  }

  public static fromJSON(
    m: ImportMessage,
    obj: ImportMessageJSON
  ): ImportMessage {
    m.d = obj.d;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return ImportMessage.encode(this, w).finish();
  }

  deserialize(b: Uint8Array | Buffer): ImportMessage {
    const r = new pjs.Reader(b);
    ImportMessage.decode(this, r, r.len);
    return this;
  }

  toJSON(): ImportMessageJSON {
    return ImportMessage.toJSON(this);
  }

  fromJSON(obj: ImportMessageJSON): ImportMessage {
    return ImportMessage.fromJSON(this, obj);
  }

  clone(): ImportMessage {
    return new ImportMessage(this);
  }
}
