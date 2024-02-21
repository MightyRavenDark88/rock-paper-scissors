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
                        console.log("Rock ties with rock! It's a draw!");
                        return;
                    }
                    else if(playerChoice === options[0] && computerChoice === options[1]){
                        console.log("Paper beats rock! Computer wins a point!");
                        return computerPoints++;
                    }
                    else if(playerChoice === options[1] && computerChoice === options[0]){
                        console.log("Paper beats rock! You win a point!");
                        return playerPoints++;
                    }
                    else {
                        if (playerChoice === options[2]){
                            console.log("Rock beats scissors! Computer wins a point!");
                            return computerPoints++;
                        }
                        else{
                            console.log("Rock beats scissors! You win a point!");
                            return playerPoints++;
                        }
                    }
                }
                else if(playerChoice === options[1] || computerChoice === options[1]){ //if either player of computer picks paper
                    if (playerChoice === options[1] && computerChoice === options[1]){
                        console.log("Paper ties with paper! It's a draw!");
                        return;
                    }
                    else if (playerChoice === options[2] && computerChoice === options[1]){
                        console.log("Scissors beats paper! You win a point!");
                        return playerPoints++;
                    }
                    else{
                        console.log("Scissors beats paper! Computer wins a point!");
                        return computerPoints++;
                    }
                }
                else{//if player and computer both pick scissors
                    console.log("Scissors tie with scissors! It's a draw!");
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

    

}