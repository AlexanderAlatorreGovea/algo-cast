// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // [2, 1 , 3, 4]
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const lesser = array[j + 1];
        array[j + 1] = array[j];
        array[j] = lesser;
      }
    }
  }

  return arr;
}

function selectionSort(array) {
  let startIndex = 0;

  while (startIndex < array.length - 1) {
    let smallestIndex = startIndex;

    for (let i = startIndex + 1; i < array.length; i++) {
      if (array[smallestIndex] > array[i]) {
        smallestIndex = i;
      }
    }

    swap(startIndex, smallestIndex, array)
    startIndex++
  }

  return array;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;

    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);

      j -= 1;
    }
  }

  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
