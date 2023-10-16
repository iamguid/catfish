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
  enumValue: null;
}

export interface IFoo {
  int32Value: number;
  enumValue: null;
}

export class Foo implements IFoo {
  int32Value: number = 0;
  enumValue: null = null;

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
    if (m.enumValue !== null) {
      w.uint32(18);
      m.enumValue.encode(writer);
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
        case 18:
          m.enumValue =
            unittest_drop_unknown_fields_models.unittest_drop_unknown_fields.Foo.NestedEnum;
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IFoo): IFooObj {}

  public static fromJSON(obj: IFooObj): IFoo {}

  clone(): Foo {
    return new Foo(this);
  }
}

export namespace Foo {}

export interface IFooWithExtraFieldsObj {
  int32Value: number;
  enumValue: null;
  extraInt32Value: number;
}

export interface IFooWithExtraFields {
  int32Value: number;
  enumValue: null;
  extraInt32Value: number;
}

export class FooWithExtraFields implements IFooWithExtraFields {
  int32Value: number = 0;
  enumValue: null = null;
  extraInt32Value: number = 0;

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
    if (m.enumValue !== null) {
      w.uint32(18);
      m.enumValue.encode(writer);
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
        case 18:
          m.enumValue =
            unittest_drop_unknown_fields_models.unittest_drop_unknown_fields.FooWithExtraFields.NestedEnum;
          continue;

        // int32 extra_int32_value = 3
        case 24:
          m.extraInt32Value = r.int32();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: IFooWithExtraFields): IFooWithExtraFieldsObj {}

  public static fromJSON(obj: IFooWithExtraFieldsObj): IFooWithExtraFields {}

  clone(): FooWithExtraFields {
    return new FooWithExtraFields(this);
  }
}

export namespace FooWithExtraFields {}
