require_relative '../spec_helper.rb'
describe 'user starts game' do 
  before :each do
    Butterfly.new( { name: "monarch", description: "large migratory American butterfly having deep orange wings with black and white markings; the larvae feed on milkweed" } ) 
  end

  it 'has all the necessary data on the page when a user starts a game', :js => true do
    gameID = Game.all.last.id.to_s  
    visit '/'
    expect(page).to have_content 'Butterfly Catcher'
    expect(page).to have_content 'Catch Butterflies!' 
    expect(page).to have_css 'canvas'
    expect(page).to have_css '#jar'
    # expect(page).to have_css '#gameID' now in a JS window variable
    # within('#gameID') do 
    #   expect(page).to have_content('Game Id: ' + gameID)
    # end
    expect(page).to have_css '#highScore'
    within('#highScore') do 
      expect(page).to have_content('High Score: 0');
    end
  end
end
