// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: proto3_preserve_unknown_enum_unittest
// file: unittest_preserve_unknown_enum.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export enum MyEnum {
  FOO = 0,
  BAR = 1,
  BAZ = 2,
}

export enum MyEnumPlusExtra {
  E_FOO = 0,
  E_BAR = 1,
  E_BAZ = 2,
  E_EXTRA = 3,
}

export interface MyMessageJSON {
  e: string;
  repeatedE: string;
  repeatedPackedE: string;
  repeatedPackedUnexpectedE: string;
  oneofE1?: string;
  oneofE2?: string;
}

export class MyMessage {
  e: number = MyEnum.FOO;
  repeatedE: number = [];
  repeatedPackedE: number = [];
  repeatedPackedUnexpectedE: number = [];
  oneofE1?: number = MyEnum.FOO;
  oneofE2?: number = MyEnum.FOO;

  public static fields = [
    "e",
    "repeatedE",
    "repeatedPackedE",
    "repeatedPackedUnexpectedE",
    "oneofE1",
    "oneofE2",
  ];

  public get fields() {
    return MyMessage.fields;
  }

  constructor(obj?: MyMessage) {
    if (!obj) return;

    if (obj.e !== undefined) {
      this.e = obj.e;
    }
    if (obj.repeatedE !== undefined) {
      this.repeatedE = obj.repeatedE;
    }
    if (obj.repeatedPackedE !== undefined) {
      this.repeatedPackedE = obj.repeatedPackedE;
    }
    if (obj.repeatedPackedUnexpectedE !== undefined) {
      this.repeatedPackedUnexpectedE = obj.repeatedPackedUnexpectedE;
    }
    if (obj.oneofE1 !== undefined) {
      this.oneofE1 = obj.oneofE1;
    }
    if (obj.oneofE2 !== undefined) {
      this.oneofE2 = obj.oneofE2;
    }
  }

  public static encode(m: MyMessage, w: pjs.Writer): pjs.Writer {
    // MyEnum e = 1
    if (m.e !== MyEnum.FOO) {
      w.uint32(8);
      w.uint32(m.e);
    }

    // MyEnum repeated_e = 2
    if (m.repeatedE !== []) {
      w.uint32(16);
      w.uint32(m.repeatedE);
    }

    // MyEnum repeated_packed_e = 3
    if (m.repeatedPackedE !== []) {
      w.uint32(24);
      w.uint32(m.repeatedPackedE);
    }

    // MyEnumPlusExtra repeated_packed_unexpected_e = 4
    if (m.repeatedPackedUnexpectedE !== []) {
      w.uint32(32);
      w.uint32(m.repeatedPackedUnexpectedE);
    }

    // oneof MyEnum oneof_e_1 = 5

    // oneof MyEnum oneof_e_2 = 6

    return w;
  }

  public static decode(m: MyMessage, r: pjs.Reader, l: number): pjs.Reader {
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // MyEnum e = 1
        case 8:
          m.e = r.uint32();
          continue;

        // repeated MyEnum repeated_e = 2
        case 16:
          {
            const value = r.uint32();

            m.repeatedE.push(value);
          }
          continue;

        // repeated MyEnum repeated_packed_e = 3
        case 24:
          {
            const value = r.uint32();

            m.repeatedPackedE.push(value);
          }
          continue;

        // repeated MyEnumPlusExtra repeated_packed_unexpected_e = 4
        case 32:
          {
            const value = r.uint32();

            m.repeatedPackedUnexpectedE.push(value);
          }
          continue;

        // MyEnum oneof_e_1 = 5
        case 40:
          m.oneofE1 = r.uint32();
          continue;

        // MyEnum oneof_e_2 = 6
        case 48:
          m.oneofE2 = r.uint32();
          continue;
      }
    }

    return r;
  }

  public static toJSON(m: MyMessage): MyMessageJSON {
    return {
      e: MyEnum[m.e],
      repeatedE: MyEnum[m.repeatedE],
      repeatedPackedE: MyEnum[m.repeatedPackedE],
      repeatedPackedUnexpectedE: MyEnumPlusExtra[m.repeatedPackedUnexpectedE],
      oneofE1: MyEnum[m.oneofE1],
      oneofE2: MyEnum[m.oneofE2],
    };
  }

  public static fromJSON(m: MyMessage, obj: MyMessageJSON): MyMessage {
    m.e = MyEnum[obj.e];
    m.repeatedE = MyEnum[obj.repeatedE];
    m.repeatedPackedE = MyEnum[obj.repeatedPackedE];
    m.repeatedPackedUnexpectedE =
      MyEnumPlusExtra[obj.repeatedPackedUnexpectedE];
    m.oneofE1 = MyEnum[obj.oneofE1];
    m.oneofE2 = MyEnum[obj.oneofE2];

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return MyMessage.encode(this, w).finish();
  }

  deserialize(b: Uint8Array | Buffer): MyMessage {
    const r = new pjs.Reader(b);
    MyMessage.decode(this, r, r.len);
    return this;
  }

  toJSON(): MyMessageJSON {
    return MyMessage.toJSON(this);
  }

  fromJSON(obj: MyMessageJSON): MyMessage {
    return MyMessage.fromJSON(this, obj);
  }

  clone(): MyMessage {
    return new MyMessage(this);
  }
}

export enum MyEnum {
  FOO = 0,
  BAR = 1,
  BAZ = 2,
}

export enum MyEnumPlusExtra {
  E_FOO = 0,
  E_BAR = 1,
  E_BAZ = 2,
  E_EXTRA = 3,
}

