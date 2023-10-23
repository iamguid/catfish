import xhrmock from "xhr-mock";
import { BooksServiceClient, BooksServiceDefinition } from "./list-pagination_grpc";
import { Book, ListBooksRequest, ListBooksResponse } from "./list-pagination_models";
import { collectClientReadableStream, createGrpcResponseBody } from "../../../../../tests/GrpcWebTestUtils";

describe("Unary RPC service", () => {
    beforeEach(() => xhrmock.setup());
    afterEach(() => xhrmock.teardown());

    it("Unary method", async () => {
       
    })
});