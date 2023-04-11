'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 11;
document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);
*/

//   // When guess is too high
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📈 Too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '💥 You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }

//   // When guess is too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📉 Too low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '💥 You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }
// }

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
});

// when user input string or float
if (!guess) {
  // document.querySelector('.message').textContent = 'No number!';
  displayMessage('no number');

  // when user is input same number
} else if (guess === secretNumber) {
  // document.querySelector('.message').textContent = 'correct Number';
  displaymessage('correct Number');
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }

  // when guess is wrong
} else if (guess !== secretNumber) {
  if (score > 1) {
    // document.querySelector('.message').textContent =
    // guess > secretNumber ? 'too high' : 'too low';
    displayMessage(guess > secretNumber ? 'too high' : 'too low');
    score--;
    document.querySelector('.score').textContent = score;
    // when trying over 20
  } else {
    // document.querySelector('.message').textContent = 'you lost the game';
    displayMessage('you lost the game');
    document.querySelector('.score').textContent = 0;
  }
}
//   // when user input number >guess

// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'start Guessing';
  displayMessage('start Guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
