require 'rails_helper'

describe ContactsController do
    let!(:user){ create :user }
    let!(:jobthing){ create :jobthing }
  describe "#new" do
    it "should render a form partial for a new contact" do
      user.jobthings << jobthing
      get :new, user_id: user.id, jobthing_id: jobthing.id
      response.should render_template(partial: 'contacts/_form')
    end
  describe '#create' do
    it "should create a new contact and save it to the database" do
      contact = create(:contact)
      expect {
      post :create, contact: attributes_for(:contact), user_id: user.id, jobthing_id: jobthing.id
      }.to change{Contact.count}.by(1)
      end
    end
  describe '#edit' do
    it "should render the edit partial" do
      contact = create(:contact)
      get :edit, id: contact.id, user_id: user.id, jobthing_id: jobthing.id
      response.should render_template(partial: 'contacts/_form')
    end
  end
  describe '#update' do
    it "should save the updated information for the existing contact" do
      contact = create(:contact)
      put :update, id: contact.id, contact: attributes_for(:contact, first_name: "FirstName", last_name: "LastName"), user_id: user.id, jobthing_id: jobthing.id
      contact.reload
      contact.first_name.should eq("FirstName")
      contact.last_name.should eq("LastName")
    end
  end
end






















end
