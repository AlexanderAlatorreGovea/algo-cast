// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const capitalized = [];
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    const firstLetter = words[i][0].toUpperCase();
    const restOfWord = words[i].slice(1);

    capitalized.push(firstLetter + restOfWord);
  }

  return capitalized.join(" ");
}

console.log(capitalize("a lazy fox"));

module.exports = capitalize;
