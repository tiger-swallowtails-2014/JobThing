class NotesController < ApplicationController
  before_filter :load_note, :except => [:index, :new, :create, :destroy]
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
      @user.notes << @note
      @jobthing.notes << @note
      render 'note', layout: false
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
    render 'note', layout: false
  end

  def destroy
    Note.find(params[:id]).destroy
    render nothing: true
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

