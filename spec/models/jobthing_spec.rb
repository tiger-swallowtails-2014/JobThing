require 'rails_helper'
describe Jobthing do
  context "validations" do
    it { should validate_presence_of :job_link }
    it { should validate_presence_of :company }
    it { should validate_presence_of :position }
    it "should create a valid job thing when all fields are valid" do
      jobthing = FactoryGirl.build(:jobthing)
      expect(jobthing).to be_valid
    end
    it "should not create a job thing if the job_link field is missing" do 
      jobthing = Jobthing.new(company: "Dev Bootcamp", position: "Boot")
      expect(jobthing).to_not be_valid
    end
    it "should not create a job thing if the company field is missing" do 
      jobthing = Jobthing.new(job_link: "www.devbootcamp.com", position: "Boot")
      expect(jobthing).to_not be_valid
    end
    it "should not create a job thing if the position field is missing" do 
      jobthing = Jobthing.new(job_link: "www.devbootcamp.com", company: "Dev Bootcamp")
      expect(jobthing).to_not be_valid
    end
  end
  context "associations" do
    it { should have_many :interviews }
    it { should have_one :applied }
    it { should have_one :outcome }
    it { should have_one :miscjobthing }
    it { should have_many :contacts }
    it { should have_many :notes }
  end
end