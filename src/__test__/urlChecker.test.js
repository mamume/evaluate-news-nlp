import urlChecker from '../client/js/urlChecker'

test('https://jestjs.io/ should be true', () => {
    expect(urlChecker('https://jestjs.io/')).toBe(true)
})

test('invaildURL should be false', () => {
    expect(urlChecker('invaildURL')).toBe(false)
})
