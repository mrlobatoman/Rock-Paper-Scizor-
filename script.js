var currentGame = new Game();

var easyMode = document.querySelector('.easy-game')
var difficultMode = document.querySelector('.hard-game')
var chooseYourGame = document.querySelector('.choose-your-game')
var userPokemonTeam = document.querySelector('.pokemon-team')
var trPokemonTeam = document.querySelector('.pokemon-team-2')
var changeText = document.querySelector('.computer-message')

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

function changeMessage(){
    changeText.innerText = `Choose your Pokemon!`
}

function hide(element){
    element.classList.add('hidden')
}

function easyGame(){
    hide(easyMode)
    hide(difficultMode)
    hide(chooseYourGame)
    show(userPokemonTeam)
    show(trPokemonTeam)
    changeMessage()
}

