require 'rails_helper'

describe InterviewsController do
  let!(:user){ create(:user) }
  let! (:jobthing){ create(:jobthing) }
  let! (:interview){ create(:interview) }
  describe "#new" do 
    it "should render the new interview form" do 
    get :new, user_id: user.id, jobthing_id: jobthing.id 
    response.should render_template("interviews/_form")
    end
  end
  describe "#create" do 
    context "with valid attributes" do 
      it "creates a new interview" do 
        expect {
          post :create, interview: attributes_for(:interview), user_id: user.id, jobthing_id: jobthing.id
        }.to change{Interview.count}.by(1)
      end
    end
    context "with invalid attributes" do 
      it "does not save the interview" do
        expect {
          post :create, interview: attributes_for(:interview, interview_date: "xyz" ), user_id: user.id, jobthing_id: jobthing.id
        }.to_not change{Interview.count}
      end
    end
  end
  describe "#edit" do 
    it "should render the form partial to edit the interview" do 
      get :edit, user_id: user.id, jobthing_id: jobthing.id, id: interview.id
      response.should render_template("interviews/_form") 
    end
  end
  describe "#update" do 
    it "should save the updated information for the existing interview" do 
      interview = create(:interview)
      p interview
      put :update, id: interview.id, interview: attributes_for(:interview, interview_with: "Someone", interview_date: "2014-09-31"), user_id: user.id, jobthing_id: jobthing.id
      interview.reload
      interview.interview_with.should eq("Someone")
      interview.interview_date.should eq("2014-09-31")
    end
  end








end