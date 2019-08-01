const game = () => {
  let pScore = 0;
  let cScore = 0;
  let handsWorking = false;
  const match = document.querySelector(".match");
  match.classList.add("fadeIn");

  //Play Match

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        if (handsWorking === false) {
          handsWorking = true;

          //Computer choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoise = computerOptions[computerNumber];

          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoise);
            //Update Images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoise}.png`;

            handsWorking = false;
          }, 2000);

          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        } else {
          const winner = document.querySelector(".winner");
          winner.textContent = "Match still is going on!";
        }
      });
    });
    const computerNumber = Math.floor(Math.random() * 3);
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoise) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoise) {
      winner.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoise === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for paper
    if (playerChoice === "paper") {
      if (computerChoise === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for scissors
    if (playerChoice === "scissors") {
      if (computerChoise === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  playMatch();
};

//start the game function
game();
