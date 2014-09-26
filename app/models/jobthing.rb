class Jobthing < ActiveRecord::Base
	belongs_to :user
	has_one :interview
	has_one :applied
	has_one :outcome
	has_one :miscjobthing
	has_many :contacts
	has_many :notes
end
