//How would you verify a prime number
//prime numbers are only divisible by themselves and 1
//use loop to check every number between 2 and val -1 
//use % currentnum against val 
// if remainder === 0 return false 
//could also use while loop

function isPrime(val){
  if(typeof val != 'number'){
    return false;
  };
  for(let i = 2; i < val; i ++){
    if(val % i === 0){
      return false;
    }
  }
  return true;
 };
 
 // test /
//  console.log(isPrime(3));
//  console.log(isPrime(9));
//  console.log(isPrime(''));
//  console.log(isPrime());
//  console.log(isPrime([3]));
//  console.log(isPrime('3'));