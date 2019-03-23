// Almost Increasing Sequence 
// Given a sequence of integers as an array determin weather it's possible to obtain a strictly increasing sequence by removing no more then one element from the array

//in
//[1,3,2,1] false
//[1,3,2] true

function almostIncreasingSequence(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      counter++
    }
    if (counter >= 2) return false
  }
  return true;
}

almostIncreasingSequence([1, 3, 2, 1]);
almostIncreasingSequence([1, 3, 2,]);