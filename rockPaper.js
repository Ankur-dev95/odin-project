function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function playRound(humanChoice, computerChoice) {
    // your code here!
    const result = document.querySelector(".result");
    const computerChoic1 = document.querySelector(".computerChoic");
    const score = document.querySelector(".score");
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
        result.textContent = "no one wins";
   }
  
   console.log(`human score: ${humanScore} , computer score: ${compScore}`)
   computerChoic1.textContent = "computer choice: " + computerChoice;
   score.textContent = `human score: ${humanScore} , computer score: ${compScore}`;

}

var humanScore = 0;
var compScore = 0; 

var humanSelection = "";
var computerSelection = "";

function get_computer_choice(){
    f = getRandomInt(3);
    if (f === 0){
        computerSelection = "rock"

    }
    else if( f === 1){
        computerSelection = "paper"

    }
    else if( f === 2){
        computerSelection = "sciscor"
    }

}


function when_clicked_rock(){
    humanSelection = "rock";
    return humanSelection
}

function when_clicked_paper(){
   humanSelection = "paper"
    return humanSelection
}
function when_clicked_scissor(){
    humanSelection = "sciscor"

    return humanSelection
}

