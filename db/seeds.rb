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
    job_link: Faker::Internet.url,
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

Jobthing.first.outcome = Outcome.create()

Jobthing.find(1).miscjobthing = Miscjobthing.create(name: ["coffee", "follow up"].sample)
Jobthing.find(2).miscjobthing = Miscjobthing.create(name: ["coffee", "follow up"].sample)
Jobthing.find(3).miscjobthing = Miscjobthing.create(name: ["coffee", "follow up"].sample)

Jobthing.find(1).interview = Interview.create(interview_with: Faker::Name.name, interview_date: "October 1 2014", interview_time: "12 pm")
Jobthing.find(2).interview = Interview.create(interview_with: Faker::Name.name, interview_date: "October 1 2014", interview_time: "12 pm")
Jobthing.find(3).interview = Interview.create(interview_with: Faker::Name.name, interview_date: "October 1 2014", interview_time: "12 pm")
Jobthing.find(4).interview = Interview.create(interview_with: Faker::Name.name, interview_date: "October 1 2014", interview_time: "12 pm")
Jobthing.find(5).interview = Interview.create(interview_with: Faker::Name.name, interview_date: "October 1 2014", interview_time: "12 pm")

Jobthing.find(1).applied = Applied.create()
Jobthing.find(2).applied = Applied.create()
Jobthing.find(3).applied = Applied.create()
Jobthing.find(4).applied = Applied.create()
Jobthing.find(5).applied = Applied.create()
Jobthing.find(6).applied = Applied.create()
Jobthing.find(7).applied = Applied.create()










