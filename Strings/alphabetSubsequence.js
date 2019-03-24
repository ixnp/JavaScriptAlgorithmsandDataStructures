//Check weather the given string is a subsequence of the plaintext alphabet
//in
//'effg' flase
//'ace' true

function alphabetSubSequence(str) {
  let split = str.split('');
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].charCodeAt();
  }
  console.log(split)
  for (let j = 0; j < split.length - 1; j++) {
    console.log(split[j], split[j + 1])
    if (split[j] >= split[j + 1]) {
      return false;
    }
  }
  return true;
}

alphabetSubSequence('acce')