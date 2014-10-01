class JobthingsController < ApplicationController
  before_filter :load_jobthing, :except => [:index, :new, :create, :destroy_interviews, :destroy_miscs]
  before_filter :load_user

  def index
    @jobthings = Jobthing.where(user_id: user.id)
  end

  def new
    @jobthing = Jobthing.new
    render partial: 'form'
  end

  def create
    jobthing = Jobthing.create(jobthing_params)
    if jobthing.save
      user.jobthings << jobthing
      redirect_to user_path(user)
    else
      redirect_to root_path
    end
  end

  def show
    render 'show', layout: false
  end

  def edit
    render partial: 'form'
  end

  def update
    jobthing.update_attributes(jobthing_params)
    redirect_to user_path(user)
  end

  def destroy
    jobthing.destroy
    redirect_to user_path(user)
  end

  def destroy_interviews
    jobthing = Jobthing.find(params[:jobthing_id])
    jobthing.interviews.delete_all
    redirect_to user_path(user)
  end

  def destroy_miscs
    jobthing = Jobthing.find(params[:jobthing_id])
    jobthing.miscjobthings.delete_all
    redirect_to user_path(user)
  end

  private

  def load_jobthing
    jobthing = Jobthing.find(params[:id])
  end

  def load_user
    user = User.find(params[:user_id])
  end

  def jobthing_params
    params.require(:jobthing).permit(:job_link, :company, :position)
  end

end
