import xhrmock from "xhr-mock";
import { SimpleServiceClient, SimpleServiceDefinition } from "./simple-rpc_grpc";
import { SimpleRequest, SimpleResponse } from "./simple-rpc_models";
import { collectClientReadableStream, createGrpcResponseBody } from "../../../../../tests/GrpcWebTestUtils";

describe("Unary RPC service", () => {
    beforeEach(() => xhrmock.setup());
    afterEach(() => xhrmock.teardown());

    it("Unary method", async () => {
        const requestMessage = new SimpleRequest();
        requestMessage.fInt32 = 42;

        const responseMessage = new SimpleResponse();
        responseMessage.data = new SimpleResponse.Data()
        responseMessage.data.test = 'test'
        
        xhrmock.post(SimpleServiceDefinition.UnaryMethod.getName(), {
            headers: { 'content-type': 'application/grpc' },
            status: 200,
            body: createGrpcResponseBody(responseMessage, {'grpc-status': '0', 'grpc-message': 'test'}),
        })

        const client = new SimpleServiceClient('');
        const response = await client.UnaryMethod(requestMessage, null);
        expect(response.data.test).toBe('test');
    })

    it("Server streaming method", async () => {
        const requestMessage = new SimpleRequest();
        requestMessage.fInt32 = 42;

        const responseMessage = new SimpleResponse();
        responseMessage.data = new SimpleResponse.Data()
        responseMessage.data.test = 'test'

        xhrmock.post(SimpleServiceDefinition.ServerStreamMethod.getName(), {
            headers: { 'content-type': 'application/grpc' },
            status: 200,
            body: createGrpcResponseBody(responseMessage, {'grpc-status': '0', 'grpc-message': 'test'}),
        })

        const client = new SimpleServiceClient('');
        const response = client.ServerStreamMethod(requestMessage, null);
        const result = await collectClientReadableStream(response);

        expect(result.data.length).toBe(1);
        expect(result.data[0].toJSON()).toStrictEqual(responseMessage.toJSON());
        expect(result.errors.length).toBe(0);
        expect(result.statuses.length).toBe(1);
        expect(result.metadatas.length).toBe(1);
    })
});