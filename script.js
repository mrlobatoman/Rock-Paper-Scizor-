var currentGame = new Game();

var easyMode = document.querySelector('.easy-game')
var difficultMode = document.querySelector('.hard-game')
var chooseYourGame = document.querySelector('.choose-your-game')
var userPokemonTeam = document.querySelector('.pokemon-team')
var trPokemonTeam = document.querySelector('.pokemon-team-2')
var changeText = document.querySelector('.computer-message')
var playerOptions = document.querySelector('.games-container')
var fullTeam1 = document.querySelector('.full-team-1')
var fullTeam2 = document.querySelector('.full-team-2')
var poisonOption = document.querySelector('.poison-emoji')
var rockOption = document.querySelector('.rock-emoji')
var changeGameButton = document.querySelector('.change-game')
var battleIcons = document.querySelector('.battle-icons')
var userChoice = document.querySelector('.user-chosen-icon')
var computerChoice = document.querySelector('.computer-chosen-icon')
var displayChoices = document.querySelector('.icon-selection')
var displayWinnerText = document.querySelector('.game-winner-text')
var userScore = document.querySelector('.user-score')
var computerScore = document.querySelector('.computer-score')



changeGameButton.addEventListener('click', changeGame)


function changeGame(){
    if(currentGame.gameType === 'easy'){
        currentGame.gameType ='hard'
        show(battleIcons)
        show(poisonOption)
        show(rockOption)
    } else {
        currentGame.gameType = 'easy'
        show(battleIcons)
        hide(poisonOption)
        hide(rockOption)

    }
}

easyMode.addEventListener('click', function() {
    easyGame()
    currentGame.changeGameVersion(easyMode.closest('#easy').id)
})

difficultMode.addEventListener('click', function() {
    hardGame()
    currentGame.changeGameVersion(difficultMode.closest('#hard').id)
})


battleIcons.addEventListener('click', function(){
    var targetedId = event.target.id
    currentGame.updateSelections(targetedId)
    displayChosen()
})

function show(element){
    element.classList.remove('hidden')
}


function hide(element){
    element.classList.add('hidden')
}

function prompt(){
    changeText.innerText = `Choose Your Pokemon Type!`
}


function easyGame(){
    console.log('hello')
    hide(easyMode)
    hide(difficultMode)
    hide(chooseYourGame)
    show(userPokemonTeam)
    show(trPokemonTeam)
    show(battleIcons)
    prompt()
}

function hardGame(){
    hide(easyMode)
    hide(difficultMode)
    hide(chooseYourGame)
    show(userPokemonTeam)
    show(trPokemonTeam)
    show(battleIcons)
    show(poisonOption)
    show(rockOption)
    prompt()
}

function checkUserChoice(){
    if (currentGame.user.choice === 'fire') {
        userChoice.src = "./images/trainer/charmander front.png"
    } else if (currentGame.user.choice === 'water') {
        userChoice.src = "./images/trainer/squirtle front.png"
    } else if (currentGame.user.choice === 'grass') {
        userChoice.src = "./images/trainer/bulbasaur front.png"
    } else if (currentGame.user.choice === 'poison') {
        userChoice.src = "./images/trainer/grimer.png"
    } else if (currentGame.user.choice === 'rock') {
        userChoice.src = "./images/trainer/geodude.png"
    }
}

function checkComputerChoice(){
    if (currentGame.computer.choice === 'fire') {
        computerChoice.src = "./images/team rocket/growlithe.png"
    } else if (currentGame.computer.choice === 'water') {
        computerChoice.src = "./images/team rocket/horsea.png"
    } else if (currentGame.computer.choice === 'grass') {
        computerChoice.src = "./images/team rocket/bellsprout.png"
    } else if (currentGame.computer.choice === 'poison') {
        computerChoice.src = "./images/team rocket/ekans.png"
    } else if (currentGame.computer.choice === 'rock') {
        computerChoice.src = "./images/team rocket/rhyhorn.png"
    }
}

function displayWinner(){
    if(currentGame.winner === 'trainer'){
        displayWinnerText.innerText = 'You Won!'
    } else if(currentGame.winner === 'computer') {
        displayWinnerText.innerText = 'Team Rocket Won!'
    } else {
        displayWinnerText.innerText = 'Both Pokemon Fainted!'
    }
}

function winCounterDisplay() {
userScore.innerText = `${currentGame.user.score}`
computerScore.innerText = `${currentGame.computer.score}`
}

 function gameReset(){
    displayWinnerText.innerText = null
    show(changeText)
    show(playerOptions)
    hide(displayChoices)
 }


function displayChosen(){
    hide(playerOptions)
    hide(changeText)
    checkUserChoice()
    checkComputerChoice()
    show(displayChoices)
    winCounterDisplay()
    displayWinner()
    setTimeout(gameReset, 2750)
}
