require 'spec_helper'
describe 'a new game' do 
  let(:game) { Game.new }
  
  it 'has a default high score of 0' do 
    expect(game.highScore).to eq(0);
  end
  
end