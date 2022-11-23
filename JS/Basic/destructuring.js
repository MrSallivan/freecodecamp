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
