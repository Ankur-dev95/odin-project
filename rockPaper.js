function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice = "rock" && computerChoice == "paper"){
        console.log("computer won")

    }
    else if( humanChoice = "rock" && computerChoice == "sciscor "){
        console.log("human won")
    }
    else if( humanChoice = "paper" && computerChoice == "rock"){
        console.log("human won")
    }
    else if( humanChoice = "paper" && computerChoice == "sciscor"){
        console.log("computer won")
    }
    else if( humanChoice = "sciscor" && computerChoice == "paper"){
        console.log("human won")
   }
   else if( humanChoice = "sciscor" && computerChoice == "rock"){
        console.log("computer won")
   }

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
  
playRound(humanSelection, computerSelection);

function getHumanChoice(){
    r = parseint(prompt(" choose a number 0-2  0 = rock, 1 = paper, 2 = scissers" ))
    
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
        f = "scisser"
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
        f = "scisser"
        console.log(f);
    }
    return f

}