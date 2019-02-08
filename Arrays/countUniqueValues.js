//Use two pointers, advice one through the array (i) and leave one at arr[0] (j)
//If arr[j] does not match arr[i] advance j and assign arr[j] the value of arr[i]
//return the index of j +1 to get the number of unique values. 

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[j]) {
      j++
      arr[j] = arr[i]

    
    }

  }
  return j + 1;
}

countUniqueValues([1, 1, 1, 2, 2, 3, 3, 4, 5, 6]); //6
countUniqueValues([]); //0
countUniqueValues([1, 1, 1, 1, 1, 1, 1]); //1