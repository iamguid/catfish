// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: scalar_types
// file: scalar-types.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export interface ScalarTypesJSON {
  fInt32: number;
  fInt64: string;
  fUint32: number;
  fUint64: string;
  fSint32: number;
  fSint64: string;
  fFixed32: number;
  fFixed64: string;
  fSfixed32: number;
  fSfixed64: string;
  fFloat: number;
  fDouble: number;
  fBool: boolean;
  fString: string;
  fBytes: string;
}

export class ScalarTypes {
  fInt32: number = 0;
  fInt64: pjs.Long = pjs.util.Long.fromValue(0, false);
  fUint32: number = 0;
  fUint64: pjs.Long = pjs.util.Long.fromValue(0, true);
  fSint32: number = 0;
  fSint64: pjs.Long = pjs.util.Long.fromValue(0, false);
  fFixed32: number = 0;
  fFixed64: pjs.Long = pjs.util.Long.fromValue(0, true);
  fSfixed32: number = 0;
  fSfixed64: pjs.Long = pjs.util.Long.fromValue(0, false);
  fFloat: number = 0;
  fDouble: number = 0;
  fBool: boolean = false;
  fString: string = "";
  fBytes: Uint8Array | Buffer = pjs.util.newBuffer(0);

  public static fields = [
    "fInt32",
    "fInt64",
    "fUint32",
    "fUint64",
    "fSint32",
    "fSint64",
    "fFixed32",
    "fFixed64",
    "fSfixed32",
    "fSfixed64",
    "fFloat",
    "fDouble",
    "fBool",
    "fString",
    "fBytes",
  ];

  public get fields() {
    return ScalarTypes.fields;
  }

  constructor(obj?: ScalarTypes) {
    if (!obj) return;

    if (obj.fInt32 !== undefined) {
      this.fInt32 = obj.fInt32;
    }
    if (obj.fInt64 !== undefined) {
      this.fInt64 = new pjs.util.Long(obj.fInt64);
    }
    if (obj.fUint32 !== undefined) {
      this.fUint32 = obj.fUint32;
    }
    if (obj.fUint64 !== undefined) {
      this.fUint64 = new pjs.util.Long(obj.fUint64);
    }
    if (obj.fSint32 !== undefined) {
      this.fSint32 = obj.fSint32;
    }
    if (obj.fSint64 !== undefined) {
      this.fSint64 = new pjs.util.Long(obj.fSint64);
    }
    if (obj.fFixed32 !== undefined) {
      this.fFixed32 = obj.fFixed32;
    }
    if (obj.fFixed64 !== undefined) {
      this.fFixed64 = new pjs.util.Long(obj.fFixed64);
    }
    if (obj.fSfixed32 !== undefined) {
      this.fSfixed32 = obj.fSfixed32;
    }
    if (obj.fSfixed64 !== undefined) {
      this.fSfixed64 = new pjs.util.Long(obj.fSfixed64);
    }
    if (obj.fFloat !== undefined) {
      this.fFloat = obj.fFloat;
    }
    if (obj.fDouble !== undefined) {
      this.fDouble = obj.fDouble;
    }
    if (obj.fBool !== undefined) {
      this.fBool = obj.fBool;
    }
    if (obj.fString !== undefined) {
      this.fString = obj.fString;
    }
    if (obj.fBytes !== undefined) {
      this.fBytes = new pjs.util.Buffer(obj.fBytes);
    }
  }

  public static encode(m: ScalarTypes, w: pjs.Writer): pjs.Writer {
    // int32 f_int32 = 1
    if (m.fInt32 !== undefined) {
      w.uint32(8);
      w.int32(m.fInt32);
    }

    // int64 f_int64 = 2
    if (m.fInt64 !== undefined) {
      w.uint32(16);
      w.int64(m.fInt64);
    }

    // uint32 f_uint32 = 3
    if (m.fUint32 !== undefined) {
      w.uint32(24);
      w.uint32(m.fUint32);
    }

    // uint64 f_uint64 = 4
    if (m.fUint64 !== undefined) {
      w.uint32(32);
      w.uint64(m.fUint64);
    }

    // sint32 f_sint32 = 5
    if (m.fSint32 !== undefined) {
      w.uint32(40);
      w.sint32(m.fSint32);
    }

    // sint64 f_sint64 = 6
    if (m.fSint64 !== undefined) {
      w.uint32(48);
      w.sint64(m.fSint64);
    }

    // fixed32 f_fixed32 = 7
    if (m.fFixed32 !== undefined) {
      w.uint32(61);
      w.fixed32(m.fFixed32);
    }

    // fixed64 f_fixed64 = 8
    if (m.fFixed64 !== undefined) {
      w.uint32(65);
      w.fixed64(m.fFixed64);
    }

    // sfixed32 f_sfixed32 = 9
    if (m.fSfixed32 !== undefined) {
      w.uint32(77);
      w.sfixed32(m.fSfixed32);
    }

    // sfixed64 f_sfixed64 = 10
    if (m.fSfixed64 !== undefined) {
      w.uint32(81);
      w.sfixed64(m.fSfixed64);
    }

    // float f_float = 11
    if (m.fFloat !== undefined) {
      w.uint32(93);
      w.float(m.fFloat);
    }

    // double f_double = 12
    if (m.fDouble !== undefined) {
      w.uint32(97);
      w.double(m.fDouble);
    }

    // bool f_bool = 13
    if (m.fBool !== undefined) {
      w.uint32(104);
      w.bool(m.fBool);
    }

    // string f_string = 14
    if (m.fString !== undefined) {
      w.uint32(114);
      w.string(m.fString);
    }

    // bytes f_bytes = 15
    if (m.fBytes !== undefined) {
      w.uint32(122);
      w.bytes(m.fBytes);
    }

    return w;
  }

