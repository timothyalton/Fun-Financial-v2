class AddUserIdToCreditScore < ActiveRecord::Migration[6.0]
  def change
    add_column :credit_scores, :user_id, :integer
  end
end
