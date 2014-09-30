class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
    	t.string :first_name
    	t.string :last_name
    	t.string :phone_number # constrain, OK
    	t.string :email
    	t.belongs_to :jobthing
    	t.timestamps
    end
  end
end
