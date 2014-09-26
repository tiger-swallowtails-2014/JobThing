class CreateApplieds < ActiveRecord::Migration
  def change
    create_table :applieds do |t|
		  t.belongs_to :jobthing
		  t.timestamps
    end
  end
end
