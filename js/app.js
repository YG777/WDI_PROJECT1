$(document).ready(function() {
  $(init);
  cards = [11, 11, 22, 22];
  flipped = [];

  function init() {
    shuffle(cards);
    createCards();
  }

  function shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  function createCards() {
    for (var i = 0; i < cards.length; i++) {
      $(`<li id=${cards[i]}></li>`).appendTo($('.game-board'));
    }

    addClickEvents();
  }

  function addClickEvents() {
    $('li').on('click', handleClick);
  }

  // on the first click, assign id from element to a vairable, also add class to selected element
  // on the second click, assign id from element to a vairable, also add class to selected element
  // firstValue & secondValue
  function handleClick() {
    var li = $(this);
    console.log(li);
  }

  function compareValues() {
    //find class "clicked elements"
    //check if value are same


    // if both values are the same --
    // add to score and leave flip class on element
    // firstValue & secondValue === ''

    // if values are different
    // remove flip class from both elements
    // firstValue & secondValue === ''

    // checkForWin();
  }

  function checkForWin() {
    // check if all lis have the class of flipped
    // if true, Win
    // if false, carry on with the game
  }
});
