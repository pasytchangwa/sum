const Calculator = require('./calculator');

describe('the calculator is working', () => {
  const calc = new Calculator();
  test('it sum correctly', () => {
    expect(calc.sum(3, 7)).toBe(10);
  })
  test('it divide correctly', () => {
    expect(calc.divide(10, 2)).toBe(5);
  })
  test('it substract correctly', () => {
    expect(calc.substract(6, 4)).toBe(2);
  })
  test('it multiply correctly', () => {
    expect(calc.multiply(6, 4)).toBe(24);
  })
});