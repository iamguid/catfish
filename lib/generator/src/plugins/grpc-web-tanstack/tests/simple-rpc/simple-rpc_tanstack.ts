// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: simple-rpc.proto

import * as ia78d92959178c10548ba2e8d3fe6da45 from "././simple-rpc_models.ts";
import * as i3fb9f3d4baf4195cef6bfd3adcb13b9e from "././simple-rpc_grpc.ts";

import * as grpc from "grpc-web";
import * as rq from "@tanstack/react-query";

// #region TanStack extensions
declare module "././simple-rpc_grpc.ts" {
  export interface SimpleServiceClient {
    getGetMethodQueryOpts(): rq.UseQueryOptions<
      () => Promise<i9bae6523ad98b3546b03faecd5208f79.SimpleResponse>,
      grpc.RpcError,
      i9bae6523ad98b3546b03faecd5208f79.SimpleResponse,
      [
        "ia78d92959178c10548ba2e8d3fe6da45.SimpleResponse.SomeDataJSON",
        ia78d92959178c10548ba2e8d3fe6da45.SimpleResponse.SomeDataJSON
      ]
    >;

    getUpdateMethodMutationOpts(): rq.UseMutationOptions<
      i9bae6523ad98b3546b03faecd5208f79.SimpleResponse,
      grpc.RpcError
    >;
  }
}

i3fb9f3d4baf4195cef6bfd3adcb13b9e.SimpleServiceClient.prototype.getGetMethodQueryOpts =
  function (
    this: i3fb9f3d4baf4195cef6bfd3adcb13b9e.SimpleServiceClient,
    request: ia03f17ff9f0af504dbba959c3d73bd62.SimpleRequest
  ) {
    return {
      queryKey: [
        "ia78d92959178c10548ba2e8d3fe6da45.SimpleResponse.SomeDataJSON",
        request.toJSON(),
      ],
      queryFn: () => this.GetMethod(request),
    };
  };

i3fb9f3d4baf4195cef6bfd3adcb13b9e.SimpleServiceClient.prototype.getUpdateMethodMutationOpts =
  function (
    this: i3fb9f3d4baf4195cef6bfd3adcb13b9e.SimpleServiceClient,
    request: ia03f17ff9f0af504dbba959c3d73bd62.SimpleRequest
  ) {
    return {
      mutatorFn: () => this.UpdateMethod(request),
    };
  };

// #endregion
