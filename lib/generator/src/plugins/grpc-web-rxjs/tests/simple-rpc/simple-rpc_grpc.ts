// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: simple-rpc.proto

import * as i304a882bba12abcf5b0b1d2f7051afc3 from "././simple-rpc_models.ts";

import * as runtime from "@catfish/runtime";
import * as grpc from "grpc-web";

// #region SimpleService
export const SimpleServiceDefinition = {
  UnaryMethod: new grpc.MethodDescriptor(
    "/simple_service.SimpleService/UnaryMethod",
    grpc.MethodType.UNARY,
    i304a882bba12abcf5b0b1d2f7051afc3.SimpleMessage,
    i304a882bba12abcf5b0b1d2f7051afc3.SimpleMessage,
    (message: i304a882bba12abcf5b0b1d2f7051afc3.SimpleMessage) =>
      message.serialize(),
    (bytes: Uint8Array) =>
      new i304a882bba12abcf5b0b1d2f7051afc3.SimpleMessage().deserialize(bytes)
  ),
  ServerStreamMethod: new grpc.MethodDescriptor(
    "/simple_service.SimpleService/ServerStreamMethod",
    grpc.MethodType.SERVER_STREAMING,
    i304a882bba12abcf5b0b1d2f7051afc3.SimpleMessage,
    i304a882bba12abcf5b0b1d2f7051afc3.SimpleMessage,
    (message: i304a882bba12abcf5b0b1d2f7051afc3.SimpleMessage) =>
      message.serialize(),
    (bytes: Uint8Array) =>
      new i304a882bba12abcf5b0b1d2f7051afc3.SimpleMessage().deserialize(bytes)
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
    request: i304a882bba12abcf5b0b1d2f7051afc3.SimpleMessage,
    metadata: grpc.Metadata | null
  ): Promise<i304a882bba12abcf5b0b1d2f7051afc3.SimpleMessage> {
    return this.client.unaryCall(
      this.hostname + "/simple_service.SimpleService/UnaryMethod",
      request,
      metadata ?? {},
      SimpleServiceDefinition.UnaryMethod
    );
  }

  ServerStreamMethod(
    request: i304a882bba12abcf5b0b1d2f7051afc3.SimpleMessage,
    metadata: grpc.Metadata | null
  ): grpc.ClientReadableStream<i304a882bba12abcf5b0b1d2f7051afc3.SimpleMessage> {
    return this.client.serverStreaming(
      this.hostname + "/simple_service.SimpleService/ServerStreamMethod",
      request,
      metadata ?? {},
      SimpleServiceDefinition.ServerStreamMethod
    );
  }
}
// #endregion
