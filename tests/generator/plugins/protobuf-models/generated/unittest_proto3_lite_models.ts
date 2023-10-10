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

import * as jspb from "google-protobuf";

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

export class TestAllTypes extends jspb.Message implements ITestAllTypes {
  private static repeatedFields: number[] = [
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 48, 49, 50, 51,
    52, 54, 55, 57,
  ];
  private static oneofFieldsGroups: number[] = [[111, 112, 113, 114]];

  contructor(opt_data: any) {
    jspb.Message.initialize(
      this,
      opt_data,
      0,
      -1,
      TestAllTypes.repeatedFields,
      TestAllTypes.oneofFieldsGroups
    );
  }

  public get optional_int32(): number {
    return jspb.Message.getFieldWithDefault(this, 1, 0);
  }

  public set optional_int32(value: number) {}

  public get optional_int64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 2, 0n);
  }

  public set optional_int64(value: BigInt) {}

  public get optional_uint32(): number {
    return jspb.Message.getFieldWithDefault(this, 3, 0);
  }

  public set optional_uint32(value: number) {}

  public get optional_uint64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 4, 0n);
  }

  public set optional_uint64(value: BigInt) {}

  public get optional_sint32(): number {
    return jspb.Message.getFieldWithDefault(this, 5, 0);
  }

  public set optional_sint32(value: number) {}

  public get optional_sint64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 6, 0n);
  }

  public set optional_sint64(value: BigInt) {}

  public get optional_fixed32(): number {
    return jspb.Message.getFieldWithDefault(this, 7, 0);
  }

  public set optional_fixed32(value: number) {}

  public get optional_fixed64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 8, 0n);
  }

  public set optional_fixed64(value: BigInt) {}

  public get optional_sfixed32(): number {
    return jspb.Message.getFieldWithDefault(this, 9, 0);
  }

  public set optional_sfixed32(value: number) {}

  public get optional_sfixed64(): BigInt {
    return jspb.Message.getFieldWithDefault(this, 10, 0n);
  }

  public set optional_sfixed64(value: BigInt) {}

  public get optional_float(): number {
    return jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0);
  }

  public set optional_float(value: number) {}

  public get optional_double(): number {
    return jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0);
  }

  public set optional_double(value: number) {}

  public get optional_bool(): boolean {
    return jspb.Message.getBooleanFieldWithDefault(this, 13, false);
  }

  public set optional_bool(value: boolean) {}

  public get optional_string(): string {
    return jspb.Message.getFieldWithDefault(this, 14, "");
  }

  public set optional_string(value: string) {}

  public get optional_bytes(): Uint8Array {
    return jspb.Message.getFieldWithDefault(this, 15, new Uint8Array());
  }

  public set optional_bytes(value: Uint8Array) {}

  public get optional_nested_message(): TestAllTypes.NestedMessage {
    return jspb.Message.getWrapperField(this, TestAllTypes.NestedMessage, 18);
  }

  public set optional_nested_message(value: TestAllTypes.NestedMessage): void {
    return jspb.Message.setWrapperField(
      this,
      18,

      value
    );
  }

  public get optional_foreign_message(): ForeignMessage {
    return jspb.Message.getWrapperField(this, ForeignMessage, 19);
  }

  public set optional_foreign_message(value: ForeignMessage): void {
    return jspb.Message.setWrapperField(
      this,
      19,

      value
    );
  }

  public get optional_import_message(): protobuf_unittest_import.ImportMessage {
    return jspb.Message.getWrapperField(
      this,
      protobuf_unittest_import.ImportMessage,
      20
    );
  }

  public set optional_import_message(
    value: protobuf_unittest_import.ImportMessage
  ): void {
    return jspb.Message.setWrapperField(
      this,
      20,

      value
    );
  }

  public get optional_nested_enum(): TestAllTypes.NestedEnum {
    return jspb.Message.getWrapperField(this, TestAllTypes.NestedEnum, 21);
  }

  public set optional_nested_enum(value: TestAllTypes.NestedEnum): void {
    return jspb.Message.setWrapperField(
      this,
      21,

      value
    );
  }

  public get optional_foreign_enum(): ForeignEnum {
    return jspb.Message.getWrapperField(this, ForeignEnum, 22);
  }

  public set optional_foreign_enum(value: ForeignEnum): void {
    return jspb.Message.setWrapperField(
      this,
      22,

      value
    );
  }

  public get optional_string_piece(): string {
    return jspb.Message.getFieldWithDefault(this, 24, "");
  }

  public set optional_string_piece(value: string) {}

  public get optional_cord(): string {
    return jspb.Message.getFieldWithDefault(this, 25, "");
  }

  public set optional_cord(value: string) {}

  public get optional_public_import_message(): protobuf_unittest_import.PublicImportMessage {
    return jspb.Message.getWrapperField(
      this,
      protobuf_unittest_import.PublicImportMessage,
      26
    );
  }

  public set optional_public_import_message(
    value: protobuf_unittest_import.PublicImportMessage
  ): void {
    return jspb.Message.setWrapperField(
      this,
      26,

      value
    );
  }

  public get optional_lazy_message(): TestAllTypes.NestedMessage {
    return jspb.Message.getWrapperField(this, TestAllTypes.NestedMessage, 27);
  }

  public set optional_lazy_message(value: TestAllTypes.NestedMessage): void {
    return jspb.Message.setWrapperField(
      this,
      27,

      value
    );
  }

  public get repeated_int32(): number {
    return jspb.Message.getRepeatedField(this, 31);
  }

  public set repeated_int32(value: number) {}

  public get repeated_int64(): BigInt {
    return jspb.Message.getRepeatedField(this, 32);
  }

  public set repeated_int64(value: BigInt) {}

  public get repeated_uint32(): number {
    return jspb.Message.getRepeatedField(this, 33);
  }

  public set repeated_uint32(value: number) {}

  public get repeated_uint64(): BigInt {
    return jspb.Message.getRepeatedField(this, 34);
  }

  public set repeated_uint64(value: BigInt) {}

  public get repeated_sint32(): number {
    return jspb.Message.getRepeatedField(this, 35);
  }

  public set repeated_sint32(value: number) {}

  public get repeated_sint64(): BigInt {
    return jspb.Message.getRepeatedField(this, 36);
  }

  public set repeated_sint64(value: BigInt) {}

  public get repeated_fixed32(): number {
    return jspb.Message.getRepeatedField(this, 37);
  }

  public set repeated_fixed32(value: number) {}

  public get repeated_fixed64(): BigInt {
    return jspb.Message.getRepeatedField(this, 38);
  }

  public set repeated_fixed64(value: BigInt) {}

  public get repeated_sfixed32(): number {
    return jspb.Message.getRepeatedField(this, 39);
  }

  public set repeated_sfixed32(value: number) {}

  public get repeated_sfixed64(): BigInt {
    return jspb.Message.getRepeatedField(this, 40);
  }

  public set repeated_sfixed64(value: BigInt) {}

  public get repeated_float(): number {
    return jspb.Message.getRepeatedFloatingPointField(this, 41);
  }

  public set repeated_float(value: number) {}

  public get repeated_double(): number {
    return jspb.Message.getRepeatedFloatingPointField(this, 42);
  }

  public set repeated_double(value: number) {}

  public get repeated_bool(): boolean {
    return jspb.Message.getRepeatedBooleanField(this, 43);
  }

  public set repeated_bool(value: boolean) {}

  public get repeated_string(): string {
    return jspb.Message.getRepeatedField(this, 44);
  }

  public set repeated_string(value: string) {}

  public get repeated_bytes(): Uint8Array {
    return jspb.Message.getRepeatedField(this, 45);
  }

  public set repeated_bytes(value: Uint8Array) {}

  public get repeated_nested_message(): TestAllTypes.NestedMessage {
    return jspb.Message.getRepeatedWrapperField(
      this,
      TestAllTypes.NestedMessage,
      48
    );
  }

  public set repeated_nested_message(value: TestAllTypes.NestedMessage): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      48,

      value
    );
  }

  public get repeated_foreign_message(): ForeignMessage {
    return jspb.Message.getRepeatedWrapperField(this, ForeignMessage, 49);
  }

  public set repeated_foreign_message(value: ForeignMessage): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      49,

      value
    );
  }

  public get repeated_import_message(): protobuf_unittest_import.ImportMessage {
    return jspb.Message.getRepeatedWrapperField(
      this,
      protobuf_unittest_import.ImportMessage,
      50
    );
  }

  public set repeated_import_message(
    value: protobuf_unittest_import.ImportMessage
  ): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      50,

      value
    );
  }

  public get repeated_nested_enum(): TestAllTypes.NestedEnum {
    return jspb.Message.getRepeatedWrapperField(
      this,
      TestAllTypes.NestedEnum,
      51
    );
  }

  public set repeated_nested_enum(value: TestAllTypes.NestedEnum): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      51,

      value
    );
  }

  public get repeated_foreign_enum(): ForeignEnum {
    return jspb.Message.getRepeatedWrapperField(this, ForeignEnum, 52);
  }

  public set repeated_foreign_enum(value: ForeignEnum): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      52,

      value
    );
  }

  public get repeated_string_piece(): string {
    return jspb.Message.getRepeatedField(this, 54);
  }

  public set repeated_string_piece(value: string) {}

  public get repeated_cord(): string {
    return jspb.Message.getRepeatedField(this, 55);
  }

  public set repeated_cord(value: string) {}

  public get repeated_lazy_message(): TestAllTypes.NestedMessage {
    return jspb.Message.getRepeatedWrapperField(
      this,
      TestAllTypes.NestedMessage,
      57
    );
  }

  public set repeated_lazy_message(value: TestAllTypes.NestedMessage): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      57,

      value
    );
  }

  public get oneof_uint32(): number {
    return jspb.Message.getFieldWithDefault(this, 111, 0);
  }

  public set oneof_uint32(value: number) {}

  public get oneof_nested_message(): TestAllTypes.NestedMessage {
    return jspb.Message.getWrapperField(this, TestAllTypes.NestedMessage, 112);
  }

  public set oneof_nested_message(value: TestAllTypes.NestedMessage): void {
    return jspb.Message.setOneofWrapperField(
      this,
      112,
      TestAllTypes.oneofFieldsGroups[0],
      value
    );
  }

  public get oneof_string(): string {
    return jspb.Message.getFieldWithDefault(this, 113, "");
  }

  public set oneof_string(value: string) {}

  public get oneof_bytes(): Uint8Array {
    return jspb.Message.getFieldWithDefault(this, 114, new Uint8Array());
  }

  public set oneof_bytes(value: Uint8Array) {}
}

