// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const convertToMap = (str) => {
  const stringWithoutEmptyCharacters = str.replace(/[^\w]/g, "").toLowerCase();
  const obj = {};

  for (let char of stringWithoutEmptyCharacters) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  return obj;
};

function anagrams(stringA, stringB) {
  const firstCharMap = convertToMap(stringA);
  const secondCharMap = convertToMap(stringB);
  let isAnagram = true;
  const hasSameAmountOfValues =
    Object.entries(firstCharMap).length !==
    Object.entries(secondCharMap).length;

  if (hasSameAmountOfValues) {
    return !isAnagram;
  }

  for (let char in firstCharMap) {
    if (firstCharMap[char] === secondCharMap[char]) {
      return isAnagram;
    }
  }

  return !isAnagram;
}

console.log(anagrams("rail safety", "fairy tales"));

module.exports = anagrams;
