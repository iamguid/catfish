// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: proto3_lite_unittest
// file: unittest_proto3_lite.proto

import * as unittest_import_models from "unittest_import_models";

import * as unittest_import_public_models from "unittest_import_public_models";

import * as pjs from "protobufjs/minimal";

export interface ITestAllTypes {
  optional_int32: number;
  optional_int64: BigInt;
  optional_uint32: number;
  optional_uint64: BigInt;
  optional_sint32: number;
  optional_sint64: BigInt;
  optional_fixed32: number;
  optional_fixed64: BigInt;
  optional_sfixed32: number;
  optional_sfixed64: BigInt;
  optional_float: number;
  optional_double: number;
  optional_bool: boolean;
  optional_string: string;
  optional_bytes: Uint8Array;
  optional_nested_message: TestAllTypes.NestedMessage;
  optional_foreign_message: ForeignMessage;
  optional_import_message: protobuf_unittest_import.ImportMessage;
  optional_nested_enum: TestAllTypes.NestedEnum;
  optional_foreign_enum: ForeignEnum;
  optional_string_piece: string;
  optional_cord: string;
  optional_public_import_message: protobuf_unittest_import.PublicImportMessage;
  optional_lazy_message: TestAllTypes.NestedMessage;
  repeated_int32: number;
  repeated_int64: BigInt;
  repeated_uint32: number;
  repeated_uint64: BigInt;
  repeated_sint32: number;
  repeated_sint64: BigInt;
  repeated_fixed32: number;
  repeated_fixed64: BigInt;
  repeated_sfixed32: number;
  repeated_sfixed64: BigInt;
  repeated_float: number;
  repeated_double: number;
  repeated_bool: boolean;
  repeated_string: string;
  repeated_bytes: Uint8Array;
  repeated_nested_message: TestAllTypes.NestedMessage;
  repeated_foreign_message: ForeignMessage;
  repeated_import_message: protobuf_unittest_import.ImportMessage;
  repeated_nested_enum: TestAllTypes.NestedEnum;
  repeated_foreign_enum: ForeignEnum;
  repeated_string_piece: string;
  repeated_cord: string;
  repeated_lazy_message: TestAllTypes.NestedMessage;
  oneof_uint32?: number;
  oneof_nested_message?: TestAllTypes.NestedMessage;
  oneof_string?: string;
  oneof_bytes?: Uint8Array;
}

export class TestAllTypes implements ITestAllTypes {
  optional_int32: number = 0;
  optional_int64: BigInt = 0n;
  optional_uint32: number = 0;
  optional_uint64: BigInt = 0n;
  optional_sint32: number = 0;
  optional_sint64: BigInt = 0n;
  optional_fixed32: number = 0;
  optional_fixed64: BigInt = 0n;
  optional_sfixed32: number = 0;
  optional_sfixed64: BigInt = 0n;
  optional_float: number = 0;
  optional_double: number = 0;
  optional_bool: boolean = false;
  optional_string: string = "";
  optional_bytes: Uint8Array = new Uint8Array();
  optional_nested_message: TestAllTypes.NestedMessage = null;
  optional_foreign_message: ForeignMessage = null;
  optional_import_message: protobuf_unittest_import.ImportMessage = null;
  optional_nested_enum: TestAllTypes.NestedEnum = null;
  optional_foreign_enum: ForeignEnum = null;
  optional_string_piece: string = "";
  optional_cord: string = "";
  optional_public_import_message: protobuf_unittest_import.PublicImportMessage =
    null;
  optional_lazy_message: TestAllTypes.NestedMessage = null;
  repeated_int32: number = [];
  repeated_int64: BigInt = [];
  repeated_uint32: number = [];
  repeated_uint64: BigInt = [];
  repeated_sint32: number = [];
  repeated_sint64: BigInt = [];
  repeated_fixed32: number = [];
  repeated_fixed64: BigInt = [];
  repeated_sfixed32: number = [];
  repeated_sfixed64: BigInt = [];
  repeated_float: number = [];
  repeated_double: number = [];
  repeated_bool: boolean = [];
  repeated_string: string = [];
  repeated_bytes: Uint8Array = [];
  repeated_nested_message: TestAllTypes.NestedMessage = [];
  repeated_foreign_message: ForeignMessage = [];
  repeated_import_message: protobuf_unittest_import.ImportMessage = [];
  repeated_nested_enum: TestAllTypes.NestedEnum = [];
  repeated_foreign_enum: ForeignEnum = [];
  repeated_string_piece: string = [];
  repeated_cord: string = [];
  repeated_lazy_message: TestAllTypes.NestedMessage = [];
  oneof_uint32?: number = 0;
  oneof_nested_message?: TestAllTypes.NestedMessage = null;
  oneof_string?: string = "";
  oneof_bytes?: Uint8Array = new Uint8Array();

