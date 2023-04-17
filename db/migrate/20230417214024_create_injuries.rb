class CreateInjuries < ActiveRecord::Migration[6.1]
  def change
    create_table :injuries do |t|
      t.string :at_time_of_injury
      t.string :witnessed_by
      t.string :reported_to
      t.string :offered_treatment
      t.string :initial_doctor
      t.string :initial_clinic
      t.date :initial_date_seen
      t.string :initial_imaging
      t.string :initial_meds
      t.string :initial_treatment
      t.string :initial_restrictions
      t.string :follow_up_appointment
      t.string :follow_up_doctor
      t.string :follow_up_treatment
      t.string :follow_up_meds
      t.string :symptom_relief
      t.string :surgeries
      t.string :current_doctor
      t.string :current_treatment_plans
      t.string :ongoing_restrictions_prescribed_by

      t.timestamps
    end
  end
end
