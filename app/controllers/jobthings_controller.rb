class JobthingsController < ApplicationController

  def index
    load_user
    @jobthings = Jobthing.where(user_id: @user.id)
  end

  def new
    @jobthing = Jobthing.new
  end

  def create
    load_user
    @jobthing = Jobthing.create(job_link: params[:job_link], company: params[:company], position: params[:position])
    @user.jobthings << @jobthing
  end

  private

  def load_user
    # substitute params[:user_id] with session[:user_id] once session model is ready
    @user = User.find(params[:user_id])
  end

end
