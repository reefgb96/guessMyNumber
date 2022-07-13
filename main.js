'use strict';

let secretNum = Math.trunc(Math.random() * 20 + 1);
console.log(`Random number: ${secretNum}`);

let score = document.querySelector('.score').textContent;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = `NO NUMBER ENTERED
        please enter a number between 1-20.`;
  } else if (guess === secretNum) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
    document.querySelector('.message').textContent =
      '🚀 YOUR GUESS IS CORRECT!';
    document.querySelector('.highScore').textContent =
      document.querySelector('.score').textContent;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNum;
  } else if (guess > secretNum) {
    document.querySelector('.message').textContent = '📈  GUESS LOWER.';
    document.querySelector('.score').textContent--;
  } else if (guess < secretNum) {
    document.querySelector('.message').textContent = '📉 GUESS HIGHER.';
    document.querySelector('.score').textContent--;
  } else if (score < 1) {
    document.querySelector('.message').textContent =
      '👎  YOU LOST THE GAME. TRY AGAIN.';
  }

  document.querySelector('.again').addEventListener('click', function () {
    secretNum = Math.trunc(Math.random() * 20 + 1);
    console.log(`Random number: ${secretNum}`);
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
  });
});
