class Section < ApplicationRecord
  has_many :food_items

  def self.generate_defaults
    %w(Breakfast Lunch Dinner Drinks).each do |name|
      Section.find_or_create_by!(name: name)
    end
  end
end
