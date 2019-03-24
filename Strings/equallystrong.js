//Are Equally Strong
// call two arms equally strong if the heaviest weights they each are able to lift are equal.
//Call two people equally strong if their strongest arms are equally strong(the strongest arm can be both the right an the left) and so their weakest arms.
//Given you and your friend's arms lifting capabilities find out if youtwo are equally strong.

//in
//for youurLeft = 10, yourRight=15
//for firendsLeft= 15, friendsRight =10
// out
// true


function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
  const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : riendsRight;
  const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

  return (yourStrongest === friendsStrongest && yourWeakest === friendsWeakest)
}
areEquallyStrong(10, 15, 10, 15)