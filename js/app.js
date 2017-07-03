document.addEventListener('DOMContentLoaded', function() {
  //CLASSWORK W03D01 PM
  var tries = 0;
  var score = 0;
  var toFlip = 4;
  var selectedCards = [];
  var currentCountDown = createCountDown(30000);
  var countDownValue = currentCountDown();

  cards = [{
      name: "one",
      id: 1,
      matched: false,
      selected: false
    },
    {
      name: "one",
      id: 2,
      matched: false,
      selected: false
    },
    {
      name: "two",
      id: 3,
      matched: false,
      selected: false
    },
    {
      name: "two",
      id: 4,
      matched: false,
      selected: false
    },
  ];

  function shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }
  shuffle(cards);

  function select() {
    for (var i = 0; i < 2; i++) {
      let cardSel = cards[i];
      cardSel.selected = true;
      selectedCards.push(cardSel);
      toFlip -= 1;
      //UI ->flip the card;
    }
  }
  select(cards);

  function match() {
    if (selectedCards[0].name === selectedCards[1].name) {
      score += 15;
      toFlip -= 2;
      console.log("match");
    } else {
      //UI ->flip back;
      toFlip += 2;
      console.log("no match")
    }
    if (toFlip === 0) {
      //UI -> alert user "you won, want to play again?" or next level...
    }
  }

  match();
  console.log(toFlip, score);

  function createCountDown(timeRemaining) {
    var startTime = Date.now();
    return function() {
      return timeRemaining - (Date.now() - startTime);
    }
  }
//!!!check if works
  function restart() {
    if (countDownValue === 0){
      //UI ->alert user "you lost"
      //set the document.location.href attribute to the empty string (“”) try location.reload();
    }
  }

});









//CLASSWORK W03D01 AM
//   var score = 0;
//   var cardsInGame = [];
//   var matched = [];
//   var toMatch = [];
//
//   cards = [
//     {name: "one", id: 1, matched: false, selected: false},
//     {name: "one", id: 2, matched: false, selected: false},
//     {name: "two", id: 3, matched: false, selected: false},
//     {name: "two", id: 4, matched: false, selected: false},
//   ];
// //shuffle the cards
//   function shuffle(a) {
//     for (let i = a.length; i; i--) {
//       let j = Math.floor(Math.random() * i);
//       [a[i - 1], a[j]] = [a[j], a[i - 1]];
//     }
//   }
//   shuffle(cards);
//   //push into gamecards array
//   cardsInGame.push(cards);
//
//   //selected cards trigger on click -->
//   //run selected function: change selected to true and push to tomatch arr
//   for (var i = 0; i < 2; i++){
//     var selectedCards = cardsInGame[i];
//     //show selectedCards.name
//     selectedCards.selected = true;
//     selectedCards.push(toMatch);
//    }
//
//   function matchCards() {
//     for (var i = 0; i < 2; i++){
//       var checkMatch = toMatch[i];
//       if (checkMatch[0]===checkMatch[1]) {
//         score += 1;
//         checkMatch.matched = true;
//         checkMatch.push(matched);
//         //!!!!!!!!ADD SCORE!!!!!!
//       }
//       else {
//         //hide the name
//         checkMatch.push(cardsInGame);
//       }
//     }
//     if cardsInGame.length = 0;
//     alert("you won!");
//   }

// });
// $(document).ready(function() {
// console.log( "ready!" );
// function createEls() {
//   var heading = $('<h1></h1>').text("HEADING") ;
//   var scoreDislay = $('<div></div>').text("div-Scoredisplay");
//   var gameCont = $('<ul></ul>').text("Container");
//
//   $("body").append(heading, scoreDislay, gameCont, );
// }
// createEls();
// });
