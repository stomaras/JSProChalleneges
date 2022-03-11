'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '✌ Correct Number!';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 2;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.between').textContent = '<Between 1 and 20>';
var secretNumber = Math.trunc(Math.random() * 20) + 1;
var message = '';
var score = 20;
var highScore = -1;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message = ' ❌ Try again empty input ';
    document.querySelector('.message').textContent = message;
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      message = ' 📈 too high ';
      document.querySelector('.message').textContent = message;
      document.querySelector('.score').textContent = score;
    } else {
      message = '🥺 you lost!';
      document.querySelector('.message').textContent = message;
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      message = ' 📉 too low ';
      document.querySelector('.message').textContent = message;
      document.querySelector('.score').textContent = score;
    } else {
      message = '🥺 you lost!';
      document.querySelector('.message').textContent = message;
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === secretNumber) {
    message = '🎉 correct number';
    document.querySelector('.message').textContent = message;
    document.querySelector('body').style.backgroundColor = '#008000';
    if (guess > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  message = 'Start guessing...';
  document.querySelector('.message').textContent = message;
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
