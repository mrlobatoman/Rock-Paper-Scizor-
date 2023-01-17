class Trainer{
    constructor(playerName){
        this.name = playerName
        this.choice = null
        this.score = 0
    }
    easyTurn(targetedId){
        this.choice = targetedId || this.getRandomElement(currentGame.easyChoices)
    }
    hardTurn(targetedId){
        this.choice = targetedId || this.getRandomElement(currentGame.difficultChoices)
    }
    getRandomElement(array) {
        return array[Math.floor(Math.random()*array.length)];
      }
    winRound(){
        this.score++
    }
}