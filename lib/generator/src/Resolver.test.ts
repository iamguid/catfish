import { getPathPreffix } from "./Resolver"

describe('Resolver', () => {
    [
        { source: '/a/b/c', target: '/a/b/c', result: './' },
        { source: '/a/e/f', target: '/a/b/c', result: './../../b/c' },
        { source: '/a/e/c', target: '/a/b/c', result: './../../b/c' },
        { source: '/a/b/f', target: '/a/b/c', result: './../c' },
        { source: '/d/e/f', target: '/a/b/c', result: './../../../a/b/c' },
        { source: '/c/b/a', target: '/a/b/c', result: './../../../a/b/c' },
        { source: '/a/b/c/d/e', target: '/a/b/c', result: './../../' },
        { source: '/a/b/c', target: '/a/b/c/d/e', result: './d/e' },
    ].forEach((arg) => {
        it(`getPathPreffix(source: ${arg.source}, target: ${arg.target}) should be ${arg.result}`, () => {
            expect(getPathPreffix(arg.source, arg.target)).toBe(arg.result);
        })
    })
})