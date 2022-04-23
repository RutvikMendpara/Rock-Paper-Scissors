const computersChoiceDisplay = document.getElementById('computers-choice');
const userChoiceDisplay = document.getElementById('users-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click' , (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult()
    
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    
    if(randomNumber === 1){
        computersChoice = "rock";
    }
    if(randomNumber === 2){
        computersChoice = "scissors";
    }
    if(randomNumber === 3){
        computersChoice = "paper";
    }
    computersChoiceDisplay.innerHTML = computersChoice;
}

function getResult(){
    if (computersChoice === userChoice){
        result = "It's draw !"
    }
    if (computersChoice === "rock" && userChoice === "paper"){
        result = "You Win !"
    }
    
    if (computersChoice === "rock" && userChoice === "scissors"){
        result = "You lost !"
    }
    
    if (computersChoice === "paper" && userChoice === "scissors"){
        result = "You Win !"
    }
    if (computersChoice === "paper" && userChoice === "rock"){
        result = "You lost !"
    }
    if (computersChoice === "scissors" && userChoice === "rock"){
        result = "You win !"
    }
    if (computersChoice === "scissors" && userChoice === "paper"){
        result = "You lose !"
    }
    resultDisplay.innerHTML = result;
    
}