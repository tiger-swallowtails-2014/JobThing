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
  end

  private

  def person_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password)
  end
end