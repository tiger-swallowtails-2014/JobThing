class AppliedsController < ApplicationController

  def create
    # Why are these @ variables?  You never render a view in this method.
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
    # Aim for tersness.
    Applied.find(params[:id]).destroy
    redirect_to user_path(@user)
  end

end
