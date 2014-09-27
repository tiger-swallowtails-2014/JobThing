class Contact < ActiveRecord::Base
  validates_presence_of :first_name, :last_name
  validates_format_of  :phone_number, with: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
	belongs_to :jobthing
end
