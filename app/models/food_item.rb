class FoodItem < ApplicationRecord
  belongs_to :section
  has_many :comments, dependent: :destroy
  has_many :orders, dependent: :destroy

  validates :name, presence: true
  validates :description, presence: true, length: {minimum: 10}
  validates :price, presence: true, numericality: true
  validates :section_id, presence: true

end
