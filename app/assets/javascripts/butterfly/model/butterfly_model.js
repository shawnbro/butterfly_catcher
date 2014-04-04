var Butterfly = Backbone.Model.extend({
  defaults: {
    name: null,
    description: null,
    pointValue: null
  },

  url: function() {
    return '/json/butterflies/new'
  }
})

var ButterflyCollection = Backbone.Collection.extend({
  model: Butterfly,
  url: "/butterflies"
})


// butterfly = new Butterfly({id: "ObjectId('533ec9355368615be3000000')"})
// butterfly.fetch()