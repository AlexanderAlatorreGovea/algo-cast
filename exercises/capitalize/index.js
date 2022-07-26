// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const capitalizedSentence = [];

  for (let word of str.split(" ")) {
    const firstLetter = word[0];
    const restOfWord = word.slice(1, word.length);

    capitalizedSentence.push(firstLetter.toUpperCase() + restOfWord);
  }

  return capitalizedSentence.join(" ");
}

console.log(capitalize("a lazy fox"));

module.exports = capitalize;

