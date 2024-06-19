const stringLength = require('./stringFunctions');

describe('stringLength', () => {
    test('returns the correct length of a string', () => {

        const input = 'hello';
        const expectedOutput = 5;
        const output = stringLength(input);
        expect(output).toBe(expectedOutput);
    });

    test('returns length for string of length 1', () => {

        const input = 'a';
        const expectedOutput = 1;
        const output = stringLength(input);
        expect(output).toBe(expectedOutput);
    });

    test('returns length for string of length 7', () => {

        const input = 'abcdefg'
        const expectedOutput = 7;
        const output =stringLength(input);
        expect(output).toBe(expectedOutput);
    });
});