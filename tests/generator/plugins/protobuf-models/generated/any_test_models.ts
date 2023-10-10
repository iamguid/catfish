// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest
// file: any_test.proto

import * as google_protobuf_any_models from "google/protobuf/any_models";

import * as jspb from "google-protobuf";

export interface ITestAny {
  int32_value: number;
  any_value: google.protobuf.Any;
  repeated_any_value: google.protobuf.Any;
  text: string;
}

export class TestAny extends jspb.Message implements ITestAny {
  private static repeatedFields: number[] = [3];

  contructor(opt_data: any) {
    jspb.Message.initialize(
      this,
      opt_data,
      0,
      -1,
      TestAny.repeatedFields,
      null
    );
  }

  public get int32_value(): number {
    return jspb.Message.getFieldWithDefault(this, 1, 0);
  }

  public set int32_value(value: number) {}

  public get any_value(): google.protobuf.Any {
    return jspb.Message.getWrapperField(this, google.protobuf.Any, 2);
  }

  public set any_value(value: google.protobuf.Any): void {
    return jspb.Message.setWrapperField(
      this,
      2,

      value
    );
  }

  public get repeated_any_value(): google.protobuf.Any {
    return jspb.Message.getRepeatedWrapperField(this, google.protobuf.Any, 3);
  }

  public set repeated_any_value(value: google.protobuf.Any): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      3,

      value
    );
  }

  public get text(): string {
    return jspb.Message.getFieldWithDefault(this, 4, "");
  }

  public set text(value: string) {}
}
