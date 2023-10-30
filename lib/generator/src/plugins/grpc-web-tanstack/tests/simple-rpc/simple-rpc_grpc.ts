// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: simple-rpc.proto

import * as i491401f258b329f5890cc04ac1fccd82 from "././simple-rpc_models.ts";

import * as runtime from "@catfish/runtime";
import * as grpc from "grpc-web";

// #region simple_service.SimpleService
export const SimpleServiceDefinition = {
  GetMethod: new grpc.MethodDescriptor(
    "/simple_service.SimpleService/GetMethod",
    grpc.MethodType.UNARY,
    i491401f258b329f5890cc04ac1fccd82.SimpleRequest,
    i491401f258b329f5890cc04ac1fccd82.SimpleResponse,
    (message: i491401f258b329f5890cc04ac1fccd82.SimpleRequest) =>
      message.serialize(),
    (bytes: Uint8Array) =>
      new i491401f258b329f5890cc04ac1fccd82.SimpleResponse().deserialize(bytes)
  ),
  UpdateMethod: new grpc.MethodDescriptor(
    "/simple_service.SimpleService/UpdateMethod",
    grpc.MethodType.UNARY,
    i491401f258b329f5890cc04ac1fccd82.SimpleRequest,
    i491401f258b329f5890cc04ac1fccd82.SimpleResponse,
    (message: i491401f258b329f5890cc04ac1fccd82.SimpleRequest) =>
      message.serialize(),
    (bytes: Uint8Array) =>
      new i491401f258b329f5890cc04ac1fccd82.SimpleResponse().deserialize(bytes)
  ),
} as const;

export class SimpleServiceClient {
  private readonly client: grpc.AbstractClientBase;
  private readonly hostname: string;
  private readonly credentials?: null | { [index: string]: string };
  private readonly options?:
    | null
    | grpc.GrpcWebClientBaseOptions
    | { [index: string]: any };

  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | grpc.GrpcWebClientBaseOptions | { [index: string]: any },
    client: new (
      options?: null | grpc.GrpcWebClientBaseOptions | { [index: string]: any }
    ) => grpc.AbstractClientBase = grpc.GrpcWebClientBase
  ) {
    this.hostname = hostname.replace(/\/+$/, "");
    this.credentials = credentials ?? {};
    this.options = options ?? {};
    this.options["format"] = "text";
    this.client = new client(this.options);
  }

  GetMethod(
    request: i491401f258b329f5890cc04ac1fccd82.SimpleRequest,
    metadata: grpc.Metadata | null
  ): Promise<i491401f258b329f5890cc04ac1fccd82.SimpleResponse> {
    return this.client.unaryCall(
      this.hostname + "/simple_service.SimpleService/GetMethod",
      request,
      metadata ?? {},
      SimpleServiceDefinition.GetMethod
    );
  }

  UpdateMethod(
    request: i491401f258b329f5890cc04ac1fccd82.SimpleRequest,
    metadata: grpc.Metadata | null
  ): Promise<i491401f258b329f5890cc04ac1fccd82.SimpleResponse> {
    return this.client.unaryCall(
      this.hostname + "/simple_service.SimpleService/UpdateMethod",
      request,
      metadata ?? {},
      SimpleServiceDefinition.UpdateMethod
    );
  }
}
// #endregion
