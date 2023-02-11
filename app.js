// *** Game Function (IIFE) ***
function game(){

    // Get number of rounds user wants to play
    let rounds = parseInt(prompt("How many rounds do you want to play?", "5"));

    // Calculate number of round wins required to win the game (majority)
    let wins_required = Math.floor((rounds / 2) + 1);

    // declare variables to track scores and winner of each round
    let user_score = 0;
    let computer_score = 0;
    let round_winner;

    // While there is no winner
    while (user_score < wins_required && computer_score < wins_required){

        // Play round and store winner
        round_winner = round();

        // Update scores (no score increase if round is a draw)
        if (round_winner === "computer"){
            computer_score++;
        }

        else if (round_winner === "user"){
            user_score++;
        }
    }
    // Print winner of game
    if (user_score > computer_score){
        console.log("You win the game!")
    }

    else {
        console.log("The computer wins the game! Better luck next time.")
    }
}


// *** Round Function ***
function round() {

    // Declare variable to store computer's action
    let computer_action;

    // Generate random action for the computer
    let random_gen = Math.floor((Math.random() * 30) + 1);

    if (random_gen <= 10){
        computer_action = "rock"
    }

    else if (random_gen <= 20){
        computer_action = "paper"
    }

    else {
        computer_action = "scissors"
    }

    // Get action input from user (rock, paper or scissors) and store in variable
    let user_action = (prompt("Rock, paper, or scissors?")).toLowerCase();

    // Declare variable to store round winner
    let round_winner;

    // Determine round winner
    if (computer_action === user_action){
        round_winner = "tie";
    }

    else if ((computer_action === "scissors" && user_action === "rock") || 
             (computer_action === "rock" && user_action === "paper") ||
             (computer_action === "paper" && user_action === "scissors")){

        round_winner = "user";
    }

    else {
        round_winner = "computer";
    }

    // Notify user of the result
    if (round_winner === "user"){
        console.log("You won this round!");
    }

    else if (round_winner === "computer"){
        console.log("You lost this round!");
    }

    else {
        console.log("It's a tie!");
    }

    // Return winner
    return round_winner;
}