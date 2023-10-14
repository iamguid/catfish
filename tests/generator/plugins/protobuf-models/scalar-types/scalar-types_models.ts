// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: scalar_types
// file: scalar-types.proto

import * as pjs from "protobufjs/minimal";

export interface IScalarTypes {
  f_int32: number;
  f_int64: BigInt;
  f_uint32: number;
  f_uint64: BigInt;
  f_sint32: number;
  f_sint64: BigInt;
  f_fixed32: number;
  f_fixed64: BigInt;
  f_sfixed32: number;
  f_sfixed64: BigInt;
  f_float: number;
  f_double: number;
  f_bool: boolean;
  f_string: string;
  f_bytes: Uint8Array;
}

export class ScalarTypes implements IScalarTypes {
  f_int32: number = 0;
  f_int64: BigInt = 0n;
  f_uint32: number = 0;
  f_uint64: BigInt = 0n;
  f_sint32: number = 0;
  f_sint64: BigInt = 0n;
  f_fixed32: number = 0;
  f_fixed64: BigInt = 0n;
  f_sfixed32: number = 0;
  f_sfixed64: BigInt = 0n;
  f_float: number = 0;
  f_double: number = 0;
  f_bool: boolean = false;
  f_string: string = "";
  f_bytes: Uint8Array = new Uint8Array();

  constructor(obj?: Partial<IScalarTypes>) {
    if (!obj) return;

    if (obj?.f_int32 !== 0) {
      this.f_int32 = obj.f_int32;
    }
    if (obj?.f_int64 !== 0n) {
      this.f_int64 = obj.f_int64;
    }
    if (obj?.f_uint32 !== 0) {
      this.f_uint32 = obj.f_uint32;
    }
    if (obj?.f_uint64 !== 0n) {
      this.f_uint64 = obj.f_uint64;
    }
    if (obj?.f_sint32 !== 0) {
      this.f_sint32 = obj.f_sint32;
    }
    if (obj?.f_sint64 !== 0n) {
      this.f_sint64 = obj.f_sint64;
    }
    if (obj?.f_fixed32 !== 0) {
      this.f_fixed32 = obj.f_fixed32;
    }
    if (obj?.f_fixed64 !== 0n) {
      this.f_fixed64 = obj.f_fixed64;
    }
    if (obj?.f_sfixed32 !== 0) {
      this.f_sfixed32 = obj.f_sfixed32;
    }
    if (obj?.f_sfixed64 !== 0n) {
      this.f_sfixed64 = obj.f_sfixed64;
    }
    if (obj?.f_float !== 0) {
      this.f_float = obj.f_float;
    }
    if (obj?.f_double !== 0) {
      this.f_double = obj.f_double;
    }
    if (obj?.f_bool !== false) {
      this.f_bool = obj.f_bool;
    }
    if (obj?.f_string !== "") {
      this.f_string = obj.f_string;
    }
    if (obj?.f_bytes !== new Uint8Array()) {
      this.f_bytes = obj.f_bytes;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): Uint8Array {
    return w;
  }

  decode(b: Uint8Array): void {
    const reader = pjs.Reader.create(b);
    while (reader.pos < reader.len) {
      const tag = reader.uint32();
      switch (tag) {
        case 8:
          this.f_int32 = pjs.int32();
          continue;

        case 16:
          this.f_int64 = pjs.int64();
          continue;

        case 24:
          this.f_uint32 = pjs.uint32();
          continue;

        case 32:
          this.f_uint64 = pjs.uint64();
          continue;

        case 40:
          this.f_sint32 = pjs.sint32();
          continue;

        case 48:
          this.f_sint64 = pjs.sint64();
          continue;

        case 58:
          this.f_fixed32 = pjs.fixed32();
          continue;

        case 65:
          this.f_fixed64 = pjs.fixed64();
          continue;

        case 74:
          this.f_sfixed32 = pjs.sfixed32();
          continue;

        case 81:
          this.f_sfixed64 = pjs.sfixed64();
          continue;

        case 93:
          this.f_float = pjs.float();
          continue;

        case 97:
          this.f_double = pjs.double();
          continue;

        case 104:
          this.f_bool = pjs.bool();
          continue;

        case 114:
          this.f_string = pjs.string();
          continue;

        case 122:
          this.f_bytes = pjs.bytes();
          continue;
      }
    }
  }

  clone(): ScalarTypes {
    return new ScalarTypes(this);
  }
}
