'use strict';

const score0El = document.querySelector('#score--0'),
  score1El = document.querySelector('#score--1'),
  dice = document.querySelector('.dice'),
  btnNew = document.querySelector('.btn--new'),
  btnRoll = document.querySelector('.btn--roll'),
  btnHold = document.querySelector('.btn--hold'),
  player0El = document.querySelector('.player--0'),
  player1El = document.querySelector('.player--1');

let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

const switchPlayers = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  const diceRoll = Math.trunc(Math.random() * 6) + 1;

  dice.classList.remove('hidden');
  dice.src = `dice-${diceRoll}.png`;

  if (diceRoll != 1) {
    //add roll value to score
    currentScore += diceRoll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; //change later
    //switch to next player
  } else {
    switchPlayers();
  }
});

btnHold.addEventListener('click', function () {
  //get current score
  scores[activePlayer] += currentScore;
  //show total score
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 20) {
    playing = false;
    dice.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // Switch to the next player
    switchPlayers();
  }
  // switchPlayers();
});
