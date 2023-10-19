// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: optional_types
// file: optional-types.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export enum TestEnum {
  ZERO = 0,
  FOO = 1,
  BAR = 2,
  BAZ = 3,
}

export interface SimpleMessageJSON {
  a: number;
}

export class SimpleMessage {
  a: number = 0;

  public static fields = ["a"];

  public get fields() {
    return SimpleMessage.fields;
  }

  constructor(obj?: SimpleMessage) {
    if (!obj) return;

    if (obj.a !== undefined) {
      this.a = obj.a;
    }
  }

  public static encode(m: SimpleMessage, w: pjs.Writer): pjs.Writer {
    // int32 a = 1
    if (m.a !== undefined) {
      w.uint32(8);
      w.int32(m.a);
    }

    return w;
  }

  public static decode(
    m: SimpleMessage,
    r: pjs.Reader,
    length: number
  ): SimpleMessage {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 a = 1
        case 8:
          m.a = r.int32();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: SimpleMessage): SimpleMessageJSON {
    const obj = {};

    obj["a"] = m.a;

    return obj;
  }

  public static fromJSON(
    m: SimpleMessage,
    obj: SimpleMessageJSON
  ): SimpleMessage {
    m.a = obj.a;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return SimpleMessage.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): SimpleMessage {
    const r = new pjs.Reader(buffer);
    return SimpleMessage.decode(this, r, r.len);
  }

  toJSON(): SimpleMessageJSON {
    return SimpleMessage.toJSON(this);
  }

  fromJSON(obj: SimpleMessageJSON): SimpleMessage {
    return SimpleMessage.fromJSON(this, obj);
  }

  clone(): SimpleMessage {
    return new SimpleMessage(this);
  }
}

export enum TestEnum {
  ZERO = 0,
  FOO = 1,
  BAR = 2,
  BAZ = 3,
}

export interface OptionalMessageJSON {
  oInt32?: number | undefined;
  oInt64?: string | undefined;
  oBytes?: string | undefined;
  oString?: string | undefined;
  oEnum?: string | undefined;
  oMessage?: SimpleMessageJSON | undefined;
}

export class OptionalMessage {
  oInt32: number | undefined = undefined;
  oInt64: pjs.Long | undefined = undefined;
  oBytes: Uint8Array | Buffer | undefined = undefined;
  oString: string | undefined = undefined;
  oEnum: number | undefined = undefined;
  oMessage: SimpleMessage | undefined = undefined;

  public static fields = [
    "oInt32",
    "oInt64",
    "oBytes",
    "oString",
    "oEnum",
    "oMessage",
  ];

  public get fields() {
    return OptionalMessage.fields;
  }

  constructor(obj?: OptionalMessage) {
    if (!obj) return;

    if (obj.oInt32 !== undefined) {
      this.oInt32 = obj.oInt32;
    }
    if (obj.oInt64 !== undefined) {
      this.oInt64 = new pjs.util.Long(obj.oInt64);
    }
    if (obj.oBytes !== undefined) {
      this.oBytes = new pjs.util.Buffer(obj.oBytes);
    }
    if (obj.oString !== undefined) {
      this.oString = obj.oString;
    }
    if (obj.oEnum !== undefined) {
      this.oEnum = obj.oEnum;
    }
    if (obj.oMessage !== undefined) {
      this.oMessage = new SimpleMessage(obj.oMessage);
    }
  }

  public static encode(m: OptionalMessage, w: pjs.Writer): pjs.Writer {
    // int32 o_int32 = 1
    if (m.oInt32 !== undefined) {
      w.uint32(8);
      w.int32(m.oInt32);
    }

    // int64 o_int64 = 2
    if (m.oInt64 !== undefined) {
      w.uint32(16);
      w.int64(m.oInt64);
    }

    // bytes o_bytes = 3
    if (m.oBytes !== undefined) {
      w.uint32(26);
      w.bytes(m.oBytes);
    }

    // string o_string = 4
    if (m.oString !== undefined) {
      w.uint32(34);
      w.string(m.oString);
    }

    // TestEnum o_enum = 5
    if (m.oEnum !== undefined) {
      w.uint32(40);
      w.int32(m.oEnum);
    }

    // SimpleMessage o_message = 6
    if (m.oMessage !== undefined) {
      w.uint32(50);
      SimpleMessage.encode(m.oMessage, w.fork()).ldelim();
    }

    return w;
  }

  public static decode(
    m: OptionalMessage,
    r: pjs.Reader,
    length: number
  ): OptionalMessage {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 o_int32 = 1
        case 8:
          m.oInt32 = r.int32();
          continue;

        // int64 o_int64 = 2
        case 16:
          m.oInt64 = r.int64();
          continue;

        // bytes o_bytes = 3
        case 26:
          m.oBytes = r.bytes();
          continue;

        // string o_string = 4
        case 34:
          m.oString = r.string();
          continue;

        // TestEnum o_enum = 5
        case 40:
          m.oEnum = r.int32();
          continue;

        // SimpleMessage o_message = 6
        case 50:
          m.oMessage = SimpleMessage.decode(undefined, r, r.uint32());
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: OptionalMessage): OptionalMessageJSON {
    const obj = {};

    if (m.oInt32 !== undefined) {
      obj["oInt32"] = m.oInt32;
    }
    if (m.oInt64 !== undefined) {
      obj["oInt64"] = m.oInt64.toString();
    }
    if (m.oBytes !== undefined) {
      obj["oBytes"] = runtime.convertBytesToBase64(m.oBytes);
    }
    if (m.oString !== undefined) {
      obj["oString"] = m.oString;
    }
    if (m.oEnum !== undefined) {
      obj["oEnum"] = TestEnum[m.oEnum];
    }
    if (m.oMessage !== undefined) {
      obj["oMessage"] = m.oMessage.toJSON();
    }

    return obj;
  }

  public static fromJSON(
    m: OptionalMessage,
    obj: OptionalMessageJSON
  ): OptionalMessage {
    if (obj.oInt32 !== undefined) {
      m.oInt32 = obj.oInt32;
    }
    if (obj.oInt64 !== undefined) {
      m.oInt64 = pjs.util.Long.fromValue(obj.oInt64, false);
    }
    if (obj.oBytes !== undefined) {
      m.oBytes = runtime.convertBase64ToBytes(obj.oBytes);
    }
    if (obj.oString !== undefined) {
      m.oString = obj.oString;
    }
    if (obj.oEnum !== undefined) {
      m.oEnum = TestEnum[obj.oEnum];
    }
    if (obj.oMessage !== undefined) {
      m.oMessage = new SimpleMessage().fromJSON(obj.oMessage);
    }

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return OptionalMessage.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): OptionalMessage {
    const r = new pjs.Reader(buffer);
    return OptionalMessage.decode(this, r, r.len);
  }

  toJSON(): OptionalMessageJSON {
    return OptionalMessage.toJSON(this);
  }

  fromJSON(obj: OptionalMessageJSON): OptionalMessage {
    return OptionalMessage.fromJSON(this, obj);
  }

  clone(): OptionalMessage {
    return new OptionalMessage(this);
  }
}
