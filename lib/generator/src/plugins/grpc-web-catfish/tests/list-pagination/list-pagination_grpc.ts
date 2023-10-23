// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: list-pagination.proto

import * as list_pagination_models from "./list-pagination_models";

import * as runtime from "@catfish/runtime";
import * as grpc from "grpc-web";

// #region BooksService
export const BooksServiceDefinition = {
  ListBooks: new grpc.MethodDescriptor(
    "/simple_service.BooksService/ListBooks",
    grpc.MethodType.UNARY,
    list_pagination_models.ListBooksRequest,
    list_pagination_models.ListBooksResponse,
    (message: list_pagination_models.ListBooksRequest) => message.serialize(),
    (bytes: Uint8Array) =>
      new list_pagination_models.ListBooksResponse().deserialize(bytes)
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
    request: list_pagination_models.ListBooksRequest,
    metadata: grpc.Metadata | null
  ): Promise<list_pagination_models.ListBooksResponse> {
    return this.client.unaryCall(
      this.hostname + "/simple_service.BooksService/ListBooks",
      request,
      metadata ?? {},
      BooksServiceDefinition.ListBooks
    );
  }
}
// #endregion
