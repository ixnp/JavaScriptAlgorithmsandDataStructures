// given a sorted array of integers a, find ann integer x from a such that the value of abs(a[0] -x) + abs(a[1] -1)+...+abs(a[a.length -1]-x)
//is the smallest possible (here abs denotes the absolute balue) if there are several possible answers, output the smalles tone.
//...
// return the median value is what its asking.... 
// a median is when you add up all the numbers and then devide by the number of numbers.
// example
// a[2,4,7] the output should be absoluteBalueSumMinimization(a)=4

function medianVal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return Math.floor(sum / arr.length)
}

medianVal([2, 4, 7])

///////////with reduce 

function medianValWithReduce(arr) {
  let reducer = (accumulator, currentVal) => accumulator + currentVal;
  let sum = arr.reduce(reducer);
  return Math.floor(sum / arr.length)
}

medianValWithReduce([2, 4, 7, 6])