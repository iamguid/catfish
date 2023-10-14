// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: proto3_preserve_unknown_enum_unittest
// file: unittest_preserve_unknown_enum.proto

import * as pjs from "protobufjs/minimal";

export interface IMyMessage {
  e: MyEnum;
  repeated_e: MyEnum;
  repeated_packed_e: MyEnum;
  repeated_packed_unexpected_e: MyEnumPlusExtra;
  oneof_e_1?: MyEnum;
  oneof_e_2?: MyEnum;
}

export class MyMessage implements IMyMessage {
  e: MyEnum = null;
  repeated_e: MyEnum = [];
  repeated_packed_e: MyEnum = [];
  repeated_packed_unexpected_e: MyEnumPlusExtra = [];
  oneof_e_1?: MyEnum = null;
  oneof_e_2?: MyEnum = null;

  constructor(obj?: Partial<IMyMessage>) {
    if (obj?.e ?? false) {
      this.e = obj.e;
    }
    if (obj?.repeated_e ?? false) {
      this.repeated_e = obj.repeated_e;
    }
    if (obj?.repeated_packed_e ?? false) {
      this.repeated_packed_e = obj.repeated_packed_e;
    }
    if (obj?.repeated_packed_unexpected_e ?? false) {
      this.repeated_packed_unexpected_e = obj.repeated_packed_unexpected_e;
    }
    if (obj?.oneof_e_1 ?? false) {
      this.oneof_e_1 = obj.oneof_e_1;
    }
    if (obj?.oneof_e_2 ?? false) {
      this.oneof_e_2 = obj.oneof_e_2;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): MyMessage {
    return new MyMessage(this);
  }
}

export enum MyEnum {
  FOO = 0,
  BAR = 1,
  BAZ = 2,
}

export enum MyEnumPlusExtra {
  E_FOO = 0,
  E_BAR = 1,
  E_BAZ = 2,
  E_EXTRA = 3,
}

export interface IMyMessagePlusExtra {
  e: MyEnumPlusExtra;
  repeated_e: MyEnumPlusExtra;
  repeated_packed_e: MyEnumPlusExtra;
  repeated_packed_unexpected_e: MyEnumPlusExtra;
  oneof_e_1?: MyEnumPlusExtra;
  oneof_e_2?: MyEnumPlusExtra;
}

export class MyMessagePlusExtra implements IMyMessagePlusExtra {
  e: MyEnumPlusExtra = null;
  repeated_e: MyEnumPlusExtra = [];
  repeated_packed_e: MyEnumPlusExtra = [];
  repeated_packed_unexpected_e: MyEnumPlusExtra = [];
  oneof_e_1?: MyEnumPlusExtra = null;
  oneof_e_2?: MyEnumPlusExtra = null;

  constructor(obj?: Partial<IMyMessagePlusExtra>) {
    if (obj?.e ?? false) {
      this.e = obj.e;
    }
    if (obj?.repeated_e ?? false) {
      this.repeated_e = obj.repeated_e;
    }
    if (obj?.repeated_packed_e ?? false) {
      this.repeated_packed_e = obj.repeated_packed_e;
    }
    if (obj?.repeated_packed_unexpected_e ?? false) {
      this.repeated_packed_unexpected_e = obj.repeated_packed_unexpected_e;
    }
    if (obj?.oneof_e_1 ?? false) {
      this.oneof_e_1 = obj.oneof_e_1;
    }
    if (obj?.oneof_e_2 ?? false) {
      this.oneof_e_2 = obj.oneof_e_2;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): MyMessagePlusExtra {
    return new MyMessagePlusExtra(this);
  }
}

export enum MyEnum {
  FOO = 0,
  BAR = 1,
  BAZ = 2,
}

export enum MyEnumPlusExtra {
  E_FOO = 0,
  E_BAR = 1,
  E_BAZ = 2,
  E_EXTRA = 3,
}
