class CreateMedications < ActiveRecord::Migration[6.1]
  def change
    create_table :medications do |t|
      t.text :medications

      t.timestamps
    end
  end
end
