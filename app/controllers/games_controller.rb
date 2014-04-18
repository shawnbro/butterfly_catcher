class GamesController < ApplicationController

  def create
    @butterfly = Butterfly.all.sample
    # if session[:game].nil?
    #   @game = Game.create!
    #   session[:game] = @game
    # else
    #   session[:game].currentScore = 0;
    #   @game = session[:game]      
    # end
  end

  def show
    render json: Game.find_by(_id: params[:_id])
  end

  def update
    Game.where(_id: params[:_id]).update(currentScore: params["game"]["currentScore"])
    redirect_to game_path
  end
end