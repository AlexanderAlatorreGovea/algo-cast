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

  for (let element of array) {
    //checks last element in the chunk array
    const lastElementInChunkArray = chunked[chunked.length - 1];

    // check to see if the last element does not exist
    // or if it's length is equal to the chunk size

    if (!lastElementInChunkArray || lastElementInChunkArray.length === size) {
      chunked.push([element]);
    } else {
      lastElementInChunkArray.push(element);
    }
  }

  return chunked;
}

console.log(chunk([1, 2, 3, 4], 2));

module.exports = chunk;
