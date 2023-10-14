// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: unittest_drop_unknown_fields
// file: unittest_drop_unknown_fields.proto

import * as pjs from "protobufjs/minimal";

export interface IFoo {
  int32_value: number;
  enum_value: Foo.NestedEnum;
}

export class Foo implements IFoo {
  int32_value: number = 0;
  enum_value: Foo.NestedEnum = null;

  constructor(obj?: Partial<IFoo>) {
    if (obj?.int32_value ?? false) {
      this.int32_value = obj.int32_value;
    }
    if (obj?.enum_value ?? false) {
      this.enum_value = obj.enum_value;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): Foo {
    return new Foo(this);
  }
}

export namespace Foo {}

export interface IFooWithExtraFields {
  int32_value: number;
  enum_value: FooWithExtraFields.NestedEnum;
  extra_int32_value: number;
}

export class FooWithExtraFields implements IFooWithExtraFields {
  int32_value: number = 0;
  enum_value: FooWithExtraFields.NestedEnum = null;
  extra_int32_value: number = 0;

  constructor(obj?: Partial<IFooWithExtraFields>) {
    if (obj?.int32_value ?? false) {
      this.int32_value = obj.int32_value;
    }
    if (obj?.enum_value ?? false) {
      this.enum_value = obj.enum_value;
    }
    if (obj?.extra_int32_value ?? false) {
      this.extra_int32_value = obj.extra_int32_value;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): FooWithExtraFields {
    return new FooWithExtraFields(this);
  }
}

export namespace FooWithExtraFields {}
