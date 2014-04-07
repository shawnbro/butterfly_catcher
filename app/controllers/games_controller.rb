class GamesController < ApplicationController
  
  def index
    @game = Game.last
    render json: @game
  end

  def create
    @game = Game.create!
  end

  def show
    render json: Game.find_by(_id: params[:id])
  end

  def update
    if @game.save
      render json: @game
    else
      render status: 400, nothing: true
    end
  end
end