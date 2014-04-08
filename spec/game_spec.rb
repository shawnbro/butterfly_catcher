require 'spec_helper'
describe 'a new game' do 
  let!(:game) { Game.create }
  let!(:butterfly) { Butterfly.create }
  
  it 'has a default high score of 0' do 
    expect(game.highScore).to eq(0);
  end

  it 'has a default current score of 0' do 
    expect(game.currentScore).to eq(0);
  end

end