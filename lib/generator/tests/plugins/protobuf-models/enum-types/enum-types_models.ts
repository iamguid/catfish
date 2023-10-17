// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: enum_types
// file: enum-types.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export enum TestEnum {
  ZERO = 0,
  FOO = 1,
  BAR = 2,
  BAZ = 3,
}

export interface IEnumMessageJSON {
  fEnum: string;
}

export class EnumMessage {
  fEnum: number = TestEnum.ZERO;

  public static fields = ["fEnum"];

  public get fields() {
    return EnumMessage.fields;
  }

  constructor(obj?: EnumMessage) {
    if (!obj) return;

    if (obj.fEnum !== undefined) {
      this.fEnum = obj.fEnum;
    }
  }

  public static encode(m: EnumMessage, w: pjs.Writer): pjs.Writer {
    // TestEnum f_enum = 1
    if (m.fEnum !== TestEnum.ZERO) {
      w.uint32(8);
      w.uint32(m.fEnum);
    }

    return w;
  }

  public static decode(m: EnumMessage, r: pjs.Reader, l: number): pjs.Reader {
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // TestEnum f_enum = 1
        case 8:
          m.fEnum = r.uint32();
          continue;
      }
    }

    return r;
  }

  public static toJSON(m: EnumMessage): IEnumMessageJSON {
    return {
      fEnum: TestEnum[m.fEnum],
    };
  }

  public static fromJSON(m: EnumMessage, obj: IEnumMessageJSON): EnumMessage {
    m.fEnum = TestEnum[obj.fEnum];

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return EnumMessage.encode(this, w).finish();
  }

  deserialize(b: Uint8Array | Buffer): EnumMessage {
    const r = new pjs.Reader(b);
    EnumMessage.decode(this, r, r.len);
    return this;
  }

  toJSON(): IEnumMessageJSON {
    return EnumMessage.toJSON(this);
  }

  fromJSON(obj: IEnumMessageJSON): EnumMessage {
    return EnumMessage.fromJSON(this, obj);
  }

  clone(): EnumMessage {
    return new EnumMessage(this);
  }
}
