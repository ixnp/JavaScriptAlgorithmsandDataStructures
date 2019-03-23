//Array max consecutive sum
//fiven an array of intigers find the maximal sum of of its k consecutive elements

//in[2,3,5,1,6] k= 2
//out 20

function maxConsecutiveSum(arr, k) {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i]
  }
  max = sum;

  for (let i = k; i < arr.length; i++) {
    console.log(sum)
    sum -= arr[i - k];
    console.log(sum)
    sum += arr[i];
    console.log(sum)
    if (sum > max) {
      max = sum
    }
  }
  return max;
}

maxConsecutiveSum([2, 3, 5, 1, 6], 2)