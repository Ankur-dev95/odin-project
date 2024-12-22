function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("computer won")
        compScore +=1;

    }
    else if( humanChoice == "rock" && computerChoice == "sciscor"){
        console.log("human won")
        humanScore += 1; 
    }
    else if( humanChoice == "paper" && computerChoice == "rock"){
        console.log("human won")
        humanScore += 1; 
    }
    else if( humanChoice == "paper" && computerChoice == "sciscor"){
        console.log("computer won")
        compScore +=1;
    }
    else if( humanChoice == "sciscor" && computerChoice == "paper"){
        console.log("human won")
        humanScore += 1; 
   }
   else if( humanChoice == "sciscor" && computerChoice == "rock"){
        console.log("computer won")
        compScore +=1;
   }
   else if(humanChoice == computerChoice){
        console.log("no one wins")
   }
   console.log(`human score: ${humanScore} , computer score: ${compScore}`)
   

}
const humanSelection =0;
const computerSelection = 0;
var humanScore = 0;
var compScore = 0;  
function playGame(){
    for(let i =0; i < 5; i++){
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        


    }
    if( humanScore > compScore){
        console.log("human wins");
    }

}
    
playGame()
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