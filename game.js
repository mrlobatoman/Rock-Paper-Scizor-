class Game{
    constructor(){
        this.gameType = 'easy';
        this.user = new Trainer ('user')
        this.computer = new Trainer('computer')
        this.easyChoices = ['🔥', '🍃', '💧']
        this.difficultChoices = ['🔥', '🍃', '💧', '🪨', '☠️']
        this.winner = null;
    }
    changeGameVersion(gameId) {
        if(gameId === 'easy'){
            this.gameType = 'easy'
        } else if (gameId === 'hard'){
            this.gameType = 'hard'
        }
    }
}