// given two strings are they the different lengths

function diffLength(strOne, strTwo){
  if(typeof str != 'string') {
    console.log('is not a string');
    return false;
  }
  if(strOne.length != strTwo.length){
    return true;
  }else return false;
}
// will retrun true
diffLength('aaaa','aaaa');
//will return false
diffLength('aaaa','aaa');
//will return false
diffLength('','');
// will return false 'is not a string'
diffLength(3,53);
//