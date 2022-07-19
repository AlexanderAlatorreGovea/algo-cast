// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
// str.replace(/[^\w]/g, "")

const convertToMap = (str) => {
  const normalizedStr = str.replace(/[^\w]/g, "").toLowerCase();
  const obj = {};

  for (const char of normalizedStr) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  return obj;
};

function anagrams(stringA, stringB) {
  const stringOne = convertToMap(stringA);
  const stringTwo = convertToMap(stringB);

  if (Object.entries(stringOne).length !== Object.entries(stringTwo).length) {
    return false;
  }

  for (const char in stringOne) {
    if (stringOne[char] === stringTwo[char]) {
      return true;
    }
  }

  return false;
}

console.log( anagrams('Hi there', 'Bye there'));

module.exports = anagrams;
