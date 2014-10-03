class InterviewsController < ApplicationController
  before_filter :load_jobthing, :load_user
  before_filter :load_interview, except: [:index, :new, :create]
  before_filter :permissions

  def new
    @interview = Interview.new
    render partial: 'form'
  end

  def create
    @interview = Interview.create(interview_params)
    if @interview.save
      @jobthing.interviews << @interview
      redirect_to user_path(@user)
    else
      redirect_to user_path(@user)
    end
  end

  def edit
    render partial: 'form'
  end

  def update
    @interview.update_attributes(interview_params)
    redirect_to user_jobthing_interviews_path
  end

  def destroy
    @interview.destroy
  end

  private

  def load_jobthing
    @jobthing = Jobthing.find(params[:jobthing_id])
  end

  def load_user
    @user = User.find(params[:user_id])
  end

  def load_interview
    @interview = Interview.find(params[:id])
  end



  def interview_params
    params.require(:interview).permit(:interview_with, :interview_date, :interview_time)
  end

end
