require 'rails_helper'
describe Miscjobthing do
  context "validations" do
    it { should validate_presence_of :name }
  end
  context "associations" do
    it "should belong to its respective jobthing" do
      job = FactoryGirl.build(:jobthing)
      misc = Miscjobthing.create(name: "Miscellaneous job category, for all the things!")
      job.miscjobthings << misc
      expect(misc.jobthing).to be job
    end
  end
end
