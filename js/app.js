document.addEventListener('DOMContentLoaded', function() {
  //CLASSWORK W03D01 PM
  var score = 0;
  var toFlip = 4;

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


//id comes from UI
function select(id) {
  for (var i = 0; i < cards.length; i++) {
    let cardSel = cards[i];
    if (id === cardSel.id) {
      cardSel.selected = true;
      toFlip -=1;
    }
  }
}
select(3);//testing
select(2);

function match() {
  var filtered = cards.filter(function(crd) {
    if (crd.selected === true) {
      crd.matched = true;
      // console.table(cards);
      return crd;
    }
  })

  if (filtered[0].name === filtered[1].name) {
    console.log("Win!");
    score += 15;
  } else {
    //UI --> hide cards
    console.log("no match");
    toFlip += 2;
  }
}
match(cards);
console.log(score);
console.log(toFlip);
// console.table(cards);
});

$(init);

function init() {
  shuffle(array);
  createCards();
}

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

function createCards() {
  for (var i = 0; i < array.length; i++) {
    $(`<li id=${array[i]}></li>`).appendTo($('.game-board'));
  }

  addClickEvents();
}

function addClickEvents() {
  $('li').on('click', handleClick);
}

function handleClick() {
  // on the first click, assign id from element to a vairable, also add class to selected element
  // on the second click, assign id from element to a vairable, also add class to selected element
  // firstValue & secondValue

  // call a function to compare both values
  console.log($(this).attr('id'));
}

function compareValues() {
  // if both values are the same
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
