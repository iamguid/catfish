// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: list-pagination.proto

import * as i20f35e630daf44dbfa4c3f68f5399d8c from "././list-pagination_models.ts";
import * as i5d738324e2189d8e9a1c3974d34f5a95 from "././list-pagination_grpc.ts";

import * as runtime from "@catfish/runtime";
import * as rxjs from "rxjs";
import * as grpc from "grpc-web";

// #region simple_service.BooksService
export class BooksServiceRxjsClient extends i5d738324e2189d8e9a1c3974d34f5a95.BooksServiceClient {
  ListBooks(
    request: i20f35e630daf44dbfa4c3f68f5399d8c.ListBooksRequest,
    metadata: grpc.Metadata | null
  ): rxjs.Observable<i20f35e630daf44dbfa4c3f68f5399d8c.ListBooksResponse> {
    return rxjs.defer(() => rxjs.from(super.ListBooks(request, metadata)));
  }
}
// #endregion
