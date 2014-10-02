class AppliedsController < ApplicationController
  before_filter :load_jobthing, :load_user

  def new 
    @applied = Applied.new
    render partial: 'form'
  end

  def create
    if @jobthing.applied
      redirect_to user_path(@user)
    else
      @applied = Applied.create(applied_params)
      @jobthing.applied = @applied
      p @jobthing.applied
      redirect_to user_path(@user)
    end
  end

  def destroy
    Applied.find(params[:id]).destroy
    render nothing: true
  end

  private

  def load_jobthing
    @jobthing = Jobthing.find(params[:jobthing_id])
  end

  def load_user
    @user = User.find(params[:user_id])
  end

  def applied_params
    params.require(:applied).permit(:applied_date)
  end

end
