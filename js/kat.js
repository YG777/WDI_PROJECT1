//: Playground - noun: a place where people can play
document.addEventListener('DOMContentLoaded', function() {
  //CLASSWORK W03D01 PM
  const cards = [{
      name: "one",
      id: "card1",
      img: "images/one.jpg",
      matched: false,
      selected: false
    },
    {
      name: "one",
      id: "card2",
      img: "images/one.jpg",
      matched: false,
      selected: false
    },
    {
      name: "two",
      id: "card3",
      img: "images/two.jpg",
      matched: false,
      selected: false
    },
    {
      name: "two",
      id: "card4",
      img: "images/two.jpg",
      matched: false,
      selected: false
    },
    {
      name: "tree",
      id: "card5",
      img: "images/three.jpg",
      matched: false,
      selected: false
    },
    {
      name: "tree",
      id: "card6",
      img: "images/three.jpg",
      matched: false,
      selected: false
    },
    {
      name: "four",
      id: "card7",
      img: "images/four.jpg",
      matched: false,
      selected: false
    },
    {
      name: "four",
      id: "card8",
      img: "images/four.jpg",
      matched: false,
      selected: false
    },
    {
      name: "five",
      id: "card9",
      img: "images/five.jpg",
      matched: false,
      selected: false
    },
    {
      name: "five",
      id: "card10",
      img: "images/five.jpg",
      matched: false,
      selected: false
    },
  ];

  var  countMatchedCards = 0;

  function shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  //id comes from UI
    ('').innerHTML = "Score: " + score;
  function select(id) {
    for (let i = 0; i < cards.length; i++) {
      let cardSel = cards[i];
      if (id === cardSel.id) {
        cardSel.selected = true;
      }
    }
  }

  function match() {
    let selectedCard = cards.filter(function(card) {
      //return true if selected is true and matched is false
      let firstSelected = card.selected === true;
      let toMatch = card.matched === false;
      return firstSelected && toMatch;
    })
    if (selectedCard.length < 2) {
      return;
      //gets card's selected property
    }
    //get items from cards arr with slected=true and same names
    if (selectedCard[0].name === selectedCard[1].name) {
      selectedCard[0].matched = true;
      selectedCard[1].matched = true;
      countMatchedCards += 2;
      return true;
    } else {
      //UI --> hide cards
      selectedCard[0].selected = false;
      selectedCard[1].selected = false;
      countMatchedCards += 0;
      return false;
    }
  }

  function isGameWon() {
    let numberOfCards = cards.length;
    if (numberOfCards === countMatchedCards) {
      return true;
    }
  }


  /*  UI logic below here  */

  function createCards() {
    for (let i = 0; i < cards.length; i++) {
      $(`<li id=${cards[i].id}>${cards[i].name}</li>`).appendTo($('.game-board'));
    }
  }
  shuffle(cards);
  createCards();

  $('button').on('click', function() {
    var secs = 0;
    var setTime = setInterval(function() {
      secs++;
      console.log(secs);
      if (secs > 5) {
        clearInterval(setTime);
        alert("Time is over, you lost!Your score is " + score);
      }
    }, 1000);
  });
// function cardsLi {
//
// }
  $('li').on('click', function() {
    var id = $(this).attr('id');
    select(id);
    var matched = match();
    var score = countMatchedCards + 15;
    if (matched === true) {
      if (isGameWon()) {
        alert("Congratulations, you won! Your score is " + score);
      }
    }

    console.log(score);
    // console.table(cards);

  });

});
