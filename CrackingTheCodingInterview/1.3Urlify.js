//replace all spaces in string with %20
function split(str){
  let arr = [];
  let splitStr = str.split('');
  for(let char of splitStr){
    if(char === ' '){
      arr.push('%20');
    }else{
      arr.push(char);
    }
  }
  return arr.join('')
}

split('This is fine');