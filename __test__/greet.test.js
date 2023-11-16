const greet = require('../src/greet');

test('greet function', () => {
  expect(greet('Bob')).toBe('Hello, Bob.');
});
