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
     # @butterfly = Butterfly.find(params[:_id][:$oid])
     @butterfly = Butterfly.all.sample
     render json: Butterfly.where(caught: false).sample || Butterfly.create(name: @butterfly.name, description: @butterfly.description, pointValue: @butterfly.pointValue, caught: false)
    #  if @butterfly.save
    #   render json: @butterfly
    #  else
    #    render status: 400, nothing: true
    # end

  end

  def new
    @butterfly = Butterfly.all.sample
    @butterfly.caught = false;
    render json: @butterfly
  end
  
end