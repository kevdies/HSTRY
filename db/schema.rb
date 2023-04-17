# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_04_17_220526) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "adjusters", force: :cascade do |t|
    t.string "name"
    t.string "company"
    t.string "address1"
    t.string "address2"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "allergies", force: :cascade do |t|
    t.text "allergies"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "attentions", force: :cascade do |t|
    t.string "adjuster_name"
    t.string "adjuster_company"
    t.string "adjuster_address1"
    t.string "adjuster_address2"
    t.string "adjuster_city"
    t.string "adjuster_state"
    t.string "adjuster_zip"
    t.string "lawyer_name"
    t.string "lawyer_company"
    t.string "lawyer_address1"
    t.string "lawyer_address2"
    t.string "lawyer_city"
    t.string "lawyer_state"
    t.string "lawyer_zip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "cases", force: :cascade do |t|
    t.string "applicant_name"
    t.date "applicant_dob"
    t.string "applicant_employer"
    t.date "applicant_date_of_injury"
    t.string "applicant_claim_number"
    t.string "applicant_wcab_number"
    t.string "applicant_panel_qme_number"
    t.date "applicant_date_of_evaluation"
    t.string "evaluation_address1"
    t.string "evaluation_address2"
    t.string "evaluation_city"
    t.string "evaluation_state"
    t.string "evaluation_zip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "current_complaints", force: :cascade do |t|
    t.string "body_part"
    t.string "good_day_pain_level"
    t.string "bad_day_pain_level"
    t.string "pain_sensation"
    t.string "numbness_or_tingling"
    t.string "pain_radiating"
    t.string "pain_worsens"
    t.string "pain_lessens"
    t.string "pain_level_timing"
    t.string "pain_remedies"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "current_work_statuses", force: :cascade do |t|
    t.string "current_work_status"
    t.string "still_employed_by"
    t.string "current_disability_benefits"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "family_med_histories", force: :cascade do |t|
    t.text "family_med_history"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "identifying_data", force: :cascade do |t|
    t.string "applicant_handedness"
    t.integer "applicant_age"
    t.integer "applicant_height_feet"
    t.integer "applicant_height_inches"
    t.integer "applicant_weight"
    t.string "applicant_address1"
    t.string "applicant_address2"
    t.string "applicant_city"
    t.string "applicant_state"
    t.string "applicant_zip"
    t.date "applicant_date_of_birth"
    t.string "applicant_body_part"
    t.date "applicant_date_of_injury"
    t.string "applicant_employee_title"
    t.string "applicant_employer"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "injuries", force: :cascade do |t|
    t.string "at_time_of_injury"
    t.string "witnessed_by"
    t.string "reported_to"
    t.string "offered_treatment"
    t.string "initial_doctor"
    t.string "initial_clinic"
    t.date "initial_date_seen"
    t.string "initial_imaging"
    t.string "initial_meds"
    t.string "initial_treatment"
    t.string "initial_restrictions"
    t.string "follow_up_appointment"
    t.string "follow_up_doctor"
    t.string "follow_up_treatment"
    t.string "follow_up_meds"
    t.string "symptom_relief"
    t.string "surgeries"
    t.string "current_doctor"
    t.string "current_treatment_plans"
    t.string "ongoing_restrictions_prescribed_by"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "introductions", force: :cascade do |t|
    t.string "applicant_name"
    t.string "applicant_body_part"
    t.date "applicant_date_of_injury"
    t.string "historian"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "job_descriptions", force: :cascade do |t|
    t.string "app_job_title"
    t.string "app_company"
    t.date "app_employment_date_begin"
    t.date "app_employment_date_end"
    t.integer "work_hours_per_day"
    t.integer "work_hours_per_week"
    t.text "job_description"
    t.string "lifting_requirement"
    t.text "tools_and_body_parts"
    t.string "exposure_frequency"
    t.boolean "chemicals"
    t.boolean "noise"
    t.boolean "fumes"
    t.boolean "smoke"
    t.boolean "mold"
    t.boolean "dust"
    t.boolean "humidity"
    t.boolean "wetness"
    t.boolean "heights"
    t.boolean "temperature_variations"
    t.boolean "standing"
    t.boolean "walking"
    t.boolean "bending"
    t.boolean "stooping"
    t.boolean "kneeling"
    t.boolean "squatting"
    t.boolean "twisting"
    t.boolean "turning"
    t.boolean "pushing"
    t.boolean "pulling"
    t.boolean "lifting"
    t.boolean "carrying"
    t.boolean "climbing"
    t.boolean "reaching_at_or_above_shoulder_level"
    t.boolean "moving_head_up_down"
    t.boolean "gripping"
    t.boolean "grasping"
    t.boolean "other_gross_upper_extremity_movements"
    t.boolean "fine_hand_finger_manipulation"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "lawyers", force: :cascade do |t|
    t.string "name"
    t.string "company"
    t.string "address1"
    t.string "address2"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "medications", force: :cascade do |t|
    t.text "medications"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "other_problems", force: :cascade do |t|
    t.string "other_problems"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "past_med_histories", force: :cascade do |t|
    t.text "past_med_history"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "prior_non_work_injuries", force: :cascade do |t|
    t.text "prior_non_work_injuries"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "prior_work_histories", force: :cascade do |t|
    t.string "denies_history"
    t.string "prior_company_name"
    t.date "prior_company_begin_date"
    t.date "prior_company_end_date"
    t.text "prior_company_job_description"
    t.text "prior_company_exposure"
    t.text "prior_company_physical_activities"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "prior_work_injuries", force: :cascade do |t|
    t.text "prior_work_injuries"
    t.text "prior_work_injury_claims"
    t.text "claims_settled"
    t.text "resulting_restrictions"
    t.text "prior_recovery"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "social_histories", force: :cascade do |t|
    t.text "social_history"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "subsequent_injuries", force: :cascade do |t|
    t.string "subsequent_injuries"
    t.string "additional_subsequent_injury_information"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "surgical_histories", force: :cascade do |t|
    t.text "surgical_history"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
