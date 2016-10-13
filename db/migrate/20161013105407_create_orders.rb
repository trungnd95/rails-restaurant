class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.string :name
      t.string :phone
      t.string :address
      t.integer :number_of_foot_items

      t.timestamps
    end
  end
end
