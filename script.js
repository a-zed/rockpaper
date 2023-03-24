// Play game
function playGame(){

  // Get the score user wants to play to
  let winningScore = prompt("What score do you want to play to? ");

  // Set computer + human scores to zero
  let computerScore = 0;
  let humanScore = 0;

  // While both scores are less than score specified
  while(computerScore < winningScore &&
        humanScore < winningScore){

          // Play Round and store winner
          let roundWinner = playRound();

          // Update scores
          updateScores(roundWinner)
        }

  // print winner
  printWinner(computerScore, humanScore)
}

