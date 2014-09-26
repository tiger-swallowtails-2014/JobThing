class CreateInterviews < ActiveRecord::Migration
  def change
    create_table :interviews do |t|
    	t.string :interviewed_with
    	t.datetime :interview_date
    	t.datetime :interview_time
    	t.belongs_to :jobthing
    	t.timestamps
    end
  end
end
