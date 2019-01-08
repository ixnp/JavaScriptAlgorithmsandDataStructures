// Flatten an array in which each item might be a letter, number or array. 
// [], 
//instanceof to check for Arrays 
//if Array > call function on index of that array.
//else push into []

function flatten(arr) {
  let result = []
  if(!(arr instanceof Array)){
    result = 'Can only flatten Arrays';
  }
  for(let i = 0 ; i < arr.length ; i ++){
    if(arr[i] instanceof Array) {
      result = result.concat(flatten(arr[i]));
    }
    else {
      result.push(arr[i]);
    }
  }
  return result; 
};

// tests
//  let arr = [ 2,['j','k',3, [4,'n'],'o'],5];
//  let emptyArr = [];
//  let str = '';
// console.log(flatten(arr));
// console.log(flatten(emptyArr));
// console.log(flatten(str));