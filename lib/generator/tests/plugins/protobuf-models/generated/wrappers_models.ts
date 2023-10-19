// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: google.protobuf
// file: wrappers.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export interface DoubleValueJSON {
  value: number;
}

export class DoubleValue {
  value: number = 0;

  public static fields = ["value"];

  public get fields() {
    return DoubleValue.fields;
  }

  constructor(obj?: DoubleValue) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(m: DoubleValue, w: pjs.Writer): pjs.Writer {
    // double value = 1
    if (m.value !== 0) {
      w.uint32(9);
      w.double(m.value);
    }

    return w;
  }

  public static decode(
    m: DoubleValue,
    r: pjs.Reader,
    length: number
  ): DoubleValue {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // double value = 1
        case 9:
          m.value = r.double();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: DoubleValue): DoubleValueJSON {
    return {
      value: m.value,
    };
  }

  public static fromJSON(m: DoubleValue, obj: DoubleValueJSON): DoubleValue {
    m.value = obj.value;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return DoubleValue.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): DoubleValue {
    const r = new pjs.Reader(buffer);
    return DoubleValue.decode(this, r, r.len);
  }

  toJSON(): DoubleValueJSON {
    return DoubleValue.toJSON(this);
  }

  fromJSON(obj: DoubleValueJSON): DoubleValue {
    return DoubleValue.fromJSON(this, obj);
  }

  clone(): DoubleValue {
    return new DoubleValue(this);
  }
}

export interface FloatValueJSON {
  value: number;
}

export class FloatValue {
  value: number = 0;

  public static fields = ["value"];

  public get fields() {
    return FloatValue.fields;
  }

  constructor(obj?: FloatValue) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(m: FloatValue, w: pjs.Writer): pjs.Writer {
    // float value = 1
    if (m.value !== 0) {
      w.uint32(13);
      w.float(m.value);
    }

    return w;
  }

  public static decode(
    m: FloatValue,
    r: pjs.Reader,
    length: number
  ): FloatValue {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // float value = 1
        case 13:
          m.value = r.float();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: FloatValue): FloatValueJSON {
    return {
      value: m.value,
    };
  }

  public static fromJSON(m: FloatValue, obj: FloatValueJSON): FloatValue {
    m.value = obj.value;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return FloatValue.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): FloatValue {
    const r = new pjs.Reader(buffer);
    return FloatValue.decode(this, r, r.len);
  }

  toJSON(): FloatValueJSON {
    return FloatValue.toJSON(this);
  }

  fromJSON(obj: FloatValueJSON): FloatValue {
    return FloatValue.fromJSON(this, obj);
  }

  clone(): FloatValue {
    return new FloatValue(this);
  }
}

export interface Int64ValueJSON {
  value: string;
}

export class Int64Value {
  value: pjs.Long = pjs.util.Long.fromValue(0, false);

  public static fields = ["value"];

  public get fields() {
    return Int64Value.fields;
  }

  constructor(obj?: Int64Value) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(m: Int64Value, w: pjs.Writer): pjs.Writer {
    // int64 value = 1
    if (m.value !== pjs.util.Long.fromValue(0, false)) {
      w.uint32(8);
      w.int64(m.value);
    }

    return w;
  }

  public static decode(
    m: Int64Value,
    r: pjs.Reader,
    length: number
  ): Int64Value {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int64 value = 1
        case 8:
          m.value = r.int64();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: Int64Value): Int64ValueJSON {
    return {
      value: m.value.toString(),
    };
  }

  public static fromJSON(m: Int64Value, obj: Int64ValueJSON): Int64Value {
    m.value = pjs.util.Long.fromValue(obj.value, false);

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return Int64Value.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): Int64Value {
    const r = new pjs.Reader(buffer);
    return Int64Value.decode(this, r, r.len);
  }

  toJSON(): Int64ValueJSON {
    return Int64Value.toJSON(this);
  }

  fromJSON(obj: Int64ValueJSON): Int64Value {
    return Int64Value.fromJSON(this, obj);
  }

  clone(): Int64Value {
    return new Int64Value(this);
  }
}

