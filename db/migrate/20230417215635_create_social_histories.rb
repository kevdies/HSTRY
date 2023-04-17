class CreateSocialHistories < ActiveRecord::Migration[6.1]
  def change
    create_table :social_histories do |t|
      t.text :social_history

      t.timestamps
    end
  end
end
