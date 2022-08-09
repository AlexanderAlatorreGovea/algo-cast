// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }

function buildCharMap(string) {
  const charMap = {};

  for (let char of string) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function generateDocument(characters, document) {
  // Write your code here.

  const aCharMap = buildCharMap(characters);
  const bCharMap = buildCharMap(document);

  for (let char in bCharMap) {
    if (!aCharMap[char] || aCharMap[char] < bCharMap[char]) {
      return false;
    }
  }

  return true;
}

console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x", "AlgoExpert is the Best!")
);

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.toLowerCase()) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  return charMap;
}

function firstNonRepeatingCharacter(string) {
  // Write your code here.
  const strOneCharMap = buildCharMap(string);

  for (let char in strOneCharMap) {
    if (strOneCharMap[char] === 1) {
      return string.indexOf(char);
    }
  }

  return -1;
}

console.log(firstNonRepeatingCharacter("abcdcaf"));

function twoNumberSum(array, targetSum) {
  const numbers = {};
  const nums = []
  for (const num of array) {
    const potentialMatch = targetSum - num;
    
    if(potentialMatch in numbers) {
        return [potentialMatch, num]
    } else {
      numbers[num] = true
    }
  }

  return [];
}

console.log(twoNumberSum([-4, -1, 1, 3, 5, 6, 8, 11], 10));
