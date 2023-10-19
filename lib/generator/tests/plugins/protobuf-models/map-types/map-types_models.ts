// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: map_types
// file: map-types.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export enum SimpleEnum {
  UNSPECIFIED = 0,
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
    if (m.a !== 0) {
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
}

export interface MapTypesJSON {
  mapInt32String: Record<number, string>;
  mapInt32Bytes: Record<number, string>;
  mapInt32Bool: Record<number, boolean>;
  mapInt32Message: Record<number, SimpleMessageJSON>;
  mapInt32Enum: Record<number, string>;
  mapStringString: Record<string, string>;
  mapUint64Int32: Record<string, number>;
}

export class MapTypes {
  mapInt32String: Map<number, string> = new Map();
  mapInt32Bytes: Map<number, Uint8Array | Buffer> = new Map();
  mapInt32Bool: Map<number, boolean> = new Map();
  mapInt32Message: Map<number, SimpleMessage> = new Map();
  mapInt32Enum: Map<number, number> = new Map();
  mapStringString: Map<string, string> = new Map();
  mapUint64Int32: Map<pjs.Long, number> = new Map();

  public static fields = [
    "mapInt32String",
    "mapInt32Bytes",
    "mapInt32Bool",
    "mapInt32Message",
    "mapInt32Enum",
    "mapStringString",
    "mapUint64Int32",
  ];

