'use strict';

let secretNum = Math.trunc(Math.random() * 20 + 1);
console.log(`Random number: ${secretNum}`);

let score = 20;
let highScore = 0;
let msg = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    msg(`NO NUMBER ENTERED
        please enter a number between 1-20.`);
  } else if (guess === secretNum) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
    msg('🚀 YOUR GUESS IS CORRECT!');
    document.querySelector('.highScore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNum;
  } else if (guess !== secretNum) {
    score--;
    document.querySelector('.score').textContent = score;
    msg(guess > secretNum ? '📈  GUESS LOWER.' : '📉 GUESS HIGHER.');
    if (score < 1) {
      msg('👎  YOU LOST THE GAME. TRY AGAIN.');
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    secretNum = Math.trunc(Math.random() * 20 + 1);
    console.log(`Random number: ${secretNum}`);
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    msg('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
  });
});
