class GamesController < ApplicationController
  
  # def index
  #   @game = Game.last
  #   render json: @game
  # end

  def create
    @butterfly = Butterfly.all.sample
    @game = Game.create!
  end

  def show
    render json: Game.find_by(_id: params[:_id])
  end

  def update
    Game.where(_id: params[:_id]).update(currentScore: params["game"]["currentScore"])
    redirect_to game_path
  end
end