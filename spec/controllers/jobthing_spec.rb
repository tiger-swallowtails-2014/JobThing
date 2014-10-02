require 'rails_helper'

describe JobthingsController do
  let!(:user){create :user}
  let!(:jobthing){create :jobthing}

  describe "#new" do
    it "should render a form partial for a new jobthing" do
      user.jobthings << jobthing
      get :new, user_id: user.id, jobthing_id: jobthing.id
      response.should render_template(partial: 'jobthings/_form')
    end
  end

  describe "#create" do
    it "should create a new jobthing and save it to the database" do
      jobthing = create(:jobthing)
      expect {
        post :create, jobthing: attributes_for(:jobthing), user_id: user.id, jobthing_id: jobthing.id
      }.to change{Jobthing.count}.by(1)
    end
  end

  describe "destroy" do
    it "should delete the undesired jobthing" do
      expect {
        delete :destroy, user_id: user.id, id: jobthing.id
      }.to change{Jobthing.count}.by(-1)
    end
  end

end