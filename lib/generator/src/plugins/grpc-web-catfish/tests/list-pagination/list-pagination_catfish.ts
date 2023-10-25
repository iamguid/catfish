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
import * as i57b033e2b69dc7dff8a274f7cedaded5 from "././list-pagination_models.ts";

import * as rxjs from "rxjs";
import * as runtime from "@catfish/runtime";

// #region gRPC Based Extensions
declare module "././list-pagination_grpc.ts" {
  export interface BooksServiceClient {
    helloworld(): string;
  }
}
// #endregion

// #region gRPC rxjs Based Extensions

export type ListBooksRequestParameters = Omit<
  i57b033e2b69dc7dff8a274f7cedaded5.ListBooksRequestJSON,
  "pageSize" | "pageToken"
>;

declare module "././list-pagination_grpc_rxjs.ts" {
  export interface BooksServiceRxjsClient {
    createListBooksPaginator(
      itemsPerPage: number,
      parameters$: Observable<ListBooksRequestParameters>,
      nextPage$: Observable<void>,
      reload$: Observable<void>
    ): rxjs.Observable<
      runtime.rxjsPaginator.PaginatorData<i57b033e2b69dc7dff8a274f7cedaded5.Book>
    >;
  }
}

ifb77c5d8e59310d885fc4baad0f1fb4a.BooksServiceRxjsClient.prototype.createListBooksPaginator =
  function (
    this: ifb77c5d8e59310d885fc4baad0f1fb4a.BooksServiceRxjsClient,
    itemsPerPage: number,
    parameters$: Observable<ListBooksRequestParameters>,
    nextPage$: Observable<void>,
    reload$: Observable<void>
  ): Observable {
    const fetcher = (itemsPerPage, pageToken, parameters) => {
      return this.ListBooks(
        new i57b033e2b69dc7dff8a274f7cedaded5.ListBooksRequest().fromJSON({
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