export interface UInt64ValueJSON {
  value: string;
}

export class UInt64Value {
  value: pjs.Long = pjs.util.Long.fromValue(0, true);

  public static fields = ["value"];

  public get fields() {
    return UInt64Value.fields;
  }

  constructor(obj?: UInt64Value) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(m: UInt64Value, w: pjs.Writer): pjs.Writer {
    // uint64 value = 1
    if (m.value !== pjs.util.Long.fromValue(0, true)) {
      w.uint32(8);
      w.uint64(m.value);
    }

    return w;
  }

  public static decode(
    m: UInt64Value,
    r: pjs.Reader,
    length: number
  ): UInt64Value {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // uint64 value = 1
        case 8:
          m.value = r.uint64();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: UInt64Value): UInt64ValueJSON {
    return {
      value: m.value.toString(),
    };
  }

  public static fromJSON(m: UInt64Value, obj: UInt64ValueJSON): UInt64Value {
    m.value = pjs.util.Long.fromValue(obj.value, true);

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return UInt64Value.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): UInt64Value {
    const r = new pjs.Reader(buffer);
    return UInt64Value.decode(this, r, r.len);
  }

  toJSON(): UInt64ValueJSON {
    return UInt64Value.toJSON(this);
  }

  fromJSON(obj: UInt64ValueJSON): UInt64Value {
    return UInt64Value.fromJSON(this, obj);
  }

  clone(): UInt64Value {
    return new UInt64Value(this);
  }
}

export interface Int32ValueJSON {
  value: number;
}

export class Int32Value {
  value: number = 0;

  public static fields = ["value"];

  public get fields() {
    return Int32Value.fields;
  }

  constructor(obj?: Int32Value) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(m: Int32Value, w: pjs.Writer): pjs.Writer {
    // int32 value = 1
    if (m.value !== 0) {
      w.uint32(8);
      w.int32(m.value);
    }

    return w;
  }

  public static decode(
    m: Int32Value,
    r: pjs.Reader,
    length: number
  ): Int32Value {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 value = 1
        case 8:
          m.value = r.int32();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: Int32Value): Int32ValueJSON {
    return {
      value: m.value,
    };
  }

  public static fromJSON(m: Int32Value, obj: Int32ValueJSON): Int32Value {
    m.value = obj.value;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return Int32Value.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): Int32Value {
    const r = new pjs.Reader(buffer);
    return Int32Value.decode(this, r, r.len);
  }

  toJSON(): Int32ValueJSON {
    return Int32Value.toJSON(this);
  }

  fromJSON(obj: Int32ValueJSON): Int32Value {
    return Int32Value.fromJSON(this, obj);
  }

  clone(): Int32Value {
    return new Int32Value(this);
  }
}

export interface UInt32ValueJSON {
  value: number;
}

export class UInt32Value {
  value: number = 0;

  public static fields = ["value"];

  public get fields() {
    return UInt32Value.fields;
  }

  constructor(obj?: UInt32Value) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(m: UInt32Value, w: pjs.Writer): pjs.Writer {
    // uint32 value = 1
    if (m.value !== 0) {
      w.uint32(8);
      w.uint32(m.value);
    }

    return w;
  }

  public static decode(
    m: UInt32Value,
    r: pjs.Reader,
    length: number
  ): UInt32Value {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // uint32 value = 1
        case 8:
          m.value = r.uint32();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: UInt32Value): UInt32ValueJSON {
    return {
      value: m.value,
    };
  }

  public static fromJSON(m: UInt32Value, obj: UInt32ValueJSON): UInt32Value {
    m.value = obj.value;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return UInt32Value.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): UInt32Value {
    const r = new pjs.Reader(buffer);
    return UInt32Value.decode(this, r, r.len);
  }

  toJSON(): UInt32ValueJSON {
    return UInt32Value.toJSON(this);
  }

  fromJSON(obj: UInt32ValueJSON): UInt32Value {
    return UInt32Value.fromJSON(this, obj);
  }

  clone(): UInt32Value {
    return new UInt32Value(this);
  }
}

