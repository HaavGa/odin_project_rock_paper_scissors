const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      break;
  }
};

const capitalize = word => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

const playRound = (playerSelection, computerSelection) => {
  const rock = "rock";
  const scissors = "scissors";
  const paper = "paper";
  let result;
  let firstChoice;
  let secondChoice;
  let output;
  const ps = playerSelection.toLowerCase();
  const cs = computerSelection.toLowerCase();
  if (ps === cs) {
    return "It's a tie!";
  }
  if (
    (ps === rock && cs === paper) ||
    (ps === paper && cs === scissors) ||
    (ps === scissors && cs === rock)
  ) {
    result = "lose";
    firstChoice = capitalize(cs);
    secondChoice = capitalize(ps);
  } else if (
    (ps === paper && cs === rock) ||
    (ps === scissors && cs === paper) ||
    (ps === rock && cs === scissors)
  ) {
    result = "win";
    firstChoice = capitalize(ps);
    secondChoice = capitalize(cs);
  }
  output = `You ${result}! ${firstChoice} beats ${secondChoice}`;
  return output;
};

const playGame = () => {
  let computerScore = 0;
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection;
    while (true) {
      playerSelection = prompt(
        "Enter either rock, paper or scissors"
      );
      if (
        ["rock", "paper", "scissors"].includes(
          playerSelection.toLowerCase()
        )
      ) {
        break;
      } else {
        console.log("invalid choice!");
      }
    }
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
    console.log(result);
  }
  if (computerScore === playerScore) {
    console.log(
      `It's a tie! The player got ${playerScore} ${
        playerScore === 1 ? "point" : "points"
      } and the computer got ${computerScore} ${
        computerScore === 1 ? "point" : "points"
      }`
    );
  } else {
    const winner =
      playerScore > computerScore ? "Player" : "Computer";
    console.log(
      `The winner is ${winner}! The player got ${playerScore} ${
        playerScore === 1 ? "point" : "points"
      } and the computer got ${computerScore} ${
        computerScore === 1 ? "point" : "points"
      }`
    );
  }
};

playGame();
