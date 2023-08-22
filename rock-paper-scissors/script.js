const computersChoiceEl = document.getElementById('computers-choice')
const userScoreEl = document.getElementById('user-score')
const computerScoreEl = document.getElementById('computer-score')
const buttons = document.querySelectorAll('button')
const roundEl = document.getElementById('round')
const resultEl = document.getElementById('score')

const rockId = 1
const paperId = 2
const scissorsId = 3

let userChoice;
let computersChoice;
let userScore = 0
let computerScore = 0
let round = 1

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        showWinner()
        userChoice = e.target.id == 'rock' ? 1 : e.target.id == 'paper' ? 2 : 3
        computersChoice = Math.floor(Math.random() * 3) + 1
        computersChoiceEl.innerHTML = showComputersChoice()
        updateResult()
        roundEl.innerHTML = round++
        userScoreEl.innerHTML = userScore
        computerScoreEl.innerHTML = computerScore
    })
})


function showComputersChoice(){
    if(computersChoice === rockId) return `Rock`
    if(computersChoice === paperId) return `Paper`
    return `Scissors`
}

function updateResult(){
    // if user picks rock and computer paper
    if(userChoice === 1 && computersChoice === 2) computerScore++
    // if user picks rock and computer scissors
    if(userChoice === 1 && computersChoice === 3) userScore++
    // if user picks paper and computer rock
    if(userChoice === 2 && computersChoice === 1) userScore++
    // if user picks paper and computer scissors
    if(userChoice === 2 && computersChoice === 3) computerScore++
    // if user picks scissors and computer rock
    if(userChoice === 3 && computersChoice === 1) computerScore++
    // if user picks scissors and computer paper
    if(userChoice === 3 && computersChoice === 2) userScore++

    // anything else is a draw
    return `draw`
}

function showWinner(){
    if(round == 5){
        buttons.forEach(button => {
            button.disabled = true
        })
        userScore > computerScore ? resultEl.innerHTML = 'You win!' :
        userScore < computerScore ? resultEl.innerHTML = 'You lose!' :
        'Draw'
    }
}

// to do 
// option to play computer or multiplayer
// can choose how many rounds