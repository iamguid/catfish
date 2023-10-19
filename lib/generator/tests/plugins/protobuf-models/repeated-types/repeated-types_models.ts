// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: repeated_types
// file: repeated-types.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export enum SimpleEnum {
  UNSPECIFIED = 0,
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
  UNSPECIFIED = 0,
  FOO = 1,
  BAR = 2,
  BAZ = 3,
}

export interface RepeatedTypesJSON {
  repeatedInt32: number[];
  repeatedBytes: string[];
  repeatedString: string[];
  repeatedBool: boolean[];
  repeatedUint64: string[];
  repeatedEnum: string[];
  repeatedMessage: SimpleMessageJSON[];
}

export class RepeatedTypes {
  repeatedInt32: number[] = [];
  repeatedBytes: (Uint8Array | Buffer)[] = [];
  repeatedString: string[] = [];
  repeatedBool: boolean[] = [];
  repeatedUint64: pjs.Long[] = [];
  repeatedEnum: number[] = [];
  repeatedMessage: SimpleMessage[] = [];

  public static fields = [
    "repeatedInt32",
    "repeatedBytes",
    "repeatedString",
    "repeatedBool",
    "repeatedUint64",
    "repeatedEnum",
    "repeatedMessage",
  ];

  public get fields() {
    return RepeatedTypes.fields;
  }

  constructor(obj?: RepeatedTypes) {
    if (!obj) return;

    if (obj.repeatedInt32 !== undefined) {
      this.repeatedInt32 = obj.repeatedInt32.map((val) => val);
    }
    if (obj.repeatedBytes !== undefined) {
      this.repeatedBytes = obj.repeatedBytes.map(
        (val) => new pjs.util.Buffer(val)
      );
    }
    if (obj.repeatedString !== undefined) {
      this.repeatedString = obj.repeatedString.map((val) => val);
    }
    if (obj.repeatedBool !== undefined) {
      this.repeatedBool = obj.repeatedBool.map((val) => val);
    }
    if (obj.repeatedUint64 !== undefined) {
      this.repeatedUint64 = obj.repeatedUint64.map(
        (val) => new pjs.util.Long(val)
      );
    }
    if (obj.repeatedEnum !== undefined) {
      this.repeatedEnum = obj.repeatedEnum.map((val) => val);
    }
    if (obj.repeatedMessage !== undefined) {
      this.repeatedMessage = obj.repeatedMessage.map(
        (val) => new SimpleMessage(val)
      );
    }
  }

  public static encode(m: RepeatedTypes, w: pjs.Writer): pjs.Writer {
    // repeated int32 repeated_int32 = 1
    if (m.repeatedInt32.length > 0) {
      w.uint32(10);
      w.uint32(m.repeatedInt32.length);
      for (let item of m.repeatedInt32) {
        w.int32(item);
      }
    }

    // repeated bytes repeated_bytes = 2
    if (m.repeatedBytes.length > 0) {
      for (let item of m.repeatedBytes) {
        w.uint32(18);
        w.bytes(item);
      }
    }

    // repeated string repeated_string = 3
    if (m.repeatedString.length > 0) {
      for (let item of m.repeatedString) {
        w.uint32(26);
        w.string(item);
      }
    }

    // repeated bool repeated_bool = 4
    if (m.repeatedBool.length > 0) {
      w.uint32(34);
      w.uint32(m.repeatedBool.length);
      for (let item of m.repeatedBool) {
        w.bool(item);
      }
    }

    // repeated uint64 repeated_uint64 = 5
    if (m.repeatedUint64.length > 0) {
      w.uint32(42);
      w.uint32(m.repeatedUint64.length);
      for (let item of m.repeatedUint64) {
        w.uint64(item);
      }
    }

    // repeated SimpleEnum repeated_enum = 6
    if (m.repeatedEnum.length > 0) {
      w.uint32(50);
      w.uint32(m.repeatedEnum.length);
      for (let item of m.repeatedEnum) {
        w.int32(item);
      }
    }

    // repeated SimpleMessage repeated_message = 7
    if (m.repeatedMessage.length > 0) {
      for (let item of m.repeatedMessage) {
        w.uint32(58);
        SimpleMessage.encode(item, w.fork()).ldelim();
      }
    }

    return w;
  }

  public static decode(
    m: RepeatedTypes,
    r: pjs.Reader,
    length: number
  ): RepeatedTypes {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // repeated int32 repeated_int32 = 1
        case 10: {
          const l = r.uint32();
          for (let i = 0; i < l; i++) {
            m.repeatedInt32.push(r.int32());
          }
          continue;
        }

        // repeated bytes repeated_bytes = 2
        case 18:
          m.repeatedBytes.push(r.bytes());
          continue;

        // repeated string repeated_string = 3
        case 26:
          m.repeatedString.push(r.string());
          continue;

        // repeated bool repeated_bool = 4
        case 34: {
          const l = r.uint32();
          for (let i = 0; i < l; i++) {
            m.repeatedBool.push(r.bool());
          }
          continue;
        }

        // repeated uint64 repeated_uint64 = 5
        case 42: {
          const l = r.uint32();
          for (let i = 0; i < l; i++) {
            m.repeatedUint64.push(r.uint64());
          }
          continue;
        }

        // repeated SimpleEnum repeated_enum = 6
        case 50: {
          const l = r.uint32();
          for (let i = 0; i < l; i++) {
            m.repeatedEnum.push(r.int32());
          }
          continue;
        }

        // repeated SimpleMessage repeated_message = 7
        case 58:
          m.repeatedMessage.push(
            SimpleMessage.decode(new SimpleMessage(), r, r.uint32())
          );
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: RepeatedTypes): RepeatedTypesJSON {
    return {
      repeatedInt32: m.repeatedInt32.map((val) => val),
      repeatedBytes: m.repeatedBytes.map((val) =>
        runtime.convertBytesToBase64(val)
      ),
      repeatedString: m.repeatedString.map((val) => val),
      repeatedBool: m.repeatedBool.map((val) => val),
      repeatedUint64: m.repeatedUint64.map((val) => val.toString()),
      repeatedEnum: m.repeatedEnum.map((val) => SimpleEnum[val]),
      repeatedMessage: m.repeatedMessage.map((val) => val.toJSON()),
    };
  }

  public static fromJSON(
    m: RepeatedTypes,
    obj: RepeatedTypesJSON
  ): RepeatedTypes {
    m.repeatedInt32 = obj.repeatedInt32.map((val) => val);
    m.repeatedBytes = obj.repeatedBytes.map((val) =>
      runtime.convertBase64ToBytes(val)
    );
    m.repeatedString = obj.repeatedString.map((val) => val);
    m.repeatedBool = obj.repeatedBool.map((val) => val);
    m.repeatedUint64 = obj.repeatedUint64.map((val) =>
      pjs.util.Long.fromValue(val, true)
    );
    m.repeatedEnum = obj.repeatedEnum.map((val) => SimpleEnum[val]);
    m.repeatedMessage = obj.repeatedMessage.map((val) =>
      new SimpleMessage().fromJSON(val)
    );

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return RepeatedTypes.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): RepeatedTypes {
    const r = new pjs.Reader(buffer);
    return RepeatedTypes.decode(this, r, r.len);
  }

  toJSON(): RepeatedTypesJSON {
    return RepeatedTypes.toJSON(this);
  }

  fromJSON(obj: RepeatedTypesJSON): RepeatedTypes {
    return RepeatedTypes.fromJSON(this, obj);
  }

  clone(): RepeatedTypes {
    return new RepeatedTypes(this);
  }
}
