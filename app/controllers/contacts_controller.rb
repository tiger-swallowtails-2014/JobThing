class ContactsController < ApplicationController
  before_filter :load_jobthing, :load_user
  before_filter :load_contact, :except => [:index, :new, :create]
  before_filter :permissions

  def index
    @contacts = @jobthing.contacts
    render nothing: true
  end

  def new
    @contact = Contact.new
     render partial: 'form'
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      @jobthing.contacts << @contact
      render 'contact', layout: false
    else
      render nothing: true
    end
  end

  def edit
    render partial: 'contact'
  end

  def update
    @contact.update_attributes(contact_params)
    render 'contact', layout: false
  end

  def destroy
    @contact.destroy
    render nothing: true
  end

  def edit
    render partial: 'form'
  end

  private

  def load_jobthing
    @jobthing = Jobthing.find(params[:jobthing_id])
  end

  def load_user
    @user = User.find(params[:user_id])
  end

  def load_contact
    @contact = Contact.find(params[:id])
  end

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :phone_number, :email)
  end



end
