class CreateSurgicalHistories < ActiveRecord::Migration[6.1]
  def change
    create_table :surgical_histories do |t|
      t.text :surgical_history

      t.timestamps
    end
  end
end
