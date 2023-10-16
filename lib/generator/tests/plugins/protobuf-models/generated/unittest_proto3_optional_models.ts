// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest
// file: unittest_proto3_optional.proto

import * as pjs from "protobufjs/minimal";

export interface ITestProto3OptionalObj {
  optionalInt32: number | undefined;
  optionalInt64: string | undefined;
  optionalUint32: number | undefined;
  optionalUint64: string | undefined;
  optionalSint32: number | undefined;
  optionalSint64: string | undefined;
  optionalFixed32: number | undefined;
  optionalFixed64: string | undefined;
  optionalSfixed32: number | undefined;
  optionalSfixed64: string | undefined;
  optionalFloat: number | undefined;
  optionalDouble: number | undefined;
  optionalBool: boolean | undefined;
  optionalString: string | undefined;
  optionalBytes: string | undefined;
  optionalCord: string | undefined;
  optionalNestedMessage: null | undefined;
  lazyNestedMessage: null | undefined;
  optionalNestedEnum: null | undefined;
  singularInt32: number;
  singularInt64: string;
}

export interface ITestProto3Optional {
  optionalInt32: number | undefined;
  optionalInt64: pjs.Long | undefined;
  optionalUint32: number | undefined;
  optionalUint64: pjs.Long | undefined;
  optionalSint32: number | undefined;
  optionalSint64: pjs.Long | undefined;
  optionalFixed32: number | undefined;
  optionalFixed64: pjs.Long | undefined;
  optionalSfixed32: number | undefined;
  optionalSfixed64: pjs.Long | undefined;
  optionalFloat: number | undefined;
  optionalDouble: number | undefined;
  optionalBool: boolean | undefined;
  optionalString: string | undefined;
  optionalBytes: Uint8Array | undefined;
  optionalCord: string | undefined;
  optionalNestedMessage: null | undefined;
  lazyNestedMessage: null | undefined;
  optionalNestedEnum: null | undefined;
  singularInt32: number;
  singularInt64: pjs.Long;
}

export class TestProto3Optional implements ITestProto3Optional {
  optionalInt32: number | undefined = undefined;
  optionalInt64: pjs.Long | undefined = undefined;
  optionalUint32: number | undefined = undefined;
  optionalUint64: pjs.Long | undefined = undefined;
  optionalSint32: number | undefined = undefined;
  optionalSint64: pjs.Long | undefined = undefined;
  optionalFixed32: number | undefined = undefined;
  optionalFixed64: pjs.Long | undefined = undefined;
  optionalSfixed32: number | undefined = undefined;
  optionalSfixed64: pjs.Long | undefined = undefined;
  optionalFloat: number | undefined = undefined;
  optionalDouble: number | undefined = undefined;
  optionalBool: boolean | undefined = undefined;
  optionalString: string | undefined = undefined;
  optionalBytes: Uint8Array | undefined = undefined;
  optionalCord: string | undefined = undefined;
  optionalNestedMessage: null | undefined = undefined;
  lazyNestedMessage: null | undefined = undefined;
  optionalNestedEnum: null | undefined = undefined;
  singularInt32: number = 0;
  singularInt64: pjs.Long = 0n;

  constructor(obj?: Partial<ITestProto3Optional>) {
    if (!obj) return;

    if (obj.optionalInt32 !== undefined) {
      this.optionalInt32 = obj.optionalInt32;
    }
    if (obj.optionalInt64 !== undefined) {
      this.optionalInt64 = obj.optionalInt64;
    }
    if (obj.optionalUint32 !== undefined) {
      this.optionalUint32 = obj.optionalUint32;
    }
    if (obj.optionalUint64 !== undefined) {
      this.optionalUint64 = obj.optionalUint64;
    }
    if (obj.optionalSint32 !== undefined) {
      this.optionalSint32 = obj.optionalSint32;
    }
    if (obj.optionalSint64 !== undefined) {
      this.optionalSint64 = obj.optionalSint64;
    }
    if (obj.optionalFixed32 !== undefined) {
      this.optionalFixed32 = obj.optionalFixed32;
    }
    if (obj.optionalFixed64 !== undefined) {
      this.optionalFixed64 = obj.optionalFixed64;
    }
    if (obj.optionalSfixed32 !== undefined) {
      this.optionalSfixed32 = obj.optionalSfixed32;
    }
    if (obj.optionalSfixed64 !== undefined) {
      this.optionalSfixed64 = obj.optionalSfixed64;
    }
    if (obj.optionalFloat !== undefined) {
      this.optionalFloat = obj.optionalFloat;
    }
    if (obj.optionalDouble !== undefined) {
      this.optionalDouble = obj.optionalDouble;
    }
    if (obj.optionalBool !== undefined) {
      this.optionalBool = obj.optionalBool;
    }
    if (obj.optionalString !== undefined) {
      this.optionalString = obj.optionalString;
    }
    if (obj.optionalBytes !== undefined) {
      this.optionalBytes = obj.optionalBytes;
    }
    if (obj.optionalCord !== undefined) {
      this.optionalCord = obj.optionalCord;
    }
    if (obj.optionalNestedMessage !== undefined) {
      this.optionalNestedMessage = obj.optionalNestedMessage;
    }
    if (obj.lazyNestedMessage !== undefined) {
      this.lazyNestedMessage = obj.lazyNestedMessage;
    }
    if (obj.optionalNestedEnum !== undefined) {
      this.optionalNestedEnum = obj.optionalNestedEnum;
    }
    if (obj.singularInt32 !== undefined) {
      this.singularInt32 = obj.singularInt32;
    }
    if (obj.singularInt64 !== undefined) {
      this.singularInt64 = obj.singularInt64;
    }
  }

