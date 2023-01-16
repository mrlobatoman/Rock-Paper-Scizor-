class Trainer{
    constructor(playerName){
        this.name = playerName
        this.score = 0
        this.choice = null;
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