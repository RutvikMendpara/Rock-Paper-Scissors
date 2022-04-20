function game() {
    for (let i = 1; i < 6; i++) {

        // let computerScore = 0;
        // let playerScore = 0;

        // let playerSelection = window.prompt();

        //convert UPPERCASE to lowercase
        playerSelection = playerSelection.toLowerCase();

        //generate random 3 number between 1 to 3 
        let computerSelection = Math.floor(Math.random() * 3) + 1;

        switch (computerSelection) {
            case 1:
                computerSelection = "rock";
                break;
            case 2:
                computerSelection = "paper";
                break;

            case 3:
                computerSelection = "scissors";
                break;
            default:
                console.log("unexpected error occurred");

        }

        console.log("");
        console.log("ROUND " + i);
        console.log("Computers choice = " + computerSelection);
        console.log("Your choice = " + playerSelection);

        function playRound(playerSelection, computerSelection) {


            // players choice = rock
            if (playerSelection == "rock") {
                if (computerSelection == "rock") {
                    console.log("It's tie. Your choice was " + playerSelection + " and Computer's choice was " + computerSelection + ".");

                    // console.log("Your score : "+playerScore);
                    // console.log("Computer's score : "+computerScore);
                }
                else if (computerSelection == "paper") {
                    console.log("You Lose! Paper beats Rock");

                    // computerScore = computerScore + 1;
                    // console.log("Your score : "+playerScore);
                    // console.log("Computer's score : "+computerScore);
                }
                else if (computerSelection == "scissors") {
                    console.log("You Won! scissors beats Rock");

                    // playerScore = playerScore + 1;
                    // console.log("Your score : "+playerScore);
                    // console.log("Computer's score : "+computerScore);
                }
                else {
                    console.log("unexpected error occurred");
                }

            }

            // players choice = paper
            else if (playerSelection == "paper") {
                if (computerSelection == "paper") {
                    console.log("It's tie. Your choice was " + playerSelection + " and Computer's choice was " + computerSelection + ".");

                    // console.log("Your score : "+playerScore);
                    // console.log("Computer's score : "+computerScore);

                }
                else if (computerSelection == "rock") {
                    console.log("You Won! Paper beats Rock");

                    // playerScore = playerScore + 1;
                    // console.log("Your score : "+playerScore);
                    // console.log("Computer's score : "+computerScore);
                }
                else if (computerSelection == "scissors") {
                    console.log("You Lose! scissors beats paper");

                    // computerScore = computerScore + 1;
                    // console.log("Your score : "+playerScore);
                    // console.log("Computer's score : "+computerScore);
                }
                else {
                    console.log("unexpected error occurred");
                }

            }

            // player choice = scissors
            else if (playerSelection == "scissors") {
                if (computerSelection == "scissors") {
                    console.log("It's tie. Your choice was " + playerSelection + " and Computer's choice was " + computerSelection + ".");

                    // console.log("Your score : "+playerScore);
                    // console.log("Computer's score : "+computerScore);

                }
                else if (computerSelection == "paper") {
                    console.log("You Won! scissors beats paper");

                    // playerScore = playerScore + 1;
                    // console.log("Your score : "+playerScore);
                    // console.log("Computer's score : "+computerScore);
                }
                else if (computerSelection == "rock") {
                    console.log("You Lose! rock beats scissors");

                    // computerScore = computerScore + 1;
                    // console.log("Your score : "+playerScore);
                    // console.log("Computer's score : "+computerScore);
                }
                else {
                    console.log("unexpected error occurred");
                }
            }

            // if user type incorrect choice

            else {
                console.log("Enter Your choice correctly");
            }


        }
        playRound(playerSelection, computerSelection);
    }
}
game();