export namespace TestAllTypes {
  export interface INestedMessage {
    bb: number;
  }

  export class NestedMessage extends jspb.Message implements INestedMessage {
    contructor(opt_data: any) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    }

    public get bb(): number {
      return jspb.Message.getFieldWithDefault(this, 1, 0);
    }

    public set bb(value: number) {}
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

export class TestPackedTypes extends jspb.Message implements ITestPackedTypes {
  private static repeatedFields: number[] = [
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103,
  ];

  contructor(opt_data: any) {
    jspb.Message.initialize(
      this,
      opt_data,
      0,
      -1,
      TestPackedTypes.repeatedFields,
      null
    );
  }

  public get packed_int32(): number {
    return jspb.Message.getRepeatedField(this, 90);
  }

  public set packed_int32(value: number) {}

  public get packed_int64(): BigInt {
    return jspb.Message.getRepeatedField(this, 91);
  }

  public set packed_int64(value: BigInt) {}

  public get packed_uint32(): number {
    return jspb.Message.getRepeatedField(this, 92);
  }

  public set packed_uint32(value: number) {}

  public get packed_uint64(): BigInt {
    return jspb.Message.getRepeatedField(this, 93);
  }

  public set packed_uint64(value: BigInt) {}

  public get packed_sint32(): number {
    return jspb.Message.getRepeatedField(this, 94);
  }

