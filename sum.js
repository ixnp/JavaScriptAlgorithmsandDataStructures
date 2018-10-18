// Given an array of integers, find the sum of its elements.

// For example, if the array [1,2,3], 1+2+3=6 so return 6.
// I can use the reduce method or a loop;

function sum(arr){

  let sum = arr.reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  },0);
  
  return sum;
  };
  
  //or
  
  function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum = arr[i] + sum;
  
    }
    return sum;
  }
  
  
  sum([1,2,3]);