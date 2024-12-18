console.log("Hello World")

let humanScore = 0;
let computerScore = 0;



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


  return computerChoice
}




 function playRound(humanChoice, computerChoice){
    const resultDiv = document.querySelector(".result")
    let resultMessage = ""

    const humanScoreBoard = document.querySelector("#hS")
    const computerScoreBoard = document.querySelector("#cS")
    


 if(humanChoice === computerChoice){
     resultMessage = "It's a draw!"
     
 }

 else if(
     humanChoice === "paper" && computerChoice === "rock" ||
     humanChoice === "scissors" && computerChoice === "paper" ||
     humanChoice === "rock" && computerChoice === "scissors"
    
 ){
     humanScore += 1

     resultMessage = `You win! ${humanChoice} BEATS ${computerChoice}.`
     
     
 } else{
     computerScore += 1
     resultMessage =`You lose! ${computerChoice} BEATS ${humanChoice}.`
     
     
    
 }



 humanScoreBoard.textContent = `HUMAN SCORE: ${humanScore}`;
 computerScoreBoard.textContent = `COMPUTER SCORE: ${computerScore}`;

 

 if(humanScore ===5){
    resultMessage = "YOU WIN THE GAME! restarting..."
    disableButtons()
    setTimeout(resetGame, 4000);
   
 } else if(computerScore === 5){
    resultMessage = "THE COMPUTER WINS THE GAME! restarting..."
    disableButtons()
    setTimeout(resetGame, 4000);
    
 }



 resultDiv.textContent = resultMessage

 }


 const buttons = document.querySelectorAll("button:not(#reset)")

 buttons.forEach((button)=> {
    button.addEventListener("click", () => {
        if(button.disabled) return;
        const humanChoice = button.id
        const computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    })
 })




const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", resetGame)


function resetGame(){  

    humanScore = 0
    computerScore = 0

    document.querySelector("#hS").textContent = "HUMAN SCORE: 0";
    document.querySelector("#cS").textContent = "COMPUTER SCORE: 0";

    document.querySelector(".result").textContent = ""

    disableButtons()

   
    setTimeout(() =>{
        buttons.forEach((button)=> {
            button.disabled = false
        })
    }, 1000)
}


// After Reset 

function disableButtons(){
    buttons.forEach((button)=> {
        button.disabled = true;
    })
}

