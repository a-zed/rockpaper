// *** Game Function (IIFE) ***
(function game(){

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
})()


// *** Round Function ***
function round();
// Generate random action for the computer
// Get action input from user (rock, paper or scissors)
// Determine winner
// Notify user of the result
// Return winner