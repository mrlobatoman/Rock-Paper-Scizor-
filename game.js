class Game{
    constructor(){
        this.gameType = 'easy';
        this.user = new Trainer ('user')
        this.computer = new Trainer('computer')
        this.easyChoices = ['🔥', '🍃', '💧']
        this.difficultChoices = ['🔥', '🍃', '💧', '🪨', '☠️']
        this.winner = null;
    }
}