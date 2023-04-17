class CreatePastMedHistories < ActiveRecord::Migration[6.1]
  def change
    create_table :past_med_histories do |t|
      t.text :past_med_history

      t.timestamps
    end
  end
end
