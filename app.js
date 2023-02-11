// *** Game Function - Plays a multi-round game of rock, paper, scissors
function playGame(){

    // Get number of rounds user wants to play
    let roundsToPlay = parseInt(prompt("How many rounds do you want to play?", "5"));

    // Calculate number of round wins required to win the game (majority)
    let roundWinsRequired = Math.floor((roundsToPlay / 2) + 1);

    // declare variables to track scores and winner of each round
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
        console.log("You win the game!")
    }

    else {
        console.log("The computer wins the game! Better luck next time.")
    }
}


// *** Round Function - Plays a single round of rock, paper, scissors
function playRound() {

    // Generate random action (rock, paper or scissors) for the computer
    let computerAction = getComputerAction();

    // Get action input from user (rock, paper or scissors)
    let userAction = (prompt("Rock, paper, or scissors?")).toLowerCase();

    // Determine round winner
    let roundWinner = determineRoundWinner(userAction, computerAction);

    // Display winner of the round
    displayRoundWinner(roundWinner);

    // Return winner
    return roundWinner;
}


// *** Get Computer Action Function - Generates a random action (rock, paper or scissors) for the computer
function getComputerAction(){

    let computerAction;
    
    let randomNumber = Math.floor((Math.random() * 30) + 1);

    if (randomNumber <= 10){
        computerAction = "rock"
    }

    else if (randomNumber <= 20){
        computerAction = "paper"
    }

    else {
        computerAction = "scissors"
    }

    return computerAction;
}


// *** Determine Round Winner Function
function determineRoundWinner(userAction, computerAction){

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
