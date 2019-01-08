//https://www.hackerrank.com/challenges/compare-the-triplets/problem
//Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.

// We define the rating for Alice's challenge to be the triplet a=(a[0], a[1], a[2]) , and the rating for Bob's challenge to be the triplet b=(b[0], b[1], b[2]).

// Your task is to find their comparison points by comparing a[0] with b[0]  and so on ...
// Return final score and winners name;
// Notes:
//for of loop, compair each index with eachother, update score var, make a final if statmentt compairing the scores to report the winner.

function compareTheTriplets(arrA, arrB){


  let score = [0,0];
  let results = {};
  
  
  for(let item of arrA){
    if(arrA[item] < arrB[item]){
     score[1]++
    }else if (arrA > arrB) {
     score[0]++
    } 
  }
  results['score']= score;
  if(score[0] < score[1]){
   results['winner'] = 'Bob';
  } else if ( score[0] > score[1]){
    results['winner'] = 'Alice';
  } else{
     results['winner'] = 'Draw';
  }
  console.log(score);
  return results;
  }
  
  // compareTheTriplets([1,2,3],[3,1,2]); 
  // Aice
  // compareTheTriplets([0],[0]);
  // Draw