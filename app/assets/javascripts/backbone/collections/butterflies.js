var ButterflyCollection = Backbone.Collection.extend({
  model: Butterfly,
  url: function() {
    return "/games/" + gameID + "/butterflies";
  }
});