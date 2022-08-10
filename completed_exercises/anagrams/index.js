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
  const nums = [];
  for (const num of array) {
    const potentialMatch = targetSum - num;

    if (potentialMatch in numbers) {
      return [potentialMatch, num];
    } else {
      numbers[num] = true;
    }
  }

  return [];
}

function sortedSquaredArray(array) {
  // Write your code here.
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const squared = array[i] * array[i];
    newArray.push(squared);
  }

  return newArray;
}
console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));

function tournamentWinner(competitions, results) {
  let currentBestTeam = "";
  const currentWinner = { [currentBestTeam]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    const winner = results[i] === 0 ? competitions[i][1] : competitions[i][0];

    updateCompetitions(winner, currentWinner);

    if (currentWinner[winner] > currentWinner[currentBestTeam]) {
      currentBestTeam = winner;
    }
  }

  return currentBestTeam;
}

function updateCompetitions(team, scores, points) {
  if (!team in scores) scores[team] = 0;

  scores[team] += 3;
}

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);

  let currentChange = 0;

  for (let coin of coins) {
    currentChange += coin;

    if (currentChange + 1 < coin) {
      return currentChange + 1;
    }
  }

  return currentChange + 1;
}

console.log(nonConstructibleChange([1, 1, 2, 3, 5, 7, 22]));

var x = 22;
console.log(x);
if (true) {
  console.log(x);
  var x = 0;
  console.log(x);
}

console.log(!"");

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name);

    for (const child of this.children) {
      child.depthFirstSearch(array);
    }

    return array;
  }
}

function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < queries.length; i++) {
    let queriesLeft = queries.length - (i + 1);

    sum += queries[i] * queriesLeft;
  }

  console.log(sum);
}

minimumWaitingTime([1, 2, 2, 3, 6]);
