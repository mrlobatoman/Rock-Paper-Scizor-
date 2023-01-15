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
var displayOptions = document.querySelector('.display-options')
var poisonOption = document.querySelector('.poison')
var rockOption = document.querySelector('.rock')





easyMode.addEventListener('click', function() {
    easyGame()
    currentGame.changeGameVersion(easyMode.closest('#easy').id)
})

difficultMode.addEventListener('click', function() {
    hardGame()
    currentGame.changeGameVersion(hardMode.closest('#hard').id)
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
    hide(easyMode)
    hide(difficultMode)
    hide(chooseYourGame)
    show(userPokemonTeam)
    show(trPokemonTeam)
    show(displayOptions)
    prompt()
}

function hardGame(){
    hide(easyMode)
    hide(difficultMode)
    hide(chooseYourGame)
    show(userPokemonTeam)
    show(fullTeam1)
    show(fullTeam2)
    show(trPokemonTeam)
    show(displayOptions)
    show(poisonOption)
    show(rockOption)
    prompt()
   
}


