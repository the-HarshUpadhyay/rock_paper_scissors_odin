//console.log("Hello World!");
function getComputerChoice(){
    let choice = ["rock","paper","scissors"]
    return choice[Math.floor(Math.random()*3)];
}

function playRound(computerChoice,humanChoice){
    
    p1.textContent = `Computer: ${computerChoice}\tUser: ${humanChoice}`;
    let humanWins = 0;
    if(computerChoice == "rock"){
        switch(humanChoice){
            case "rock":
                text = "Draw!";
                break;
            case "paper":
                text = "You Win! Paper beats Rock!";
                humanWins = 1;
                break;
            case "scissors":
                text = "You Lose! Rock beats Scissors"
                break;
        }
    }
    else if(computerChoice == "paper"){
        switch(humanChoice){
            case "rock":
                text = "You Lose! Paper beats Rock";
                break;
            case "paper":
                text = "Draw!";
                break;
            case "scissors":
                text = "You Win! Scissors beats Paper";
                humanWins = 1;
                break;
        }
    }
    else if(computerChoice == "scissors"){
        switch(humanChoice){
            case "rock":
                text = "You Win! Rock beats Scissors";
                humanWins = 1;
                break;
            case "paper":
                text = "You Lose! Scissors beats Paper";
                break;
            case "scissors":
                text = "Draw!";
                break;
        }
    }
    if(humanWins) humanScore++;
    else computerScore++;

    p2.textContent =  text;
    p3.textContent = "SCORE: Human: "+humanScore+" Computer: "+computerScore;

    if(humanScore == 5 || computerScore == 5){
        if(humanScore == 5) p4.textContent = "WINNER : HUMAN";
        else p4.textContent = "WINNER : COMPUTER";
    }
}

function playGame(){
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

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');

const div = document.querySelector('div');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const hr = document.createElement('hr');
const p4 = document.createElement('p');

div.append(p1,p2,p3,p4,hr);

playGame();