let playerScore = 0;
let computerScore = 0;
let message = "";
let endMessage;

const scoreDisplay = document.querySelector('div.score');
const messageDisplay = document.querySelector('div.message');
const endMessageDisplay = document.querySelector('div.endMessage');

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function checkEnd() {
    if (playerScore == 5) {
        endMessage = "You Won !";
        computerScore = 0;
        playerScore = 0;
    } else if (computerScore ==5) {
        endMessage = "You Lost !";
        computerScore = 0;
        playerScore = 0;
    }
}

function playRound(playerSelection, computerSelection) {
    endMessage = ""
    if (playerSelection.toLowerCase() == computerSelection) {
        message = "It's a draw !";
    } else if(((playerSelection.toLowerCase() == 'rock') && (computerSelection == 'paper')) || ((playerSelection.toLowerCase() == 'paper') && (computerSelection == 'scissors')) || ((playerSelection.toLowerCase() == 'scissors') && (computerSelection == 'rock'))) {
        message = `You lost! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
        computerScore += 1; 
    } else {
        message = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
        playerScore += 1;
    }
    console.log(message)
    scoreDisplay.textContent =`${playerScore} - ${computerScore}`
    messageDisplay.textContent = message
    checkEnd()
    endMessageDisplay.textContent = endMessage

}


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice());
  });
});

