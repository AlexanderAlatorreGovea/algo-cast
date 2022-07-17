// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversedString = "";
  for (let char of str) {
    reversedString = char + reversedString;
  }

  return reversedString;
}

module.exports = reverse;
