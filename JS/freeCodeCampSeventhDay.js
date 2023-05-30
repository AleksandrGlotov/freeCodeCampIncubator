function convertCtoF(celsius) {
  let fahrenheit = (9 * celsius) / 5 + 32;
  return fahrenheit;
}

convertCtoF(30);

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

function factorialize(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

factorialize(5);

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((i) => i.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let bigest = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > bigest) {
        bigest = arr[i][j];
      }
    }
    result.push(bigest);
  }
  return result;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

function confirmEnding(str, target) {
  return str.slice(-target.length) == target;
}

confirmEnding("Bastian", "n");

function repeatStringNumTimes(str, num) {
  if (num > 0) {
    let result = [];
    for (let i = 1; i <= num; i++) {
      result = [...result, ...str];
    }
    return result.join("");
  } else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);

function truncateString(str, num) {
  if (str.length > num) {
    return `${str.slice(0, num)}...`;
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
