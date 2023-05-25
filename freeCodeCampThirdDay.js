// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 11);

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] == name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else return "No such property";
    }
  }
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");

function randomFraction() {
  // Only change code below this line
  return Math.random();
  return 0;

  // Only change code above this line
}

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);

// Only change code below this line
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
