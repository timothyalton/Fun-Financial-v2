class CreateChores < ActiveRecord::Migration[6.0]
  def change
    create_table :chores do |t|
      t.string :name
      t.integer :pay

      t.timestamps
    end
  end
end
