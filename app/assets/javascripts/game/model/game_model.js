var Game = Backbone.Model.extend({
  defaults: {
    highScore: 0
  },

  url: function() {
    return '/'
  }
})

var GameCollection = Backbone.Model.extend({
  model: Game,
  url: '/game'
})