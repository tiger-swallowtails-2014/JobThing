require 'rails_helper'
describe Interview do
  context "validations" do
    it { should validate_presence_of :interview_with }
    it { should validate_presence_of :interview_date }
    it { should validate_presence_of :interview_time }
  end

  context "associations" do
    it "should belong to its respective job thing" do
    job = build(:jobthing)
    interview = build(:interview)
    job.interviews << interview
    expect(interview.jobthing).to be job
    end
  end


end
