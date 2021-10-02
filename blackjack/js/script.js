// 1. Variables
// 2. Build Deck of Cards
// 3. Shuffle Deck
// 4. Clear Table
// 5. Deal
// 6. New Deal
// 7. Start Game
// 8. ReDeal
// 9. Card Output
// 10. Card Action
// 11. Take Card
// 12. End Play

////////////////////////////////////////
// 1. VARIABLES

// -- GAME STATUS

let cardCount = 0;
let balance = 1000;

// -- ARRAYS

let DEALERS_HAND = [];
let PLAYERS_HAND = [];

const DECK = [];
const SUITS = ["spades", "hearts", "clubs", "diams"];
const NUMB = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// -- DOM ELEMENTS

const $dealerHand = document.getElementById("dealer-hand");
const $playerHand = document.getElementById("player-hand");
const $dealerValue = document.getElementById("dealer-value");
const $playerValue = document.getElementById("player-value");

const $message = document.getElementById("message");
const $betStake = document.getElementById("bet-stake");
const $chipStack = document.getElementById("chip-stack");

// -- Buttons
const $start = document.getElementById("button-deal");
const $increaseBtn = document.getElementById("button-increase");
const $decreaseBtn = document.getElementById("button-decrease");

const $hitBtn = document.getElementById("button-hit");
const $standBtn = document.getElementById("button-stand");
const $doubleBtn = document.getElementById("button-double");
const $splitBtn = document.getElementById("button-split");

$start.addEventListener("click", function (e) {
  e.preventDefault();
  Start();
});

////////////////////////////////////////
// 2. BUILD DECK OF CARDS

for (let s in SUITS) {
  let suit = SUITS[s][0].toUpperCase();
  const bgcolor = suit === "S" || suit === "C" ? "black" : "red";
  for (let n in NUMB) {
    const cardValue = n > 9 ? 10 : parseInt(n) + 1;
    let card = {
      suit: suit,
      icon: SUITS[s],
      bgcolor: bgcolor,
      cardnum: NUMB[n],
      cardvalue: cardValue,
    };
    DECK.push(card);
  }
}

////////////////////////////////////////
// 3. SHUFFLE DECK

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}

////////////////////////////////////////
// 4. START GAME

function Start() {
  shuffleDeck(DECK);
  newDeal();
}

////////////////////////////////////////
// 5. CLEAR TABLE

function clearTable() {
  PLAYERS_HAND = [];
  DEALERS_HAND = [];

  $chipStack.innerHTML = balance;
  console.log($chipStack.innerHTML);

  $dealerValue.innerHTML = "?";

  $dealerHand.innerHTML = "";
  $playerHand.innerHTML = "";

  $start.style.display = "none";
  $decreaseBtn.style.display = "none";
  $increaseBtn.style.display = "none";

  $hitBtn.style.display = "flex";
  $standBtn.style.display = "flex";
}

////////////////////////////////////////
// 6. DEAL

function deal() {
  // Card count reshuffle
  for (let x = 0; x < 2; x++) {
    DEALERS_HAND.push(DECK[cardCount]);
    $dealerHand.innerHTML += cardOutput(cardCount, x);
    if (x === 0) {
      $dealerHand.innerHTML += '<div id="cover" style="left: 100px"></div>';
    }
    reDeal();
    PLAYERS_HAND.push(DECK[cardCount]);
    $playerHand.innerHTML += cardOutput(cardCount, x);
    reDeal();
  }

  // End play if blackjack
  let playervalue = checkTotal(PLAYERS_HAND);
  if (playervalue === 21 && PLAYERS_HAND.length === 2) {
    endPlay();
  }
  console.log(PLAYERS_HAND);
  $playerValue.innerHTML = playervalue;

  // Double: Check if value is 9, 10, or 11
  if (
    (checkTotal(PLAYERS_HAND) === 9 ||
      checkTotal(PLAYERS_HAND) === 10 ||
      checkTotal(PLAYERS_HAND) === 11) &&
    PLAYERS_HAND.length === 2
  ) {
    $doubleBtn.style.display = "inline";
    console.log("Double-down?");
  }

  // // Split: Check for Pairs

  // if (PLAYERS_HAND[0].cardnum === PLAYERS_HAND[1].cardnum) {
  //   playerHolder2.innerHTML += cardOutput(cardCount - 1, 0);
  //   document.getElementById('btnsplit').style.display = 'inline';
  //   console.log('Split cards?');
  // }
}

////////////////////////////////////////
// 7. NEW DEAL

function newDeal() {
  clearTable();

  //? Display Bet Value

  let betvalue = $betStake.innerHTML;
  balance = balance - betvalue;
  $chipStack.innerHTML = balance;
  $message.innerHTML = `Current bet is $${betvalue}`;

  //? Hide $betStake

  // $betStake.disabled = true;

  deal();
}

////////////////////////////////////////
// 8. RE-DEAL

function reDeal() {
  cardCount++;
  if (cardCount > 40) {
    console.log("New Deck");
    shuffleDeck(DECK);
    cardCount = 0;
    $message.innerHTML = "New Shuffle";
  }
}

////////////////////////////////////////
// 9. CARD OUTPUT

