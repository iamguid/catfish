// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: simple-rpc.proto

import * as simple_rpc_models from "./simple-rpc_models";

import * as runtime from "@catfish/runtime";
import * as grpc from "grpc-web";

// #region SimpleService
export const SimpleServiceDefinition = {
  UnaryMethod: new grpc.MethodDescriptor(
    "/simple_service.SimpleService/UnaryMethod",
    grpc.MethodType.UNARY,
    simple_rpc_models.SimpleMessage,
    simple_rpc_models.SimpleMessage,
    (message: simple_rpc_models.SimpleMessage) => message.serialize(),
    (bytes: Uint8Array) =>
      new simple_rpc_models.SimpleMessage().deserialize(bytes)
  ),
  ServerStreamMethod: new grpc.MethodDescriptor(
    "/simple_service.SimpleService/ServerStreamMethod",
    grpc.MethodType.SERVER_STREAMING,
    simple_rpc_models.SimpleMessage,
    simple_rpc_models.SimpleMessage,
    (message: simple_rpc_models.SimpleMessage) => message.serialize(),
    (bytes: Uint8Array) =>
      new simple_rpc_models.SimpleMessage().deserialize(bytes)
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

  UnaryMethod(
    request: simple_rpc_models.SimpleMessage,
    metadata: grpc.Metadata | null
  ): Promise<simple_rpc_models.SimpleMessage> {
    return this.client.unaryCall(
      this.hostname + "/simple_service.SimpleService/UnaryMethod",
      request,
      metadata ?? {},
      SimpleServiceDefinition.UnaryMethod
    );
  }

  ServerStreamMethod(
    request: simple_rpc_models.SimpleMessage,
    metadata: grpc.Metadata | null
  ): grpc.ClientReadableStream<simple_rpc_models.SimpleMessage> {
    return this.client.serverStreaming(
      this.hostname + "/simple_service.SimpleService/ServerStreamMethod",
      request,
      metadata ?? {},
      SimpleServiceDefinition.ServerStreamMethod
    );
  }
}
// #endregion
