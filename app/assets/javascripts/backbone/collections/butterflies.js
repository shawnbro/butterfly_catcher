var ButterflyCollection = Backbone.Collection.extend({
  model: Butterfly,
  url: function() {
    // return "/games/" + this.game.get("_id") + "/butterflies";
    return "/games/" + gameID + "/butterflies";
  }
});