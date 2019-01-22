'use strict'
// Write a program that prints a staircase of size n

function stairCase(n) {

  for (let i = 0; i < n; i++) {
    let step = [];
    for (let j = 0; j < n; j++) {
      if (j >= n - i - 1) {
        step.push('#');
      } else {
        step.push(' ');
      }
    }
    console.log(step.join(''));
  }

}

stairCase(6);