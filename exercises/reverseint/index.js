// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const stringifiedNumber = n.toString();
  let isNegative = false;
  let reversedInteger = "";

  for (let num of stringifiedNumber) {
    if (num === "-") {
      isNegative = true;
      continue;
    }
    reversedInteger = num + reversedInteger;
  }

  return isNegative
    ? Math.abs(reversedInteger) * -1
    : Math.abs(reversedInteger);
}

console.log(reverseInt(-93));

module.exports = reverseInt;
