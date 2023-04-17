class CreateCurrentComplaints < ActiveRecord::Migration[6.1]
  def change
    create_table :current_complaints do |t|
      t.string :body_part
      t.string :good_day_pain_level
      t.string :bad_day_pain_level
      t.string :pain_sensation
      t.string :numbness_or_tingling
      t.string :pain_radiating
      t.string :pain_worsens
      t.string :pain_lessens
      t.string :pain_level_timing
      t.string :pain_remedies

      t.timestamps
    end
  end
end
