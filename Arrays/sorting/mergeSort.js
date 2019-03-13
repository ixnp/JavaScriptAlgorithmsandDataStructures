//MergeSort

//implement a function that will merge two sorted arrays
//Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two arrays.
//this function should run in O(n+m) time and O(n+m) space and should not modify the paramerters passed to it
//Create an empty array, take alook at the smallet values in each input array
//while there are still values we haven't looked at..
//If the Value in the first arrayis smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
//If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to thenext value in the second array
//Once we exhaust one array, push in all remaining values from the other array
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    return 'inccorect input, please submit two arrays';
  }
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++
    } else {
      results.push(arr2[j])
      j++
    }

  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  return results;
}

//Test cases 
console.log('arr2.lenght > arr1.lenght', merge([1, 10, 50], [2, 14, 99, 100]));
console.log('arr1.lenght > arr2.lenght', merge([1, 10, 50, 60], [2, 14, 99, 100]));
console.log('arrays with duplicate values', merge([1, 10, 50], [2, 14, 50, 99, 100]));
console.log('empty array', merge([], [1, 10, 50]));
console.log('incorrect input, string', merge([1, 2, 3], 'str'));
console.log('incorrect input, object', merge({ arr: [1, 2, 4] }, [1, 2, 3]));
console.log('incorrect input, int', merge(5, [1, 2, 3]));

//Time and Space 
//O(n+m) or O(n)

//Sorting 
// Break up the array into halves until you have arrays that are empty or have one element
//Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are vack at the full length of the array

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};
//Test cases 
console.log('unsorted array', mergeSort([10, 24, 76, 73, 72, 1, 9]));
console.log('sorted array', mergeSort([1, 9, 10, 24, 72, 73, 76]));
console.log('empty array', mergeSort([]));
console.log('array with one element', mergeSort([1]));
console.log('not array', mergeSort('str'));

//Time and Space
// Time : O(nlogn)
// Space : O(n)