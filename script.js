console.log("Hello World")

function getComputerChoice(){
  let computerChoice;
  let random =  Math.round(Math.random() * 2)
  
  if(random === 0){
    computerChoice = "rock"
  } else if(random === 1){
    computerChoice = "scissors"
  } else{
    computerChoice = "paper"
  }

  console.log("The computer choice is " + computerChoice)
  return computerChoice
}



function getHumanChoice(){
    let humanChoice = window.prompt("Choice: Rock, Scissors or Paper").toLowerCase()
    
    
    while(!["rock", "paper", "scissors"].includes(humanChoice)){
        humanChoice = prompt("Invalid choice! Please, choice: Rock, Scissors or Paper")
    }

    console.log("The human choice is " + humanChoice)
    return humanChoice
}


let humanScore = 0;
let computerScore = 0;



 function playRound(humanChoice, computerChoice){
 if(humanChoice === computerChoice){
     console.log("It's a draw!");
     
 }

 if(
     humanChoice === "paper" && computerChoice === "rock" ||
     humanChoice === "scissors" && computerChoice === "paper" ||
     humanChoice === "rock" && computerChoice === "scissors"
    
 ){
     humanScore += 1
     console.log(`You win! ${humanChoice} beats ${computerChoice}. Your score: ${humanScore}`)
     
 } else{
     computerScore += 1
     console.log(`You lose! ${computerChoice} beats ${humanChoice}. Computer score: ${computerScore}`)
     
 }


 }



// GAME

function playGame(){
    humanScore = 0
    computerScore = 0

    let rounds = 0

    while(rounds <5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice()

        playRound(humanSelection, computerSelection);
        rounds +=1;

      
}

    if(humanScore > computerScore){
        console.log(`You are the overall winner! Result: ${humanScore} x ${computerScore}`);
    } else if(humanScore < computerScore){
        console.log(`The computer is the overall winner! Result: ${computerScore} x ${humanScore}`);
    } else{
        console.log("It's a tie! ")
    }
}

playGame()



