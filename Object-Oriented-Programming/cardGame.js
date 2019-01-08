

// Build a deck of cards and design a card game

//Deck, 52 cards: 2 - 10 jack, queen, king, ace 
//suits: hearts, spades, dimonds, clubs
//game goFish

//Deck Build
//  suitsArr, carArr > nested loop to create suit[card] > push to deckArr
//  ||  deck array of obj with  suit, and val


//goFish
// draw:
// use Math.random() to 'shuffle' 
// push card to hand
// remove card from deckArr slice()

// draw 5 cards to hand arrs > remove cards from deck
//
//turn
// match: val === val  
// draw from deck 
// check player hand
// if hand empty draw
//  if match > matchCount++
//  remove cards from player hand slice()
//  else 
//  fish 
//    math.random() hand to pick card
//    loop for match in opponetn hand
//    if match matchCount++
//    else draw
//    recursion until deck and hands empty 
//Winner
// matchCount player vs opponent greater wins 

// let testHand = [ { suit: 'hearts', card: '2' },
//   { suit: 'spades', card: '5' },
//   { suit: 'hearts', card: '7' },
//   { suit: 'spades', card: '7' },
//   { suit: 'dimonds', card: '9' },
//   { suit: 'spades', card: 'queen' } ];

//   function deck(){
//     let cards = ['2','3','4','5','6','7','8','9','10', 'jack', 'queen', 'king', 'ace'];
//     let suits = ['hearts','dimonds','spades','clubs'];
//     let deckArr = []
   
    
//     for(let i = 0; i < suits.length; i++){
//       for(let j = 0; j < cards.length; j++){
//         deckArr.push({suit: suits[i], card: cards[j]});
//       }
//     }
//     return deckArr;
//   };



// function goFish(){
//     let handP = [];
//     let handO = [];
//      let pointP = 0;
//     let pointS = 0;

//     function deck(){
//     let cards = ['2','3','4','5','6','7','8','9','10', 'jack', 'queen', 'king', 'ace'];
//     let suits = ['hearts','dimonds','spades','clubs'];
//     let deckArr = []
//     for(let i = 0; i < suits.length; i++){
//       for(let j = 0; j < cards.length; j++){
//         deckArr.push({suit: suits[i], card: cards[j]});
//       }
//     }
//     return deckArr;
//   };

//   let cardDeck = deck();

//   function draw(deck){
//     let cardIndex = Math.floor(Math.random() * deck.length);
//     let card = deck[cardIndex];
//     deck.splice(cardIndex, 1);
//     return card;
//   }


// function start(){
//   let i = 0
//   for(let i = 0; i <= 5; i++) {
//     handP.push(draw(cardDeck))
//     handO.push(draw(cardDeck))
    
//   }
// }

// function turn(hand, points){
//   if(hand.length === 0){
//     hand.push(drawcardDeck);
//   };
// console.log('hi');
//   let tempHand = hand;

  
//     }
// return points;
//   };

// }

// //  return start();

// return turn(testHand, pointP);
// // turn(handO);

  
// };

// goFish();