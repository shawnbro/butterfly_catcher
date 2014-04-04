var Game = Backbone.Model.extend({
  defaults: {
    highScore: 0
  },

  url: function() {
    return '/'
  }
})