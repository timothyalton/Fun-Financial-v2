class CreateFamilies < ActiveRecord::Migration[6.0]
  def change
    create_table :families do |t|
      t.string :family_pin

      t.timestamps
    end
  end
end
