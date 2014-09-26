require 'rails_helper'
describe User do
  context "validations" do
    it { should validate_presence_of :username }
    it { should validate_presence_of :email }
    it { should validate_presence_of :password_hash }
    it { should validate_uniqueness_of :username }
    it { should validate_uniqueness_of :email }
    it { should_not allow_value("This is not an email").for(:email)}
    it { should allow_value("alisatatarinova@gmail.com").for(:email)}
    it "should create a valid user when all fields are valid" do 
      user = FactoryGirl.build(:user)
      expect(user).to be_valid
    end
  end

  context "associations" do
    it { should have_many :jobthings }
    it { should have_many :notes }
    it { should have_many(:notes).through(:jobthings)}
  end
end