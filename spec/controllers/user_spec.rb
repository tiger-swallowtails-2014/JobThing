require 'rails_helper'

describe UsersController do
  let!(:user) {create :user}

  describe "#create" do
    it "should create a new user with successfull response" do
      post :create, :user => attributes_for(:user)
      expect(response).to have_http_status(302)
    end
    it "should redirect to the user's home page" do
      expect {
        post :create, :user => attributes_for(:user)
        should redirect_to controller: users, action: :show
      }
    end

    it "should create a new user with valid params" do
      expect {
        post :create, :user => attributes_for(:user)
      }.to change{User.count}.by(1)
    end

    it "should not create a new user with invalid params" do
      expect {
        post :create, user: {username: nil, password: nil}
      }.to_not change{User.count}
    end

    it "should set a session for the user" do
      expect {
        post :create, :user => attributes_for(:user)
        session[:user_id].to eq(user.id)
      }
    end

  end

  describe "#show" do
    it "should find the correct users with successfull response" do
      get :show, id: user.id
      expect(response).to have_http_status(302)
    end
  end

end
