function greet(name) {
  // null, undefined, and empty name
  if (!name || name.length === 0) {
    return 'Hello, my friend.';
  }

  // more than one names
  if (Array.isArray(name) && name.length > 1) {
    //const formattedNames = name.slice(0, -1).join(', ') + ' and ' + name.slice(-1);
    //return `Hello, ${formattedNames}.`;
    return greetmultiple(name);
  }

  // uppercase names
  if (name === name.toUpperCase()) {
    return `HELLO, ${name}!`;
  }

  return `Hello, ${name}.`;
}

function greetmultiple(names){
  const normalNames = [];
  const uppercaseNames = [];

  for (const name of names) {
    if (name === name.toUpperCase()) {
      uppercaseNames.push(name);
    } else {
      normalNames.push(name);
    }
  }

  let result = '';

  if (normalNames.length === 1) {
    result += `Hello, ${normalNames[0]}.`;
  }
  if (normalNames.length > 1) {
    const formattedNames = normalNames.slice(0, -1).join(', ') + ' and ' + normalNames.slice(-1);
    result += `Hello, ${formattedNames}.`;
  }

  if (uppercaseNames.length === 1) {
    result += ` AND HELLO ${uppercaseNames[0]}!`;
  }
  if (uppercaseNames.length > 1) {
    const formattedNames = uppercaseNames.slice(0, -1).join(', ') + ' AND ' + uppercaseNames.slice(-1);
    result += ` AND HELLO ${formattedNames}!`;
  }

  return result.trim();
}

module.exports = greet;
