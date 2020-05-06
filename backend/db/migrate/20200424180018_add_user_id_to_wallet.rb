class AddUserIdToWallet < ActiveRecord::Migration[6.0]
  def change
    add_column :wallets, :user_id, :integer
  end
end
