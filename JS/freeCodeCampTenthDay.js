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

function spinalCase(str) {
  return str
    .replace(/[^A-Za-z]+/g, " ")
    .split(/\s|(?=[A-Z])/)
    .map((i) => i[0].toLowerCase() + i.slice(1))
    .join("-");
}
spinalCase("This Is Spinal Tap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("AllThe-small Things");
spinalCase("thisIsSpinalTap");

function translatePigLatin(str) {
  if (/[aeiou]/.test(str[0])) {
    return str + "way";
  } else {
    for (let i = 0; i < str.length; i++) {
      if (/[aeiou]/.test(str[i])) {
        return str.slice(i) + str.slice(0, i) + "ay";
      }
    }
  }
  if (!/[aeiou]/.test(str)) {
    return str + "ay";
  }
}

translatePigLatin("consonant");

function myReplace(str, before, after) {
  if (before[0] == before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1)
  } else {
    after = after[0].toLowerCase() + after.slice(1)
  }
  return str.replace(before, after)
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

function pairElement(str) {
  let result = []
  str.split("").map(i => {
    if (i == "A") {
      result.push(["A", "T"])
    } else if (i == "T") {
      result.push(["T", "A"])
    } else if (i == "C") {
      result.push(["C", "G"])
    } else {
      result.push(["G", "C"])
    }
  })
  return result;
}

pairElement("GCG");
