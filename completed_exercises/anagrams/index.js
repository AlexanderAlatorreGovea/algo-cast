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

// red [1, 3, 4]
// blue [2, 4, 5]

function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  // back taller
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  const tallestStudents =
    redShirtHeights[0] > blueShirtHeights[0] ? "RED" : "BLUE";

  for (let i = 0; i < blueShirtHeights.length; i++) {
    if (tallestStudents === "RED") {
      if (redShirtHeights[i] >= blueShirtHeights[i]) {
        return true;
      }
    } else if (tallestStudents === "BLUE") {
      if (redShirtHeights[i] <= blueShirtHeights[i]) {
        return true;
      }
    }
  }

  return false;
}

console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]));

// [1, 4]
// [5, 3]

// [1, 2, 3, 6, 7]

// [2, 3, 5, 5, 9]
// [7, 6, 3, 2, 1]

//  7, 6, 5, 5, 9

function getNthFib(n) {
  // Write your code here.
  const array = [0, 1];

  for (let i = 2; i <= n; i++) {
    const previous = array[i - 1];
    const previousTwo = array[i - 2];

    array.push(previous + previousTwo);
  }
  console.log(array);
  // 6 - 1 + 5 - 2
  return array[n - 1];
}

console.log(getNthFib(6));

function getNthFib(n) {
  // Write your code here.
  const array = [0, 1];

  for (let i = 2; i <= n; i++) {
    const previous = array[i - 1];
    const previousTwo = array[i - 2];

    array.push(previous + previousTwo);
  }
  console.log(array);
  return array[n - 1];
}

console.log(getNthFib(6));

var a = 1;
let b = 2;
const c = 3;

const d = {};
const e = d;
d.id = 3;
console.log(e);

const arr = [1, 2, 3];

console.log(arr.map((item) => item * 2));

const name = [];

if (!name.length) {
  console.log("hello");
}

const obj = {
  name: "alex",
  last: function () {
    console.log(this.name);
  },
};

console.log(obj.last());

const exampleObject = {
  first: "alex",
  last: "govea",
  fullName() {
    return `${this.first} ${this.last}`;
  },
  full: function () {
    return `${this.first}`;
  },
  fullArrow: () => {
    return `${this.first}`;
  },
};

console.log(exampleObject);
console.log(exampleObject.fullName());
console.log(exampleObject.full());
console.log(exampleObject.fullArrow());
console.log(0 == false);
console.log(5 == "5");
console.log(5 + "5");
console.log(Number(0));

function binarySearch(array, target) {
  // Write your code here.
 
  return binarySearchHelper(array, target, 0, array.length - 1);
}

const str = 'abcde'

for (let index = 0; index < str.length; index++) {
  const element = str[index];
  console.log(element)
}


// gotchas with typeof

console.log(typeof NaN === 'number')
console.log(typeof [] === 'object')
console.log(typeof new Date() === 'object')
console.log(typeof /regex/ === 'object')
console.log(typeof null === 'object')
console.log(typeof Math.sin === 'function')
console.log(typeof function(){} === 'function')

// to solve the null issue
console.log(null instanceof Object)

const obj22 = {
  name: 'alex',
  last: 'govea'
}
const array = [1, 3]
delete obj22.name
delete array[0]
console.log(obj22)
console.log(array)
console.log(typeof array[0]) // undefined
