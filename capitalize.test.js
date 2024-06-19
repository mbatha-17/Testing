const capitalize = require('./capitalize');

describe('capitalize function', () => {
    
    test('capitalizes the first character of a string', () => {
        const input = 'hello';
        const expectedOutput = 'Hello';
        const result = capitalize(input);
        expect(result).toBe(expectedOutput);
    });

    test('handles string with only one character', () => {
        const input = 'a';
        const expectedOutput = 'A';
        const result = capitalize(input);
        expect(result).toBe(expectedOutput);
      });
});