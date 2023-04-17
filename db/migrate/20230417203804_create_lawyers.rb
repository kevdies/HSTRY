class CreateLawyers < ActiveRecord::Migration[6.1]
  def change
    create_table :lawyers do |t|
      t.string :name
      t.string :company
      t.string :address1
      t.string :address2
      t.string :city
      t.string :state
      t.string :zip

      t.timestamps
    end
  end
end
