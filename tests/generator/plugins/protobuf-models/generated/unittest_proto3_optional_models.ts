// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest
// file: unittest_proto3_optional.proto

import * as pjs from "protobufjs/minimal";

export interface ITestProto3Optional {
  optional_int32: number | undefined;
  optional_int64: BigInt | undefined;
  optional_uint32: number | undefined;
  optional_uint64: BigInt | undefined;
  optional_sint32: number | undefined;
  optional_sint64: BigInt | undefined;
  optional_fixed32: number | undefined;
  optional_fixed64: BigInt | undefined;
  optional_sfixed32: number | undefined;
  optional_sfixed64: BigInt | undefined;
  optional_float: number | undefined;
  optional_double: number | undefined;
  optional_bool: boolean | undefined;
  optional_string: string | undefined;
  optional_bytes: Uint8Array | undefined;
  optional_cord: string | undefined;
  optional_nested_message: TestProto3Optional.NestedMessage | undefined;
  lazy_nested_message: TestProto3Optional.NestedMessage | undefined;
  optional_nested_enum: TestProto3Optional.NestedEnum | undefined;
  singular_int32: number;
  singular_int64: BigInt;
}

export class TestProto3Optional implements ITestProto3Optional {
  optional_int32: number | undefined = undefined;
  optional_int64: BigInt | undefined = undefined;
  optional_uint32: number | undefined = undefined;
  optional_uint64: BigInt | undefined = undefined;
  optional_sint32: number | undefined = undefined;
  optional_sint64: BigInt | undefined = undefined;
  optional_fixed32: number | undefined = undefined;
  optional_fixed64: BigInt | undefined = undefined;
  optional_sfixed32: number | undefined = undefined;
  optional_sfixed64: BigInt | undefined = undefined;
  optional_float: number | undefined = undefined;
  optional_double: number | undefined = undefined;
  optional_bool: boolean | undefined = undefined;
  optional_string: string | undefined = undefined;
  optional_bytes: Uint8Array | undefined = undefined;
  optional_cord: string | undefined = undefined;
  optional_nested_message: TestProto3Optional.NestedMessage | undefined =
    undefined;
  lazy_nested_message: TestProto3Optional.NestedMessage | undefined = undefined;
  optional_nested_enum: TestProto3Optional.NestedEnum | undefined = undefined;
  singular_int32: number = 0;
  singular_int64: BigInt = 0n;

  constructor(obj?: Partial<ITestProto3Optional>) {
    if (obj?.optional_int32 ?? false) {
      this.optional_int32 = obj.optional_int32;
    }
    if (obj?.optional_int64 ?? false) {
      this.optional_int64 = obj.optional_int64;
    }
    if (obj?.optional_uint32 ?? false) {
      this.optional_uint32 = obj.optional_uint32;
    }
    if (obj?.optional_uint64 ?? false) {
      this.optional_uint64 = obj.optional_uint64;
    }
    if (obj?.optional_sint32 ?? false) {
      this.optional_sint32 = obj.optional_sint32;
    }
    if (obj?.optional_sint64 ?? false) {
      this.optional_sint64 = obj.optional_sint64;
    }
    if (obj?.optional_fixed32 ?? false) {
      this.optional_fixed32 = obj.optional_fixed32;
    }
    if (obj?.optional_fixed64 ?? false) {
      this.optional_fixed64 = obj.optional_fixed64;
    }
    if (obj?.optional_sfixed32 ?? false) {
      this.optional_sfixed32 = obj.optional_sfixed32;
    }
    if (obj?.optional_sfixed64 ?? false) {
      this.optional_sfixed64 = obj.optional_sfixed64;
    }
    if (obj?.optional_float ?? false) {
      this.optional_float = obj.optional_float;
    }
    if (obj?.optional_double ?? false) {
      this.optional_double = obj.optional_double;
    }
    if (obj?.optional_bool ?? false) {
      this.optional_bool = obj.optional_bool;
    }
    if (obj?.optional_string ?? false) {
      this.optional_string = obj.optional_string;
    }
    if (obj?.optional_bytes ?? false) {
      this.optional_bytes = obj.optional_bytes;
    }
    if (obj?.optional_cord ?? false) {
      this.optional_cord = obj.optional_cord;
    }
    if (obj?.optional_nested_message ?? false) {
      this.optional_nested_message = obj.optional_nested_message;
    }
    if (obj?.lazy_nested_message ?? false) {
      this.lazy_nested_message = obj.lazy_nested_message;
    }
    if (obj?.optional_nested_enum ?? false) {
      this.optional_nested_enum = obj.optional_nested_enum;
    }
    if (obj?.singular_int32 ?? false) {
      this.singular_int32 = obj.singular_int32;
    }
    if (obj?.singular_int64 ?? false) {
      this.singular_int64 = obj.singular_int64;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): TestProto3Optional {
    return new TestProto3Optional(this);
  }
}

export namespace TestProto3Optional {
  export interface INestedMessage {
    bb: number | undefined;
  }

  export class NestedMessage implements INestedMessage {
    bb: number | undefined = undefined;

    constructor(obj?: Partial<INestedMessage>) {
      if (obj?.bb ?? false) {
        this.bb = obj.bb;
      }
    }

    serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
      return w;
    }

    deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

    clone(): NestedMessage {
      return new NestedMessage(this);
    }
  }

  export enum NestedEnum {
    UNSPECIFIED = 0,
    FOO = 1,
    BAR = 2,
    BAZ = 3,
    NEG = 1,
  }
}

export interface ITestProto3OptionalMessage {
  nested_message: TestProto3OptionalMessage.NestedMessage;
  optional_nested_message: TestProto3OptionalMessage.NestedMessage | undefined;
}

export class TestProto3OptionalMessage implements ITestProto3OptionalMessage {
  nested_message: TestProto3OptionalMessage.NestedMessage = null;
  optional_nested_message: TestProto3OptionalMessage.NestedMessage | undefined =
    undefined;

  constructor(obj?: Partial<ITestProto3OptionalMessage>) {
    if (obj?.nested_message ?? false) {
      this.nested_message = obj.nested_message;
    }
    if (obj?.optional_nested_message ?? false) {
      this.optional_nested_message = obj.optional_nested_message;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): TestProto3OptionalMessage {
    return new TestProto3OptionalMessage(this);
  }
}

export namespace TestProto3OptionalMessage {
  export interface INestedMessage {
    s: string;
  }

  export class NestedMessage implements INestedMessage {
    s: string = "";

    constructor(obj?: Partial<INestedMessage>) {
      if (obj?.s ?? false) {
        this.s = obj.s;
      }
    }

    serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
      return w;
    }

    deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

    clone(): NestedMessage {
      return new NestedMessage(this);
    }
  }
}

export interface IProto3OptionalExtensions {}

export class Proto3OptionalExtensions implements IProto3OptionalExtensions {
  constructor(obj?: Partial<IProto3OptionalExtensions>) {}

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): Proto3OptionalExtensions {
    return new Proto3OptionalExtensions(this);
  }
}
