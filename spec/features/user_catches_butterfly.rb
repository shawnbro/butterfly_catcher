require_relative '../spec_helper.rb'
describe 'user catches butterfly' do 

  it 'catches a butterfly and points get added to the high score', :js => true do 
    visit '/'
    within('#currentScore') do 
      expect(page).to have_content('Current Score: 0')
    end
    
    within('#currentScore') do 
      expect(page).to have_content('Current Score: 25')
    end
  end
end