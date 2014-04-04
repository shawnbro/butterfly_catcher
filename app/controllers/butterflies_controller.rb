class ButterfliesController < ApplicationController
  def new
    @butterfly = Butterfly.all.sample
    render json: @butterfly
  end
end