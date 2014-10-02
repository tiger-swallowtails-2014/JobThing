class ChangeDateFormatInInterviewsTable < ActiveRecord::Migration
  def change
    change_column :interviews, :interview_date, :date
  end
end
