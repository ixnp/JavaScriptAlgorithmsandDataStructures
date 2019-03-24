//Given an array of integers, for each position i, search among the previous positions for the last(from the left) position that contains a smaller value. Store this value at position i inthe answer. if no such value can be found, store -1 instead

//[3,5,2,4,5]
//[-1,3,-1,2,4]

function previousLess(arr) {
  let lessThanlist = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        lessThanlist.unshift(arr[j]);
        break;
      } else if (j === 0) {
        lessThanlist.unshift(-1);
      }
    }
  }

  return lessThanlist;
}

previousLess([3, 5, 2, 4, 5])