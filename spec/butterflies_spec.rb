require 'spec_helper'

describe "Butterfly" do 
  let(:butterfly) { Butterfly.new( { name: "monarch" } ) }
  
  it "has has a name" do 
    expect(butterfly.name).to eq("monarch")
  end
end