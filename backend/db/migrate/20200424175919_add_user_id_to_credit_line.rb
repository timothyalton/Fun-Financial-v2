class AddUserIdToCreditLine < ActiveRecord::Migration[6.0]
  def change
    add_column :credit_lines, :user_id, :integer
  end
end
