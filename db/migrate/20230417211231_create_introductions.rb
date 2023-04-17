class CreateIntroductions < ActiveRecord::Migration[6.1]
  def change
    create_table :introductions do |t|
      t.string :applicant_name
      t.string :applicant_body_part
      t.date :applicant_date_of_injury
      t.string :historian

      t.timestamps
    end
  end
end
