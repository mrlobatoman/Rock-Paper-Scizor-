class Game{
    constructor(){
        this.gameType = 'easy';
        this.user = new Player ('user')
        this.computer = new Player('computer')
        this.easyChoices = ['🔥', '🍃', '💧']
        this.difficultChoices = ['🔥', '🍃', '💧', '🪨', '☠️']
        this.winner = null;
    }
}