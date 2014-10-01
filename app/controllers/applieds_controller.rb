class AppliedsController < ApplicationController

  def create
    @user = User.find(params[:user_id])
    @jobthing = Jobthing.find(params[:jobthing_id])
    if @jobthing.applied
      redirect_to user_path(@user)
    else
      @applied = Applied.create()
      @jobthing.applied = @applied
      redirect_to user_path(@user)
    end
  end

  def destroy
    Applied.find(params[:id]).destroy
    render nothing: true
  end

end
