class NotesController < ApplicationController
  before_filter :load_note, :except => [:index, :new, :create]
  before_filter :load_jobthing, :load_user

  def index
    @notes = Note.where(jobthing_id: @jobthing.id)
  end

  def new
    @note = Note.new
    render partial: 'form'
  end

  def create
    @note = Note.create(note_params)
    if @note.save
      # integrate note phase-column feature
      @user.notes << @note
      @jobthing.notes << @note
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
    @note.update_attributes(note_params)
    redirect_to user_path(@user)
  end

  def destroy
    @note.destroy
    redirect_to user_path(@user)
  end

  private

  def load_note
    @note = Note.find(params[:id])
  end

  def load_jobthing
    @jobthing = Jobthing.find(params[:jobthing_id])
  end

  def load_user
    # substitute params[:user_id] with session[:user_id] once session model is ready
    @user = User.find(params[:user_id])
  end

  def note_params
    params.require(:note).permit(:content, :title)
  end
end

