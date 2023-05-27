let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

let difficultSpelling = "Mississippi";
let myRegex1 = /s+/g; // Change this line
let result1 = difficultSpelling.match(myRegex1);

// Only change code below this line
let chewieRegex = /Aa*/g; // Change this line
// Only change code above this line

let result2 = chewieQuote.match(chewieRegex);

let text = "<h1>Winter is coming</h1>";
let myRegex2 = /<[a-z1]*?>/; // Change this line
let result3 = text.match(myRegex2);

let reCriminals = /C+/; // Change this line

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result4 = calRegex.test(rickyAndCal);

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result5 = lastRegex.test(caboose);

let quoteSample1 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result6 = quoteSample1.match(alphabetRegexV2).length;

let quoteSample2 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result7 = quoteSample2.match(nonAlphabetRegex).length;

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result8 = movieName.match(numRegex).length;

let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result9 = movieName1.match(noNumRegex).length;

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result10 = userCheck.test(username);

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result11 = sample.match(countWhiteSpace);