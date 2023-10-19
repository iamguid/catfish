// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: protobuf_unittest
// file: unittest_proto3_optional.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export interface TestProto3OptionalJSON {
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
  optionalNestedMessage: TestProto3Optional.NestedMessageJSON | undefined;
  lazyNestedMessage: TestProto3Optional.NestedMessageJSON | undefined;
  optionalNestedEnum: string | undefined;
  singularInt32: number;
  singularInt64: string;
}

export class TestProto3Optional {
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
  optionalBytes: Uint8Array | Buffer | undefined = undefined;
  optionalCord: string | undefined = undefined;
  optionalNestedMessage: TestProto3Optional.NestedMessage | undefined =
    undefined;
  lazyNestedMessage: TestProto3Optional.NestedMessage | undefined = undefined;
  optionalNestedEnum: number | undefined = undefined;
  singularInt32: number = 0;
  singularInt64: pjs.Long = pjs.util.Long.fromValue(0, false);

  public static fields = [
    "optionalInt32",
    "optionalInt64",
    "optionalUint32",
    "optionalUint64",
    "optionalSint32",
    "optionalSint64",
    "optionalFixed32",
    "optionalFixed64",
    "optionalSfixed32",
    "optionalSfixed64",
    "optionalFloat",
    "optionalDouble",
    "optionalBool",
    "optionalString",
    "optionalBytes",
    "optionalCord",
    "optionalNestedMessage",
    "lazyNestedMessage",
    "optionalNestedEnum",
    "singularInt32",
    "singularInt64",
  ];

  public get fields() {
    return TestProto3Optional.fields;
  }

