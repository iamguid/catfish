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

export interface ITestLiteImportsNonliteObj {
  message: null;
}

export interface ITestLiteImportsNonlite {
  message: null;
}

export class TestLiteImportsNonlite implements ITestLiteImportsNonlite {
  message: null = null;

  constructor(obj?: Partial<ITestLiteImportsNonlite>) {
    if (!obj) return;

    if (obj.message !== undefined) {
      this.message = obj.message;
    }
  }

  public static encode(
    m: ITestLiteImportsNonlite,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // TestAllTypes message = 1
    if (m.message !== null) {
      w.uint32(10);
      m.message.encode(writer);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): TestLiteImportsNonlite {
    const m = new TestLiteImportsNonlite();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // TestAllTypes message = 1
        case 10:
          m.message = unittest_proto3_models.proto3_unittest.TestAllTypes;
          continue;
      }
    }

    return m;
  }

  public static toJSON(
    m: ITestLiteImportsNonlite
  ): ITestLiteImportsNonliteObj {}

  public static fromJSON(
    obj: ITestLiteImportsNonliteObj
  ): ITestLiteImportsNonlite {}

  clone(): TestLiteImportsNonlite {
    return new TestLiteImportsNonlite(this);
  }
}
