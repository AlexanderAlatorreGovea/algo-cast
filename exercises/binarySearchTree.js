// write a function that takes
// a sorted array and target integer
// find if the target integer is contained
// in the array and return it's index
// if it is, if not then return  -1
// we assign values to left and right
// right.value, left.value

function binarySearchTree(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, leftPointer, rightPointer) {
  while (leftPointer <= rightPointer) {
    const midPoint = Math.floor((leftPointer + rightPointer) / 2);
    const potentialMatch = array[midPoint];

    if (target === array[midPoint]) {
      return midPoint;
    } else if (target < potentialMatch) {
      rightPointer = midPoint - 1;
    } else {
      leftPointer = midPoint + 1;
    }
  }

  return -1;
}
