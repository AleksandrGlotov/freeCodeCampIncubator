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
