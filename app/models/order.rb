class Order < ApplicationRecord
  belongs_to :food_item
  validates :name, presence: true
  validates :email, presence: true
  validates :address, presence: true
end
