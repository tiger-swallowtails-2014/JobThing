class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name  # NULL is my firstname
      t.string :last_name # NULL is my last name
      t.string :email # NULL is my email
      t.string :username # NULL is my username
      t.string :password_digest # NULL is my password.  I can't wait to blow up your app.  I am evil.
      # Write some migrations to fix these.
      t.timestamps
    end
  end
end
