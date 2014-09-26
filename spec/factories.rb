FactoryGirl.define do

  factory :user do
    first_name {Faker::Name.first_name}
    last_name {Faker::Name.last_name}
    email {Faker::Internet.email}
    username {Faker::Internet.user_name}
    password_hash {"Some crazy password hash that will be changed later when bcrypt works"}
  end


end