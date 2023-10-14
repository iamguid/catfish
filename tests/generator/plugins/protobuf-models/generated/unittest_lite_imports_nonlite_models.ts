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

import * as pjs from "protobufjs/minimal";

export interface ITestLiteImportsNonlite {
  message: TestAllTypes;
}

export class TestLiteImportsNonlite implements ITestLiteImportsNonlite {
  message: TestAllTypes = null;

  constructor(obj?: Partial<ITestLiteImportsNonlite>) {
    if (obj?.message ?? false) {
      this.message = obj.message;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): TestLiteImportsNonlite {
    return new TestLiteImportsNonlite(this);
  }
}
