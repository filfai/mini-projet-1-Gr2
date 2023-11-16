const greet = require('../src/greet');

test('greet function', () => {
  expect(greet('Bob')).toBe('Hello, Bob.');

  expect(greet(null)).toBe('Hello, my friend.');
  expect(greet(undefined)).toBe('Hello, my friend.');
  expect(greet('')).toBe('Hello, my friend.')

  expect(greet('JERRY')).toBe('HELLO, JERRY!');
  
  expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.');
  
  expect(greet(['Amy', 'Brian', 'Charlotte'])).toBe('Hello, Amy, Brian and Charlotte.')
  
  expect(greet(['Amy', 'BRIAN'])).toBe('Hello, Amy. AND HELLO BRIAN!');
  expect(greet(['Amy', 'BRIAN', 'Charlotte'])).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!');

});
