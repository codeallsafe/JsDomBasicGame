'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let checkButton = document.querySelector('.check');
let message = document.querySelector('.message');
let score = 20;
let highscore = 0;
let myscore = document.querySelector('.score');
let number = document.querySelector('.number');
let againBtn = document.querySelector('.again');
let high = document.querySelector('.highscore');

const displayMessage = function (myMessage) {
  message.textContent = myMessage;
};

function getCheckValue() {
  let guessNum = Number(document.querySelector('.guess').value);
  console.log(typeof guessNum, guessNum);

  if (!guessNum) {
    displayMessage('🤔 No Number!');
  } else if (guessNum === secretNumber) {
    displayMessage('✨ Currect number!');
    document.body.style.background = 'green';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      high.textContent = highscore;
    } else {
      high.textContent = highscore;
    }
  } else if (guessNum !== secretNumber) {
    if (score > 1) {
      displayMessage(guessNum > secretNumber ? '😒 Too high!' : '😒 To low!');
      score--;
      myscore.textContent = score;
    } else {
      displayMessage(' 🤢 You lost the game!');
      myscore.textContent = 0;
    }
  }
}

function again() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  myscore.textContent = score;
  displayMessage(' 🎏 Start guessing...');
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.background = '#222';
  number.style.width = '15rem';
}

checkButton.addEventListener('click', getCheckValue);
againBtn.addEventListener('click', again);
