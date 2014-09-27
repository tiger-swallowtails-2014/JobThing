class InterviewsController < ApplicationController

  def index
    @interviews = @jobthing.interviews
  end

















  private

  def load_jobthing 
    @jobthing = Jobthing.find(params[:jobthing_id])
  end

  def load_user 
    @user = User.find(params[:user_id])
  end


  def intervie_params
    params.require(:contact).permit(:interview_with, :interview_date, :interview_time)
  end

end
