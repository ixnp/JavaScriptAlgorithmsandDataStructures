// https://www.hackerrank.com/challenges/hackerland-radio-transmitters/problem
"use strict";

function hackerLand(x, k) {
  let results = {};
  let range = Math.ceil(k);
  let start = 0;
  let mid = range;
  let end = mid + range;
  let counter = 0;

  let city = [];
  let j = 0;
  for (let i = 1; i <= x[x.length - 1]; i++) {
    if (i !== x[j]) {
      city.push(i);
    } else {
      j++;
      city.push("house");
    }
  }

  while (end < city.length) {
    if (city[mid] === city[start]) {
      if (city[mid] === "house") {
        counter++;
      } else {
        start = end - (range - 1);
        mid = start + range;
        end = mid + range;
      }
    }

    if (city[mid] !== "house") {
      mid--;
    }

    if (city[mid] === "house") {
      counter++;
      start = end;
      mid = start + range;
      end = mid + range;
    }
  }
  results["city"] = city;
  results["number of transmission  "] = counter;
  return results;
}

//hackerLand([1, 2, 3, 5, 9], 1.3);  
// expected number of transmission : 2
//hackerLand([1, 2, 3,4, 5] 1.3); 
// expected number of transmission : 2
//hackerLand([] 1.3); 
// expected number of transmission : 0
//hackerLand([2,4,5,6,7,9,11,12] 1.3); 
// expected number of transmission : 3


