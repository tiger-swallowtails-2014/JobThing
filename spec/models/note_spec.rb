require 'rails_helper'
describe Note do
  context "validations" do
    it { should validate_presence_of :note }
  end

  context "associations" do
    job = FactoryGirl.build(:jobthing)
    note = FactoryGirl.build(:note)
    user = FactoryGirl.build(:user)
    it "should belong to its respective jobthing" do 
      job.notes << note
      expect(note.jobthing).to be job
    end 
    it "should belong it its respective user" do 
      user.notes << note
      expect(note.user).to be user 
    end
  end
end