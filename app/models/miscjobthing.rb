class Miscjobthing < ActiveRecord::Base
  validates_presence_of :name
	belongs_to :jobthing
end