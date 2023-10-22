import xhrmock from "xhr-mock";
import { SimpleServiceClient, SimpleServiceDefinition } from "./unary-rpc_grpc";
import { SimpleMessage } from "./unary-rpc_models";
import { collectClientReadableStream, createGrpcResponseBody } from "../utils";

describe("Unary RPC service", () => {
    beforeEach(() => xhrmock.setup());
    afterEach(() => xhrmock.teardown());

    it("Unary method", async () => {
        const requestMessage = new SimpleMessage();
        requestMessage.fInt32 = 42;

        const responseMessage = new SimpleMessage();
        responseMessage.fInt32 = 43;
        
        xhrmock.post(SimpleServiceDefinition.UnaryMethod.getName(), (req, res) => {
            return res
              .headers({ 'content-type': 'application/grpc' })
              .status(200)
              .body(createGrpcResponseBody(responseMessage, {'grpc-status': '0', 'grpc-message': ''}));
        })

        const client = new SimpleServiceClient('');
        const response = await client.UnaryMethod(requestMessage, null);
        expect(response.fInt32).toBe(43);
    })

    it("Server streaming method", async () => {
        const requestMessage = new SimpleMessage();
        requestMessage.fInt32 = 42;

        const responseMessage = new SimpleMessage();
        responseMessage.fInt32 = 43;

        xhrmock.post(SimpleServiceDefinition.ServerStreamMethod.getName(), {
            headers: { 'content-type': 'application/grpc' },
            status: 200,
            body: createGrpcResponseBody(responseMessage, {'grpc-status': '0', 'grpc-message': ''}),
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