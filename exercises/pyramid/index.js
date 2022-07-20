// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//         ccccc
//       r'  #  '
//       r' ### '
//       r'#####'

// calculate the midpoint as the center index
// put a pound inside the right and left side of the
// array of numbers

//we iterate to row 0 and we want to fill everything
//to the left of the midpoint and check if the midpoint

function pyramid(n) {
  const midPoint = Math.floor((n * 2 - 1) / 2);
  const columnsToIterate = n * 2 - 1;

  for (let row = 0; row < n; row++) {
    let step = "";

    for (let column = 0; column < columnsToIterate; column++) {
      const leftSideIsEmpty = midPoint - row <= column;
      const rightSideIsEmpty = midPoint + row >= column;

      if (leftSideIsEmpty && rightSideIsEmpty) {
        step += "#";
      } else {
        step += " ";
      }
    }

    console.log(step);
  }
}

pyramid(3);

module.exports = pyramid;
