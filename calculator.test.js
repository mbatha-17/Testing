
const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });


  describe('add', () => { 

    test('adds two positive numbers', () => { 
      const a = 5, b = 3, expectedOutput = 8;
      const result = calculator.add(a, b);
      expect(result).toBe(expectedOutput);
    });

    test('adds two negative numbers', () => {
      const a = -5, b = -3, expectedOutput = -8;
      const result = calculator.add(a, b);
      expect(result).toBe(expectedOutput);
    });

    test('adds a positive and a negative number', () => {
      const a = 5, b = -3, expectedOutput = 2;
      const result = calculator.add(a, b);
      expect(result).toBe(expectedOutput);
    });
  });


  describe('subtract', () => {

    test('subtracts two positive numbers', () => {
      const a = 5, b = 3, expectedOutput = 2;
      const result = calculator.subtract(a, b);
      expect(result).toBe(expectedOutput);
    });

    test('subtracts two negative numbers', () => {
      const a = -5, b = -3, expectedOutput = -2;
      const result = calculator.subtract(a, b);
      expect(result).toBe(expectedOutput);
    });

    test('subtracts a positive and a negative number', () => {
      const a = 5, b = -3, expectedOutput = 8;
      const result = calculator.subtract(a, b);
      expect(result).toBe(expectedOutput);
    });
  });


  describe('multiply', () => {

    test('multiplies two positive numbers', () => {
      const a = 5, b = 3, expectedOutput = 15;
      const result = calculator.multiply(a, b);
      expect(result).toBe(expectedOutput);
    });

    test('multiplies two negative numbers', () => {

      const a = -5, b = -3, expectedOutput = 15;
      const result = calculator.multiply(a, b);
      expect(result).toBe(expectedOutput);
    });

    test('multiplies a positive and a negative number', () => {
    
      const a = 5, b = -3, expectedOutput = -15;
      const result = calculator.multiply(a, b);
      expect(result).toBe(expectedOutput);
    });
  });


  describe('divide', () => {

    test('divides two positive numbers', () => {
      const a = 6, b = 3, expectedOutput = 2;
      const result = calculator.divide(a, b);
      expect(result).toBe(expectedOutput);
    });

    test('divides two negative numbers', () => {
      const a = -6, b = -3, expectedOutput = 2;
      const result = calculator.divide(a, b);
      expect(result).toBe(expectedOutput);
    });

    test('throws error when dividing by zero', () => {
      const a = 5, b = 0;
      expect(() => calculator.divide(a, b)).toThrow('Cannot divide by zero');
    });
  });
});
