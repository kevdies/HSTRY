class CreatePriorWorkInjuries < ActiveRecord::Migration[6.1]
  def change
    create_table :prior_work_injuries do |t|
      t.text :prior_work_injuries
      t.text :prior_work_injury_claims
      t.text :claims_settled
      t.text :resulting_restrictions
      t.text :prior_recovery

      t.timestamps
    end
  end
end
