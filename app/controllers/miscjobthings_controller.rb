class MiscjobthingsController < ApplicationController
  before_filter :load_miscjobthings, :except => [:index, :new, :create]
  before_filter :load_jobthing, :load_user
  before_filter :permissions

  def index
    @miscjobthing = Miscjobthing.find_by_jobthing_id(@jobthing.id)
  end

  def new
    @miscjobthing = Miscjobthing.new
    render partial: 'form'
  end

  def create
    @miscjobthing = Miscjobthing.create(miscjobthing_params)
    if @miscjobthing.save
      @jobthing.miscjobthings << @miscjobthing
      redirect_to user_path(@user)
    else
      redirect_to user_path(@user)
    end
  end

  def show
  end

  def edit
    render partial: 'form'
  end

  def update
    @miscjobthing.update_attributes(miscjobthing_params)
    redirect_to user_path(@user)
  end

  def destroy
    @miscjobthing.destroy
    redirect_to user_path(@user)
  end

  private

  def load_miscjobthings
    @miscjobthing = Miscjobthing.find(params[:id])
  end

  def load_jobthing
    @jobthing = Jobthing.find(params[:jobthing_id])
  end

  def load_user
    @user = User.find(params[:user_id])
  end

  def miscjobthing_params
    params.require(:miscjobthing).permit(:name, :misc_date)
  end


end

