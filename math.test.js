const { add, subtract, multiply, divide } = require('./math');

test('adds 3 + 2 to equal 5', () => {
  expect(add(3, 2)).toBe(5);
});

test('subtracts 10 - 4 to equal 6', () => {
  expect(subtract(10, 4)).toBe(6);
});

test('multiplies 3 * 5 to equal 15', () => {
  expect(multiply(3, 5)).toBe(15);
});

test('divides 10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('throws error when dividing by 0', () => {
  expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});
