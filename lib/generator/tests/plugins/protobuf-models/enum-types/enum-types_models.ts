// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: enum_types
// file: enum-types.proto

import * as pjs from "protobufjs/minimal";

export enum TestEnum {
  ZERO = 0,
  FOO = 1,
  BAR = 2,
  BAZ = 3,
}

export interface IEnumMessageObj {
  fEnum: number;
}

export interface IEnumMessage {
  fEnum: number;
}

export class EnumMessage implements IEnumMessage {
  fEnum: number = TestEnum.ZERO;

  public static fields = ["fEnum"];

  public get fields() {
    return EnumMessage.fields;
  }

  constructor(obj?: Partial<IEnumMessage>) {
    if (!obj) return;

    if (obj.fEnum !== undefined) {
      this.fEnum = obj.fEnum;
    }
  }

  public static encode(
    m: IEnumMessage,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // TestEnum f_enum = 1
    if (m.fEnum !== TestEnum.ZERO) {
      w.uint32(8);
      w.uint32(m.fEnum);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): EnumMessage {
    const m = new EnumMessage();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // TestEnum f_enum = 1
        case 8:
          m.fEnum = r.uint32();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IEnumMessage): IEnumMessageObj {
    return {
      fEnum: TestEnum[m.fEnum],
    };
  }

  public static fromJSON(obj: IEnumMessageObj): IEnumMessage {
    const m = new EnumMessage();

    m.fEnum = TestEnum[obj.fEnum];

    return m;
  }

  clone(): EnumMessage {
    return new EnumMessage(this);
  }
}
