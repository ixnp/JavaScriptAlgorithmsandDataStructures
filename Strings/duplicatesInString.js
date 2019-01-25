
function hasDuplicate(str){
  let dupObj = {};
  if(typeof str != 'string') return false;
  for(let i = 0; i < str.length; i++){
    let current = str[i];
    if(!dupObj[current]){
      dupObj[current]= true;
    }
    else{ return false;}
  }
  return 'no duplicates';
}
//should return false 
hasDuplicate('aabcd');
//should return 'no duplicates'
hasDupes('abcdefg');
//should return 'no duplicates'
hasDuplicate('');
//should return false 
hasDuplicate(5);
//