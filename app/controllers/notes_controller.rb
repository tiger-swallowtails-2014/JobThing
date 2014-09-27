class NotesController < ApplicationController
  before_filter :load_note, :except => [:index, :new, :create]
  before_filter :load_jobthing, :load_user

  def index
    @notes = Note.where(jobthing_id: @jobthing.id)
  end

  def new
    @note = Note.new
    render partial: 'note'
  end

  def create
    @note = Note.create(note_params)
  end

  def show
  end

  def edit
    render partial: 'note'
  end

  def update
    @note.update_attributes(note_params)
    redirect_to user_jobthing_path(@user, @jobthing)
  end

  def destroy
    @note.destroy
    redirect_to user_jobthing_path(@user, @jobthing)
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
    params.require(:note).permit(:note, :phase_column)
  end
end
