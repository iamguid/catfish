// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: proto3_unittest
// file: map_proto3_unittest.proto

import * as pjs from "protobufjs/minimal";

export interface ITestProto3BytesMap {
  map_bytes: Record<number, Uint8Array>;
  map_string: Record<number, string>;
}

export class TestProto3BytesMap implements ITestProto3BytesMap {
  map_bytes: Record<number, Uint8Array> = {};
  map_string: Record<number, string> = {};

  constructor(obj?: Partial<ITestProto3BytesMap>) {
    if (obj?.map_bytes ?? false) {
      this.map_bytes = obj.map_bytes;
    }
    if (obj?.map_string ?? false) {
      this.map_string = obj.map_string;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): TestProto3BytesMap {
    return new TestProto3BytesMap(this);
  }
}
