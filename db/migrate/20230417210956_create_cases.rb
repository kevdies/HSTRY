class CreateCases < ActiveRecord::Migration[6.1]
  def change
    create_table :cases do |t|
      t.string :applicant_name
      t.date :applicant_dob
      t.string :applicant_employer
      t.date :applicant_date_of_injury
      t.string :applicant_claim_number
      t.string :applicant_wcab_number
      t.string :applicant_panel_qme_number
      t.date :applicant_date_of_evaluation
      t.string :evaluation_address1
      t.string :evaluation_address2
      t.string :evaluation_city
      t.string :evaluation_state
      t.string :evaluation_zip

      t.timestamps
    end
  end
end
