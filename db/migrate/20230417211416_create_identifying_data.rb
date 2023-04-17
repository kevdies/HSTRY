class CreateIdentifyingData < ActiveRecord::Migration[6.1]
  def change
    create_table :identifying_data do |t|
      t.string :applicant_handedness
      t.integer :applicant_age
      t.integer :applicant_height_feet
      t.integer :applicant_height_inches
      t.integer :applicant_weight
      t.string :applicant_address1
      t.string :applicant_address2
      t.string :applicant_city
      t.string :applicant_state
      t.string :applicant_zip
      t.date :applicant_date_of_birth
      t.string :applicant_body_part
      t.date :applicant_date_of_injury
      t.string :applicant_employee_title
      t.string :applicant_employer

      t.timestamps
    end
  end
end
