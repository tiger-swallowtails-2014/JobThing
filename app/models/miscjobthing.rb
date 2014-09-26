class Miscjobthing < ActiveRecord::Base
  validates_presence_of :type
	belongs_to :jobthing
end