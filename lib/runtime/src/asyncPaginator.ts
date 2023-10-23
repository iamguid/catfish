export type PaginatorPageFetcher<TParams, TResponse> = (itemsPerPage: number, nextPageToken: string, params: TParams) => Promise<TResponse>

export class Paginator<TData, TParams, TResponse> {
    private params: TParams | null = null;
    private iterator: AsyncIterator<TData[]>;

    constructor(
        private itemsPerPage: number,
        private fetcher: PaginatorPageFetcher<TParams | null | undefined, TResponse>,
        private nextPageTokenGetter: (resp: TResponse) => string,
        private dataGetter: (resp: TResponse) => TData[],
    ) {
        this.iterator = this.createIterator();
    }

    private createIterator(): AsyncGenerator<Awaited<TData[]>> {
        const self = this;

        return (async function *() {
            let nextPageToken = '';
            while(nextPageToken !== '__END__') {
                const response = await self.fetcher(self.itemsPerPage, nextPageToken, self.params);
                const data = self.dataGetter(response);
                nextPageToken = self.nextPageTokenGetter(response);

                yield data;

                if (!nextPageToken || nextPageToken === '') {
                    nextPageToken = '__END__'
                }
            }
        })()
    }

    [Symbol.asyncIterator](): AsyncIterator<TData[]> {
        return this.iterator;
    }

    reset(): void {
        this.iterator = this.createIterator();
    }

    setParameters(params: TParams): void {
        this.params = params;
        this.reset();
    }

    next(...args: []): Promise<IteratorResult<TData[]>> {
        return this.iterator.next(...args)
    }

    return?(value?: any): Promise<IteratorResult<TData[]>> {
        return this.iterator.return!(value);
    }

    throw?(e?: any): Promise<IteratorResult<TData[]>> {
        return this.iterator.throw!(e);
    }
}

export const createPaginator = <TData, TParams, TResponse>(
    itemsPerPage: number,
    fetcher: PaginatorPageFetcher<TParams | null | undefined, TResponse>,
    nextPageTokenGetter: (resp: TResponse) => string,
    dataGetter: (resp: TResponse) => TData[],
) => {
    return new Paginator(
        itemsPerPage,
        fetcher,
        nextPageTokenGetter,
        dataGetter
    )
}
