'use strict';
//are Similar
//Two arrays are called similar if one 
//can be obtained from another 
//by swapping at most one pair of elements 
//in the arrays

//in
//[1,2,3] and [1,2,3] true
//[1,2,3]and [2,1,3] true
//[1,2,2] [2,1,1] false

module.exports = function areSimilar(arrA=null, arrB=null) {
  let resultA = [];
  let resultB = [];
  if (!Array.isArray(arrA) || !Array.isArray(arrB)) return false;
  if (arrA.toString() === arrB.toString()) return true
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      resultA.push(arrA[i])
      resultB.push(arrB[i])
    }
  }
  resultB = resultB.reverse();


  if (resultA.length === 2 && resultA.toString() === resultB.toString()) {
    return true;
  }
  return false;
}
