//Radix Sort
//Helper function to get a specific digit
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

getDigit(7323, 2);
// 7323/100 = 73.23
// 73
// 73 % 10 = 3

//Helper that finds number of digits
function digitalCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

digitalCount(4233)

//Helper that finds the larges number of digits
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitalCount(nums[i]));
  }
  return maxDigits;
}

mostDigits([23, 567, 89, 12343432, 90])

//Radix Sort Psudocode
//Define a function that accepts list of numbers
//Figure out how many digits the largest number has
//Loop from k = 0 up to this largest number of digits
//Create buckets for each digit(0 to 9)
//place each number inthe corresponding bucket based on its kth digit
//Replace our existing arraywith values in our buckets,
//return list at the end

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < nums.length; i++) {
      digitBuckets[getDigit(nums[i], k)].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums
}

radixSort([2, 23, 455, 3, 4324, 545233]);