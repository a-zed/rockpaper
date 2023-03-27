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

          printCurrentScore(computerScore, humanScore);

        }

  printGameWinner(computerScore, humanScore);
}


function playRoundAndGetWinner(){

  let computerAction = generateRandomAction();

  let humanAction = prompt("Enter your choice for this round - rock, paper or scissors ");

  let roundWinner = determineRoundWinner(computerAction, humanAction);

  printRoundWinner(roundWinner, computerAction, humanAction);

  return roundWinner;

}

function generateRandomAction(){

  // generate random number from 1 to 3
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1){
    return "rock";
  }

  if (randomNumber === 2){
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


function printRoundWinner(roundWinner, computerAction, humanAction){

  if (roundWinner === "draw"){

    console.log(`You both played ${computerAction}, so this round is a draw!`);
    
  }

  else if (roundWinner === "computer"){

    console.log(`${computerAction} beats ${humanAction}, so the computer wins this round!`);
    
  }  

  else {

    console.log(`${humanAction} beats ${computerAction}, so you win this round!`);

  }
  
}


function printCurrentScore(computerScore, humanScore){

  console.log(`Computer: ${computerScore}   Human: ${humanScore}`);
  
}



function printGameWinner(computerScore, humanScore){

  if (computerScore > humanScore){

    console.log(`You lost the game! The computer won ${computerScore}, ${humanScore}`);

  }

  else {

    console.log(`You won the game! The final score was ${humanScore}, ${computerScore}`);

  }
}



