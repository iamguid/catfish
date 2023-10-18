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
    for (const [key, val] of m.mapBytes) {
      w.int32(key);
      w.bytes(val);
    }

    // map<int32, string> map_string = 2
    for (const [key, val] of m.mapString) {
      w.int32(key);
      w.string(val);
    }

    return w;
  }

  public static decode(
    m: TestProto3BytesMap,
    r: pjs.Reader,
    l: number
  ): pjs.Reader {
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // map<int32, bytes> map_bytes = 1
        case 10:
          {
            const len = r.uint32();
            const keyTag = r.uint32();
            const key = r.int32();
            const valueTag = r.uint32();
            const value = r.bytes();

            m.mapBytes.set(key, value);
          }
          continue;

        // map<int32, string> map_string = 2
        case 18:
          {
            const len = r.uint32();
            const keyTag = r.uint32();
            const key = r.int32();
            const valueTag = r.uint32();
            const value = r.string();

            m.mapString.set(key, value);
          }
          continue;
      }
    }

    return r;
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

  deserialize(b: Uint8Array | Buffer): TestProto3BytesMap {
    const r = new pjs.Reader(b);
    TestProto3BytesMap.decode(this, r, r.len);
    return this;
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
