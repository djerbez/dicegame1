const button = document.querySelector(".btn-roll");
const button1 = document.querySelector(".btn-new");
const button2 = document.querySelector(".btn-hold");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const currentScore1 = document.getElementById("current-0");
const currentScore2 = document.getElementById("current-1");
const totalScore1 = document.getElementById("score-0");
const totalScore2 = document.getElementById("score-1");
const name1 = document.querySelector(".player-0-panel");
const name2 = document.querySelector(".player-1-panel");
currentScore1.innerText = 0;
currentScore2.innerText = 0;
totalScore1.innerText = 0;
totalScore2.innerText = 0;

const player1 = {
  currentScore: 0,
  totalScore: 0,
  isActive: true,
  isWinner: false,
};
const player2 = {
  currentScore: 0,
  totalScore: 0,
  isActive: false,
  isWinner: false,
};
changeDice = () => {
  let randomnumber1 = Math.floor(Math.random() * 6) + 1;
  let randomnumber2 = Math.floor(Math.random() * 6) + 1;
  dice1.src = "dice-" + randomnumber1 + ".png";
  dice2.src = "dice-" + randomnumber2 + ".png";
  if (randomnumber1 === 1 && randomnumber2 === 1) {
    player1.isActive = true;
    player2.isActive = false;
  } else {
    player1.isActive = false;
    player2.isActive = true;
  }
  if (player1.isActive) {
    player1.currentScore = randomnumber1 + randomnumber2;
    player1.totalScore += player1.currentScore;
    player2.currentScore = 0;
    player2.totalScore = 0;
    name1.classList.add("active");
    name2.classList.remove("active");
  } else {
    player2.currentScore = randomnumber1 + randomnumber2;
    player2.totalScore += player2.currentScore;
    player1.currentScore = 0;
    player1.totalScore = 0;
    name2.classList.add("active");
    name1.classList.remove("active");
  }

  if (player1.totalScore >= 100) {
    name1.classList.remove("active");
    name1.classList.add("winner");
    player1.isWinner = true;
  } else {
  }
  if (player2.totalScore >= 100) {
    name2.classList.remove("active");
    name2.classList.add("winner");
    player2.isWinner = true;
  } else {
  }
  currentScore1.innerText = player1.currentScore;
  currentScore2.innerText = player2.currentScore;
  totalScore1.innerText = player1.totalScore;
  totalScore2.innerText = player2.totalScore;
};

button.addEventListener("click", () => changeDice());

const newGame = () => {
  player1.currentScore = 0;
  player1.totalScore = 0;
  player2.currentScore = 0;
  player2.totalScore = 0;
  currentScore1.innerText = 0;
  currentScore2.innerText = 0;
  totalScore1.innerText = 0;
  totalScore2.innerText = 0;
};
button1.addEventListener("click", () => newGame());

const holdScore = () => {
  if (player1.isActive) {
    name1.classList.remove("active");
    name2.classList.add("active");
    player2.isActive = true;
    player1.isActive = false;
    player1.currentScore = 0;
    currentScore2.innerText = player2.currentScore;
    totalScore2.innerText = player2.totalScore;
  } else {
    name2.classList.remove("active");
    name1.classList.add("active");
    player2.isActive = false;
    player1.isActive = true;
    player1.currentScore = 0;
    currentScore1.innerText = player1.currentScore;
    totalScore1.innerText = player1.totalScore;
  }
};
button2.addEventListener("click", () => holdScore());
