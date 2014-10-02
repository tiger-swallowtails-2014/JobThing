class AddAppliedDateToAppliedTable < ActiveRecord::Migration
  def change
    add_column :applieds, :applied_date, :date
  end
end
