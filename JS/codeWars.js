function isPangram(string) {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  string = string.toLowerCase().split("");
  return alphabet.every((i) => string.includes(i));
}

function sortArray(array) {
  const odds = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odds.shift() : x));
}

function findMissingLetter(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1].charCodeAt() - array[i].charCodeAt() > 1) {
      return String.fromCharCode(array[i].charCodeAt() + 1);
    }
  }
}

function towerBuilder(nFloors) {
  let build = [];
  for (let i = 1; i <= nFloors; i++) {
    build.push(
      " "
        .repeat(nFloors - i)
        .concat("*".repeat((i - 1) * 2 + 1))
        .concat(" ".repeat(nFloors - i))
    );
  }
  return build;
}

function high(x) {
  let arr = x.split(" ");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j].charCodeAt() - 96;
    }
    result.push([arr[i], sum]);
  }
  return result.sort((a, b) => b[1] - a[1])[0][0];
}
