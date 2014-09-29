class Miscjobthing < ActiveRecord::Base
  validates_presence_of :name, :misc_date
	belongs_to :jobthing
end
