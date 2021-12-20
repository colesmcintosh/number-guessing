let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () =>
Math.floor(Math.random() * 10);

let compareGuesses = (human, comp, target) => { let humanProx = Math.abs(target - human);
let compProx = Math.abs(target - comp);
  switch (true) {
    case (humanProx < compProx):
      return true;
    default:
      return false;
  }
}

let updateScore = (winner) => {
  switch (winner) {
    case 'human':
      humanScore += 1;
    case 'computer':
      computerScore += 1;
  }
}

let advanceRound = () =>
currentRoundNumber += 1;


console.log(compareGuesses(7, 8, generateTarget()))

console.log(generateTarget())



