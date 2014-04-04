class Game
  include Mongoid::Document
  include Mongoid::Timestamps
  field :highScore, type: Integer, default: 0

  store_in collection: "games", database: "butterfly_catcher_development"
end