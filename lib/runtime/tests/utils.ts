export interface TestResponse {
    nextPageToken: string
    data: number[]
}

export interface TestParameters {
    type: 'ODD' | 'EVEN' | 'ALL'
}

export const createMockedDataFetcher = (maxCount: number) => {
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