const choices = ["Rock", "Paper", "Scissors"];
let score = 0;

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
    // console.log(e.target.dataset.choice);
    let choice = e.target.dataset.choice;
    displayResults(playRound(choice, getComputerChoice()));
    
  })
);

function displayResults(result) {
    const roundResult = document.querySelector(".roundResult");
    roundResult.textContent = result.result;
    const score = document.querySelector(".score");
    score.textContent = result.score;

}