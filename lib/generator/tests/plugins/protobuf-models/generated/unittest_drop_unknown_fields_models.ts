// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: unittest_drop_unknown_fields
// file: unittest_drop_unknown_fields.proto

import * as pjs from "protobufjs/minimal";

export interface IFooObj {
  int32Value: number;
  enumValue: number;
}

export interface IFoo {
  int32Value: number;
  enumValue: number;
}

export class Foo implements IFoo {
  int32Value: number = 0;
  enumValue: number = Foo.NestedEnum.FOO;

  public static fields = ["int32Value", "enumValue"];

  public get fields() {
    return Foo.fields;
  }

  constructor(obj?: Partial<IFoo>) {
    if (!obj) return;

    if (obj.int32Value !== undefined) {
      this.int32Value = obj.int32Value;
    }
    if (obj.enumValue !== undefined) {
      this.enumValue = obj.enumValue;
    }
  }

  public static encode(
    m: IFoo,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // int32 int32_value = 1
    if (m.int32Value !== 0) {
      w.uint32(8);
      w.int32(m.int32Value);
    }

    // Foo.NestedEnum enum_value = 2
    if (m.enumValue !== Foo.NestedEnum.FOO) {
      w.uint32(16);
      w.uint32(m.enumValue);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): Foo {
    const m = new Foo();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // int32 int32_value = 1
        case 8:
          m.int32Value = r.int32();
          continue;

        // Foo.NestedEnum enum_value = 2
        case 16:
          m.enumValue = r.uint32();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IFoo): IFooObj {
    return {
      int32Value: m.int32Value,
      enumValue: Foo.NestedEnum[m.enumValue],
    };
  }

  public static fromJSON(obj: IFooObj): IFoo {
    const m = new Foo();

    m.int32Value = obj.int32Value;
    m.enumValue = Foo.NestedEnum[obj.enumValue];

    return m;
  }

  clone(): Foo {
    return new Foo(this);
  }
}

export namespace Foo {}

export interface IFooWithExtraFieldsObj {
  int32Value: number;
  enumValue: number;
  extraInt32Value: number;
}

export interface IFooWithExtraFields {
  int32Value: number;
  enumValue: number;
  extraInt32Value: number;
}

export class FooWithExtraFields implements IFooWithExtraFields {
  int32Value: number = 0;
  enumValue: number = FooWithExtraFields.NestedEnum.FOO;
  extraInt32Value: number = 0;

  public static fields = ["int32Value", "enumValue", "extraInt32Value"];

  public get fields() {
    return FooWithExtraFields.fields;
  }

  constructor(obj?: Partial<IFooWithExtraFields>) {
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

  public static encode(
    m: IFooWithExtraFields,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // int32 int32_value = 1
    if (m.int32Value !== 0) {
      w.uint32(8);
      w.int32(m.int32Value);
    }

    // FooWithExtraFields.NestedEnum enum_value = 2
    if (m.enumValue !== FooWithExtraFields.NestedEnum.FOO) {
      w.uint32(16);
      w.uint32(m.enumValue);
    }

    // int32 extra_int32_value = 3
    if (m.extraInt32Value !== 0) {
      w.uint32(24);
      w.int32(m.extraInt32Value);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): FooWithExtraFields {
    const m = new FooWithExtraFields();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // int32 int32_value = 1
        case 8:
          m.int32Value = r.int32();
          continue;

        // FooWithExtraFields.NestedEnum enum_value = 2
        case 16:
          m.enumValue = r.uint32();
          continue;

        // int32 extra_int32_value = 3
        case 24:
          m.extraInt32Value = r.int32();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IFooWithExtraFields): IFooWithExtraFieldsObj {
    return {
      int32Value: m.int32Value,
      enumValue: FooWithExtraFields.NestedEnum[m.enumValue],
      extraInt32Value: m.extraInt32Value,
    };
  }

  public static fromJSON(obj: IFooWithExtraFieldsObj): IFooWithExtraFields {
    const m = new FooWithExtraFields();

    m.int32Value = obj.int32Value;
    m.enumValue = FooWithExtraFields.NestedEnum[obj.enumValue];
    m.extraInt32Value = obj.extraInt32Value;

    return m;
  }

  clone(): FooWithExtraFields {
    return new FooWithExtraFields(this);
  }
}

export namespace FooWithExtraFields {}
