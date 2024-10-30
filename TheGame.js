/*
const HumanChoice = document.querySelectorAll(".btn");




HumanChoice.forEach(one => {
    one.addEventListener("click", () =>{

        const tally = 0;
        HumanScore = 0;
        ComScore = 0;
        

       const ComputerChoice = function(){
    const choice = Math.floor(Math.random() * 3) + 1;

    if(choice == 1){
        return "rock"
    }
    else if(choice == 2){
        return "paper"
    }
    else if (choice == 3){
        return "scissors"
    }
}
      


        const GamePlay = function(ComputerChoice){
             const value = (one.textContent).toLocaleLowerCase();
            
             const declareWinner = document.querySelector("h2");
                if(value == ComputerChoice ){
                    declareWinner.textContent = "Draw because you played " + value + "and Com played " + ComputerChoice
                }
                
             else if(value == "rock" && ComputerChoice == "paper" ){
                declareWinner.textContent = "You lost because you played " + value + "and Com played " + ComputerChoice
                ComScore++;

             }
             else if (value == "rock" && ComputerChoice == "scissors" ){
                declareWinner.textContent = "You Won because you played " + value + "and Com played " + ComputerChoice
                return HumanScore++;
             }
             else if(value == "paper" && ComputerChoice == "scissors"){
                declareWinner.textContent = "You lost because you played " + value + "and Com played " + ComputerChoice
               return ComScore++;
             }
             else if(value == "paper" && ComputerChoice == "rock"){
                declareWinner.textContent = "You won because you played " + value + "and Com played " + ComputerChoice
                return HumanScore++;
             }
             else if(value == "scissors" && ComputerChoice == "paper"){
                declareWinner.textContent = "You won because you played " + value + "and Com played " + ComputerChoice
                return HumanScore++;
             }
             else if(value == "scissors" && ComputerChoice == "rock"){
                declareWinner.textContent = "You lost because you played " + value + "and Com played " + ComputerChoice
                return ComScore++;
             }
             setTimeout(() => {declareWinner.textContent= "Want to play One More time"

             },10000)

        }

        
        const Round = function(){
            for(let i = 0; i < 5; i++){
                GamePlay(ComputerChoice());
            }
                if(HumanScore > ComScore){
                    document.querySelector("h1").textContent ="You won"
                
                }
                else if(HumanScore < ComScore){
                    document.querySelector("h1").textContent ="You lost"
                
                }
        
            
        }

        Round();
    })
})

*/
// Define scores and round count outside the event listener for persistence
let HumanScore = 0;
let ComScore = 0;
let roundCount = 0;

const HumanChoice = document.querySelectorAll(".btn");

HumanChoice.forEach(one => {
    one.addEventListener("click", () => {

        // Function to generate computer choice
        const ComputerChoice = function(){
            const choice = Math.floor(Math.random() * 3) + 1;
            if(choice == 1) return "rock";
            else if(choice == 2) return "paper";
            else if(choice == 3) return "scissors";
        }

        // GamePlay function
        const GamePlay = function(computerChoice){
            const value = one.textContent.toLowerCase();
            const declareWinner = document.querySelector("h2");
            

            if(value === computerChoice) {
                declareWinner.textContent = 'Draw! You played ' + value +' and Computer played ' + computerChoice;
            }
             else if (value === "rock" && computerChoice === "paper") {
                declareWinner.textContent = 'You lost! You played ' + value +' and Computer played ' + computerChoice;
                ComScore++;
            } else if (value === "rock" && computerChoice === "scissors") {
                declareWinner.textContent = 'You won! You played ' + value +' and Computer played ' + computerChoice;
                HumanScore++;
            } else if (value === "paper" && computerChoice === "scissors") {
                declareWinner.textContent = 'You lost! You played ' + value +' and Computer played ' + computerChoice;
                ComScore++;
            } else if (value === "paper" && computerChoice === "rock") {
                declareWinner.textContent = 'You won! You played ' + value +' and Computer played ' + computerChoice;
                HumanScore++;
            } else if (value === "scissors" && computerChoice === "paper") {
                declareWinner.textContent = 'You won! You played ' + value +' and Computer played ' + computerChoice;
                HumanScore++;
            } else if (value === "scissors" && computerChoice === "rock") {
                declareWinner.textContent = 'You lost! You played ' + value +' and Computer played ' + computerChoice;
                ComScore++;
            }

            // Increment round count
            roundCount++;

            // Check if 5 rounds have been played
            if(roundCount >= 5) {
                setTimeout(() => {
                    const finalResult = document.querySelector("h1");
                    if(HumanScore > ComScore) {
                        finalResult.textContent = "Congratulations! You won the game!";
                       
                    } else if (HumanScore < ComScore) {
                        finalResult.textContent = "You lost the game. Better luck next time!";
                       
                    } else {
                        finalResult.textContent = "It's a draw!";
                       
                    }

                    // Reset scores and round count for a new game
                    HumanScore = 0;
                    ComScore = 0;
                    roundCount = 0;
                }, 1000); // Delay to show the last round's result
            }
        }

        // Run GamePlay with the computer's choice
        GamePlay(ComputerChoice());
    });
});