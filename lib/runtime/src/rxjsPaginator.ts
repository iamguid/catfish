import { Observable, BehaviorSubject, Subject, combineLatestWith, switchMap, mergeScan, startWith, of } from 'rxjs';

export type DataFetcher<TParameters, TResponse> = (itemsPerPage: number, pageToken: string, parameters: TParameters) => (source$: Observable<number>) => Observable<TResponse>;

export enum PaginatorState {
    INITIAL,
    LAODING,
    IDLE,
}

export enum PaginatorAction {
    LOAD_NEXT,
    RESET,
}

export interface PaginatorData<TData> {
    state: PaginatorState
    data: TData[]
    hasMore: boolean
}

export const createPaginator = <TData, TParameters, TResponse>(
    itemsPerPage: number,
    fetcher: DataFetcher<TResponse, TParameters>,
    nextPageTokenGetter: (resp: TResponse) => string,
    dataGetter: (resp: TResponse) => TData[],
    parameters$: Observable<TParameters>,
    nextPage$: Observable<void>,
    reset$: Observable<void>,
): Observable<PaginatorData<TData>> => {
    const state$ = new BehaviorSubject<PaginatorState>(PaginatorState.INITIAL);
    const events$ = merge(parameters$.pipe(map(params => { type: })), )
    const pageToken$ = new Subject<string>();

    return state$.pipe(
        combineLatestWith(parameters$),
        combineLatestWith(pageToken$.pipe(startWith(''))),
        switchMap(([[state, parameters], pageToken]) => {
            return events$.pipe(
                mergeScan((acc, current) => {
                    if (state === PaginatorState.INITIAL) {
                        return fetcher(parameters, pageToken, itemsPerPage)
                            .pipe(
                                map((resp) =>
                            )
                        )
                    }

                    if (acc.hasMore) {
                        of({ state, data: [], hasMore: true, currentPageToken: '', nextPageToken: '' });
                        return of(acc.page).pipe(
                            fetcher(parameters, itemsPerPage),
                            map((data) =>
                                new PaginatorData<TData>(acc.data.concat(data), false, acc.page, data.length === itemsPerPage)
                            )
                        );
                    }
                }, {
                    state,
                    data: [],
                    hasMore: true,
                    currentPageToken: '',
                    nextPageToken: ''
                })
            )
        })
    )

    return parameters$.pipe(
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