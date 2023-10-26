import "./simple-rpc_tanstack"
import { } from "./simple-rpc_tanstack"
import { SimpleServiceClient } from "./simple-rpc_grpc"
import { } from "./simple-rpc_models"
import { useMutation, useQuery } from "@tanstack/react-query";

describe("TanStack plugin", () => {
    it("Query", () => {
        const client = new SimpleServiceClient('');
        const { data, error, isError } = useQuery(client.getGetMethodQueryOpts());
        expect(isError).toBeTruthy();
    })

    it("Mutator", () => {
        const client = new SimpleServiceClient('');
        const { data, error, isError } = useMutation(client.getUpdateMethodMutationOpts());
        expect(isError).toBeTruthy();
    })
});
