// function 0: play a game of rock, paper, scissors (IIFE)
(function(){

  // assign UI elements to variables
  let introSection = document.querySelector(".intro");
  let playSection = document.querySelector(".play");
  let winRoundSection = document.querySelector(".win-round");
  let loseGameSection = document.querySelector(".lose-game");
  let winGameSection = document.querySelector(".win-game");
  let startButton = document.querySelector("#start-button");
  let resetButton1 = document.querySelector("#reset-button-1");
  let resetButton2 = document.querySelector("#reset-button-2");

  // add event listeners
  startButton.addEventListener("click", playGame);
  resetButton1.addEventListener("click", displayIntroScreen);
  resetButton2.addEventListener("click", displayIntroScreen);


  // function 0-1: play a game of rock, paper, scissors vs the machines
  function playGame(){

    displayGameScreen();

    let opponentNumber = 1;


    // while opponent number is less than or equal to 5

      // play round of rock, paper, scissors

      // if round was lost
        // display lost screen
        // exit playGame function

      // display round win screen

      // increment opponent number
    
    // display game win screen







    // function 0-1-1: play round of rock, paper, scissors




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

  // Set up the UI for the rock, paper, scissors game
  function displayGameScreen(){

    introSection.style.display = "none";
    playSection.style.display = "flex";
    winRoundSection.style.display = "none";
    loseGameSection.style.display = "none";
    winGameSection.style.display = "none";
  }

  function displayIntroScreen(){

    introSection.style.display = "flex";
    playSection.style.display = "none";
    winRoundSection.style.display = "none";
    loseGameSection.style.display = "none";
    winGameSection.style.display = "none";
  }
  
  // Get the score required to win from user (validated) and returns it
  function getScoreRequiredToWin(){
  
    let winningScore = parseFloat(prompt("What score do you want to play to? "));
  
    while (winningScore <= 0 ||
           Number.isInteger(winningScore) === false){
  
            winningScore = parseFloat(prompt("What score do you want to play to? (it has to be a positive whole number) "))
  
           }
    
    return winningScore;
  
  }
  
  // Play a round of rock, paper, scissors. It then prints the round winner and returns it
  function playRoundAndGetWinner(){
  
    let computerAction = generateRandomAction();
  
    let humanAction = getHumanAction();
  
    let roundWinner = determineRoundWinner(computerAction, humanAction);
  
    printRoundWinner(roundWinner, computerAction, humanAction);
  
    return roundWinner;
  
  }
  
  // Generate a random "rock, paper or scissors" action for the computer
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
  
  // Get rock, paper or scissor action from user (validated)
  function getHumanAction(){
  
    let humanAction = prompt("Enter your choice for this round - rock, paper or scissors ").toLowerCase();
  
    while (humanAction !== "rock" &&
           humanAction !== "paper" &&
           humanAction !== "scissors"){
  
       humanAction = prompt("Enter your choice for this round - rock, paper or scissors (making sure to spell it correctly) ");
  
      }
  
  return humanAction;
  
  }
  
  // Determine the round winner and return it
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
  
  // Print out the round winner
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
  
  // Print out the current score
  function printCurrentScore(computerScore, humanScore){
  
    console.log(`Human: ${humanScore}   Computer: ${computerScore}`);
  
  }
  
  // Print out the winner of the game
  function printGameWinner(computerScore, humanScore){
  
    if (computerScore > humanScore){
  
      console.log(`You lost the game! The final score was --> Human: ${humanScore}   Computer: ${computerScore}`);
  
    }
  
    else {
  
      console.log(`You won the game! The final score was Human: ${humanScore}   Computer: ${computerScore}`);
  
    }
  }




});





// Change page background every 10s (IIFE)
(function() {

  let numberOfBackgroundImages = 5;

  preLoadAllBackgroundImages();

  const body = document.querySelector("body");

  setInterval(changeBackgroundImage, 10000);


  // Preload all background images
  function preLoadAllBackgroundImages(){

    const allBackgroundImages = [];

    for (let i = 0; i < numberOfBackgroundImages; i++){

      allBackgroundImages[i] = new Image();

      allBackgroundImages[i].src = `/images/background${i + 1}.png`;

    }

  }

  // Change the background image CSS rule to point to new background image
  function changeBackgroundImage(){

    let newBackgroundNumber = generateNewBackgroundNumber();
  
    body.style.backgroundImage = `url("/images/background${newBackgroundNumber}.png")`;
  
  }

  let previousRandomNumber = null;

  // Generate a new random background number to use in background image url (there are 5 images in total)
  function generateNewBackgroundNumber(){

    let randomNumber = Math.floor(Math.random() * numberOfBackgroundImages) + 1;

    while (randomNumber === previousRandomNumber){

      randomNumber = Math.floor(Math.random() * 5) + 1;

    }

    previousRandomNumber = randomNumber;

    return randomNumber;
  }

})();





