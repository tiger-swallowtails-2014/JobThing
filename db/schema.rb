# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141002000053) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "applieds", force: true do |t|
    t.integer  "jobthing_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "contacts", force: true do |t|
    t.string   "first_name",   null: false
    t.string   "last_name",    null: false
    t.string   "phone_number"
    t.string   "email"
    t.integer  "jobthing_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "interviews", force: true do |t|
    t.string   "interview_with", null: false
    t.date     "interview_date", null: false
    t.string   "interview_time", null: false
    t.integer  "jobthing_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "jobthings", force: true do |t|
    t.string   "job_link",   null: false
    t.string   "company",    null: false
    t.string   "position",   null: false
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "miscjobthings", force: true do |t|
    t.string   "name",        null: false
    t.datetime "misc_date",   null: false
    t.integer  "jobthing_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "notes", force: true do |t|
    t.text     "content",     null: false
    t.string   "title"
    t.integer  "user_id"
    t.integer  "jobthing_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "outcomes", force: true do |t|
    t.integer  "jobthing_id"
    t.boolean  "success",     default: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "email",           null: false
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
