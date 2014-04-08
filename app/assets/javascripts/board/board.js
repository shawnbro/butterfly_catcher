$( document ).ready(function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'butterfly-catcher', { preload: preload, create: create, update: update, render: render  });

  function preload() {
      game.load.image('net', 'assets/sprites/butterfly-net.png');
      game.load.image('cloud', 'assets/sprites/cloud.png');
      game.load.image('cloud-2', 'assets/sprites/cloud-2.png');
      game.load.spritesheet('butterfly', 'assets/sprites/butterflysprite.png', 50, 34);
  }

  var butterfly;
  var clouds = [];
  var net;
  var cursors;

  function create() {
      // Enable P2 Physics
      game.physics.startSystem(Phaser.Physics.P2JS);

      // Set Board Background Color
      game.stage.backgroundColor = '#aabbff';


      // Add sprites
      butterfly = game.add.sprite(Math.random()*800,Math.random()*600, 'butterfly');
      for(var i = 0; i < Math.floor(Math.random()*12); i++) {
        cloud = game.add.sprite(Math.random() * 400, Math.random() * 300, 'cloud');
        clouds.push(cloud);
      }
      net = game.add.sprite(0, 0, 'net');
      net.enableBody = true
      butterfly.enableBody = true;

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

  function collisionHandler (obj1, obj2) {

      //  The two sprites are colliding
      // game.stage.backgroundColor = '#992d2d';
      newButterfly.catch();
      obj1.kill();
      obj2.kill();
      for(var i = 0; i < clouds.length; i++) {
        clouds[i].kill();
      }
      create();


  }

  function render() {
      game.debug.cameraInfo(game.camera, 32, 32);
  }

}) // end document ready
