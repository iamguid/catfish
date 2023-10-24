import { TestParameters, TestResponse, createMockedDataFetcher } from "../tests/utils";
import { createPaginator } from "./asyncPaginator"

describe('asyncPaginator', () => {
    it('should iterate by pages', async () => {
        const dataFetcher = createMockedDataFetcher(3);

        const paginator = createPaginator<number, TestParameters, TestResponse>(
            2,
            (itemsPerPage, nextPageToken, params) => dataFetcher(itemsPerPage, nextPageToken, params),
            (resp) => resp.nextPageToken,
            (resp) => resp.data
        )

        let pages = [];
        for await (const page of paginator) {
            pages.push(page);
        }

        expect(pages.length).toBe(2);
        expect(pages[0][0]).toBe(0);
        expect(pages[0][1]).toBe(1);
        expect(pages[1][0]).toBe(2);
    })
})