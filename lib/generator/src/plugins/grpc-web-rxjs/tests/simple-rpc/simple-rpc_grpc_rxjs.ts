// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: simple-rpc.proto

import * as simple_rpc_models from "./simple-rpc_models";

import * as simple_rpc_grpc from "./simple-rpc_grpc";

import * as runtime from "@catfish/runtime";
import * as rxjs from "rxjs";
import * as grpc from "grpc-web";

// #region SimpleService
export class SimpleServiceRxjsClient extends simple_rpc_grpc.SimpleServiceClient {
  UnaryMethod(
    request: simple_rpc_models.SimpleMessage,
    metadata: grpc.Metadata | null
  ): rxjs.Observable<simple_rpc_models.SimpleMessage> {
    return rxjs.defer(() => rxjs.from(super.UnaryMethod(request, metadata)));
  }

  ServerStreamMethod(
    request: simple_rpc_models.SimpleMessage,
    metadata: grpc.Metadata | null
  ): rxjs.Observable<
    runtime.ClientReadableStreamEvent<simple_rpc_models.SimpleMessage>
  > {
    return runtime.observableWrapClintReadableStream(
      super.ServerStreamMethod(request, metadata)
    );
  }
}
// #endregion
