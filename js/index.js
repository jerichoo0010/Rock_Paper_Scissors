const rock = "Rock",
    paper = "Paper",
    scissors = "Scissors";

let gameRes = document.getElementById("gameRes")

const playerSelection = paper;
const computerSelection =  rock; // getComputerChoice();


function getComputerChoice(){


}

playRound(playerSelection, computerSelection);


function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)

    if(playerSelection == rock && computerSelection == rock){
    
        gameRes.innerHTML = "Tied!"
    }
    else if(playerSelection == rock && computerSelection == paper){
    
        gameRes.innerHTML = "Sorry. You lost!"
    }
    else if(playerSelection == rock && computerSelection == scissors){
    
        gameRes.innerHTML = "Congrats! You defeated the computer!"
    }



    else if(playerSelection == paper && computerSelection == paper){
    
        gameRes.innerHTML = "Tied!"
    }
    else if(playerSelection == paper && computerSelection == rock){
    
        gameRes.innerHTML = "Congrats! You defeated the computer!"
    }
    else if(playerSelection == paper && computerSelection == scissors){
    
        gameRes.innerHTML = "Sorry. You lost!"
    }
 

    else if(playerSelection == scissors && computerSelection == scissors){
    
        gameRes.innerHTML = "Tied!"
    }
    else if(playerSelection == scissors && computerSelection == paper){
    
        gameRes.innerHTML = "Congrats! You defeated the computer!"
    }
    else if(playerSelection == scissors && computerSelection == rock){
    
        gameRes.innerHTML = "Sorry. You lost!"
    }
    else{
        gameRes.innerHTML = "Invalid Input!"
    }


        
  }