const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line

const HIGH_TEMPERATURES1 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES1;

// Only change code above this line

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Only change code below this line

const {
  today: { low: lowToday, high: highToday1 },
} = LOCAL_FORECAST;

// Only change code above this line

let a = 8,
  b = 6;
// Only change code below this line
[a, b] = [b, a];

function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = arr.map((i) => `<li class="text-warning">${i}</li>`);

  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return { name, age, gender };
  // Only change code above this line
};

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'

// Only change code below this line
class Thermostat {
  constructor(temperature) {
    this._temperature = temperature;
  }

  get temperature() {
    return (5 / 9) * (this._temperature - 32);
  }
  set temperature(tempetatureC) {
    this._temperature = (tempetatureC * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

export const uppercaseString = (string) => {
  return string.toUpperCase();
};

export const lowercaseString = (string) => {
  return string.toLowerCase();
};

import { uppercaseString, lowercaseString } from "./string_functions.js";
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

export default function subtract(x, y) {
  return x - y;
}

import subtract from "./math_functions.js";
// Only change code above this line

subtract(7, 4);
