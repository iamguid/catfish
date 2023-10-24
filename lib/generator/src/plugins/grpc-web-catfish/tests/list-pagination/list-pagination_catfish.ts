// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: list-pagination.proto

import * as list_pagination_grpc from "./list-pagination_grpc";

import * as list_pagination_grpc_rxjs from "./list-pagination_grpc_rxjs";

import * as runtime from "@catfish/runtime";

// #region gRPC Based Extensions

declare module "./list-pagination_grpc" {
  export interface BooksServiceClient {
    helloworld(): string;
  }
}
// #endregion

// #region gRPC rxjs Based Extensions

declare module "./list-pagination_grpc_rxjs" {
  export interface BooksServiceRxjsClient {
    createListBooksPaginator(): rxjs.Observable<
      runtime.rxjsPaginator.PaginatorData<Book>
    >;
  }
}

list_pagination_grpc_rxjs.BooksServiceRxjsClient.prototype.createListBooksPaginator =
  function (
    this: list_pagination_grpc_rxjs.BooksServiceRxjsClient,
    test: string
  ) {
    return test;
  };

// #endregion
