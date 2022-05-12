const computersChoiceDisplay = document.getElementById('computers-choice');
const userChoiceDisplay = document.getElementById('users-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const displayUserScore = document.getElementById('displayUserScore');
const displayComputerScore = document.getElementById('displayComputerScore');
const round = document.getElementById('round');
let userChoice;
let userChoice1;
let result;
let userScore = 0;
let computerScore = 0;
let displayScore;
let displayRound;
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    
    if (userChoice === "rock") {
        userChoice1 = "✊"
        
    }
    if (userChoice === "scissors") {
        userChoice1 = "✌️"
    }
    if (userChoice === "paper") {
        userChoice1 = "✋"
    }
    userChoiceDisplay.innerHTML = userChoice1;
    generateComputerChoice();
    getResult();
    getRound();

}))

function generateComputerChoice() {

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computersChoice = "rock";
        computersChoice1 = "✊"
        
    }
    if (randomNumber === 2) {
        computersChoice = "scissors";
        computersChoice1 = "✌️"
    }
    if (randomNumber === 3) {
        computersChoice = "paper";
        computersChoice1 = "✋"
    }
    computersChoiceDisplay.innerHTML = computersChoice1;
}

function getResult() {
    if (computersChoice === userChoice) {
        result = "It's draw !";

    }

    if (computersChoice === "rock" && userChoice === "paper") {
        result = "You Win !";
        userScore++;
    }

    if (computersChoice === "rock" && userChoice === "scissors") {
        
        result = "You lost !";
        computerScore++;
    }

    if (computersChoice === "paper" && userChoice === "scissors") {
        result = "You Win !";
        userScore++;
    }
    if (computersChoice === "paper" && userChoice === "rock") {
        result = "You lost !";
        computerScore++;
    }
    if (computersChoice === "scissors" && userChoice === "rock") {
        result = "You win !";
        userScore++;
    }
    if (computersChoice === "scissors" && userChoice === "paper") {
        result = "You lose !";
        computerScore++;
    }
    resultDisplay.innerHTML = result;
    displayUserScore.innerHTML = userScore;
    displayComputerScore.innerHTML = computerScore;

}

function getRound() {
    if (userScore === 5) {
        displayRound = "User won the game";
        round.innerHTML = displayRound;
    }
    if (computerScore === 5) {
        displayRound = "computer won the game";
        round.innerHTML = displayRound;
    }
}