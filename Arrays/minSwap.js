// You are given an unordered array consisting of consecutive integers
// without any duplicates. You are allowed to swap any two elements. 
//You need to find the minimum number of swaps required to sort the array in ascending order.
//swap item with index matching its value.
function minSwaps(arr) {
  for (let i = 0; i < arr.length; i++) {

    let temp = arr[i]
    console.log(i, temp)
    arr[i] = arr[temp - 1];
    arr[temp - 1] = temp;

    console.log(arr);
  }
  return arr;

}

minSwaps([7, 1, 3, 2, 4, 5, 6]);