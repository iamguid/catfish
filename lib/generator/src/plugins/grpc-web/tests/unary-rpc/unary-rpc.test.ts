import * as pjs from "protobufjs";
import xhrmock from "xhr-mock";
import { SimpleServiceClient, SimpleServiceDefinition } from "./unary-rpc_grpc";
import { SimpleMessage } from "./unary-rpc_models";

describe("Unary RPC service", () => {
    // replace the real XHR object with the mock XHR object before each test
    beforeEach(() => xhrmock.setup());
 
    // put the real XHR object back and clear the mocks after each test
    afterEach(() => xhrmock.teardown());

    it("Always pass", async () => {
        function createGrpcResponse(data: Uint8Array) {
            // create the data length bytes - there is probably a more concise way, but this works
            const dataLengthBytes = new Uint8Array(
                new Uint32Array([data.byteLength]).buffer
            );
            dataLengthBytes.reverse();
            const dataFrame = new Uint8Array(data.byteLength + 5);
            dataFrame.set([0x00], 0); // set the magic byte 0x00 to identify the data frame
            dataFrame.set(dataLengthBytes, 1); // set the length bytes
            dataFrame.set(data, 5); // set the actual data
          
            // you can add mock errors by tweaking the trailers string with different status codes/messages
            const trailersString = `grpc-status: 0\r\ngrpc-message: test`;
            const encoder = new TextEncoder();
            const trailers = encoder.encode(trailersString);
            const trailersLengthBytes = new Uint8Array(
              new Uint32Array([trailers.byteLength]).buffer
            );
            trailersLengthBytes.reverse();
            const trailersFrame = new Uint8Array(trailers.byteLength + 5);
            trailersFrame.set([0x80], 0); // magic byte for trailers is 0x80
            trailersFrame.set(trailersLengthBytes, 1);
            trailersFrame.set(trailers, 5);
          
            // create the final body by combining the data frame and trailers frame
            const body = new Uint8Array(dataFrame.byteLength + trailersFrame.byteLength);
            body.set(dataFrame, 0);
            body.set(trailersFrame, dataFrame.byteLength);

            const base64 = pjs.util.base64.encode(body, 0, body.byteLength);
          
            return {
              statusCode: 200,
              body: base64,
              headers: {
                "content-type": "application/grpc-web-text",
              },
            };
          }


        const respMessage = new SimpleMessage();
        respMessage.fInt32 = 43;
        
        const resp = createGrpcResponse(respMessage.serialize())

        xhrmock.post(SimpleServiceDefinition.UnaryMethod.getName(), (req, res) => {
            return res
              .headers({ 'content-type': 'application/grpc-web-text' })
              .status(200)
              .body(resp.body);
        })

        const client = new SimpleServiceClient('');

        const request = new SimpleMessage();
        request.fInt32 = 42;

        const response = await client.UnaryMethod(request, null);

        expect(response.fInt32).toBe(43);
    })
});