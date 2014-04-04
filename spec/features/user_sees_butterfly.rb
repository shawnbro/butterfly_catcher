require_relative '../spec_helper.rb'
describe 'user sees butterfly' do 
  it 'has a hidden list of all butterfly ids and randomly selects one and shows it on the page', :js => true do 
    visit '/'
    save_and_open_page
    within '#butterflyIds' do 
      expect(page).to have_content '#monarch'
    end
    within('#currentButterfly') do 
      expect(page).to have_content '#monarch'
    end
  end
end