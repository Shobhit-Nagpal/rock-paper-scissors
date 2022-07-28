console.log("Type in 'game();' to start playing");

/*  FUNCTION TO GET RANDOM CHOICE FROM COMPUTER BASED ON SOME LOGIC   */

function getComputerChoice() {

    /*  Variable that contains random value between 0 and 100   */

    let randomNumber = Math.floor(Math.random()*101);

    /*  Initializing variable to store computer's choice   */

    let computerChoice = "Null";


    /*  If-else if loop with logic of checking divisiblity with 2 and 5, store result in computerChoice   */

    if (randomNumber % 2 == 0 && randomNumber % 5 == 0) {

        computerChoice = "Rock";

    }
    else if (randomNumber % 2 == 0) {

        computerChoice = "Paper";

    }
    else if (randomNumber % 5 == 0) {

        computerChoice = "Scissors";

    } else {

        computerChoice = "Rock";

    }

    return computerChoice;

}


/*  FUNCTION TO PLAY ONE ROUND AND RETURN WINNER'S CHOICE  */


function playRound(playerSelection, computerSelection) {

    /*  Logic of rock, paper, scisscors, returns who wins and why   */
    
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {

        console.log("Paper beats rock");

        return computerSelection;

    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {

        console.log("Rock beats scissors");
        
        return playerSelection;

    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {

        console.log("Paper beats rock");
        
        return playerSelection;

    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {

        console.log("Scissors beats paper");
        
        return computerSelection;

    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {

        console.log("Scisscors beats paper");
        
        return playerSelection;

    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {

        console.log("Rock beats scissors");
        
        return computerSelection;

    } 
    else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {

        console.log("Draw");
        
        let draw = "Draw";

        return draw;
        
    } else {

        console.log("Inalid");

        let invalid= "Invalid entry";

        return invalid;
    }

}


/*  FUNCTION TO PLAY 5 GAMES AND DECLARE WINNER  */


function game() {

    let playerStreak = 0;
    let computerStreak = 0;
    let draw = "Draw";

    /*  For loop to play 5 game rounds   */

    for (let i = 0 ; i < 5 ; i++) {

        /*  Prompting user for an input   */

        let playerSelection = prompt("Pick between rock, paper and scissors");

        /*  Calling getComputerChoice() and storing choice   */

        let computerSelection = getComputerChoice();

        /*  Calling playRound() and keeping count of winner  */
        
        let count = playRound(playerSelection, computerSelection);

        /*  Keeping track of winning streak   */

        if (count == playerSelection) {
            playerStreak += 1;
        }
        else if (count == computerSelection) {
            computerStreak += 1;
        }
        else if (count == draw) {
            computerStreak += 1;
            playerStreak += 1;
        }
        else {
            console.log("Invalid entry. Restart game")
            break;
        }

    }

    /*  Checking who wins and declaring result   */

    if(playerStreak > computerStreak) {

        console.log(`You win!`)
    }
    else if (computerStreak > playerStreak) {
     
        console.log(`You lose!`)
        
    } else {

        console.log(`Try again`);
    }

}
