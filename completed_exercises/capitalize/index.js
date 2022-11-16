// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;

function capitalizeOne(str) {
  const arrayOfStrings = str.split(" ");
  const newString = [];

  for (let word of arrayOfStrings) {
    const firstLetter = word.slice(0, 1).toUpperCase();
    const secondLetter = word.slice(1, word.length);

    newString.push(firstLetter + secondLetter);
  }

  return newString.join(" ").toString();
}

console.log(
  capitalizeOne('a new dog')
)