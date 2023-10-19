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
import * as runtime from "@catfish/runtime";

export interface TestLiteImportsNonliteJSON {
  message: unittest_proto3_models.proto3_unittest.TestAllTypesJSON;
}

export class TestLiteImportsNonlite {
  message: unittest_proto3_models.proto3_unittest.TestAllTypes =
    new unittest_proto3_models.proto3_unittest.TestAllTypes();

  public static fields = ["message"];

  public get fields() {
    return TestLiteImportsNonlite.fields;
  }

  constructor(obj?: TestLiteImportsNonlite) {
    if (!obj) return;

    if (obj.message !== undefined) {
      this.message = obj.message;
    }
  }

  public static encode(m: TestLiteImportsNonlite, w: pjs.Writer): pjs.Writer {
    // TestAllTypes message = 1
    if (
      m.message !== new unittest_proto3_models.proto3_unittest.TestAllTypes()
    ) {
      w.uint32(10);
      unittest_proto3_models.proto3_unittest.TestAllTypes.encode(
        m.message,
        w.fork()
      ).ldelim();
    }

    return w;
  }

  public static decode(
    m: TestLiteImportsNonlite,
    r: pjs.Reader,
    length: number
  ): TestLiteImportsNonlite {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // TestAllTypes message = 1
        case 10:
          m.message =
            unittest_proto3_models.proto3_unittest.TestAllTypes.decode(
              undefined,
              r,
              r.uint32()
            );
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: TestLiteImportsNonlite): TestLiteImportsNonliteJSON {
    return {
      message: m.message.toJSON(),
    };
  }

  public static fromJSON(
    m: TestLiteImportsNonlite,
    obj: TestLiteImportsNonliteJSON
  ): TestLiteImportsNonlite {
    m.message =
      new unittest_proto3_models.proto3_unittest.TestAllTypes().fromJSON(
        obj.message
      );

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return TestLiteImportsNonlite.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): TestLiteImportsNonlite {
    const r = new pjs.Reader(buffer);
    return TestLiteImportsNonlite.decode(this, r, r.len);
  }

  toJSON(): TestLiteImportsNonliteJSON {
    return TestLiteImportsNonlite.toJSON(this);
  }

  fromJSON(obj: TestLiteImportsNonliteJSON): TestLiteImportsNonlite {
    return TestLiteImportsNonlite.fromJSON(this, obj);
  }

  clone(): TestLiteImportsNonlite {
    return new TestLiteImportsNonlite(this);
  }
}
