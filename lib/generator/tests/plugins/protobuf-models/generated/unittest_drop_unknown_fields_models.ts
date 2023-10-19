// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: unittest_drop_unknown_fields
// file: unittest_drop_unknown_fields.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export interface FooJSON {
  int32Value: number;
  enumValue: string;
}

export class Foo {
  int32Value: number = 0;
  enumValue: number = Foo.NestedEnum.FOO;

  public static fields = ["int32Value", "enumValue"];

  public get fields() {
    return Foo.fields;
  }

  constructor(obj?: Foo) {
    if (!obj) return;

    if (obj.int32Value !== undefined) {
      this.int32Value = obj.int32Value;
    }
    if (obj.enumValue !== undefined) {
      this.enumValue = obj.enumValue;
    }
  }

  public static encode(m: Foo, w: pjs.Writer): pjs.Writer {
    // int32 int32_value = 1
    if (m.int32Value !== 0) {
      w.uint32(8);
      w.int32(m.int32Value);
    }

    // Foo.NestedEnum enum_value = 2
    if (m.enumValue !== Foo.NestedEnum.FOO) {
      w.uint32(16);
      w.int32(m.enumValue);
    }

    return w;
  }

  public static decode(m: Foo, r: pjs.Reader, length: number): Foo {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 int32_value = 1
        case 8:
          m.int32Value = r.int32();
          continue;

        // Foo.NestedEnum enum_value = 2
        case 16:
          m.enumValue = r.int32();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: Foo): FooJSON {
    return {
      int32Value: m.int32Value,
      enumValue: Foo.NestedEnum[m.enumValue],
    };
  }

  public static fromJSON(m: Foo, obj: FooJSON): Foo {
    m.int32Value = obj.int32Value;
    m.enumValue = Foo.NestedEnum[obj.enumValue];

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return Foo.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): Foo {
    const r = new pjs.Reader(buffer);
    return Foo.decode(this, r, r.len);
  }

  toJSON(): FooJSON {
    return Foo.toJSON(this);
  }

  fromJSON(obj: FooJSON): Foo {
    return Foo.fromJSON(this, obj);
  }

  clone(): Foo {
    return new Foo(this);
  }
}

export namespace Foo {}

export interface FooWithExtraFieldsJSON {
  int32Value: number;
  enumValue: string;
  extraInt32Value: number;
}

export class FooWithExtraFields {
  int32Value: number = 0;
  enumValue: number = FooWithExtraFields.NestedEnum.FOO;
  extraInt32Value: number = 0;

  public static fields = ["int32Value", "enumValue", "extraInt32Value"];

  public get fields() {
    return FooWithExtraFields.fields;
  }

  constructor(obj?: FooWithExtraFields) {
    if (!obj) return;

    if (obj.int32Value !== undefined) {
      this.int32Value = obj.int32Value;
    }
    if (obj.enumValue !== undefined) {
      this.enumValue = obj.enumValue;
    }
    if (obj.extraInt32Value !== undefined) {
      this.extraInt32Value = obj.extraInt32Value;
    }
  }

  public static encode(m: FooWithExtraFields, w: pjs.Writer): pjs.Writer {
    // int32 int32_value = 1
    if (m.int32Value !== 0) {
      w.uint32(8);
      w.int32(m.int32Value);
    }

    // FooWithExtraFields.NestedEnum enum_value = 2
    if (m.enumValue !== FooWithExtraFields.NestedEnum.FOO) {
      w.uint32(16);
      w.int32(m.enumValue);
    }

    // int32 extra_int32_value = 3
    if (m.extraInt32Value !== 0) {
      w.uint32(24);
      w.int32(m.extraInt32Value);
    }

    return w;
  }

  public static decode(
    m: FooWithExtraFields,
    r: pjs.Reader,
    length: number
  ): FooWithExtraFields {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 int32_value = 1
        case 8:
          m.int32Value = r.int32();
          continue;

        // FooWithExtraFields.NestedEnum enum_value = 2
        case 16:
          m.enumValue = r.int32();
          continue;

        // int32 extra_int32_value = 3
        case 24:
          m.extraInt32Value = r.int32();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: FooWithExtraFields): FooWithExtraFieldsJSON {
    return {
      int32Value: m.int32Value,
      enumValue: FooWithExtraFields.NestedEnum[m.enumValue],
      extraInt32Value: m.extraInt32Value,
    };
  }

  public static fromJSON(
    m: FooWithExtraFields,
    obj: FooWithExtraFieldsJSON
  ): FooWithExtraFields {
    m.int32Value = obj.int32Value;
    m.enumValue = FooWithExtraFields.NestedEnum[obj.enumValue];
    m.extraInt32Value = obj.extraInt32Value;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return FooWithExtraFields.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): FooWithExtraFields {
    const r = new pjs.Reader(buffer);
    return FooWithExtraFields.decode(this, r, r.len);
  }

  toJSON(): FooWithExtraFieldsJSON {
    return FooWithExtraFields.toJSON(this);
  }

  fromJSON(obj: FooWithExtraFieldsJSON): FooWithExtraFields {
    return FooWithExtraFields.fromJSON(this, obj);
  }

  clone(): FooWithExtraFields {
    return new FooWithExtraFields(this);
  }
}

export namespace FooWithExtraFields {}
