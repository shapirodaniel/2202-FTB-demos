// objects can be considered "dictionaries"
// they consist of key-value pairs
// and they give fast access to values that aren't organized sequentially

const myDictionary = {
  arcane: 'understood by few; mysterious or secret',
  arrow: 'a pointy piece of wood used for hunting and sport',
  'asking price': 'the price at which something is offered for sale',
  astute:
    "having or showing an ability to accurately assess situations or people and turn this to one's advantage",
};

// bracket access
myDictionary['arcane']; // yields 'understood by few; mysterious or secret'

// dot notation access
myDictionary.arcane; // yields the same thing

// if key contains characters that aren't permitted in JS variables
// you must use single quotes in the object key
// and bracket access, not dot notation access
myDictionary['asking price']; // yields 'the price at which something is offered for sale'

typeof myDictionary; // yields 'object'

// adding values through dot and bracket notation
myDictionary.atlas = 'a book of maps or charts';
// logging via JSON.stringify()
console.log(JSON.stringify(myDictionary, null, 2));

myDictionary['attend'] =
  'to be present at (an event, meeting or function); deal with';
// logging via console.dir()
console.dir(myDictionary, { depth: null });

// checking for the existence of an object key
console.log('attend' in myDictionary); // returns true
console.log('beeswax' in myDictionary); // returns false

// adding a key NAMED "key" to myDictionary
myDictionary.key = 777;

// for-in loop
for (const key in myDictionary) {
  // logs key name, eg "atlas"
  console.log(`key is ${key}`);

  // logs value through bracket access, ie myDictionary["atlas"]
  console.log(
    `bracket value is ${
      typeof myDictionary[key] === 'string'
        ? myDictionary[key].slice(0, 20) + '...'
        : myDictionary[key]
    }`
  );

  // logs value through dot notation access
  // notice! this prints 777 over and over again
  // in a for-in loop, you MUST use bracket access to use the value of
  // the key variable in each iteration
  // otherwise, you'll be accessing a literal key named "key"
  // which, in our case, is 777 :)
  console.log(`dot value is ${myDictionary.key}\n\n`);
}

// Object.keys(myObject) returns an array of keys
console.log(Object.keys(myDictionary)); // yields ["arcane", "arrow", ...]

// Object values can be whatever JS expression you like
// often, we fetch data from remote servers that come as
// lists of objects, which may have their own dependent lists
const user = {
  id: 17,
  name: 'lily',
  username: 'lilyBilly',
  email: 'lily@mail.com',
  interests: {
    walks: {
      frequency: 'twice daily',
      favoriteRoute: 'beach',
    },
    'tug-of-war': {
      frequency: '3-4x daily',
      favoriteToys: ['reindeer', 'starfish', 'octopus'],
    },
    naps: {
      frequency: 'continuous',
      favoriteSpots: ['top of couch', 'doggie bed', 'comfy circle'],
    },
    dinner: {
      frequency: 'once daily',
      favoriteKind: 'hill science chicken and barley',
    },
  },
  friends: [
    {
      id: 18,
      name: 'albert',
      // ISO-8601 timestamp
      // to parse, call const myDate = new Date(<timestamp-goes-here>)
      // and log out myDate as well as myDate.toLocaleDateString()
      friendsSince: '2018-11-24T20:50:48-0600',
    },
    {
      id: 19,
      name: 'felix',
      friendsSince: '2018-11-24T20:50:48-0600',
    },
    {
      id: 20,
      name: 'wally',
      friendsSince: '2018-11-24T20:50:48-0600',
    },
    {
      id: 20,
      name: 'beatrice',
      friendsSince: '2018-11-24T20:50:48-0600',
    },
  ],
};

// helper function returns a favorites key
// accepts an interest: string
function getFavoritesByInterest(interest) {
  // "short circuit": using a logical OR operator to guarantee
  // the type of an expression that COULD be undefined
  // if we supply an interest that isn't found in our "user" object
  // we need to guard against a TypeError thrown by Object.keys()
  const keys = Object.keys(user.interests[interest] /* || {} */);

  for (let i = 0; i < keys.length; i++) {
    const currentKey = keys[i];

    if (currentKey.indexOf('favorite') >= 0) {
      return user.interests[interest][currentKey];
    }
  }

  return `interest "${interest}" not found!`;
}

console.log(getFavoritesByInterest('dinner'));
console.log(getFavoritesByInterest('walks'));
console.log(getFavoritesByInterest('tug-of-war'));
console.log(getFavoritesByInterest('naps'));

// this key doesn't exist
console.log(getFavoritesByInterest('pizza'));
