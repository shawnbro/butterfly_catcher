var Game = Backbone.Model.extend({
  idAttribute: "_id",

  defaults: {
    highScore: 0,
    currentScore: 0
  },

  urlRoot: "/games"
});