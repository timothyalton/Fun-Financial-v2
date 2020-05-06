class AddFamilyIdToRewards < ActiveRecord::Migration[6.0]
  def change
    add_column :rewards, :family_id, :integer
  end
end
