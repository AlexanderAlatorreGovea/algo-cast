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

console.log(binarySearchTree([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));

function findThreeLargestNumbers(array) {
  // Write your code here.
  let [first, second, third] = [-Infinity, -Infinity, -Infinity];

  for (let number of array) {
    if (number > third) {
      first = second;
      second = third;
      third = number;
      continue;
    }

    if (number > second) {
      first = second;
      second = number;
      continue
    }

    if (number > first) {
      first = number;
      continue
    }
  }

  return [first, second, third];
}
console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7]));
