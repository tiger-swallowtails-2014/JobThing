class CreateOutcomes < ActiveRecord::Migration
  def change
    create_table :outcomes do |t|
    	t.belongs_to :jobthing
    	t.boolean :success, default: false  # Jes!  A default value!  It's super effective!
    	t.timestamps
    end
  end
end
