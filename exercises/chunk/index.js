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

  for (const element of array) {
    const lastCurrentElement = chunked[chunked.length - 1];

    if (!lastCurrentElement || lastCurrentElement.length === size) {
      chunked.push([element]);
    } else {
      lastCurrentElement.push(element);
    }
  }

  return chunked;
}

console.log(chunk([1, 2, 3, 4], 2));

module.exports = chunk;