  constructor(obj?: Partial<ITestAllTypes>) {
    if (obj?.optional_int32 ?? false) {
      this.optional_int32 = obj.optional_int32;
    }
    if (obj?.optional_int64 ?? false) {
      this.optional_int64 = obj.optional_int64;
    }
    if (obj?.optional_uint32 ?? false) {
      this.optional_uint32 = obj.optional_uint32;
    }
    if (obj?.optional_uint64 ?? false) {
      this.optional_uint64 = obj.optional_uint64;
    }
    if (obj?.optional_sint32 ?? false) {
      this.optional_sint32 = obj.optional_sint32;
    }
    if (obj?.optional_sint64 ?? false) {
      this.optional_sint64 = obj.optional_sint64;
    }
    if (obj?.optional_fixed32 ?? false) {
      this.optional_fixed32 = obj.optional_fixed32;
    }
    if (obj?.optional_fixed64 ?? false) {
      this.optional_fixed64 = obj.optional_fixed64;
    }
    if (obj?.optional_sfixed32 ?? false) {
      this.optional_sfixed32 = obj.optional_sfixed32;
    }
    if (obj?.optional_sfixed64 ?? false) {
      this.optional_sfixed64 = obj.optional_sfixed64;
    }
    if (obj?.optional_float ?? false) {
      this.optional_float = obj.optional_float;
    }
    if (obj?.optional_double ?? false) {
      this.optional_double = obj.optional_double;
    }
    if (obj?.optional_bool ?? false) {
      this.optional_bool = obj.optional_bool;
    }
    if (obj?.optional_string ?? false) {
      this.optional_string = obj.optional_string;
    }
    if (obj?.optional_bytes ?? false) {
      this.optional_bytes = obj.optional_bytes;
    }
    if (obj?.optional_nested_message ?? false) {
      this.optional_nested_message = obj.optional_nested_message;
    }
    if (obj?.optional_foreign_message ?? false) {
      this.optional_foreign_message = obj.optional_foreign_message;
    }
    if (obj?.optional_import_message ?? false) {
      this.optional_import_message = obj.optional_import_message;
    }
    if (obj?.optional_nested_enum ?? false) {
      this.optional_nested_enum = obj.optional_nested_enum;
    }
    if (obj?.optional_foreign_enum ?? false) {
      this.optional_foreign_enum = obj.optional_foreign_enum;
    }
    if (obj?.optional_string_piece ?? false) {
      this.optional_string_piece = obj.optional_string_piece;
    }
    if (obj?.optional_cord ?? false) {
      this.optional_cord = obj.optional_cord;
    }
    if (obj?.optional_public_import_message ?? false) {
      this.optional_public_import_message = obj.optional_public_import_message;
    }
    if (obj?.optional_lazy_message ?? false) {
      this.optional_lazy_message = obj.optional_lazy_message;
    }
    if (obj?.repeated_int32 ?? false) {
      this.repeated_int32 = obj.repeated_int32;
    }
    if (obj?.repeated_int64 ?? false) {
      this.repeated_int64 = obj.repeated_int64;
    }
    if (obj?.repeated_uint32 ?? false) {
      this.repeated_uint32 = obj.repeated_uint32;
    }
    if (obj?.repeated_uint64 ?? false) {
      this.repeated_uint64 = obj.repeated_uint64;
    }
    if (obj?.repeated_sint32 ?? false) {
      this.repeated_sint32 = obj.repeated_sint32;
    }
    if (obj?.repeated_sint64 ?? false) {
      this.repeated_sint64 = obj.repeated_sint64;
    }
    if (obj?.repeated_fixed32 ?? false) {
      this.repeated_fixed32 = obj.repeated_fixed32;
    }
    if (obj?.repeated_fixed64 ?? false) {
      this.repeated_fixed64 = obj.repeated_fixed64;
    }
    if (obj?.repeated_sfixed32 ?? false) {
      this.repeated_sfixed32 = obj.repeated_sfixed32;
    }
    if (obj?.repeated_sfixed64 ?? false) {
      this.repeated_sfixed64 = obj.repeated_sfixed64;
    }
    if (obj?.repeated_float ?? false) {
      this.repeated_float = obj.repeated_float;
    }
    if (obj?.repeated_double ?? false) {
      this.repeated_double = obj.repeated_double;
    }
    if (obj?.repeated_bool ?? false) {
      this.repeated_bool = obj.repeated_bool;
    }
    if (obj?.repeated_string ?? false) {
      this.repeated_string = obj.repeated_string;
    }
    if (obj?.repeated_bytes ?? false) {
      this.repeated_bytes = obj.repeated_bytes;
    }
    if (obj?.repeated_nested_message ?? false) {
      this.repeated_nested_message = obj.repeated_nested_message;
    }
    if (obj?.repeated_foreign_message ?? false) {
      this.repeated_foreign_message = obj.repeated_foreign_message;
    }
    if (obj?.repeated_import_message ?? false) {
      this.repeated_import_message = obj.repeated_import_message;
    }
    if (obj?.repeated_nested_enum ?? false) {
      this.repeated_nested_enum = obj.repeated_nested_enum;
    }
    if (obj?.repeated_foreign_enum ?? false) {
      this.repeated_foreign_enum = obj.repeated_foreign_enum;
    }
    if (obj?.repeated_string_piece ?? false) {
      this.repeated_string_piece = obj.repeated_string_piece;
    }
    if (obj?.repeated_cord ?? false) {
      this.repeated_cord = obj.repeated_cord;
    }
    if (obj?.repeated_lazy_message ?? false) {
      this.repeated_lazy_message = obj.repeated_lazy_message;
    }
    if (obj?.oneof_uint32 ?? false) {
      this.oneof_uint32 = obj.oneof_uint32;
    }
    if (obj?.oneof_nested_message ?? false) {
      this.oneof_nested_message = obj.oneof_nested_message;
    }
    if (obj?.oneof_string ?? false) {
      this.oneof_string = obj.oneof_string;
    }
    if (obj?.oneof_bytes ?? false) {
      this.oneof_bytes = obj.oneof_bytes;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): TestAllTypes {
    return new TestAllTypes(this);
  }
}

export namespace TestAllTypes {
  export interface INestedMessage {
    bb: number;
  }

