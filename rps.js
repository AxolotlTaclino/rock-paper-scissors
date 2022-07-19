console.log('Rock Paper Scissors Game');
console.log('------------------------');

// Generate Computer selection by using a random number between 0-2.
function getComputerChoice(){

    // Generate random number 0 and 2.
    const rndInt = Math.floor(Math.random() * 3 ); 
    let choice = '';

    // If 0 = Rock, 1 = Paper and 2 = Scissors.
    if( rndInt == 0 ){
        choice = 'rock';
    }
    else if( rndInt == 1 ){
        choice = 'paper';
    }
    else{
        choice = 'scissors';
    }
    return choice;
}

// Play one round using User Input vs Computer choice
function playRound( playerSelection, computerSelection ){

    let roundResult = '';

    // If Player and computer have the same selection, its a tie.
    if( playerSelection == computerSelection ){
        roundResult = "It's a tie!"
    }

    // Else, result will depend on the ff: Rock beats Scissors, Scissors beats Paper, Paper beats Rock.
    else if( playerSelection == 'rock' ){
        if( computerSelection == 'scissors' ){
            roundResult = "You win! Rock beats Scissors."
        }
        else{
            roundResult = "You lose! Paper beats Rock."
        }
    }
    else if( playerSelection == 'paper' ){
        if( computerSelection == 'rock' ){
            roundResult = "You win! Paper beats Rock."
        }
        else{
            roundResult = "You lose! Scissors beats Paper."
        }

    }
    else if( playerSelection == 'scissors' ){
        if( computerSelection == 'paper' ){
            roundResult = "You win! Scissors beats Paper."
        }
        else{
            roundResult = "You lose! Rock beats Scissors."
        }

    }
    // Invalid user input.
    else {
        roundResult = "Invalid Choice! Please try again."
    }

    return roundResult;
}
// Convert User Input to lowercase to be case insensitive.
const playerSelection = prompt("Rock Paper or Scissors").toLowerCase();

const computerSelection = getComputerChoice();

console.log("You chose: "+playerSelection); // Show user input

console.log("Computer chose: "+computerSelection); // Show computer generated result

let roundResult = playRound(playerSelection,computerSelection); // Execute single round

console.log(roundResult); // Show Round Result