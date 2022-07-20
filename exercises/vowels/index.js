// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
//
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const letters = { a: "a", e: "e", i: "i", o: "o", u: "u" };
  let letterCount = 0;

  for (let char of str) {
    if (letters[char]) {
      letterCount++;
    }
  }

  return letterCount;
}

console.log(vowels('Hi There!'));

module.exports = vowels;
