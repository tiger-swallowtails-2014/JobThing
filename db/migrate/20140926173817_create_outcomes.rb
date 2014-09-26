class CreateOutcomes < ActiveRecord::Migration
  def change
    create_table :outcomes do |t|
    	t.belongs_to :jobthing
    	t.boolean :success, default: false 
    	t.timestamps
    end
  end
end
