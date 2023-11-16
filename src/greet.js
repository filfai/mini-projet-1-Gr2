function greet(name) {
  // null, undefined, and empty name
  if (!name || name.length === 0) {
    return 'Hello, my friend.';
  }

  // two names
  if (name.length === 2) {
    return `Hello, ${name[0]} and ${name[1]}. `;
  }

  // uppercase names
  if (name === name.toUpperCase()) {
    return `HELLO, ${name}!`;
  }

  return `Hello, ${name}.`;
}

module.exports = greet;
