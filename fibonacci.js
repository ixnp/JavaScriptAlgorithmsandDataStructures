// In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones.”
// Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like this:

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

//  How do get nth Fibonacci number?

//could do this in a loop or recursively 

//loop
function fibonacci(n){
  
  let array = [0,1];

  for(let i = 2; i <=n; i++){
     array[i] = array[i-1] + array[i-2]
  }
  return array[n];
}

fibonacci(4);
// 3

//recursion

function fibonacci(n){
  if(n<=1)
    return n;
  else
    return fibonacci(n-1) + fibonacci (n-2);  
}

fibonacci(6);
// 8