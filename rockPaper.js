function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice === "rock" && computerChoice === "paper"){
        result.textContent ="computer won";
        compScore +=1;

    }
    else if( humanChoice === "rock" && computerChoice === "sciscor"){
        result.textContent = "human won";
        humanScore += 1; 
    }
    else if( humanChoice === "paper" && computerChoice === "rock"){
        result.textContent = "human won";
        humanScore += 1; 
    }
    else if( humanChoice === "paper" && computerChoice === "sciscor"){
        result.textContent ="computer won";
        compScore +=1;
    }
    else if( humanChoice === "sciscor" && computerChoice === "paper"){
        result.textContent = "human won";
        humanScore += 1; 
   }
   else if( humanChoice === "sciscor" && computerChoice === "rock"){
        result.textContent ="computer won";
        compScore +=1;
   }
   else if(humanChoice === computerChoice){
        console.log("no one wins")
   }
   console.log(`human score: ${humanScore} , computer score: ${compScore}`)
   

}

var humanScore = 0;
var compScore = 0;  
function playGame(){
    for(let i =0; i < 5; i++){
        
        var humanSelection = getHumanChoice();
        var computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        


    }
    if( humanScore > compScore){
        console.log("human wins");
    }

}
    

function getHumanChoice(){
    r = parseInt(prompt(" choose a number 0-2  0 = rock, 1 = paper, 2 = scissers" ))
    
    f = "";
    if (r == 0){
        f = "rock"
        console.log(f);
        

    }
    else if(r == 1){
        f = "paper";
        console.log(f);
    }
    else if(r == 2){
        f = "sciscor"
        console.log(f);
    }
    return f
}
  
function getComputerChoice() {
    r = getRandomInt(3);
    f = "";
    if (r == 0){
        f = "rock"
        compScreen.textContent = f
        

    }
    else if(r == 1){
        f = "paper";
        compScreen.textContent = f
    }
    else if(r == 2){
        f = "sciscor"
        compScreen.textContent = f
    }
    return f

}

let result = document.querySelector(".result_screen");
let compScreen = document.querySelector(".computerChoice");

function when_clicked_Rock (){
      
    humanSelection = "rock"
    computerSelection = getComputerChoice()
    playRound(humanSelection,computerSelection)



}
function when_clicked_paper(){
    humanSelection = "paper"
    computerSelection = getComputerChoice()
    playRound(humanSelection,computerSelection)
}
function when_clicked_scissor(){
    humanSelection = "sciscor"
    computerSelection = getComputerChoice()
    playRound()
}