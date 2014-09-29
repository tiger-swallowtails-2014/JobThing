class CreateInterviews < ActiveRecord::Migration
  def change
    create_table :interviews do |t|
    	t.string :interview_with
    	t.datetime :interview_date
    	t.string :interview_time
    	t.belongs_to :jobthing
    	t.timestamps
    end
  end
end
