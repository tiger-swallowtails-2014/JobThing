class JobthingsController < ApplicationController
  before_filter :load_jobthing, :except => [:index, :new, :create, :destroy_interviews, :destroy_miscs, :destroy_applied, :destroy_outcome]
  before_filter :load_user
  before_filter :permissions

  def index
    @jobthings = Jobthing.where(user_id: @user.id)
  end

  def new
    @jobthing = Jobthing.new
    render partial: 'form'
  end

  def create
    @jobthing = Jobthing.create(jobthing_params)
    if @jobthing.save
      @user.jobthings << @jobthing
      redirect_to user_path(@user)
    else
      redirect_to root_path
    end
  end

  def show
    render 'show', layout: false
  end

  def destroy
    @jobthing.destroy
    redirect_to user_path(@user)
  end

  def destroy_applied
    @jobthing = Jobthing.find(params[:jobthing_id])
    @jobthing.applied.delete
    render nothing: true
  end

  def destroy_interviews
    @jobthing = Jobthing.find(params[:jobthing_id])
    @jobthing.interviews.delete_all
    render nothing: true
  end

  def destroy_miscs
    @jobthing = Jobthing.find(params[:jobthing_id])
    @jobthing.miscjobthings.delete_all
    render nothing: true
  end

  def destroy_outcome
    @jobthing = Jobthing.find(params[:jobthing_id])
    @jobthing.outcome.delete
    render nothing: true
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
