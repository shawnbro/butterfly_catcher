class GamesController < ApplicationController

  def create
    @butterfly = Butterfly.all.sample
    if session[:game].nil?
      @game = Game.create!
      session[:game] = @game
    else
      session[:game].currentScore = 0;
      @game = session[:game]      
    end
  end

  def show
    render json: Game.find_by(_id: params[:_id])
  end

  def update
    Game.where(_id: params[:_id]).update(currentScore: params["game"]["currentScore"])
    redirect_to game_path
  end

  # def get_connection
  #   return @db_connection if @db_connection
  #   db = URI.parse(ENV['MONGOHQ_URL'])
  #   db_name = db.path.gsub(/^\//, '')
  #   @db_connection = Mongo::Connection.new(db.host, db.port).db(db_name)
  #   @db_connection.authenticate(db.user, db.password) unless (db.user.nil? || db.user.nil?)
  #   @db_connection
  # end
 
  # db = get_connection
end