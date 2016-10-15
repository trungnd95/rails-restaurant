class Comment < ApplicationRecord
  belongs_to :food_item
  validates :body, presence: true
  validates :food_item_id, presence: true
end
