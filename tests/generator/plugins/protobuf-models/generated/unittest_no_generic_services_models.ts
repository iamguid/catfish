// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest.no_generic_services_test
// file: unittest_no_generic_services.proto

import * as jspb from "google-protobuf";

export interface ITestMessage {
  a: number;
}

export class TestMessage extends jspb.Message implements ITestMessage {
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get a(): number {
    return jspb.Message.getFieldWithDefault(this, 1, 0);
  }

  public set a(value: number) {}
}

export enum TestEnum {
  FOO = 1,
}
