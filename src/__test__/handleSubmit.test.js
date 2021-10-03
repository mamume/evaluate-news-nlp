import handleSubmit from '../client/js/handleSubmit'


test('Testing form submitting', () => {
    expect(handleSubmit).toBeDefined();
});

test('Testing export type', () => {
    expect(typeof handleSubmit).toBe('function')
})