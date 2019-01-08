//https://www.hackerrank.com/challenges/pairs/problem
// You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a difference equal to a target value.

// For example, given an array of [1, 2, 3, 4] and a target value of 1, we have three values meeting the condition: , , and .

// Function Description

// Complete the pairs function below. It must return an integer representing the number of element pairs having the required difference.

// pairs has the following parameter(s):

// k: an integer, the target difference
// arr: an array of integers
// Input Format

// The first line contains two space-separated integers  and , the size of  and the target value.
// The second line contains  space-separated integers of the array .

//Notes:
// nested loop
// find diffrence
// if match target, counter ++,
//I have consologed the Pairs and Matches to make it clear

function targetDifference(arr, target) {
  let counter = 0;

  for (let item of arr) {
    for (let itemLoopTwo of arr) {
      if (item - itemLoopTwo === target) {
        counter++;
        console.log("MATCH: ", item, "-", itemLoopTwo, "=", item - itemLoopTwo);
      } else {
        console.log(item, "-", itemLoopTwo, "=", item - itemLoopTwo);
      }
    }
  }
  return counter;
}

targetDifference([1, 2, 3, 4, 5, 6], 3);