  constructor(obj?: TestProto3Optional) {
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

  public static encode(m: TestProto3Optional, w: pjs.Writer): pjs.Writer {
    // int32 optional_int32 = 1
    if (m.optionalInt32 !== 0) {
      w.uint32(8);
      w.int32(m.optionalInt32);
    }

    // int64 optional_int64 = 2
    if (m.optionalInt64 !== pjs.util.Long.fromValue(0, false)) {
      w.uint32(16);
      w.int64(m.optionalInt64);
    }

    // uint32 optional_uint32 = 3
    if (m.optionalUint32 !== 0) {
      w.uint32(24);
      w.uint32(m.optionalUint32);
    }

    // uint64 optional_uint64 = 4
    if (m.optionalUint64 !== pjs.util.Long.fromValue(0, true)) {
      w.uint32(32);
      w.uint64(m.optionalUint64);
    }

    // sint32 optional_sint32 = 5
    if (m.optionalSint32 !== 0) {
      w.uint32(40);
      w.sint32(m.optionalSint32);
    }

    // sint64 optional_sint64 = 6
    if (m.optionalSint64 !== pjs.util.Long.fromValue(0, false)) {
      w.uint32(48);
      w.sint64(m.optionalSint64);
    }

    // fixed32 optional_fixed32 = 7
    if (m.optionalFixed32 !== 0) {
      w.uint32(61);
      w.fixed32(m.optionalFixed32);
    }

    // fixed64 optional_fixed64 = 8
    if (m.optionalFixed64 !== pjs.util.Long.fromValue(0, true)) {
      w.uint32(65);
      w.fixed64(m.optionalFixed64);
    }

    // sfixed32 optional_sfixed32 = 9
    if (m.optionalSfixed32 !== 0) {
      w.uint32(77);
      w.sfixed32(m.optionalSfixed32);
    }

    // sfixed64 optional_sfixed64 = 10
    if (m.optionalSfixed64 !== pjs.util.Long.fromValue(0, false)) {
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
    if (m.optionalBytes !== pjs.util.newBuffer(0)) {
      w.uint32(122);
      w.bytes(m.optionalBytes);
    }

    // string optional_cord = 16
    if (m.optionalCord !== "") {
      w.uint32(130);
      w.string(m.optionalCord);
    }

    // TestProto3Optional.NestedMessage optional_nested_message = 18
    if (m.optionalNestedMessage !== new TestProto3Optional.NestedMessage()) {
      w.uint32(146);
      TestProto3Optional.NestedMessage.encode(
        m.optionalNestedMessage,
        w.fork()
      ).ldelim();
    }

    // TestProto3Optional.NestedMessage lazy_nested_message = 19
    if (m.lazyNestedMessage !== new TestProto3Optional.NestedMessage()) {
      w.uint32(154);
      TestProto3Optional.NestedMessage.encode(
        m.lazyNestedMessage,
        w.fork()
      ).ldelim();
    }

    // TestProto3Optional.NestedEnum optional_nested_enum = 21
    if (m.optionalNestedEnum !== TestProto3Optional.NestedEnum.UNSPECIFIED) {
      w.uint32(168);
      w.int32(m.optionalNestedEnum);
    }

    // int32 singular_int32 = 22
    if (m.singularInt32 !== 0) {
      w.uint32(176);
      w.int32(m.singularInt32);
    }

    // int64 singular_int64 = 23
    if (m.singularInt64 !== pjs.util.Long.fromValue(0, false)) {
      w.uint32(184);
      w.int64(m.singularInt64);
    }

    return w;
  }

  public static decode(
    m: TestProto3Optional,
    r: pjs.Reader,
    length: number
  ): TestProto3Optional {
    const l = r.pos + length;
    while (r.pos < l) {
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
          m.optionalNestedMessage = TestProto3Optional.NestedMessage.decode(
            undefined,
            r,
            r.uint32()
          );
          continue;

        // TestProto3Optional.NestedMessage lazy_nested_message = 19
        case 154:
          m.lazyNestedMessage = TestProto3Optional.NestedMessage.decode(
            undefined,
            r,
            r.uint32()
          );
          continue;

        // TestProto3Optional.NestedEnum optional_nested_enum = 21
        case 168:
          m.optionalNestedEnum = r.int32();
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

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: TestProto3Optional): TestProto3OptionalJSON {
    return {
      optionalInt32: m.optionalInt32,
      optionalInt64: m.optionalInt64.toString(),
      optionalUint32: m.optionalUint32,
      optionalUint64: m.optionalUint64.toString(),
      optionalSint32: m.optionalSint32,
      optionalSint64: m.optionalSint64.toString(),
      optionalFixed32: m.optionalFixed32,
      optionalFixed64: m.optionalFixed64.toString(),
      optionalSfixed32: m.optionalSfixed32,
      optionalSfixed64: m.optionalSfixed64.toString(),
      optionalFloat: m.optionalFloat,
      optionalDouble: m.optionalDouble,
      optionalBool: m.optionalBool,
      optionalString: m.optionalString,
      optionalBytes: pjs.util.base64.encode(
        m.optionalBytes,
        0,
        m.optionalBytes.length
      ),
      optionalCord: m.optionalCord,
      optionalNestedMessage: m.optionalNestedMessage.toJSON(),
      lazyNestedMessage: m.lazyNestedMessage.toJSON(),
      optionalNestedEnum: TestProto3Optional.NestedEnum[m.optionalNestedEnum],
      singularInt32: m.singularInt32,
      singularInt64: m.singularInt64.toString(),
    };
  }

  public static fromJSON(
    m: TestProto3Optional,
    obj: TestProto3OptionalJSON
  ): TestProto3Optional {
    m.optionalInt32 = obj.optionalInt32;
    m.optionalInt64 = pjs.util.Long.fromValue(obj.optionalInt64, false);
    m.optionalUint32 = obj.optionalUint32;
    m.optionalUint64 = pjs.util.Long.fromValue(obj.optionalUint64, true);
    m.optionalSint32 = obj.optionalSint32;
    m.optionalSint64 = pjs.util.Long.fromValue(obj.optionalSint64, false);
    m.optionalFixed32 = obj.optionalFixed32;
    m.optionalFixed64 = pjs.util.Long.fromValue(obj.optionalFixed64, true);
    m.optionalSfixed32 = obj.optionalSfixed32;
    m.optionalSfixed64 = pjs.util.Long.fromValue(obj.optionalSfixed64, false);
    m.optionalFloat = obj.optionalFloat;
    m.optionalDouble = obj.optionalDouble;
    m.optionalBool = obj.optionalBool;
    m.optionalString = obj.optionalString;
    {
      const tmpBuffer = [];
      pjs.util.base64.decode(obj.optionalBytes, tmpBuffer, 0);
      m.optionalBytes = new pjs.util.Buffer(tmpBuffer);
    }
    m.optionalCord = obj.optionalCord;
    m.optionalNestedMessage = new TestProto3Optional.NestedMessage().fromJSON(
      obj.optionalNestedMessage
    );
    m.lazyNestedMessage = new TestProto3Optional.NestedMessage().fromJSON(
      obj.lazyNestedMessage
    );
    m.optionalNestedEnum =
      TestProto3Optional.NestedEnum[obj.optionalNestedEnum];
    m.singularInt32 = obj.singularInt32;
    m.singularInt64 = pjs.util.Long.fromValue(obj.singularInt64, false);

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return TestProto3Optional.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): TestProto3Optional {
    const r = new pjs.Reader(buffer);
    return TestProto3Optional.decode(this, r, r.len);
  }

  toJSON(): TestProto3OptionalJSON {
    return TestProto3Optional.toJSON(this);
  }

  fromJSON(obj: TestProto3OptionalJSON): TestProto3Optional {
    return TestProto3Optional.fromJSON(this, obj);
  }

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

  export interface NestedMessageJSON {
    bb: number | undefined;
  }

  export class NestedMessage {
    bb: number | undefined = undefined;

    public static fields = ["bb"];

    public get fields() {
      return NestedMessage.fields;
    }

    constructor(obj?: NestedMessage) {
      if (!obj) return;

      if (obj.bb !== undefined) {
        this.bb = obj.bb;
      }
    }

    public static encode(m: NestedMessage, w: pjs.Writer): pjs.Writer {
      // int32 bb = 1
      if (m.bb !== 0) {
        w.uint32(8);
        w.int32(m.bb);
      }

      return w;
    }

    public static decode(
      m: NestedMessage,
      r: pjs.Reader,
      length: number
    ): NestedMessage {
      const l = r.pos + length;
      while (r.pos < l) {
        const tag = r.uint32();
        switch (tag) {
          // int32 bb = 1
          case 8:
            m.bb = r.int32();
            continue;
        }

        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
      }

      return m;
    }

    public static toJSON(m: NestedMessage): NestedMessageJSON {
      return {
        bb: m.bb,
      };
    }

    public static fromJSON(
      m: NestedMessage,
      obj: NestedMessageJSON
    ): NestedMessage {
      m.bb = obj.bb;

      return m;
    }

    serialize(): Uint8Array | Buffer {
      const w = pjs.Writer.create();
      return NestedMessage.encode(this, w).finish();
    }

    deserialize(buffer: Uint8Array | Buffer): NestedMessage {
      const r = new pjs.Reader(buffer);
      return NestedMessage.decode(this, r, r.len);
    }

    toJSON(): NestedMessageJSON {
      return NestedMessage.toJSON(this);
    }

    fromJSON(obj: NestedMessageJSON): NestedMessage {
      return NestedMessage.fromJSON(this, obj);
    }

    clone(): NestedMessage {
      return new NestedMessage(this);
    }
  }
}

export interface TestProto3OptionalMessageJSON {
  nestedMessage: TestProto3OptionalMessage.NestedMessageJSON;
  optionalNestedMessage:
    | TestProto3OptionalMessage.NestedMessageJSON
    | undefined;
}

export class TestProto3OptionalMessage {
  nestedMessage: TestProto3OptionalMessage.NestedMessage =
    new TestProto3OptionalMessage.NestedMessage();
  optionalNestedMessage: TestProto3OptionalMessage.NestedMessage | undefined =
    undefined;

  public static fields = ["nestedMessage", "optionalNestedMessage"];

  public get fields() {
    return TestProto3OptionalMessage.fields;
  }

  constructor(obj?: TestProto3OptionalMessage) {
    if (!obj) return;

    if (obj.nestedMessage !== undefined) {
      this.nestedMessage = obj.nestedMessage;
    }
    if (obj.optionalNestedMessage !== undefined) {
      this.optionalNestedMessage = obj.optionalNestedMessage;
    }
  }

  public static encode(
    m: TestProto3OptionalMessage,
    w: pjs.Writer
  ): pjs.Writer {
    // TestProto3OptionalMessage.NestedMessage nested_message = 1
    if (m.nestedMessage !== new TestProto3OptionalMessage.NestedMessage()) {
      w.uint32(10);
      TestProto3OptionalMessage.NestedMessage.encode(
        m.nestedMessage,
        w.fork()
      ).ldelim();
    }

    // TestProto3OptionalMessage.NestedMessage optional_nested_message = 2
    if (
      m.optionalNestedMessage !== new TestProto3OptionalMessage.NestedMessage()
    ) {
      w.uint32(18);
      TestProto3OptionalMessage.NestedMessage.encode(
        m.optionalNestedMessage,
        w.fork()
      ).ldelim();
    }

    return w;
  }

  public static decode(
    m: TestProto3OptionalMessage,
    r: pjs.Reader,
    length: number
  ): TestProto3OptionalMessage {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // TestProto3OptionalMessage.NestedMessage nested_message = 1
        case 10:
          m.nestedMessage = TestProto3OptionalMessage.NestedMessage.decode(
            undefined,
            r,
            r.uint32()
          );
          continue;

        // TestProto3OptionalMessage.NestedMessage optional_nested_message = 2
        case 18:
          m.optionalNestedMessage =
            TestProto3OptionalMessage.NestedMessage.decode(
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

  public static toJSON(
    m: TestProto3OptionalMessage
  ): TestProto3OptionalMessageJSON {
    return {
      nestedMessage: m.nestedMessage.toJSON(),
      optionalNestedMessage: m.optionalNestedMessage.toJSON(),
    };
  }

  public static fromJSON(
    m: TestProto3OptionalMessage,
    obj: TestProto3OptionalMessageJSON
  ): TestProto3OptionalMessage {
    m.nestedMessage = new TestProto3OptionalMessage.NestedMessage().fromJSON(
      obj.nestedMessage
    );
    m.optionalNestedMessage =
      new TestProto3OptionalMessage.NestedMessage().fromJSON(
        obj.optionalNestedMessage
      );

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return TestProto3OptionalMessage.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): TestProto3OptionalMessage {
    const r = new pjs.Reader(buffer);
    return TestProto3OptionalMessage.decode(this, r, r.len);
  }

  toJSON(): TestProto3OptionalMessageJSON {
    return TestProto3OptionalMessage.toJSON(this);
  }

  fromJSON(obj: TestProto3OptionalMessageJSON): TestProto3OptionalMessage {
    return TestProto3OptionalMessage.fromJSON(this, obj);
  }

  clone(): TestProto3OptionalMessage {
    return new TestProto3OptionalMessage(this);
  }
}

export namespace TestProto3OptionalMessage {
  export interface NestedMessageJSON {
    s: string;
  }

  export class NestedMessage {
    s: string = "";

    public static fields = ["s"];

    public get fields() {
      return NestedMessage.fields;
    }

    constructor(obj?: NestedMessage) {
      if (!obj) return;

      if (obj.s !== undefined) {
        this.s = obj.s;
      }
    }

    public static encode(m: NestedMessage, w: pjs.Writer): pjs.Writer {
      // string s = 1
      if (m.s !== "") {
        w.uint32(10);
        w.string(m.s);
      }

      return w;
    }

    public static decode(
      m: NestedMessage,
      r: pjs.Reader,
      length: number
    ): NestedMessage {
      const l = r.pos + length;
      while (r.pos < l) {
        const tag = r.uint32();
        switch (tag) {
          // string s = 1
          case 10:
            m.s = r.string();
            continue;
        }

        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
      }

      return m;
    }

    public static toJSON(m: NestedMessage): NestedMessageJSON {
      return {
        s: m.s,
      };
    }

    public static fromJSON(
      m: NestedMessage,
      obj: NestedMessageJSON
    ): NestedMessage {
      m.s = obj.s;

      return m;
    }

    serialize(): Uint8Array | Buffer {
      const w = pjs.Writer.create();
      return NestedMessage.encode(this, w).finish();
    }

    deserialize(buffer: Uint8Array | Buffer): NestedMessage {
      const r = new pjs.Reader(buffer);
      return NestedMessage.decode(this, r, r.len);
    }

    toJSON(): NestedMessageJSON {
      return NestedMessage.toJSON(this);
    }

    fromJSON(obj: NestedMessageJSON): NestedMessage {
      return NestedMessage.fromJSON(this, obj);
    }

    clone(): NestedMessage {
      return new NestedMessage(this);
    }
  }
}

export interface Proto3OptionalExtensionsJSON {}

export class Proto3OptionalExtensions {
  public static fields = [];

  public get fields() {
    return Proto3OptionalExtensions.fields;
  }

  constructor(obj?: Proto3OptionalExtensions) {
    if (!obj) return;
  }

  public static encode(m: Proto3OptionalExtensions, w: pjs.Writer): pjs.Writer {
    return w;
  }

  public static decode(
    m: Proto3OptionalExtensions,
    r: pjs.Reader,
    length: number
  ): Proto3OptionalExtensions {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(
    m: Proto3OptionalExtensions
  ): Proto3OptionalExtensionsJSON {
    return {};
  }

  public static fromJSON(
    m: Proto3OptionalExtensions,
    obj: Proto3OptionalExtensionsJSON
  ): Proto3OptionalExtensions {
    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return Proto3OptionalExtensions.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): Proto3OptionalExtensions {
    const r = new pjs.Reader(buffer);
    return Proto3OptionalExtensions.decode(this, r, r.len);
  }

  toJSON(): Proto3OptionalExtensionsJSON {
    return Proto3OptionalExtensions.toJSON(this);
  }

  fromJSON(obj: Proto3OptionalExtensionsJSON): Proto3OptionalExtensions {
    return Proto3OptionalExtensions.fromJSON(this, obj);
  }

  clone(): Proto3OptionalExtensions {
    return new Proto3OptionalExtensions(this);
  }
}
