function findThreeLargestNumbers(array) {
  const newArray = [];
  // [1, 2, 3, 9, 5, 7, 8]
  for (let i = 0; i < array.length; i++) {
    if (!newArray.length || newArray[newArray.length - 1]) {
      newArray.push(array[i]);
    } else if (newArray[0] > array[i]) {
      newArray.unshift(array[i]);
    }
  }
  console.log(newArray);
  return newArray.slice(array.length - 3, array.length);
}

const findLargest = (array) => {
  const largestNumbers = [0, 0, 0];

  for (let number of array) {
    if (largestNumbers[2] < number) {
      largestNumbers[2] = number;
    } else if (largestNumbers[1] < number) {
      largestNumbers[0] = largestNumbers[1];
      largestNumbers[1] = number;
    } else if (largestNumbers[0] < number) {
      largestNumbers[0] = number;
    }
  }

  return largestNumbers;
};

console.log(findLargest([22,1, 2, 10, 3, 9, 5, 7, 8]));
