//Quick Sort
//Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted
//Works by selecting one element (called the pivot) and finds the index where the pivot should end up in the sorted array

//Pivot
//Given an array, this helper function should designate an element as the pivot
//It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
//The order of elements on either side of the pivot doesn't matter
//The helper should do this in place, that is, it should not create a new array
//When complete, this helper should return the index of the pivot
// Picking a Pivot
//ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting. But it can be whatever you want.
//Pivot Pseudocode
//accepts three arguments: an array, a start index(should default to 0), and an end index(should default to arr.length+1)
//grab pivot from some point in the array
//Store the current pivot index in a variable(this will keep track of where the pivot should end up)
//Loop through the array from the start until the end
//If the pivot is greater than the cureent element, increment the pivot index variable and then swap the current element with the element at the pivot index

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}
pivot([4, 8, 2, 1, 5, 7, 6, 3])

//Quicksort Psudocode
//call the pivot helper on the array
//when the helper returns the updated pivot index, recursively call the pivot helper onthe subarray to the left of that index and the subarray to the right of that index.

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (Array.isArray(arr) !== true) {
    return 'incorrect input, please enter a valid array'
  }
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr;
}

quickSort([4, 8, 2, 1, 5, 7, 6, 3])

//Test cases 
console.log('unsorted array: ', quickSort([4, 8, 2, 1, 5, 7, 6, 3]))
console.log('empty array: ', quickSort([]))
console.log('invalid input string: ', quickSort('str'))

//Time and Space
//Time: O(n log n)
//Space: O(log n)