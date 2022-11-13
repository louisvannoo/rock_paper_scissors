function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return "It's a draw !";
    } else if(((playerSelection.toLowerCase() == 'rock') && (computerSelection == 'paper')) || ((playerSelection.toLowerCase() == 'paper') && (computerSelection == 'scissors')) || ((playerSelection.toLowerCase() == 'scissors') && (computerSelection == 'rock'))) {
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