  public static encode(
    m: ITestProto3Optional,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // int32 optional_int32 = 1
    if (m.optionalInt32 !== 0) {
      w.uint32(8);
      w.int32(m.optionalInt32);
    }

    // int64 optional_int64 = 2
    if (m.optionalInt64 !== 0n) {
      w.uint32(16);
      w.int64(m.optionalInt64);
    }

    // uint32 optional_uint32 = 3
    if (m.optionalUint32 !== 0) {
      w.uint32(24);
      w.uint32(m.optionalUint32);
    }

    // uint64 optional_uint64 = 4
    if (m.optionalUint64 !== 0n) {
      w.uint32(32);
      w.uint64(m.optionalUint64);
    }

    // sint32 optional_sint32 = 5
    if (m.optionalSint32 !== 0) {
      w.uint32(40);
      w.sint32(m.optionalSint32);
    }

    // sint64 optional_sint64 = 6
    if (m.optionalSint64 !== 0n) {
      w.uint32(48);
      w.sint64(m.optionalSint64);
    }

    // fixed32 optional_fixed32 = 7
    if (m.optionalFixed32 !== 0) {
      w.uint32(61);
      w.fixed32(m.optionalFixed32);
    }

    // fixed64 optional_fixed64 = 8
    if (m.optionalFixed64 !== 0n) {
      w.uint32(65);
      w.fixed64(m.optionalFixed64);
    }

    // sfixed32 optional_sfixed32 = 9
    if (m.optionalSfixed32 !== 0) {
      w.uint32(77);
      w.sfixed32(m.optionalSfixed32);
    }

    // sfixed64 optional_sfixed64 = 10
    if (m.optionalSfixed64 !== 0n) {
      w.uint32(81);
      w.sfixed64(m.optionalSfixed64);
    }

    // float optional_float = 11
    if (m.optionalFloat !== 0) {
      w.uint32(93);
      w.float(m.optionalFloat);
    }

    // double optional_double = 12
    if (m.optionalDouble !== 0) {
      w.uint32(97);
      w.double(m.optionalDouble);
    }

    // bool optional_bool = 13
    if (m.optionalBool !== false) {
      w.uint32(104);
      w.bool(m.optionalBool);
    }

    // string optional_string = 14
    if (m.optionalString !== "") {
      w.uint32(114);
      w.string(m.optionalString);
    }

    // bytes optional_bytes = 15
    if (m.optionalBytes !== new Uint8Array()) {
      w.uint32(122);
      w.bytes(m.optionalBytes);
    }

    // string optional_cord = 16
    if (m.optionalCord !== "") {
      w.uint32(130);
      w.string(m.optionalCord);
    }

    // TestProto3Optional.NestedMessage optional_nested_message = 18
    if (m.optionalNestedMessage !== null) {
      w.uint32(146);
      m.optionalNestedMessage.encode(writer);
    }

    // TestProto3Optional.NestedMessage lazy_nested_message = 19
    if (m.lazyNestedMessage !== null) {
      w.uint32(154);
      m.lazyNestedMessage.encode(writer);
    }

    // TestProto3Optional.NestedEnum optional_nested_enum = 21
    if (m.optionalNestedEnum !== null) {
      w.uint32(170);
      m.optionalNestedEnum.encode(writer);
    }

    // int32 singular_int32 = 22
    if (m.singularInt32 !== 0) {
      w.uint32(176);
      w.int32(m.singularInt32);
    }

    // int64 singular_int64 = 23
    if (m.singularInt64 !== 0n) {
      w.uint32(184);
      w.int64(m.singularInt64);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): TestProto3Optional {
    const m = new TestProto3Optional();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // int32 optional_int32 = 1
        case 8:
          m.optionalInt32 = r.int32();
          continue;

        // int64 optional_int64 = 2
        case 16:
          m.optionalInt64 = r.int64();
          continue;

        // uint32 optional_uint32 = 3
        case 24:
          m.optionalUint32 = r.uint32();
          continue;

        // uint64 optional_uint64 = 4
        case 32:
          m.optionalUint64 = r.uint64();
          continue;

        // sint32 optional_sint32 = 5
        case 40:
          m.optionalSint32 = r.sint32();
          continue;

        // sint64 optional_sint64 = 6
        case 48:
          m.optionalSint64 = r.sint64();
          continue;

        // fixed32 optional_fixed32 = 7
        case 61:
          m.optionalFixed32 = r.fixed32();
          continue;

        // fixed64 optional_fixed64 = 8
        case 65:
          m.optionalFixed64 = r.fixed64();
          continue;

        // sfixed32 optional_sfixed32 = 9
        case 77:
          m.optionalSfixed32 = r.sfixed32();
          continue;

        // sfixed64 optional_sfixed64 = 10
        case 81:
          m.optionalSfixed64 = r.sfixed64();
          continue;

        // float optional_float = 11
        case 93:
          m.optionalFloat = r.float();
          continue;

        // double optional_double = 12
        case 97:
          m.optionalDouble = r.double();
          continue;

        // bool optional_bool = 13
        case 104:
          m.optionalBool = r.bool();
          continue;

        // string optional_string = 14
        case 114:
          m.optionalString = r.string();
          continue;

        // bytes optional_bytes = 15
        case 122:
          m.optionalBytes = r.bytes();
          continue;

        // string optional_cord = 16
        case 130:
          m.optionalCord = r.string();
          continue;

        // TestProto3Optional.NestedMessage optional_nested_message = 18
        case 146:
          m.optionalNestedMessage =
            unittest_proto3_optional_models.protobuf_unittest.TestProto3Optional.NestedMessage;
          continue;

        // TestProto3Optional.NestedMessage lazy_nested_message = 19
        case 154:
          m.lazyNestedMessage =
            unittest_proto3_optional_models.protobuf_unittest.TestProto3Optional.NestedMessage;
          continue;

        // TestProto3Optional.NestedEnum optional_nested_enum = 21
        case 170:
          m.optionalNestedEnum =
            unittest_proto3_optional_models.protobuf_unittest.TestProto3Optional.NestedEnum;
          continue;

        // int32 singular_int32 = 22
        case 176:
          m.singularInt32 = r.int32();
          continue;

        // int64 singular_int64 = 23
        case 184:
          m.singularInt64 = r.int64();
          continue;
      }
    }

