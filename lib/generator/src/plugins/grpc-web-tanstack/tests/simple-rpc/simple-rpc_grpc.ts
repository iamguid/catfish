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
  GetMethod: new grpc.MethodDescriptor(
    "/simple_service.SimpleService/GetMethod",
    grpc.MethodType.UNARY,
    i304a882bba12abcf5b0b1d2f7051afc3.SimpleRequest,
    i304a882bba12abcf5b0b1d2f7051afc3.SimpleResponse,
    (message: i304a882bba12abcf5b0b1d2f7051afc3.SimpleRequest) =>
      message.serialize(),
    (bytes: Uint8Array) =>
      new i304a882bba12abcf5b0b1d2f7051afc3.SimpleResponse().deserialize(bytes)
  ),
  UpdateMethod: new grpc.MethodDescriptor(
    "/simple_service.SimpleService/UpdateMethod",
    grpc.MethodType.UNARY,
    i304a882bba12abcf5b0b1d2f7051afc3.SimpleRequest,
    i304a882bba12abcf5b0b1d2f7051afc3.SimpleResponse,
    (message: i304a882bba12abcf5b0b1d2f7051afc3.SimpleRequest) =>
      message.serialize(),
    (bytes: Uint8Array) =>
      new i304a882bba12abcf5b0b1d2f7051afc3.SimpleResponse().deserialize(bytes)
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
    request: i304a882bba12abcf5b0b1d2f7051afc3.SimpleRequest,
    metadata: grpc.Metadata | null
  ): Promise<i304a882bba12abcf5b0b1d2f7051afc3.SimpleResponse> {
    return this.client.unaryCall(
      this.hostname + "/simple_service.SimpleService/GetMethod",
      request,
      metadata ?? {},
      i46be985838c89d4a9ef4547b05f7a8f6.SimpleServiceDefinition.GetMethod
    );
  }

  UpdateMethod(
    request: i304a882bba12abcf5b0b1d2f7051afc3.SimpleRequest,
    metadata: grpc.Metadata | null
  ): Promise<i304a882bba12abcf5b0b1d2f7051afc3.SimpleResponse> {
    return this.client.unaryCall(
      this.hostname + "/simple_service.SimpleService/UpdateMethod",
      request,
      metadata ?? {},
      i46be985838c89d4a9ef4547b05f7a8f6.SimpleServiceDefinition.UpdateMethod
    );
  }
}
// #endregion
