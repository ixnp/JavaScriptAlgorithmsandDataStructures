// given an array of integers, find the pair of adjacent elements that has the largest product.
//input
//[3,6,-2,-5,7,3]
//out
//21

function productAdjacent(arr) {
  let product = 0;
  let digits = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] * arr[i + 1] > product) {
      product = arr[i] * arr[i + 1];
      digits[0] = arr[i];
      digits[1] = arr[i + 1]
    }
  }
  let results = { product: product, digits: digits }
  return results
}

productAdjacent([3, 6, -2, -5, 7, 3])