    return m;
  }

  public static toJSON(m: ITestProto3Optional): ITestProto3OptionalObj {}

  public static fromJSON(obj: ITestProto3OptionalObj): ITestProto3Optional {}

  clone(): TestProto3Optional {
    return new TestProto3Optional(this);
  }
}

export namespace TestProto3Optional {
  export enum NestedEnum {
    UNSPECIFIED = 0,
    FOO = 1,
    BAR = 2,
    BAZ = 3,
    NEG = 1,
  }

  export interface INestedMessageObj {
    bb: number | undefined;
  }

  export interface INestedMessage {
    bb: number | undefined;
  }

  export class NestedMessage implements INestedMessage {
    bb: number | undefined = undefined;

    constructor(obj?: Partial<INestedMessage>) {
      if (!obj) return;

      if (obj.bb !== undefined) {
        this.bb = obj.bb;
      }
    }

    public static encode(
      m: INestedMessage,
      w: pjs.Writer = pjs.Writer.create()
    ): Uint8Array {
      // int32 bb = 1
      if (m.bb !== 0) {
        w.uint32(8);
        w.int32(m.bb);
      }

      return w.finish();
    }

    public static decode(b: Uint8Array): NestedMessage {
      const m = new NestedMessage();
      const r = pjs.Reader.create(b);
      while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag) {
          // int32 bb = 1
          case 8:
            m.bb = r.int32();
            continue;
        }
      }

      return m;
    }

    public static toJSON(m: INestedMessage): INestedMessageObj {}

    public static fromJSON(obj: INestedMessageObj): INestedMessage {}

    clone(): NestedMessage {
      return new NestedMessage(this);
    }
  }
}

