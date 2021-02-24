'use strict';

// selecting elements
// changing player 0 score
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

// let variable is going to be reassigned its value, saving current score
let currentScore = 0;

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
    current0El.textContent = currentScore; // CHANGE LATER TO CURRENT PLAYER
  } else {
    // Switch to next player
  }
  // if true, switch to next player
});
