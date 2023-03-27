// Plays a game of rock, paper, scissors
function playGame(){

  let winningScore = getScoreRequiredToWin();

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

// Gets the score required to win from user (validated) and returns it
function getScoreRequiredToWin(){

  let winningScore = parseFloat(prompt("What score do you want to play to? "));

  while (winningScore <= 0 ||
         Number.isInteger(winningScore) === false){

          winningScore = parseFloat(prompt("What score do you want to play to? (it has to be a positive whole number) "))

         }
  
  return winningScore;

}

// Plays a round of rock, paper, scissors. It then prints the round winner and returns it
function playRoundAndGetWinner(){

  let computerAction = generateRandomAction();

  let humanAction = prompt("Enter your choice for this round - rock, paper or scissors ");

  let roundWinner = determineRoundWinner(computerAction, humanAction);

  printRoundWinner(roundWinner, computerAction, humanAction);

  return roundWinner;

}

// Generates a random "rock, paper or scissors" action for the computer
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

// Determines the round winner and returns it
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

// Prints out the round winner
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

// Prints out the current score
function printCurrentScore(computerScore, humanScore){

  console.log(`Human: ${humanScore}   Computer: ${computerScore}`);

}

// Prints out the winner of the game
function printGameWinner(computerScore, humanScore){

  if (computerScore > humanScore){

    console.log(`You lost the game! The final score was --> Human: ${humanScore}   Computer: ${computerScore}`);

  }

  else {

    console.log(`You won the game! The final score was Human: ${humanScore}   Computer: ${computerScore}`);

  }
}



