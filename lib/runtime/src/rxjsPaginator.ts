import * as rxjs from 'rxjs';

export type DataFetcher<TData, TParameters> = (filterParameters: TParameters, itemsPerPage: number) => (source$: Observable<number>) => Observable<TData[]>;

export const createPaginator = <TData, TParameters>(
    destroy$: rxjs.Observable<void>,
    parameters$: rxjs.Subject<TParameters>,
    nextPage$: rxjs.Subject<void>,
    reset$: rxjs.Subject<void>,
    fetcher: DataFetcher<TData, TParameters>,
    itemsPerPage: number
): rxjs.Observable<PaginatorData<TData>> => {
    const onNextPage$: Observable<PaginatorEvent> = nextPage$.pipe(
        skip(1), // Fix bug with double loading (because initially onNextPage$ fired after onReset$, because they are BehaviourSubjects)
        switchMap(() => concat(of(PaginatorEvent.ChunkLoading), of(PaginatorEvent.NextPage)))
    );

    const onReset$: Observable<PaginatorEvent> = reset$.pipe(
        switchMap(() => concat(of(PaginatorEvent.Reset), of(PaginatorEvent.NextPage)))
    );

    return parameters$.pipe(
        filter(parameters => parameters !== null),
        switchMap(parameters => {
            return merge(onReset$, onNextPage$).pipe(
                mergeScan((acc, current) => {
                    // no more items
                    if (!acc.hasMore && (current === PaginatorEvent.ChunkLoading || current === PaginatorEvent.NextPage)) {
                        return of(acc);
                    }
                    // sets the state and clean up the data
                    else if (current === PaginatorEvent.Reset) {
                        return of(new PaginatorData<TData>([], true, 0, true));
                    }
                    // sets the state only
                    else if (current === PaginatorEvent.ChunkLoading) {
                        return of(new PaginatorData<TData>(acc.data, true, acc.page + 1, acc.hasMore));
                    }
                    // requests a data and concat it
                    else if (current === PaginatorEvent.NextPage) {
                        return of(acc.page).pipe(
                            fetcher(parameters, itemsPerPage),
                            map((data) =>
                                new PaginatorData<TData>(acc.data.concat(data), false, acc.page, data.length === itemsPerPage)
                            )
                        );
                    }
                    else {
                        return of(acc);
                    }
                },
                new PaginatorData<TData>([], false, -1, true),
                1)
            );
        }),
        rxjs.takeUntil(destroy$),
        rxjs.shareReplay({ refCount: true }),
    );
};