require 'spec_helper'
describe 'a new game' do 

  it 'has a default high score of 0' do 
    let(:game) { Game.new }
    expect(game.highScore).to eq(0);
  end
  
end