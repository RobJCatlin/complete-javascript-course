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

let currentScore = 0;

btnRoll.addEventListener('click', function () {
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
});

dice.classList.remove('hidden');
dice.src = `dice-${diceRoll}.png`;

if (diceRoll != 1) {
  currentScore += diceRoll;
} else {
  switchPlayer();
}
