require 'faker'

10.times do
  user = User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    username: Faker::Internet.user_name,
    password: "test"
  )
end

10.times do
  jobthing = Jobthing.create(
    job_link: "http://www.google.com",
    company: Faker::Company.name,
    position: Faker::Name.title
  )
  User.first.jobthings << jobthing
end

# create contacts for the first jobthing
3.times do
  contact = Contact.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    phone_number: "#{Faker::Number.number(3)}-#{Faker::Number.number(3)}-#{Faker::Number.number(4)}",
    email: Faker::Internet.email
  )
  Jobthing.first.contacts << contact
end

3.times do
  note = Note.create(
    note: Faker::Lorem.sentence,
    phase_column: ["interest", "applied", "interview", "misc", "outcome"].sample
  )
  User.first.notes << note
  Jobthing.first.notes << note
end



# user.jobthings << jobthing
# user.notes << note
# jobthing.contacts << contact
# jobthing.notes << note

Jobthing.first.outcome = Outcome.create()

3.times do
  i = 1
  Jobthing.find(i).miscjobthing = Miscjobthing.create(name: ["coffee", "follow up"].sample)
  i += 1
end

5.times do
  i = 1
  Jobthing.find(i).interview = Interview.create(interview_with: Faker::Name.name, interview_date: "October 1 2014", interview_time: "12 pm")
  i += 1
end

7.times do
  i = 1
  Jobthing.find(i).applied = Applied.create()
  i += 1
end









