import { createPaginator } from "./asyncPaginator"

interface TestResponse {
    nextPageToken: string
    data: number[]
}

interface TestParameters {
    type: 'ODD' | 'EVEN' | 'ALL'
}

const createMockedDataFetcher = (maxCount: number) => {
    return (itemsPerPage: number, pageToken: string, params: TestParameters | null | undefined): Promise<TestResponse> => {
        const pageTokenAsNumber = Number.parseInt(pageToken === '' ? '0' : pageToken);
        const totalCount = pageTokenAsNumber * itemsPerPage;
        let resultNumbers: number[] = [];
        let counter: number = pageTokenAsNumber * itemsPerPage;
        while (resultNumbers.length < itemsPerPage) {
            switch (params?.type ?? 'ALL') {
                case "ODD":
                    if (counter % 2 !== 0) {
                        resultNumbers.push(counter);
                    }
                case "EVEN":
                    if (counter % 2 === 0) {
                        resultNumbers.push(counter);
                    }
                case "ALL":
                    resultNumbers.push(counter);
            }

            counter++;

            if (totalCount + resultNumbers.length >= maxCount) {
                break;
            }
        }

        const response: TestResponse = {
            nextPageToken: totalCount + resultNumbers.length >= maxCount ? '' : String(pageTokenAsNumber + 1),
            data: resultNumbers,
        }

        return Promise.resolve(response);
    }
}

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