function listButterflies(butterflies) {
  b = butterflies
  butterflyIndex = Math.floor(Math.random() * butterflies.toArray().length - 1)
  $("<div id='butterflyIds'>Butterflies: </div>").appendTo("body");
  _.map(butterflies.toArray(), function(butterfly) { $("#butterflyIds").append(butterfly.attributes.name) });
}

$( document ).ready(function() {
  butterflies = new ButterflyCollection;
  butterflies.fetch().done(function() {
    listButterflies(butterflies);
  })

})