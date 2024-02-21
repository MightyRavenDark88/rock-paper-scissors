    //Declare variables for playerChoice and computerChoice

let playerChoice,
    computerChoice;

    //Declare options

let options = ["Rock", "Paper", "Scissors"];

    //Delcare function to obtain computer choice

function getComputerChoice(){
    return computerChoice = options[Math.floor(Math.random() * options.length)]; 
}

    //Declare function to play full game of rock paper scissors

function playGame(){

        //Declare playerPoints and computerPoints variable

    let playerPoints = 0,
        computerPoints = 0;

        //Declare function for one round of rock paper scissors

    function playRound(){

                //Prompt user for choice

            playerChoice = prompt("Enter your choice(" + options[0] + ", " + options[1] +", " + options[2] + "):");
            
                //Formats playerChoice so choice is interpreted correctly

            playerChoice = playerChoice.at(0).toUpperCase() + playerChoice.slice(1, playerChoice.length - 1).toLowerCase();
            
                //Define if statement to determine playerChoice validity then play round

            if(playerChoice === options[0] || playerChoice === options[1] || playerChoice === options[2] ){ //if player enters a string type answer
                
                    //Get computerChoice

                getComputerChoice();
                
                    //Compare playerChoice to computerChoice and allocate points
                
                if (playerChoice === options[0] || computerChoice === options[0]){ //if either player or computer picks rock
                    if(playerChoice === options[0] && computerChoice === options[0]){
                        console.log("You chose rock.\nComputer chose rock.\n\nRock ties with rock! It's a draw!");
                        return;
                    }
                    else if(playerChoice === options[0] && computerChoice === options[1]){
                        console.log("You chose rock.\nComputer chose paper.\n\nPaper beats rock! Computer wins a point!");
                        return computerPoints++;
                    }
                    else if(playerChoice === options[1] && computerChoice === options[0]){
                        console.log("You chose paper.\nComputer chose rock.\n\nPaper beats rock! You win a point!");
                        return playerPoints++;
                    }
                    else {
                        if (playerChoice === options[2]){
                            console.log("You chose scissors.\nComputer chose rock.\n\nRock beats scissors! Computer wins a point!");
                            return computerPoints++;
                        }
                        else{
                            console.log("You chose rock.\nComputer chose scissors.\n\nRock beats scissors! You win a point!");
                            return playerPoints++;
                        }
                    }
                }
                else if(playerChoice === options[1] || computerChoice === options[1]){ //if either player or computer picks paper
                    if (playerChoice === options[1] && computerChoice === options[1]){
                        console.log("You chose paper.\nComputer chose paper.\n\nPaper ties with paper! It's a draw!");
                        return;
                    }
                    else if (playerChoice === options[2] && computerChoice === options[1]){
                        console.log("You chose scissors.\nComputer chose paper.\n\nScissors beats paper! You win a point!");
                        return playerPoints++;
                    }
                    else{
                        console.log("You chose paper.\nComputer chose scissors.\n\nScissors beats paper! Computer wins a point!");
                        return computerPoints++;
                    }
                }
                else{//if player and computer both pick scissors
                    console.log("You chose scissors.\nComputer chose scissors.\n\nScissors tie with scissors! It's a draw!");
                    return;
                }
            }
            else{ //if player enters invalid entry
                alert("Invalid input. Please enter a valid entry. (Numbers and mispelled entries will not be accepted)");
                return;
            }
    }        

        //Create while loop to run preset number of game rounds

    while(playerPoints < 3 && computerPoints < 3){
        playRound();
    }

    //if statement to determine victory condition
    
    if(playerPoints === 3){ //if the player wins
        console.log("You win!");
    }
    else{ //if the player loses
        console.log("You lose!");
    }
}

    //game introduction with rules

console.log('%cWelcome to "Rock, Paper, Scissors"!', 'font-weight: bold; background-color: black; color: white;')
console.log("\n\nThis is a game of chance involving two players picking one of three possible choices(Rock, Paper, Scissors) per round.\nThe victory conditions are as follows: Rock beats scissors, scissors beats paper, and paper beats rock.\n\n");

    //user prompt to play

playerChoice = prompt("Would you like to play?Y/N: ");

    //formats answer

playerChoice = playerChoice.toUpperCase();

    //define if statement for whether to play or not
if(playerChoice === "Y" || playerChoice === "YE" || playerChoice === "YA" || playerChoice === "YEH" || playerChoice === "YAH" || playerChoice === "YES" || playerChoice === "YEAH" || playerChoice === "SURE" || playerChoice === "OK" || playerChoice === "OKAY"){ //if user wishes to play
    console.log("%c\nLET'S PLAY!\n\n", "font-weight: bold;");
    while(playerChoice === "Y" || playerChoice === "YE" || playerChoice === "YA" || playerChoice === "YEH" || playerChoice === "YAH" || playerChoice === "YES" || playerChoice === "YEAH" || playerChoice === "SURE" || playerChoice === "OK" || playerChoice === "OKAY"){ //repeats game sequence so long as user wishes to play again
        playGame();
        playerChoice = prompt("Would you like to play again?Y/N: ");
        playerChoice = playerChoice.toUpperCase();
    }    
}
else{
    console.log("\nOk, bye.;_;");
}