  public set packed_sint32(value: number) {}

  public get packed_sint64(): BigInt {
    return jspb.Message.getRepeatedField(this, 95);
  }

  public set packed_sint64(value: BigInt) {}

  public get packed_fixed32(): number {
    return jspb.Message.getRepeatedField(this, 96);
  }

  public set packed_fixed32(value: number) {}

  public get packed_fixed64(): BigInt {
    return jspb.Message.getRepeatedField(this, 97);
  }

  public set packed_fixed64(value: BigInt) {}

  public get packed_sfixed32(): number {
    return jspb.Message.getRepeatedField(this, 98);
  }

  public set packed_sfixed32(value: number) {}

  public get packed_sfixed64(): BigInt {
    return jspb.Message.getRepeatedField(this, 99);
  }

  public set packed_sfixed64(value: BigInt) {}

  public get packed_float(): number {
    return jspb.Message.getRepeatedFloatingPointField(this, 100);
  }

  public set packed_float(value: number) {}

  public get packed_double(): number {
    return jspb.Message.getRepeatedFloatingPointField(this, 101);
  }

  public set packed_double(value: number) {}

  public get packed_bool(): boolean {
    return jspb.Message.getRepeatedBooleanField(this, 102);
  }

  public set packed_bool(value: boolean) {}

