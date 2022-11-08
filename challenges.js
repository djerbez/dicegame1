const button = document.querySelector('.btn-roll');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const currentScore1 = document.getElementById('current-0');
const currentScore2 = document.getElementById('current-1');
const totalScore1 = document.getElementById('score-0');
const totalScore2 = document.getElementById('score-1');
currentScore1.innerText = 0;
currentScore2.innerText = 0;
totalScore1.innerText = 0;
totalScore2.innerText = 0;

const player1 = {
    currentScore : 0,
    totalScore : 0,
    isActive: true,
}
const player2 = {
    currentScore : 0,
    totalScore : 0,
    isActive: false,
}
changeDice = () => {
    let randomnumber1 = Math.floor(Math.random() * 6) +1;
    let randomnumber2 = Math.floor(Math.random() * 6) +1;
    dice1.src = "dice-" + randomnumber1 + ".png";
    dice2.src = "dice-" + randomnumber2 + ".png";
    if (randomnumber1 !== 1 && randomnumber2 !== 1) {
        player1.isActive = true
        player2.isActive = false}
        else {
            player1.isActive = false
            player2.isActive = true
        }
    if (player1.isActive) {
        player1.currentScore = randomnumber1 + randomnumber2;
        player1.totalScore += player1.currentScore;
    }
    else {
        player2.currentScore = randomnumber1 + randomnumber2;
        player2.totalScore += player2.currentScore;
    }
    currentScore1.innerText = player1.currentScore;
    currentScore2.innerText = player2.currentScore;
    totalScore1.innerText = player1.totalScore;
    totalScore2.innerText = player2.totalScore;
}

button.addEventListener("click", () => changeDice());