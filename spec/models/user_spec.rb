require 'rails_helper'
describe User do
  context "validations" do
    it { should validate_presence_of :username }
    it { should validate_presence_of :email }
    it { should validate_presence_of :password }
    it { should_not allow_value("This is not an email").for(:email)}
    it { should allow_value("alisatatarinova@gmail.com").for(:email)}
    it "should validate the uniqueness of a username" do
       create(:user)
       should validate_uniqueness_of(:username)
    end
    it "should validate the uniqueness of an email" do
       create(:user)
       should validate_uniqueness_of(:email)
    end
    it "should create a valid user when all fields are valid" do
      user = build(:user)
      expect(user).to be_valid
    end
  end

  context "associations" do
    it { should have_many :jobthings }
    it { should have_many :notes }
  end
end
