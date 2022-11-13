function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return [0,0,"It's a draw !"];
    } else if(((playerSelection.toLowerCase() == 'rock') && (computerSelection == 'paper')) || ((playerSelection.toLowerCase() == 'paper') && (computerSelection == 'scissors')) || ((playerSelection.toLowerCase() == 'scissors') && (computerSelection == 'rock'))) {
        return [0,1,`You lost! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`];
    } else {
        return [1,0,`You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`];
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round;

    for (let i = 0; i <5; i++) {
        round = playRound(prompt("Choose Rock, Paper or Scissors"), getComputerChoice());
        playerScore += round[0];
        computerScore += round[1];
        console.log(round[2]+ ` ${playerScore} v ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("Player wins !"+ ` ${playerScore} v ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log("Computer wins !"+ ` ${playerScore} v ${computerScore}`);
    } else {
        console.log("It's a draw !"+ ` ${playerScore} v ${computerScore}`);
    }
}

game()