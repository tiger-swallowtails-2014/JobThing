class User < ActiveRecord::Base
  attr_accesible :email, :password, :password_confirmation
  validates_uniqueness_of :username, :email
  validates_presence_of :username, :email
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i
  validates_presence_of :password, :on => :create

  has_secure_password
	has_many :jobthings
	has_many :notes


end
