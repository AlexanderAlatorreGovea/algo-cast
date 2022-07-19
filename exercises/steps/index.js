// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// matrix
//think in terms of index
// 2 d array
// think in terms of row
// if the column is less than the row or equal then add pound

// [C0 r0] [C0 r1] //column is less than or equal to row
// [C0 r1] [C1 r1]

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stairs = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stairs += "#";
      } else {
        stairs += " ";
      }
    }

    console.log(stairs);
  }
}
steps(5);
module.exports = steps;
