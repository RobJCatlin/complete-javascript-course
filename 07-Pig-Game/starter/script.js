'use strict';

const score0El = document.querySelector('#score--0'),
  score1El = document.querySelector('#score--1'),
  dice = document.querySelector('.dice'),
  btnNew = document.querySelector('.btn--new'),
  btnRoll = document.querySelector('.btn--roll'),
  btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  const diceRoll = Math.trunc(Math.random() * 6) + 1;

  dice.classList.remove('hidden');
  dice.src = `dice-${diceRoll}.png`;

  if (diceRoll != 1) {
    currentScore += diceRoll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; //change later
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

document.querySelector('.player--active');

// if btnhold pressed, add score to #score0El
btnHold.addEventListener('click', function () {
  //get current score
  //keep current score
  //push to scores array?
});
