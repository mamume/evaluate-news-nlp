const showResult = require('../client/js/showResult')


test('Testing showing result', () => {
    expect(showResult).toBeDefined();
});

test('Testing export type', () => {
    expect(typeof showResult).toBe('function')
})