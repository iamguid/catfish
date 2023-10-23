// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: list-pagination.proto

import * as list_pagination_models from "./list-pagination_models";

import * as list_pagination_grpc from "./list-pagination_grpc";

import * as runtime from "@catfish/runtime";
import * as rxjs from "rxjs";
import * as grpc from "grpc-web";

// #region BooksService
export class BooksServiceRxjsClient extends list_pagination_grpc.BooksServiceClient {
  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | grpc.GrpcWebClientBaseOptions | { [index: string]: any }
  ) {
    super(hostname, credentials, options);
  }

  ListBooks(
    request: list_pagination_models.ListBooksRequest,
    metadata: grpc.Metadata | null
  ): rxjs.Observable<list_pagination_models.ListBooksResponse> {
    return rxjs.defer(() => rxjs.from(super.ListBooks(request, metadata)));
  }
}
// #endregion
