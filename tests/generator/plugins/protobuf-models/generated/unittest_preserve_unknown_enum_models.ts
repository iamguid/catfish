// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: proto3_preserve_unknown_enum_unittest
// file: unittest_preserve_unknown_enum.proto

import * as jspb from "google-protobuf";

export interface IMyMessage {
  e: MyEnum;
  repeated_e: MyEnum;
  repeated_packed_e: MyEnum;
  repeated_packed_unexpected_e: MyEnumPlusExtra;
  oneof_e_1?: MyEnum;
  oneof_e_2?: MyEnum;
}

export class MyMessage extends jspb.Message implements IMyMessage {
  private static repeatedFields: number[] = [2, 3, 4];
  private static oneofFieldsGroups: number[] = [[5, 6]];

  contructor(opt_data: any) {
    jspb.Message.initialize(
      this,
      opt_data,
      0,
      -1,
      MyMessage.repeatedFields,
      MyMessage.oneofFieldsGroups
    );
  }

  public get e(): MyEnum {
    return jspb.Message.getWrapperField(this, MyEnum, 1);
  }

  public set e(value: MyEnum): void {
    return jspb.Message.setWrapperField(
      this,
      1,

      value
    );
  }

  public get repeated_e(): MyEnum {
    return jspb.Message.getRepeatedWrapperField(this, MyEnum, 2);
  }

  public set repeated_e(value: MyEnum): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      2,

      value
    );
  }

  public get repeated_packed_e(): MyEnum {
    return jspb.Message.getRepeatedWrapperField(this, MyEnum, 3);
  }

  public set repeated_packed_e(value: MyEnum): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      3,

      value
    );
  }

  public get repeated_packed_unexpected_e(): MyEnumPlusExtra {
    return jspb.Message.getRepeatedWrapperField(this, MyEnumPlusExtra, 4);
  }

  public set repeated_packed_unexpected_e(value: MyEnumPlusExtra): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      4,

      value
    );
  }

  public get oneof_e_1(): MyEnum {
    return jspb.Message.getWrapperField(this, MyEnum, 5);
  }

  public set oneof_e_1(value: MyEnum): void {
    return jspb.Message.setOneofWrapperField(
      this,
      5,
      MyMessage.oneofFieldsGroups[0],
      value
    );
  }

  public get oneof_e_2(): MyEnum {
    return jspb.Message.getWrapperField(this, MyEnum, 6);
  }

  public set oneof_e_2(value: MyEnum): void {
    return jspb.Message.setOneofWrapperField(
      this,
      6,
      MyMessage.oneofFieldsGroups[0],
      value
    );
  }
}

export enum MyEnum {
  FOO = 0,
  BAR = 1,
  BAZ = 2,
}

export enum MyEnumPlusExtra {
  E_FOO = 0,
  E_BAR = 1,
  E_BAZ = 2,
  E_EXTRA = 3,
}

export interface IMyMessagePlusExtra {
  e: MyEnumPlusExtra;
  repeated_e: MyEnumPlusExtra;
  repeated_packed_e: MyEnumPlusExtra;
  repeated_packed_unexpected_e: MyEnumPlusExtra;
  oneof_e_1?: MyEnumPlusExtra;
  oneof_e_2?: MyEnumPlusExtra;
}

export class MyMessagePlusExtra
  extends jspb.Message
  implements IMyMessagePlusExtra
{
  private static repeatedFields: number[] = [2, 3, 4];
  private static oneofFieldsGroups: number[] = [[5, 6]];

  contructor(opt_data: any) {
    jspb.Message.initialize(
      this,
      opt_data,
      0,
      -1,
      MyMessagePlusExtra.repeatedFields,
      MyMessagePlusExtra.oneofFieldsGroups
    );
  }

  public get e(): MyEnumPlusExtra {
    return jspb.Message.getWrapperField(this, MyEnumPlusExtra, 1);
  }

  public set e(value: MyEnumPlusExtra): void {
    return jspb.Message.setWrapperField(
      this,
      1,

      value
    );
  }

  public get repeated_e(): MyEnumPlusExtra {
    return jspb.Message.getRepeatedWrapperField(this, MyEnumPlusExtra, 2);
  }

  public set repeated_e(value: MyEnumPlusExtra): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      2,

      value
    );
  }

  public get repeated_packed_e(): MyEnumPlusExtra {
    return jspb.Message.getRepeatedWrapperField(this, MyEnumPlusExtra, 3);
  }

  public set repeated_packed_e(value: MyEnumPlusExtra): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      3,

      value
    );
  }

  public get repeated_packed_unexpected_e(): MyEnumPlusExtra {
    return jspb.Message.getRepeatedWrapperField(this, MyEnumPlusExtra, 4);
  }

  public set repeated_packed_unexpected_e(value: MyEnumPlusExtra): void {
    return jspb.Message.setRepeatedWrapperField(
      this,
      4,

      value
    );
  }

  public get oneof_e_1(): MyEnumPlusExtra {
    return jspb.Message.getWrapperField(this, MyEnumPlusExtra, 5);
  }

  public set oneof_e_1(value: MyEnumPlusExtra): void {
    return jspb.Message.setOneofWrapperField(
      this,
      5,
      MyMessagePlusExtra.oneofFieldsGroups[0],
      value
    );
  }

  public get oneof_e_2(): MyEnumPlusExtra {
    return jspb.Message.getWrapperField(this, MyEnumPlusExtra, 6);
  }

  public set oneof_e_2(value: MyEnumPlusExtra): void {
    return jspb.Message.setOneofWrapperField(
      this,
      6,
      MyMessagePlusExtra.oneofFieldsGroups[0],
      value
    );
  }
}

export enum MyEnum {
  FOO = 0,
  BAR = 1,
  BAZ = 2,
}

export enum MyEnumPlusExtra {
  E_FOO = 0,
  E_BAR = 1,
  E_BAZ = 2,
  E_EXTRA = 3,
}
