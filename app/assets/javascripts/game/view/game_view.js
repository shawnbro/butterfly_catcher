setUpBoard = function(gameData) {
  $("<div id='gameID'></div>").appendTo('body');
  $("<div id='highScore'></div>").appendTo('body');
  $('#gameID').append('Game Id:' + gameData.responseJSON._id.$oid);
  $('#highScore').append('High Score: ' + gameData.responseJSON.highScore)
}

$( document ).ready(function() {
  var game = new GameCollection;
  var gameData = game.fetch().done(function() {
    setUpBoard(gameData);
  });
})