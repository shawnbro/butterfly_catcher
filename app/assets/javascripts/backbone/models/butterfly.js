var Butterfly = Backbone.Model.extend({
  idAttribute: "_id",

  defaults: {
    name: null,
    description: null,
    pointValue: null,
    caught: false,
    image: null,
    game_id: undefined
  },

  catch: function() {
    this.set({ caught: true });
    this.save();
  },

  urlRoot: function() {
    return '/games/'+ gameID + '/butterflies';
  }
})

