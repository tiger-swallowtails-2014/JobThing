class Contact < ActiveRecord::Base
  validates_presence_of :fisrt_name, :last_name
	belongs_to :jobthing
end