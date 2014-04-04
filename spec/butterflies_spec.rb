require 'spec_helper'

describe "Butterfly" do 
  let(:butterfly) { Butterfly.new( { name: "monarch", description: "large migratory American butterfly having deep orange wings with black and white markings; the larvae feed on milkweed", pointValue: 25 } ) }
  
  it "has a name" do 
    expect(butterfly.name).to eq("monarch")
  end

  it "has a description" do 
    expect(butterfly.description).to eq("large migratory American butterfly having deep orange wings with black and white markings; the larvae feed on milkweed")
  end

  it "has a point value" do 
    expect(butterfly.pointValue).to eq(25)
  end
end