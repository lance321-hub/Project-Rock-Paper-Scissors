function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);

    if (randomIndex === 0) {
        return 'rock';
    } else if (randomIndex === 1) {
        return 'paper';
    } else if (randomIndex === 2) {
        return 'scissors';
    }
}

function getHumanChoice() {
    let userInput = prompt("Please enter if Rock, Paper, or Scissors:").toLowerCase();
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice + ".");


    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;


    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;


    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;


    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;


    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;


    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;

    }

    console.log("Current Scores for Human is " + humanScore + " | Computer is " + computerScore);

}

function playGame() {
    for (round = 1; round <= 5; round++) {
        console.log("Round " + round + ":");
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Game over! You win the game with " + humanScore + " points.");
    } else if (humanScore < computerScore) {
        console.log("Game over! Computer wins the game with " + computerScore + " points.");
    } else if (humanScore === computerScore) {
        console.log("Game over! It is a  tie with both scoring " + humanScore + " points.");
    }

}

playGame();