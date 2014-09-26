user = User.create(
  first_name: "fname",
  last_name: "lname",
  email: "test@test.com",
  username: "test",
  password_hash: "test"
)

contact = Contact.create(
  first_name: "fname1",
  last_name: "lname1",
  phone_number: "1231231234",
  email: "contact1@contact.com"
)

note = Note.create(
  note: "I messed up",
  phase_column: "interview",
)

jobthing = Jobthing.create(
  job_link: "http://www.google.com",
  company: "Google",
  position: "janitor"
)

user.jobthings << jobthing
user.notes << note

jobthing.applied = Applied.create()
jobthing.interview = Interview.create(interview_with: "interviewer", interview_date: "October 1 2014", interview_time: "12 pm")
jobthing.miscjobthing = Miscjobthing.create(name: "coffee")
jobthing.outcome = Outcome.create()

jobthing.contacts << contact
jobthing.notes << note



