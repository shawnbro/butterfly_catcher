class ButterfliesController < ApplicationController
  def index
    @butterflies = Butterfly.all
    render json: @butterflies
  end

  def update
    @game = Game.last
    @butterfly = Butterfly.find(params[:_id][:$oid])
    @butterfly.game_id = @game._id
    if !@butterfly.caught && params[:caught] 
      @butterfly.caught = params[:caught]
      @game.currentScore += @butterfly.pointValue
    end
    if @butterfly.save && @game.save
      render json: @butterfly
    else
      render status: 400, nothing: true
    end
  end
  def new
    @butterfly = Butterfly.all.sample
    render json: @butterfly
  end
end