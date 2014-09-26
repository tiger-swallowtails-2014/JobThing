class Note < ActiveRecord::Base
	belongs_to :jobthing
	belongs_to :user
end