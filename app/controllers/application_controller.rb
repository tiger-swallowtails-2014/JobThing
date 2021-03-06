class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def page_owner?
    @current_user.id == params[:id].to_i
  end

  def permissions 
    if !(current_user && (@current_user.id == params[:user_id].to_i))
      redirect_to root_path
    end
  end

  helper_method :current_user
end
