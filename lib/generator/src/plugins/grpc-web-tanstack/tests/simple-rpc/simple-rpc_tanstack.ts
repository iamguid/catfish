// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: simple-rpc.proto

import * as i491401f258b329f5890cc04ac1fccd82 from "././simple-rpc_models.ts";
import * as if5a5179339547bc5876f619f34a7a795 from "././simple-rpc_grpc.ts";

import * as grpc from "grpc-web";
import * as rq from "@tanstack/react-query";

// #region TanStack extensions
declare module "././simple-rpc_grpc.ts" {
  export interface SimpleServiceClient {
    getGetMethodQueryOpts(): rq.UseQueryOptions<
      () => Promise<i491401f258b329f5890cc04ac1fccd82.SimpleResponse>,
      grpc.RpcError,
      i491401f258b329f5890cc04ac1fccd82.SimpleResponse,
      [
        "i1553bf1fdd281246db3ac2ae03c872d8.SimpleResponse.SomeDataJSON",
        i1553bf1fdd281246db3ac2ae03c872d8.SimpleResponse.SomeDataJSON
      ]
    >;

    getUpdateMethodMutationOpts(): rq.UseMutationOptions<
      i491401f258b329f5890cc04ac1fccd82.SimpleResponse,
      grpc.RpcError
    >;
  }
}

if5a5179339547bc5876f619f34a7a795.SimpleServiceClient.prototype.getGetMethodQueryOpts =
  function (
    this: if5a5179339547bc5876f619f34a7a795.SimpleServiceClient,
    request: i491401f258b329f5890cc04ac1fccd82.SimpleRequest
  ) {
    return {
      queryKey: [
        "i1553bf1fdd281246db3ac2ae03c872d8.SimpleResponse.SomeDataJSON",
        request.toJSON(),
      ],
      queryFn: () => this.GetMethod(request),
    };
  };

if5a5179339547bc5876f619f34a7a795.SimpleServiceClient.prototype.getUpdateMethodMutationOpts =
  function (
    this: if5a5179339547bc5876f619f34a7a795.SimpleServiceClient,
    request: i491401f258b329f5890cc04ac1fccd82.SimpleRequest
  ) {
    return {
      mutatorFn: () => this.UpdateMethod(request),
    };
  };

// #endregion
