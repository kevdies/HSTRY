class CreatePriorWorkHistories < ActiveRecord::Migration[6.1]
  def change
    create_table :prior_work_histories do |t|
      t.string :denies_history
      t.string :prior_company_name
      t.date :prior_company_begin_date
      t.date :prior_company_end_date
      t.text :prior_company_job_description
      t.text :prior_company_exposure
      t.text :prior_company_physical_activities

      t.timestamps
    end
  end
end
