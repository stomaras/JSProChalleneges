'use strict';

// selecting elements
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.querySelector('#score--1');
const currentScoreEl0 = document.getElementById('current--0');
const currentScoreEl1 = document.querySelector('#current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
let currentScore = 0;
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;

diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const randomNumber = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${randomNumber}.png`;

  if (randomNumber !== 1) {
    // add dice to current score
    currentScore += randomNumber;
    currentScoreEl0.textContent = currentScore; // CHANGE LATER
  } else {
    // switch next player
  }
});
