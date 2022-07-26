// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];

  for (let i = 0; i < array.length; i++) {
    const lastElementInTheArray = chunked[chunked.length - 1];

    if (!lastElementInTheArray || lastElementInTheArray.length === size) {
      chunked.push([array[i]]);
    } else {
      lastElementInTheArray.push(array[i]);
    }
  }

  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3));

module.exports = chunk;
