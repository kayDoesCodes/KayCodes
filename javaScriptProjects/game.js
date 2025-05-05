const headsBtn = document.getElementById("heads");
const tailsBtn = document.getElementById("tails");
const resetBtn = document.getElementById("reset");

const scores = JSON.parse(localStorage.getItem('gameScores')) || {
  wins : 0,
  losses: 0
};

function playGame(guess) {
  const result = Math.random() < 0.5 ? "Heads" : "Tails";
  if (guess === result) {
    scores.wins += 1;
    alert(`You guessed ${guess} and flipped ${result}. You win!\nwins: ${scores.wins}, losses: ${scores.losses}`);
  } else {
    scores.losses += 1;
    alert(`You guessed ${guess} and flipped ${result}. You lose!\nwins: ${scores.wins}, losses: ${scores.losses}`);
  }

  localStorage.setItem('gameScores', JSON.stringify(scores));
};

resetBtn.addEventListener("click", () => {
  localStorage.removeItem('gameScores');
  alert("Game scores have been reset.");
  scores.wins = 0;
  scores.losses = 0;
})

headsBtn.addEventListener("click", () => {
  playGame('Heads');
});

tailsBtn.addEventListener("click", () => {
  playGame('Tails');
});