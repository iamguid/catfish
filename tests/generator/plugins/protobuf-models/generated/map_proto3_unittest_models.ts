// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: proto3_unittest
// file: map_proto3_unittest.proto

import * as jspb from "google-protobuf";

export interface ITestProto3BytesMap {
  map_bytes: Record<number, Uint8Array>;
  map_string: Record<number, string>;
}

export class TestProto3BytesMap
  extends jspb.Message
  implements ITestProto3BytesMap
{
  contructor(opt_data: any) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  public get map_bytes(): jspb.Map<number, Uint8Array> {
    return jspb.Message.getMapField(this, 1, false, null);
  }

  public get map_string(): jspb.Map<number, string> {
    return jspb.Message.getMapField(this, 2, false, null);
  }
}
