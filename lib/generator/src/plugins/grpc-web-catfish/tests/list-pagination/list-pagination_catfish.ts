// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: list-pagination.proto

import * as id057de6b677b5cc8fc92fe38157d70d3 from "././list-pagination_grpc_rxjs.ts";
import * as i5d738324e2189d8e9a1c3974d34f5a95 from "././list-pagination_grpc.ts";
import * as i20f35e630daf44dbfa4c3f68f5399d8c from "././list-pagination_models.ts";

import * as rxjs from "rxjs";
import * as runtime from "@catfish/runtime";

// #region gRPC Based Extensions
declare module "././list-pagination_grpc.ts" {
  export interface BooksServiceClient {
    createListBooksAsyncPaginator(
      itemsPerPage: number
    ): runtime.asyncPaginator.Paginator<
      i20f35e630daf44dbfa4c3f68f5399d8c.Book,
      ListBooksParameters,
      ListBooksResponse
    >;
  }
}

i5d738324e2189d8e9a1c3974d34f5a95.BooksServiceClient.prototype.createListBooksAsyncPaginator =
  function (
    this: i5d738324e2189d8e9a1c3974d34f5a95.BooksServiceClient,
    itemsPerPage: number
  ) {
    const fetcher: runtime.asyncPaginator.PageFetcher<
      ListBooksParameters,
      i20f35e630daf44dbfa4c3f68f5399d8c.ListBooksResponse
    > = (itemsPerPage, pageToken, parameters) => {
      return this.ListBooks(
        new i20f35e630daf44dbfa4c3f68f5399d8c.ListBooksRequest().fromJSON({
          ...parameters,
          pageSize: itemsPerPage,
          pageToken: pageToken,
        })
      );
    };

    return runtime.asyncPaginator.createPaginator(
      itemsPerPage,
      fetcher,
      (resp) => resp.nextPageToken,
      (resp) => resp.books
    );
  };
// #endregion

// #region gRPC rxjs Based Extensions
export type ListBooksParameters = Omit<
  i20f35e630daf44dbfa4c3f68f5399d8c.ListBooksRequestJSON,
  "pageSize" | "pageToken"
>;

declare module "././list-pagination_grpc_rxjs.ts" {
  export interface BooksServiceRxjsClient {
    createListBooksRxjsPaginator(
      itemsPerPage: number,
      parameters$: Observable<ListBooksParameters>,
      nextPage$: Observable<void>,
      reload$: Observable<void>
    ): rxjs.Observable<
      runtime.rxjsPaginator.PaginatorData<i20f35e630daf44dbfa4c3f68f5399d8c.Book>
    >;
  }
}

id057de6b677b5cc8fc92fe38157d70d3.BooksServiceRxjsClient.prototype.createListBooksRxjsPaginator =
  function (
    this: id057de6b677b5cc8fc92fe38157d70d3.BooksServiceRxjsClient,
    itemsPerPage: number,
    parameters$: Observable<ListBooksParameters>,
    nextPage$: Observable<void>,
    reload$: Observable<void>
  ) {
    const fetcher: runtime.rxjsPaginator.PageFetcher<
      ListBooksParameters,
      i20f35e630daf44dbfa4c3f68f5399d8c.Book
    > = (itemsPerPage, pageToken, parameters) => {
      return this.ListBooks(
        new i20f35e630daf44dbfa4c3f68f5399d8c.ListBooksRequest().fromJSON({
          ...parameters,
          pageSize: itemsPerPage,
          pageToken: pageToken,
        })
      );
    };

    return runtime.rxjsPaginator.createPaginator(
      itemsPerPage,
      fetcher,
      (resp) => resp.nextPageToken,
      (resp) => resp.books,
      parameters$,
      nextPage$,
      reload$
    );
  };
// #endregion
