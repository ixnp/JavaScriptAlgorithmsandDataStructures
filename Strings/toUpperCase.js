//given a string check if it can become a plandrome through a case change of some letters

//AaBaa true
//abac false

function caseInsensitivePalandrome(str) {
  let upperCase = str.toUpperCase();
  let mid = Math.floor(str.length / 2);
  for (let i = 0, j = upperCase.length - 1; i < mid; i++ , j--) {
    if (upperCase[i] !== upperCase[j]) return false

  }
  return true;
}

caseInsensitivePalandrome('tacocat')
caseInsensitivePalandrome('tasdfdsa')
caseInsensitivePalandrome('tacoCAt')