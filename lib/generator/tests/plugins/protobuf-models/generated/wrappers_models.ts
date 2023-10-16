// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: google.protobuf
// file: wrappers.proto

import * as pjs from "protobufjs/minimal";

export interface IDoubleValueObj {
  value: number;
}

export interface IDoubleValue {
  value: number;
}

export class DoubleValue implements IDoubleValue {
  value: number = 0;

  constructor(obj?: Partial<IDoubleValue>) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(
    m: IDoubleValue,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // double value = 1
    if (m.value !== 0) {
      w.uint32(9);
      w.double(m.value);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): DoubleValue {
    const m = new DoubleValue();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // double value = 1
        case 9:
          m.value = r.double();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IDoubleValue): IDoubleValueObj {}

  public static fromJSON(obj: IDoubleValueObj): IDoubleValue {}

  clone(): DoubleValue {
    return new DoubleValue(this);
  }
}

export interface IFloatValueObj {
  value: number;
}

export interface IFloatValue {
  value: number;
}

export class FloatValue implements IFloatValue {
  value: number = 0;

  constructor(obj?: Partial<IFloatValue>) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(
    m: IFloatValue,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // float value = 1
    if (m.value !== 0) {
      w.uint32(13);
      w.float(m.value);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): FloatValue {
    const m = new FloatValue();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // float value = 1
        case 13:
          m.value = r.float();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IFloatValue): IFloatValueObj {}

  public static fromJSON(obj: IFloatValueObj): IFloatValue {}

  clone(): FloatValue {
    return new FloatValue(this);
  }
}

export interface IInt64ValueObj {
  value: string;
}

export interface IInt64Value {
  value: pjs.Long;
}

export class Int64Value implements IInt64Value {
  value: pjs.Long = 0n;

  constructor(obj?: Partial<IInt64Value>) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(
    m: IInt64Value,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // int64 value = 1
    if (m.value !== 0n) {
      w.uint32(8);
      w.int64(m.value);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): Int64Value {
    const m = new Int64Value();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // int64 value = 1
        case 8:
          m.value = r.int64();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IInt64Value): IInt64ValueObj {}

  public static fromJSON(obj: IInt64ValueObj): IInt64Value {}

  clone(): Int64Value {
    return new Int64Value(this);
  }
}

export interface IUInt64ValueObj {
  value: string;
}

export interface IUInt64Value {
  value: pjs.Long;
}

export class UInt64Value implements IUInt64Value {
  value: pjs.Long = 0n;

  constructor(obj?: Partial<IUInt64Value>) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(
    m: IUInt64Value,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // uint64 value = 1
    if (m.value !== 0n) {
      w.uint32(8);
      w.uint64(m.value);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): UInt64Value {
    const m = new UInt64Value();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // uint64 value = 1
        case 8:
          m.value = r.uint64();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IUInt64Value): IUInt64ValueObj {}

  public static fromJSON(obj: IUInt64ValueObj): IUInt64Value {}

  clone(): UInt64Value {
    return new UInt64Value(this);
  }
}

export interface IInt32ValueObj {
  value: number;
}

export interface IInt32Value {
  value: number;
}

export class Int32Value implements IInt32Value {
  value: number = 0;

  constructor(obj?: Partial<IInt32Value>) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(
    m: IInt32Value,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // int32 value = 1
    if (m.value !== 0) {
      w.uint32(8);
      w.int32(m.value);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): Int32Value {
    const m = new Int32Value();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // int32 value = 1
        case 8:
          m.value = r.int32();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IInt32Value): IInt32ValueObj {}

  public static fromJSON(obj: IInt32ValueObj): IInt32Value {}

  clone(): Int32Value {
    return new Int32Value(this);
  }
}

export interface IUInt32ValueObj {
  value: number;
}

export interface IUInt32Value {
  value: number;
}

export class UInt32Value implements IUInt32Value {
  value: number = 0;

  constructor(obj?: Partial<IUInt32Value>) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(
    m: IUInt32Value,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // uint32 value = 1
    if (m.value !== 0) {
      w.uint32(8);
      w.uint32(m.value);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): UInt32Value {
    const m = new UInt32Value();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // uint32 value = 1
        case 8:
          m.value = r.uint32();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IUInt32Value): IUInt32ValueObj {}

  public static fromJSON(obj: IUInt32ValueObj): IUInt32Value {}

  clone(): UInt32Value {
    return new UInt32Value(this);
  }
}

export interface IBoolValueObj {
  value: boolean;
}

export interface IBoolValue {
  value: boolean;
}

export class BoolValue implements IBoolValue {
  value: boolean = false;

  constructor(obj?: Partial<IBoolValue>) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(
    m: IBoolValue,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // bool value = 1
    if (m.value !== false) {
      w.uint32(8);
      w.bool(m.value);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): BoolValue {
    const m = new BoolValue();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // bool value = 1
        case 8:
          m.value = r.bool();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IBoolValue): IBoolValueObj {}

  public static fromJSON(obj: IBoolValueObj): IBoolValue {}

  clone(): BoolValue {
    return new BoolValue(this);
  }
}

export interface IStringValueObj {
  value: string;
}

export interface IStringValue {
  value: string;
}

export class StringValue implements IStringValue {
  value: string = "";

  constructor(obj?: Partial<IStringValue>) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(
    m: IStringValue,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // string value = 1
    if (m.value !== "") {
      w.uint32(10);
      w.string(m.value);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): StringValue {
    const m = new StringValue();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // string value = 1
        case 10:
          m.value = r.string();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IStringValue): IStringValueObj {}

  public static fromJSON(obj: IStringValueObj): IStringValue {}

  clone(): StringValue {
    return new StringValue(this);
  }
}

export interface IBytesValueObj {
  value: string;
}

export interface IBytesValue {
  value: Uint8Array;
}

export class BytesValue implements IBytesValue {
  value: Uint8Array = new Uint8Array();

  constructor(obj?: Partial<IBytesValue>) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(
    m: IBytesValue,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // bytes value = 1
    if (m.value !== new Uint8Array()) {
      w.uint32(10);
      w.bytes(m.value);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): BytesValue {
    const m = new BytesValue();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // bytes value = 1
        case 10:
          m.value = r.bytes();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IBytesValue): IBytesValueObj {}

  public static fromJSON(obj: IBytesValueObj): IBytesValue {}

  clone(): BytesValue {
    return new BytesValue(this);
  }
}
