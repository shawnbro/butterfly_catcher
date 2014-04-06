var game = new Phaser.Game(800, 600, Phaser.AUTO, 'butterfly-catcher', { preload: preload, create: create });

function preload() {
    game.load.spritesheet('butterfly', 'assets/sprites/butterflysprite.png', 50, 34);
}

var butterflies;

function create() {
    // Add a butterfly sprite
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.world.setBounds(0, 0, 800, 600);

    var butterfly = game.add.sprite(Math.random()*800,Math.random()*600, 'butterfly');
    game.physics.enable( [ butterfly ], Phaser.Physics.ARCADE);
    game.physics.p2.gravity.y = 100
    game.physics.p2.defaultRestitution = 0.8;
    // game.physics.p2.gravity.x = 100;
    butterfly.name = 'butterfly';
    
    butterfly.body.velocity.x = Math.random() * 400;
    butterfly.body.velocity.y = Math.random() * 400;
    butterfly.body.collideWorldBounds = true;
    butterfly.body.bounce.set(1);
    game.stage.backgroundColor = '#aabbff';
    //  Here we add a new animation called 'fly'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
    butterfly.animations.add('fly');
    game.physics.p2.enable(butterfly);


    //  And this starts the animation playing by using its key ("fly")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    butterfly.animations.play('fly', 8, true);
}
