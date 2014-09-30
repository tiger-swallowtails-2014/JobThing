require 'rails_helper'
describe Contact do
  context "validations" do
    it { should validate_presence_of :first_name }
    it { should validate_presence_of :last_name }

    it "Should not save a contact with an invalid phone number" do 
      # Here would be a good place to use FactoryGirl.  This long ass hash
      # thing distracts from what's important.  It is much easier to tell
      # what's going on with
      #
      # contact = create(:user, first_name: "AlisaMonkey")
      #
      # Than trying to look at this long hash string
      contact = Contact.new(first_name: "Alisa", last_name: "Tatarinova", phone_number: "NaN")
      # Or...simpler....contact = FactoryGirl.create(phone_number: "NaN")
      expect(contact).to_not be_valid
    end
    it "Should save a contact with valid attributes" do 
      contact = FactoryGirl.build(:contact)
      expect(contact).to be_valid
    end
  end

  context "associations" do
    it "should belong to its respective jobthing" do 
      job = FactoryGirl.build(:jobthing)
      contact = FactoryGirl.build(:contact)
      job.contacts << contact
      expect(contact.jobthing).to be job
    end 
  end
end
