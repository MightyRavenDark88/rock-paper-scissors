//Declare variables for playerChoice and computerChoice

let playerChoice,
    computerChoice;

//Declare options

let options = ["Rock", "Paper", "Scissors"];

//Delcare function to obtain computer choice

function getComputerChoice(){
    computerChoice = options[Math.floor(Math.random() * options.length)]; 
}

//Plays a full game of rock paper scissors

function playGame(){

    //Declare playerPoints and computerPoints variable

    let playerPoints = 0,
        computerPoints = 0;

    //Declare function for one round of rock paper scissors

    function playRound(playerChoice, computerChoice){
            
    }

    //Create while loop to run preset number of game rounds

    while(playerPoints < 3 && computerPoints < 3){

        //Prompt user for choice

        playerChoice = prompt("Enter your choice(Rock, Paper, Scissors):");
        
        //Define if statement to determine playerChoice validity then play round

        if(typeof playerChoice === "string"){
            
            //Formats playerChoice so choice is interpreted correctly

            playerChoice = playerChoice.at(0).toUpperCase() + playerChoice.slice(1, playerChoice.length - 1).toLowerCase();
        }
        else{
            alert("Invalid input. Please enter a valid entry.");
        }
    }
}