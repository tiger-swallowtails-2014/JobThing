require 'rails_helper'

describe AppliedsController do

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

  end


end