FactoryGirl.define do

  factory :user do
    first_name {Faker::Name.first_name}
    last_name {Faker::Name.last_name}
    email {Faker::Internet.email}
    username {Faker::Internet.user_name}
    password {"Dis Is A Password"}
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
  factory :interview do 
    interview_with {Faker::Name.name}
    interview_date {DateTime.now}
    interview_time {DateTime.now}
  end
end