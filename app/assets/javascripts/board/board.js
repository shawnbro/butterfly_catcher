$( document ).ready(function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'butterfly-catcher', { preload: preload, create: create, update: update, render: render  });

  function preload() {
    game.load.image('net', 'assets/sprites/butterfly-net.png');
    game.load.image('cloud', 'assets/sprites/cloud.png');
    game.load.spritesheet('butterfly', 'assets/sprites/butterflysprite.png', 50, 34);
  }

  var butterfly;
  var clouds = [];
  var net;
  var cursors;

  function create() {
    //this adds clouds at random positions:
    for(var i = 0; i < Math.floor(Math.random()*360); i++) {
      cloud = game.add.sprite(Math.random() * 400, Math.random() * 300, 'cloud');
      clouds.push(cloud);
    }
    // Enable P2 Physics
    game.physics.startSystem(Phaser.Physics.P2JS);

    // Set Board Background Color
    game.stage.backgroundColor = '#aabbff';

    // Add sprites
    butterfly = game.add.sprite(Math.random()*800,Math.random()*600, 'butterfly');
    butterfly.bringToTop();

    net = game.add.sprite(400, 200, 'net');
    net.enableBody = true
    butterfly.enableBody = true;

    //Set gravity params
    game.physics.p2.gravity.y = 100;
    game.physics.p2.defaultRestitution = .8;

    // enable physical interaction between sprites
    game.physics.enable( [ butterfly, net, clouds ], Phaser.Physics.ARCADE);
    
    // set world bounds 
    game.world.setBounds(0, 0, 800, 600);

    butterfly.name = 'butterfly';
    net.name = 'net';
    // randomly set butterfly velocity 
    butterfly.body.velocity.x = Math.random() * 200;
    butterfly.body.velocity.y = Math.random() * 200;
    // collision handler enable
    butterfly.body.collideWorldBounds = true;
    net.body.collideWorldBounds = true;
    // set bounciness for butterfly & net
    butterfly.body.bounce.set(1.01);
    butterfly.body.gravity.set(0, 40);
    net.body.bounce.set(.1);
    net.body.gravity.set(0, 40);


    //  Here we add a new animation called 'fly'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
    butterfly.animations.add('fly');
    game.physics.p2.enable(butterfly);
    game.physics.p2.enable(net);


    //  starts the animation playing by using its key ("fly")
    butterfly.animations.play('fly', 8, true);
  }

  function update() {

  game.input.keyboard.onDownCallback = function( e ){
    if(e.keyCode == Phaser.Keyboard.UP){
      net.body.velocity.y = -100;
    }
    if(e.keyCode == Phaser.Keyboard.LEFT){
      net.body.velocity.x = -100;
    }
    if(e.keyCode == Phaser.Keyboard.DOWN){
      net.body.velocity.y = 100;
    }
    if(e.keyCode == Phaser.Keyboard.RIGHT){
      net.body.velocity.x = 100;
    }
  }
  game.physics.arcade.collide(butterfly, net, collisionHandler, null, this);
}

  function collisionHandler (obj1, obj2, obj3) {
    //  The two sprites are colliding
    // trigger butterfly caught
    newButterfly.catch();
    //remove net from canvas
    obj2.kill();   
    for(var i = 0; i < clouds.length; i++) {
      clouds[i].kill();
    } // and then regenerate them.
    create();
  }

  function render() {
  
  }

}) // end document ready
