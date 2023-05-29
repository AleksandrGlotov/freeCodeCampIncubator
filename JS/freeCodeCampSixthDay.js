let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a);

let sumAB = a + b;
console.log(sumAB);

let output =
  "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

let x = 7;
let y = 9;
let result = "to come";

if (x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result1 = getNine();
console.log(result1);

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
    // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();
