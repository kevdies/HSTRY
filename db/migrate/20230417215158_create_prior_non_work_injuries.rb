class CreatePriorNonWorkInjuries < ActiveRecord::Migration[6.1]
  def change
    create_table :prior_non_work_injuries do |t|
      t.text :prior_non_work_injuries

      t.timestamps
    end
  end
end
