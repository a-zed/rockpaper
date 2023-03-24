// Play game
function playGame(){

  let winningScore = prompt("What score do you want to play to? ");

  let computerScore = 0;
  let humanScore = 0;

  while(computerScore < winningScore &&
        humanScore < winningScore){

          let roundWinner = playRound();

          updateScores(roundWinner);
        }

  printWinner(computerScore, humanScore);
}


function playRound(){

  let computerAction = generateRandomAction();

  let humanAction = prompt("Enter your choice for this round - rock, paper or scissors ");

  let roundWinner = determineRoundWinner(computerAction, humanAction);

  return roundWinner;

}

