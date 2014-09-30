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

  private
  def person_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password)
  end
end
