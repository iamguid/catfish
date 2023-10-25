// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: list-pagination.proto

import * as ibb4ec9a82008b43ae7458e3d53713799 from "././list-pagination_grpc.ts";
import * as i57b033e2b69dc7dff8a274f7cedaded5 from "././list-pagination_models.ts";

import * as runtime from "@catfish/runtime";
import * as rxjs from "rxjs";
import * as grpc from "grpc-web";

// #region BooksService
export class BooksServiceRxjsClient extends ibb4ec9a82008b43ae7458e3d53713799.BooksServiceClient {
  ListBooks(
    request: i57b033e2b69dc7dff8a274f7cedaded5.ListBooksRequest,
    metadata: grpc.Metadata | null
  ): rxjs.Observable<i57b033e2b69dc7dff8a274f7cedaded5.ListBooksResponse> {
    return rxjs.defer(() => rxjs.from(super.ListBooks(request, metadata)));
  }
}
// #endregion
