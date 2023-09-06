'Use strict';
// selecting Element
const player1score = document.querySelector('#score--0');
const player2score = document.querySelector('#score--1');
const displayDice = document.querySelector('.dice');
const player1CurrentScore = document.querySelector('#current--0');
const player2CurrentScore = document.querySelector('#current--1');
const player1Toggle = document.querySelector('.player--0');
const player2Toggle = document.querySelector('.player--1');
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1Toggle.classList.toggle('player--active');
  player2Toggle.classList.toggle('player--active');
};

// setting the game visuals
let scores = [0, 0];
player1score.textContent = 0;
player2score.textContent = 0;
displayDice.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
let playing = true;
// clicking the roll dice botton
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (playing) {
    // generating random number
    const randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
    // rolling the dice
    displayDice.classList.remove('hidden');
    displayDice.src = `dice-${randomDiceNumber}.png`;
    // adding number to current score
    if (randomDiceNumber !== 1) {
      currentScore += randomDiceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // toggling btween player

      switchPlayer();
    }
  }
});

// clicking the hold botton
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    // adding currentScore to player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //ending the game

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      displayDice.classList.add('hidden');
    } else {
      // toggling btween player
      switchPlayer();
    }
  }
});

//clicking the new game botton
document.querySelector('.btn--new').addEventListener('click', function () {
  playing = true;
  //setting all scores to zero
  currentScore = 0;
  scores = [0, 0];
  player1score.textContent = 0;
  player2score.textContent = 0;
  player1CurrentScore.textContent = currentScore;
  player2CurrentScore.textContent = currentScore;
  displayDice.classList.add('hidden');
  //player 1 starts the game
  player1Toggle.classList.add('player--active');
  player2Toggle.classList.remove('player--active');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 0;
});
