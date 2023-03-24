// Play game
function playGame(){

  let winningScore = prompt("What score do you want to play to? ");

  let computerScore = 0;
  let humanScore = 0;

  while(computerScore < winningScore &&
        humanScore < winningScore){

          let roundWinner = playRoundAndGetWinner();

          updateScores(roundWinner);
        }

  printWinner(computerScore, humanScore);
}


function playRoundAndGetWinner(){

  let computerAction = generateRandomAction();

  let humanAction = prompt("Enter your choice for this round - rock, paper or scissors ");

  let roundWinner = determineRoundWinner(computerAction, humanAction);

  return roundWinner;

}

function generateRandomAction(){

  // generate random number from 0 and 2
  let randomNumber = Math.round(Math.random() * 2)

  if (randomNumber === 0){
    return "rock";
  }

  if (randomNumber === 1){
    return "paper";
  }

  else {
    return "scissors";
  }
}



