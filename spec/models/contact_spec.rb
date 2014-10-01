require 'rails_helper'
describe Contact do
  context "validations" do
    it { should validate_presence_of :first_name }
    it { should validate_presence_of :last_name }
    it "Should not save a contact with an invalid phone number" do
      contact = build(:contact, phone_number: "NaN")
      expect(contact).to_not be_valid
    end
    it "Should save a contact with valid attributes" do
      contact = build(:contact)
      expect(contact).to be_valid
    end
  end

  context "associations" do
    it "should belong to its respective jobthing" do
      job = build(:jobthing)
      contact = build(:contact)
      job.contacts << contact
      expect(contact.jobthing).to be job
    end
  end
end
