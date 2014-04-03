# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
butterflies = ["Swallowtail", "Papilionidae", "Pieridae", "Lycaenidae", "Riodinidae", "Nymphalidae", "Libytheinae", " Danainae", "Tellervinae", "Ithomiinae", "Calinaginae", " Morphinae", "Satyrinae", "Charaxinae", "Biblidinae", "Apaturinae", "Nymphalinae", "Limenitidinae", "Heliconiinae"]

butterflies.each do |butterfly|
  Butterfly.create({ name: butterfly })
end