class User < ActiveRecord::Base
  validates_uniqueness_of :username, :email
  validates_presence_of :username, :email, :password
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i
	has_many :jobthings
	has_many :notes
  has_secure_password
end