export interface BoolValueJSON {
  value: boolean;
}

export class BoolValue {
  value: boolean = false;

  public static fields = ["value"];

  public get fields() {
    return BoolValue.fields;
  }

  constructor(obj?: BoolValue) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(m: BoolValue, w: pjs.Writer): pjs.Writer {
    // bool value = 1
    if (m.value !== false) {
      w.uint32(8);
      w.bool(m.value);
    }

    return w;
  }

  public static decode(m: BoolValue, r: pjs.Reader, length: number): BoolValue {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // bool value = 1
        case 8:
          m.value = r.bool();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: BoolValue): BoolValueJSON {
    return {
      value: m.value,
    };
  }

  public static fromJSON(m: BoolValue, obj: BoolValueJSON): BoolValue {
    m.value = obj.value;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return BoolValue.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): BoolValue {
    const r = new pjs.Reader(buffer);
    return BoolValue.decode(this, r, r.len);
  }

  toJSON(): BoolValueJSON {
    return BoolValue.toJSON(this);
  }

  fromJSON(obj: BoolValueJSON): BoolValue {
    return BoolValue.fromJSON(this, obj);
  }

  clone(): BoolValue {
    return new BoolValue(this);
  }
}

export interface StringValueJSON {
  value: string;
}

export class StringValue {
  value: string = "";

  public static fields = ["value"];

  public get fields() {
    return StringValue.fields;
  }

  constructor(obj?: StringValue) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(m: StringValue, w: pjs.Writer): pjs.Writer {
    // string value = 1
    if (m.value !== "") {
      w.uint32(10);
      w.string(m.value);
    }

    return w;
  }

  public static decode(
    m: StringValue,
    r: pjs.Reader,
    length: number
  ): StringValue {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // string value = 1
        case 10:
          m.value = r.string();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: StringValue): StringValueJSON {
    return {
      value: m.value,
    };
  }

  public static fromJSON(m: StringValue, obj: StringValueJSON): StringValue {
    m.value = obj.value;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return StringValue.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): StringValue {
    const r = new pjs.Reader(buffer);
    return StringValue.decode(this, r, r.len);
  }

  toJSON(): StringValueJSON {
    return StringValue.toJSON(this);
  }

  fromJSON(obj: StringValueJSON): StringValue {
    return StringValue.fromJSON(this, obj);
  }

  clone(): StringValue {
    return new StringValue(this);
  }
}

export interface BytesValueJSON {
  value: string;
}

export class BytesValue {
  value: Uint8Array | Buffer = pjs.util.newBuffer(0);

  public static fields = ["value"];

  public get fields() {
    return BytesValue.fields;
  }

  constructor(obj?: BytesValue) {
    if (!obj) return;

    if (obj.value !== undefined) {
      this.value = obj.value;
    }
  }

  public static encode(m: BytesValue, w: pjs.Writer): pjs.Writer {
    // bytes value = 1
    if (m.value !== pjs.util.newBuffer(0)) {
      w.uint32(10);
      w.bytes(m.value);
    }

    return w;
  }

  public static decode(
    m: BytesValue,
    r: pjs.Reader,
    length: number
  ): BytesValue {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // bytes value = 1
        case 10:
          m.value = r.bytes();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: BytesValue): BytesValueJSON {
    return {
      value: pjs.util.base64.encode(m.value, 0, m.value.length),
    };
  }

  public static fromJSON(m: BytesValue, obj: BytesValueJSON): BytesValue {
    {
      const tmpBuffer = [];
      pjs.util.base64.decode(obj.value, tmpBuffer, 0);
      m.value = new pjs.util.Buffer(tmpBuffer);
    }

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return BytesValue.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): BytesValue {
    const r = new pjs.Reader(buffer);
    return BytesValue.decode(this, r, r.len);
  }

  toJSON(): BytesValueJSON {
    return BytesValue.toJSON(this);
  }

  fromJSON(obj: BytesValueJSON): BytesValue {
    return BytesValue.fromJSON(this, obj);
  }

  clone(): BytesValue {
    return new BytesValue(this);
  }
}
