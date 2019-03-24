//are Similar
//Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in the arrays

//in
//[1,2,3] and [1,2,3] true
//[1,2,3]and [2,1,3] true
//[1,2,2] [2,1,1] false

function areSimilar(arrA, arrB) {
  let resultA = []
  let resultB = []
  if (arrA.toString() === arrB.toString()) return true
  for (let i = 0; i < arrA.length; i++) {
    console.log(resultA, resultB)
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

areSimilar([1, 2, 3,], [1, 2, 3])
areSimilar([1, 2, 3,], [2, 1, 3])
areSimilar([1, 2, 2,], [2, 1, 1])