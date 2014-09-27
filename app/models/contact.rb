class Contact < ActiveRecord::Base
  validates_presence_of :first_name, :last_name
  validates_format_of  :phone_number, with: /\A(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}\z/
	belongs_to :jobthing
end
