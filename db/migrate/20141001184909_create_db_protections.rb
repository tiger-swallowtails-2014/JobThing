class CreateDbProtections < ActiveRecord::Migration
  def change
    change_column_null :users, :first_name, false
    change_column_null :users, :last_name, false
    change_column_null :users, :email, false
    change_column_null :users, :username, false
    change_column_null :users, :password_digest, false

    change_column_null :interviews, :interview_with, false
    change_column_null :interviews, :interview_date, false
    change_column_null :interviews, :interview_time, false

    change_column_null :contacts, :first_name, false
    change_column_null :contacts, :last_name, false

    change_column_null :miscjobthings, :name, false
    change_column_null :miscjobthings, :misc_date, false

    change_column_null :notes, :content, false

    change_column_null :jobthings, :job_link, false
    change_column_null :jobthings, :company, false
    change_column_null :jobthings, :position, false
  end
end