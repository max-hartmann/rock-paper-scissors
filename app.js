const choices = ["Rock", "Paper", "Scissors"];

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



function game() {
    const NUMBER_OF_ROUNDS = 5;
    let score = 0;

    for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
        let playedRound = playRound(getPlayerChoice(), getComputerChoice());
        
        console.log(playedRound.result);
        console.log(playedRound.playerSelection);
        console.log(playedRound.computerSelection);

        

        if (playedRound.result === "Player wins.") {
            score++;
        }   

        console.log(`Current score is ${score}`);   
        
    }

    if(score > NUMBER_OF_ROUNDS/2) {
        console.log("Player wins the game");
    } else {
        console.log("Computer wins the game");
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