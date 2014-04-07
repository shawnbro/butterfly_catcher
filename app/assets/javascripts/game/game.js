var Game = Backbone.Model.extend({
  idAttribute: "_id",

  defaults: {
    highScore: 0,
    currentScore: 0
  },

  urlRoot: "/games"
});

// var GameCollection = Backbone.Model.extend({
//   model: Game,
//   url: function() {
//     return this._id ? '/game/' + this.id : '/game';
//   }
// })

// var GameView = Backbone.View.extend({
//   tagName: 'div',

//   initialize: function() {
//     this.on("all", function() {
//       this.render
//     });
//     // this.render();
//   }, 

//   render: function() {
//     var template = $("script.template").html();
//     var rendered = _.template(template, { game: this.model });
//     this.$el.html(rendered);
//   }
// })

setUpBoard = function(gameData) {
  $("<div id='gameID'>Game ID: </div>").appendTo('body');
  $("<div id='highScore'>High Score: </div>").appendTo('body');
  $("<div id='currentScore'>Current Score: </div>").appendTo('body');
  $('#gameID').append(gameData.responseJSON._id.$oid);
  $('#highScore').append(gameData.responseJSON.highScore)
  $('#currentScore').append(gameData.responseJSON.currentScore)
}

$( document ).ready(function() {
   var game = new GameCollection;
   // var gameView = new GameView({collection: game});
  var gameData = game.fetch().done(function() {
    setUpBoard(gameData);
  }).done(function() {
    game.on("all", setUpBoard);
  });
})