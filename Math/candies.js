//candies
//n children have got m pieces of cnady. They want to eat as much cnady as they can, but easch child must eat exactlythe same amount of candyas anyother child. Determin how many pieces of candywill be eaten by all the children together.

//n = 3 m = 10 
// each child will eat 3 so 9 will be consumed.

function candies(n, m) {
  let candyPerChild = Math.floor(m / n);

  let candiesNotEaten = m - (candyPerChild * n)

  let totalCandiesEaten = m - candiesNotEaten;
  return totalCandiesEaten;
}

candies(3, 10)