// How would you find the greatest common divisor of two numbers?


function greatCommonDivisor(n1, n2){
  let current = 1;
  let divisor= 1;


  while(current < n1 || current < n2){
    if(n1 % current === 0 && n2 % current ===0){
      divisor = current
    }
    current++
  }
  return divisor;
}

greatCommonDivisor(12 , 21);
// 3