function cardOutput(n, x) {
  let hpos = x > 0 ? x * 60 + 100 : 100;
  return (
    '<div class="icard ' +
    DECK[n].icon +
    '" style="left:' +
    hpos +
    'px;">  <div class="top-card suit">' +
    DECK[n].cardnum +
    '<br></div>  <div class="content-card suit"></div>  <div class="bottom-card suit">' +
    DECK[n].cardnum +
    "<br></div> </div>"
  );
}

////////////////////////////////////////
// 10. CARD ACTION

function cardAction(a) {
  console.log(a);
  switch (a) {
    case "hit":
      takeCard(); // add new card to players hand
      $doubleBtn.style.display = "none";
      break;
    case "hold":
      endPlay(); //Playout and calculate
      break;
    case "double":
      let betvalue = parseInt($betStake.value);
      if (balance - betvalue < 0) {
        betvalue = betvalue + balance;
        balance = 0;
      } else {
        balance = balance - betvalue;
        betvalue = betvalue * 2;
      }
      $chipStack.innerHTML = balance;
      $betStake.value = betvalue;
      // double current bet, remove value from balance
      takeCard(); // add new card to players hand
      endPlay(); //Playout and calculate
      break;
    case "split":
      splitCard(); //Split cards into two hands
      break;
    default:
      console.log("done");
      endPlay(); //Playout and calculate
  }
}

////////////////////////////////////////
// 11. TAKE CARD

function takeCard() {
  PLAYERS_HAND.push(DECK[cardCount]);
  $playerHand.innerHTML += cardOutput(cardCount, PLAYERS_HAND.length - 1);
  reDeal();
  let rValu = checkTotal(PLAYERS_HAND);
  $playerValue.innerHTML = rValu;
  if (rValu > 21) {
    $message.innerHTML = "Busted!";
    endPlay();
  }
}

////////////////////////////////////////
// // SPLIT CARD

// function splitCard() {
//   playerHolder.innerHTML = cardOutput(cardCount - 3, 0);
//   document.getElementById('player1').style.display = 'block';
// }

////////////////////////////////////////
// 12. END PLAY

function endPlay() {
  endplay = true;
  document.getElementById("cover").style.display = "none";
  $start.style.display = "inline";
  // document.getElementById("increase").style.display = "inline";
  // document.getElementById("decrease").style.display = "inline";
  $betStake.disabled = false;
  $message.innerHTML = "Game Over<br>";
  let payoutJack = 1;

  let dealervalue = checkTotal(DEALERS_HAND);
  $dealerValue.innerHTML = dealervalue;

  while (dealervalue < 17) {
    DEALERS_HAND.push(DECK[cardCount]);
    $dealerHand.innerHTML += cardOutput(cardCount, DEALERS_HAND.length - 1);
    reDeal();
    dealervalue = checkTotal(DEALERS_HAND);
    $dealerValue.innerHTML = dealervalue;
  }

  // WHO wON?

  let playervalue = checkTotal(PLAYERS_HAND);
  if (playervalue === 21 && PLAYERS_HAND.length === 2) {
    $message.innerHTML = "Blackjack<br>";
    payoutJack = 1.5;
  }

  let betvalue = parseInt($betStake.value) * payoutJack;

  // MESSAGE
  if (
    (playervalue < 22 && dealervalue < playervalue) ||
    (dealervalue > 21 && playervalue < 22)
  ) {
    $message.innerHTML += `<span style="color: green;">You WIN! You won $${betvalue}</span>`;
    balance = balance + betvalue * 2;
  } else if (playervalue > 21) {
    $message.innerHTML += `<span style="color: red;">Dealer Wins! You lost $${betvalue}</span>`;
  } else if (playervalue === dealervalue) {
    $message.innerHTML += `<span style="color: blue;">Push</span>`;
    balance = balance + betvalue;
  } else {
    $message.innerHTML += `<span style="color: red;">Dealer Wins! You lost $${betvalue}</span>`;
  }
  $playerValue.innerHTML = playervalue;
  $chipStack.innerHTML = balance;
}

// 13. CHECK TOTAL

function checkTotal(arr) {
  let rValue = 0;
  let aceAdjust = false;
  for (let i in arr) {
    if (arr[i].cardnum === "A" && !aceAdjust) {
      aceAdjust = true;
      rValue = rValue + 10;
    }
    rValue = rValue + arr[i].cardvalue;
  }
  if (aceAdjust && rValue > 21) {
    rValue = rValue - 10;
  }
  return rValue;
}

// function outputCard() {
//   output.innerHTML +=
//     "<span style='color:" +
//     DECK[cardCount].bgcolor +
//     "'>" +
//     DECK[cardCount].cardnum +
//     '&' +
//     DECK[cardCount].icon +
//     ';</span>  ';
// }

// Change Bet Size

// function changeBetSize() {
//   if (this.value < 0) {
//     this.value = 0;
//   }
//   if (this.value > balance) {
//     this.value = balance;
//   }
//   $message.innerHTML = `Bet changed to $${this.value}`;
// }

// Event Listeners

// $betStake.addEventListener("change", changeBetSize);
