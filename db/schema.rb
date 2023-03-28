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

ActiveRecord::Schema.define(version: 2023_03_28_151346) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

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

end
