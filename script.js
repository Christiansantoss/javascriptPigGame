'use strict';

// selecting elements
// changing player 0 score
const player0El = document.querySelector('.player--0'); // player 1 class name from html file
const player1El = document.querySelector('.player--1'); // player 2 class name from html file
const score0E1 = document.querySelector('#score--0');

// getElementById is the same as query selector without hash
const score1EL = document.getElementById('score--1');
// player 0 which is player 1 current score
const current0El = document.getElementById('current--0');
// player 2 current score
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHard = document.querySelector('.btn--hold');
// starting conditions
score0E1.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
// let variable is going to be reassigned its value, saving current score
let currentScore = 0;
let activePlayer = 0; // player 1 is 0

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  // Using the ternary operator to switch the active player
  // reasigning active player and checking wether active player is currently 0 and switching to 1
  activePlayer = activePlayer === 0 ? 1 : 0;
  // toggle method adds class if its not there  if its there it will remove it
  player0El.classList.toggle('player--active'); // toggle both
  player1El.classList.toggle('player--active'); // toggle both
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  // dynamically load png image based on random generated number
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
    // current0El.textContent = currentScore; // CHANGE LATER TO CURRENT PLAYER
  } else {
    // Switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  console.log('hold button');
  // 1. Add currentScore to active players score
  // scores at position active player
  //   scores[1] = scores[1] + currentScore;
  scores[activePlayer] += currentScore;
  document.getElementById(`current--${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. Check if players score is >= 100
  // Finish game
  // Switch to the next player
  switchPlayer();
});
