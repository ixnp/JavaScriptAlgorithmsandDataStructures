//'https://www.hackerrank.com/challenges/mark-and-toys/problem'
//I wanted to return the total price and number of toys
function markAndToys(prices,k){

    prices.sort((a,b)=> a - b)
    let sum = 0
    let counter = 0
    for(let i = 0; i < prices.length; i++){
      if(prices[i] < k && prices[i]+ sum < k){
        sum += prices[i]
        if(sum<=k) counter++
      }
    }
    return {counter, sum}
    }
    markAndToys([35,11,10,22],50)