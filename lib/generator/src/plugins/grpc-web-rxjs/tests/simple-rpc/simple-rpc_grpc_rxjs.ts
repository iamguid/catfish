// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: simple-rpc.proto

import * as i46be985838c89d4a9ef4547b05f7a8f6 from "././simple-rpc_grpc.ts";
import * as i304a882bba12abcf5b0b1d2f7051afc3 from "././simple-rpc_models.ts";

import * as runtime from "@catfish/runtime";
import * as rxjs from "rxjs";
import * as grpc from "grpc-web";

// #region SimpleService
export class SimpleServiceRxjsClient extends i46be985838c89d4a9ef4547b05f7a8f6.SimpleServiceClient {
  UnaryMethod(
    request: i304a882bba12abcf5b0b1d2f7051afc3.SimpleMessage,
    metadata: grpc.Metadata | null
  ): rxjs.Observable<i304a882bba12abcf5b0b1d2f7051afc3.SimpleMessage> {
    return rxjs.defer(() => rxjs.from(super.UnaryMethod(request, metadata)));
  }

  ServerStreamMethod(
    request: i304a882bba12abcf5b0b1d2f7051afc3.SimpleMessage,
    metadata: grpc.Metadata | null
  ): rxjs.Observable<
    runtime.ClientReadableStreamEvent<i304a882bba12abcf5b0b1d2f7051afc3.SimpleMessage>
  > {
    return runtime.observableWrapClintReadableStream(
      super.ServerStreamMethod(request, metadata)
    );
  }
}
// #endregion
