class User < ActiveRecord::Base
	has_many :jobthings
	has_many :notes
	has_many :notes, through: :jobthings
end