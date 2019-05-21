//Balanced Brackets
//hacker rank
//https://www.hackerrank.com/challenges/balanced-brackets/problem
//A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

// Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

// By this logic, we say a sequence of brackets is balanced if the following conditions are met:

// It contains no unmatched brackets.
// The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
// Given  strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. Otherwise, return NO.

function isBalanced(str) {
  let arr = str.split("");
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      stack.unshift(map[arr[i]]);
    } else if (arr[i] == stack[0]) {
      stack.shift();
    } else if (arr[i] !== stack[0]) {
      return 'NO';
    }
  }
  if (stack.length != 0) {
    return 'NO';
  }
  return 'YES';
}

console.log(isBalanced("{[(()]}")); //NO
console.log(isBalanced("{[()]}")); //YES
console.log(isBalanced("{[(()[{")); //NP
