require_relative '../spec_helper.rb'
describe 'user sees jar of all caught butterflies' do 

  it 'shows a jar on the page', :js => true do 
    visit '/'
    page.should have_css('#jar');
  end
end