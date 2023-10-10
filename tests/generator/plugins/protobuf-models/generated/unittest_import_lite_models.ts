// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest_import
// file: unittest_import_lite.proto

import * as unittest_import_public_lite_models from "unittest_import_public_lite_models";

import * as jspb from "google-protobuf";

export interface IImportMessageLite {
  d: number;
}

export class ImportMessageLite
  extends jspb.Message
  implements IImportMessageLite
{
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get d(): number {
    return jspb.Message.getFieldWithDefault(this, 1, 0);
  }

  public set d(value: number) {}
}

export enum ImportEnumLite {
  IMPORT_LITE_FOO = 7,
  IMPORT_LITE_BAR = 8,
  IMPORT_LITE_BAZ = 9,
}
