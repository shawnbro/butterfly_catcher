require_relative '../spec_helper.rb'
describe 'user starts game' do 
  before :each do
    Butterfly.new( { name: "monarch", description: "large migratory American butterfly having deep orange wings with black and white markings; the larvae feed on milkweed" } ) 
  end

  it 'clicks a button to start a game', :js => true do
    id = Game.all.last.id.to_s  
    visit '/'
    expect(page).to have_content 'Butterfly Catcher'
    expect(page).to have_content 'Catch Butterflies!' 
    expect(page).to have_css '#gameBoard'
    expect(page).to have_css '#gameID'
    within('#gameID') do 
      expect(page).to have_content('Game Id: ' + id)
    end
  end
end
