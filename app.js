// *** Game Function (IIFE) ***
function game(){

    // Get number of rounds user wants to play
    let rounds = parseInt(prompt("How many rounds do you want to play?", "5"));

    // Calculate number of round wins required to win the game (majority)
    let winsRequired = Math.floor((rounds / 2) + 1);

    // declare variables to track scores and winner of each round
    let userScore = 0;
    let computerScore = 0;
    let roundWinner;

    // While there is no winner
    while (userScore < winsRequired && computerScore < winsRequired){

        // Play round and store winner
        roundWinner = round();

        // Update scores (no score increase if round is a draw)
        if (roundWinner === "computer"){
            computerScore++;
        }

        else if (roundWinner === "user"){
            userScore++;
        }
    }
    // Print winner of game
    if (userScore > computerScore){
        console.log("You win the game!")
    }

    else {
        console.log("The computer wins the game! Better luck next time.")
    }
}


// *** Round Function ***
function round() {

    // Declare variable to store computer's action
    let computerAction;

    // Generate random action for the computer
    let randomAction = Math.floor((Math.random() * 30) + 1);

    if (randomAction <= 10){
        computerAction = "rock"
    }

    else if (randomAction <= 20){
        computerAction = "paper"
    }

    else {
        computerAction = "scissors"
    }

    // Get action input from user (rock, paper or scissors) and store in variable
    let userAction = (prompt("Rock, paper, or scissors?")).toLowerCase();

    // Declare variable to store round winner
    let roundWinner;

    // Determine round winner
    if (computerAction === userAction){
        roundWinner = "tie";
    }

    else if ((computerAction === "scissors" && userAction === "rock") || 
             (computerAction === "rock" && userAction === "paper") ||
             (computerAction === "paper" && userAction === "scissors")){

        roundWinner = "user";
    }

    else {
        roundWinner = "computer";
    }

    // Notify user of the result
    if (roundWinner === "user"){
        console.log("You won this round!");
    }

    else if (roundWinner === "computer"){
        console.log("You lost this round!");
    }

    else {
        console.log("It's a tie!");
    }

    // Return winner
    return roundWinner;
}