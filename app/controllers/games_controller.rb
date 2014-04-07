class GamesController < ApplicationController
  
  def index
    @game = Game.last
    render json: @game
  end

  def create
    @butterfly = Butterfly.all.sample
    @game = Game.create!
  end

  def show
    render json: Game.find_by(_id: params[:id])
  end

  def update
    @game = Game.find_by(id: params[:_id])
    @game.currentScore = params[:currentScore]
    if @game.save
      render json: @game
    else
      render status: 400, nothing: true
    end
  end
end