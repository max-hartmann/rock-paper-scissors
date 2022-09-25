const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("Draw");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return ("Computer wins. Paper beats Rock");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return ("Player wins. Rock beats Scissors");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return ("Player wins. Paper beats Rock");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return ("Computer wins. Scissors beats Paper");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return ("Computer wins. Rock beats Scissors");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return ("Player wins. Scissors beats paper");
    }
}



function game() {
    const NUMBER_OF_ROUNDS = 5;
    let score = 0;

    for (let i=0; i < NUMBER_OF_ROUNDS; i++) {
        console.log(playRound(getPlayerChoice(),getComputerChoice()));
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