// How could you find all prime facors of a number?
// any of the prime numbers that can be multiplied to give the original number.
// Example: The prime factors of 15 are 3 and 5 (because 3×5=15, and 3 and 5 are prime numbers).
//push numbers to empty array or str or obj I'm going to use an array
// check 2 to val -1 with % 
// if remainder is 0 push i to array


function primeFactors(val){
  if(typeof val != 'number'){
  return false;
};
let result = [];
for(let i = 2; i < val; i ++){
  if(val % i === 0){
    result.push(i);
  }
}
return result;
};

// Tests
console.log(primeFactors(15));
console.log(primeFactors(14));
console.log(primeFactors());
console.log(primeFactors(''));