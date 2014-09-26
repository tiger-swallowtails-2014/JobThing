class JobthingsController < ApplicationController

  def index
    # substitute params[:user_id] with session[:user_id] once session model is ready
    @jobthings = Jobthing.where(user_id: params[:user_id])
  end

  private


end
