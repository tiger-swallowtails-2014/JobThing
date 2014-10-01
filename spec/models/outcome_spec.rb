require 'rails_helper'
describe Outcome do
  job = FactoryGirl.build(:jobthing)
  outcome = Outcome.create()
  job.outcome = outcome
  context "associations" do
    it "should belong to its respective jobthing" do
      expect(outcome.jobthing).to be job
    end
  end
  context "default value" do
    it "should have a default success value of false" do
      expect(job.outcome.success).to be false
    end
  end
end
