function listButterflies(butterflies) {
  butterflies = butterflies.toArray()
  butterflyIndex = Math.floor(Math.random() * butterflies.length )
  b = butterflies[butterflyIndex]
  // list all butterflies
  $("<div id='butterflyIds'>Butterflies: </div>").appendTo("body");
  _.map(butterflies, function(butterfly) { $("#butterflyIds").append(butterfly.attributes.name) });
  // pick one random butterfly to catch
  $("<div id='currentButterfly'>Butterfly: "+ butterflies[butterflyIndex].attributes.name + "</div>").appendTo("body");
}

function pickButterfly(butterflies) {
  $("<div id='currentButterfly'>Butterfly: </div>").appendTo("body");
}

$( document ).ready(function() {
  butterflies = new ButterflyCollection;
  butterflies.fetch().done(function() {
    listButterflies(butterflies);
  })
})