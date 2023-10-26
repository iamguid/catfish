import { Observable, combineLatestWith, switchMap, mergeScan, concat, of, map, merge } from 'rxjs';

export type PageFetcher<TParameters, TResponse> = (itemsPerPage: number, pageToken: string, parameters: TParameters) => Observable<TResponse>;

export enum PaginatorAction {
    CHANGE_PARAMETERS,
    LOAD_NEXT,
    RESET,
}

export interface PaginatorData<TData> {
    data: TData[]
    hasMore: boolean
    nextPageToken: string
}

export const createPaginator = <TData, TParameters, TResponse>(
    itemsPerPage: number,
    fetcher: PageFetcher<TParameters, TResponse>,
    nextPageTokenGetter: (resp: TResponse) => string,
    dataGetter: (resp: TResponse) => TData[],
    parameters$: Observable<TParameters>,
    nextPage$: Observable<void>,
    reload$: Observable<void>,
): Observable<PaginatorData<TData>> => {
    const parametersChangedAction$ = parameters$.pipe(switchMap(() => concat(of(PaginatorAction.CHANGE_PARAMETERS), of(PaginatorAction.LOAD_NEXT) )))
    const nextPageAction$ = nextPage$.pipe(map(() => PaginatorAction.LOAD_NEXT ))
    const reloadAction$ = reload$.pipe(switchMap(() => concat(of(PaginatorAction.RESET), of(PaginatorAction.LOAD_NEXT) )));
    const actions$ = merge(parametersChangedAction$, nextPageAction$, reloadAction$);

    const intitialContext: PaginatorData<TData> = {
        data: [],
        hasMore: true,
        nextPageToken: '',
    }

    return actions$.pipe(
        combineLatestWith(parameters$),
        mergeScan((context, [action, parameters]) => {
            if (action === PaginatorAction.CHANGE_PARAMETERS || action === PaginatorAction.RESET) {
                return of(intitialContext)
            }

            if (action === PaginatorAction.LOAD_NEXT && context.hasMore) {
                return fetcher(itemsPerPage, context.nextPageToken, parameters).pipe(
                    map((response) => {
                        const data = dataGetter(response);
                        const nextPageToken = nextPageTokenGetter(response);

                        return {
                            data,
                            nextPageToken,
                            hasMore: data.length >= itemsPerPage,
                        }
                    })
                )
            }

            return of({
                data: [],
                nextPageToken: '',
                hasMore: false,
            })
        }, intitialContext, 1)
    )
}
