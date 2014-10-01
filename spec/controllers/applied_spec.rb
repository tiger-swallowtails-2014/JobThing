require 'rails_helper'

describe AppliedsController, type: :controller do
  let!(:user){create(:user)}
  let!(:job){create(:jobthing)}

  describe "POST create" do
    it "should respond successfully " do
      expect {
        post :create
        response.should have_http_status(302)
      }
    end
    it "should create an applied element for the job thing" do
      post :create, user_id: user.id, jobthing_id: job.id
      expect(job.applied).to_not be nil
    end
    it "should redirect to the the specific user's home page" do
      user.jobthings << job
      post :create, user_id: user.id, jobthing_id: job.id
      expect(response).to redirect_to("/users/#{user.id}")
    end
  end
  describe "POST destroy" do
    it "should destroy the 'applied' property of the job thing" do
      user.jobthings << job
      job.applied = Applied.create()
      delete :destroy, id: job.applied.id, user_id: user.id, jobthing_id: job.id
      job.reload
      expect(job.applied).to be nil
    end
  end


end
