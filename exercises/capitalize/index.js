// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const stringOfWords = [];
  const splitStr = str.split(" ");

  for (let word of splitStr) {
    let firstLetter = word[0].toUpperCase();
    let secondHalfOfWord = word.slice(1);

    stringOfWords.push(firstLetter + secondHalfOfWord);
  }

  return stringOfWords.join(" ");
}

console.log(capitalize("a lazy fox"));

module.exports = capitalize;
