const getComputerChoice = function(){
    let random = Math.floor(Math.random() * 3) + 1;
   
    if(random === 1){
        return "rock";
    }
    else if (random === 2){
        return "paper";
    }
    else if (random === 3){
        return "scissors";
    }
  

   
}
const getHumanChoice = function(answer){
    answer = prompt("Hello User, Kindly insert a number between 1 and 3!");
    if(answer == 1){
        return "rock";
    }
    else if (answer == 2){
        return "paper";
    }
    else if (answer == 3){
        return "scissors";
    }
    else{
        return "nothing, Please pickout a number between 1 to 3"
    }
   

}
var HumanScore = 0;
var computerScore = 0;

const Play = function() {
    for(let i = 0 ; i < 5; i++){
        console.log( playRound(getHumanChoice(), getComputerChoice()));

    } 
    if(HumanScore > computerScore){
        console.log("the Human won by " + HumanScore+ " to " + computerScore)
    }   
    else if(computerScore > HumanScore){
        console.log("The Computer won by " + computerScore + " to " +HumanScore)
    }



}
const playRound = function (humanChoice, computerChoice){
    
    if(humanChoice == "paper" && computerChoice == "rock"){
        HumanScore = HumanScore + 1;
        console.log("The Computer picked " + computerChoice + " and the Human picked " + HumanScore );
        return "The Human wins this round, The Score is Human " + HumanScore + " and Computer " + computerScore;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("The Computer picked " + computerChoice + " and the Human picked " + HumanScore );
        HumanScore = HumanScore + 1;
        return "The Human wins this round, The Score is Human " + HumanScore + " and Computer " + computerScore;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        HumanScore = HumanScore + 1;
        console.log("The Computer picked " + computerChoice + " and the Human picked " + HumanScore )
        return "The Human wins this round, The Score is Human " + HumanScore + " and Computer " + computerScore;
    }
    else if(humanChoice == computerChoice){
        console.log("The Computer picked " + computerChoice + " and the Human picked " + HumanScore )
        return "The Round is a Draw, The Score is Human " + HumanScore + " and Computer " + computerScore;
    }
    else{
        computerScore = computerScore + 1;
        console.log("The Computer picked " + computerChoice + " and the Human picked " + HumanScore )
        return "The Computer wins this round, The Score is Human " + HumanScore + " and Computer " + computerScore;

    }
}

console.log(Play());


;

