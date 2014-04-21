class Game
  include Mongoid::Document
  include Mongoid::Timestamps
  field :highScore, type: Integer, default: 0
  field :currentScore, type: Integer, default: 0
  has_many :butterflies

  store_in collection: "games", database: "app24394627"
end