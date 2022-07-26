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
//         c0c1c2c3c4
//       r0'  #  ' 3 - 0 = 3
//       r1'0###4' 3 - 1 = 2
//       r2'#####'

// calculate the midpoint as the center index
// put a pound inside the right and left side of the
// array of numbers

//we iterate to row 0 and we want to fill everything
//to the left of the midpoint and check if the midpoint

function pyramid(n) {
  const columnsToIterateThrough = n * 2 - 1;
  const midPoint = Math.floor((n * 2 - 1) / 2);

  for (let row = 0; row < n; row++) {
    let stairs = "";

    for (let column = 0; column < columnsToIterateThrough; column++) {
      const leftSideOfPyramid = midPoint - row <= column;
      const rightSideOfPyramid = midPoint + row >= column;

      if (leftSideOfPyramid && rightSideOfPyramid) {
        stairs += "+";
      } else {
        stairs += " ";
      }
    }

    console.log(stairs);
  }
}
console.log(pyramid(3));

module.exports = pyramid;

console.log(pyramid(3));
