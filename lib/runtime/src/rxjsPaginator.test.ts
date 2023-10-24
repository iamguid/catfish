import { Subject, from, takeUntil } from 'rxjs';
import { TestParameters, createMockedDataFetcher } from '../tests/utils';
import { PaginatorData, createPaginator } from './rxjsPaginator';

describe('rxjsPaginator', () => {
    it('should iterate by pages', (cb) => {
        const dataFetcher = createMockedDataFetcher(7);

        const destroy$ = new Subject<void>();
        const parameters$ = new Subject<TestParameters>();
        const nextPage$ = new Subject<void>();
        const reload$ = new Subject<void>();

        const paginator$ = createPaginator(
            2,
            (itemsPerPage, nextPageToken, params) => from(dataFetcher(itemsPerPage, nextPageToken, params)),
            (resp) => resp.nextPageToken,
            (resp) => resp.data,
            parameters$,
            nextPage$,
            reload$,
        ).pipe(
            takeUntil(destroy$)
        )

        const contexts: PaginatorData<number>[] = [];

        const sub = paginator$.subscribe({
            next: (context) => {
                contexts.push(context);
            },
            error: (err) => {
                // TODO: test it
            },
            complete: () => {
                expect(contexts.length).toBe(5);

                expect(contexts[0]).toStrictEqual({
                    data: [0, 1],
                    nextPageToken: '1',
                    hasMore: true
                });

                expect(contexts[1]).toStrictEqual({
                    data: [2, 3],
                    nextPageToken: '2',
                    hasMore: true
                });
                
                expect(contexts[2]).toStrictEqual({
                    data: [4, 5],
                    nextPageToken: '3',
                    hasMore: true
                });
            
                expect(contexts[3]).toStrictEqual({
                    data: [6],
                    nextPageToken: '',
                    hasMore: false
                });
                                
                expect(contexts[4]).toStrictEqual({
                    data: [],
                    nextPageToken: '',
                    hasMore: false
                });

                cb();
            }
        })

        parameters$.next({ type: 'ALL' })
        nextPage$.next();
        nextPage$.next();
        nextPage$.next();
        nextPage$.next();

        // TODO: fix
        setTimeout(() => {
            destroy$.next();
            sub.unsubscribe();
        }, 1000)
    })
})