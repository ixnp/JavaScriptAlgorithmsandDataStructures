'use strict';
// Almost Increasing Sequence 
// Given a sequence of integers as an array determine weather 
//it's possible to obtain a strictly increasing sequence 
//by removing no more then one element from the array

//in
//[1,3,2,1] false
//[1,3,2] true

module.exports = function almostIncreasingSequence(arr) {
  let counter = 0;
  if(arr.length === 0) return false;
  if(!Array.isArray(arr)) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      counter++;
    }
    if (counter >= 2) return false;
  }
  return true;
};



