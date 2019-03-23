//give a string, replace each of its character by the next one in the English alhabet(z would be replaced by a)

//in
//'crazy'
//out
//'dsdaz'


function alphebeticShift(str) {

  let split = str.split('');
  let char = split.map(item => item.charCodeAt() - 96)
  let newChar = char.map(item => item + 97)

  for (let i = 0; i < newChar.length; i++) {
    if (newChar[i] === 123) {
      newChar[i] = 'a';
    } else {
      newChar[i] = String.fromCharCode(newChar[i])
    }
  }
  return newChar.join('');
}

alphebeticShift('crazy');


