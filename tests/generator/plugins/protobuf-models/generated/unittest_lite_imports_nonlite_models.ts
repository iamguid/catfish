// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest
// file: unittest_lite_imports_nonlite.proto

import * as unittest_proto3_models from "unittest_proto3_models";

import * as unittest_import_models from "unittest_import_models";

import * as unittest_import_public_models from "unittest_import_public_models";

import * as jspb from "google-protobuf";

export interface ITestLiteImportsNonlite {
  message: TestAllTypes;
}

export class TestLiteImportsNonlite
  extends jspb.Message
  implements ITestLiteImportsNonlite
{
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get message(): TestAllTypes {
    return jspb.Message.getWrapperField(this, TestAllTypes, 1);
  }

  public set message(value: TestAllTypes): void {
    return jspb.Message.setWrapperField(
      this,
      1,

      value
    );
  }
}
