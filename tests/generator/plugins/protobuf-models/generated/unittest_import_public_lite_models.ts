// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest_import
// file: unittest_import_public_lite.proto

import * as jspb from "google-protobuf";

export interface IPublicImportMessageLite {
  e: number;
}

export class PublicImportMessageLite
  extends jspb.Message
  implements IPublicImportMessageLite
{
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get e(): number {
    return jspb.Message.getFieldWithDefault(this, 1, 0);
  }

  public set e(value: number) {}
}
