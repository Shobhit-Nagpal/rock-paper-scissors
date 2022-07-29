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


function playRound(playerChoice, computerChoice) {

    /*  Logic of rock, paper, scisscors, returns who wins and why   */
    
    if (playerChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper") {

        console.log(`Your choice: ${playerChoice.toUpperCase()}`);

        console.log(`Computer's choice: ${computerChoice.toUpperCase()}`);

        console.log("Paper beats rock");

        console.log("<-------------------->\n");

        return computerChoice;

    }
    else if (playerChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {

        console.log(`Your choice: ${playerChoice.toUpperCase()}`);

        console.log(`Computer's choice: ${computerChoice.toUpperCase()}`);
        
        console.log("Rock beats scissors");

        console.log("<-------------------->\n");
        
        return playerChoice;

    }
    else if (playerChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {

        console.log(`Your choice: ${playerChoice.toUpperCase()}`);

        console.log(`Computer's choice: ${computerChoice.toUpperCase()}`);
        
        console.log("Paper beats rock");

        console.log("<-------------------->\n");
        
        return playerChoice;

    }
    else if (playerChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors") {

        console.log(`Your choice: ${playerChoice.toUpperCase()}`);

        console.log(`Computer's choice: ${computerChoice.toUpperCase()}`);
        
        console.log("Scissors beats paper");

        console.log("<-------------------->\n");
        
        return computerChoice;

    }
    else if (playerChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {

        console.log(`Your choice: ${playerChoice.toUpperCase()}`);

        console.log(`Computer's choice: ${computerChoice.toUpperCase()}`);
        
        console.log("Scisscors beats paper");

        console.log("<-------------------->\n");
        
        return playerChoice;

    }
    else if (playerChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock") {

        console.log(`Your choice: ${playerChoice.toUpperCase()}`);

        console.log(`Computer's choice: ${computerChoice.toUpperCase()}`);
        
        console.log("Rock beats scissors");

        console.log("<-------------------->\n");
        
        return computerChoice;

    } 
    else if (playerChoice.toLowerCase() == computerChoice.toLowerCase()) {

        console.log(`Your choice: ${playerChoice.toUpperCase()}`);

        console.log(`Computer's choice: ${computerChoice.toUpperCase()}`);
        
        console.log("Draw");

        console.log("<-------------------->\n");
        
        let draw = "Draw";

        return draw;
        
    } else {

        console.log("Inalid entry.");

        console.log("<-------------------->\n");

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

        let playerChoice = prompt("Pick between rock, paper and scissors");

        /*  Calling getComputerChoice() and storing choice   */

        let computerChoice = getComputerChoice();

        /*  Calling playRound() and keeping count of winner  */
        
        let count = playRound(playerChoice, computerChoice);

        /*  Keeping track of winning streak   */

        if (count == playerChoice) {
            playerStreak += 1;
        }
        else if (count == computerChoice) {
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

        console.log(`Final Result: You win!`)
    }
    else if (computerStreak > playerStreak) {
     
        console.log(`Final result: You lose!`)
        
    } else {

        console.log(`Try again`);
    }

}
