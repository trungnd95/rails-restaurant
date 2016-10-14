class AddFoodItemRefToOrders < ActiveRecord::Migration[5.0]
  def change
    add_reference :orders, :food_item, foreign_key: true
  end
end
