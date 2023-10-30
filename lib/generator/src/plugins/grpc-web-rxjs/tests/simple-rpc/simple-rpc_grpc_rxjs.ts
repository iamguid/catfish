// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: simple-rpc.proto

import * as i3fb9f3d4baf4195cef6bfd3adcb13b9e from "././simple-rpc_grpc.ts";
import * as i05f5fe8fe1733385e835a2d7c0a21127 from "././simple-rpc_models.ts";

import * as runtime from "@catfish/runtime";
import * as rxjs from "rxjs";
import * as grpc from "grpc-web";

// #region simple_service.SimpleService
export class SimpleServiceRxjsClient extends i3fb9f3d4baf4195cef6bfd3adcb13b9e.SimpleServiceClient {
  UnaryMethod(
    request: i05f5fe8fe1733385e835a2d7c0a21127.SimpleMessage,
    metadata: grpc.Metadata | null
  ): rxjs.Observable<i05f5fe8fe1733385e835a2d7c0a21127.SimpleMessage> {
    return rxjs.defer(() => rxjs.from(super.UnaryMethod(request, metadata)));
  }

  ServerStreamMethod(
    request: i05f5fe8fe1733385e835a2d7c0a21127.SimpleMessage,
    metadata: grpc.Metadata | null
  ): rxjs.Observable<
    runtime.ClientReadableStreamEvent<i05f5fe8fe1733385e835a2d7c0a21127.SimpleMessage>
  > {
    return runtime.observableWrapClintReadableStream(
      super.ServerStreamMethod(request, metadata)
    );
  }
}
// #endregion
