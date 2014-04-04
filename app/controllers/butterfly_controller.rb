class ButterflyController < ApplicationController

  def new
    @butterfly = Butterfly.new
  end

end