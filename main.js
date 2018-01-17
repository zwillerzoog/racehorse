let game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload, create, update})

function preload() {
    game.load.spritesheet('horse', 'blueHorse.png', 100, 100)
}

function create() {
    game.add.sprite(0,0, 'horse')
}

function update() {

}