class CreateJobDescriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :job_descriptions do |t|
      t.string :app_job_title
      t.string :app_company
      t.date :app_employment_date_begin
      t.date :app_employment_date_end
      t.integer :work_hours_per_day
      t.integer :work_hours_per_week
      t.text :job_description
      t.string :lifting_requirement
      t.text :tools_and_body_parts
      t.string :exposure_frequency
      t.boolean :chemicals
      t.boolean :noise
      t.boolean :fumes
      t.boolean :smoke
      t.boolean :mold
      t.boolean :dust
      t.boolean :humidity
      t.boolean :wetness
      t.boolean :heights
      t.boolean :temperature_variations
      t.boolean :standing
      t.boolean :walking
      t.boolean :bending
      t.boolean :stooping
      t.boolean :kneeling
      t.boolean :squatting
      t.boolean :twisting
      t.boolean :turning
      t.boolean :pushing
      t.boolean :pulling
      t.boolean :lifting
      t.boolean :carrying
      t.boolean :climbing
      t.boolean :reaching_at_or_above_shoulder_level
      t.boolean :moving_head_up_down
      t.boolean :gripping
      t.boolean :grasping
      t.boolean :other_gross_upper_extremity_movements
      t.boolean :fine_hand_finger_manipulation

      t.timestamps
    end
  end
end
