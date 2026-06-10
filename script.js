console.log("Hello World!");
function getComputerChoice(){
    let choice = ["rock","paper","scissor"]
    return choice[Math.floor(Math.random()*3)];
}
console.log(getComputerChoice());