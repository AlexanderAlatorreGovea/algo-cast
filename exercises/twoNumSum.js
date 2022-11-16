function twoNumSum(array, targetSum) {
  const obj = {};

  for (let num of array) {
    const potentialMatch = targetSum - num;

    if (obj[potentialMatch]) {
      return [potentialMatch, num];
    } else {
      obj[num] = true;
    }
  }

  return [];
}

function chunks(array, numToChunk) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const lastElement = newArray[array.length - 1];

    if (!lastElement || lastElement.length === numToChunk) {
      newArray.push([array[i]]);
    } else {
      lastElement.push(array[i]);
    }
  }

  return newArray;
}

// function chunk(array, size) {
//   const chunked = [];
//
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//
//   return chunked;
// }

function reverseInt(n) {
 let positiveN = n * -1;
  let newArr = positiveN.toString().split("").reverse().join("");
  const negativeOrPositiveInt = n + - n === 0 ? -1 : 1;
  const newNumb = +newArr * negativeOrPositiveInt;
    console.log(newNumb)
  return newNumb
}

reverseInt(-0);
