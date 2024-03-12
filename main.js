function getComputerChoice(){
    compValues = ['Rock', 'Paper', 'Scissors']
    return compValues[Math.floor(Math.random()*compValues.length)];
}
console.log(getComputerChoice())
let playerPoints = 0;
let computerPoints = 0;

function playRound(playerSelection, computerSelection){
    // Si el jugador gana
        // Sumar puntos al jugador
    computerSelection = getComputerChoice();
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors')||
        (playerSelection == 'Paper'&& computerSelection == 'Rock')||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')){
            playerPoints += 1
            document.getElementById('wResult').innerHTML ="You win! "
                + playerSelection + ' beats ' + computerSelection + 'you have ' + playerPoints + ' points.'

            if (playerPoints == 5){
                console.log("You've won the game! Congratulations!")
                document.getElementById('wResult').innerHTML ="You've won the game!"
                + playerSelection + ' beats ' + computerSelection + ', you have ' + playerPoints + ' points.'
                exit()
            }
        }else if (playerSelection == computerSelection){
            console.log("It's a tie!")
        }else{
            console.log('You lose! '+ computerSelection + ' beats ' + playerSelection)
            computerPoints += 1
            document.getElementById('lResult').innerHTML ="You loose! "
            + computerSelection + ' beats ' + playerSelection + ", computer have's " + computerPoints + ' points.'

            if (computerPoints == 5){
                console.log("You've lost the game! Try again!")
                document.getElementById('lResult').innerHTML = "You've lost the game! Try again!"
                exit()
            }
        }

}