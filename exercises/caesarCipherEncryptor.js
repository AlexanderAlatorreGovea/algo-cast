function caesarCipherEncryptor(string, key) {
  // Write your code here.
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const stringArray = string.split("");
  let newString = [];

  for (let i = 0; i < stringArray.length; i++) {
    newString.push(getLetterIdx(key, stringArray[i], alphabet));
  }

  return newString.join("");
}

function getLetterIdx(key, letter, alphabet) {
  const newIndex = alphabet.indexOf(letter) + key;

  return alphabet[newIndex % 26];
}

function runLengthEncoding(string) {
  // Write your code here.
  let newString = "";
  let counter = 1;

  for (let i = 0; i < string.length; i++) {
    let previousLetter = string[i];
    let nextLetter = string[i + 1];

    if (previousLetter !== nextLetter || counter === 9) {
      newString += counter + previousLetter;
      counter = 0;
    }

    counter++;
  }

  return newString;
}

runLengthEncoding("aaaabbbbcccc");

function charMap(string) {
  const obj = {};

  for (let char of string.toLowerCase()) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
 
  return obj;
}

function generateDocument(characters, document) {
  // Write your code here.
  const chars = charMap(characters);
  const docMap = charMap(document);

  for(let char in chars) {
      if(chars[char] !== docMap[char]) {
        return false
      }
  }

  return false;
}

console.log(
    generateDocument("Bste!hetsi ogEAxpelrt x", "AlgoExpert is the Best!")
)