  public get packed_enum(): ForeignEnum {
    return jspb.Message.getRepeatedWrapperField(this, ForeignEnum, 103);
  }

  public set packed_enum(value: ForeignEnum): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      103,

      value
    );
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

export class TestUnpackedTypes
  extends jspb.Message
  implements ITestUnpackedTypes
{
  private static repeatedFields: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ];

  contructor(opt_data: any) {
    jspb.Message.initialize(
      this,
      opt_data,
      0,
      -1,
      TestUnpackedTypes.repeatedFields,
      null
    );
  }

  public get repeated_int32(): number {
    return jspb.Message.getRepeatedField(this, 1);
  }

  public set repeated_int32(value: number) {}

  public get repeated_int64(): BigInt {
    return jspb.Message.getRepeatedField(this, 2);
  }

  public set repeated_int64(value: BigInt) {}

  public get repeated_uint32(): number {
    return jspb.Message.getRepeatedField(this, 3);
  }

  public set repeated_uint32(value: number) {}

  public get repeated_uint64(): BigInt {
    return jspb.Message.getRepeatedField(this, 4);
  }

  public set repeated_uint64(value: BigInt) {}

  public get repeated_sint32(): number {
    return jspb.Message.getRepeatedField(this, 5);
  }

  public set repeated_sint32(value: number) {}

  public get repeated_sint64(): BigInt {
    return jspb.Message.getRepeatedField(this, 6);
  }

  public set repeated_sint64(value: BigInt) {}

  public get repeated_fixed32(): number {
    return jspb.Message.getRepeatedField(this, 7);
  }

  public set repeated_fixed32(value: number) {}

  public get repeated_fixed64(): BigInt {
    return jspb.Message.getRepeatedField(this, 8);
  }

  public set repeated_fixed64(value: BigInt) {}

  public get repeated_sfixed32(): number {
    return jspb.Message.getRepeatedField(this, 9);
  }

  public set repeated_sfixed32(value: number) {}

  public get repeated_sfixed64(): BigInt {
    return jspb.Message.getRepeatedField(this, 10);
  }

  public set repeated_sfixed64(value: BigInt) {}

  public get repeated_float(): number {
    return jspb.Message.getRepeatedFloatingPointField(this, 11);
  }

  public set repeated_float(value: number) {}

  public get repeated_double(): number {
    return jspb.Message.getRepeatedFloatingPointField(this, 12);
  }

  public set repeated_double(value: number) {}

  public get repeated_bool(): boolean {
    return jspb.Message.getRepeatedBooleanField(this, 13);
  }

  public set repeated_bool(value: boolean) {}

  public get repeated_nested_enum(): TestAllTypes.NestedEnum {
    return jspb.Message.getRepeatedWrapperField(
      this,
      TestAllTypes.NestedEnum,
      14
    );
  }

  public set repeated_nested_enum(value: TestAllTypes.NestedEnum): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      14,

      value
    );
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

export class NestedTestAllTypes
  extends jspb.Message
  implements INestedTestAllTypes
{
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get child(): NestedTestAllTypes {
    return jspb.Message.getWrapperField(this, NestedTestAllTypes, 1);
  }

  public set child(value: NestedTestAllTypes): void {
    return jspb.Message.setWrapperField(
      this,
      1,

      value
    );
  }

  public get payload(): TestAllTypes {
    return jspb.Message.getWrapperField(this, TestAllTypes, 2);
  }

  public set payload(value: TestAllTypes): void {
    return jspb.Message.setWrapperField(
      this,
      2,

      value
    );
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

export class ForeignMessage extends jspb.Message implements IForeignMessage {
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get c(): number {
    return jspb.Message.getFieldWithDefault(this, 1, 0);
  }

  public set c(value: number) {}
}

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}

export interface ITestEmptyMessage {}

export class TestEmptyMessage
  extends jspb.Message
  implements ITestEmptyMessage
{
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }
}

export enum ForeignEnum {
  FOREIGN_ZERO = 0,
  FOREIGN_FOO = 4,
  FOREIGN_BAR = 5,
  FOREIGN_BAZ = 6,
}
