FactoryGirl.define do

  factory :user do
    first_name {Faker::Name.first_name}
    last_name {Faker::Name.last_name}
    email {Faker::Internet.email}
    username {Faker::Internet.user_name}
    password_hash {"Some crazy password hash that will be changed later when bcrypt works"}
  end
  factory :jobthing do 
    job_link {Faker::Internet.url}
    company {Faker::Company.name}
    position {Faker::Lorem.word}
  end
  factory :contact do 
    first_name {Faker::Name.first_name}
    last_name {Faker::Name.last_name}
    phone_number {"123 456 2342"}
  end

end