class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
    	t.text :note
    	t.string :phase_column
    	t.belongs_to :user
    	t.belongs_to :jobthing
    	t.timestamps
    end
  end
end
