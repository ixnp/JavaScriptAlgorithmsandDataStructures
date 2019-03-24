//write a function that retruns the sum of two numbers
//write a function that returns the sum of all numbers regardless of # of params

function addTwo(a, b) {
  return a + b
};



function addAll(...param) {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    sum = sum + param[i]
  }
  return sum
}


function addAllReduce(...param) {
  let reducer = (accumulator, currentval) => accumulator + currentval;
  return param.reduce(reducer)
}

function addAllForEach(...param) {
  let sum = 0;
  param.forEach((item) => {
    sum += item;
  })
  return sum;
}

addTwo(1, 2);

addAll(1, 2, 3, 4, 5, 6);

addAllReduce(1, 2, 3, 4, 5, 6, 10);

addAllForEach(1, 2, 3, 4, 5, 6, 10, 11);