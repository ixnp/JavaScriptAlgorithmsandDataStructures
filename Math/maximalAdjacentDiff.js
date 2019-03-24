//Given an array of integers find the maximal absolute dif from an array
//[2,4,1,0] 3
function arrayMaximalAdjacentDifference(arr) {
  let maxDiff = 0
  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - arr[i + 1]);
    maxDiff = diff > maxDiff ? diff : maxDiff
  }
  return maxDiff;
}

arrayMaximalAdjacentDifference([2, 4, 1, 0])