// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: map_types
// file: map-types.proto

import * as pjs from "protobufjs/minimal";

export enum SimpleEnum {
  UNSPECIFIED = 0,
}

export interface ISimpleMessageObj {
  int32: a;
}

export interface ISimpleMessage {
  int32: a;
}

export class SimpleMessage implements ISimpleMessage {
  int32: a = new undefined();

  public static fields = ["int32"];

  public get fields() {
    return SimpleMessage.fields;
  }

  constructor(obj?: Partial<ISimpleMessage>) {
    if (!obj) return;

    if (obj.int32 !== undefined) {
      this.int32 = obj.int32;
    }
  }

  public static encode(
    m: ISimpleMessage,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // a int32 = 1
    if (m.int32 !== new undefined()) {
      w.uint32(10);
      w.a(m.int32);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): SimpleMessage {
    const m = new SimpleMessage();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // a int32 = 1
        case 10:
          m.int32 = r.a();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: ISimpleMessage): ISimpleMessageObj {
    return {
      int32: m.int32.toJSON(),
    };
  }

  public static fromJSON(obj: ISimpleMessageObj): ISimpleMessage {
    const m = new SimpleMessage();

    m.int32.fromJSON(obj.int32);

    return m;
  }

  clone(): SimpleMessage {
    return new SimpleMessage(this);
  }
}

export enum SimpleEnum {
  UNSPECIFIED = 0,
}

export interface IMapTypesObj {
  mapInt32String: Record<number, string>;
  mapInt32Bytes: Record<number, string>;
  mapInt32Bool: Record<number, boolean>;
  mapInt32Message: Record<number, SimpleMessage>;
  mapInt32Enum: Record<number, number>;
  mapStringString: Record<string, string>;
  mapUint64Int32: Record<string, number>;
}

export interface IMapTypes {
  mapInt32String: Map<number, string>;
  mapInt32Bytes: Map<number, Uint8Array | Buffer>;
  mapInt32Bool: Map<number, boolean>;
  mapInt32Message: Map<number, SimpleMessage>;
  mapInt32Enum: Map<number, number>;
  mapStringString: Map<string, string>;
  mapUint64Int32: Map<pjs.Long, number>;
}

export class MapTypes implements IMapTypes {
  mapInt32String: Record<number, string> = {};
  mapInt32Bytes: Record<number, Uint8Array | Buffer> = {};
  mapInt32Bool: Record<number, boolean> = {};
  mapInt32Message: Record<number, SimpleMessage> = {};
  mapInt32Enum: Record<number, number> = {};
  mapStringString: Record<string, string> = {};
  mapUint64Int32: Record<pjs.Long, number> = {};

  public static fields = [
    "mapInt32String",
    "mapInt32Bytes",
    "mapInt32Bool",
    "mapInt32Message",
    "mapInt32Enum",
    "mapStringString",
    "mapUint64Int32",
  ];

  public get fields() {
    return MapTypes.fields;
  }

  constructor(obj?: Partial<IMapTypes>) {
    if (!obj) return;

    if (obj.mapInt32String !== undefined) {
      this.mapInt32String = obj.mapInt32String;
    }
    if (obj.mapInt32Bytes !== undefined) {
      this.mapInt32Bytes = obj.mapInt32Bytes;
    }
    if (obj.mapInt32Bool !== undefined) {
      this.mapInt32Bool = obj.mapInt32Bool;
    }
    if (obj.mapInt32Message !== undefined) {
      this.mapInt32Message = obj.mapInt32Message;
    }
    if (obj.mapInt32Enum !== undefined) {
      this.mapInt32Enum = obj.mapInt32Enum;
    }
    if (obj.mapStringString !== undefined) {
      this.mapStringString = obj.mapStringString;
    }
    if (obj.mapUint64Int32 !== undefined) {
      this.mapUint64Int32 = obj.mapUint64Int32;
    }
  }

  public static encode(
    m: IMapTypes,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // map<int32, string> map_int32_string = 1

    // map<int32, bytes> map_int32_bytes = 2

    // map<int32, bool> map_int32_bool = 3

    // map<int32, SimpleMessage> map_int32_message = 4

    // map<int32, SimpleEnum> map_int32_enum = 5

    // map<string, string> map_string_string = 6

    // map<uint64, int32> map_uint64_int32 = 7

    return w.finish();
  }

  public static decode(b: Uint8Array): MapTypes {
    const m = new MapTypes();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // map<int32, string> map_int32_string = 1
        case null:
          {
            const key = r.int32();
            const value = r.string();

            m.mapInt32String.set(key, value);
          }
          continue;

        // map<int32, bytes> map_int32_bytes = 2
        case null:
          {
            const key = r.int32();
            const value = r.bytes();

            m.mapInt32Bytes.set(key, value);
          }
          continue;

        // map<int32, bool> map_int32_bool = 3
        case null:
          {
            const key = r.int32();
            const value = r.bool();

            m.mapInt32Bool.set(key, value);
          }
          continue;

        // map<int32, SimpleMessage> map_int32_message = 4
        case null:
          {
            const key = r.int32();
            const value = r.SimpleMessage();

            m.mapInt32Message.set(key, value);
          }
          continue;

        // map<int32, SimpleEnum> map_int32_enum = 5
        case null:
          {
            const key = r.int32();
            const value = r.uint32();

            m.mapInt32Enum.set(key, value);
          }
          continue;

        // map<string, string> map_string_string = 6
        case null:
          {
            const key = r.string();
            const value = r.string();

            m.mapStringString.set(key, value);
          }
          continue;

        // map<uint64, int32> map_uint64_int32 = 7
        case null:
          {
            const key = r.uint64();
            const value = r.int32();

            m.mapUint64Int32.set(key, value);
          }
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IMapTypes): IMapTypesObj {
    return {
      mapInt32String: m.mapInt32String,
      mapInt32Bytes: m.mapInt32Bytes,
      mapInt32Bool: m.mapInt32Bool,
      mapInt32Message: m.mapInt32Message,
      mapInt32Enum: m.mapInt32Enum,
      mapStringString: m.mapStringString,
      mapUint64Int32: m.mapUint64Int32,
    };
  }

  public static fromJSON(obj: IMapTypesObj): IMapTypes {
    const m = new MapTypes();

    m.mapInt32String = obj.mapInt32String;
    m.mapInt32Bytes = obj.mapInt32Bytes;
    m.mapInt32Bool = obj.mapInt32Bool;
    m.mapInt32Message = obj.mapInt32Message;
    m.mapInt32Enum = obj.mapInt32Enum;
    m.mapStringString = obj.mapStringString;
    m.mapUint64Int32 = obj.mapUint64Int32;

    return m;
  }

  clone(): MapTypes {
    return new MapTypes(this);
  }
}
