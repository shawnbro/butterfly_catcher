class GameController < ApplicationController
  def new
    @butterflies = Butterfly.all.pluck(:name)
    unless Game.all.empty?
      @game = Game.last
    else
      @game = Game.create!
    end
  end
end