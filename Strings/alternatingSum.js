//Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2 and the third goes into team 1 again the fourth into team 2 and so on.

//Youare given an array of positive integers-the weights of the people. return an arrayof two integers, where the first eelement is the total weight of team1 and the second element is the total weight of team 2 after the  divison is completed. 

//in
//[50,60,60,45,70] 
//out
//[180, 150]

function alternatingSum(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {

    if (i % 2 === 0) {
      evenSum = evenSum + arr[i];
    } else {
      console.log(arr[i])
     
      oddSum = oddSum + arr[i];
    }
  }
  return [evenSum, oddSum];
}

alternatingSum([50, 60, 60, 45, 70]);