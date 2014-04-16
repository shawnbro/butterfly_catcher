// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require phaser
//= require_tree ./board

$( document ).ready(function() {
  window.game = new Game( { _id: gameID } );
  window.newButterfly = new Butterfly( { game_id: gameID, 
    name: window.butterflyName, 
    description: window.butterflyDescription, 
    pointValue: window.butterflyPointValue, 
  });
  newButterfly.save();
  window.allButterflies = new ButterflyCollection( { game: window.game } );
  allButterflies.fetch();

  newButterfly.on("change:caught", function(butterfly, caught) {
    // only works if butterfly gets caught
    if(caught === true) {
      game.set({currentScore: parseInt(game.get('currentScore') + newButterfly.get('pointValue'))});
      game.set({highScore: window.highScore});
      $("#currentScore").text('Current Score: ' + game.get('currentScore'));
      $("#highScore").text('High Score: ' + game.get('highScore'));
      $("#jar").empty()
        .append("<div id='caught-butterfly'>"+newButterfly.get('name')
          +"</br>"+newButterfly.get('description')
          // +"</br><img src=url('"+newButterfly.get('image')
          // +"')alt='Pretty Butterfly Picture' width='50px'
        +"</br>Points: "+newButterfly.get('pointValue')+"</div>");
    }
  });
});
