console.log('test');

let test = getComputerChoice();

console.log(test);

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