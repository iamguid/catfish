// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: list-pagination.proto

import * as i57b033e2b69dc7dff8a274f7cedaded5 from "././list-pagination_models.ts";

import * as runtime from "@catfish/runtime";
import * as grpc from "grpc-web";

// #region BooksService
export const BooksServiceDefinition = {
  ListBooks: new grpc.MethodDescriptor(
    "/simple_service.BooksService/ListBooks",
    grpc.MethodType.UNARY,
    i57b033e2b69dc7dff8a274f7cedaded5.ListBooksRequest,
    i57b033e2b69dc7dff8a274f7cedaded5.ListBooksResponse,
    (message: i57b033e2b69dc7dff8a274f7cedaded5.ListBooksRequest) =>
      message.serialize(),
    (bytes: Uint8Array) =>
      new i57b033e2b69dc7dff8a274f7cedaded5.ListBooksResponse().deserialize(
        bytes
      )
  ),
} as const;

export class BooksServiceClient {
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

  ListBooks(
    request: i57b033e2b69dc7dff8a274f7cedaded5.ListBooksRequest,
    metadata: grpc.Metadata | null
  ): Promise<i57b033e2b69dc7dff8a274f7cedaded5.ListBooksResponse> {
    return this.client.unaryCall(
      this.hostname + "/simple_service.BooksService/ListBooks",
      request,
      metadata ?? {},
      BooksServiceDefinition.ListBooks
    );
  }
}
// #endregion
