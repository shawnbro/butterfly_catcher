class Butterfly 
  include Mongoid::Document
  field :name, type: String
  field :description, type: String
  field :pointValue, type: Integer
  field :image, type: String
  field :caught, type: Boolean, default: false
  belongs_to :game

  store_in collection: "butterflies", database: "app24394627"

end