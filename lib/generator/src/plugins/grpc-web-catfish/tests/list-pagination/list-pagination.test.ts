import xhrmock from "xhr-mock";
import "./list-pagination_catfish";
import { BooksServiceClient } from "./list-pagination_grpc";

describe("Unary RPC service", () => {
    beforeEach(() => xhrmock.setup());
    afterEach(() => xhrmock.teardown());

    it("Always pass", () => {
        expect(true).toBe(true)
    })
});