export interface MyMessagePlusExtraJSON {
  e: string;
  repeatedE: string;
  repeatedPackedE: string;
  repeatedPackedUnexpectedE: string;
  oneofE1?: string;
  oneofE2?: string;
}

export class MyMessagePlusExtra {
  e: number = MyEnumPlusExtra.E_FOO;
  repeatedE: number = [];
  repeatedPackedE: number = [];
  repeatedPackedUnexpectedE: number = [];
  oneofE1?: number = MyEnumPlusExtra.E_FOO;
  oneofE2?: number = MyEnumPlusExtra.E_FOO;

  public static fields = [
    "e",
    "repeatedE",
    "repeatedPackedE",
    "repeatedPackedUnexpectedE",
    "oneofE1",
    "oneofE2",
  ];

  public get fields() {
    return MyMessagePlusExtra.fields;
  }

  constructor(obj?: MyMessagePlusExtra) {
    if (!obj) return;

    if (obj.e !== undefined) {
      this.e = obj.e;
    }
    if (obj.repeatedE !== undefined) {
      this.repeatedE = obj.repeatedE;
    }
    if (obj.repeatedPackedE !== undefined) {
      this.repeatedPackedE = obj.repeatedPackedE;
    }
    if (obj.repeatedPackedUnexpectedE !== undefined) {
      this.repeatedPackedUnexpectedE = obj.repeatedPackedUnexpectedE;
    }
    if (obj.oneofE1 !== undefined) {
      this.oneofE1 = obj.oneofE1;
    }
    if (obj.oneofE2 !== undefined) {
      this.oneofE2 = obj.oneofE2;
    }
  }

  public static encode(m: MyMessagePlusExtra, w: pjs.Writer): pjs.Writer {
    // MyEnumPlusExtra e = 1
    if (m.e !== MyEnumPlusExtra.E_FOO) {
      w.uint32(8);
      w.uint32(m.e);
    }

    // MyEnumPlusExtra repeated_e = 2
    if (m.repeatedE !== []) {
      w.uint32(16);
      w.uint32(m.repeatedE);
    }

    // MyEnumPlusExtra repeated_packed_e = 3
    if (m.repeatedPackedE !== []) {
      w.uint32(24);
      w.uint32(m.repeatedPackedE);
    }

    // MyEnumPlusExtra repeated_packed_unexpected_e = 4
    if (m.repeatedPackedUnexpectedE !== []) {
      w.uint32(32);
      w.uint32(m.repeatedPackedUnexpectedE);
    }

    // oneof MyEnumPlusExtra oneof_e_1 = 5

    // oneof MyEnumPlusExtra oneof_e_2 = 6

    return w;
  }

  public static decode(
    m: MyMessagePlusExtra,
    r: pjs.Reader,
    l: number
  ): pjs.Reader {
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // MyEnumPlusExtra e = 1
        case 8:
          m.e = r.uint32();
          continue;

        // repeated MyEnumPlusExtra repeated_e = 2
        case 16:
          {
            const value = r.uint32();

            m.repeatedE.push(value);
          }
          continue;

        // repeated MyEnumPlusExtra repeated_packed_e = 3
        case 24:
          {
            const value = r.uint32();

            m.repeatedPackedE.push(value);
          }
          continue;

        // repeated MyEnumPlusExtra repeated_packed_unexpected_e = 4
        case 32:
          {
            const value = r.uint32();

            m.repeatedPackedUnexpectedE.push(value);
          }
          continue;

        // MyEnumPlusExtra oneof_e_1 = 5
        case 40:
          m.oneofE1 = r.uint32();
          continue;

        // MyEnumPlusExtra oneof_e_2 = 6
        case 48:
          m.oneofE2 = r.uint32();
          continue;
      }
    }

    return r;
  }

  public static toJSON(m: MyMessagePlusExtra): MyMessagePlusExtraJSON {
    return {
      e: MyEnumPlusExtra[m.e],
      repeatedE: MyEnumPlusExtra[m.repeatedE],
      repeatedPackedE: MyEnumPlusExtra[m.repeatedPackedE],
      repeatedPackedUnexpectedE: MyEnumPlusExtra[m.repeatedPackedUnexpectedE],
      oneofE1: MyEnumPlusExtra[m.oneofE1],
      oneofE2: MyEnumPlusExtra[m.oneofE2],
    };
  }

  public static fromJSON(
    m: MyMessagePlusExtra,
    obj: MyMessagePlusExtraJSON
  ): MyMessagePlusExtra {
    m.e = MyEnumPlusExtra[obj.e];
    m.repeatedE = MyEnumPlusExtra[obj.repeatedE];
    m.repeatedPackedE = MyEnumPlusExtra[obj.repeatedPackedE];
    m.repeatedPackedUnexpectedE =
      MyEnumPlusExtra[obj.repeatedPackedUnexpectedE];
    m.oneofE1 = MyEnumPlusExtra[obj.oneofE1];
    m.oneofE2 = MyEnumPlusExtra[obj.oneofE2];

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return MyMessagePlusExtra.encode(this, w).finish();
  }

  deserialize(b: Uint8Array | Buffer): MyMessagePlusExtra {
    const r = new pjs.Reader(b);
    MyMessagePlusExtra.decode(this, r, r.len);
    return this;
  }

  toJSON(): MyMessagePlusExtraJSON {
    return MyMessagePlusExtra.toJSON(this);
  }

  fromJSON(obj: MyMessagePlusExtraJSON): MyMessagePlusExtra {
    return MyMessagePlusExtra.fromJSON(this, obj);
  }

  clone(): MyMessagePlusExtra {
    return new MyMessagePlusExtra(this);
  }
}
