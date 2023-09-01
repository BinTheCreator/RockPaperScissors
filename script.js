function getComputerChoice() {
    const input = ["ROCK", "PAPER", "SCISSOR"]
    return input[Math.floor(Math.random() * 3)];
}

function playRound (playerSelection, computerSelection) {
    let str = playerSelection.toUpperCase();
    let str2 = computerSelection.toUpperCase();
    if (str === str2) {
        return "Its a tie";    
    } else if (str == "ROCK" && str2 == "PAPER" || 
            str == "PAPER" && str2 == "SCISSOR" ||
            str == "SCISSOR" && str2 == "ROCK") {
        return "Computer Win";
    } else {
        return "You win!!";
    }    
  }
function game() {
    let ComputerCount = 0;
    let PlayerCount = 0;
    let i = 0;
    while (i < 5) {
      let playerSelection = prompt("Choose Rock or Paper or Scissor!");
      let computerSelection = getComputerChoice();
      let result = playRound(playerSelection, computerSelection);
      console.log(result);
      if (result == "Its a tie") {
        PlayerCount++;
        ComputerCount++;
      } else if (result === "You win!!"){
        PlayerCount++;
      } else {
        ComputerCount++;
      }
      i++;
    }
    if (ComputerCount > PlayerCount) {
        return "Computer beat Player";
    } else {
        return "Player beat Computer";
    }
}
console.log(game());



