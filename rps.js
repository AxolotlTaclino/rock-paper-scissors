console.log('Rock Paper Scissors Game');
console.log('------------------------');
game();

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
    let win = 0;

    // If Player and computer have the same selection, its a tie.
    if( playerSelection == computerSelection ){
        roundResult = "It's a tie!"
        win = 0.5;
    }

    // Else, result will depend on the ff: Rock beats Scissors, Scissors beats Paper, Paper beats Rock.
    else if( playerSelection == 'rock' ){
        if( computerSelection == 'scissors' ){
            roundResult = "You win! Rock beats Scissors."
            win = 1;
        }
        else{
            roundResult = "You lose! Paper beats Rock."
        }
    }
    else if( playerSelection == 'paper' ){
        if( computerSelection == 'rock' ){
            roundResult = "You win! Paper beats Rock."
            win = 1;
        }
        else{
            roundResult = "You lose! Scissors beats Paper."
        }

    }
    else if( playerSelection == 'scissors' ){
        if( computerSelection == 'paper' ){
            roundResult = "You win! Scissors beats Paper."
            win = 1;
        }
        else{
            roundResult = "You lose! Rock beats Scissors."
        }

    }
    // Invalid user input.
    else {
        roundResult = "Invalid Choice! Please try again."
    }

    return { roundResult, win };
}

// Play 5 rounds of Rock Paper Scissors.
function game(){
    let myScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        // Convert User Input to lowercase to be case insensitive.
        const playerSelection = prompt("Rock Paper or Scissors").toLowerCase();

        const computerSelection = getComputerChoice();
        
        // Show user input
        console.log("You chose: "+playerSelection); 
        
        // Show computer generated result
        console.log("Computer chose: "+computerSelection); 
        
        // Execute single round
        let roundRes = playRound(playerSelection,computerSelection); 
        
        // Show Round Result
        console.log(roundRes.roundResult); 

        // Add Scoring System; 1pt for win 0.5pt for ties and 0 for loss.
        if( roundRes.win == 1){
            myScore += 1;
        }

        else if( roundRes.win == 0.5 ){
            myScore += 0.5;
            compScore += 0.5;
        }
            
        else{
            compScore += 1;
        }
    }
    console.log("Final Scores:");
    console.log("Your Score: "+myScore);
    console.log("Computer Score: "+compScore);
    if( myScore == compScore ){
        console.log("It's a tie");
    }
    else if( myScore > compScore ){
        console.log("You win!");
    }
    else{
        console.log("You Lose!");
    }
    
}