//Given anarrayof 2k integers(for some integer k), perform the following operations until the array only contains one element
//On the odd itterations replace each pair of consecutive elements with their sum
//on the even itterations replace each pair of consecutive element with their product
//after the algorithum has finished there will be a single element left in the array return that element 

//[1,2,3,4,5,6,7,8,] 186

function arrayConversion(arr) {
  let isOdd = true;
  while (arr.length !== 1) {
    arr = sumProduct(arr, isOdd)
    isOdd = !isOdd;
  }
  return arr[0]
}

function sumProduct(nums, isOdd) {
  let sumProducts = [];
  if (isOdd) {
    for (let i = 0; i < nums.length; i += 2) {
      sumProducts.push(nums[i] + nums[i + 1]);
    }
  } else {
    for (let i = 0; i < nums.length; i += 2) {
      sumProducts.push(nums[i] * nums[i + 1]);
    }
  }
  return sumProducts;
}


arrayConversion([1, 2, 3, 4, 5, 6, 7, 8,])