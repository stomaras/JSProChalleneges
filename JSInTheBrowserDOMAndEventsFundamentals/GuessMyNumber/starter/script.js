'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '✌ Correct Number!';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 2;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.between').textContent = '<Between 1 and 20>';

// i want a number between 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '❌ no number ';
    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 correct number ';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // when guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 too high ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❗you lost the game❗';
      document.querySelector('.score').textContent = 0;
    }
    // when guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 too low ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❗you lost the game❗';
      document.querySelector('.score').textContent = 0;
    }
  }
});

const againButton = document.querySelector('.again');
againButton.addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});