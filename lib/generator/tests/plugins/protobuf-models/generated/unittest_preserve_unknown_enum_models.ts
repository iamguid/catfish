// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: proto3_preserve_unknown_enum_unittest
// file: unittest_preserve_unknown_enum.proto

import * as pjs from "protobufjs/minimal";

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

export interface IMyMessageObj {
  e: number;
  repeatedE: number;
  repeatedPackedE: number;
  repeatedPackedUnexpectedE: number;
  oneofE1?: number;
  oneofE2?: number;
}

export interface IMyMessage {
  e: number;
  repeatedE: number;
  repeatedPackedE: number;
  repeatedPackedUnexpectedE: number;
  oneofE1?: number;
  oneofE2?: number;
}

export class MyMessage implements IMyMessage {
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

  constructor(obj?: Partial<IMyMessage>) {
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

  public static encode(
    m: IMyMessage,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
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

    return w.finish();
  }

  public static decode(b: Uint8Array): MyMessage {
    const m = new MyMessage();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
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

    return m;
  }

  public static toJSON(m: IMyMessage): IMyMessageObj {
    return {
      e: MyEnum[m.e],
      repeatedE: MyEnum[m.repeatedE],
      repeatedPackedE: MyEnum[m.repeatedPackedE],
      repeatedPackedUnexpectedE: MyEnumPlusExtra[m.repeatedPackedUnexpectedE],
      oneofE1: MyEnum[m.oneofE1],
      oneofE2: MyEnum[m.oneofE2],
    };
  }

  public static fromJSON(obj: IMyMessageObj): IMyMessage {
    const m = new MyMessage();

    m.e = MyEnum[obj.e];
    m.repeatedE = MyEnum[obj.repeatedE];
    m.repeatedPackedE = MyEnum[obj.repeatedPackedE];
    m.repeatedPackedUnexpectedE =
      MyEnumPlusExtra[obj.repeatedPackedUnexpectedE];
    m.oneofE1 = MyEnum[obj.oneofE1];
    m.oneofE2 = MyEnum[obj.oneofE2];

    return m;
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

export interface IMyMessagePlusExtraObj {
  e: number;
  repeatedE: number;
  repeatedPackedE: number;
  repeatedPackedUnexpectedE: number;
  oneofE1?: number;
  oneofE2?: number;
}

export interface IMyMessagePlusExtra {
  e: number;
  repeatedE: number;
  repeatedPackedE: number;
  repeatedPackedUnexpectedE: number;
  oneofE1?: number;
  oneofE2?: number;
}

export class MyMessagePlusExtra implements IMyMessagePlusExtra {
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

  constructor(obj?: Partial<IMyMessagePlusExtra>) {
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

  public static encode(
    m: IMyMessagePlusExtra,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
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

    return w.finish();
  }

  public static decode(b: Uint8Array): MyMessagePlusExtra {
    const m = new MyMessagePlusExtra();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
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

    return m;
  }

  public static toJSON(m: IMyMessagePlusExtra): IMyMessagePlusExtraObj {
    return {
      e: MyEnumPlusExtra[m.e],
      repeatedE: MyEnumPlusExtra[m.repeatedE],
      repeatedPackedE: MyEnumPlusExtra[m.repeatedPackedE],
      repeatedPackedUnexpectedE: MyEnumPlusExtra[m.repeatedPackedUnexpectedE],
      oneofE1: MyEnumPlusExtra[m.oneofE1],
      oneofE2: MyEnumPlusExtra[m.oneofE2],
    };
  }

  public static fromJSON(obj: IMyMessagePlusExtraObj): IMyMessagePlusExtra {
    const m = new MyMessagePlusExtra();

    m.e = MyEnumPlusExtra[obj.e];
    m.repeatedE = MyEnumPlusExtra[obj.repeatedE];
    m.repeatedPackedE = MyEnumPlusExtra[obj.repeatedPackedE];
    m.repeatedPackedUnexpectedE =
      MyEnumPlusExtra[obj.repeatedPackedUnexpectedE];
    m.oneofE1 = MyEnumPlusExtra[obj.oneofE1];
    m.oneofE2 = MyEnumPlusExtra[obj.oneofE2];

    return m;
  }

  clone(): MyMessagePlusExtra {
    return new MyMessagePlusExtra(this);
  }
}
