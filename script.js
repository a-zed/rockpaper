// play a game of rock, paper, scissors vs the machines (IIFE)
(function(){

  // Preload background images for more seamless user experience
  let numberOfBackgroundImages = 5;
  preLoadAllBackgroundImages();

  // Initializes opponent no. and sets to 1
  let opponentNumber = 1;


  async function playGame() {
    opponentNumber = 1;
    const gameWon = await playNextRound();
  
    if (gameWon) {
      displayWinScreen();
      await delay(13000);
      displayWinScreenImage();
    } else {
      displayLostScreen();
      await delay(13000);
      displayLostScreenImage();
    }
  }
  
  async function playNextRound() {
    if (opponentNumber <= 5) {
      let roundWinner = null;
  
      while (roundWinner !== "computer" && roundWinner !== "human") {
        if (roundWinner == "draw") {
          await delay(2000);
          displayRoundDrawScreen();
          await delay(2500);
        }
  
        roundWinner = await playRoundAndGetWinner();
      }
  
      if (roundWinner === "computer") {
        await delay(2000);
        return false; // Game lost
      } else {

        if (opponentNumber < 5){

          await delay(2000);
          displayRoundWinScreen();
        }
        
        await delay(2000);
        opponentNumber++;
        return await playNextRound();
      }
    }
  
    return true; // Game won
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  
  // Play a round of rock, paper, scissors. Then return the round winner
  async function playRoundAndGetWinner(){

    changeBackgroundImage();

    displayGameScreen();

    let humanAction = await waitForHumanAction();

    modifyHumanActionImages(humanAction);
  
    let computerAction = generateRandomAction();
  
    modifyComputerActionImage(computerAction);
  
    let roundWinner = determineRoundWinner(computerAction, humanAction);

    if (roundWinner == "computer"){
      playerActions.classList.add("blur");
    }

    if (roundWinner == "human"){
      machineChoice.classList.add("blur");
    }

    return roundWinner;
  
  }

  function waitForHumanAction() {
    return new Promise((resolve) => {
      function onClick(event) {
        choiceRock.removeEventListener("click", onClick);
        choicePaper.removeEventListener("click", onClick);
        choiceScissors.removeEventListener("click", onClick);
        resolve(event.target.id);
      }
      
      choiceRock.addEventListener("click", onClick);
      choicePaper.addEventListener("click", onClick);
      choiceScissors.addEventListener("click", onClick);
    });
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
  

  // HELPERS

  // assign UI elements to variables
  const introSection = document.querySelector(".intro");
  const playSection = document.querySelector(".play");
  const winRoundSection = document.querySelector(".win-round");
  const loseGameSection = document.querySelector(".lose-game");
  const loseGameImageSection = document.querySelector(".lose-game-image");
  const drawRoundSection = document.querySelector(".draw-round");
  const winGameSection = document.querySelector(".win-game");
  const winGameImageSection = document.querySelector(".win-game-image");
  const startButton = document.querySelector("#start-button");
  const resetButton1 = document.querySelector("#reset-button-1");
  const resetButton2 = document.querySelector("#reset-button-2");
  const machineName = document.querySelector("#machine-name");
  const machineChoice = document.querySelector("#machine-turn");
  const choiceRock = document.querySelector("#rock");
  const choicePaper = document.querySelector("#paper");
  const choiceScissors = document.querySelector("#scissors");
  const body = document.querySelector("body");
  const playerActions = document.querySelector(".player-actions");

  

  // add event listeners
  startButton.addEventListener("click", playGame);
  resetButton1.addEventListener("click", displayIntroScreen);
  resetButton2.addEventListener("click", displayIntroScreen);

 
  // Display intro screen
  function displayIntroScreen(){
    introSection.style.display = "flex";
    playSection.style.display = "none";
    winRoundSection.style.display = "none";
    loseGameSection.style.display = "none";
    winGameSection.style.display = "none";
    drawRoundSection.style.display = "none";
    loseGameImageSection.style.display = "none";
    winGameImageSection.style.display = "none";
    body.style.backgroundImage = `none`;
    body.classList.remove("cover");
  }
  
  // Display game screen
  function displayGameScreen(){

    introSection.style.display = "none";
    playSection.style.display = "flex";
    winRoundSection.style.display = "none";
    loseGameSection.style.display = "none";
    winGameSection.style.display = "none";
    drawRoundSection.style.display = "none";
    machineName.textContent = `Machine ${opponentNumber}`;
    choiceRock.style.display = "flex";
    choicePaper.style.display = "flex";
    choiceScissors.style.display = "flex";
    machineChoice.src = `/images/question.png`;
    playerActions.classList.remove("blur");
    machineChoice.classList.remove("blur");
  }


  // Display round win screen
  function displayRoundWinScreen(){

    introSection.style.display = "none";
    playSection.style.display = "none";
    winRoundSection.style.display = "flex";
    loseGameSection.style.display = "none";
    winGameSection.style.display = "none";
    drawRoundSection.style.display = "none";
  }

  // Display round draw screen
  function displayRoundDrawScreen(){

    introSection.style.display = "none";
    playSection.style.display = "none";
    winRoundSection.style.display = "none";
    loseGameSection.style.display = "none";
    winGameSection.style.display = "none";
    drawRoundSection.style.display = "flex";
  }

  // Display lost screen
  function displayLostScreen(){
    introSection.style.display = "none";
    playSection.style.display = "none";
    winRoundSection.style.display = "none";
    loseGameSection.style.display = "flex";
    winGameSection.style.display = "none";
    drawRoundSection.style.display = "none";
    body.style.backgroundImage = `none`;
    body.classList.add("cover");

  }

  // Display win screen
  function displayWinScreen(){
    introSection.style.display = "none";
    playSection.style.display = "none";
    winRoundSection.style.display = "none";
    loseGameSection.style.display = "none";
    winGameSection.style.display = "flex";
    drawRoundSection.style.display = "none";
    body.style.backgroundImage = `none`;
    body.classList.add("cover");
  }


  function displayLostScreenImage(){

    introSection.style.display = "none";
    playSection.style.display = "none";
    winRoundSection.style.display = "none";
    loseGameSection.style.display = "none";
    winGameSection.style.display = "none";
    drawRoundSection.style.display = "none";
    loseGameImageSection.style.display = "flex";
    winGameImageSection.style.display = "none";
    body.style.backgroundImage = `url("/images/lose.png")`;
  }

  function displayWinScreenImage(){

    introSection.style.display = "none";
    playSection.style.display = "none";
    winRoundSection.style.display = "none";
    loseGameSection.style.display = "none";
    winGameSection.style.display = "none";
    drawRoundSection.style.display = "none";
    loseGameImageSection.style.display = "none";
    winGameImageSection.style.display = "flex";
    body.style.backgroundImage = `url("/images/win.png")`;
  }

  // Change the background image
  function changeBackgroundImage(){
  
    body.style.backgroundImage = `url("/images/background${opponentNumber}.png")`;
  
  }



  // Removes non-chosen action images, leaving only user's choice
  function modifyHumanActionImages(humanAction){

    if (humanAction === "rock"){
      choicePaper.style.display = "none";
      choiceScissors.style.display = "none";
    }

    else if (humanAction === "paper"){
      choiceRock.style.display = "none";
      choiceScissors.style.display = "none";
    }

    else if (humanAction === "scissors"){
      choiceRock.style.display = "none";
      choicePaper.style.display = "none";
    }
  }
  
  // Changes machine question mark image to reflect their choice
  function modifyComputerActionImage(computerAction){

    machineChoice.src = `/images/${computerAction}.png`;

  }

  // Preload all background images
  function preLoadAllBackgroundImages(){

    const allBackgroundImages = [];

    for (let i = 0; i < numberOfBackgroundImages; i++){

      allBackgroundImages[i] = new Image();

      allBackgroundImages[i].src = `/images/background${i + 1}.png`;

    }

  }

})();

