class ButterfliesController < ApplicationController
  def index
    @butterflies = Butterfly.all
    render json: @butterflies
  end


  def new
    @butterfly = Butterfly.all.sample
    render json: @butterfly
  end
end