const greet = require('../src/greet');

test('greet function should return a simple greeting', () => {
  expect(greet('Bob')).toBe('Hello, Bob.');
});