// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest_import
// file: unittest_import.proto

import * as unittest_import_public_models from "unittest_import_public_models";

import * as jspb from "google-protobuf";

export interface IImportMessage {
  d: number;
}

export class ImportMessage extends jspb.Message implements IImportMessage {
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get d(): number {
    return jspb.Message.getFieldWithDefault(this, 1, 0);
  }

  public set d(value: number) {}
}

export enum ImportEnum {
  IMPORT_FOO = 7,
  IMPORT_BAR = 8,
  IMPORT_BAZ = 9,
}

export enum ImportEnumForMap {
  UNKNOWN = 0,
  FOO = 1,
  BAR = 2,
}
