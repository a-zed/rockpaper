// when user clicks Start Game button
let startButton = document.querySelector("#startGame");
startButton.addEventListener("click", playGame);

async function playGame(){
    // Get number of rounds user wants to play
    const roundsToPlay = 5;
  
    // Calculate number of round wins required to win the game (majority)
    const roundWinsRequired = Math.floor((roundsToPlay / 2) + 1);
  
    // Declare variables to track scores and winner of each round
    let userScore = 0;
    let computerScore = 0;
  
    // remove welcome screen elements
    const welcomeScreen = document.querySelector("#intro");
    welcomeScreen.remove();
  
    // show game layout
    const gameScreen = document.querySelector("#gameScreen");
    gameScreen.style.display = "flex";
  
    // store userChoices in a node list 
    const userChoices = document.querySelectorAll(".userChoice");
  
    while (userScore < roundWinsRequired && computerScore < roundWinsRequired) {
      // Wait for user to make a choice
      const userChoice = await new Promise(resolve => {
        userChoices.forEach(choice => {
          choice.addEventListener("click", () => {
            resolve(choice.id);
          }, { once: true });
        });
      });
  
      // Generate computer choice
      const computerChoice = getComputerChoice();
  
      // Determine round winner
      const roundWinner = determineRoundWinner(userChoice, computerChoice);
  
      // Display round result
      displayRoundWinner(roundWinner);
  
      // Update scores
      if (roundWinner === "user") {
        userScore++;
      } else if (roundWinner === "computer") {
        computerScore++;
      }
  
      // Display current score
      console.log(`Current score: User ${userScore} - Computer ${computerScore}`);
  
      // Check if the game is over
      if (userScore === roundWinsRequired || computerScore === roundWinsRequired) {
        break;
      }
  
      // Delay next round for 1 second
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  
    // Print winner of game
    if (userScore > computerScore) {
      console.log("...and you've now won the game!");
    } else {
      console.log("...and the computer has now won the game! Better luck next time.");
    }
  }
  


// *** Round Function - Plays a single round of rock, paper, scissors
function playRound(userChoice) {

    // Generate random choice (rock, paper or scissors) for the computer
    let computerChoice = getComputerChoice();

    // Determine round winner
    let roundWinner = determineRoundWinner(userChoice, computerChoice);

    // Display winner of the round
    displayRoundWinner(roundWinner);

    // Return winner
    return roundWinner;
}


// *** Get Computer Choice Function - Generates a random choice (rock, paper or scissors) for the computer
function getComputerChoice(){

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

    console.log(computerChoice);

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
