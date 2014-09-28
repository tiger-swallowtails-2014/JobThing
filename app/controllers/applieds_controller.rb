class AppliedsController < ApplicationController

  def create
    @user = User.find(params[:user_id])
    @jobthing = Jobthing.find(params[:jobthing_id])
    @applied = Applied.create()
    if @applied.save
      @jobthing.applied = @applied
      redirect_to user_path(@user)
    else
      redirect_to user_path(@user)
    end

  end

  def destroy
    @applied = Applied.find(params[:id])
    @applied.destroy
    redirect_to user_path(@user)
  end

end
