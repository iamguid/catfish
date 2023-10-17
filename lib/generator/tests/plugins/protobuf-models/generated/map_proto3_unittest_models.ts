// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: proto3_unittest
// file: map_proto3_unittest.proto

import * as pjs from "protobufjs/minimal";

export interface ITestProto3BytesMapObj {
  mapBytes: Record<number, string>;
  mapString: Record<number, string>;
}

export interface ITestProto3BytesMap {
  mapBytes: Map<number, Uint8Array | Buffer>;
  mapString: Map<number, string>;
}

export class TestProto3BytesMap implements ITestProto3BytesMap {
  mapBytes: Record<number, Uint8Array | Buffer> = {};
  mapString: Record<number, string> = {};

  public static fields = ["mapBytes", "mapString"];

  public get fields() {
    return TestProto3BytesMap.fields;
  }

  constructor(obj?: Partial<ITestProto3BytesMap>) {
    if (!obj) return;

    if (obj.mapBytes !== undefined) {
      this.mapBytes = obj.mapBytes;
    }
    if (obj.mapString !== undefined) {
      this.mapString = obj.mapString;
    }
  }

  public static encode(
    m: ITestProto3BytesMap,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // map<int32, bytes> map_bytes = 1

    // map<int32, string> map_string = 2

    return w.finish();
  }

  public static decode(b: Uint8Array): TestProto3BytesMap {
    const m = new TestProto3BytesMap();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // map<int32, bytes> map_bytes = 1
        case null:
          {
            const key = r.int32();
            const value = r.bytes();

            m.mapBytes.set(key, value);
          }
          continue;

        // map<int32, string> map_string = 2
        case null:
          {
            const key = r.int32();
            const value = r.string();

            m.mapString.set(key, value);
          }
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: ITestProto3BytesMap): ITestProto3BytesMapObj {
    return {
      mapBytes: m.mapBytes,
      mapString: m.mapString,
    };
  }

  public static fromJSON(obj: ITestProto3BytesMapObj): ITestProto3BytesMap {
    const m = new TestProto3BytesMap();

    m.mapBytes = obj.mapBytes;
    m.mapString = obj.mapString;

    return m;
  }

  clone(): TestProto3BytesMap {
    return new TestProto3BytesMap(this);
  }
}
