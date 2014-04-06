var game = new Phaser.Game(800, 600, Phaser.AUTO, 'butterfly-catcher', { preload: preload, create: create });

function preload() {
    //  
    game.load.spritesheet('butterfly', 'assets/sprites/butterflysprite.png', 50, 34);

}

var butterflies;

function create() {
    // Add a butterfly sprite
    var butterfly = game.add.sprite(Math.random()*800,Math.random()*600, 'butterfly');
    //  Here we add a new animation called 'fly'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
    butterfly.animations.add('fly');

    //  And this starts the animation playing by using its key ("fly")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    butterfly.animations.play('fly', 8, true);
    butterflies = game.add.group();
    butterflies.enableBody = true;
    butterflies.physicsBodyType = Phaser.Physics.ARCADE;

    // for (var i = 0; i < parseInt(Math.random()*3); i++)
    // {
        var butterfly = butterflies.create(200 * 48,50, 'butterfly');

        //This allows your sprite to collide with the world bounds like they were rigid objects
        butterfly.body.collideWorldBounds=true;
        butterfly.body.gravity.x = game.rnd.integerInRange(-5,5);
        butterfly.body.gravity.y = 5 + Math.random() * 10;
        butterfly.body.bounce.setTo(0.7,0.4);
    // }
}




// var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

// function preload() {

//     game.load.image('stars', '../../images/sprites/T_squhillstonegrey/square hill stone grey high mask tileset.bmp');
//     game.load.spritesheet('ship', 'assets/sprites/humstar.png', 32, 32);
//     // game.load.image('panda', 'assets/sprites/spinObj_01.png');
//     game.load.image('sweet', 'assets/sprites/spinObj_06.png');

// }

// var ship;
// var starfield;
// var cursors;

// function create() {

//     game.physics.startSystem(Phaser.Physics.P2JS);
//     // game.physics.p2.defaultRestitution = 0.9;
//     game.physics.p2.gravity.y = 0.5;


//     //  Add a sprite
//     sprite = game.add.sprite(200, 200, 'atari');

//     //  Enable if for physics. This creates a default rectangular body.
//     game.physics.p2.enable(sprite);

//     var spriteMaterial = game.physics.p2.createMaterial('spriteMaterial', sprite.body);

//     var worldMaterial = game.physics.p2.createMaterial('worldMaterial');

//     //  4 trues = the 4 faces of the world in left, right, top, bottom order
//     game.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);

//     //  Here is the contact material. It's a combination of 2 materials, so whenever shapes with
//     //  those 2 materials collide it uses the following settings.
//     //  A single material can be used by as many different sprites as you like.
//     var contactMaterial = game.physics.p2.createContactMaterial(spriteMaterial, worldMaterial);

//     contactMaterial.friction = 0.3;     // Friction to use in the contact of these two materials.
//     contactMaterial.restitution = 1.0;  // Restitution (i.e. how bouncy it is!) to use in the contact of these two materials.
//     contactMaterial.stiffness = 1e7;    // Stiffness of the resulting ContactEquation that this ContactMaterial generate.
//     contactMaterial.relaxation = 3;     // Relaxation of the resulting ContactEquation that this ContactMaterial generate.
//     contactMaterial.frictionStiffness = 1e7;    // Stiffness of the resulting FrictionEquation that this ContactMaterial generate.
//     contactMaterial.frictionRelaxation = 3;     // Relaxation of the resulting FrictionEquation that this ContactMaterial generate.
//     contactMaterial.surfaceVelocity = 0;        // Will add surface velocity to this material. If bodyA rests on top if bodyB, and the surface velocity is positive, bodyA will slide to the right.

//     // starfield = game.add.tileSprite(0, 0, 800, 600, 'stars');
//     // starfield.fixedToCamera = true;

//     // var panda = game.add.sprite(game.world.randomX, game.world.randomY, 'panda');
//     // game.physics.p2.enable(panda, false);
//     // panda.body.setRectangle(40, 40, 0, 0);

//     var sweet = game.add.sprite(game.world.randomX, game.world.randomY, 'sweet');
//     game.physics.p2.enable(sweet, false);
//     sweet.body.setRectangle(40, 40, 0, 0);

//     ship = game.add.sprite(100, 100, 'ship');
//     ship.scale.set(2);
//     ship.smoothed = false;
//     ship.animations.add('fly', [0,1,2,3,4,5], 10, true);
//     ship.play('fly');

//     //  Create our physics body - a 28px radius circle. Set the 'false' parameter below to 'true' to enable debugging
//     game.physics.p2.enable(ship, false);
//     ship.body.setCircle(28);



//     game.camera.follow(ship);

//     //  Here we create a Body specific callback
//     // ship.body.createBodyCallback(panda, hitPanda, this);

//     //  And before this will happen, we need to turn on impact events for the world
//     game.physics.p2.setImpactEvents(true);

//     cursors = game.input.keyboard.createCursorKeys();



// }

// // function hitPanda(body1, body2) {

// //     //  body1 is the space ship (as it's the body that owns the callback)
// //     //  body2 is the body it impacted with, in this case our panda
// //     //  As body2 is a Phaser.Physics.P2.Body object, you access its own (the sprite) via the sprite property:
// //     body2.sprite.alpha -= 0;
// //     console.log("yo");

// // }

// function update() {

//     // ship.body.setZeroVelocity();

//     if (cursors.left.isDown)
//     {
//         ship.body.moveLeft(200);
//     }
//     else if (cursors.right.isDown)
//     {
//         ship.body.moveRight(200);
//     }

//     if (cursors.up.isDown)
//     {
//         ship.body.moveUp(200);
//     }
//     else if (cursors.down.isDown)
//     {
//         ship.body.moveDown(200);
//     }

//     if (!game.camera.atLimit.x)
//     {
//         starfield.tilePosition.x += (ship.body.velocity.x * 16) * game.time.physicsElapsed;
//     }

//     if (!game.camera.atLimit.y)
//     {
//         starfield.tilePosition.y += (ship.body.velocity.y * 16) * game.time.physicsElapsed;
//     }

// }

// function render() {

//     game.debug.text('Catch a butterfly!', 32, 32);

// }