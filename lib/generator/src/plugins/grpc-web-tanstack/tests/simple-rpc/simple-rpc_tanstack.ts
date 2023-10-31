// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: simple-rpc.proto

import * as i20f35e630daf44dbfa4c3f68f5399d8c from "././simple-rpc_models.ts";
import * as i5d738324e2189d8e9a1c3974d34f5a95 from "././simple-rpc_grpc.ts";

import * as grpc from "grpc-web";
import * as rq from "@tanstack/react-query";

// #region TanStack extensions
declare module "././simple-rpc_grpc.ts" {
  export interface SimpleServiceClient {
    getGetMethodQueryOpts(): rq.UseQueryOptions<
      () => Promise<i20f35e630daf44dbfa4c3f68f5399d8c.SimpleResponse>,
      grpc.RpcError,
      i20f35e630daf44dbfa4c3f68f5399d8c.SimpleResponse,
      [
        "i20f35e630daf44dbfa4c3f68f5399d8c.SimpleResponse.SomeDataJSON",
        i20f35e630daf44dbfa4c3f68f5399d8c.SimpleResponse.SomeDataJSON
      ]
    >;

    getUpdateMethodMutationOpts(): rq.UseMutationOptions<
      i20f35e630daf44dbfa4c3f68f5399d8c.SimpleResponse,
      grpc.RpcError
    >;
  }
}

i5d738324e2189d8e9a1c3974d34f5a95.SimpleServiceClient.prototype.getGetMethodQueryOpts =
  function (
    this: i5d738324e2189d8e9a1c3974d34f5a95.SimpleServiceClient,
    request: i20f35e630daf44dbfa4c3f68f5399d8c.SimpleRequest
  ) {
    return {
      queryKey: [
        "i20f35e630daf44dbfa4c3f68f5399d8c.SimpleResponse.SomeDataJSON",
        request.toJSON(),
      ],
      queryFn: () => this.GetMethod(request),
    };
  };

i5d738324e2189d8e9a1c3974d34f5a95.SimpleServiceClient.prototype.getUpdateMethodMutationOpts =
  function (
    this: i5d738324e2189d8e9a1c3974d34f5a95.SimpleServiceClient,
    request: i20f35e630daf44dbfa4c3f68f5399d8c.SimpleRequest
  ) {
    return {
      mutatorFn: () => this.UpdateMethod(request),
    };
  };

// #endregion
