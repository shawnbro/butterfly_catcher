class ButterfliesController < ApplicationController
  def index
    @butterflies = Butterfly.all
    render json: @butterflies
  end

  def create
    @butterfly = Butterfly.create(game_id: params[:game_id], name: params[:name], description: params[:description], pointValue: params[:pointValue], caught: params[:caught])
    render json: @butterfly
  end

  def show
  end

  def update
    @game = Game.find(params[:game_id])
    @butterfly = Butterfly.find(params[:_id][:$oid])

    if !@butterfly.caught && params[:caught] 
      @butterfly.caught = params[:caught]
      @game.currentScore += @butterfly.pointValue
      @game.save
    end

    if @butterfly.save
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