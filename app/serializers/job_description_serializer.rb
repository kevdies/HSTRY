class JobDescriptionSerializer < ActiveModel::Serializer
  attributes :id, :app_job_title, :app_company, :app_employment_date_begin, :app_employment_date_end, :work_hours_per_day, :work_hours_per_week, :job_description, :lifting_requirement, :tools_and_body_parts, :exposure_frequency, :chemicals, :noise, :fumes, :smoke, :mold, :dust, :humidity, :wetness, :heights, :temperature_variations, :standing, :walking, :bending, :stooping, :kneeling, :squatting, :twisting, :turning, :pushing, :pulling, :lifting, :carrying, :climbing, :reaching_at_or_above_shoulder_level, :moving_head_up_down, :gripping, :grasping, :other_gross_upper_extremity_movements, :fine_hand_finger_manipulation
end