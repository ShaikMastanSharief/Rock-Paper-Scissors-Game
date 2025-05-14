const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const resultText = document.getElementById("resultText");
const userScoreText = document.getElementById("userScore");
const computerScoreText = document.getElementById("computerScore");
const roundsPlayedText = document.getElementById("roundsPlayed");
const resetButton = document.getElementById("resetButton");

let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));
resetButton.addEventListener("click", resetGame);

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        userScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    roundsPlayed++;

    // Display the result with animation
    resultText.textContent = `${result} (Computer chose ${computerChoice})`;
    resultText.style.transform = "scale(1.2)";
    setTimeout(() => {
        resultText.style.transform = "scale(1)";
    }, 300);

    // Update the scoreboard
    userScoreText.textContent = userScore;
    computerScoreText.textContent = computerScore;
    roundsPlayedText.textContent = roundsPlayed;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    userScoreText.textContent = userScore;
    computerScoreText.textContent = computerScore;
    roundsPlayedText.textContent = roundsPlayed;
    resultText.textContent = "";
}