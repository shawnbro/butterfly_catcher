class ButterfliesController < ApplicationController
  def index
    @butterflies = Butterfly.all
    render json: @butterflies
  end

  def create
    @butterfly = Butterfly.create(game_id: params[:game_id], name: params[:name], description: params[:description], pointValue: params[:pointValue], caught: false)
    render json: @butterfly
  end

  def show
    binding.pry
  end

  def update
    Butterfly.where(_id: params["butterfly"][:_id]["$oid"]).update(caught: params["caught"])
     @butterfly = Butterfly.all.sample
     update_session(Butterfly.find_by(_id: params["butterfly"][:_id]["$oid"]).pointValue)
     render json: Butterfly.where(caught: false).sample || Butterfly.create(name: @butterfly.name, description: @butterfly.description, pointValue: @butterfly.pointValue, caught: false)
  end

  def new
    @butterfly = Butterfly.all.sample
    @butterfly.caught = false;
    render json: @butterfly
  end

  private

  def update_session(pointValue)
    session[:game].currentScore += pointValue
    if session[:game].highScore < session[:game].currentScore
      session[:game].highScore = session[:game].currentScore
    end
    session[:game].save
  end
  
end