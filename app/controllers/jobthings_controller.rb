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
    @jobthing = Jobthing.create(jobthing_params)
    @user.jobthings << @jobthing
    if @user.save
      redirect_to user_path(@user)
    else
      redirect_to root_path
    end
  end

  def show
  end

  def update
    @jobthing.update_attributes(jobthing_params)
  end

  def destroy
    @jobthing.destroy
    redirect_to user_path(@user)
  end

  private

  def load_jobthing
    @jobthing = Jobthing.find(params[:id])
  end

  def load_user
    # substitute params[:user_id] with session[:user_id] once session model is ready
    @user = User.find(params[:user_id])
  end

  def jobthing_params
    params.require(:jobthing).permit(:job_link, :company, :position)
  end

end
