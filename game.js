class Game{
    constructor(){
        this.gameType = 'easy';
        this.user = new Trainer ('user')
        this.computer = new Trainer('computer')
        this.easyChoices = ['fire', 'grass', 'water']
        this.difficultChoices = ['fire', 'grass', 'water', 'rock', 'poison']
        this.winner = null;
    }
    changeGameVersion(gameId) {
        if(gameId === 'easy'){
            this.gameType = 'easy'
        } else if (gameId === 'hard'){
            this.gameType = 'hard'
        }
    }
    updateSelections(targetedId) {
        if(this.gameType === 'easy') {
            this.user.easyTurn(targetedId)
            this.computer.easyTurn()
        }
        if(this.gameType === 'hard') {
            this.user.hardTurn(targetedId)
            this.computer.hardTurn()
        }
        this.winner = this.determineWinner()
    }
    determineWinner() {
        if(this.user.choice === this.computer.choice){
            this.winner = null
        } else if(this.user.choice === 'fire' && (this.computer.choice === 'grass' || 'poison')) {
            this.user.winRound()
        }
    }
}