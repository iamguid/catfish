// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: unary-rpc.proto

import * as unary_rpc_models from "./unary-rpc_models";

import * as runtime from "@catfish/runtime";
import * as grpc from "grpc-web";

// #region SimpleService
export const SimpleServiceDefinition = {
  UnaryMethod: new grpc.MethodDescriptor(
    "/simple_service.SimpleService/UnaryMethod",
    grpc.MethodType.UNARY,
    SimpleMessage,
    SimpleMessage,
    (message: SimpleMessage) => SimpleMessage.serialize(message),
    (bytes: SimpleMessage) => SimpleMessage.deserialize(bytes)
  ),
} as const;

export class SimpleServiceClient {
  private readonly client: grpc.AbstractClientBase;
  private readonly hostname: string;
  private readonly credentials?: null | { [index: string]: string };
  private readonly options?: null | { [index: string]: any };

  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any }
  ) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options["format"] = "text";

    this.client = new grpc.GrpcWebClientBase(options);
    this.hostname = hostname.replace(/\/+$/, "");
    this.credentials = credentials;
    this.options = options;
  }

  UnaryMethod(
    request: SimpleMessage,
    metadata: grpc.Metadata | null
  ): grpc.ClientReadableStream<SimpleMessage> {
    return this.client.rpcCall(
      this.hostname + "/simple_service.SimpleService/UnaryMethod",
      request,
      metadata || {},
      SimpleServiceDefinition.UnaryMethod
    );
  }
}
// #endregion
