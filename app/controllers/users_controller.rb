class UsersController < ApplicationController
  protect_from_forgery

  def index
    @user = User.new
  end

  def create
    @user = User.create(person_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      flash.now[:error] = "Try Again."
      redirect_to root_path
    end
  end

  def show
    if current_user && page_owner?
        @user = current_user
        @jobthings = Jobthing.where(user_id: @user.id)
    else
      redirect_to root_path
    end
  end

  def get_jobthings
    user = User.find(params[:user_id])
    @jobthing = user.jobthings
    @jobs = []
    @jobthing.each  do |job|
      @job = job
      @applied = [job.applied] || []
      @interview = job.interviews || []
      @miscjobthing = job.miscjobthings || []
      @outcome = job.outcome || []

      temp = {jobthing: @job , applied: @applied, interview: @interview, misc: @miscjobthing, outcome: @outcome}
      @jobs << temp
    end

    render json: @jobs
  end

  private
  def person_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password)
  end
end
