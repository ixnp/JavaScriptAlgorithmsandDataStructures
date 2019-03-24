//add two digits
//youare given a two-digit integer n return the sum ofits digits

// n = 29 
// 11


  function sumDig(n) {
    let singleDigArr = n.toString().split('')
    let intArr = singleDigArr.map(item => parseInt(item))
    let reducer = (acc, val) => acc + val;
    return intArr.reduce(reducer)

  }


  sumDig(29);