
function chuncked(arr, k) {
  if (k > arr.length) return undefined
  if (arr.length <= 1 || arr.length === k) return arr;
  let result = [];
  for (let i = 0; i < arr.length; i += k) {
    let chunk = [];
    for (let j = i, counter = 0; counter < k; j++ , counter++) {
      if (j === arr.length) {

        break;
      }
      chunk.push(arr[j])
    }
    result.push(chunk);
    chunk = [];
  }
  return result;
}

chuncked([1, 2, 3, 4, 5, 6, 7], 2)

chuncked([2, 2, 3], 3)