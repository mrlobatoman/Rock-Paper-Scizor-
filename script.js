var currentGame = new Game();

var easyMode = document.querySelector('#easy')
var difficultMode = document.querySelector('#hard')

easyMode.addEventListener('click', function() {
    easyGame()
})

//click on a game mode
//hide the display of both game modes
//hide the choose game text
//display respectable pokemon teams
//display selection options

difficultMode.addEventListener('click', function() {
    hardGame()
})


