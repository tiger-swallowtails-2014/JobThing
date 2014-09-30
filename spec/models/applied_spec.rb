require 'rails_helper'
describe Applied do
  context "associations" do
    # What?
    it "should belong to its respective jobthing" do 
      job = FactoryGirl.build(:jobthing)
      applied = Applied.create()
      job.applied = applied
      expect(applied.jobthing).to be job
    end
  end
end
