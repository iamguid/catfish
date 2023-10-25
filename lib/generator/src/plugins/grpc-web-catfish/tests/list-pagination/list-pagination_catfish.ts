// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: list-pagination.proto

import * as ifb77c5d8e59310d885fc4baad0f1fb4a from "././list-pagination_grpc_rxjs.ts";

import * as ibb4ec9a82008b43ae7458e3d53713799 from "././list-pagination_grpc.ts";

import * as runtime from "@catfish/runtime";

// #region gRPC Based Extensions

declare module "././list-pagination_grpc.ts" {
  export interface BooksServiceClient {
    helloworld(): string;
  }
}
// #endregion

// #region gRPC rxjs Based Extensions

declare module "././list-pagination_grpc_rxjs.ts" {
  export interface BooksServiceRxjsClient {
    createListBooksPaginator(): rxjs.Observable<
      runtime.rxjsPaginator.PaginatorData<Book>
    >;
  }
}

ifb77c5d8e59310d885fc4baad0f1fb4a.BooksServiceRxjsClient.prototype.createListBooksPaginator =
  function (
    this: ifb77c5d8e59310d885fc4baad0f1fb4a.BooksServiceRxjsClient,
    test: string
  ) {
    return test;
  };

// #endregion
