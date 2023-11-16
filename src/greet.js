function greet(name) {

  var language = 'en'
  var helloString = 'Hello, '
  var hello2String = 'HELLO, '
  var myfriendString = 'my friend.'

  var containLanguage = (Array.isArray(name) && (name[name.length-1] === 'en' || name[name.length-1] === 'fr' || name[name.length-1] === 'nl'))

   if (containLanguage) {
    if (name[name.length-1] === 'fr'){
      language = 'fr'
      helloString = 'Bonjour, '
      hello2String = 'BONJOUR, '
      myfriendString = 'mon ami.'
    }
    if (name[name.length-1] === 'nl'){
      language = 'nl'
      helloString_nl = 'Hallo, '
      hello2String_nl = 'HALLO, '
      myfriendString_nl = 'mijn vriend.'
    }
   }
   
   if (containLanguage){
    var name2 = new Array(name.length-1);
    for (let i = 0; i < name.length-1; i++) {
      name2[i] = name[i];
    }
    name = name2;
   }

  // null, undefined, and empty name
  if (!name || name.length === 0 || !name[0]) {
    return helloString + myfriendString;
  }

  // more than one names
  if (Array.isArray(name) && name.length > 1) {
    return greetmultiple(name, language);
  }

  // uppercase names
  if ((typeof name === 'string' && name === name.toUpperCase()) || (Array.isArray(name) && typeof name[0] === 'string' && name[0] === name[0].toUpperCase())) {
    return hello2String + `${name}!`;
  }

  return helloString + `${name}.`;
}

function greetmultiple(names, language){

  var helloString = 'Hello, '
  var hello2String = 'HELLO, '
  var andString = ' and '
  var and2String = ' AND '
  var myfriendString = 'my friend.'

    if (language === 'fr'){
      helloString = 'Bonjour, '
      hello2String = 'BONJOUR, '
      andString = ' et '
      and2String = ' ET '
      myfriendString = 'mon ami.'
    }
    if (language === 'nl'){
      helloString_nl = 'Hallo, '
      hello2String_nl = 'HALLO, '
      andString_nl = ' en '
      and2String_nl = ' EN '
      myfriendString_nl = 'mijn vriend.'
    }

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
    result += helloString + normalNames[0] + '.';
  }
  if (normalNames.length > 1) {
    const formattedNames = normalNames.slice(0, -1).join(', ') + andString + normalNames.slice(-1);
    result += helloString + formattedNames + '.';
  }

  if (uppercaseNames.length === 1) {
    result += and2String +  hello2String + uppercaseNames[0] + '!';
  }
  if (uppercaseNames.length > 1) {
    const formattedNames = uppercaseNames.slice(0, -1).join(', ') + and2String + uppercaseNames.slice(-1);
    result += and2String +  hello2String + formattedNames + '!';
  }

  return result.trim();
}

module.exports = greet;
