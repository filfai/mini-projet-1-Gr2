function greet(name) {
  // null, undefined, and empty name
  if (!name) {
    return 'Hello, my friend.';
  }

  // uppercase names
  if (name === name.toUpperCase()) {
    return `HELLO, ${name}!`;
  }

  return `Hello, ${name}.`;
}

module.exports = greet;
