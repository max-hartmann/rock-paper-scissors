const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let gameIsActive = true;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection === computerSelection) {
        result = "Draw";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        result = ("Computer wins.");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = ("Player wins.");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = ("Player wins.");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result = ("Computer wins.");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result = ("Computer wins.");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = ("Player wins.");
    }

    return {
        result: result,
        playerSelection: playerSelection,
        computerSelection: computerSelection
    }
}

function getPlayerChoice() {
    let playerChoice = sanitizeInput(prompt("Enter your choice"));

    while (!choices.includes(playerChoice)) {
        playerChoice = sanitizeInput(prompt("Invalid input. Enter your choice (Rock, Paper or Scissors)"));
    }

    return playerChoice;
}

function sanitizeInput(input) {
    return input.toLowerCase().charAt(0).toUpperCase() + input.toLowerCase().slice(1);
}

const playButtons = document.querySelectorAll(".playButton");

playButtons.forEach(btn => btn.addEventListener('click', (e) => {

    if (gameIsActive) {
        // console.log(e.target.dataset.choice);
        let choice = e.target.dataset.choice;
        let result = playRound(choice, getComputerChoice());

        if (result.result === "Player wins.") {
            playerScore++;
        } else if (result.result === "Computer wins.") {
            computerScore++;
        }

        

        if (computerScore === 5 || playerScore === 5) endGame();
        displayResults(result);


    } else {
        gameIsActive = true;
        playerScore = 0;
        computerScore = 0;
    }
})
);

function displayResults(result) {
    const roundResult = document.querySelector(".roundResult");
    
    if (result.result === "Player wins.") {
        roundResult.textContent = `${result.result} ${result.playerSelection} beats ${result.computerSelection} `;
    } else if (result.result === "Computer wins.") {
        roundResult.textContent = `${result.result} ${result.computerSelection} beats ${result.playerSelection} `;
    } else {
        roundResult.textContent = result.result;
    }

    const playerScoreDiv = document.querySelector(".playerScore");
    playerScoreDiv.textContent = playerScore;
    const computerScoreDiv = document.querySelector(".computerScore");
    computerScoreDiv.textContent = computerScore;
    const gameResult = document.querySelector(".gameResult");

    if (gameIsActive) {
        gameResult.textContent = "";
    } else {
        if (playerScore > computerScore) {
            gameResult.textContent = "Player wins the game!";
        } else {
            gameResult.textContent = "Computer wins! Boo!";
        }
    }
    
}

function endGame() {
   
    gameIsActive = false;

  

   
}