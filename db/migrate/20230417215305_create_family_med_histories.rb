class CreateFamilyMedHistories < ActiveRecord::Migration[6.1]
  def change
    create_table :family_med_histories do |t|
      t.text :family_med_history

      t.timestamps
    end
  end
end
