const rock = "rock",
    paper = "paper",
    scissors = "scissors";

let computerChoice = ["rock", "paper", "scissors"]

let currPlayerScore = 0, 
    currComputerScore = 0,
    compC

let gameRes = document.getElementById("gameRes")
let playerScore = document.getElementById("playerScore")
let computerScore = document.getElementById("compScore")

let playerSelection, computerSelection

const num = Math.ceil(Math.random()*3)-1;
// let r = (Math.random() + 1).toString(36).substring(7);




function getComputerChoice(){
    compC = computerChoice[num]
    console.log("Computer choice:"+ compC);
    return compC
}

for(let i=0; i<5; i++){
    getComputerChoice();
    playRound(playerSelection, compC);
    
    if(i == 4){
        
        if(currPlayerScore > currComputerScore){

            gameRes.innerHTML = "Player wins! Congrats!"
        }
        else{
            gameRes.innerHTML = "Computer wins! Congrats!"
        }
    }
}

function playRound(playerSelection, computerSelection) {
   // console.log(playerSelection, computerSelection)

    playerSelection = prompt("Your pick?")

    console.log("Player choice:"+ playerSelection)

//    computerSelection =  paper; // getComputerChoice();


    if(playerSelection == rock && computerSelection == rock){
    
        //gameRes.innerHTML = "Tied!"
        console.log("Round draw!");
    }
    else if(playerSelection == rock && computerSelection == paper){
    
      //  gameRes.innerHTML = "Computer wins for this round!"
        currComputerScore+= 1;
        console.log("Current Computer Score:"+ currComputerScore)
        console.log("Computer wins for this round!")
        computerScore.innerHTML = currComputerScore
        
    }
    else if(playerSelection == rock && computerSelection == scissors){
    
       // gameRes.innerHTML = "Congrats! You defeated the computer!"
        currPlayerScore+= 1;
        console.log("Current Player Score:"+ currPlayerScore)
        console.log("Player wins for this round!")
        playerScore.innerHTML = currPlayerScore
    }



    else if(playerSelection == paper && computerSelection == paper){
    
      //  gameRes.innerHTML = "Tied!"
        console.log("Round draw!");
    }
    else if(playerSelection == paper && computerSelection == rock){
    
  //      gameRes.innerHTML = "Congrats! You defeated the computer!"
        currPlayerScore+= 1;
        console.log("Current Player Score:"+ currPlayerScore)
        console.log("Player wins for this round!")
        playerScore.innerHTML = currPlayerScore
        
    }
    else if(playerSelection == paper && computerSelection == scissors){
    
    //    gameRes.innerHTML = "Sorry. You lost!"
        console.log("Computer wins for this round!")
        currComputerScore+= 1;
        console.log("Current Computer Score:"+ currComputerScore)
        computerScore.innerHTML = currComputerScore
    }
 

    else if(playerSelection == scissors && computerSelection == scissors){
    
     //   gameRes.innerHTML = "Tied!"
        console.log("Round draw!");
    }
    else if(playerSelection == scissors && computerSelection == paper){
    
  //      gameRes.innerHTML = "Congrats! You defeated the computer!"
        currPlayerScore+= 1;
        console.log("Current Player Score:"+ currPlayerScore)
        console.log("Player wins for this round!")
        playerScore.innerHTML = currPlayerScore
    }
    else if(playerSelection == scissors && computerSelection == rock){
    
   //     gameRes.innerHTML = "Sorry. You lost!"
        console.log("Computer wins for this round!")
    }
    else{
     //   gameRes.innerHTML = "Invalid Input!"
        console.log("Round draw!");
    }


        
  }