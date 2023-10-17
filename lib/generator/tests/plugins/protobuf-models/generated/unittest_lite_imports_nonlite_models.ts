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
  message: TestAllTypes;
}

export interface ITestLiteImportsNonlite {
  message: TestAllTypes;
}

export class TestLiteImportsNonlite implements ITestLiteImportsNonlite {
  message: TestAllTypes =
    new unittest_proto3_models.proto3_unittest.TestAllTypes();

  public static fields = ["message"];

  public get fields() {
    return TestLiteImportsNonlite.fields;
  }

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
    if (
      m.message !== new unittest_proto3_models.proto3_unittest.TestAllTypes()
    ) {
      w.uint32(10);
      w.TestAllTypes(m.message);
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
          m.message = r.TestAllTypes();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: ITestLiteImportsNonlite): ITestLiteImportsNonliteObj {
    return {
      message: m.message.toJSON(),
    };
  }

  public static fromJSON(
    obj: ITestLiteImportsNonliteObj
  ): ITestLiteImportsNonlite {
    const m = new TestLiteImportsNonlite();

    m.message.fromJSON(obj.message);

    return m;
  }

  clone(): TestLiteImportsNonlite {
    return new TestLiteImportsNonlite(this);
  }
}
