// Play game
function playGame(){

  let winningScore = prompt("What score do you want to play to? ");

  let computerScore = 0;
  let humanScore = 0;

  while(computerScore < winningScore &&
        humanScore < winningScore){

          let roundWinner = playRoundAndGetWinner();

          if (roundWinner === "human"){

            humanScore++;

          }

          if (roundWinner === "computer"){

            computerScore++;

          }

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

function determineRoundWinner(computerAction, humanAction){

  if (computerAction === humanAction){

    return "draw";

  }

  if ((computerAction === "rock" && humanAction === "scissors") ||
      (computerAction === "paper" && humanAction === "rock") ||
      (computerAction === "scissors" && humanAction === "paper")){

        return "computer";
      }

  return "human";

}

function printWinner(computerScore, humanScore){

  if (computerScore > humanScore){

    console.log(`You lost the game! The computer won ${computerScore}, ${humanScore}`)

  }

  else {

    console.log(`You won the game! The final score was ${humanScore}, ${computerScore}`)

  }
}



