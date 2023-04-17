class CreateSubsequentInjuries < ActiveRecord::Migration[6.1]
  def change
    create_table :subsequent_injuries do |t|
      t.string :subsequent_injuries
      t.string :additional_subsequent_injury_information

      t.timestamps
    end
  end
end
