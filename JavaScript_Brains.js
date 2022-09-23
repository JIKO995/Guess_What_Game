// JIKO995
'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let realScore = document.querySelector('.score').textContent;
let highScore = 0;
console.log(secretNumber);

//Again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  realScore = 20;
  document.querySelector('.score').textContent = realScore;
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector(
      '.message'
    ).textContent = `<---Put a number inside the box`;
    //winning the game
  } else if (guess === secretNumber) {
    highScore = secretNumber;
    //update the hightscore with the new one if it is nessesarry
    if (realScore > highScore) {
      highScore = realScore;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector(
      '.message'
    ).textContent = `Conrgatulations you guessed it right!!!`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (realScore === 0) {
      document.querySelector('.message').textContent = `You just lost...`;
    } else {
      realScore--;
      document.querySelector('.score').textContent = realScore;
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? `You are guessing too high my dude...`
          : `You are guessing too low my fellow nerd...`;
    }
  }
});
