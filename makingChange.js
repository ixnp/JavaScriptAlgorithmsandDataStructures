// Given a set of coins, and an amount of change we need to return, we are asked to calculate the number of ways we can return the correct change, given our set of coins.

// Note: We have an unlimited amount of each coin type at our disposal.


// define an array  
// define change = amountr - cost
//build loop
//  if change >  arr[arr.length - i] 
//   push index value
//    change - value
// *stop i from becoming > arr.length


function vending(arr,amount,cost){
 
  let changeArr = [];
  let change = amount - cost;

  if(amount === 0) return 0;
  if(change === 0) return 0;
  if(arr.length === 0) return 0;
 

  for(let i = 1; change > 0; i++){
    if(i > arr.length) {
      i = arr.length
    };
    
    if(change >= arr[arr.length - i] ){
      changeArr.push(arr[arr.length - i]);
      change  -= arr[arr.length - i];
   
    };
  };
 return changeArr;
};

// tests
// vending([1,5,10,25],100, 73);
// vending([1,5,10,25],0, 73);
// vending([],100, 73);