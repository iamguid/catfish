// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: google.protobuf
// file: wrappers.proto

import * as pjs from "protobufjs/minimal";

export interface IDoubleValue {
  value: number;
}

export class DoubleValue implements IDoubleValue {
  value: number = 0;

  constructor(obj?: Partial<IDoubleValue>) {
    if (obj?.value ?? false) {
      this.value = obj.value;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): DoubleValue {
    return new DoubleValue(this);
  }
}

export interface IFloatValue {
  value: number;
}

export class FloatValue implements IFloatValue {
  value: number = 0;

  constructor(obj?: Partial<IFloatValue>) {
    if (obj?.value ?? false) {
      this.value = obj.value;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): FloatValue {
    return new FloatValue(this);
  }
}

export interface IInt64Value {
  value: BigInt;
}

export class Int64Value implements IInt64Value {
  value: BigInt = 0n;

  constructor(obj?: Partial<IInt64Value>) {
    if (obj?.value ?? false) {
      this.value = obj.value;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): Int64Value {
    return new Int64Value(this);
  }
}

export interface IUInt64Value {
  value: BigInt;
}

export class UInt64Value implements IUInt64Value {
  value: BigInt = 0n;

  constructor(obj?: Partial<IUInt64Value>) {
    if (obj?.value ?? false) {
      this.value = obj.value;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): UInt64Value {
    return new UInt64Value(this);
  }
}

export interface IInt32Value {
  value: number;
}

export class Int32Value implements IInt32Value {
  value: number = 0;

  constructor(obj?: Partial<IInt32Value>) {
    if (obj?.value ?? false) {
      this.value = obj.value;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): Int32Value {
    return new Int32Value(this);
  }
}

export interface IUInt32Value {
  value: number;
}

export class UInt32Value implements IUInt32Value {
  value: number = 0;

  constructor(obj?: Partial<IUInt32Value>) {
    if (obj?.value ?? false) {
      this.value = obj.value;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): UInt32Value {
    return new UInt32Value(this);
  }
}

export interface IBoolValue {
  value: boolean;
}

export class BoolValue implements IBoolValue {
  value: boolean = false;

  constructor(obj?: Partial<IBoolValue>) {
    if (obj?.value ?? false) {
      this.value = obj.value;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): BoolValue {
    return new BoolValue(this);
  }
}

export interface IStringValue {
  value: string;
}

export class StringValue implements IStringValue {
  value: string = "";

  constructor(obj?: Partial<IStringValue>) {
    if (obj?.value ?? false) {
      this.value = obj.value;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): StringValue {
    return new StringValue(this);
  }
}

export interface IBytesValue {
  value: Uint8Array;
}

export class BytesValue implements IBytesValue {
  value: Uint8Array = new Uint8Array();

  constructor(obj?: Partial<IBytesValue>) {
    if (obj?.value ?? false) {
      this.value = obj.value;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): BytesValue {
    return new BytesValue(this);
  }
}