  export class NestedMessage implements INestedMessage {
    bb: number = 0;

    constructor(obj?: Partial<INestedMessage>) {
      if (obj?.bb ?? false) {
        this.bb = obj.bb;
      }
    }

    serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
      return w;
    }

    deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

    clone(): NestedMessage {
      return new NestedMessage(this);
    }
  }

  export enum NestedEnum {
    ZERO = 0,
    FOO = 1,
    BAR = 2,
    BAZ = 3,
    NEG = 1,
  }
}

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}

export interface ITestPackedTypes {
  packed_int32: number;
  packed_int64: BigInt;
  packed_uint32: number;
  packed_uint64: BigInt;
  packed_sint32: number;
  packed_sint64: BigInt;
  packed_fixed32: number;
  packed_fixed64: BigInt;
  packed_sfixed32: number;
  packed_sfixed64: BigInt;
  packed_float: number;
  packed_double: number;
  packed_bool: boolean;
  packed_enum: ForeignEnum;
}

export class TestPackedTypes implements ITestPackedTypes {
  packed_int32: number = [];
  packed_int64: BigInt = [];
  packed_uint32: number = [];
  packed_uint64: BigInt = [];
  packed_sint32: number = [];
  packed_sint64: BigInt = [];
  packed_fixed32: number = [];
  packed_fixed64: BigInt = [];
  packed_sfixed32: number = [];
  packed_sfixed64: BigInt = [];
  packed_float: number = [];
  packed_double: number = [];
  packed_bool: boolean = [];
  packed_enum: ForeignEnum = [];

  constructor(obj?: Partial<ITestPackedTypes>) {
    if (obj?.packed_int32 ?? false) {
      this.packed_int32 = obj.packed_int32;
    }
    if (obj?.packed_int64 ?? false) {
      this.packed_int64 = obj.packed_int64;
    }
    if (obj?.packed_uint32 ?? false) {
      this.packed_uint32 = obj.packed_uint32;
    }
    if (obj?.packed_uint64 ?? false) {
      this.packed_uint64 = obj.packed_uint64;
    }
    if (obj?.packed_sint32 ?? false) {
      this.packed_sint32 = obj.packed_sint32;
    }
    if (obj?.packed_sint64 ?? false) {
      this.packed_sint64 = obj.packed_sint64;
    }
    if (obj?.packed_fixed32 ?? false) {
      this.packed_fixed32 = obj.packed_fixed32;
    }
    if (obj?.packed_fixed64 ?? false) {
      this.packed_fixed64 = obj.packed_fixed64;
    }
    if (obj?.packed_sfixed32 ?? false) {
      this.packed_sfixed32 = obj.packed_sfixed32;
    }
    if (obj?.packed_sfixed64 ?? false) {
      this.packed_sfixed64 = obj.packed_sfixed64;
    }
    if (obj?.packed_float ?? false) {
      this.packed_float = obj.packed_float;
    }
    if (obj?.packed_double ?? false) {
      this.packed_double = obj.packed_double;
    }
    if (obj?.packed_bool ?? false) {
      this.packed_bool = obj.packed_bool;
    }
    if (obj?.packed_enum ?? false) {
      this.packed_enum = obj.packed_enum;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): TestPackedTypes {
    return new TestPackedTypes(this);
  }
}

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}

