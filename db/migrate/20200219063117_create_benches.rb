class CreateBenches < ActiveRecord::Migration[5.2]
  def change
    create_table :benches do |t|
      t.string :description
      t.float :lng
      t.float :lat
      
      t.timestamps
    end
  end
end
