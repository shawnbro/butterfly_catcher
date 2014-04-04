class Butterfly 
  include Mongoid::Document
  field :name, type: String
  field :description, type: String
  field :point_value, type: Integer

  store_in collection: "butterflies", database: "butterfly_catcher_development"
end