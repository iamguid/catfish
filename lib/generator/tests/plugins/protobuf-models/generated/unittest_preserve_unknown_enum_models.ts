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
  // NOT IMPLEMENTED
}

export class MyMessage {
  e: number = MyEnum.FOO;
  repeatedE: number = MyEnum.FOO;
  repeatedPackedE: number = MyEnum.FOO;
  repeatedPackedUnexpectedE: number = MyEnumPlusExtra.E_FOO;
  // NOT IMPLEMENTED

  public static fields = [
    "e",
    "repeatedE",
    "repeatedPackedE",
    "repeatedPackedUnexpectedE",
    "o",
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
    if (obj.o !== undefined) {
      // NOT IMPLEMENTED
    }
  }

  public static encode(m: MyMessage, w: pjs.Writer): pjs.Writer {
    // MyEnum e = 1
    if (m.e !== MyEnum.FOO) {
      w.uint32(8);
      w.int32(m.e);
    }

    // MyEnum repeated_e = 2
    if (m.repeatedE !== MyEnum.FOO) {
      w.uint32(16);
      w.int32(m.repeatedE);
    }

    // MyEnum repeated_packed_e = 3
    if (m.repeatedPackedE !== MyEnum.FOO) {
      w.uint32(24);
      w.int32(m.repeatedPackedE);
    }

    // MyEnumPlusExtra repeated_packed_unexpected_e = 4
    if (m.repeatedPackedUnexpectedE !== MyEnumPlusExtra.E_FOO) {
      w.uint32(32);
      w.int32(m.repeatedPackedUnexpectedE);
    }

    // NOT IMPLEMENTED

    return w;
  }

  public static decode(m: MyMessage, r: pjs.Reader, length: number): MyMessage {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // MyEnum e = 1
        case 8:
          m.e = r.int32();
          continue;

        // MyEnum repeated_e = 2
        case 16:
          m.repeatedE = r.int32();
          continue;

        // MyEnum repeated_packed_e = 3
        case 24:
          m.repeatedPackedE = r.int32();
          continue;

        // MyEnumPlusExtra repeated_packed_unexpected_e = 4
        case 32:
          m.repeatedPackedUnexpectedE = r.int32();
          continue;

        // NOT IMPLEMENTED
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: MyMessage): MyMessageJSON {
    return {
      e: MyEnum[m.e],
      repeatedE: MyEnum[m.repeatedE],
      repeatedPackedE: MyEnum[m.repeatedPackedE],
      repeatedPackedUnexpectedE: MyEnumPlusExtra[m.repeatedPackedUnexpectedE],
      // NOT IMPLEMENTED
    };
  }

  public static fromJSON(m: MyMessage, obj: MyMessageJSON): MyMessage {
    m.e = MyEnum[obj.e];
    m.repeatedE = MyEnum[obj.repeatedE];
    m.repeatedPackedE = MyEnum[obj.repeatedPackedE];
    m.repeatedPackedUnexpectedE =
      MyEnumPlusExtra[obj.repeatedPackedUnexpectedE];
    // NOT IMPLEMENTED

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return MyMessage.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): MyMessage {
    const r = new pjs.Reader(buffer);
    return MyMessage.decode(this, r, r.len);
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
  // NOT IMPLEMENTED
}

export class MyMessagePlusExtra {
  e: number = MyEnumPlusExtra.E_FOO;
  repeatedE: number = MyEnumPlusExtra.E_FOO;
  repeatedPackedE: number = MyEnumPlusExtra.E_FOO;
  repeatedPackedUnexpectedE: number = MyEnumPlusExtra.E_FOO;
  // NOT IMPLEMENTED

  public static fields = [
    "e",
    "repeatedE",
    "repeatedPackedE",
    "repeatedPackedUnexpectedE",
    "o",
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
    if (obj.o !== undefined) {
      // NOT IMPLEMENTED
    }
  }

  public static encode(m: MyMessagePlusExtra, w: pjs.Writer): pjs.Writer {
    // MyEnumPlusExtra e = 1
    if (m.e !== MyEnumPlusExtra.E_FOO) {
      w.uint32(8);
      w.int32(m.e);
    }

    // MyEnumPlusExtra repeated_e = 2
    if (m.repeatedE !== MyEnumPlusExtra.E_FOO) {
      w.uint32(16);
      w.int32(m.repeatedE);
    }

    // MyEnumPlusExtra repeated_packed_e = 3
    if (m.repeatedPackedE !== MyEnumPlusExtra.E_FOO) {
      w.uint32(24);
      w.int32(m.repeatedPackedE);
    }

    // MyEnumPlusExtra repeated_packed_unexpected_e = 4
    if (m.repeatedPackedUnexpectedE !== MyEnumPlusExtra.E_FOO) {
      w.uint32(32);
      w.int32(m.repeatedPackedUnexpectedE);
    }

    // NOT IMPLEMENTED

    return w;
  }

  public static decode(
    m: MyMessagePlusExtra,
    r: pjs.Reader,
    length: number
  ): MyMessagePlusExtra {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // MyEnumPlusExtra e = 1
        case 8:
          m.e = r.int32();
          continue;

        // MyEnumPlusExtra repeated_e = 2
        case 16:
          m.repeatedE = r.int32();
          continue;

        // MyEnumPlusExtra repeated_packed_e = 3
        case 24:
          m.repeatedPackedE = r.int32();
          continue;

        // MyEnumPlusExtra repeated_packed_unexpected_e = 4
        case 32:
          m.repeatedPackedUnexpectedE = r.int32();
          continue;

        // NOT IMPLEMENTED
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: MyMessagePlusExtra): MyMessagePlusExtraJSON {
    return {
      e: MyEnumPlusExtra[m.e],
      repeatedE: MyEnumPlusExtra[m.repeatedE],
      repeatedPackedE: MyEnumPlusExtra[m.repeatedPackedE],
      repeatedPackedUnexpectedE: MyEnumPlusExtra[m.repeatedPackedUnexpectedE],
      // NOT IMPLEMENTED
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
    // NOT IMPLEMENTED

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return MyMessagePlusExtra.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): MyMessagePlusExtra {
    const r = new pjs.Reader(buffer);
    return MyMessagePlusExtra.decode(this, r, r.len);
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
