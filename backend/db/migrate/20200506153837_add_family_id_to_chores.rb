class AddFamilyIdToChores < ActiveRecord::Migration[6.0]
  def change
    add_column :chores, :family_id, :integer
  end
end
