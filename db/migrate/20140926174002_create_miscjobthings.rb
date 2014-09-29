class CreateMiscjobthings < ActiveRecord::Migration
  def change
    create_table :miscjobthings do |t|
    	t.string :name
      t.datetime :misc_date
    	t.belongs_to :jobthing
    	t.timestamps
    end
  end
end
