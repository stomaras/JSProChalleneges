'use strict';

// select all elements
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let results, currentScore, activePlayer, playing;

diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;

const init = function () {
  results = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document.querySelector('#name--0').textContent = 'PLAYER 1';
  document.querySelector('#name--1').textContent = 'PLAYER 2';
};

init();

const switchPlayer = function () {
  if (activePlayer === 0) {
    current0El.textContent = 0;
    activePlayer = 1;
    currentScore = 0;
    player0El.classList.remove('player--active');
    player1El.classList.add('player--active');
    // switch background color
  } else if (activePlayer === 1) {
    current1El.textContent = 0;
    activePlayer = 0;
    currentScore = 0;
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
    // switch background color
  }
};

btnRoll.addEventListener('click', function () {
  // generate a random number each time you click Roll Dice button
  if (playing) {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${randomNumber}.png`;
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      if (activePlayer === 0) {
        current0El.textContent = currentScore;
      } else if (activePlayer === 1) {
        current1El.textContent = currentScore;
      }
    } else {
      // switch player and make currentScore 0 again.
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  //Add total score
  if (playing) {
    if (activePlayer === 0) {
      results[0] = results[0] + currentScore;
      if (results[0] >= 20) {
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector('.player--0').classList.add('player--winner');
        document.querySelector('#name--0').textContent = 'WINNER 🏆';
      }
      current0El.textContent = 0;
      score0El.textContent = results[0];
      switchPlayer();
    } else if (activePlayer === 1) {
      results[1] = results[1] + currentScore;
      if (results[1] >= 20) {
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector('.player--1').classList.add('player--winner');
        document.querySelector('#name--1').textContent = 'WINNER 🏆';
      }
      current1El.textContent = 0;
      score1El.textContent = results[1];
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
