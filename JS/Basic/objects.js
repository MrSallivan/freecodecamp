// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj['an entree'];   // Change this line
const drinkValue = testObj['the drink'];    // Change this line

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails
// Only change code below this line

//////////////////////////////////
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank',
  }

  result = lookup[val]


  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

///////////////////////////////////////
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Alex Nikolaenko",
    "title": "Cool Music",
    "release_year": 1984,
    "formats": [
      'CD',
      'dvd',
      'USB'
    ]
  }
];

///////////////////////////////////////
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value
  } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) {
    records[id][prop] = [value]
  } else if (prop === 'tracks' && value !== "") {
    records[id][prop].push(value)
  } else if (value === "") {
    delete records[id][prop]
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

////////////////////////////////////////////////////
// Setup
const myArray = [];
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
// Only change code below this line
