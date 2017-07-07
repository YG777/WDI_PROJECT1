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
          img: "images/tree.png",
          matched: false,
          selected: false
        },
        {
          name: "tree",
          id: "card6",
          img: "images/tree.png",
          matched: false,
          selected: false
        },
        // {
        //   name: "four",
        //   id: "card7",
        //   img: "images/four.jpg",
        //   matched: false,
        //   selected: false
        // },
        // {
        //   name: "four",
        //   id: "card8",
        //   img: "images/four.jpg",
        //   matched: false,
        //   selected: false
        // },
        // {
        //   name: "five",
        //   id: "card9",
        //   img: "images/five.jpg",
        //   matched: false,
        //   selected: false
        // },
        // {
        //   name: "five",
        //   id: "card10",
        //   img: "images/five.jpg",
        //   matched: false,
        //   selected: false
        // },
  ];

  function shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  //id comes from UI
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
    }
    if (selectedCard[0].name === selectedCard[1].name) {
      selectedCard[0].matched = true;
      selectedCard[1].matched = true;
      countMatchedCards += 2;
      score += 15;
      return true;
    } else {
      selectedCard[0].selected = false;
      selectedCard[1].selected = false;
      return false;
    }
  }
  var countMatchedCards = 0;

  function isGameWon() {
    let numberOfCards = cards.length;
    if (numberOfCards === countMatchedCards) {
      return true;
    }
  }

  /*  UI logic below here  */
  function createCards() {
    for (let i = 0; i < cards.length; i++) {
      var card = cards[i];
      $(`<li id=${card.id}>
        <img src="images/background.png" class="back" />
        <img src="${card.img}" class="front hidden" />
        </li>`).appendTo($('.game-board'));
    }
  }
  shuffle(cards);

  var score = 0;
  var lastCardSelected;
  function showCard(card){
    $("img.back", card).addClass('hidden');
    $("img.front", card).removeClass("hidden");
  }

  function hideCard(card){
    $("img.back", card).removeClass('hidden');
    $("img.front", card).addClass("hidden");
  }

  function clickCard() {
    var card = $(this);
    showCard(card);
    var id = card.attr('id');
    select(id);
    var matched = match();
    if (matched === true) {
      $('#scoreBoard').html("Your score is: " + score);
      if (isGameWon()) {
        alert("Congratulations, you won! Your score is " + score);
        setTimeout(function(){
          document.location.reload();
        }, 1000);
      }
      // $('#scoreBoard').html("Your score is: " + score);
    } else if (matched === false){
      hideCard(card);
      hideCard(lastCardSelected);
    } else {
      lastCardSelected = card;
    }
  }

  $("#start").one('click', function() {
    createCards();
    $('li').on('click', clickCard);
  });

    $('#start').on('click', function() {
      var secs = 0;
      var setTime = setInterval(function() {
        secs++;
        console.log(secs);
        if (secs > 5) {
          clearInterval(setTime);
          alert("Time is over, you lost! Your score is " + score);
          document.location.reload();
        }
      }, 2000);
    });
});
