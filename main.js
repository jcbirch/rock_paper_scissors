let playerScore = 0;
let computerScore = 0;
let playerSelection;



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function (playGame) {
        playerSelection = button.id;
        let computerSelection = computerPlay();
        function computerPlay(computerSelection) {
            const myArray = ["rock", "paper", "scissors"];
            return myArray[Math.floor(Math.random() * myArray.length)];
        }
        playRound(playerSelection, computerSelection);
        if (playerScore === 5 || computerScore === 5) {
            gameResults();
        }
    });

});

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.getElementById("round-winner").innerHTML = "This Round is a Tie"
    } else if (playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        playerScore = ++playerScore;
        document.getElementById("round-winner").innerHTML = "Player Wins Round!";
        document.getElementById("player-score").innerHTML = "Player Score: " + playerScore;
    } else {
        computerScore = ++computerScore;
        document.getElementById("round-winner").innerHTML = "Computer Wins Round!";
        document.getElementById("computer-score").innerHTML = "Computer Score: " + computerScore;
    }
}

function gameResults() {
    if (playerScore == computerScore) {
        document.getElementById("game-winner").innerHTML = "Tie Game";
        restartGame();
    }
    else if (playerScore > computerScore) {
        document.getElementById("game-winner").innerHTML = "Player Wins Game!";
        restartGame();
    } else {
        document.getElementById("game-winner").innerHTML = "Computer Wins Game!";
        restartGame();
    }
}

function restartGame() {
    document.getElementById("rock").disabled=true;
    document.getElementById("paper").disabled=true;
    document.getElementById("scissors").disabled=true;

    const roundWinner = document.getElementById("round-winner");
    roundWinner.remove();

    const choices = document.getElementById("choices");
    choices.remove();
      

    const btn = document.createElement("BUTTON");  
    btn.innerHTML = "New Game";
    btn.addEventListener("click", function() {
        document.location.href = "";
      });
    document.getElementById("reset-game").appendChild(btn);
    btn.classList.add("reset-button");


    
    //setTimeout(function(){  ; }, 5000);

}