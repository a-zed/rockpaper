// *** Game Function - Plays a multi-round game of rock, paper, scissors
function playGame(){

    // Get number of rounds user wants to play
    let roundsToPlay = parseInt(prompt("How many rounds do you want to play?", "5"));

    // Calculate number of round wins required to win the game (majority)
    let roundWinsRequired = Math.floor((roundsToPlay / 2) + 1);

    // Declare variables to track scores and winner of each round
    let userScore = 0;
    let computerScore = 0;
    let roundWinner;

    // While there is no winner
    while (userScore < roundWinsRequired && computerScore < roundWinsRequired){

        // Play round and store winner
        roundWinner = playRound();

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
        console.log("...and you've now won the game!")
    }

    else {
        console.log("...and the computer has now won the game! Better luck next time.")
    }
}


// *** Round Function - Plays a single round of rock, paper, scissors
function playRound() {

    // Generate random choice (rock, paper or scissors) for the computer
    let computerChoice = getcomputerChoice();

    // Get user's choice from user (rock, paper or scissors)
    let userChoice = (prompt("Rock, paper, or scissors?")).toLowerCase();

    // Determine round winner
    let roundWinner = determineRoundWinner(userChoice, computerChoice);

    // Display winner of the round
    displayRoundWinner(roundWinner);

    // Return winner
    return roundWinner;
}


// *** Get Computer Choice Function - Generates a random choice (rock, paper or scissors) for the computer
function getcomputerChoice(){

    let computerChoice;

    let randomNumber = Math.floor((Math.random() * 30) + 1);

    if (randomNumber <= 10){
        computerChoice = "rock"
    }

    else if (randomNumber <= 20){
        computerChoice = "paper"
    }

    else {
        computerChoice = "scissors"
    }

    return computerChoice;
}


// *** Determine Round Winner Function
function determineRoundWinner(userChoice, computerChoice){

    let roundWinner;

    if (computerChoice === userChoice){
        roundWinner = "tie";
    }

    else if ((computerChoice === "scissors" && userChoice === "rock") || 
             (computerChoice === "rock" && userChoice === "paper") ||
             (computerChoice === "paper" && userChoice === "scissors")){

        roundWinner = "user";
    }

    else {
        roundWinner = "computer";
    }

    return roundWinner;
}


// *** Display Round Winner Function
function displayRoundWinner(roundWinner){

    if (roundWinner === "user"){
        console.log("You won this round!");
    }

    else if (roundWinner === "computer"){
        console.log("You lost this round!");
    }

    else {
        console.log("It's a tie!");
    }
}
