class UsersController < ApplicationController

  def index
    # @
    # @jobs = Jobs.all
  end

  def create
    @user = User.create(params[:user])
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_path
    else
      redirect_to root
  end

end