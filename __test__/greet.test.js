const greet = require('../src/greet');

test('greet function', () => {
  expect(greet('Bob')).toBe('Hello, Bob.');

  expect(greet(null)).toBe('Hello, my friend.');
  expect(greet(undefined)).toBe('Hello, my friend.');
  expect(greet('')).toBe('Hello, my friend.')

  expect(greet('JERRY')).toBe('HELLO, JERRY!');
});