export interface ITestProto3OptionalMessageObj {
  nestedMessage: null;
  optionalNestedMessage: null | undefined;
}

export interface ITestProto3OptionalMessage {
  nestedMessage: null;
  optionalNestedMessage: null | undefined;
}

export class TestProto3OptionalMessage implements ITestProto3OptionalMessage {
  nestedMessage: null = null;
  optionalNestedMessage: null | undefined = undefined;

  constructor(obj?: Partial<ITestProto3OptionalMessage>) {
    if (!obj) return;

    if (obj.nestedMessage !== undefined) {
      this.nestedMessage = obj.nestedMessage;
    }
    if (obj.optionalNestedMessage !== undefined) {
      this.optionalNestedMessage = obj.optionalNestedMessage;
    }
  }

  public static encode(
    m: ITestProto3OptionalMessage,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    // TestProto3OptionalMessage.NestedMessage nested_message = 1
    if (m.nestedMessage !== null) {
      w.uint32(10);
      m.nestedMessage.encode(writer);
    }

    // TestProto3OptionalMessage.NestedMessage optional_nested_message = 2
    if (m.optionalNestedMessage !== null) {
      w.uint32(18);
      m.optionalNestedMessage.encode(writer);
    }

    return w.finish();
  }

  public static decode(b: Uint8Array): TestProto3OptionalMessage {
    const m = new TestProto3OptionalMessage();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
        // TestProto3OptionalMessage.NestedMessage nested_message = 1
        case 10:
          m.nestedMessage =
            unittest_proto3_optional_models.protobuf_unittest.TestProto3OptionalMessage.NestedMessage;
          continue;

        // TestProto3OptionalMessage.NestedMessage optional_nested_message = 2
        case 18:
          m.optionalNestedMessage =
            unittest_proto3_optional_models.protobuf_unittest.TestProto3OptionalMessage.NestedMessage;
          continue;
      }
    }

    return m;
  }

  public static toJSON(
    m: ITestProto3OptionalMessage
  ): ITestProto3OptionalMessageObj {}

  public static fromJSON(
    obj: ITestProto3OptionalMessageObj
  ): ITestProto3OptionalMessage {}

  clone(): TestProto3OptionalMessage {
    return new TestProto3OptionalMessage(this);
  }
}

export namespace TestProto3OptionalMessage {
  export interface INestedMessageObj {
    s: string;
  }

  export interface INestedMessage {
    s: string;
  }

  export class NestedMessage implements INestedMessage {
    s: string = "";

    constructor(obj?: Partial<INestedMessage>) {
      if (!obj) return;

      if (obj.s !== undefined) {
        this.s = obj.s;
      }
    }

    public static encode(
      m: INestedMessage,
      w: pjs.Writer = pjs.Writer.create()
    ): Uint8Array {
      // string s = 1
      if (m.s !== "") {
        w.uint32(10);
        w.string(m.s);
      }

      return w.finish();
    }

    public static decode(b: Uint8Array): NestedMessage {
      const m = new NestedMessage();
      const r = pjs.Reader.create(b);
      while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag) {
          // string s = 1
          case 10:
            m.s = r.string();
            continue;
        }
      }

      return m;
    }

    public static toJSON(m: INestedMessage): INestedMessageObj {}

    public static fromJSON(obj: INestedMessageObj): INestedMessage {}

    clone(): NestedMessage {
      return new NestedMessage(this);
    }
  }
}

export interface IProto3OptionalExtensionsObj {}

export interface IProto3OptionalExtensions {}

export class Proto3OptionalExtensions implements IProto3OptionalExtensions {
  constructor(obj?: Partial<IProto3OptionalExtensions>) {
    if (!obj) return;
  }

  public static encode(
    m: IProto3OptionalExtensions,
    w: pjs.Writer = pjs.Writer.create()
  ): Uint8Array {
    return w.finish();
  }

  public static decode(b: Uint8Array): Proto3OptionalExtensions {
    const m = new Proto3OptionalExtensions();
    const r = pjs.Reader.create(b);
    while (r.pos < r.len) {
      const tag = r.uint32();
      switch (tag) {
      }
    }

    return m;
  }

  public static toJSON(
    m: IProto3OptionalExtensions
  ): IProto3OptionalExtensionsObj {}

  public static fromJSON(
    obj: IProto3OptionalExtensionsObj
  ): IProto3OptionalExtensions {}

  clone(): Proto3OptionalExtensions {
    return new Proto3OptionalExtensions(this);
  }
}
