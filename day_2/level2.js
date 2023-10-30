let quote =
  "There is no exercise better for the heart than reaching down and lifting people up.";
console.log(quote);

let quote2 =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(quote2);

let a = 10;
console.log(typeof 10);

let b = 10;
let numFloat = parseFloat(b);
let numInt = parseInt(b);
console.log(numInt);

let word = "JavaScript";
let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo);

let js = "JavaScript";
let py = "Python";
console.log(js == py);

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff);

let quote3 = "I hope this course is not full of jargon!";
console.log(quote3.search("jargon"));

randomNumber = Math.random();
let numBtnZeroAnd100 = randomNumber * 101;
let randomNumRoundToFoor = Math.floor(numBtnZeroAnd100);
console.log(randomNumRoundToFoor);

let numBtnFiftyAndOneHundred = Math.floor(Math.random() * (100 - 50) + 50);
console.log(numBtnFiftyAndOneHundred);

let numBtnZeroAndTwoHundredAndFiftyFive = randomNumber * 256;
let roundedToFloor = Math.floor(numBtnZeroAndTwoHundredAndFiftyFive);
console.log(roundedToFloor);

let string = "JavaScript";
let randomStringNum = Math.floor(Math.random() * 10);
console.log(randomStringNum);

let patternOne = "1 1 1 1 1";
let patternTwo = "2 1 2 4 8";
let patternThree = "3 1 3 9 27";
let patternFour = "4 1 4 16 64";
let patternFive = "5 1 5 25 125";
let print = patternOne + patternTwo + patternThree + patternFour + patternFive;

console.log(print);

let phrase =
  "You cannot end a sentence with because because because is a conjunction";
console.log(phrase.substr(30, 25));
