class AddCompletedToChore < ActiveRecord::Migration[6.0]
  def change
    add_column :chores, :completed, :boolean, :default => false
  end
end
