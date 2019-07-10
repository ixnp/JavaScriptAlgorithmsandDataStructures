https://www.geeksforgeeks.org/the-celebrity-problem/
// In a party of N people, only one person is known to everyone. Such a person may be present in the party, if yes, (s)he doesn’t know anyone in the party. We can only ask questions like “does A know B? “. Find the stranger (celebrity) in minimum number of questions.

// We can describe the problem input as an array of numbers/characters representing persons in the party. We also have a hypothetical function HaveAcquaintance(A, B) which returns true if A knows B, false otherwise. How can we solve the problem.

// Stack solution 

a = {a:{b:true, c:true, d:true, e:true}};
b = {b:{d:true, c:true, a:true,e:true}};
c = {c:{b:true, c:true, a:true,e:true}};
d = {d:{b:true, c:true, a:true, e:true}};
e = {e:{a:true}};

let party = [a,b,c,d,e]

function celebCheck(arr){
  let checked = [];
  //first loop
  while(arr.length != 1){
    let guest1 = arr.pop()
    let guest2 = arr.pop()
    if(aKnowB(guest1,guest2)){
      arr.push(guest2)
      checked.push(guest1)
    } else {
      arr.push(guest1)
      checked.push(guest2)
    }
  }

  //second loop to verify that the last element in Arr is valid. 
  for(let i = 0; i < checked.length && arr.length != 0; i++){
    if(aKnowB(arr[0], checked[i])) arr.pop()
    if(!aKnowB(checked[i], arr[0])) arr.pop()
  }

  if(arr.length == 0){
    return false
    } else { 
    return Object.keys(arr[0]);
    }
 
 //Does A know B function 
  function aKnowB(a,b){
    let bkey = Object.keys(b)
  if(a[bkey]){
    return true
    } else {
    return false
    }
  }

}

celebCheck(party)