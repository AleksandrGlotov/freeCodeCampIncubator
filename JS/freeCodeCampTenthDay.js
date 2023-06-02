function sumAll(arr) {
  let sum = 0;
  arr.sort((a, b) => a - b);
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
    console.log(arr[i], sum, arr);
  }
  return sum;
}

sumAll([1, 4]);

function diffArray(arr1, arr2) {
  return arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((x) => !arr1.includes(x)));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

function destroyer(arr) {
  for (let i = 1; i < arguments.length; i++) {
    arr = arr.filter((number) => number != arguments[i]);
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function whatIsInAName(collection, source) {
  const souceKeys = Object.keys(source);

  return collection.filter((obj) => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (obj[souceKeys[i]] !== source[souceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], { apple: 1 });
