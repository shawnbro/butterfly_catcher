require 'spec_helper'

describe "Butterfly" do 
  let(:butterfly) { Butterfly.create( { name: "monarch", description: "large migratory American butterfly having deep orange wings with black and white markings; the larvae feed on milkweed", point_value: 25 } ) }
  
  it "has a name" do 
    expect(butterfly.name).to eq("monarch")
  end

  it "has a description" do 
    expect(butterfly.description).to eq("large migratory American butterfly having deep orange wings with black and white markings; the larvae feed on milkweed")
  end

  it "has a point value" do 
    expect(butterfly.point_value). to eq(25)
  end
end