require_relative '../spec_helper.rb'
describe 'user sees butterfly' do 
  # these tests fail because all of this has been refactored as JS window variables
  it 'has a hidden list of all butterfly ids and randomly selects one and shows it on the page', :js => true do 
    visit '/'
    within '#butterflyIds' do 
      expect(page).to have_content 'Butterflies: monarch'
    end
    within('#currentButterfly') do 
      expect(page).to have_content 'Butterfly: monarch'
    end
  end
end