require_relative '../spec_helper.rb'
describe 'user starts game' do 
  before :each do 
    Butterfly.create( { name: "monarch", description: "large migratory American butterfly having deep orange wings with black and white markings; the larvae feed on milkweed" } ) 
  end

  it 'clicks a button to start a game' do 
    visit '/'
    expect(page).to have_content 'Butterfly Catcher'
    click_button 'Start Game'
    expect(page).to have_content('Catch Butterflies!')
  end
end
