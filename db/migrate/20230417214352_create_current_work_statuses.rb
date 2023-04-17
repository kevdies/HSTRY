class CreateCurrentWorkStatuses < ActiveRecord::Migration[6.1]
  def change
    create_table :current_work_statuses do |t|
      t.string :current_work_status
      t.string :still_employed_by
      t.string :current_disability_benefits

      t.timestamps
    end
  end
end
