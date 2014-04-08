# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# butterflies = ["Swallowtail", "Papilionidae", "Pieridae", "Lycaenidae", "Riodinidae", "Nymphalidae", "Libytheinae", " Danainae", "Tellervinae", "Ithomiinae", "Calinaginae", " Morphinae", "Satyrinae", "Charaxinae", "Biblidinae", "Apaturinae", "Nymphalinae", "Limenitidinae", "Heliconiinae"]

# butterflies.each do |butterfly|
#   Butterfly.create({ name: butterfly })
# end
butterflies = [{ name: "Carterocephalus palaemon  aka Arctic Skipper", description: "The Arctic Skipper is not truly arctic, but is circumboreal, occurring in cool, wooded, usually streamside habitats across northern Eurasia and North America. Our transect is right at its southern range limit in California. ", pointValue: 25 , image: "http://butterfly.ucdavis.edu/files/butterfly/img/butterfly/small/s_Carterocephalus_palaemon.jpg" }, 

{ name: "Hesperia columbia aka Columbian Skipper", description: "The Columbian Skipper is found mainly in the California Coast Range. In the Sierra Nevada it is known from only a handful of localities, mainly on serpentine. Rare!", pointValue: 50 , image: "http://butterfly.ucdavis.edu/files/butterfly/img/butterfly//med/m_Hesperia_columbia.jpg" }, 

{ name: "Pyrgus communis aka Common Checkered Skipper", description: "This familiar insect appears to be found from sea level to tree line.", pointValue: 10, image: "http://butterfly.ucdavis.edu/files/butterfly/img/butterfly/small/s_0212.jpg" }, 

{ name: "Pholisora catullus aka Common Sooty-Wing", description: "This butterfly used to be fairly common but has recently all-but disappeared.  They hang out mostly in vegetable gardens and vacant lots on weedy Pigweeds." , pointValue: 30 , image: "http://butterfly.ucdavis.edu/files/butterfly/img/butterfly/small/s_P_catullus.jpg" } ]

butterflies.each do |butterfly|
  Butterfly.create!(name: butterfly[:name], description: butterfly[:description], pointValue: butterfly[:pointValue], image: butterfly[:image]);
end