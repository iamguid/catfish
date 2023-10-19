// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: proto3_unittest
// file: map_proto3_unittest.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export interface TestProto3BytesMapJSON {
  mapBytes: Record<number, string>;
  mapString: Record<number, string>;
}

export class TestProto3BytesMap {
  mapBytes: Map<number, Uint8Array | Buffer> = new Map();
  mapString: Map<number, string> = new Map();

  public static fields = ["mapBytes", "mapString"];

  // map<int32, bytes> map_bytes = 1
  public static encodeMapBytes(
    m: Map<number, Uint8Array | Buffer>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(10);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      w2.bytes(val);
      w2.ldelim();
    }
    return w;
  }

  // map<int32, string> map_string = 2
  public static encodeMapString(
    m: Map<number, string>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(18);
      const w2 = w.fork();
      w.uint32(8);
      w.int32(key);
      w.uint32(18);
      w2.string(val);
      w2.ldelim();
    }
    return w;
  }

  // map<int32, bytes> map_bytes = 1
  public static decodeMapBytes(
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

  // map<int32, string> map_string = 2
  public static decodeMapString(
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

  public get fields() {
    return TestProto3BytesMap.fields;
  }

  constructor(obj?: TestProto3BytesMap) {
    if (!obj) return;

    if (obj.mapBytes !== undefined) {
      const entries = Array.from(obj.mapBytes.entries());
      const copy = entries.map(([key, val]) => [key, new pjs.util.Buffer(val)]);
      this.mapBytes = new Map(copy);
    }
    if (obj.mapString !== undefined) {
      const entries = Array.from(obj.mapString.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.mapString = new Map(copy);
    }
  }

  public static encode(m: TestProto3BytesMap, w: pjs.Writer): pjs.Writer {
    // map<int32, bytes> map_bytes = 1
    TestProto3BytesMap.encodeMapBytes(m.mapBytes, w);

    // map<int32, string> map_string = 2
    TestProto3BytesMap.encodeMapString(m.mapString, w);

    return w;
  }

  public static decode(
    m: TestProto3BytesMap,
    r: pjs.Reader,
    length: number
  ): TestProto3BytesMap {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // map<int32, bytes> map_bytes = 1
        case 10:
          {
            const [k, v] = TestProto3BytesMap.decodeMapBytes(r, r.uint32());
            m.mapBytes.set(k, v);
          }
          continue;

        // map<int32, string> map_string = 2
        case 18:
          {
            const [k, v] = TestProto3BytesMap.decodeMapString(r, r.uint32());
            m.mapString.set(k, v);
          }
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: TestProto3BytesMap): TestProto3BytesMapJSON {
    return {
      mapBytes: runtime.convertMapToRecord(m.mapBytes, (val) =>
        pjs.util.base64.encode(val, 0, val.length)
      ),
      mapString: runtime.convertMapToRecord(m.mapString, (val) => val),
    };
  }

  public static fromJSON(
    m: TestProto3BytesMap,
    obj: TestProto3BytesMapJSON
  ): TestProto3BytesMap {
    m.mapBytes = runtime.convertRecordToMap(obj.mapBytes, (val) => {
      const tmpBuffer = [];
      pjs.util.base64.decode(val, tmpBuffer, 0);
      return new pjs.util.Buffer(tmpBuffer);
    });
    m.mapString = runtime.convertRecordToMap(obj.mapString, (val) => val);

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return TestProto3BytesMap.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): TestProto3BytesMap {
    const r = new pjs.Reader(buffer);
    return TestProto3BytesMap.decode(this, r, r.len);
  }

  toJSON(): TestProto3BytesMapJSON {
    return TestProto3BytesMap.toJSON(this);
  }

  fromJSON(obj: TestProto3BytesMapJSON): TestProto3BytesMap {
    return TestProto3BytesMap.fromJSON(this, obj);
  }

  clone(): TestProto3BytesMap {
    return new TestProto3BytesMap(this);
  }
}
