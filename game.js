function computerPlay() {
    let number = Math.ceil(Math.random() * 3);
    let dict = {
        1: "Rock",
        2: "Paper",
        3: "Scissors",
    };
    return dict[number];
}

function singleRound(player, computer) {
    player = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    if (player === "Rock") {
        switch (computer) {
            case "Rock":
                return "There is a tie. Computer also chose " + computer;
                break;
            case "Paper":
                return "You lose! " + computer + " beats " + player;
                break;
            case "Scissors":
                return "You win! " + player + " beats " + computer;
                break;
        }
    } else if (player === "Scissors") {
        switch (computer) {
            case "Scissors":
                return "There is a tie. Computer also chose " + computer;
                break;
            case "Rock":
                return "You lose! " + computer + " beats " + player;
                break;
            case "Paper":
                return "You win! " + player + " beats " + computer;
                break;
        }
    } else if (player === "Paper") {
        switch (computer) {
            case "Paper":
                return "There is a tie. Computer also chose " + computer;
                break;
            case "Scissors":
                return "You lose! " + computer + " beats " + player;
                break;
            case "Rock":
                return "You win! " + player + " beats " + computer;
                break;
        }
    }
}

function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Choose your weapon", "Scissors");
        let computerSelection = computerPlay();
        let output = singleRound(playerSelection, computerSelection);
        console.log(output);
        if (/lose/i.test(output)) {
            playerCount++;
        } else if (/win/i.test(output)) {
            computerCount++;
        }
    }
    console.log("Game over! The final score is: You " + playerCount + " - " +
        computerCount + " Computer");
}

game();