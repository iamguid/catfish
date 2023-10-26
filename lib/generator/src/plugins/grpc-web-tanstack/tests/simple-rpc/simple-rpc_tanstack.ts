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

import * as grpc from "grpc-web";
import * as rq from "@tanstack/react-query";

// #region TanStack extensions
declare module "././simple-rpc_grpc.ts" {
  export interface SimpleServiceClient {
    getGetMethodQueryOpts(): rq.UseQueryOptions<
      () => Promise<i304a882bba12abcf5b0b1d2f7051afc3.SimpleResponse>,
      grpc.RpcError,
      i304a882bba12abcf5b0b1d2f7051afc3.SimpleResponse,
      [
        "i304a882bba12abcf5b0b1d2f7051afc3.SimpleResponse.SomeData",
        i304a882bba12abcf5b0b1d2f7051afc3.SimpleResponse.SomeDataJSON
      ]
    >;

    getUpdateMethodMutationOpts(): rq.UseMutationOptions<
      i304a882bba12abcf5b0b1d2f7051afc3.SimpleResponse,
      grpc.RpcError
    >;
  }
}

i46be985838c89d4a9ef4547b05f7a8f6.SimpleServiceClient.prototype.getGetMethodQueryOpts =
  function (
    this: i46be985838c89d4a9ef4547b05f7a8f6.SimpleServiceClient,
    request: i304a882bba12abcf5b0b1d2f7051afc3.SimpleRequest
  ) {
    return {
      queryKey: [
        "i304a882bba12abcf5b0b1d2f7051afc3.SimpleResponse.SomeData",
        request.toJSON(),
      ],
      queryFn: () => this.GetMethod(request),
    };
  };

i46be985838c89d4a9ef4547b05f7a8f6.SimpleServiceClient.prototype.getUpdateMethodMutationOpts =
  function (
    this: i46be985838c89d4a9ef4547b05f7a8f6.SimpleServiceClient,
    request: i304a882bba12abcf5b0b1d2f7051afc3.SimpleRequest
  ) {
    return {
      mutatorFn: () => this.UpdateMethod(request),
    };
  };

// #endregion
