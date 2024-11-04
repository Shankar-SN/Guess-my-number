'use strict';
// to choose the html element that we want
/*
//console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.label-score').textContent);

document.querySelector('.message').textContent = 'Test';
console.log(document.querySelector('.message').textContent);

document.querySelector('.guess').value = 'Random Text';
console.log(document.querySelector('.guess').value);
*/
let scoreValue = Number(document.querySelector('.score').textContent);
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
// event listener
let HighScoreValue = Number(document.querySelector('.highscore').textContent);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // If No Number is entered
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
  // When the player wins the game
  else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = SecretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (scoreValue > HighScoreValue) {
      document.querySelector('.highscore').textContent = scoreValue;
      HighScoreValue = scoreValue; //
    } else {
      document.querySelector('.highscore').textContent = HighScoreValue;
    }
    console.log(
      `High Score Value is ${
        document.querySelector('.highscore').textContent
      } and its type ${typeof document.querySelector('.highscore').textContent}`
    );
  }
  // Guess too high
  else if (guess > SecretNumber) {
    if (scoreValue > 1) {
      scoreValue--;
      document.querySelector('.message').textContent = 'Too High!';

      document.querySelector('.score').textContent = scoreValue;
    } else {
      document.querySelector('.message').textContent =
        'Soory ! You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // guess too low
  else if (guess < SecretNumber) {
    if (scoreValue > 1) {
      scoreValue--;

      document.querySelector('.message').textContent = 'Too Low!';
      document.querySelector('.score').textContent = scoreValue;
      console.log(` Score Value is ${scoreValue}`);
    } else {
      document.querySelector('.message').textContent =
        'Soory ! You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  scoreValue = 20;

  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing!';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = scoreValue;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
