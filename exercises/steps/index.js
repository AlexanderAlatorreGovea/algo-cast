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

// [C0 r0] [C1 r0] [C2 r0] //column is equal to row insert #
// [C0 r1] [C1 r1] [C2 r1] // column is more than row in next iteration so don't insert


function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }

    console.log(stair);
  }
}

console.log(steps(3));
module.exports = steps;

// for (let row = 0; row < n; row++) {
//   let stairs = "";

//   for (let column = 0; column < n; column++) {
//     if (column <= row) {
//       stairs += "#";
//     } else {
//       stairs += " ";
//     }
//   }

//   console.log(stairs);
// }
