import xhrmock from "xhr-mock";
import grpc from "grpc-web";
import { SimpleServiceRxjsClient } from "./simple-rpc_grpc_rxjs";
import { SimpleServiceDefinition } from "./simple-rpc_grpc";
import { SimpleMessage } from "./simple-rpc_models";
import { createGrpcResponseBody } from "../../../../../tests/GrpcWebTestUtils";

describe("Unary RPC service", () => {
    beforeEach(() => xhrmock.setup());
    afterEach(() => xhrmock.teardown());

    it("Unary method", (cb) => {
        const requestMessage = new SimpleMessage();
        requestMessage.fInt32 = 42;

        const responseMessage = new SimpleMessage();
        responseMessage.fInt32 = 43;
        
        xhrmock.post(SimpleServiceDefinition.UnaryMethod.getName(), {
            headers: { 'content-type': 'application/grpc' },
            status: 200,
            body: createGrpcResponseBody(responseMessage, {'grpc-status': '0', 'grpc-message': 'test'}),
        })

        expect.assertions(1);

        const client = new SimpleServiceRxjsClient('');
        client.UnaryMethod(requestMessage, null)
            .subscribe({
                next: (response) => {
                    expect(response.fInt32).toBe(43);
                },
                error: (err) => {
                    // TODO: test it
                },
                complete: () => {
                    cb();
                }
            });
    })

    it("Server streaming method", (cb) => {
        const requestMessage = new SimpleMessage();
        requestMessage.fInt32 = 42;

        const responseMessage = new SimpleMessage();
        responseMessage.fInt32 = 43;

        xhrmock.post(SimpleServiceDefinition.ServerStreamMethod.getName(), {
            headers: { 'content-type': 'application/grpc' },
            status: 200,
            body: createGrpcResponseBody(responseMessage, {'grpc-status': '0', 'grpc-message': 'test'}),
        })

        expect.assertions(4);

        const client = new SimpleServiceRxjsClient('');
        client.ServerStreamMethod(requestMessage, null)
            .subscribe({
                next: (event) => {
                    if (event.type === 'data') {
                        expect(event.data.toJSON()).toStrictEqual(responseMessage.toJSON())
                    }

                    if (event.type === 'metadata') {
                        expect(event.metadata).toStrictEqual({})
                    }

                    if (event.type === 'status') {
                        expect(event.status.code).toBe(grpc.StatusCode.OK)
                        expect(event.status.details).toBe('')
                    }
                },
                error: (err) => {
                    // TODO: test it
                },
                complete: () => {
                    cb();
                }
            });
    })
});