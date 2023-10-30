// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: simple-rpc.proto

import * as ia78d92959178c10548ba2e8d3fe6da45 from "././simple-rpc_models.ts";

import * as runtime from "@catfish/runtime";
import * as grpc from "grpc-web";

// #region simple_service.SimpleService
export const SimpleServiceDefinition = {
  GetMethod: new grpc.MethodDescriptor(
    "/simple_service.SimpleService/GetMethod",
    grpc.MethodType.UNARY,
    ia03f17ff9f0af504dbba959c3d73bd62.SimpleRequest,
    i9bae6523ad98b3546b03faecd5208f79.SimpleResponse,
    (message: ia03f17ff9f0af504dbba959c3d73bd62.SimpleRequest) =>
      message.serialize(),
    (bytes: Uint8Array) =>
      new i9bae6523ad98b3546b03faecd5208f79.SimpleResponse().deserialize(bytes)
  ),
  UpdateMethod: new grpc.MethodDescriptor(
    "/simple_service.SimpleService/UpdateMethod",
    grpc.MethodType.UNARY,
    ia03f17ff9f0af504dbba959c3d73bd62.SimpleRequest,
    i9bae6523ad98b3546b03faecd5208f79.SimpleResponse,
    (message: ia03f17ff9f0af504dbba959c3d73bd62.SimpleRequest) =>
      message.serialize(),
    (bytes: Uint8Array) =>
      new i9bae6523ad98b3546b03faecd5208f79.SimpleResponse().deserialize(bytes)
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
    request: ia03f17ff9f0af504dbba959c3d73bd62.SimpleRequest,
    metadata: grpc.Metadata | null
  ): Promise<i9bae6523ad98b3546b03faecd5208f79.SimpleResponse> {
    return this.client.unaryCall(
      this.hostname + "/simple_service.SimpleService/GetMethod",
      request,
      metadata ?? {},
      SimpleServiceDefinition.GetMethod
    );
  }

  UpdateMethod(
    request: ia03f17ff9f0af504dbba959c3d73bd62.SimpleRequest,
    metadata: grpc.Metadata | null
  ): Promise<i9bae6523ad98b3546b03faecd5208f79.SimpleResponse> {
    return this.client.unaryCall(
      this.hostname + "/simple_service.SimpleService/UpdateMethod",
      request,
      metadata ?? {},
      SimpleServiceDefinition.UpdateMethod
    );
  }
}
// #endregion
