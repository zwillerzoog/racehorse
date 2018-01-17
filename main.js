let horse;
let cursors;

let game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload, create, update})

function preload() {
    game.load.spritesheet('horse', 'blueHorse.png', 100, 100)
    game.load.image('background', 'background.jpg')
}

function create() {
    game.add.sprite(0,0, 'background')
    horse = game.add.sprite(0,0, 'horse')
    game.physics.arcade.enable(horse);
    horse.body.collideWorldBounds = true;
    horse.animations.add('runRight', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,], 20, true)
}

function update() {
    cursors = game.input.keyboard.createCursorKeys();
    // let hitPlatform = game.physics.arcade.collide(horse,)
    horse.body.velocity.x = 0;
    horse.body.velocity.y = 0;
    if (cursors.right.isDown) {
        horse.body.velocity.x = 150
        horse.animations.play('runRight')
    }
    else if (cursors.left.isDown) {
      horse.body.velocity.x = -150;
    }
    else if (cursors.down.isDown) {
      horse.body.velocity.y = 150;
    }
    else if (cursors.up.isDown) {
        horse.body.velocity.y = -150
    }

}

