//You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

//Your task is to find the minimum number of required deletions.

// AAAA  3
// BBBBB  4
// ABABABAB  0
// BABABA    0
// AAABBB  4 

// Create counter 
// loop through the string 
// compare string[i] with string[i+1] if they match check the character after if it matches continue until you find 
//a character that doesn't match or the end of the string. 
// remove duplicate characters.
// counter++

function alternatingCharacters(str) {
  let counter = 0;
  let newArr = []
  let splitString = str.split('')
  newArr.push(splitString[0]);
  for (let i = 0; i < splitString.length; i++)
    if (splitString[i] !== splitString[i + 1]) {
      newArr.push((splitString[i + 1]));

    } else {
      counter++
    }
  return counter;
}

// alternatingCharacters('AAAA');
// alternatingCharacters('BBBBB');
// alternatingCharacters('ABABABAB');
// alternatingCharacters('BABABA');
// alternatingCharacters('AAABBB');
