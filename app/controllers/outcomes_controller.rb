class OutcomesController < ApplicationController
  before_filter :load_outcome, :except => [:index, :new, :create]
  before_filter :load_jobthing, :load_user
  before_filter :permissions

  def index
    @outcome = Outcome.find_by_jobthing_id(@jobthing.id)
  end

  def new
    @outcome = Outcome.new
    render partial: 'radio_button'
  end

  def create
    @outcome = Outcome.create(outcome_params)
    if @outcome.save
      @jobthing.outcome = @outcome
      redirect_to user_path(@user)
    else
      redirect_to user_path(@user)
    end
  end

  def show
  end

  def edit
    render partial: 'radio_button'
  end

  def update
    @outcome.update_attributes(outcome_params)
    redirect_to user_path(@user)
  end

  def destroy
    @outcome.destroy
    redirect_to user_path(@user)
  end

  private

  def load_outcome
    @outcome = Outcome.find(params[:id])
  end

  def load_jobthing
    @jobthing = Jobthing.find(params[:jobthing_id])
  end

  def load_user
    @user = User.find(params[:user_id])
  end

  def outcome_params
    params.require(:outcome).permit(:success)
  end


end


