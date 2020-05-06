class CreateCreditLines < ActiveRecord::Migration[6.0]
  def change
    create_table :credit_lines do |t|
      t.integer :amount

      t.timestamps
    end
  end
end
