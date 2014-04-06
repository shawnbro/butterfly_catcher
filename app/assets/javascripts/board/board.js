var game = new Phaser.Game(800, 600, Phaser.AUTO, 'butterfly-catcher', { preload: preload, create: create });

function preload() {
    game.load.image('net', 'assets/sprites/butterfly-net.png');
    game.load.spritesheet('butterfly', 'assets/sprites/butterflysprite.png', 50, 34);
}

var butterfly;
var net;
var cursors;

function create() {
    // Enable P2 Physics
    game.physics.startSystem(Phaser.Physics.P2JS);

    // Set Board Background Color
    game.stage.backgroundColor = '#aabbff';

    // Add sprites
    butterfly = game.add.sprite(Math.random()*800,Math.random()*600, 'butterfly');
    net = game.add.sprite(0, 0, 'net');

    //Set gravity params
    game.physics.p2.gravity.y = 100;
    game.physics.p2.defaultRestitution = .8;

    // enable physical interaction between sprites
    game.physics.enable( [ butterfly, net ], Phaser.Physics.ARCADE);
    
    // set world bounds 
    game.world.setBounds(0, 0, 800, 600);

    butterfly.name = 'butterfly';
    net.name = 'net';
    
    butterfly.body.velocity.x = Math.random() * 200;
    butterfly.body.velocity.y = Math.random() * 200;

    butterfly.body.collideWorldBounds = true;
    net.body.collideWorldBounds = true;
    
    butterfly.body.bounce.set(1.01);
    butterfly.body.gravity.set(0, 40);
    net.body.bounce.set(.1);
    net.body.gravity.set(0, 40)

    //  Here we add a new animation called 'fly'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
    butterfly.animations.add('fly');
    game.physics.p2.enable(butterfly);
    game.physics.p2.enable(net);


    //  And this starts the animation playing by using its key ("fly")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    butterfly.animations.play('fly', 8, true);

    //create input listener for arrows
    cursors = game.input.keyboard.createCursorKeys();
    console.log(cursors);
}
function update() {

    net.body.setZeroVelocity();

    if (cursors.left.isDown)
    {
        net.body.moveLeft(400);
    }
    else if (cursors.right.isDown)
    {
        net.body.moveRight(400);
    }

    if (cursors.up.isDown)
    {
        net.body.moveUp(400);
    }
    else if (cursors.down.isDown)
    {
        net.body.moveDown(400);
    }

}
