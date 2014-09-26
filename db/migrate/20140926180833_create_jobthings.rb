class CreateJobthings < ActiveRecord::Migration
  def change
    create_table :jobthings do |t|
	  	t.string :job_link
		t.string :company
		t.string :position 
		t.belongs_to :user
		t.timestamps
    end
  end
end
