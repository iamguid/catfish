// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: oneof_types
// file: oneof-types.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export enum SimpleEnum {
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
    return {
      a: m.a,
    };
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

export enum SimpleEnum {
  ZERO = 0,
  FOO = 1,
  BAR = 2,
  BAZ = 3,
}

type OneofTypesTestOneofType =
  | { oneofInt32: number }
  | { oneofUint64: number }
  | { oneofString: string }
  | { oneofBytes: Uint8Array | Buffer }
  | { oneofEnum: number }
  | { oneofMessage: SimpleMessage }
  | undefined;

type OneofTypesTestOneofJSONType =
  | { oneofInt32: number }
  | { oneofUint64: number }
  | { oneofString: string }
  | { oneofBytes: string }
  | { oneofEnum: string }
  | { oneofMessage: SimpleMessageJSON }
  | undefined;

export interface OneofTypesJSON {
  fInt32: number;
  testOneof?: OneofTypesTestOneofJSONType = undefined;
}

export class OneofTypes {
  fInt32: number = 0;
  testOneof?: OneofTypesTestOneofType = undefined;

  public static fields = ["fInt32", "testOneof"];

  public get fields() {
    return OneofTypes.fields;
  }

  constructor(obj?: OneofTypes) {
    if (!obj) return;

    if (obj.fInt32 !== undefined) {
      this.fInt32 = obj.fInt32;
    }
    if (obj.testOneof !== undefined) {
      switch (true) {
        case obj.testOneof.oneofInt32 !== undefined:
          this.testOneof = { oneofInt32: obj.testOneof.oneofInt32 };
          break;

        case obj.testOneof.oneofUint64 !== undefined:
          this.testOneof = { oneofUint64: obj.testOneof.oneofUint64 };
          break;

        case obj.testOneof.oneofString !== undefined:
          this.testOneof = { oneofString: obj.testOneof.oneofString };
          break;

        case obj.testOneof.oneofBytes !== undefined:
          this.testOneof = {
            oneofBytes: new pjs.util.Buffer(obj.testOneof.oneofBytes),
          };
          break;

        case obj.testOneof.oneofEnum !== undefined:
          this.testOneof = { oneofEnum: obj.testOneof.oneofEnum };
          break;

        case obj.testOneof.oneofMessage !== undefined:
          this.testOneof = {
            oneofMessage: new SimpleMessage(obj.testOneof.oneofMessage),
          };
          break;
      }
    }
  }

  public static encode(m: OneofTypes, w: pjs.Writer): pjs.Writer {
    // int32 f_int32 = 1
    if (m.fInt32 !== undefined) {
      w.uint32(8);
      w.int32(m.fInt32);
    }

    // oneof
    switch (true) {
      case m.testOneof?.oneofInt32 !== undefined:
        w.uint32(16);
        w.int32(m.testOneof.oneofInt32);
        break;

      case m.testOneof?.oneofUint64 !== undefined:
        w.uint32(24);
        w.uint32(m.testOneof.oneofUint64);
        break;

      case m.testOneof?.oneofString !== undefined:
        w.uint32(34);
        w.string(m.testOneof.oneofString);
        break;

      case m.testOneof?.oneofBytes !== undefined:
        w.uint32(42);
        w.bytes(m.testOneof.oneofBytes);
        break;

      case m.testOneof?.oneofEnum !== undefined:
        w.uint32(48);
        w.int32(m.testOneof.oneofEnum);
        break;

      case m.testOneof?.oneofMessage !== undefined:
        w.uint32(58);
        SimpleMessage.encode(m.testOneof.oneofMessage, w.fork()).ldelim();
        break;
    }

    return w;
  }

  public static decode(
    m: OneofTypes,
    r: pjs.Reader,
    length: number
  ): OneofTypes {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 f_int32 = 1
        case 8:
          m.fInt32 = r.int32();
          continue;

        // oneof testOneof begin

        case 16:
          m.testOneof = { oneofInt32: r.int32() };
          break;

        case 24:
          m.testOneof = { oneofUint64: r.uint32() };
          break;

        case 34:
          m.testOneof = { oneofString: r.string() };
          break;

        case 42:
          m.testOneof = { oneofBytes: r.bytes() };
          break;

        case 48:
          m.testOneof = { oneofEnum: r.int32() };
          break;

        case 58:
          m.testOneof = {
            oneofMessage: SimpleMessage.decode(
              new SimpleMessage(),
              r,
              r.uint32()
            ),
          };
          break;

        // oneof testOneof end
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: OneofTypes): OneofTypesJSON {
    return {
      fInt32: m.fInt32,

      // oneof testOneof
      testOneof: (() => {
        switch (true) {
          case m.testOneof?.oneofInt32 !== undefined:
            return { oneofInt32: m.testOneof.oneofInt32 };

          case m.testOneof?.oneofUint64 !== undefined:
            return { oneofUint64: m.testOneof.oneofUint64 };

          case m.testOneof?.oneofString !== undefined:
            return { oneofString: m.testOneof.oneofString };

          case m.testOneof?.oneofBytes !== undefined:
            return {
              oneofBytes: runtime.convertBytesToBase64(m.testOneof.oneofBytes),
            };

          case m.testOneof?.oneofEnum !== undefined:
            return { oneofEnum: SimpleEnum[m.testOneof.oneofEnum] };

          case m.testOneof?.oneofMessage !== undefined:
            return { oneofMessage: m.testOneof.oneofMessage.toJSON() };
        }
      })(),
    };
  }

  public static fromJSON(m: OneofTypes, obj: OneofTypesJSON): OneofTypes {
    m.fInt32 = obj.fInt32;

    // oneof testOneof
    m.testOneof = (() => {
      switch (true) {
        case obj.testOneof?.oneofInt32 !== undefined:
          return { oneofInt32: obj.testOneof?.oneofInt32 };

        case obj.testOneof?.oneofUint64 !== undefined:
          return { oneofUint64: obj.testOneof?.oneofUint64 };

        case obj.testOneof?.oneofString !== undefined:
          return { oneofString: obj.testOneof?.oneofString };

        case obj.testOneof?.oneofBytes !== undefined:
          return {
            oneofBytes: runtime.convertBase64ToBytes(obj.testOneof?.oneofBytes),
          };

        case obj.testOneof?.oneofEnum !== undefined:
          return { oneofEnum: SimpleEnum[obj.testOneof?.oneofEnum] };

        case obj.testOneof?.oneofMessage !== undefined:
          return {
            oneofMessage: new SimpleMessage().fromJSON(
              obj.testOneof?.oneofMessage
            ),
          };
      }
    })();

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return OneofTypes.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): OneofTypes {
    const r = new pjs.Reader(buffer);
    return OneofTypes.decode(this, r, r.len);
  }

  toJSON(): OneofTypesJSON {
    return OneofTypes.toJSON(this);
  }

  fromJSON(obj: OneofTypesJSON): OneofTypes {
    return OneofTypes.fromJSON(this, obj);
  }

  clone(): OneofTypes {
    return new OneofTypes(this);
  }
}