export interface ITestUnpackedTypes {
  repeated_int32: number;
  repeated_int64: BigInt;
  repeated_uint32: number;
  repeated_uint64: BigInt;
  repeated_sint32: number;
  repeated_sint64: BigInt;
  repeated_fixed32: number;
  repeated_fixed64: BigInt;
  repeated_sfixed32: number;
  repeated_sfixed64: BigInt;
  repeated_float: number;
  repeated_double: number;
  repeated_bool: boolean;
  repeated_nested_enum: TestAllTypes.NestedEnum;
}

export class TestUnpackedTypes implements ITestUnpackedTypes {
  repeated_int32: number = [];
  repeated_int64: BigInt = [];
  repeated_uint32: number = [];
  repeated_uint64: BigInt = [];
  repeated_sint32: number = [];
  repeated_sint64: BigInt = [];
  repeated_fixed32: number = [];
  repeated_fixed64: BigInt = [];
  repeated_sfixed32: number = [];
  repeated_sfixed64: BigInt = [];
  repeated_float: number = [];
  repeated_double: number = [];
  repeated_bool: boolean = [];
  repeated_nested_enum: TestAllTypes.NestedEnum = [];

  constructor(obj?: Partial<ITestUnpackedTypes>) {
    if (obj?.repeated_int32 ?? false) {
      this.repeated_int32 = obj.repeated_int32;
    }
    if (obj?.repeated_int64 ?? false) {
      this.repeated_int64 = obj.repeated_int64;
    }
    if (obj?.repeated_uint32 ?? false) {
      this.repeated_uint32 = obj.repeated_uint32;
    }
    if (obj?.repeated_uint64 ?? false) {
      this.repeated_uint64 = obj.repeated_uint64;
    }
    if (obj?.repeated_sint32 ?? false) {
      this.repeated_sint32 = obj.repeated_sint32;
    }
    if (obj?.repeated_sint64 ?? false) {
      this.repeated_sint64 = obj.repeated_sint64;
    }
    if (obj?.repeated_fixed32 ?? false) {
      this.repeated_fixed32 = obj.repeated_fixed32;
    }
    if (obj?.repeated_fixed64 ?? false) {
      this.repeated_fixed64 = obj.repeated_fixed64;
    }
    if (obj?.repeated_sfixed32 ?? false) {
      this.repeated_sfixed32 = obj.repeated_sfixed32;
    }
    if (obj?.repeated_sfixed64 ?? false) {
      this.repeated_sfixed64 = obj.repeated_sfixed64;
    }
    if (obj?.repeated_float ?? false) {
      this.repeated_float = obj.repeated_float;
    }
    if (obj?.repeated_double ?? false) {
      this.repeated_double = obj.repeated_double;
    }
    if (obj?.repeated_bool ?? false) {
      this.repeated_bool = obj.repeated_bool;
    }
    if (obj?.repeated_nested_enum ?? false) {
      this.repeated_nested_enum = obj.repeated_nested_enum;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): TestUnpackedTypes {
    return new TestUnpackedTypes(this);
  }
}

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}

export interface INestedTestAllTypes {
  child: NestedTestAllTypes;
  payload: TestAllTypes;
}

export class NestedTestAllTypes implements INestedTestAllTypes {
  child: NestedTestAllTypes = null;
  payload: TestAllTypes = null;

  constructor(obj?: Partial<INestedTestAllTypes>) {
    if (obj?.child ?? false) {
      this.child = obj.child;
    }
    if (obj?.payload ?? false) {
      this.payload = obj.payload;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): NestedTestAllTypes {
    return new NestedTestAllTypes(this);
  }
}

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}

export interface IForeignMessage {
  c: number;
}

export class ForeignMessage implements IForeignMessage {
  c: number = 0;

  constructor(obj?: Partial<IForeignMessage>) {
    if (obj?.c ?? false) {
      this.c = obj.c;
    }
  }

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): ForeignMessage {
    return new ForeignMessage(this);
  }
}

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}

export interface ITestEmptyMessage {}

export class TestEmptyMessage implements ITestEmptyMessage {
  constructor(obj?: Partial<ITestEmptyMessage>) {}

  serialize(w: pjs.Writer = pjs.Writer.create()): pjs.Writer {
    return w;
  }

  deserialize(b: pjs.Reader | Uint8Array, length?: number): void {}

  clone(): TestEmptyMessage {
    return new TestEmptyMessage(this);
  }
}

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}
