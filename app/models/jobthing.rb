class Jobthing < ActiveRecord::Base
  validates_presence_of :job_link, :company, :position

	belongs_to :user
	has_many :interviews
	has_one :applied
	has_one :outcome
	has_one :miscjobthing
	has_many :contacts
	has_many :notes

  def has_applied
    Applied.where(jobthing_id: self.id).count != 0
  end

  def has_interview
    Interview.where(jobthing_id: self.id).count != 0
  end

  def has_misc
    Miscjobthing.where(jobthing_id: self.id).count != 0
  end

  # check this first
  def has_outcome
    Outcome.where(jobthing_id: self.id).count != 0
  end

end
