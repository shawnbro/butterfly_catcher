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
  }
})

var ButterflyCollection = Backbone.Collection.extend({
  model: Butterfly,
  url: function() {
    return "/games" + this.game.get("_id") + "/butterflies";
  }
});


new ButterflyCollection({game: gameModel});

// var ButterflyView = Backbone.View.extend({
//   tagName: "canvas",

//   initialize: function() {
//     this.listnTo(this.model, "change", this.render);
//     this.render();
//   },
//   events: {
//     "change input[type='checkbox']": "catch"
//   }, 
//   catch: function(e) {
//     var caught = $(e.target).is(":checked");
//     this.model.set('caught', checked);
//     this.model.save();
//   },
//   render: function() {
//     var template = $("script.template").html();
//     var rendered = _.template(template, { butterfly: this.model });
//     this.$el.html(rendered);
//   }
// })

function listButterflies(butterflies) {
  // list all butterflies
  $("<div id='butterflyIds'>Butterflies: </div>").appendTo("body");
  _.map(butterflies, function(butterfly) { $("#butterflyIds").append(butterfly.attributes.name) });
}

function pickButterfly(butterflies) {
  // pick one random butterfly to catch
  var butterflyIndex = Math.floor(Math.random() * butterflies.length )
  butterfly = butterflies[butterflyIndex]
  // add butterfly to page
  $("<div id='currentButterfly'>Butterfly: "+ butterfly.get("name") + "</div>").appendTo("body");
  $("<div id='currentButterfly'>Caught: "+ butterfly.attributes.caught + "</div>").appendTo("#currentButterfly");
  // set butterfly's game ID
  butterfly.set( { game_id: $('#gameID').text().split(': ')[1] } );
  butterfly.save();
}

$( document ).ready(function() {
  var game = new Game();
  var butterflies = new ButterflyCollection({game: game});
  butterflies.fetch().done(function() {
    listButterflies(butterflies.toArray());
  }).done(function() {
    pickButterfly(butterflies.toArray())
  })
})