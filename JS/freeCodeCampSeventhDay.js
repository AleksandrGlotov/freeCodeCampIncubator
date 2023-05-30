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

function booWho(bool) {
  return typeof bool == "boolean" ? true : false;
}

booWho(null);

function titleCase(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  return arr.join(" ");
}

titleCase("I'm a little tea pot");

function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

function bouncer(arr) {
  return arr.filter(
    (i) => i != NaN && i != undefined && i != null && !!i != false
  );
}

bouncer([7, "ate", "", false, 9]);

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  if (arr.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) {
        console.log(i);
        return i;
      }
    }
  }
  if (arr[arr.length - 1] < num) {
    return arr.length;
  }
}

getIndexToIns([], 50);

function mutation(arr) {
  let first = arr[0].split("").map((i) => i.toLowerCase());
  let second = arr[1].split("").map((i) => i.toLowerCase());
  for (let i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) == -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "Hello"]);

function chunkArrayInGroups(arr, size) {
  let count = Math.ceil(arr.length / size);
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(arr.slice(i * size, i * size + size));
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