  // map<int32, string> map_int32_string = 1
  public static encodeMapInt32String(
    m: Map<number, string>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(10);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      w2.string(val);
      w2.ldelim();
    }
    return w;
  }

  // map<int32, bytes> map_int32_bytes = 2
  public static encodeMapInt32Bytes(
    m: Map<number, Uint8Array | Buffer>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(18);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      w2.bytes(val);
      w2.ldelim();
    }
    return w;
  }

  // map<int32, bool> map_int32_bool = 3
  public static encodeMapInt32Bool(
    m: Map<number, boolean>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(26);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(16);
      w2.bool(val);
      w2.ldelim();
    }
    return w;
  }

  // map<int32, SimpleMessage> map_int32_message = 4
  public static encodeMapInt32Message(
    m: Map<number, SimpleMessage>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(34);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      SimpleMessage.encode(val, w2.fork()).ldelim();
      w2.ldelim();
    }
    return w;
  }

  // map<int32, SimpleEnum> map_int32_enum = 5
  public static encodeMapInt32Enum(
    m: Map<number, number>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(42);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(16);
      w2.int32(val);
      w2.ldelim();
    }
    return w;
  }

  // map<string, string> map_string_string = 6
  public static encodeMapStringString(
    m: Map<string, string>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(50);
      const w2 = w.fork();
      w.uint32(10);
      w.string(key);
      w.uint32(18);
      w2.string(val);
      w2.ldelim();
    }
    return w;
  }

  // map<uint64, int32> map_uint64_int32 = 7
  public static encodeMapUint64Int32(
    m: Map<pjs.Long, number>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(58);
      const w2 = w.fork();
      w.uint32(8);
      w.uint64(key);
      w.uint32(16);
      w2.int32(val);
      w2.ldelim();
    }
    return w;
  }

  // map<int32, string> map_int32_string = 1
  public static decodeMapInt32String(
    r: pjs.Reader,
    length: number
  ): [number, string] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v = r.string();
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, bytes> map_int32_bytes = 2
  public static decodeMapInt32Bytes(
    r: pjs.Reader,
    length: number
  ): [number, Uint8Array | Buffer] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v = r.bytes();
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, bool> map_int32_bool = 3
  public static decodeMapInt32Bool(
    r: pjs.Reader,
    length: number
  ): [number, boolean] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 16:
          v = r.bool();
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, SimpleMessage> map_int32_message = 4
  public static decodeMapInt32Message(
    r: pjs.Reader,
    length: number
  ): [number, SimpleMessage] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 18:
          v = SimpleMessage.decode(new SimpleMessage(), r, r.uint32());
          continue;
      }
    }

    return [k, v];
  }

  // map<int32, SimpleEnum> map_int32_enum = 5
  public static decodeMapInt32Enum(
    r: pjs.Reader,
    length: number
  ): [number, number] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.int32();
          continue;
        case 16:
          v = r.int32();
          continue;
      }
    }

    return [k, v];
  }

  // map<string, string> map_string_string = 6
  public static decodeMapStringString(
    r: pjs.Reader,
    length: number
  ): [string, string] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 10:
          k = r.string();
          continue;
        case 18:
          v = r.string();
          continue;
      }
    }

    return [k, v];
  }

  // map<uint64, int32> map_uint64_int32 = 7
  public static decodeMapUint64Int32(
    r: pjs.Reader,
    length: number
  ): [pjs.Long, number] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 8:
          k = r.uint64();
          continue;
        case 16:
          v = r.int32();
          continue;
      }
    }

    return [k, v];
  }

  public get fields() {
    return MapTypes.fields;
  }

  constructor(obj?: MapTypes) {
    if (!obj) return;

    if (obj.mapInt32String !== undefined) {
      const entries = Array.from(obj.mapInt32String.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapInt32String = new Map(copy);
    }
    if (obj.mapInt32Bytes !== undefined) {
      const entries = Array.from(obj.mapInt32Bytes.entries());
      const copy = entries.map(([key, val]) => [key, new pjs.util.Buffer(val)]);
      this.mapInt32Bytes = new Map(copy);
    }
    if (obj.mapInt32Bool !== undefined) {
      const entries = Array.from(obj.mapInt32Bool.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapInt32Bool = new Map(copy);
    }
    if (obj.mapInt32Message !== undefined) {
      const entries = Array.from(obj.mapInt32Message.entries());
      const copy = entries.map(([key, val]) => [key, val.clone()]);
      this.mapInt32Message = new Map(copy);
    }
    if (obj.mapInt32Enum !== undefined) {
      const entries = Array.from(obj.mapInt32Enum.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapInt32Enum = new Map(copy);
    }
    if (obj.mapStringString !== undefined) {
      const entries = Array.from(obj.mapStringString.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapStringString = new Map(copy);
    }
    if (obj.mapUint64Int32 !== undefined) {
      const entries = Array.from(obj.mapUint64Int32.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapUint64Int32 = new Map(copy);
    }
  }

  public static encode(m: MapTypes, w: pjs.Writer): pjs.Writer {
    // map<int32, string> map_int32_string = 1
    MapTypes.encodeMapInt32String(m.mapInt32String, w);

    // map<int32, bytes> map_int32_bytes = 2
    MapTypes.encodeMapInt32Bytes(m.mapInt32Bytes, w);

    // map<int32, bool> map_int32_bool = 3
    MapTypes.encodeMapInt32Bool(m.mapInt32Bool, w);

    // map<int32, SimpleMessage> map_int32_message = 4
    MapTypes.encodeMapInt32Message(m.mapInt32Message, w);

    // map<int32, SimpleEnum> map_int32_enum = 5
    MapTypes.encodeMapInt32Enum(m.mapInt32Enum, w);

    // map<string, string> map_string_string = 6
    MapTypes.encodeMapStringString(m.mapStringString, w);

    // map<uint64, int32> map_uint64_int32 = 7
    MapTypes.encodeMapUint64Int32(m.mapUint64Int32, w);

    return w;
  }

  public static decode(m: MapTypes, r: pjs.Reader, length: number): MapTypes {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // map<int32, string> map_int32_string = 1
        case 10:
          {
            const [k, v] = MapTypes.decodeMapInt32String(r, r.uint32());
            m.mapInt32String.set(k, v);
          }
          continue;

        // map<int32, bytes> map_int32_bytes = 2
        case 18:
          {
            const [k, v] = MapTypes.decodeMapInt32Bytes(r, r.uint32());
            m.mapInt32Bytes.set(k, v);
          }
          continue;

        // map<int32, bool> map_int32_bool = 3
        case 26:
          {
            const [k, v] = MapTypes.decodeMapInt32Bool(r, r.uint32());
            m.mapInt32Bool.set(k, v);
          }
          continue;

        // map<int32, SimpleMessage> map_int32_message = 4
        case 34:
          {
            const [k, v] = MapTypes.decodeMapInt32Message(r, r.uint32());
            m.mapInt32Message.set(k, v);
          }
          continue;

        // map<int32, SimpleEnum> map_int32_enum = 5
        case 42:
          {
            const [k, v] = MapTypes.decodeMapInt32Enum(r, r.uint32());
            m.mapInt32Enum.set(k, v);
          }
          continue;

        // map<string, string> map_string_string = 6
        case 50:
          {
            const [k, v] = MapTypes.decodeMapStringString(r, r.uint32());
            m.mapStringString.set(k, v);
          }
          continue;

        // map<uint64, int32> map_uint64_int32 = 7
        case 58:
          {
            const [k, v] = MapTypes.decodeMapUint64Int32(r, r.uint32());
            m.mapUint64Int32.set(k, v);
          }
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: MapTypes): MapTypesJSON {
    return {
      mapInt32String: runtime.convertMapToRecord(
        m.mapInt32String,
        (val) => val
      ),
      mapInt32Bytes: runtime.convertMapToRecord(m.mapInt32Bytes, (val) =>
        pjs.util.base64.encode(val, 0, val.length)
      ),
      mapInt32Bool: runtime.convertMapToRecord(m.mapInt32Bool, (val) => val),
      mapInt32Message: runtime.convertMapToRecord(m.mapInt32Message, (val) =>
        val.toJSON()
      ),
      mapInt32Enum: runtime.convertMapToRecord(
        m.mapInt32Enum,
        (val) => SimpleEnum[val]
      ),
      mapStringString: runtime.convertMapToRecord(
        m.mapStringString,
        (val) => val
      ),
      mapUint64Int32: runtime.convertMapToRecord(
        m.mapUint64Int32,
        (val) => val
      ),
    };
  }

  public static fromJSON(m: MapTypes, obj: MapTypesJSON): MapTypes {
    m.mapInt32String = runtime.convertRecordToMap(
      obj.mapInt32String,
      (val) => val
    );
    m.mapInt32Bytes = runtime.convertRecordToMap(obj.mapInt32Bytes, (val) => {
      const tmpBuffer = [];
      pjs.util.base64.decode(val, tmpBuffer, 0);
      return new pjs.util.Buffer(tmpBuffer);
    });
    m.mapInt32Bool = runtime.convertRecordToMap(obj.mapInt32Bool, (val) => val);
    m.mapInt32Message = runtime.convertRecordToMap(obj.mapInt32Message, (val) =>
      new SimpleMessage().fromJSON(val)
    );
    m.mapInt32Enum = runtime.convertRecordToMap(
      obj.mapInt32Enum,
      (val) => SimpleEnum[val]
    );
    m.mapStringString = runtime.convertRecordToMap(
      obj.mapStringString,
      (val) => val
    );
    m.mapUint64Int32 = runtime.convertRecordToMap(
      obj.mapUint64Int32,
      (val) => val
    );

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return MapTypes.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): MapTypes {
    const r = new pjs.Reader(buffer);
    return MapTypes.decode(this, r, r.len);
  }

  toJSON(): MapTypesJSON {
    return MapTypes.toJSON(this);
  }

  fromJSON(obj: MapTypesJSON): MapTypes {
    return MapTypes.fromJSON(this, obj);
  }

  clone(): MapTypes {
    return new MapTypes(this);
  }
}
