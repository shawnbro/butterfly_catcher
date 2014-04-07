var Butterfly = Backbone.Model.extend({
  idAttribute: "_id",

  defaults: {
    name: null,
    description: null,
    pointValue: null,
    caught: false,
    game_id: undefined
  },

  catch: function() {
    this.set({ caught: true });
    this.save();
  },

  url: function() {
    return '/butterflies/' + this.get("_id");
  },
})

function listButterflies(butterflies) {
  // list all butterflies
  $("<div id='butterflyIds'>Butterflies: </div>").appendTo("body");
  _.map(butterflies, function(butterfly) { $("#butterflyIds").append(butterfly.attributes.name) });
}

function pickButterfly(butterflies) {
  // pick one random butterfly to catch
  var butterflyIndex = Math.floor(Math.random() * butterflies.length )
  var butterfly = butterflies[butterflyIndex]
  // add butterfly to page
  $("<div id='currentButterfly'>Butterfly: "+ butterfly.get("name") + "</div>").appendTo("body");
  $("<div id='currentButterfly'>Caught: "+ butterfly.get('caught') + "</div>").appendTo("#currentButterfly");
  // set butterfly's game ID
  butterfly.set( { game_id: gameID } );
  butterfly.save();
}
