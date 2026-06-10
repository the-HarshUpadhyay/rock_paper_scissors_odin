//console.log("Hello World!");
function getComputerChoice(){
    let choice = ["rock","paper","scissor"]
    return choice[Math.floor(Math.random()*3)];
}
function getHumanChoice(){
    let choice = prompt('Enter Choice');
    switch (choice){
        case "rock":
        case "paper":
        case "scissor":
            return choice;
            break;
        default:
            alert("Enter a valid choice!!");
            break;
    }
}
//console.log(getComputerChoice());
//console.log(getHumanChoice());