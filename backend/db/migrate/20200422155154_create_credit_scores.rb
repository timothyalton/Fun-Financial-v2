class CreateCreditScores < ActiveRecord::Migration[6.0]
  def change
    create_table :credit_scores do |t|
      t.integer :score

      t.timestamps
    end
  end
end
