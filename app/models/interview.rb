class Interview < ActiveRecord::Base
  validates_presence_of :interview_with, :interview_date, :interview_time
	belongs_to :jobthing
end