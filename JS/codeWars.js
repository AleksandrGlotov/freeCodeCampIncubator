function isPangram(string) {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  string = string.toLowerCase().split("");
  return alphabet.every((i) => string.includes(i));
}
