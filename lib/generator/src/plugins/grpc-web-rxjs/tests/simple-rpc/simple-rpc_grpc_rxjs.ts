// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: simple-rpc.proto

import * as i5d738324e2189d8e9a1c3974d34f5a95 from "././simple-rpc_grpc.ts";
import * as i20f35e630daf44dbfa4c3f68f5399d8c from "././simple-rpc_models.ts";

import * as runtime from "@catfish/runtime";
import * as rxjs from "rxjs";
import * as grpc from "grpc-web";

// #region simple_service.SimpleService
export class SimpleServiceRxjsClient extends i5d738324e2189d8e9a1c3974d34f5a95.SimpleServiceClient {
  UnaryMethod(
    request: i20f35e630daf44dbfa4c3f68f5399d8c.SimpleMessage,
    metadata: grpc.Metadata | null
  ): rxjs.Observable<i20f35e630daf44dbfa4c3f68f5399d8c.SimpleMessage> {
    return rxjs.defer(() => rxjs.from(super.UnaryMethod(request, metadata)));
  }

  ServerStreamMethod(
    request: i20f35e630daf44dbfa4c3f68f5399d8c.SimpleMessage,
    metadata: grpc.Metadata | null
  ): rxjs.Observable<
    runtime.ClientReadableStreamEvent<i20f35e630daf44dbfa4c3f68f5399d8c.SimpleMessage>
  > {
    return runtime.observableWrapClintReadableStream(
      super.ServerStreamMethod(request, metadata)
    );
  }
}
// #endregion
