//given an array of integers. On each move you are allowed to increase exactly on of its elements by one. Find the minimal number of moves required to obtain a strictly increasing sequence from that input    
//in [1,1,1]
//out [1,2,3] 3

function arrayChange(arr) {
  let counter = 0;
  if (arr.length <= 1) return undefined
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr[i + 1]++
      counter++
    }
    if (arr[i] > arr[i + 1]) {
      let diff = arr[i +] - arr[i + 1];
      arr[i + 1] = arr[i + 1] + diff 
      counter += diff
    }

  }
  console.log(arr)
  return counter;
}

arrayChange([1, 1, 1])
arrayChange([3, 2, 1])
arrayChange([5, 2, 6])