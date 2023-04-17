class CreateOtherProblems < ActiveRecord::Migration[6.1]
  def change
    create_table :other_problems do |t|
      t.string :other_problems

      t.timestamps
    end
  end
end
