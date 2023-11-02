let phraseTwo =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(phraseTwo.search("love"));

let sentece =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentece.match("because"));

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let cleanSentence = sentence.replace(/[^\w\s]|_/g, ""); // punctuation removed
let words = cleanSentence.split(/\s/); // Array of words.  Any whitespace is a delimiter.
let wordFrequencies = new Map();
words.forEach(function (word) {
  if (!wordFrequencies.has(word)) wordFrequencies.set(word, 1);
  else wordFrequencies.set(word, wordFrequencies.get(word) + 1);
});

let maxFrequency = Math.max(...wordFrequencies.values()); // Find max frequency of any word.
let wordsMatchingMaxFrequency = Array.from(wordFrequencies.keys()).filter(
  (word) => {
    return wordFrequencies.get(word) === maxFrequency;
  }
);
console.log(wordsMatchingMaxFrequency);

let text =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
arr = text.match(/\d+/g);
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(arr[i]);
}
let totalAnnualIncome = arr[0] * 12 + arr[1] + arr[2] * 12;
console.log(totalAnnualIncome);
/* This code calculates the total annual 
income he earns*/
