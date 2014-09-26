class JobthingsController < ApplicationController
  before_filter :load_jobthing, :except => [:index, :new, :create]
  before_filter :load_user

  def index
    @jobthings = Jobthing.where(user_id: @user.id)
  end

  def new
    @jobthing = Jobthing.new
  end

  def create
    @jobthing = Jobthing.create(job_link: params[:job_link], company: params[:company], position: params[:position])
    @user.jobthings << @jobthing
  end

  def update
    @jobthing.update_attributes(job_link: params[:job_link], company: params[:company], position: params[:position])
  end

  def destroy
    @jobthing.destroy
  end

  private

  def load_jobthing
    @jobthing = Jobthing.find(params[:id])
  end

  def load_user
    # substitute params[:user_id] with session[:user_id] once session model is ready
    @user = User.find(params[:user_id])
  end

end
