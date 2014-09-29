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
      redirect_to root_path
    end
  end

  def show
      @user = User.find(params[:id])
      @jobthings = Jobthing.where(user_id: @user.id)
      @jobs_w_interest = []; @jobs_w_applied = []; @jobs_w_interview = []; @jobs_w_misc = []; @jobs_w_outcome = [];
      @jobthings.each do |jobthing|
        if jobthing.has_outcome
          @jobs_w_outcome << jobthing
        elsif jobthing.has_misc
          @jobs_w_misc << jobthing
        elsif jobthing.has_interview
          @jobs_w_interview << jobthing
        elsif jobthing.has_applied
          @jobs_w_applied << jobthing
        else
          @jobs_w_interest << jobthing
        end
      end
  end

  private

  def person_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password)
  end
end
