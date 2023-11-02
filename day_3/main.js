//Exercises: Level 1-

//1:
let firstName = "Amberlie";
let lastName = "Hicken";
let country = "United States";
let city = "Tooele";
let age = "33";
let isMarried = true;
const newYear = new Date();
console.log(newYear.getFullYear());

console.log(firstName);
console.log(lastName);
console.log(country);
console.log(city);
console.log(age);
console.log(isMarried);
console.log(newYear);

//2:
console.log("10" === 10);

//3:
console.log(parseInt(9.8) === 10);

//4:
let lightOn = true;
let hungry = true;
let tired = true;

let night = false;
let wet = false;
let warm = false;

//5:
4 > 3; // true
4 >= 3; // true
4 < 3; // false
4 <= 3; // false
4 == 4; // true
4 === 4; // false **wrong = true
4 != 4; // false
4 !== 4; // false
4 != "4"; // false
4 == "4"; // true
4 === "4"; // false
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

let py = "python";
let jg = "jargon";
console.log(py.length);
console.log(jg.length);
console.log(py == jg);

//6:
4 > 3 && 10 < 12; // true
4 > 3 && 10 > 12; // false
4 > 3 || 10 < 12; // true
4 > 3 || 10 > 12; // true
!(4 > 3); // false
!(4 < 3); // true
!false; // true
!(4 > 3 && 10 < 12); // false
!(4 > 3 && 10 > 12); // true
!(4 === "4"); // true
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

let dg = "dragon";
let containOn = false;

console.log(containOn);

//7:
console.log(newYear.getFullYear()); //year

let newMonth = new Date();
console.log(newMonth.getMonth()); //month

const newDate = new Date();
console.log(newDate.getDate()); //date

const day = new Date();
console.log(day.getDay()); //day

const hour = new Date();
console.log(hour.getHours());

const timeMinutes = new Date();
console.log(timeMinutes.getMinutes());

const now = new Date();
console.log(now.getTime());

//Exercises: Level 2-
const today = new Date();
const year = today.getFullYear(); // return year
const month = today.getMonth() + 1; // return month(0 - 11)
const date = today.getDate(); // return date (1 - 31)
const hours = today.getHours(); // return number (0 - 23)
const minutes = today.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 4/1/2020 0:56
