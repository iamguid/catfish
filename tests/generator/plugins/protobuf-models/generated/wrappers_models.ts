// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: google.protobuf
// file: wrappers.proto

import * as jspb from "google-protobuf";

export interface IDoubleValue {
  value: number;
}

export class DoubleValue extends jspb.Message implements IDoubleValue {
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get value(): number {
    return jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0);
  }

  public set value(value: number) {}
}

export interface IFloatValue {
  value: number;
}

export class FloatValue extends jspb.Message implements IFloatValue {
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get value(): number {
    return jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0);
  }

  public set value(value: number) {}
}

export interface IInt64Value {
  value: BigInt;
}

export class Int64Value extends jspb.Message implements IInt64Value {
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get value(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 1, 0n);
  }

  public set value(value: BigInt) {}
}

export interface IUInt64Value {
  value: BigInt;
}

export class UInt64Value extends jspb.Message implements IUInt64Value {
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get value(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 1, 0n);
  }

  public set value(value: BigInt) {}
}

export interface IInt32Value {
  value: number;
}

export class Int32Value extends jspb.Message implements IInt32Value {
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get value(): number {
    return jspb.Message.getFieldWithDefault(this, 1, 0);
  }

  public set value(value: number) {}
}

export interface IUInt32Value {
  value: number;
}

export class UInt32Value extends jspb.Message implements IUInt32Value {
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get value(): number {
    return jspb.Message.getFieldWithDefault(this, 1, 0);
  }

  public set value(value: number) {}
}

export interface IBoolValue {
  value: boolean;
}

export class BoolValue extends jspb.Message implements IBoolValue {
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get value(): boolean {
    return jspb.Message.getBooleanFieldWithDefault(this, 1, false);
  }

  public set value(value: boolean) {}
}

export interface IStringValue {
  value: string;
}

export class StringValue extends jspb.Message implements IStringValue {
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get value(): string {
    return jspb.Message.getFieldWithDefault(this, 1, "");
  }

  public set value(value: string) {}
}

export interface IBytesValue {
  value: Uint8Array;
}

export class BytesValue extends jspb.Message implements IBytesValue {
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get value(): Uint8Array {
    return jspb.Message.getFieldWithDefault(this, 1, new Uint8Array());
  }

  public set value(value: Uint8Array) {}
}
