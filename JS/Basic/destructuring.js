const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
const {today, tomorrow} = HIGH_TEMPERATURES

// Only change code above this line

///////////////////////////////
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
const {today:highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES

// Only change code above this line

///////////////////////////////////////
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const {today:{low: lowToday, high: highToday}} = LOCAL_FORECAST



//const lowToday = LOCAL_FORECAST.today.low;
//const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line

//////////////////////////////////////////
Use Destructuring Assignment to Assign Variables from Arrays

let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a]

/////////////////////////////////////////////
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0; 
// Only change code above this line


Write Concise Object Literal Declarations Using Object Property Shorthand

ES6 adds some nice support for easily defining object literals.

Consider the following code:

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

const getMousePosition = (x, y) => ({ x, y });

Use object property shorthand with object literals to create and return an object with name, age and gender properties.
const createPerson = (name, age, gender) => ({name, age,gender})



//////////////////////////////////////
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
