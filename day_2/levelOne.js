let challenge = "30 Days Of JavaScript";
console.log(challenge);

console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(2, 7));
console.log(challenge.slice(3, 22));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));

let sites = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(sites.split(","));

console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let conjunction =
  "You cannot end a sentence with because because because is a conjunction";
console.log(conjunction.indexOf("because"));
console.log(conjunction.lastIndexOf("because"));
console.log(conjunction.search("because"));

console.log(challenge.trim());
console.log(challenge.startsWith(3));
console.log(challenge.endsWith("t"));
console.log(challenge.match("a"));
console.log(challenge.concat("30", "Days", "of", "JavaScript"));
console.log(challenge.repeat(2));
