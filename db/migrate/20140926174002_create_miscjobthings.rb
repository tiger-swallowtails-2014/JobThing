class CreateMiscjobthings < ActiveRecord::Migration
  def change
    create_table :miscjobthings do |t|
    	t.string :type
    	t.belongs_to :jobthing
    	t.timestamps
    end
  end
end
