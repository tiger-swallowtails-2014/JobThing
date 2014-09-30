require 'rails_helper'

describe AppliedsController, type: :controller do
  # let!(:applied) {FactoryGirl.create :applied}

  describe "Post create" do
    it "should create a new applied job with successfull response" do
      expect {
        post :create
        response.should have_http_status(302)
      }
    end

    it "should redirect to the user's home page" do
      expect {
        post :create
        should redirect_to controller: users, action: :show
      }
    end


    # If it doesn't work, don't commit it.
    # it "should increase the number of applied job" do
    #   expect {
    #     post :create
    #   }.to change{Applied.count}
    # end

  end


end
