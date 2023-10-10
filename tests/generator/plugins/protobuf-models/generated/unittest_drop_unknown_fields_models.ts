// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: unittest_drop_unknown_fields
// file: unittest_drop_unknown_fields.proto

import * as jspb from "google-protobuf";

export interface IFoo {
  int32_value: number;
  enum_value: Foo.NestedEnum;
}

export class Foo extends jspb.Message implements IFoo {
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get int32_value(): number {
    return jspb.Message.getFieldWithDefault(this, 1, 0);
  }

  public set int32_value(value: number) {}

  public get enum_value(): Foo.NestedEnum {
    return jspb.Message.getWrapperField(this, Foo.NestedEnum, 2);
  }

  public set enum_value(value: Foo.NestedEnum): void {
    return jspb.Message.setWrapperField(
      this,
      2,

      value
    );
  }
}

export namespace Foo {}

export interface IFooWithExtraFields {
  int32_value: number;
  enum_value: FooWithExtraFields.NestedEnum;
  extra_int32_value: number;
}

export class FooWithExtraFields
  extends jspb.Message
  implements IFooWithExtraFields
{
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get int32_value(): number {
    return jspb.Message.getFieldWithDefault(this, 1, 0);
  }

  public set int32_value(value: number) {}

  public get enum_value(): FooWithExtraFields.NestedEnum {
    return jspb.Message.getWrapperField(this, FooWithExtraFields.NestedEnum, 2);
  }

  public set enum_value(value: FooWithExtraFields.NestedEnum): void {
    return jspb.Message.setWrapperField(
      this,
      2,

      value
    );
  }

  public get extra_int32_value(): number {
    return jspb.Message.getFieldWithDefault(this, 3, 0);
  }

  public set extra_int32_value(value: number) {}
}

export namespace FooWithExtraFields {}
