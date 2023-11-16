const greet = require('../src/greet');

test('greet function', () => {
  expect(greet('Spongebob')).toBe('Hello, Spongebob.');
  expect(greet(null)).toBe('Hello, my friend.');
  expect(greet(undefined)).toBe('Hello, my friend.');
  expect(greet('')).toBe('Hello, my friend.');
  expect(greet('SPONGEBOB')).toBe('HELLO, SPONGEBOB!');
  expect(greet(['Spongebob', 'Patrick'])).toBe('Hello, Spongebob and Patrick.');
  expect(greet(['SPONGEBOB', 'Patrick'])).toBe('Hello, Patrick. AND HELLO, SPONGEBOB!');
  expect(greet(['Spongebob', 'Patrick', 'SQUIDDY'])).toBe('Hello, Spongebob and Patrick. AND HELLO, SQUIDDY!');
  expect(greet(['SPONGEBOB', 'Patrick', 'Squiddy'])).toBe('Hello, Patrick and Squiddy. AND HELLO, SPONGEBOB!');
  
  
  expect(greet(['Spongebob', 'fr'])).toBe('Bonjour, Spongebob.');
  expect(greet([null, 'fr'])).toBe('Bonjour, mon ami.');
  expect(greet([undefined, 'fr'])).toBe('Bonjour, mon ami.');
  expect(greet(['', 'fr'])).toBe('Bonjour, mon ami.');
  expect(greet(['SPONGEBOB', 'fr'])).toBe('BONJOUR, SPONGEBOB!');
  expect(greet(['Spongebob', 'Patrick', 'fr'])).toBe('Bonjour, Spongebob et Patrick.');
  expect(greet(['SPONGEBOB', 'Patrick', 'fr'])).toBe('Bonjour, Patrick. ET BONJOUR, SPONGEBOB!');
  expect(greet(['Spongebob', 'Patrick', 'SQUIDDY', 'fr'])).toBe('Bonjour, Spongebob et Patrick. ET BONJOUR, SQUIDDY!');
  expect(greet(['SPONGEBOB', 'Patrick', 'Squiddy', 'fr'])).toBe('Bonjour, Patrick et Squiddy. ET BONJOUR, SPONGEBOB!');

});
