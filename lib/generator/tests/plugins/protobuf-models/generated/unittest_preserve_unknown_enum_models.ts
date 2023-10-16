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
  e: null;
  repeatedE: null;
  repeatedPackedE: null;
  repeatedPackedUnexpectedE: null;
  oneofE1?: null;
  oneofE2?: null;
}

export interface IMyMessage {
  e: null;
  repeatedE: null;
  repeatedPackedE: null;
  repeatedPackedUnexpectedE: null;
  oneofE1?: null;
  oneofE2?: null;
}

export class MyMessage implements IMyMessage {
  e: null = null;
  repeatedE: null = [];
  repeatedPackedE: null = [];
  repeatedPackedUnexpectedE: null = [];
  oneofE1?: null = null;
  oneofE2?: null = null;

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
    if (m.e !== null) {
      w.uint32(10);
      m.e.encode(writer);
    }

    // MyEnum repeated_e = 2
    if (m.repeatedE !== []) {
      w.uint32(18);
      m.repeatedE.encode(writer);
    }

    // MyEnum repeated_packed_e = 3
    if (m.repeatedPackedE !== []) {
      w.uint32(26);
      m.repeatedPackedE.encode(writer);
    }

    // MyEnumPlusExtra repeated_packed_unexpected_e = 4
    if (m.repeatedPackedUnexpectedE !== []) {
      w.uint32(34);
      m.repeatedPackedUnexpectedE.encode(writer);
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
        case 10:
          m.e =
            unittest_preserve_unknown_enum_models.proto3_preserve_unknown_enum_unittest.MyEnum;
          continue;

        // repeated MyEnum repeated_e = 2
        case 18:
          const repeatedEValue =
            unittest_preserve_unknown_enum_models
              .proto3_preserve_unknown_enum_unittest.MyEnum;

          m.repeatedE.push(repeatedEValue);
          continue;

        // repeated MyEnum repeated_packed_e = 3
        case 26:
          const repeatedPackedEValue =
            unittest_preserve_unknown_enum_models
              .proto3_preserve_unknown_enum_unittest.MyEnum;

          m.repeatedPackedE.push(repeatedPackedEValue);
          continue;

        // repeated MyEnumPlusExtra repeated_packed_unexpected_e = 4
        case 34:
          const repeatedPackedUnexpectedEValue =
            unittest_preserve_unknown_enum_models
              .proto3_preserve_unknown_enum_unittest.MyEnumPlusExtra;

          m.repeatedPackedUnexpectedE.push(repeatedPackedUnexpectedEValue);
          continue;

        // MyEnum oneof_e_1 = 5
        case 42:
          m.oneofE1 =
            unittest_preserve_unknown_enum_models.proto3_preserve_unknown_enum_unittest.MyEnum;
          continue;

        // MyEnum oneof_e_2 = 6
        case 50:
          m.oneofE2 =
            unittest_preserve_unknown_enum_models.proto3_preserve_unknown_enum_unittest.MyEnum;
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IMyMessage): IMyMessageObj {}

  public static fromJSON(obj: IMyMessageObj): IMyMessage {}

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
  e: null;
  repeatedE: null;
  repeatedPackedE: null;
  repeatedPackedUnexpectedE: null;
  oneofE1?: null;
  oneofE2?: null;
}

export interface IMyMessagePlusExtra {
  e: null;
  repeatedE: null;
  repeatedPackedE: null;
  repeatedPackedUnexpectedE: null;
  oneofE1?: null;
  oneofE2?: null;
}

export class MyMessagePlusExtra implements IMyMessagePlusExtra {
  e: null = null;
  repeatedE: null = [];
  repeatedPackedE: null = [];
  repeatedPackedUnexpectedE: null = [];
  oneofE1?: null = null;
  oneofE2?: null = null;

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
    if (m.e !== null) {
      w.uint32(10);
      m.e.encode(writer);
    }

    // MyEnumPlusExtra repeated_e = 2
    if (m.repeatedE !== []) {
      w.uint32(18);
      m.repeatedE.encode(writer);
    }

    // MyEnumPlusExtra repeated_packed_e = 3
    if (m.repeatedPackedE !== []) {
      w.uint32(26);
      m.repeatedPackedE.encode(writer);
    }

    // MyEnumPlusExtra repeated_packed_unexpected_e = 4
    if (m.repeatedPackedUnexpectedE !== []) {
      w.uint32(34);
      m.repeatedPackedUnexpectedE.encode(writer);
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
        case 10:
          m.e =
            unittest_preserve_unknown_enum_models.proto3_preserve_unknown_enum_unittest.MyEnumPlusExtra;
          continue;

        // repeated MyEnumPlusExtra repeated_e = 2
        case 18:
          const repeatedEValue =
            unittest_preserve_unknown_enum_models
              .proto3_preserve_unknown_enum_unittest.MyEnumPlusExtra;

          m.repeatedE.push(repeatedEValue);
          continue;

        // repeated MyEnumPlusExtra repeated_packed_e = 3
        case 26:
          const repeatedPackedEValue =
            unittest_preserve_unknown_enum_models
              .proto3_preserve_unknown_enum_unittest.MyEnumPlusExtra;

          m.repeatedPackedE.push(repeatedPackedEValue);
          continue;

        // repeated MyEnumPlusExtra repeated_packed_unexpected_e = 4
        case 34:
          const repeatedPackedUnexpectedEValue =
            unittest_preserve_unknown_enum_models
              .proto3_preserve_unknown_enum_unittest.MyEnumPlusExtra;

          m.repeatedPackedUnexpectedE.push(repeatedPackedUnexpectedEValue);
          continue;

        // MyEnumPlusExtra oneof_e_1 = 5
        case 42:
          m.oneofE1 =
            unittest_preserve_unknown_enum_models.proto3_preserve_unknown_enum_unittest.MyEnumPlusExtra;
          continue;

        // MyEnumPlusExtra oneof_e_2 = 6
        case 50:
          m.oneofE2 =
            unittest_preserve_unknown_enum_models.proto3_preserve_unknown_enum_unittest.MyEnumPlusExtra;
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IMyMessagePlusExtra): IMyMessagePlusExtraObj {}

  public static fromJSON(obj: IMyMessagePlusExtraObj): IMyMessagePlusExtra {}

  clone(): MyMessagePlusExtra {
    return new MyMessagePlusExtra(this);
  }
}
