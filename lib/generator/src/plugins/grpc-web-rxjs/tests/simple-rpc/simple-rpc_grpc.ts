// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: simple-rpc.proto

import * as i05f5fe8fe1733385e835a2d7c0a21127 from "././simple-rpc_models.ts";

import * as runtime from "@catfish/runtime";
import * as grpc from "grpc-web";

// #region simple_service.SimpleService
export const SimpleServiceDefinition = {
  UnaryMethod: new grpc.MethodDescriptor(
    "/simple_service.SimpleService/UnaryMethod",
    grpc.MethodType.UNARY,
    i05f5fe8fe1733385e835a2d7c0a21127.SimpleMessage,
    i05f5fe8fe1733385e835a2d7c0a21127.SimpleMessage,
    (message: i05f5fe8fe1733385e835a2d7c0a21127.SimpleMessage) =>
      message.serialize(),
    (bytes: Uint8Array) =>
      new i05f5fe8fe1733385e835a2d7c0a21127.SimpleMessage().deserialize(bytes)
  ),
  ServerStreamMethod: new grpc.MethodDescriptor(
    "/simple_service.SimpleService/ServerStreamMethod",
    grpc.MethodType.SERVER_STREAMING,
    i05f5fe8fe1733385e835a2d7c0a21127.SimpleMessage,
    i05f5fe8fe1733385e835a2d7c0a21127.SimpleMessage,
    (message: i05f5fe8fe1733385e835a2d7c0a21127.SimpleMessage) =>
      message.serialize(),
    (bytes: Uint8Array) =>
      new i05f5fe8fe1733385e835a2d7c0a21127.SimpleMessage().deserialize(bytes)
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
    request: i05f5fe8fe1733385e835a2d7c0a21127.SimpleMessage,
    metadata: grpc.Metadata | null
  ): Promise<i05f5fe8fe1733385e835a2d7c0a21127.SimpleMessage> {
    return this.client.unaryCall(
      this.hostname + "/simple_service.SimpleService/UnaryMethod",
      request,
      metadata ?? {},
      SimpleServiceDefinition.UnaryMethod
    );
  }

  ServerStreamMethod(
    request: i05f5fe8fe1733385e835a2d7c0a21127.SimpleMessage,
    metadata: grpc.Metadata | null
  ): grpc.ClientReadableStream<i05f5fe8fe1733385e835a2d7c0a21127.SimpleMessage> {
    return this.client.serverStreaming(
      this.hostname + "/simple_service.SimpleService/ServerStreamMethod",
      request,
      metadata ?? {},
      SimpleServiceDefinition.ServerStreamMethod
    );
  }
}
// #endregion