  public static decode(
    m: ScalarTypes,
    r: pjs.Reader,
    length: number
  ): ScalarTypes {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 f_int32 = 1
        case 8:
          m.fInt32 = r.int32();
          continue;

        // int64 f_int64 = 2
        case 16:
          m.fInt64 = r.int64();
          continue;

        // uint32 f_uint32 = 3
        case 24:
          m.fUint32 = r.uint32();
          continue;

        // uint64 f_uint64 = 4
        case 32:
          m.fUint64 = r.uint64();
          continue;

        // sint32 f_sint32 = 5
        case 40:
          m.fSint32 = r.sint32();
          continue;

        // sint64 f_sint64 = 6
        case 48:
          m.fSint64 = r.sint64();
          continue;

        // fixed32 f_fixed32 = 7
        case 61:
          m.fFixed32 = r.fixed32();
          continue;

        // fixed64 f_fixed64 = 8
        case 65:
          m.fFixed64 = r.fixed64();
          continue;

        // sfixed32 f_sfixed32 = 9
        case 77:
          m.fSfixed32 = r.sfixed32();
          continue;

        // sfixed64 f_sfixed64 = 10
        case 81:
          m.fSfixed64 = r.sfixed64();
          continue;

        // float f_float = 11
        case 93:
          m.fFloat = r.float();
          continue;

        // double f_double = 12
        case 97:
          m.fDouble = r.double();
          continue;

        // bool f_bool = 13
        case 104:
          m.fBool = r.bool();
          continue;

        // string f_string = 14
        case 114:
          m.fString = r.string();
          continue;

        // bytes f_bytes = 15
        case 122:
          m.fBytes = r.bytes();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: ScalarTypes): ScalarTypesJSON {
    return {
      fInt32: m.fInt32,
      fInt64: m.fInt64.toString(),
      fUint32: m.fUint32,
      fUint64: m.fUint64.toString(),
      fSint32: m.fSint32,
      fSint64: m.fSint64.toString(),
      fFixed32: m.fFixed32,
      fFixed64: m.fFixed64.toString(),
      fSfixed32: m.fSfixed32,
      fSfixed64: m.fSfixed64.toString(),
      fFloat: m.fFloat,
      fDouble: m.fDouble,
      fBool: m.fBool,
      fString: m.fString,
      fBytes: runtime.convertBytesToBase64(m.fBytes),
    };
  }

  public static fromJSON(m: ScalarTypes, obj: ScalarTypesJSON): ScalarTypes {
    m.fInt32 = obj.fInt32;
    m.fInt64 = pjs.util.Long.fromValue(obj.fInt64, false);
    m.fUint32 = obj.fUint32;
    m.fUint64 = pjs.util.Long.fromValue(obj.fUint64, true);
    m.fSint32 = obj.fSint32;
    m.fSint64 = pjs.util.Long.fromValue(obj.fSint64, false);
    m.fFixed32 = obj.fFixed32;
    m.fFixed64 = pjs.util.Long.fromValue(obj.fFixed64, true);
    m.fSfixed32 = obj.fSfixed32;
    m.fSfixed64 = pjs.util.Long.fromValue(obj.fSfixed64, false);
    m.fFloat = obj.fFloat;
    m.fDouble = obj.fDouble;
    m.fBool = obj.fBool;
    m.fString = obj.fString;
    m.fBytes = runtime.convertBase64ToBytes(obj.fBytes);

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return ScalarTypes.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): ScalarTypes {
    const r = new pjs.Reader(buffer);
    return ScalarTypes.decode(this, r, r.len);
  }

  toJSON(): ScalarTypesJSON {
    return ScalarTypes.toJSON(this);
  }

  fromJSON(obj: ScalarTypesJSON): ScalarTypes {
    return ScalarTypes.fromJSON(this, obj);
  }

  clone(): ScalarTypes {
    return new ScalarTypes(this);
  }
}
