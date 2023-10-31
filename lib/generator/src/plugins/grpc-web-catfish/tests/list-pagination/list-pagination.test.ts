import xhrmock, { once } from "xhr-mock";
import { Subject, takeUntil } from "rxjs";
import { rxjsPaginator } from "@catfish/runtime";

import "./list-pagination_catfish";
import { ListBooksParameters } from "./list-pagination_catfish";
import { BooksServiceRxjsClient } from "./list-pagination_grpc_rxjs";
import { BooksServiceClient, BooksServiceDefinition } from "./list-pagination_grpc";
import { Book, BookJSON, ListBooksResponse } from "./list-pagination_models";
import { createGrpcResponseBody } from "../../../../../tests/GrpcWebTestUtils";

describe("Catfish extensions", () => {
    beforeEach(() => xhrmock.setup());
    afterEach(() => xhrmock.teardown());

    it("async paginator", async () => {
        const response1 = new ListBooksResponse().fromJSON({
            books: [
                { name: 'book1', labels: { 'l1': 'test1' } },
                { name: 'book2', labels: { 'l2': 'test2' } }
            ],
            nextPageToken: 'token1'
        })

        xhrmock.post(BooksServiceDefinition.ListBooks.getName(), once({
            headers: { 'content-type': 'application/grpc' },
            status: 200,
            body: createGrpcResponseBody(response1, {'grpc-status': '0', 'grpc-message': 'test'}),
        }))

        const response2 = new ListBooksResponse().fromJSON({
            books: [
                { name: 'book3', labels: { 'l1': 'test1' } },
                { name: 'book4', labels: { 'l2': 'test2' } }
            ],
            nextPageToken: 'token2'
        })

        xhrmock.post(BooksServiceDefinition.ListBooks.getName(), once({
            headers: { 'content-type': 'application/grpc' },
            status: 200,
            body: createGrpcResponseBody(response2, {'grpc-status': '0', 'grpc-message': 'test'}),
        }))

        const response3 = new ListBooksResponse().fromJSON({
            books: [
                { name: 'book5', labels: { 'l1': 'test1' } },
            ],
            nextPageToken: ''
        })

        xhrmock.post(BooksServiceDefinition.ListBooks.getName(), once({
            headers: { 'content-type': 'application/grpc' },
            status: 200,
            body: createGrpcResponseBody(response3, {'grpc-status': '0', 'grpc-message': 'test'}),
        }))


        const client = new BooksServiceClient('')
        const paginator = client.createListBooksAsyncPaginator(2)

        let capturedData: BookJSON[][] = [];
        for await (const page of paginator) {
            capturedData.push(page.map(book => book.toJSON()))
        }

        expect(capturedData.length).toBe(3)
        expect(capturedData[0].length).toBe(2)
        expect(capturedData[1].length).toBe(2)
        expect(capturedData[2].length).toBe(1)
    })

    it("rxjs paginator", (cb) => {
        const response1 = new ListBooksResponse().fromJSON({
            books: [
                { name: 'book1', labels: { 'l1': 'test1' } },
                { name: 'book2', labels: { 'l2': 'test2' } }
            ],
            nextPageToken: 'token1'
        })

        xhrmock.post(BooksServiceDefinition.ListBooks.getName(), once({
            headers: { 'content-type': 'application/grpc' },
            status: 200,
            body: createGrpcResponseBody(response1, {'grpc-status': '0', 'grpc-message': 'test'}),
        }))

        const response2 = new ListBooksResponse().fromJSON({
            books: [
                { name: 'book3', labels: { 'l1': 'test1' } },
                { name: 'book4', labels: { 'l2': 'test2' } }
            ],
            nextPageToken: 'token2'
        })

        xhrmock.post(BooksServiceDefinition.ListBooks.getName(), once({
            headers: { 'content-type': 'application/grpc' },
            status: 200,
            body: createGrpcResponseBody(response2, {'grpc-status': '0', 'grpc-message': 'test'}),
        }))

        const response3 = new ListBooksResponse().fromJSON({
            books: [
                { name: 'book5', labels: { 'l1': 'test1' } },
            ],
            nextPageToken: ''
        })

        xhrmock.post(BooksServiceDefinition.ListBooks.getName(), once({
            headers: { 'content-type': 'application/grpc' },
            status: 200,
            body: createGrpcResponseBody(response3, {'grpc-status': '0', 'grpc-message': 'test'}),
        }))


        const client = new BooksServiceRxjsClient('')

        const parameters$ = new Subject<ListBooksParameters>();
        const nextPage$ = new Subject<void>();
        const reload$ = new Subject<void>();
        const destroy$ = new Subject<void>();

        const paginator = client.createListBooksRxjsPaginator(2, parameters$, nextPage$, reload$)
            .pipe(takeUntil(destroy$))

        expect.assertions(10);

        let capturedData: rxjsPaginator.PaginatorData<Book>[] = [];
        const sub = paginator.subscribe({
            next: (data) => {
                capturedData.push(data)
            },
            error: (err) => {
                // TODO: test it
            },
            complete: () => {
                expect(capturedData.length).toBe(3)
                expect(capturedData[0].data.length).toBe(2)
                expect(capturedData[0].nextPageToken).toBe('token1')
                expect(capturedData[0].hasMore).toBe(true)
                expect(capturedData[1].data.length).toBe(2)
                expect(capturedData[1].nextPageToken).toBe('token2')
                expect(capturedData[1].hasMore).toBe(true)
                expect(capturedData[2].data.length).toBe(1)
                expect(capturedData[2].nextPageToken).toBe('')
                expect(capturedData[2].hasMore).toBe(false)
                cb();
            }
        })

        parameters$.next({});
        nextPage$.next();
        nextPage$.next();

        // TODO: fix
        setTimeout(() => {
            destroy$.next();
            sub.unsubscribe();
        }, 100)
    })
});