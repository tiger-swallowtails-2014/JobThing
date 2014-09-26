class Jobthing < ActiveRecord::Base
  validates_presence_of :job_link, :company, :position

	belongs_to :user
	has_one :interview
	has_one :applied
	has_one :outcome
	has_one :miscjobthing
	has_many :contacts
	has_many :notes
end
