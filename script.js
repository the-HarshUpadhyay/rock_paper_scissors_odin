//console.log("Hello World!");
function getComputerChoice(){
    let choice = ["rock","paper","scissors"]
    return choice[Math.floor(Math.random()*3)];
}

function playRound(computerChoice,humanChoice){
    console.log(`Computer: ${computerChoice}\tUser: ${humanChoice}`)
    let humanWins = 0;
    if(computerChoice == "rock"){
        switch(humanChoice){
            case "rock":
                console.log("Draw!");
                break;
            case "paper":
                console.log("You Win! Paper beats Rock!");
                humanWins = 1;
                break;
            case "scissors":
                console.log("You Lose! Rock beats Scissors")
                break;
        }
    }
    else if(computerChoice == "paper"){
        switch(humanChoice){
            case "rock":
                console.log("You Lose! Paper beats Rock");
                break;
            case "paper":
                console.log("Draw!");
                break;
            case "scissors":
                console.log("You Win! Scissors beats Paper");
                humanWins = 1;
                break;
        }
    }
    else if(computerChoice == "scissors"){
        switch(humanChoice){
            case "rock":
                console.log("You Win! Rock beats Scissors");
                humanWins = 1;
                break;
            case "paper":
                console.log("You Lose! Scissors beats Paper");
                break;
            case "scissors":
                console.log("Draw!");
                break;
        }
    }
    if(humanWins) humanScore++;
    else computerScore++;
    console.log("SCORE: Human: "+humanScore+" Computer: "+computerScore);

}

function playGame(){
    const btnRock = document.querySelector('.rock');
    const btnPaper = document.querySelector('.paper');
    const btnScissors = document.querySelector('.scissors');

    btnRock.addEventListener('click',()=>{
        playRound(getComputerChoice(),'rock');
    })
    btnPaper.addEventListener('click',()=>{
        playRound(getComputerChoice(),'paper');
    })
    btnScissors.addEventListener('click',()=>{
        playRound(getComputerChoice(),'scissors');
    })


}

let humanScore = 0;
let computerScore = 0;

playGame();