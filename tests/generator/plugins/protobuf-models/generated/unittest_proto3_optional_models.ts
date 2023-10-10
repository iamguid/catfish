// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest
// file: unittest_proto3_optional.proto

import * as jspb from "google-protobuf";

export interface ITestProto3Optional {
  optional_int32: number;
  optional_int64: BigInt;
  optional_uint32: number;
  optional_uint64: BigInt;
  optional_sint32: number;
  optional_sint64: BigInt;
  optional_fixed32: number;
  optional_fixed64: BigInt;
  optional_sfixed32: number;
  optional_sfixed64: BigInt;
  optional_float: number;
  optional_double: number;
  optional_bool: boolean;
  optional_string: string;
  optional_bytes: Uint8Array;
  optional_cord: string;
  optional_nested_message: TestProto3Optional.NestedMessage;
  lazy_nested_message: TestProto3Optional.NestedMessage;
  optional_nested_enum: TestProto3Optional.NestedEnum;
  singular_int32: number;
  singular_int64: BigInt;
}

export class TestProto3Optional
  extends jspb.Message
  implements ITestProto3Optional
{
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get optional_int32(): number {
    return jspb.Message.getFieldWithDefault(this, 1, 0);
  }

  public set optional_int32(value: number) {}

  public get optional_int64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 2, 0n);
  }

  public set optional_int64(value: BigInt) {}

  public get optional_uint32(): number {
    return jspb.Message.getFieldWithDefault(this, 3, 0);
  }

  public set optional_uint32(value: number) {}

  public get optional_uint64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 4, 0n);
  }

  public set optional_uint64(value: BigInt) {}

  public get optional_sint32(): number {
    return jspb.Message.getFieldWithDefault(this, 5, 0);
  }

  public set optional_sint32(value: number) {}

  public get optional_sint64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 6, 0n);
  }

  public set optional_sint64(value: BigInt) {}

  public get optional_fixed32(): number {
    return jspb.Message.getFieldWithDefault(this, 7, 0);
  }

  public set optional_fixed32(value: number) {}

  public get optional_fixed64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 8, 0n);
  }

  public set optional_fixed64(value: BigInt) {}

  public get optional_sfixed32(): number {
    return jspb.Message.getFieldWithDefault(this, 9, 0);
  }

  public set optional_sfixed32(value: number) {}

  public get optional_sfixed64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 10, 0n);
  }

  public set optional_sfixed64(value: BigInt) {}

  public get optional_float(): number {
    return jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0);
  }

  public set optional_float(value: number) {}

  public get optional_double(): number {
    return jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0);
  }

  public set optional_double(value: number) {}

  public get optional_bool(): boolean {
    return jspb.Message.getBooleanFieldWithDefault(this, 13, false);
  }

  public set optional_bool(value: boolean) {}

  public get optional_string(): string {
    return jspb.Message.getFieldWithDefault(this, 14, "");
  }

  public set optional_string(value: string) {}

  public get optional_bytes(): Uint8Array {
    return jspb.Message.getFieldWithDefault(this, 15, new Uint8Array());
  }

  public set optional_bytes(value: Uint8Array) {}

  public get optional_cord(): string {
    return jspb.Message.getFieldWithDefault(this, 16, "");
  }

  public set optional_cord(value: string) {}

  public get optional_nested_message(): TestProto3Optional.NestedMessage {
    return jspb.Message.getWrapperField(
      this,
      TestProto3Optional.NestedMessage,
      18
    );
  }

  public set optional_nested_message(
    value: TestProto3Optional.NestedMessage
  ): void {
    return jspb.Message.setWrapperField(
      this,
      18,

      value
    );
  }

  public get lazy_nested_message(): TestProto3Optional.NestedMessage {
    return jspb.Message.getWrapperField(
      this,
      TestProto3Optional.NestedMessage,
      19
    );
  }

  public set lazy_nested_message(
    value: TestProto3Optional.NestedMessage
  ): void {
    return jspb.Message.setWrapperField(
      this,
      19,

      value
    );
  }

  public get optional_nested_enum(): TestProto3Optional.NestedEnum {
    return jspb.Message.getWrapperField(
      this,
      TestProto3Optional.NestedEnum,
      21
    );
  }

  public set optional_nested_enum(value: TestProto3Optional.NestedEnum): void {
    return jspb.Message.setWrapperField(
      this,
      21,

      value
    );
  }

  public get singular_int32(): number {
    return jspb.Message.getFieldWithDefault(this, 22, 0);
  }

  public set singular_int32(value: number) {}

  public get singular_int64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 23, 0n);
  }

  public set singular_int64(value: BigInt) {}
}

export namespace TestProto3Optional {
  export interface INestedMessage {
    bb: number;
  }

  export class NestedMessage extends jspb.Message implements INestedMessage {
    contructor(opt_data: any) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    }

    public get bb(): number {
      return jspb.Message.getFieldWithDefault(this, 1, 0);
    }

    public set bb(value: number) {}
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
  optional_nested_message: TestProto3OptionalMessage.NestedMessage;
}

export class TestProto3OptionalMessage
  extends jspb.Message
  implements ITestProto3OptionalMessage
{
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get nested_message(): TestProto3OptionalMessage.NestedMessage {
    return jspb.Message.getWrapperField(
      this,
      TestProto3OptionalMessage.NestedMessage,
      1
    );
  }

  public set nested_message(
    value: TestProto3OptionalMessage.NestedMessage
  ): void {
    return jspb.Message.setWrapperField(
      this,
      1,

      value
    );
  }

  public get optional_nested_message(): TestProto3OptionalMessage.NestedMessage {
    return jspb.Message.getWrapperField(
      this,
      TestProto3OptionalMessage.NestedMessage,
      2
    );
  }

  public set optional_nested_message(
    value: TestProto3OptionalMessage.NestedMessage
  ): void {
    return jspb.Message.setWrapperField(
      this,
      2,

      value
    );
  }
}

export namespace TestProto3OptionalMessage {
  export interface INestedMessage {
    s: string;
  }

  export class NestedMessage extends jspb.Message implements INestedMessage {
    contructor(opt_data: any) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    }

    public get s(): string {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    }

    public set s(value: string) {}
  }
}

export interface IProto3OptionalExtensions {}

export class Proto3OptionalExtensions
  extends jspb.Message
  implements IProto3OptionalExtensions
{
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }
}
